import Link from "next/link";

export default function Navbar({ children }) {
    return (
        <nav className="flex sm:justify-center space-x-4">
            {[
                ["Home", "/"],
                // ["Education", "/education"],
                ["About", "/about"],
                ["Projects", "/projects"],
            ].map(([title, url]) => (
                <Link href={url} key={title}>
                    <button className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 dark:text-sky-500">
                        {title}
                    </button>
                </Link>
            ))}
        </nav>
    );
}
