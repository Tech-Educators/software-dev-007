const products = [
  { name: "bluey Plush", price: 10 },
  { name: "bingo Plush", price: 9 },
  { name: "philips 3mm shaving attachement", price: 20 },
];

const searchParams = new URLSearchParams(window.location.search);

const sort = searchParams.get("sort");
const type = searchParams.get("type");

if (type === "price") {
  products.sort((a, b) => a.price - b.price);
  if (sort === "desc") {
    products.reverse();
  }
}

if (type === "name") {
  products.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "desc") {
    products.reverse();
  }
}

// add my products to the page
products.forEach((product) => {
  const div = document.getElementById("products");
  const name = document.createElement("h4");
  const price = document.createElement("p");

  name.textContent = product.name;
  price.textContent = "£" + product.price;
  div.appendChild(name);
  div.appendChild(price);
});
