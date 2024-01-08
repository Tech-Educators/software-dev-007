# Arrow functions

## SIMPLE EXAMPLE

The sort of function that we are used to:

```js
function greet() {
  return "Hello there.";
}
```

a function that is written differently but is functionaly the same

```js
const greet2 = () => {
  return "Hellow there (2).";
};
```

## WITH PARAMS

function with params

```js
function sum(a, b) {
  return a + b;
}
```

arrow function with params

```js
const sum2 = (a, b) => {
  return a + b;
};
```

## ONE LINE FUNCTIONS (only possible with arrow functions)

If you omit the {} for the body, whatever you write will implicitly be the return value of the function, in this case, a multiplied by b:

```js
const multiply = (a, b) => a * b;
```

## WITH ARRAY METHODS

Its easier (for some people) to read arrow functions for callback functions:

```js
const myNums = [1, 2, 3, 4, 5];
```

Get all the numbers bigger than 3 with a discusting ugly function:

```js
const bigNums = myNums.filter(function (num) {
  return num > 3;
});
```

Get all the numbers lower than 3 with a beautiful elegant arrow function:

```js
const smallNums = myNums.filter((num) => num < 3);
```

## CRAZY STUPID FUNC

you can also omit the brackets of an arrow function:

```js
const greetLoudly = (greeting) => `${greeting}!!!`;
```
