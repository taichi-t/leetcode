import intersectionOfTwoArrays from './intersection_of_two_arrays';

test('intersection of two arrays 1', () => {
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  expect(intersectionOfTwoArrays(nums1, nums2)).toEqual([2]);
});

test('intersection of two arrays 2', () => {
  const nums1 = [4, 9, 5];
  const nums2 = [9, 4, 9, 8, 4];
  expect(intersectionOfTwoArrays(nums1, nums2)).toEqual([9, 4]);
});
