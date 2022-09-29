export class DoubleListNode {
    val: number;
    next: DoubleListNode | null;
    prev: DoubleListNode | null;
    constructor(val?: number, next?: DoubleListNode | null, prev?: DoubleListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
        this.prev = (prev === undefined ? null : prev);
    }
}