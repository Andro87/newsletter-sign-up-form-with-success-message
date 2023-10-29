import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "styles/style.scss";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: "Newsletter sign-up form with success message",
    description: "Newsletter sign-up form with success message web app",
    viewport: {
        width: "device-width",
        initialScale: 1
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
