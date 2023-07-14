import { describe, it, expect } from "vitest";
import { main } from "../index";

describe("main", () => {
  it("should return undefined", () => {
    expect(main()).toBeUndefined();
  });
});
