"use client"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useSearchParams } from 'next/navigation'
import { Separator } from "@/components/ui/separator"
import { ListFilter, SearchCheck } from "lucide-react"
import { useRef, useState } from "react"
import { ArrowRight, ArrowLeft, Info } from "lucide-react"
import FilterType from "./type"

const CategoryBadge = ({ data, selected, onClick }: any) => {
    return (
        <Card onClick={onClick} className={` rounded-full cursor-pointer shadow-none border-none hover:bg-secondary ${selected ? " bg-[#F4F4F5] text-black" : ""}`}>
            <Label className="cursor-pointer mx-4 my-3 inline-block text-center" >{data.name}</Label>
        </Card>

    )
}
const LabFilter = ({ selected, categories }: any) => {
    const scrollContainerRef: any = useRef(null);
    const [showRightArrow, setShowRightArrow] = useState(true)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const all = { name: 'All' }

    if(selected.length === 0) selected.push(all.name)

    const handleScroll = (direction: string) => {

        const scrollContainer: any = scrollContainerRef.current;
        const scrollAmount = 250;

        if (direction === 'left') {
            scrollContainer?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            setShowRightArrow(true)
            if (scrollContainer.scrollLeft <= 0) {
                console.log("Reached the start");
                setShowLeftArrow(false)
            }
        } else {
            scrollContainer?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            setShowLeftArrow(true)
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                console.log("Reached the end");
                setShowRightArrow(false)
            }
        }
    };

    const searchParams = useSearchParams()

    const changeCategory = (newCategory: any) => {
        const params = new URLSearchParams(searchParams.toString())
        params.append('category', newCategory)
        window.history.pushState(null, '', `?${params.toString()}`)
        window.location.reload()
    }
    const deleteCategory = (delCategory: any) => {
        const params = new URLSearchParams(searchParams.toString())
        const categories = params.getAll('category').filter(item => item !== delCategory);
        params.delete('category')
        categories.forEach(cat => params.append('category', cat))
        window.history.pushState(null, '', `?${params.toString()}`)
        window.location.reload()
    }

    const allCategory = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.delete('category')
        window.history.pushState(null, '', `?${params.toString()}`)
        window.location.reload()
    }

    // var selectedItem = categories.filter((item: any) => item.name === selected)[0]
    
    // if (!selectedItem?.name) selectedItem = all

    return (
        <div className="container">
            <div className="w-full flex flex-col items-center gap-2">
                <div className=" text-primary flex items-center">
                    <SearchCheck />
                    <Label >Explore labs</Label>
                </div>
                <Label className="scroll-m-20 mb-10 text-3xl font-semibold tracking-tight lg:text-5xl text-center">
                    Discover the Ideal IC for Your Design with Ease
                </Label>
            </div>

            <div className="flex justify-between items-center my-5 w-full">
                <FilterType />
                {showLeftArrow && <div className="h-full flex items-center content-center mr-4">
                    <ArrowLeft className=" cursor-pointer" onClick={() => handleScroll('left')} />
                </div>}
                <div className=" flex-grow " ref={scrollContainerRef} style={{ overflow: 'hidden' }}>
                    <div
                        className="flex whitespace-nowrap h-full px-6"

                    >
                        <CategoryBadge
                            key={124325}
                            data={all}
                            selected={selected.includes(all.name) ? true : false}
                            onClick={() => allCategory()}
                        />
                        {
                            categories.map((item: any, index: number) =>
                                <CategoryBadge
                                    key={index}
                                    data={item}
                                    selected={selected.includes(item.name) ? true : false}
                                    onClick={selected.includes(item.name) ? () => deleteCategory(item.name) : () => changeCategory(item.name)}
                                />
                            )
                        }
                    </div>
                </div>
                {showRightArrow && <div className="h-full flex items-center content-center ml-4">
                    <ArrowRight className=" cursor-pointer" onClick={() => handleScroll('right')} />
                </div>}
                <div className="flex gap-3">
                    <Separator orientation="vertical" />
                    <Card className={`flex items-center p-2 cursor-pointer`}>
                        <ListFilter className="cursor-pointer" />
                    </Card>
                </div>
            </div>
            <Card className="flex  gap-2 bg-secondary rounded-md border-0 px-2 py-1 ">
                <Label className="flex items-center gap-2"><Info />Add filters for each category level to find the best lab of your need</Label>
            </Card>

        </div>

    )
}

export default LabFilter