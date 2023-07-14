type PossibleTypes =
  | "number"
  | "string"
  | "boolean"
  | "object"
  | "array"
  | "symbol"
  | "null"
  | "undefined"
  | "function"
  | "unknown";

export function getType(value: unknown): PossibleTypes {
  if (typeof value === "number") {
    return "number";
  }
  if (typeof value === "string") {
    return "string";
  }
  if (typeof value === "boolean") {
    return "boolean";
  }
  if (typeof value === "object") {
    if (Array.isArray(value)) {
      return "array";
    }
    if (value === null) {
      return "null";
    }
    return "object";
  }
  if (typeof value === "symbol") {
    return "symbol";
  }
  if (typeof value === "undefined") {
    return "undefined";
  }
  if (typeof value === "function") {
    return "function";
  }
  return "unknown";
}
