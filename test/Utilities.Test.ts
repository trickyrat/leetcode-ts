import { TreeNode } from "../src/DataStructures/TreeNode";
import { Utilities } from "../src/Utilities";

const utils = new Utilities();

test("CreateListNodeTest", () => {
  const head = utils.createListNode([1, 2, 3, 4, 5]);
  expect(head?.print()).toEqual("1->2->3->4->5");
})

test("ConvertListNodeToArrayTest", () => {
  const head = utils.createListNode([1, 2, 3, 4, 5]);
  expect(utils.convertListNodeToArray(head)).toEqual([1, 2, 3, 4, 5]);
})

test("PreorderTraversalTest", () => {
  const root = utils.createTreeNode([1, null, 2, 3]);
  const actual = utils.preorderTraversal(root)
  expect(actual).toEqual([1, 2, 3]);
  expect(utils.preorderTraversal(null)).toEqual([]);
})

test("IsDigitTest", () => {
  expect(utils.isDigit("1")).toEqual(true);
  expect(utils.isDigit("a")).toEqual(false);
})

test("IsSameTreeTest", () => {
  const expected1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  const actual1 = utils.createTreeNode([1, 2, 3])
  const actual2 = utils.createTreeNode([1, null, 2]);
  const actual3 = utils.createTreeNode([1, 3, 2]);

  expect(utils.isSameTree(expected1, actual1)).toEqual(true);
  expect(utils.isSameTree(expected1, actual2)).toEqual(false);
  expect(utils.isSameTree(expected1, actual3)).toEqual(false);
})