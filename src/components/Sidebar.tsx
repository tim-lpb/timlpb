"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="fixed top-4 left-4 z-50 p-2 bg-white rounded shadow-md text-quaternary"
                onClick={() => setOpen(!open)}
            >
                {open ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                <div className="p-6 flex flex-col gap-6">
                    <Link href="/" className="text-tertiary font-semibold hover:text-primary transition">
                        Home
                    </Link>
                    <Link href="/about" className="text-tertiary hover:text-primary transition">
                        About
                    </Link>

                    <section className="flex flex-row gap-2 px-4">
                        <Link
                            href="https://www.instagram.com/timlpb_/"
                            target="_blank"
                            className="group -ml-1 p-2 inline-flex items-center"
                        >
                            <FaInstagram
                                size={28}
                                className="text-quarternary group-hover:text-primary select-none"
                            />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/timlpb/"
                            target="_blank"
                            className="group -ml-1 p-2 inline-flex items-center"
                        >
                            <FaLinkedin
                                size={28}
                                className="text-quarternary group-hover:text-primary select-none"
                            />
                        </Link>

                        <Link
                            href="https://github.com/tim-lpb"
                            target="_blank"
                            className="group -ml-1 p-2 inline-flex items-center"
                        >
                            <FaGithub
                                size={28}
                                className="text-quarternary group-hover:text-primary select-none"
                            />
                        </Link>
                    </section>
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/20 z-30" onClick={() => setOpen(false)} />
            )}
        </>
    );
}