import Card from "@/components/Card";

export default function Education() {
    return (
        <main className="min-h-screen grid place-content-center">
            <Card
                image={"#"}
                imageAlt={"VCU"}
                title={"Virginia Commonwealth University"}
                year={"August 2015 - December 2019"}
                subtitle={"Bachelor of Science, General Mathematics"}
                description={"#"}
            />

            <Card
                image={"#"}
                imageAlt={"Institute of Data"}
                title={"Institute of Data"}
                year={"September 2023 - March 2024"}
                subtitle={"Software Engineering"}
            />
        </main>
    );
}
