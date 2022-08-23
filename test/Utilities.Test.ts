import { convertListNodeToArray, createListNode } from "../src/Utilities";

test("CreateListNodeTest", () => {
  let head = createListNode([1, 2, 3, 4, 5]);
  expect(head?.print()).toEqual("1->2->3->4->5");
})


test("ConvertListNodeToArrayTest", () => {
  let head = createListNode([1, 2, 3, 4, 5]);
  expect(convertListNodeToArray(head)).toEqual([1, 2, 3, 4, 5]);
})