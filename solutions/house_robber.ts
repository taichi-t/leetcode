export default function rob(nums: number[]): number {
  if (nums === null || nums.length === 0) {
    // if there are no houses, the total is zero
    return 0;
  } else if (nums.length == 1) {
    return nums[0]; // if there is only one house, return its value
  }

  let runningTotal: number[] = [];
  /* the first index will be the same value as the first house since there are no decisions to make at this point */
  (runningTotal[0] = nums[0]),
    /* the second index will be the greater value of the first house or the second house */
    (runningTotal[1] = Math.max(nums[0], nums[1]));

  /* start at index 2 since we already have already made our 0th and 1st decisions (which correspond to our first and second houses) */
  for (let i = 2; i < nums.length; i++) {
    /* for each index, we choose the greater of (the current house's value plus the total from two houses ago) or (the total through the last house)  */
    runningTotal[i] = Math.max(
      nums[i] + runningTotal[i - 2],
      runningTotal[i - 1]
    );
  }

  // return the last value in the array. this will be the optimal solution
  return runningTotal[runningTotal.length - 1];
}

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each
// of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
