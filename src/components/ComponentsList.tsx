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
