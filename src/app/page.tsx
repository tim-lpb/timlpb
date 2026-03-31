import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="flex flex-1 flex-col">
                <div className="flex-1 overflow-y-auto">
                    <div className="text-primary mx-auto flex max-w-2xl flex-1 flex-col gap-8 py-16 leading-[1.6] sm:py-32">
                        <Image
                            src="/img/avatar.jpeg"
                            alt="Avatar of Tim"
                            width={60}
                            height={60}
                            draggable={false}
                            className="mb-8 rounded-full select-none"
                        />

                        <h1 className="text-2xl font-semibold">
                            Tim
                        </h1>

                        <p className="text-secondary text-2xl font-semibold text-pretty">
                            Trying to learn and build cool things. Currently working on this portfolio.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}