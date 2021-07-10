let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let bools: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object Literal
interface Point {
  x: number;
  y: number;
}

let point: Point = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number): void => {
  console.log(i);
};

// When to use type annotations

// 1) Function that returns the 'any' type
interface JSONObject {
  x: number;
  y: number;
}
const json = '{"x": 10, "y": 20}';
const coordinates: JSONObject = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) When we declare a var on one line and init it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // or just say let foundword = false, it's way better code.

for (let i = 0; i < words.length; i++) {
  const el = words[i];
  if (el === 'green') {
    foundWord = true;
  }
}

// 3) Var whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
