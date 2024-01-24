import { Junge } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const junge = Junge({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Sunflowercats",
  description:
    "The ultimate creature. Sunflowers? Check. Cats? Check. Cute? Soemtimes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={junge.className}>
        <h1>Sunflowercats</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/addcat">Addcat</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
