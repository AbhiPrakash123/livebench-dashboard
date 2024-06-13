export async function searchAPI(data: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_SERVER;
    const res = await fetch(`${API_URL}/search?lab=${data}`);
    const resp = await res.json();
    if (resp.success) return resp.data
    return []
}

