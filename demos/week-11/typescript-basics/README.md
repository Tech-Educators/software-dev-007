```ts
// we can tell variable what type they should be
const myName: string = "Tim";

// we can tell parameters what type should be given as an argument
function add(a: number, b: number) {
  return a + b;
}

add(1, 2);
add("1", 2); // this will run, but we get a compilation error, because "1" is not a string

// types
type person = {
  name: string;
  age: number | string;
  handsome: boolean;
  beautiful?: boolean; // this property is optional
};

const tim: person = {
  name: "Tim",
  age: 29,
  handsome: true,
};

const joe: person = {
  name: "Joe",
  age: 21,
  handsome: true,
};

const jez: person = {
  name: "Jez",
  age: "22", // this should be a number, but we put | string
  handsome: false,
  beautiful: true, // this propery is optional
};

// this is us telling people is MUST be an array of person objects
const people: person[] = [tim, joe, jez];
```
