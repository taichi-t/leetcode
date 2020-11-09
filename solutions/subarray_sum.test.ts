import subarraySum from './subarray_sum';

test('sub array sum equols k 1', () => {
  const nums = [1, 1, 1],
    k = 2;
  expect(subarraySum(nums, k)).toEqual(2);
});
test('sub array sum equols k 2', () => {
  const nums = [1, 2, 3],
    k = 3;
  expect(subarraySum(nums, k)).toEqual(2);
});
