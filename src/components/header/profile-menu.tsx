"use client"
import * as React from "react"
import { Calendar, UserRound, LogOut, Trash, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deleteCookie } from 'cookies-next';

export default function ProfileMenu({user}:any) {
    const {username} = user
    const [open, setOpen] = React.useState(false)
    const logoutSession = () => {
        localStorage.removeItem("_currentUser");
        deleteCookie("accessToken")
        window.location.reload()
    }
    return (
        <div className="flex w-full flex-col items-start justify-between px-4 py-3 sm:flex-row sm:items-center">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className=" rounded-full" >
                        <UserRound />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuGroup>
                        <DropdownMenuItem className=" capitalize">
                            <User className="mr-2 h-4 w-4" />
                            {username}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Calendar className="mr-2 h-4 w-4" />
                            Reservations
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="text-red-600" onClick={() => logoutSession()}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}