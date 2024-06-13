"use client"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from 'next/navigation'

export function BoardPagination({ page, total_page }: any) {
    console.table({ page, total_page })
    const searchParams = useSearchParams()

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString())
        if(page){
            params.set('page', page)
            window.history.pushState(null, '', `?${params.toString()}`)
        }

    },[])

    const changePage = (page: any) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', page)
        window.history.pushState(null, '', `?${params.toString()}`)
        window.location.reload()
    }

    const [activePage, setActivePage] = useState(Number(page))
    const [end, setEnd] = useState(total_page)

    const previous = () => {
        if (activePage == 1) return
        changePage(activePage - 1)

    }
    const next = () => {
        if (activePage == total_page) return
        changePage(activePage + 1)
    }

    const pages = []
    if (total_page > 9) {
        for (let i = activePage; i < activePage + 3; i++) {
            pages.push(
                <PaginationItem key={i} className=" cursor-pointer">
                    <PaginationLink onClick={() => changePage(i)} isActive={activePage === i ? true : false}>{i}</PaginationLink>
                </PaginationItem>
            )
        }
        pages.push(<PaginationItem key={4567892}>
            <PaginationEllipsis />
        </PaginationItem>)
        pages.push(<PaginationItem key={74867438} className=" cursor-pointer">
            <PaginationLink onClick={() => changePage(end)} isActive={end === page ? true : false}>{end}</PaginationLink>
        </PaginationItem>)
    } else {
        for (let i = 1; i <= total_page; i++) {
            pages.push(
                <PaginationItem key={i} className=" cursor-pointer">
                    <PaginationLink onClick={() => changePage(i)} isActive={activePage === i ? true : false}>{i}</PaginationLink>
                </PaginationItem>
            )
        }
    }


    return (
        <Pagination className=" my-14">
            <PaginationContent>

                <PaginationItem className=" cursor-pointer">
                    <PaginationPrevious onClick={previous} />
                </PaginationItem>
                {
                    pages
                }
                <PaginationItem className=" cursor-pointer">
                    <PaginationNext onClick={next} />
                </PaginationItem>

            </PaginationContent>
        </Pagination>
    )
}
