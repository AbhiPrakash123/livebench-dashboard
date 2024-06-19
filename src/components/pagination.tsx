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

function getPagination(currentPage: number, totalPages: number) {

    let pages = [];
    if (totalPages <= 9) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        pages.push(1);
        if (currentPage > 4) {
            pages.push('...');
        }

        let start = Math.max(2, currentPage - 2);
        let end = Math.min(totalPages - 1, currentPage + 2);

        if (currentPage <= 4) {
            end = 5;
        }
        if (currentPage >= totalPages - 3) {
            start = totalPages - 4;
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        if (currentPage < totalPages - 3) {
            pages.push('...');
        }
        pages.push(totalPages);
    }

    return pages;
}
export function BoardPagination({ page, total_page }: any) {
    console.table({ page, total_page })
    const searchParams = useSearchParams()

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString())
        if (page) {
            params.set('page', page)
            window.history.pushState(null, '', `?${params.toString()}`)
        }

    }, [])

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

    const _pages = getPagination(activePage, total_page)

    const pages = _pages.map((item, index) => {
        return item === '...' ?
            <PaginationItem key={index}>
                <PaginationEllipsis />
            </PaginationItem>
            :
            <PaginationItem key={index} className=" cursor-pointer">
                <PaginationLink onClick={() => changePage(item)} isActive={activePage === item ? true : false}>{item}</PaginationLink>
            </PaginationItem>
    })

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
