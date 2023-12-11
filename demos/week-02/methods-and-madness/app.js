// adding a function to a property
const person = {
  name: "Jez",
  age: "21 and a bit",
  sayHello: function () {
    const p = document.createElement("p");
    p.textContent = "My name Jez";
    document.body.appendChild(p);
  },
};

// writing a function, and adding it to our object
function goVroom() {
  const p = document.createElement("p");
  p.textContent = "VROOOM!";
  const carNoises = document.getElementById("carNoises");
  carNoises.appendChild(p);
}

const car = {
  make: "Suzuki",
  model: "Grand Vitara",
  colour: "Dark Red",
  owner: "Very handsome",
  wasteFuel: goVroom,
};
