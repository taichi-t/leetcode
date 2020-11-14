import isValid from './isValid';

test('Valid Parentheses 1', () => {
  const s = '()';
  expect(isValid(s)).toBe(true);
});
test('Valid Parentheses 2', () => {
  const s = '()[]{}';
  expect(isValid(s)).toBe(true);
});
test('Valid Parentheses 3', () => {
  const s = '(]';
  expect(isValid(s)).toBe(false);
});
test('Valid Parentheses 4', () => {
  const s = '([)]';
  expect(isValid(s)).toBe(false);
});
test('Valid Parentheses 5', () => {
  const s = '{[]}';
  expect(isValid(s)).toBe(true);
});
