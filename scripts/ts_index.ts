import { Color, Colors } from "../src/index";
const red: Color = Color.Red;
const green: Color = Color.Green;
const blue: Color = Color.Blue;
console.log(red, green, blue);

const get0 = Color[0];
const get1 = Color[1];
const get2 = Color[2];
console.log(get0, get1, get2);

const getRed = Color["Red"];
const getGreen = Color["Green"];
const getBlue = Color["Blue"];
console.log(getRed, getGreen, getBlue);

const redFromType: Colors = "red";
const greenFromType: Colors = "green";
const blueFromType: Colors = "blue";
// const redFromType: Colors = "red" satisfies Colors;
// const greenFromType: Colors = "green" satisfies Colors;
// const blueFromType: Colors = "blue" satisfies Colors;
console.log(redFromType, greenFromType, blueFromType);
