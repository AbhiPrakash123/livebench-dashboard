"use client"
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Card } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState, useCallback, useEffect } from 'react'
import { Search } from "lucide-react"
import { searchAPI } from "@/utils/api"
import debounce from "lodash/debounce";

export function AvatarDemo() {
    return (
        <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

const TenxerlabsLogo = () => {
    return (
        <div className='h-full w-auto'>
            <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/tenxerlabs_blue_logo.webp`}
                width={0}
                height={0}
                layout='responsive'
                alt="Picture of the author"
            />
        </div>

    )
}

const SearchBar = () => {
    const [open, setOpen] = useState(false)
    const [searchData, setSearchData] = useState([])

    async function handleSearch(query: any) {
        if (query === "") {
            setSearchData([])
            return
        }
        const data = await searchAPI(query)
        setSearchData(() => data)
    }
    const debouncedHandleSearch = useCallback(debounce(handleSearch, 200), []);

    return (
        <div className=" z-50 w-full h-full flex items-center text-center">
            <div className=' w-full relative'>
                <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        // value={searchData}
                        style={{ width: "100%" }}
                        className={`focus-visible:ring-transparent appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3 ${open ? "rounded-lg rounded-b-none border-b-0" : ""}`}
                        placeholder="Search products..."
                        type="search"
                        onChange={(e) => debouncedHandleSearch(e.target.value)}
                        onFocus={() => setOpen(true)}
                        onBlur={() => setOpen(false)}
                    />
                </div>
                {
                    open && <Card
                        className={`border-t-0 max-h-[360px] overflow-y-auto grid grid-cols-3 gap-3 rounded-lg rounded-t-none absolute w-full p-3`}
                        onMouseDown={e => e.preventDefault()}
                    >
                        {
                            searchData.map((item: any, index) =>
                                <Card
                                    key={index}
                                    className=' flex flex-col gap-2 cursor-pointer max-h-32 items-start'
                                    onClick={() => window.open(`https://livebench.tenxerlabs.com/app/${item.uniq_name}`, "_blank")}
                                >
                                    <Image
                                        src={item.logo_url}
                                        width={500}
                                        height={0}
                                        alt="..."
                                    >
                                    </Image>
                                    <Label className='px-3 font-semibold cursor-pointer'>{item.uniq_name}</Label>

                                    <Label className='px-3 cursor-pointer'>{item.name}</Label>
                                </Card>
                            )
                        }

                    </Card>
                }
            </div>
        </div>
    )
}
export default function Header() {
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    useEffect(() => {
        const user = localStorage.getItem('_currentUser')
        if (user) {
            const userData = JSON.parse(user)
            console.log(userData)
            if (userData.data.username !== process.env.NEXT_PUBLIC_GUEST_USER) {
                setUserLoggedIn(true)
            }
        }

    }, [])

    return (
        <header className="flex h-16 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6">
            <div className="container flex justify-between items-stretch">

                <div className=' w-14 flex items-center'>
                    <TenxerlabsLogo />
                </div>
                <div className=' flex-grow max-w-[500px]'>
                    <SearchBar />
                </div>

                <div className='flex items-center gap-2'>
                    {
                        userLoggedIn ? <AvatarDemo /> :
                            <>
                                <Button 
                                className=' bg-transparent text-black border-2 rounded-full px-6'
                                onClick={() => window.open(`${window.location.origin}/login?%3Fno_login=true`,"_self")}
                                >
                                    <Label className=' cursor-pointer'>Login</Label>
                                </Button>
                                <Button 
                                className='  bg-primary  rounded-full  px-6'
                                onClick={() => window.open(`${window.location.origin}/register`,"_self")}

                                >
                                    <Label className=' cursor-pointer'>Create Free Account</Label>
                                </Button>
                            </>


                    }
                </div>

            </div>
        </header>
    )
}