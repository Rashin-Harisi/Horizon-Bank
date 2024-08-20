"use client"

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'
import PlaidLink from './PlaidLink'
import { BiCategoryAlt } from "react-icons/bi";

const Sidebar = ({ user }: SidebarProps) => {
    const pathName = usePathname()
    const isActiveCategory = pathName === "/top-category" || pathName.startsWith("/top-category")

    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link href='/' className='mb-12 cursor-pointer flex items-center'>
                    <Image src='/icons/logo.svg' width={34} height={34} alt='logo'
                        className='size-[24px] max-xl:size-14' />
                    <h1 className='sidebar-logo'>Horizon</h1>
                </Link>
                {sidebarLinks.map((item) => {
                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                    return (
                        <Link href={item.route} key={item.label} className={cn("sidebar-link", { "bg-bank-gradient": isActive })}>
                            <div className='relative size-6'>
                                <Image src={item.imgURL} alt={item.label} fill
                                    className={cn({ 'brightness-[3] invert-0': isActive })} />
                            </div>
                            <p className={cn("sidebar-label", { "!text-white": isActive })}>{item.label}</p>
                        </Link>

                    )
                })}
                <Link href="/top-category" key="category" className={cn("sidebar-link-category", { "bg-bank-gradient": isActiveCategory})}>
                    <div className='relative size-6'>
                        <Image src='/icons/category.svg' alt="category" fill
                            className={cn({ 'brightness-[3] invert-0': isActiveCategory })} />
                    </div>
                    <p className={cn("sidebar-label", { "!text-white": isActiveCategory })}>Top Categories</p>
                </Link>

                <PlaidLink user={user} />
            </nav>
            <Footer user={user} type='desktop' />
        </section>
    )
}

export default Sidebar