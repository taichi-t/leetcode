import uniqueEmailAddress from './unique_email_address';

const emails = [
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com',
];
test('unique email address', () => {
  expect(uniqueEmailAddress(emails)).toEqual(2);
});
