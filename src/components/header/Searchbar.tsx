"use client"
import { Input } from "@/components/ui/input"
import { useState, useCallback } from 'react'
import { Card } from '@/components/ui/card'
import { Search } from "lucide-react"
import { searchAPI } from "@/utils/api"
import debounce from "lodash/debounce";
import { Label } from "@/components/ui/label"
import Image from 'next/image'

export default function SearchBar() {
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
                    open && <Card
                        className={`border-t-0 max-h-[360px] overflow-y-auto grid grid-cols-3 gap-3 rounded-lg rounded-t-none absolute w-full p-3`}
                        onMouseDown={e => e.preventDefault()}
                    >
                        {
                            searchData.length > 0 ?
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
                                    </Card>)
                                : <Label className='flex items-center'>Not Found</Label>
                        }

                    </Card>
                }
            </div>
        </div>
    )
}