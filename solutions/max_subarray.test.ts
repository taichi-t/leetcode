import maxSubArray from './max_subarray';
it('Maximum Subarray 1', () => {
  const nums: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  expect(maxSubArray(nums)).toBe(6);
});
it('Maximum Subarray 2', () => {
  const nums: number[] = [1];
  expect(maxSubArray(nums)).toBe(1);
});
it('Maximum Subarray 3', () => {
  const nums: number[] = [0];
  expect(maxSubArray(nums)).toBe(0);
});
it('Maximum Subarray 4', () => {
  const nums: number[] = [-1];
  expect(maxSubArray(nums)).toBe(-1);
});
it('Maximum Subarray 5', () => {
  const nums: number[] = [-2147483647];
  expect(maxSubArray(nums)).toBe(-2147483647);
});
