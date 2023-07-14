import { getType } from "../src/index";

const number = 1;
const string = "1";
const boolean = true;
const obj = {};
const arr = [1, 2, 3];
const symbol = Symbol();
const nullValue = null;
const undefinedValue = undefined;
const func = () => null;

class Person {
  constructor(public name: string, public age: number) {}
}
const person = new Person("John", 30);

console.log(getType(number)); // number
console.log(getType(string)); // string
console.log(getType(boolean)); // boolean
console.log(getType(obj)); // object
console.log(getType(arr)); // array
console.log(getType(symbol)); // symbol
console.log(getType(nullValue)); // null
console.log(getType(undefinedValue)); // undefined
console.log(getType(func)); // function
console.log(getType(person)); // object

console.log(person instanceof Person); // true

type PersonType = {
  name: string;
  age: number;
};
const person2: PersonType = {
  name: "John",
  age: 30,
};
// console.log(person2 instanceof PersonType);
// 'PersonType' only refers to a type, but is being used as a value here.
console.log(person2 instanceof Person); // false
console.log(getType(person2)); // object

const error = new Error("error");
class CustomError extends Error {}
const customError = new CustomError("custom error");
console.log(error instanceof Error); // true
console.log(customError instanceof CustomError); // true
console.log(customError instanceof Error); // true
