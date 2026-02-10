import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solar8 | SaaS Management",
  description: "Enterprise-grade solar energy monitoring and optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen bg-background text-foreground">
          <Sidebar />
          <div className="flex-1 w-full overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
