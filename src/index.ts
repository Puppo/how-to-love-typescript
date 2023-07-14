export function hello(name: string): void {
  console.log(`Hello ${name}!`);
}

export const hey = (name: string): void => {
  console.log(`Hey ${name}!`);
};

export function sum(a: number, b: number): number {
  return a + b;
}

export const multiply = (a: number, b: number) => a * b;

type PingPong = (ping: "ping") => "pong";
export const pingPong: PingPong = ping => "pong";
