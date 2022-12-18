import { Chivo_Mono } from "@next/font/google";
import { NavBar } from "../components";
const chivo = Chivo_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return <main className={chivo.className}></main>;
}
