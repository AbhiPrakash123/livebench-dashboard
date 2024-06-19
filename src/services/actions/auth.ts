"use server"

export async function getUserInfo(accessToken: any) {
    // if accessToken
    if(!accessToken || accessToken === "null") return {}
    const BASE_URL = process.env.LIVEBENCH_API_SERVER;
    const token = accessToken.replace(/^["']+|["']+$/g, '')
    const res: any = await fetch(`${BASE_URL}/users/current_user`, {
        method: "GET", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Token": token,
        },
    });
    const data = await res.json()
    if(data.error) return {}
    const userInfo = {
        username: data.username,
        email: data.email,
        roles: data.role.map((item: any) => item.name)
    }
    return userInfo
}