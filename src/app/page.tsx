import Image from "next/image";
import Link from "next/link";

import {Section} from "@/components/Section";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <div className="flex flex-1 flex-col">
                <div className="flex-1 overflow-y-auto">
                    <div className="text-primary mx-auto flex max-w-2xl flex-1 flex-col gap-16 py-16 leading-[1.6] sm:py-32">
                        <Section className="gap-2">
                            <div className="flex gap-6 items-center">
                                <div className="flex-shrink-0">
                                    <Image
                                        src="/img/avatar.jpeg"
                                        alt="Avatar of Tim"
                                        width={100}
                                        height={100}
                                        draggable={false}
                                        className="mb-8 rounded-full select-none"
                                    />
                                </div>

                                <h1 className="text-5xl font-semibold text-pretty sm:text-5xl mb-8">
                                    Hi, I&apos;m Tim!
                                </h1>
                            </div>

                            <p className="text-secondary text-2xl font-semibold text-pretty">
                                I&apos;m trying to learn and build cool things. Currently working on this portfolio.
                            </p>
                        </Section>

                        <Section className="flex-row gap-2">
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
                        </Section>
                    </div>
                </div>
            </div>
        </>
    );
}
