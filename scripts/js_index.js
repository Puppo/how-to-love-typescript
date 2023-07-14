const { hello, hey, multiply, pingPong, sum } = require("../cjs/index");

hello("World");
hey("World");
console.log(sum('A', "B"));
console.log(multiply(2, 3));
console.log(pingPong("ping"));
