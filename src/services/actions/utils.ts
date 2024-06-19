
import { headers } from 'next/headers'

export function getHostname() {
    const headersList = headers();
    const hostName = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto');
    const host = `${protocol}://${hostName}`
    return host
}