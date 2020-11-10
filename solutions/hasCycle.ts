// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function hasCycle(head: ListNode | null): boolean {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer!.next;

    if (fastPointer === slowPointer) {
      return true;
    }
  }

  return false;
}
