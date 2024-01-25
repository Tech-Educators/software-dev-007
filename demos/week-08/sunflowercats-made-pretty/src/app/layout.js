import { Junge } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
