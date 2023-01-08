"use client";
import { Footer, NavBar } from "../components";
import "./globals.css";
import { Poppins } from "@next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

interface IProps {
  children: React.ReactNode;
  session: any;
}
export default function RootLayout({ children, session }: IProps) {
  return (
    <html lang="en" data-theme="synthwave">
      <head />
      <body className={poppins.className}>
        <SessionProvider session={session}>
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
