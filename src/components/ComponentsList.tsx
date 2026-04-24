import { PropsWithChildren } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Image from "next/image";

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

type ProjectCardProps = {
    href: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    className?: string;
};

export function ProjectCard({
                                href,
                                title,
                                description,
                                imageSrc,
                                imageAlt,
                                className = "",
                            }: ProjectCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group mx-auto block w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-300/80 bg-white/80 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg",
                className
            )}
        >
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 44rem"
                    className="object-cover transition-transform"
                />
            </div>

            <div className="border-t border-zinc-300/70 bg-white/90 px-5 py-4 backdrop-blur-sm">
                <h3 className="text-primary text-lg font-semibold text-pretty">{title}</h3>
                <p className="text-secondary mt-1 text-sm leading-relaxed text-pretty">{description}</p>
            </div>
        </Link>
    );
}


{/* TODO: Add more components, e.g. projects block */}
