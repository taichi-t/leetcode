import deleteDuplicates from './delete_duplicates';
import { ListNode } from './delete_duplicates';

test('delete duplicates 1', () => {
  const head = new ListNode(1);
  head.next = new ListNode(1);
  head.next.next = new ListNode(2);
  expect(deleteDuplicates(head)).toEqual({
    val: 1,
    next: { val: 2, next: null },
  });
});

test('delete duplicates 2', () => {
  const head = new ListNode(1);
  head.next = new ListNode(1);
  head.next.next = new ListNode(2);
  head.next.next.next = new ListNode(3);
  head.next.next.next.next = new ListNode(3);
  expect(deleteDuplicates(head)).toEqual({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null,
      },
    },
  });
});
