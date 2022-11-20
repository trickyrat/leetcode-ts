import { TreeNode } from "../src/DataStructures/TreeNode";
import { ListNode } from "../src/DataStructures/ListNode";
import { Utilities } from "../src/Utilities";

const utils = new Utilities();

test.each([
  [[1, 2, 3, 4, 5], "1->2->3->4->5"],
  [[1, 1, 1, 2, 2, 2], "1->1->1->2->2->2"]
])("Utilities.createListNode(%o)", (nums: number[], expected: string) => {
  const head = utils.createListNode(nums);
  expect(head?.toString()).toEqual(expected);
})

test.each([
  [utils.createListNode([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]],
  [utils.createListNode([1]), [1]],
])("Utilities.convertListNodeToArray(%p)", (head: ListNode | null, expected: number[]) => {
  expect(utils.convertListNodeToArray(head)).toEqual(expected);
})

test.each([
  [utils.createTreeNode([1, null, 2, 3]), [1, 2, 3]],
  [null, []]
])("Utilities.preorderTraversal(%o)", (root: TreeNode | null, expected: number[]) => {
  expect(utils.preorderTraversal(root)).toEqual(expected);
})

test.each([
  ["1", true],
  ["a", false]
])("Utilities.isDigit(%s)", (ch: string, expected: boolean) => {
  expect(utils.isDigit(ch)).toEqual(expected);
})

test.each([
  ["1", false],
  ["a", true],
  ["A", true]
])("Utilities.isLetter(%s)", (ch: string, expected: boolean) => {
  expect(utils.isLetter(ch)).toEqual(expected);
})

test.each([
  [new TreeNode(1, new TreeNode(2), new TreeNode(3)), utils.createTreeNode([1, 2, 3]), true],
  [new TreeNode(1, new TreeNode(2), new TreeNode(3)), utils.createTreeNode([1, null, 2]), false],
  [new TreeNode(1, new TreeNode(2), new TreeNode(3)), utils.createTreeNode([1, 3, 2]), false]
])("Utilities.isSameTree(%o, %o)", (lhs: TreeNode | null, rhs: TreeNode | null, expected: boolean) => {
  expect(utils.isSameTree(lhs, rhs)).toEqual(expected);
})