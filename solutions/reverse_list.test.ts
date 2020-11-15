import reverseList, { ListNode } from './reverse_list';

test('reserve listnode', () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);

  expect(reverseList(head)).toEqual({
    val: 5,
    next: {
      val: 4,
      next: {
        val: 3,
        next: {
          val: 2,
          next: {
            val: 1,
            next: null,
          },
        },
      },
    },
  });
});
