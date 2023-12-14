import { isPalindrome } from "./palindrome";
import { test, expect } from "vitest";

test("Testing isPalindrome", function () {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("yo banana boy")).toBe(true);
  expect(isPalindrome("Tim is happy")).toBe(false);
  expect(isPalindrome("YO banana boy")).toBe(true);
  expect(isPalindrome("Poor Dan is in a droop")).toBe(true);
});
