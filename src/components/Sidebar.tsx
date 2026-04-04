"use client";

import Link from "next/link";
import {Section} from "@/components/ComponentsList";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface SidebarProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
    return (
        <>
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-white shadow-md z-40 transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                <div className="p-6 pt-20 flex flex-col gap-6">

                    <Section>
                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                            className="text-2xl font-semibold text-pretty text-quarternary hover:text-primary transition">
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setOpen(false)}
                            className="text-2xl font-semibold text-pretty text-quarternary hover:text-primary transition">
                            About
                        </Link>
                    </Section>

                    <Section className="flex-row">
                        <Link
                            href="https://www.instagram.com/timlpb_/"
                            target="_blank"
                            rel="noopener noreferrer"
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
                            rel="noopener noreferrer"
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
                            rel="noopener noreferrer"
                            className="group -ml-1 p-2 inline-flex items-center"
                        >
                            <FaGithub
                                size={28}
                                className="text-quarternary group-hover:text-primary select-none"
                            />
                        </Link>
                    </Section>
                </div>
            </div>

            {open && (
                <div
                    className="fixed inset-0 backdrop-blur-sm z-30"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}