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
            <head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                    crossOrigin=""
                />
            </head>
            <body className={`${rubik.className} antialiased`}>{children}</body>
            <script
                async
                src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
                integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
                crossOrigin=""
            ></script>
        </html>
    );
}
