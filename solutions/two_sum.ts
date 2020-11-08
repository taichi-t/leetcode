export default function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let currVal = nums[i];
    if (map.has(currVal)) {
      return [map.get(currVal)!, i];
    }
    let diff = target - currVal;
    map.set(diff, i);
  }

  throw new Error('no answer');
}

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
