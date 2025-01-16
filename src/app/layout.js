import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
    variable: "--font-Rubik",
    subsets: ["latin"],
});

export const metadata = {
    title: "ip-address-tracker",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${rubik.className} antialiased`}>{children}</body>
        </html>
    );
}
