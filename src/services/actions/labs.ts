"use server"

export async function getForms(page: number, category: any, subdomain: String = "all") {
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
    } catch (err) {
        // console.error(err)
    }

    return { data: [], total_page: 0 }
}

export async function getCategories() {
    const BASE_URL = process.env.NEXT_PUBLIC_API_SERVER;
    try {
        const res = await fetch(`${BASE_URL}/categories`);
        const resp = await res.json();
        if (resp.success) return resp.data
    } catch (err) {
        // console.error(err)
    }

    return []
}
