import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "MSK Elite Group - Corporate Training & Placement",
    description: "Leading provider of corporate training services including Communication Training, HR Training, Finance Training, SAP Basics, and ERP Utilization. Transform your workforce with MSK Elite Group.",
    keywords: "corporate training, HR training, finance training, SAP training, ERP training, communication skills, professional development, placement services",
    authors: [{ name: "MSK Elite Group" }],
    openGraph: {
        title: "MSK Elite Group - Corporate Training & Placement",
        description: "Transform your workforce with expert corporate training services",
        type: "website",
    },
};

import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const poppins = Poppins({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${poppins.variable} antialiased font-sans text-gray-900 dark:text-gray-100`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                >
                    <div className="bg-noise"></div>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
