export default function intersectionOfTwoArrays(
  nums1: number[],
  nums2: number[]
) {
  let firstSet = new Set<number>();
  for (let num of nums1) {
    firstSet.add(num);
  }
  let intersectionSet = new Set<number>();
  for (let num of nums2) {
    if (firstSet.has(num)) {
      intersectionSet.add(num);
    }
  }
  return Array.from(intersectionSet);
}

// Given two arrays, write a function to compute their intersection.
