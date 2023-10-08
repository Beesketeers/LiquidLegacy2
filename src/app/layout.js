import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["100", "300", "400", "700", "900"], style: "normal", subsets: ["latin"] });

export const metadata = {
    title: "Liquid Legacy | Saving the world, one drop at a time",
    description: "Liquid Legacy, a non-profit organization dedicated to saving the world, one drop at a time.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={lato.className}>{children}</body>
        </html>
    );
}
