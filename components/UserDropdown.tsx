'use client';

import React from 'react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuPortal
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {LogOut} from "lucide-react";
import NavItems from "@/components/NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignout = async () => {
        router.push("/sign-in");
    }

    const user = { name: 'John', email: 'contact@me.com' };

    return (
        <DropdownMenu modal={false}>
            {/* Trigger */}
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center gap-3 text-gray-300 hover:text-yellow-500"
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>

                    <div className="hidden md:flex flex-col items-start max-w-[120px]">
                        <span className="text-sm font-medium text-gray-200 truncate">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>

            {/* ✅ FIXED DROPDOWN */}
                <DropdownMenuContent
                    align="end"
                    sideOffset={8}
                    className="w-56 text-gray-200 bg-gray-800 border border-gray-600"
                >
                    <DropdownMenuLabel>
                        <div className="flex items-center gap-3 p-2">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                    {user.name[0]}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col max-w-[140px]">
                                <span className="text-sm font-medium truncate">
                                    {user.name}
                                </span>
                                <span className="text-xs text-gray-400 truncate">
                                    {user.email}
                                </span>
                            </div>
                        </div>
                    </DropdownMenuLabel>


                    <DropdownMenuSeparator className='bg-gray-600' />

                    <DropdownMenuItem
                        onClick={handleSignout}
                        className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
                    >
                        <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
                        Logout
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className='hidden sm:block bg-gray-600' />
                    <nav className='sm:hidden'>
                            <NavItems />
                    </nav>
                </DropdownMenuContent>

        </DropdownMenu>
    )
}

export default UserDropdown