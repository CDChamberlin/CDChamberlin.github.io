import Image from "next/image";
import eagle from "public/EagleBadge.png";
export default function Projects() {
    return (
        <main>
            <h1 className="font-sans text-4xl text-center width-full font-semibold">
                Projects{" "}
            </h1>
            <section className="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image
                    src={eagle}
                    alt="Picture of an Eagle Scout Badge"
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg pr-4"
                />
                <article id="EagleProject">
                    <h2 className="font-sans text-xl text-center font-bold">
                        Eagle Scout Project: Observation Deck
                    </h2>
                    <p className="p-2">
                        In 2015, I completed my Eagle Scout Project at Stonewall
                        Jackson Middle School. I created an observation deck for
                        their local vernal pool
                    </p>
                    <p className="font-semibold">Timeframe: </p>
                </article>
            </section>
        </main>
    );
}
