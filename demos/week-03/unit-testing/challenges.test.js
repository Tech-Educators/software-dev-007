import { sum, subtract } from "./challenges";
import { expect, test, describe } from "vitest";

describe("Maths functions", function () {
  test("Testing my Sum function", function () {
    expect(sum(1, 1)).toBe(2);
    expect(sum(111, 112)).toBe(223);
    expect(sum(2000000000, 1)).toBe(2000000001);
  });

  test("Testing my subtract funciton", function () {
    const expected = 9;
    const actual = subtract(99, 90);

    expect(actual).toBe(expected);
  });
});
