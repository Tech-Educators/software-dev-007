import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Server Actions</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/basic-form">Basic Form</Link>
          <Link href="/imported-action-one">Imported Action One</Link>
          <Link href="/imported-action-two">Imported Action Two</Link>
          <Link href="/form-that-resets">Form that Resets</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}