export function isPalindrome(str) {
  const cleanStr = str.replaceAll(" ", "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");

  if (cleanStr === reversedStr) {
    return true;
  } else {
    return false;
  }
}
