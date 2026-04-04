"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import {cn, Section} from "@/components/ComponentsList";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [hoverReveal, setHoverReveal] = useState(false);

    const pathname = usePathname();
    const lastY = useRef(0);
    const pageName = pathname === "/" ? null : pathname.substring(1);

    useEffect(() => {
        const threshold = 80; // Minimum scroll distance to trigger hide/show
        const minDelta = 6; // Ignore small scrolls to prevent flickering

        const onScroll = () => {
            const currentY = window.scrollY;
            const deltaY = currentY - lastY.current;

            //Always show on top of the page
            if(currentY <= threshold) {
                setHidden(false);
                lastY.current = currentY;
                return;
            }

            if(deltaY > minDelta) {
                setHidden(true);
            } else if(deltaY < -minDelta) {
                setHidden(false);
            }

            lastY.current = currentY;
        };

        lastY.current = window.scrollY;
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const showHeader = !hidden || hoverReveal || sidebarOpen;

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <div
                className="fixed inset-x-0 top-0 z-50 h-14"
                onMouseEnter={() => setHoverReveal(true)}
            />

            <header
                onMouseEnter={() => setHoverReveal(true)}
                onMouseLeave={() => setHoverReveal(false)}
                className={cn(
                    "sticky top-0 z-50 w-full bg-white px-6 py-1 transition-transform duration-300",
                    showHeader ? "translate-y-0" : "-translate-y-full",
                    sidebarOpen && "bg-transparent"
                )}
            >

                <div className="flex items-center gap-2">
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
                                    className="text-secondary text-xl font-medium hover:text-primary"
                                >
                                    timlpb
                                </Link>

                                <span className="mx-1 text-xl font-medium">/</span>

                                <button
                                    onClick={scrollTop}
                                    className="text-secondary text-xl font-medium hover:text-primary"
                                >
                                    {pageName}
                                </button>
                            </div>
                        )}
                    </Section>
                </div>
            </header>

            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        </>
    );
}