import Image from "next/image";
import Link from "next/link";

import {Section, InlineLink} from "@/components/ComponentsList";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

export default function Home() {
    return (
        <>
            <div className="flex flex-1 flex-col">
                <div className="flex-1 overflow-y-auto">
                    <div className="text-primary mx-auto flex max-w-2xl flex-1 flex-col gap-8 py-50 leading-[1.6] text-justify">
                        <Section className="gap-4">
                            <h1 className={"text-primary text-3xl font-semibold text-pretty underline underline-offset-2 decoration-2"}>
                                About me
                            </h1>

                            <p className="text-secondary text-xl font-normal text-pretty wrap-break-word hyphens-auto">
                                Hi, I&apos;m Tim. I have a passion for learning and building cool things. Currently,
                                I&apos;m focused on developing this portfolio to showcase my projects and skills.
                                I enjoy exploring new technologies and continuously improving my skills.
                            </p>

                            <p className="text-secondary text-xl font-normal text-pretty wrap-break-word hyphens-auto">
                                After finishing my Bachelor&apos;s degree in Computer Science, I am currently studying
                                Biology to broaden my knowledge and explore the intersection of technology and life
                                sciences. While mainly studying, I work on various{" "}
                                <InlineLink href="https://github.com/tim-lpb">projects</InlineLink>{" "} in
                                my free time to apply what I&apos;ve learned and create something meaningful.
                                I&apos;m doing this in preparation for the Master&apos;s degree in Computer Science
                                I&apos;m planning to start later this year.
                            </p>

                            <p className="text-secondary text-xl font-normal text-pretty wrap-break-word hyphens-auto">
                                Besides coding, I spend my time watching movies, doing sport and hanging out with friends.
                                For the past few weeks, I also spent time making my garden ready for summer. It was
                                a lot of work, but I really enjoyed it and I am looking forward to spending more time
                                in the garden.
                            </p>

                            <p className="text-secondary text-xl font-normal text-pretty wrap-break-word">
                                I am always open to new opportunities and collaborations,
                                so feel free to reach out if you want to connect or work on a project together!
                            </p>
                        </Section>

                        <Section className="flex-row gap-2">
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
            </div>
        </>
    );
}
