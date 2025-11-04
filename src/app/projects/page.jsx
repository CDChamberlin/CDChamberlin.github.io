import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "Capstone Project: E-Commerce Storefront",
            description:
                "A full-stack e-commerce storefront reproduction project built as part of my capstone. Implements product listings, cart management, and checkout flow with a focus on responsive UI and clean data handling.",
            imgSrc: "/projects/capstone-storefront.png", // add screenshot here
            link: "https://github.com/CDChamberlin/Capstone-Project",
            timeframe: "2024",
            tech: ["React", "Next.js", "TailwindCSS", "Node.js"],
        },
        {
            title: "Arorial World",
            description:
                "An interactive worldbuilding project for my D&D campaign setting. Includes procedural map data, lore integration, and a foundation for player journal entries and rumor systems.",
            imgSrc: "/projects/arorial-world-preview.png", // add screenshot here
            link: "https://github.com/CDChamberlin/arorial-world",
            timeframe: "2025",
            tech: ["Next.js", "MongoDB", "TailwindCSS"],
        },
        {
            title: "Eagle Scout Project: Observation Deck",
            description:
                "In 2015, I completed my Eagle Scout Project by constructing an observation deck at Stonewall Jackson Middle School, providing students a safe and accessible space to observe local ecosystems.",
            imgSrc: "/EagleBadge.png",
            link: "#EagleProject",
            timeframe: "May 2014 – June 2015",
        },
    ];

    const ProjectCard = ({ project }) => (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block max-w-2xl mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow transition hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
            <div className="relative h-64 w-full">
                <Image
                    src={project.imgSrc}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>
            <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {project.title}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {project.description}
                </p>
                {project.tech && (
                    <ul className="mt-3 flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                        {project.tech.map((t, i) => (
                            <li
                                key={i}
                                className="rounded bg-gray-200 px-2 py-1 dark:bg-gray-700"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                )}
                {project.timeframe && (
                    <time
                        className="mt-3 block font-medium text-sm text-gray-500 dark:text-gray-400"
                    >
                        {project.timeframe}
                    </time>
                )}
            </div>
        </a>
    );

    const mainProjects = projects.slice(0, 2);

    return (
        <main className="px-6 py-12 min-h-screen text-gray-100">
            <h1 className="mb-10 text-4xl font-semibold text-center text-aquamarine-400">
                Projects
            </h1>

            <div className="space-y-12">
                {mainProjects.map((proj, i) => (
                    <ProjectCard key={i} project={proj} />
                ))}
            </div>

            <section className="mt-16">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Legacy Project
                </h2>
                <ProjectCard project={projects[2]} />
            </section>
        </main>
    );
}