"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import copy from "@/public/copy.json";

function NavLink({ href, children }: Readonly<{ href: string; children: React.ReactNode }>) {
    const pathname = usePathname();
    const isActive = pathname.startsWith(href);

    return (
        <Link href={href} className={twMerge(isActive ? " text-black bg-neutral-50" : "text-neutral-700", "hover:text-black hover:bg-neutral-100 transition-all font-semibold text-center px-4 py-2 rounded")}>
            {children}
        </Link>
    );
}

function MobileMenu() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="lg:hidden">
            <button title="Menu" type="button" onClick={() => setIsOpen(!isOpen)} className="p-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    )}
                </svg>
            </button>
            {isOpen && (
                <nav className="absolute top-0 right-0 left-0 bg-white z-10">
                    {
                        copy.announcement !== "" && copy.announcement !== undefined ? (
                            <div className="bg-gradient-to-r from-rose-500 to-rose-600 w-full text-center text-white p-2">
                                {copy.announcement}
                            </div>
                        ) : null
                    }
                    <div className="flex flex-col gap-2 p-4">
                        <div className="flex items-center justify-between gap-4">
                            <Link href="/" className="text-2xl font-black lg:hidden flex items-center gap-4">
                                <img src="/images/logo.png" alt="Stanford Running Club" className="w-8 h-8" />
                                Stanford Run Club
                            </Link>
                            <button title="Menu" type="button" onClick={() => setIsOpen(!isOpen)} className="p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/runs">Runs</NavLink>
                        <NavLink href="/team">Team</NavLink>
                        <Link href="/contact" className="text-center font-semibold px-4 py-2 bg-rose-500 hover:bg-rose-600 transition-colors rounded text-white">
                            Get In Touch!
                        </Link>
                    </div>
                </nav>
            )}
        </div>
    );
}

export function Header() {
    return (
        <>
            {
                copy.announcement !== "" && copy.announcement !== undefined ? (
                    <div className="bg-gradient-to-r from-rose-500 to-rose-600 w-full text-center text-white p-2">
                        {copy.announcement}
                    </div>
                ) : null
            }
            <header className="flex items-center justify-between p-4 max-w-5xl mx-auto w-full">
                <Link href="/" className="text-2xl font-black hidden lg:flex items-center gap-4">
                    <img src="/images/logo.png" alt="Stanford Running Club" className="w-8 h-8" />
                    Stanford Running Club
                </Link>
                <Link href="/" className="text-2xl font-black lg:hidden flex items-center gap-4">
                    <img src="/images/logo.png" alt="Stanford Running Club" className="w-8 h-8" />
                    Stanford Run Club
                </Link>
                <nav className="hidden lg:flex items-center gap-2">
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/runs">Runs</NavLink>
                    <NavLink href="/team">Team</NavLink>
                    <Link href="/contact" className="text-center font-semibold px-4 py-2 bg-rose-500 hover:bg-rose-600 transition-colors rounded text-white">
                        Get In Touch!
                    </Link>
                </nav>
                <MobileMenu />
            </header>
        </>
    );
}

export function Footer() {
    return (
        <footer className="flex items-center justify-center p-4 my-16">
            <p>&copy; 2024 Stanford Running Club</p>
        </footer>
    );
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}