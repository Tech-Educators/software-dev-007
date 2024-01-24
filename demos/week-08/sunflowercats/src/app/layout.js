import { Junge } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
