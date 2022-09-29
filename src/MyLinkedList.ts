import { DoubleListNode } from "./DataStructures/DoubleListNode";

export class MyLinkedList {
    size: number;
    head: DoubleListNode;
    tail: DoubleListNode;
    constructor() {
        this.size = 0;
        this.head = new DoubleListNode(0);
        this.tail = new DoubleListNode(0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1;
        }
        let curr = new DoubleListNode();
        if (index + 1 < this.size - index) {
            curr = this.head;
            for (let i = 0; i <= index; i++) {
                curr = curr.next!;
            }
        } else {
            curr = this.tail;
            for (let i = 0; i < this.size - index; i++) {
                curr = curr.prev!;
            }
        }
        return curr.val;
    }

    addAtHead(val: number): void {
        this.addAtIndex(0, val);
    }

    addAtTail(val: number): void {
        this.addAtIndex(this.size, val);
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size) {
            return;
        }
        index = Math.max(0, index);
        let pred = new DoubleListNode();
        let succ = new DoubleListNode();
        if (index < this.size - index) {
            pred = this.head;
            for (let i = 0; i < index; i++) {
                pred = pred.next!;
            }
            succ = pred.next!;
        } else {
            succ = this.tail;
            for (let i = 0; i < this.size - index; i++) {
                succ = succ.prev!;
            }
            pred = succ.prev!;
        }
        this.size++;
        let toAdd = new DoubleListNode(val);
        toAdd.prev = pred;
        toAdd.next = succ;
        pred.next = toAdd;
        succ.prev = toAdd;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return;
        }
        let pred = new DoubleListNode();
        let succ = new DoubleListNode();
        if (index < this.size - index) {
            pred = this.head;
            for (let i = 0; i < index; i++) {
                pred = pred.next!;
            }
            succ = pred.next?.next!;
        } else {
            succ = this.tail;
            for (let i = 0; i < this.size - index - 1; i++) {
                succ = succ.prev!;
            }
            pred = succ.prev?.prev!;
        }
        this.size--;
        pred.next = succ;
        succ.prev = pred;
    }
}
