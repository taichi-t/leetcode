import rob from './house_robber';

test('house robber 1', () => {
  const nums = [1, 2, 3, 1];
  expect(rob(nums)).toBe(4);
});
test('house robber 2', () => {
  const nums = [2, 7, 9, 3, 1];
  expect(rob(nums)).toBe(12);
});
