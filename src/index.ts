export enum Color {
  Red,
  Green,
  Blue,
}

const COLOR = {
  Red: "red",
  Green: "green",
  Blue: "blue",
} as const;
type ColorKeys = keyof typeof COLOR;
export type Colors = (typeof COLOR)[ColorKeys];
