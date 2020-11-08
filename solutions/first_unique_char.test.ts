import firstUniqChar from './first_unique_char';

const str1 = 'leetcode';
const str2 = 'loveleetcode';
const str3 = 'dddccdbba';

test('first unique char 1', () => {
  expect(firstUniqChar(str1)).toEqual(0);
});

test('first unique char 2', () => {
  expect(firstUniqChar(str2)).toEqual(2);
});

test('first unique char 3', () => {
  expect(firstUniqChar(str3)).toEqual(8);
});
