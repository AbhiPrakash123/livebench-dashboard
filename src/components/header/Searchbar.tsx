"use client"
import { Input } from "@/components/ui/input"
import { useState, useCallback } from 'react'
import { Card } from '@/components/ui/card'
import { Search } from "lucide-react"
import { searchAPI } from "@/utils/api"
import debounce from "lodash/debounce";
import { Label } from "@/components/ui/label"
import Image from 'next/image'
import { AspectRatio } from "../ui/aspect-ratio"
import Link from 'next/link'

const ShowMatchingLabs = ({ searchData }: any) => {
    return (
        <div className="">
            <Card
                className={`border-t-0  rounded-lg rounded-t-none absolute w-full p-3`}
                onMouseDown={e => e.preventDefault()}
            >
                <Card className=" bg-secondary rounded-md border-0 my-2 text-start px-2 py-1 "><Label>Matching Labs</Label></Card>
                <div >
                    {
                        searchData.length > 0 ?
                            <div className="max-h-[360px] overflow-y-auto grid grid-cols-3 gap-3">

                                {searchData.map((item: any, index: number) =>
                                    <Link
                                        key={index}
                                        className=' border rounded-md flex flex-col gap-4 cursor-pointer items-start p-3'
                                        href={`${window.location.origin}/app/${item.uniq_name}`}
                                        target="_blank"
                                    >
                                        <AspectRatio ratio={4 / 1}>
                                            <Image
                                                src={item.logo_url}
                                                fill
                                                sizes="(max-width: 768px) 100vw"
                                                style={{ objectFit: "contain", paddingLeft: "0px", marginLeft: "0px" }}
                                                alt="..."
                                            >
                                            </Image>
                                        </AspectRatio>

                                        {/* <Label className='px-3 font-semibold cursor-pointer'>{item.uniq_name}</Label> */}

                                        <Label className='cursor-pointer font-bold text-pretty text-start'>{item.name}</Label>
                                        <Label className='cursor-pointer opacity-50 text-pretty text-start'>{item.category_ids ? item.category_ids.map((item: any) => item.name).join(" , ") : ""}</Label>
                                    </Link>)}

                            </div>
                            : <Label className='flex items-center justify-center py-6 font-bold '>No Lab Found</Label>
                    }
                </div>


            </Card>
        </div>
    )
}
export default function SearchBar() {
    const [open, setOpen] = useState(false)
    const [searchData, setSearchData] = useState([])

    async function handleSearch(query: any) {
        if (query === "") {
            setSearchData([])
            return
        }
        const data = await searchAPI(query)
        console.log(data)
        setSearchData(() => data)
    }
    const debouncedHandleSearch = useCallback(debounce(handleSearch, 200), []);

    return (
        <div className=" z-50 w-full h-full flex items-center text-center">
            <div className=' w-full relative '>
                <div className="relative w-full ">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        // value={searchData}
                        style={{ width: "100%" }}
                        className={`rounded-full focus-visible:ring-transparent appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3 ${open ? "rounded-lg rounded-b-none border-b-0" : ""}`}
                        placeholder="Search for labs..."
                        type="search"
                        onChange={(e) => debouncedHandleSearch(e.target.value)}
                        onFocus={() => setOpen(true)}
                        onBlur={() => setOpen(false)}
                    />
                </div>
                {
                    open && <ShowMatchingLabs searchData={searchData} />
                }
            </div>
        </div>
    )
}