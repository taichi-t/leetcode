export default function groupAnagrams(strs: string[]): string[][] {
  let map = new Map();
  for (let str of strs) {
    const s = uniform(str);
    let l = map.get(s) || [];
    l.push(str);
    map.set(s, l);
  }
  return Array.from(map.values()).sort();
}

function uniform(str: string): string {
  return str.split('').sort().join('');
}

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
