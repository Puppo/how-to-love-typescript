const number: number = 1;
const string: string = "Hello";
const boolean: boolean = true;
const array: number[] = [1, 2, 3];
const tuple: [number, string] = [1, "Hello"];
const literal: "yes" | "no" = "yes";
const symbol: symbol = Symbol("symbol");
const object: object = { a: 1, b: 2 };

type Person = {
  name: string;
  age: number;
};

class PersonClass {
  constructor(public name: string, public age: number) {}
}

const person: Person = {
  name: "Jack",
  age: 32,
};

console.log("typeof person", typeof person);
// console.log('typeof person', person instanceof Person);
console.log("instanceof person", person instanceof PersonClass);
console.log("person.constructor.name", person.constructor.name);

const personClass: PersonClass = new PersonClass("Jack", 32);

console.log("typeof personClass", typeof personClass);
console.log("instanceof personClass", personClass instanceof PersonClass);
console.log("personClass.constructor.name", personClass.constructor.name);

const any: any = 1;
const unknown: unknown = 1;
