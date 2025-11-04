export default function Experience() {
    const experiences = [
        {
            company: "Institute of Data – Richmond, VA",
            role: "Assistant Trainer (Software Engineering)",
            start: "2024-03",
            end: "Present",
            dates: "Mar 2024 – Mar 2025; Sept 2025 – Present",
            bullets: [
                "Supported full-stack development training covering JavaScript, HTML, CSS, Git, and AWS.",
                "Reviewed and graded student projects, providing detailed feedback on code quality and design patterns.",
                "Achieved a 95% survey response rate by fostering high engagement and personalized mentoring.",
            ],
        },
        {
            company: "Amazon – Ashland, VA",
            role: "FC Associate 1",
            start: "2017-10",
            end: "Present",
            dates: "Oct 2017 – Jan 2022; Mar 2024 – Present",
            bullets: [
                "Led and collaborated with small teams to improve operational workflows, applying agile-style iteration for continuous process improvement.",
                "Maintained high accuracy rates on quality audits, averaging 99% across multiple years.",
                "Optimized loading and materials handling processes for greater efficiency and accuracy.",
                "Returned to Amazon in March 2024 while continuing professional development in software engineering.",
            ],
        },
        {
            company: "Heart of Virginia Council, BSA – Maidens, VA",
            role: "STEM Area Head (Programming & Robotics)",
            start: "2023-06",
            end: "2023-08",
            dates: "Jun 2023 – Aug 2023",
            bullets: [
                "Designed and delivered curricula for Programming, Robotics, and Digital Technology merit badges using HTML/CSS, JavaScript, and Python.",
                "Coordinated multiple instructors to ensure consistent, high-quality technical instruction.",
                "Gathered and applied feedback to improve training materials and student experiences.",
            ],
        },
    ];

    return (
        <main className="min-h-screen ">

            <section className="px-8 md:px-24 py-16">
                <h1 className="text-4xl font-bold text-aquamarine-400 mb-12">
                    Professional Experience
                </h1>

                <div className="relative border-l border-aquamarine-500 pl-10">
                    {experiences.map((job, i) => (
                        <div key={i} className="mb-12 relative">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[0.9rem] top-3 w-3 h-3 bg-aquamarine-400 rounded-full border border-gray-900"></div>

                            {/* Job Info */}
                            <h2 className="section-heading">{job.company}</h2>
                            <h3 className="text-xl font-medium text-gray-200">
                                {job.role}
                            </h3>

                            <p className="italic text-aquamarine-300">
                                <time dateTime={job.start}>
                                    {job.dates}
                                </time>
                            </p>

                            <ul className="list-disc list-inside space-y-2 text-lg mt-3">
                                {job.bullets.map((b, idx) => (
                                    <li key={idx}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}