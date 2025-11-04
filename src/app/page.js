export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section
                id="section-home"
                className="min-h-screen flex justify-left items-start min-w-full"
            >
                <h1 className="md:text-[4rem] text-[2rem] md:text-left md:ml-6 text-center">
                    Hi, <br />
                    I'm{" "}
                    <strong className="text-aquamarine-400">Collin Chamberlin</strong>,
                    <br />
                    Full Stack Developer
                </h1>
            </section>
            <section id="about-me">
                <h2 className="text-4xl font-semibold text-aquamarine-400">
                    About Me
                </h2>
                <article className="space-y-8 text-lg leading-relaxed">
                    <p className="lg:text-xl">
                        I'm a full stack developer and lifelong learner with a
                        passion for technology, creativity, and exploration. I
                        enjoy building systems, solving problems, and bringing
                        ideas to life, both in code and beyond.
                    </p>
                    <div>
                        <h3 className="section-heading">Tech Enthusiast</h3>
                        <p>
                            My journey with computers began early, and over the
                            years I’ve grown into a developer who loves
                            everything from coding and debugging to building
                            custom PCs. Technology isn’t just my career
                            path—it’s a core part of how I think and create.
                        </p>
                    </div>

                    <div>
                        <h3 className="section-heading">Creative Builder</h3>
                        <p>
                            Outside of development, I enjoy model building as a
                            hands-on creative outlet. Whether crafting intricate
                            scale designs or experimenting with futuristic
                            concepts, I find joy in precision and detail.
                        </p>
                    </div>

                    <div>
                        <h3 className="section-heading">Gamer & Storyteller</h3>
                        <p>
                            I’m an avid gamer who appreciates both strategy and
                            storytelling— from the tactical intensity of{" "}
                            <em>League of Legends</em> to the narrative depth of{" "}
                            <em>The Elder Scrolls Online</em>. I also enjoy
                            tabletop games like <em>Dungeons & Dragons</em>,
                            where collaboration and creativity shine.
                        </p>
                    </div>

                    <div>
                        <h3 className="section-heading">Outdoor Explorer</h3>
                        <p>
                            When I’m not at a keyboard, I enjoy hiking, camping,
                            and target shooting. Spending time outdoors helps me
                            recharge and balance the energy I bring to my
                            projects.
                        </p>
                    </div>

                    <div>
                        <h3 className="section-heading">LitRPG Reader</h3>
                        <p>
                            I love immersing myself in LitRPG novels—stories
                            that blend gaming mechanics with epic adventure.
                            They remind me why I value imagination and progress,
                            both in fiction and in real life.
                        </p>
                    </div>
                    <p className="lg: text-xl">
                        In essence, I'm a multifaceted individual eagerly
                        pursuing knowledge and growth as an aspiring student. My
                        life revolves around technology, creativity, and
                        adventure. To me, life is akin to a captivating game
                        filled with quests, and I'm prepared for every adventure
                        it offers.
                    </p>
                </article>
            </section>
        </main>
    );
}
