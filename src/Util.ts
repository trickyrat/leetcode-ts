import { ListNode } from "./ListNode";

export class Util {
  createListNode(nums: number[]): ListNode | null {
    let head = new ListNode(0);
    let dummyHead = head;
    for (const num of nums) {
      dummyHead.next = new ListNode(num);
      dummyHead = dummyHead.next;
    }
    return head.next;
  }
  convertListNodeToArray(head: ListNode | null): number[] {
    let res = new Array<number>();
    while (head) {
      res.push(head.val);
      head = head.next;
    }
    return res;
  }
}