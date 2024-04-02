"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ children }) {
    return (
        <nav className="flex sm:justify-center space-x-4 ">
            <section id="controls"></section>
            <section id="nav" className="fixed top-0 right-0">
                {[
                    ["Home", "/"],
                    // ["Education", "/education"],
                    ["Contact Me", "/contact"],
                    ["Projects", "/projects"],
                ].map(([title, url]) => (
                    <Link href={url} key={title}>
                        <button className="rounded-lg px-3 py-2 text-sky-500 font-medium hover:bg-slate-100 hover:text-blue-600 dark:text-lime-green">
                            {title}
                        </button>
                    </Link>
                ))}
            </section>
        </nav>
    );
}

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
};
