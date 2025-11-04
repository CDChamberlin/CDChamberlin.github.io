import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar";
import { Inter, La_Belle_Aurore } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const la_belle_aurore = La_Belle_Aurore({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
    variable: "--font-la_belle_aurore",
});

export const metadata = {
    title: "Collin C Portfolio",
    description:
        "Portfolio website for Collin Chamberlin(CDChamberlin) created with NextJS, React, and Tailwind CSS. ",
    author: "Collin Chamberlin",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="">
                    <Navbar />
                </header>
                {children}
                <Copyright />
            </body>
        </html>
    );
}
