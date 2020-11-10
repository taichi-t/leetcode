import hasCycle from './hasCycle';
import { ListNode } from './hasCycle';

test('linked list cycle', () => {
  // const arr = [3, 2, 0, -4];
  const head = new ListNode(3);
  head.next = new ListNode(2);
  head.next.next = new ListNode(0);
  head.next.next.next = new ListNode(-4);

  expect(hasCycle(head)).toEqual(true);
});
