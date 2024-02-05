import Link from "next/link";

export default function Home({ searchParams }) {
  const products = [
    { name: "bluey Plush", price: 10 },
    { name: "bingo Plush", price: 9 },
    { name: "philips 3mm shaving attachement", price: 20 },
  ];

  if (searchParams.type === "price") {
    products.sort((a, b) => a.price - b.price);
    if (searchParams.sort === "desc") {
      products.reverse();
    }
  }

  if (searchParams.type === "name") {
    products.sort((a, b) => a.name.localeCompare(b.name));
    if (searchParams.sort === "desc") {
      products.reverse();
    }
  }

  return (
    <div>
      <h2>Home</h2>
      <Link href="?sort=asc&type=name">Sort by name asc</Link>
      <br />
      <Link href="?sort=desc&type=name">Sort by name desc</Link>
      <br />
      <Link href="?sort=asc&type=price">Sort by price asc</Link>
      <br />
      <Link href="?sort=desc&type=price">Sort by price desc</Link>
      {products.map((product) => {
        return (
          <div key={product.name}>
            <h4>{product.name}</h4>
            <p>£{product.price}</p>
          </div>
        );
      })}
    </div>
  );
}
