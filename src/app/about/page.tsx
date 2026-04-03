import Image from "next/image";
import Link from "next/link";

import {Section} from "@/components/Section";

export default function Home() {
    return (
        <>
            <div className="flex flex-1 flex-col">
                <div className="flex-1 overflow-y-auto">
                    <div className="text-primary mx-auto flex max-w-2xl flex-1 flex-col gap-16 py-16 leading-[1.6] sm:py-32">
                        <Section className="">
                            <p className="text-secondary font-normal text-pretty">
                                I&apos;m trying to learn and build cool things. Currently working on this portfolio.
                            </p>
                        </Section>
                    </div>
                </div>
            </div>
        </>
    );
}
