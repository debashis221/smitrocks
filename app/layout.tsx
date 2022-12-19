import { NavBar } from "../components";
import "./globals.css";
import { Poppins } from "@next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head />
      <body className={poppins.className}>
        <div className="relative h-screen overflow-x-hidden">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
