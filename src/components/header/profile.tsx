import Link from 'next/link'
import { getHostname } from '@/services/actions/utils'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import ProfileMenu from './profile-menu'

export function LoginRegister() {
    const hostname = getHostname()
    return (
        <>
            <Link href={`${hostname}/login?%3Fno_login=true`}>
                <Button
                    className='border-2 rounded-full px-6'
                    variant="outline"
                >
                    <Label className=' cursor-pointer'>Login</Label>
                </Button>
            </Link>

            <Link href={`${hostname}/register`}>
                <Button
                    className='rounded-full  px-6'
                // onClick={() => window.open(`${window.location.origin}/register`, "_self")}
                >
                    <Label className=' cursor-pointer'>Create Free Account</Label>
                </Button>
            </Link>
        </>
    )
}


export default function UserProfile({ user }: any) {
    const { username } = user
    const userLoggedIn = (username === undefined || username === process.env.NEXT_PUBLIC_GUEST_USER) ? false : true
    console.log("[ INFO ] USER LOGGED :", userLoggedIn)
    return (
        <div className='flex items-center gap-2'>
            {
                userLoggedIn ? <ProfileMenu user={user} /> : <LoginRegister />
            }
        </div>
    )
}