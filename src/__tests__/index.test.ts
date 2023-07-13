import { describe, it, expect } from "vitest";
import { sum } from "../index";

describe("sum", () => {
  it("should sum two number", () => {
    expect(sum(1, 3)).toEqual(4);
  });
});
