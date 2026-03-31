import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <div className="flex flex-1 flex-col">
                <div className="flex-1 overflow-y-auto">
                    <div className="text-primary mx-auto flex max-w-2xl flex-1 flex-col gap-16 py-16 leading-[1.6] sm:py-32">
                        <section className="flex flex-col gap-4 px-4">
                            <Image
                                src="/img/avatar.jpeg"
                                alt="Avatar of Tim"
                                width={100}
                                height={100}
                                draggable={false}
                                className="mb-8 rounded-full select-none"
                            />

                            <h1 className="text-2xl font-semibold text-pretty sm:text-4xl">
                                Hey I&apos;m Tim
                            </h1>

                            <p className="text-secondary text-2xl font-semibold text-pretty">
                                I&apos;m trying to learn and build cool things. Currently working on this portfolio.
                            </p>
                        </section>

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
            </div>
        </>
    );
}
