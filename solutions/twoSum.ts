export default function twoSum(nums: number[], target: number) {
  const map = new Map<number, number>();
  //look speed in map is 0(1)
  for (let i = 0; i < nums.length; i++) {
    let currVal: number = nums[i];
    if (map.has(currVal)) {
      //we find the diff that adds up to target.
      return [map.get(currVal), i];
    }
    let diff = target - currVal;
    map.set(diff, i);
  }

  throw new Error('Error');
}
