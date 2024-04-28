"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

function NavLink({ href, children }: Readonly<{ href: string; children: React.ReactNode }>) {
    const pathname = usePathname();
    const isActive = pathname.startsWith(href);

    return (
        <Link href={href} className={twMerge(isActive ? " text-black" : "text-neutral-700", "hover:text-black transition-all font-semibold w-16 text-center")}>
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
                <nav className="flex flex-col gap-4 absolute top-16 right-0 left-0 bg-white p-4 z-10">
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/runs">Runs</NavLink>
                    <NavLink href="/team">Team</NavLink>
                    <Link href="/contact" className="px-4 py-2 bg-neutral-800 rounded text-white">
                        Get in touch!
                    </Link>
                </nav>
            )}
        </div>
    );
}

export function Header() {
    return (
        <>
            <div className="bg-gradient-to-r from-rose-500 to-rose-600 w-full text-center text-white p-2">
                Here for admit weekend, Friday 4/26? Join us at {" "}
                <Link href="https://maps.app.goo.gl/vJHZpNA43oHq7Q367" className="underline">The Claw</Link> for our fountain hopping run.
            </div>

            <header className="flex items-center justify-between p-4 max-w-5xl mx-auto w-full">
                <Link href="/" className="text-2xl font-black hidden lg:flex items-center gap-4">
                    <img src="/images/logo.png" alt="Stanford Running Club" className="w-8 h-8" />
                    Stanford Running Club
                </Link>
                <Link href="/" className="text-2xl font-black lg:hidden flex items-center gap-4">
                    <img src="/images/logo.png" alt="Stanford Running Club" className="w-8 h-8" />
                    Stanford Run Club
                </Link>
                <nav className="hidden lg:flex items-center gap-4">
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/runs">Runs</NavLink>
                    <NavLink href="/team">Team</NavLink>
                    <Link href="/contact" className="px-4 py-2 bg-neutral-800 rounded text-white">
                        Get in touch!
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