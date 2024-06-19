import Image from 'next/image'
import SearchBar from './Searchbar'
import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { AspectRatio } from '../ui/aspect-ratio'
import Link from 'next/link'
import { getHostname } from '@/services/actions/utils'
export function AvatarDemo() {
    return (
        <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}



export default function Header({ user }: any) {
    const { username } = user
    const userLoggedIn = (username === undefined || username === process.env.NEXT_PUBLIC_GUEST_USER) ? false : true
    const hostname = getHostname()
    return (
        <header className="flex z-50 w-screen h-16 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6 fixed">
            <div className="container flex justify-between items-stretch">

                <div className=' w-40'>
                    <AspectRatio >
                        <Image
                            className='h-full w-full'
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/livebench.png`}
                            fill
                            style={{ objectFit: "contain" }}
                            alt="company logo"
                        />
                    </AspectRatio>

                </div>
                <div className=' flex-grow max-w-[500px]'>
                    <SearchBar />
                </div>

                <div className='flex items-center gap-2'>
                    {
                        userLoggedIn ? <AvatarDemo /> :
                            <>
                                <Link href={`${hostname}/login?%3Fno_login=true`}>
                                    <Button
                                        className=' bg-transparent text-black border-2 rounded-full px-6'
                                    >
                                        <Label className=' cursor-pointer'>Login</Label>
                                    </Button>
                                </Link>

                                <Link href={`${hostname}/register`}>
                                    <Button
                                        className='  bg-primary  rounded-full  px-6'
                                    // onClick={() => window.open(`${window.location.origin}/register`, "_self")}

                                    >
                                        <Label className=' cursor-pointer'>Create Free Account</Label>
                                    </Button>
                                </Link>

                            </>
                    }
                </div>

            </div>
        </header>
    )
}