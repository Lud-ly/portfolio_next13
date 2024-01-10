"use client";
import Sidebar from "~/src/components/nav/Sidebar";
import "./globals.css";
import Footer from "~/src/components/footer/footer";
import { Header } from "~/src/components/header/Header";
import { ThemeProvider } from "next-themes";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <Head />
      <body className="flex items-center justify-center bg-white dark:bg-gradient-to-r from-gray-900 to-black text-black dark:text-gray-50">
        <ThemeProvider attribute="class">
          <div className="grid grid-cols-12 gap-6 px-5 p-5 mx-auto">
            <div className="flex flex-col items-center col-span-12 p-4 text-base text-center bg-gray-200 dark:bg-black lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
              <Sidebar />
            </div>
            <div className="flex flex-col col-span-12 bg-gray-200 shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-black">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
