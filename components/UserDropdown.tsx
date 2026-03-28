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
    DropdownMenuPortal // ✅ ADD THIS
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserDropdown = () => {
    const router = useRouter();

    const handleSignout = async () => {
        router.push("/sign-in");
    }

    const user = { name: 'John', email: 'contact@me.com' };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>

                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>

            {/* ✅ THIS FIXES CLIPPING */}
            <DropdownMenuContent className="text-gray-400">
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 p-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <div className="flex items-center gap-3 p-3">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                        {user.name[0]}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col">
                            <span className="text-base font-medium text-gray-200">
                                {user.name}
                            </span>
                                    <span className="text-sm text-gray-500">
                                {user.email}
                            </span>
                                </div>
                            </div>
                        </Avatar>

                        <div className="flex flex-col">
                            <span className="text-base font-medium text-gray-200">
                                {user.name}
                            </span>
                            <span className="text-sm text-gray-500">
                                {user.email}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown