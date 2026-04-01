"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <header className="flex items-center px-6 py-4 w-full sticky top-0 z-50">

                <button
                    className="p-2 text-quaternary hover:text-primary transition"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                </button>

            </header>

            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        </>
    );
}