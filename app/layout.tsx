"use client";
import { Footer, NavBar } from "../components";
import "./globals.css";
import { Poppins } from "@next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="synthwave">
      <head />
      <body className={poppins.className}>
        <SessionProvider refetchOnWindowFocus={false}>
          <div className="relative h-screen overflow-x-hidden">
            <NavBar />
            <Toaster />
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
