import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

import {searchStocks} from "@/lib/actions/finnhub.actions";
import UserDropdown from "@/components/UserDropdown";

const Header =  () => {


    return (
        <header className="sticky top-0 z-50 w-full bg-gray-800">
            <div className="w-full max-w-screen-2xl mx-auto px-6 flex items-center justify-between h-[70px]">
                <Link href="/">
                    <Image
                        src="/assets/icons/logo.png"
                        alt="UpStocks logo"
                        width={140}
                        height={32}
                        className="h-auto w-auto cursor-pointer"
                    />
                </Link>

                <nav className="hidden sm:block">
                    <NavItems />
                </nav>

                <UserDropdown />
            </div>
        </header>
    )
}
export default Header