"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MobileNav = ({user}:MobileNavProps) => {
    const pathName = usePathname()
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image src='/icons/hamburger.svg' width={30} height={30} alt="menu"
                        className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="bg-white border-none">
                    <Link href='/' className="flex items-center gap-1 px-4 cursor-pointer">
                        <Image src='/icons/logo.svg' width={34} height={34} alt="logo" />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild >
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((item) => {
                                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                                    return (
                                        <SheetClose asChild key={item.route}> 
                                            <Link href={item.route} key={item.label} className={cn("mobilenav-sheet_close w-full", { "bg-bank-gradient": isActive })}>
                                                <div className='relative size-6'>
                                                    <Image src={item.imgURL} alt={item.label} fill
                                                        className={cn({ 'brightness-[3] invert-0': isActive })} />
                                                </div>
                                                <p className={cn("text-16 font-semibold text-black-2", { "!text-white": isActive })}>{item.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                {user.firstName}
                            </nav>
                        </SheetClose>
                        Footer
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav