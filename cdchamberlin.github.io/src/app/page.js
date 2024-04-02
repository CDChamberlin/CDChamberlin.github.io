export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <section
                    id="section-home"
                    className="min-h-lvh flex items-center pl-6"
                >
                    <h1 className="text-[4rem]">
                        Hi, <br />
                        I'm <strong>Collin Chamberlin</strong> <br />
                        Web Developer
                    </h1>
                </section>
                <section id="About Me">
                    <h2 className="text-3xl text-lime-green">About Me</h2>
                    <article>
                        <p className="lg: text-xl">
                            I'm an aspiring student, driven by a profound
                            passion for a variety of interests that encompass
                            technology, creativity, gaming, and outdoor
                            adventures. These pursuits define who I am and what
                            I cherish in life.
                        </p>{" "}
                        <br />
                        <p className="lg: text-xl first-line:uppercase first-line:tracking-widest">
                            Tech Enthusiast: <br /> Technology is my heart and
                            soul. My journey with computers began at an early
                            age, and I've since honed my skills to coding,
                            troubleshooting, and even building my own systems.
                            The ever-evolving world of technology is not just a
                            hobby; it's a way of life.
                        </p>
                        <br />
                        <p className="lg: text-xl first-line:uppercase first-line:tracking-widest">
                            Modeling Maven: <br /> Model building is my creative
                            escape. Crafting intricate scale models of
                            fantastical creatures and engineering miniature
                            replicas of futuristic concepts fascinate me. The
                            precision and patience required in this hobby are
                            skills I've cultivated and hold dear.
                        </p>{" "}
                        <br />
                        <p className="lg: text-xl first-line:uppercase first-line:tracking-widest">
                            Gamer Extraordinaire: <br /> Gaming, in all its
                            forms, offers me a world of excitement and
                            exploration. I find myself equally at home in the
                            immersive virtual worlds of "League of Legends" and
                            "Elder Scrolls Online" as I do in the strategic
                            challenges of "Monopoly" and "Risk." And when it
                            comes to storytelling and role-playing, there's
                            nothing quite like the thrill of "Dungeons and
                            Dragons."
                        </p>{" "}
                        <br />
                        <p className="lg: text-xl first-line:uppercase first-line:tracking-widest">
                            Outdoor Enthusiast: <br /> While I spend a
                            considerable amount of time indoors, the great
                            outdoors also beckon. Hiking and camping bring me
                            closer to nature, offering a sense of tranquility
                            and serenity that's hard to find elsewhere. On
                            occasion, I indulge in hunting and trips to the
                            shooting range, where the focus on marksmanship and
                            the appreciation of firearms' mechanical precision
                            intrigue me.
                        </p>
                        <br />
                        <p className="lg: text-xl first-line:uppercase first-line:tracking-widest">
                            LitRPG Literature Lover : <br /> When it's time to
                            relax, I dive into the immersive worlds of LitRPG
                            (Literary Role-Playing Game) books. These novels
                            blur the line between fiction and gaming, offering a
                            unique escape into realms where characters level up,
                            acquire skills, and confront epic challenges. It's
                            the perfect way to unwind and let my imagination
                            roam.
                        </p>
                        <br />
                        <p className="lg: text-xl">
                            In essence, I'm a multifaceted individual eagerly
                            pursuing knowledge and growth as an aspiring
                            student. My life revolves around technology,
                            creativity, and adventure. To me, life is akin to a
                            captivating game filled with quests, and I'm
                            prepared for every adventure it offers.
                        </p>
                    </article>
                </section>
            </div>
        </main>
    );
}
