import Link from "next/link";

export default async function NotFound() {
    // const headersList = headers();
    // const domain = headersList.get("host");
    // const data = await getSiteData(domain);
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold font-sans text-4xl mb-4 text-sky-500">
                Not Found
            </h2>
            <p className="text-xl text-aquamarine-300">
                Could not find the requested resource
            </p>
            <p className="text-xl text-aquamarine-300">
                Let's go back <Link href="/">Home</Link>
            </p>
        </div>
    );
}
