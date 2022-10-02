import { Utilities } from "../src/Utilities";

let utils = new Utilities();

test("CreateListNodeTest", () => {
  let head = utils.createListNode([1, 2, 3, 4, 5]);
  expect(head?.print()).toEqual("1->2->3->4->5");
})


test("ConvertListNodeToArrayTest", () => {
  let head = utils.createListNode([1, 2, 3, 4, 5]);
  expect(utils.convertListNodeToArray(head)).toEqual([1, 2, 3, 4, 5]);
})