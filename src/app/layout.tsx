import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import Header from "@/components/Header";
import DarkModeToggle from "@/components/DarkModeToggle";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APPNAME,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-slate-900 text-slate-900 dark:text-white w-full min-h-screen">
        <ThemeProvider>
          <Header />
          <main className="">
            {children}
            <DarkModeToggle/>
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
