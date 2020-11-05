import groupAnagrams from './group_anagrams';
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

test('group anagrams 1', () => {
  expect(groupAnagrams(strs)).toIncludeSameMembers(
    [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']].sort()
  );
});
