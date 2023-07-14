const a: any = 1;

// a.b = 1;

const res = a + 3;

console.log(res);

const b: unknown = 1;

// b.b = 1;
// 'b' is of type 'unknown'.ts(18046)

// const res2 = b + 3;
// 'b' is of type 'unknown'.ts(18046)

if (typeof b === "number") {
  const res3 = b + 3;
  console.log(res3);
}
