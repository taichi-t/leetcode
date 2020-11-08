export default function firstUniqChar(str: string): number {
  const frequencies: {
    [key: string]: number;
  } = {};
  for (let char of str) {
    if (frequencies[char] === undefined) {
      frequencies[char] = 1;
    } else {
      frequencies[char]++;
    }
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (frequencies[char] === 1) {
      return i;
    }
  }

  return -1;
}

// Given a string, find the first non-repeating character in it and return its index.
// If it doesn't exist, return -1.
