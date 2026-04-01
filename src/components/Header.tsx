"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { Section } from "./Section";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    const pageName = pathname === "/" ? null : pathname.substring(1);

    return (
        <>
            <header className="flex items-center gap-2 px-6 py-4 w-full sticky top-0 z-50">

                <button
                    className="p-2 text-quaternary hover:text-primary transition"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                </button>

                <Section className="gap-2">
                    {pageName && (
                        <div className="text-sm text-secondary">
                            <Link
                                href="/"
                                className="text-tertiary text-xl font-medium hover:text-secondary"
                            >
                                timlpb
                            </Link>

                            <span className="mx-1 text-xl font-medium">/</span>

                            <Link
                                href={`/${pageName}`}
                                className="text-tertiary text-xl font-medium hover:text-secondary"
                            >
                                {pageName}
                            </Link>
                        </div>
                    )}
                </Section>
            </header>

            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        </>
    );
}