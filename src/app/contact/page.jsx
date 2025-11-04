import Image from "next/image";

export default function Contact() {
    return (
        <main className="min-h-screen text-gray-100">
            <section className="px-8 md:px-24 py-16 text-center">
                <h1 className="text-4xl font-bold text-aquamarine-400 mb-8">
                    Contact Me
                </h1>

                <p className="text-lg mb-6">
                    I’m always open to opportunities for collaboration,
                    teaching, or building something impactful.
                </p>

                <address className="not-italic space-y-4">
                    <p>
                        <a
                            href="mailto:cdchamberlin.rva@gmail.com"
                            className="text-aquamarine-400 hover:underline"
                        >
                            cdchamberlin.rva@gmail.com
                        </a>
                    </p>

                    <p>
                        <a
                            href="tel:+18048227727"
                            className="text-aquamarine-400 hover:underline"
                        >
                            (804) 822-7727
                        </a>
                    </p>

                    <div className="flex justify-center items-center gap-4">
                        <a
                            href="https://github.com/CDChamberlin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:opacity-80"
                        >
                            <Image
                                src="/logos/dark/github-mark-white.svg"
                                alt="GitHub Logo"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                            <span className="text-aquamarine-400 hover:underline">
                                GitHub
                            </span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/cdchamberlin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:opacity-80"
                        >
                            <Image
                                src="/logos/linkedin-svgrepo-com.svg"
                                alt="LinkedIn Logo"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                            <span className="text-aquamarine-400 hover:underline">
                                LinkedIn
                            </span>
                        </a>
                    </div>

                    <p>Richmond, Virginia</p>
                </address>
            </section>
        </main>
    );
}