export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function reverseList(head: ListNode | null): ListNode | null {
  let prevNode = null;
  while (head !== null) {
    let nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }

  return prevNode;
}

// A linked list can be reversed either iteratively or recursively. Could you implement both?
//the point is keep track of three nodes at once
