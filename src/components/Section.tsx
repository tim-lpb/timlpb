import { PropsWithChildren } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function Section({ children, className = "" }: PropsWithChildren & { className?: string }) {
    return <div className={cn("flex flex-col gap-2 px-4", className)}>{children}</div>;
}