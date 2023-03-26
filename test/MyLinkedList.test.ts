import { MyLinkedList } from "../src/MyLinkedList";
import { expect, test } from 'vitest'
import { DoubleListNode } from "../src/DataStructures/DoubleListNode";

let myLinkedList = new MyLinkedList();

test("DoubleListNodeTest", () => {
    let head = new DoubleListNode(0, undefined, undefined);
    expect(head.val).toEqual(0);
    expect(head.next).toEqual(null);
    expect(head.prev).toEqual(null);
})

test("MyLinkedListTest", () => {
    myLinkedList.addAtHead(1);
    myLinkedList.addAtTail(3);
    myLinkedList.addAtIndex(1, 2);

    myLinkedList.addAtIndex(4, 4);
    expect(myLinkedList.size).toEqual(3);

    expect(myLinkedList.get(0)).toEqual(1);
    expect(myLinkedList.get(1)).toEqual(2);
    expect(myLinkedList.get(2)).toEqual(3);
    expect(myLinkedList.get(3)).toEqual(-1);

    myLinkedList.addAtIndex(1, 1);
    expect(myLinkedList.size).toEqual(4);
    expect(myLinkedList.get(1)).toEqual(1);

    myLinkedList.deleteAtIndex(1);

    myLinkedList.deleteAtIndex(-1);
    expect(myLinkedList.size).toEqual(3);

    myLinkedList.deleteAtIndex(3);
    expect(myLinkedList.size).toEqual(3);

    myLinkedList.deleteAtIndex(2);
    expect(myLinkedList.size).toEqual(2);

    expect(myLinkedList.get(1)).toEqual(2);
})

