import { PropsWithChildren } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function Section({ children, className = "" }: PropsWithChildren & { className?: string }) {
    return <div className={cn("flex flex-col gap-2 px-4", className)}>{children}</div>;
}

const linkBodyClass =
    "text-inherit underline decoration-[var(--text-color-quaternary)] decoration-2 underline-offset-2 break-words hover:text-[var(--text-color-primary)]";

export function InlineLink({ href, children }: PropsWithChildren<{ href: string }>) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={linkBodyClass}>
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className={linkBodyClass}>
            {children}
        </Link>
    );
}

export function ProjectElement({href, children}: PropsWithChildren<{ href: string }>) {
    return (
        <Link
            href={href}
            className="group h-40 rounded-xl border border-zinc-300 bg-white/70 p-3 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadown-md">
            <Section className="h-full justify-between gap-2 px-0">
                {children}
            </Section>
        </Link>
    )
}

{/* TODO: Add ore components, e.g. projects block */}
