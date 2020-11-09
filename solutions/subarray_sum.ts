export default function subarraySum(nums: number[], k: number): number {
  var map: { [key: number]: number } = {};
  var sum = 0;
  var count = 0;

  map[0] = 1;

  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    count += map[sum - k] || 0;
    map[sum] = (map[sum] || 0) + 1;
  }

  return count;
}
