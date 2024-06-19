import Header from "@/components/header";
import LabFilter from "@/components/filter-bar";
import BoardListing from "@/components/labListing";
import { BoardPagination } from "@/components/pagination";
import Footer from "@/components/pages/footer";
import HeroPage from "@/components/pages/hero";
import { getForms, getCategories } from "@/services/actions/labs";
import { getUserInfo } from "@/services/actions/auth";

import { cookies, headers } from 'next/headers'
import { getCookie } from 'cookies-next';

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const { category, page } = searchParams
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

  const accessToken = getCookie('accessToken', { cookies }) as string;
  const useData = await getUserInfo(accessToken)

  return (
    <main className="p-0 m-0 gap-6 flex flex-col">
      <Header user={useData} />
      <HeroPage />
      <LabFilter selected={category} categories={categories} />
      <BoardListing forms={resp.data} />
      <BoardPagination page={resp.page} total_page={resp.total_page} />
      <Footer />
    </main>
  );
}
