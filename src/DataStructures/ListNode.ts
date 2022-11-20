export class ListNode {
  val: number;
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }

  toString(): string {
    let dummy = new ListNode(0);
    dummy.next = this;
    let res: string[] = [];
    while (dummy.next) {
      res.push(dummy.next.val.toString());
      dummy = dummy.next;
    }
    return res.join("->");
  }
}