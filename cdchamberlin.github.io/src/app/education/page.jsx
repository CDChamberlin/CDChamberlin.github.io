import Card from "@/components/Card";

export default function Education() {
    return (
        <main className="min-h-screen grid place-content-center">
            <Card
                image={"logos/mastermark-enterprise.svg"}
                imageAlt={"VCU"}
                title={"Virginia Commonwealth University"}
                year={"August 2015 - December 2019"}
                subtitle={"Bachelor of Science, General Mathematics"}
                description={
                    "Completed a comprehensive mathematics program focused on analytical reasoning, abstract problem solving, and data-driven modeling. Developed a strong foundation in calculus, linear algebra, and discrete mathematics, along with experience applying mathematical logic in programming and statistical contexts."
                }
            />

            <Card
                image={"logos/institute_of_data_logo.svg"}
                imageAlt={"Institute of Data"}
                title={"Institute of Data"}
                year={"September 2023 - March 2024"}
                subtitle={"Software Engineering"}
                description={
                    "An intensive industry-focused program emphasizing modern software development practices. Gained hands-on experience with full-stack JavaScript, APIs, databases, and deployment workflows, while working on real-world projects following agile methodologies."
                }
            />
            <footer className="text-xs text-gray-500 text-center mt-8">
                Logos and trademarks are property of their respective owners.
                Used here for identification purposes only.
            </footer>
        </main>
    );
}
