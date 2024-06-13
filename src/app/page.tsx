import Header from "@/components/pages/header";
import LabFilter from "@/components/labFilters";
import BoardListing from "@/components/labListing";
import { BoardPagination } from "@/components/pagination";
import Footer from "@/components/pages/footer";
import HeroPage from "@/components/pages/hero";
import { cookies, headers } from 'next/headers'

async function getForms(page: number, category: any, subdomain: String = "all") {
  const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER;
  const reqData = {
    publish: true,
    page,
    category,
    subdomain
  }
  const apiData = {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  }
  try {
    const res = await fetch(`${BASE_URL}/forms`, apiData);
    const data = await res.json();
    if (data.success) return data.data
  }catch(err){
    console.error(err)
  }
  
  return { data: [], total_page: 0 }
}

async function getCategories() {
  const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER;
  try{
    const res = await fetch(`${BASE_URL}/categories`);
    const resp = await res.json();
    if (resp.success) return resp.data
  }catch(err){
    console.error(err)
  }
  
  return []
}



export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { category, page, token } = searchParams
  const currentPage = page ? Number(page) : 1

  const headersList = headers();
  const host = headersList.get('host');
  const subDomains = host ? host.split(".") : []
  let resp;
  if (subDomains.length > 1) {
    resp = await getForms(currentPage, category, subDomains[0])
  } else {
    resp = await getForms(currentPage, category)

  }
  const categories = await getCategories()
  const cookieStore = cookies()



  return (
    <main className="p-0 m-0 gap-6 flex flex-col">
      <Header />
      <HeroPage />
      <LabFilter selected={category} categories={categories} />
      <BoardListing forms={resp.data} />
      <BoardPagination page={resp.page} total_page={resp.total_page} />
      <Footer />
    </main>
  );
}
