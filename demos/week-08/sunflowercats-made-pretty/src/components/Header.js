import Link from "next/link";
import "@/styles/header.css";

export default function Header() {
  return (
    <header>
      <h1>Sunflowercats</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/addcat">Addcat</Link>
      </nav>
    </header>
  );
}
