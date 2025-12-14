let myName: string = "rajab";
let age: number = 18;
let isStudent: boolean = true;
let data: any = "hello";

let rating: number | string = 100;

console.log(myName);
console.log(age);
console.log(isStudent);
console.log(data);
console.log(rating);

// arrays
let evenNumbers: number[] = [2, 4, 6, 8, 10];
console.log(evenNumbers);

let stu1 = ["rajab", 18, true]; //by default, the array return type is any.
console.log(stu1);

// tuples
let arr2: [string, number] = ["rajab", 18];
console.log(arr2);

// objects
let user1: {
  name: string;
  age: number;
  gender: "male" | "female";
} = {
  name: "Ahmed",
  age: 23,
  gender: "male",
};
console.log(user1);

let user2: {
  name: string;
  age: number;
  gender?: "male" | "female"; // using quistion mark ? after variable makes it optional.i.e, if gender is not defined in object, its OK.
} = {
  name: "Ahmed",
  age: 23,
};
console.log(user2);

// instead of writing types for every object, make an interface and use it for objects.
interface User {
  name: string;
  age: number;
  gender?: "male" | "female";
}

let user3: User = {
  name: "Ali",
  age: 22,
  gender: "male",
};
console.log(user3);

// functions
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 10));

function greet(name: string, greeting?: string): void {
  let g = `${greeting || "Hello"} ${name}!`;
  console.log(g);
}
greet("Shan");
greet("Ahmad", "Hope you are fine,");

const greetWithHello = (name: string, greeting = "Hello"): string => {
  let g: string = `${greeting} ${name}!`;
  return g;
};
console.log(greetWithHello("zubair"));
console.log(greetWithHello("zubair", "How are you? "));

// accepting call backs in functions
function sayHello(name: string, cb: (name: string) => void): void {
  console.log(`hello ${name}`);
  cb(name);
}

function sayHi(name: string): void {
  console.log(`hi ${name}`);
}

sayHello("rajab", sayHi);

// rest/spread in functions
function sum(...vals: number[]): void {
  console.log(vals);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Generics
const getFirst = <A>(arr: A[]): A => {
  return <A>arr[0];
};
console.log(getFirst([1, 2, 3, 4, 5]));
console.log(getFirst(["a", "b", "c", "d", "e"]));
console.log(getFirst<string>(["a", "b", "c", "d", "e"]));

// enums
enum StatusCodes {
  ABANDONED = 500,
  NOTFOUND = 404,
}

console.log(StatusCodes.ABANDONED);
console.log(StatusCodes.NOTFOUND);
