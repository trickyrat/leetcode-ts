import { TreeNode } from "../src/DataStructures/TreeNode";
import { ListNode } from "../src/DataStructures/ListNode";
import { Util } from "../src/Util";
import { expect, test } from 'vitest'
import { Node } from "../src/DataStructures/Node";

const util = new Util();

test.each([
  [[1, 2, 3, 4, 5], "1->2->3->4->5"],
  [[1, 1, 1, 2, 2, 2], "1->1->1->2->2->2"]
])("generateListNode(%o)", (nums: number[], expected: string) => {
  const head = util.generateListNode(nums);
  expect(util.convertListNodeToString(head)).toEqual(expected);
})

test.each([
  [util.generateListNode([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]],
  [util.generateListNode([1]), [1]],
  [util.generateListNode([]), []],
])("convertListNodeToArray", (head: ListNode | null, expected: number[]) => {
  expect(util.convertListNodeToArray(head)).toEqual(expected);
})

test.each([
  [new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), "1->2->3->4->5"],
  [new ListNode(1), "1"],
  [null, ""],
])("convertListNodeToString", (head: ListNode | null, expected: string) => {
  const actual = util.convertListNodeToString(head)
  expect(actual).toEqual(expected);
})

test("convert circular ListNode to string", () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = head;

  const actual = util.convertListNodeToString(head);
  expect(actual).toEqual("1->2->3->1");
})


test.each([
  [util.generateTreeNode([1, null, 2, 3]), [1, 2, 3]],
  [null, []]
])("preorderTraversal(%o)", (root: TreeNode | null, expected: number[]) => {
  expect(util.preorderTraversal(root)).toEqual(expected);
})

test.each([
  ["1", true],
  ["a", false]
])("isDigit(%s)", (ch: string, expected: boolean) => {
  expect(util.isDigit(ch)).toEqual(expected);
})

test.each([
  ["1", false],
  ["a", true],
  ["A", true]
])("isLetter(%s)", (ch: string, expected: boolean) => {
  expect(util.isLetter(ch)).toEqual(expected);
})

test.each([
  [new TreeNode(1, new TreeNode(2), new TreeNode(3)), util.generateTreeNode([1, 2, 3]), true],
  [new TreeNode(1, new TreeNode(2), new TreeNode(3)), util.generateTreeNode([1, null, 2]), false],
  [new TreeNode(1, new TreeNode(2), new TreeNode(3)), util.generateTreeNode([1, 3, 2]), false]
])("isSameTree(%o, %o)", (lhs: TreeNode | null, rhs: TreeNode | null, expected: boolean) => {
  expect(util.isSameTree(lhs, rhs)).toEqual(expected);
})


test.each([
  [[1, 2, 3], new TreeNode(1, new TreeNode(2), new TreeNode(3))],
  [[1, null, 2], new TreeNode(1, null, new TreeNode(2))],
  [[1, 2], new TreeNode(1, new TreeNode(2))],
  [[1, 0, 2], new TreeNode(1, new TreeNode(0), new TreeNode(2))]
])("generateTreeNode(%o, %o)", (nums: (number | null)[], expected: TreeNode | null) => {
  const actual = util.generateTreeNode(nums);
  expect(actual).toEqual(expected);
})

test.each([
  [[1, null, 2, 3], new Node(1, [new Node(2), new Node(3)])],
  [[1, null, 2, null, 3, 4], new Node(1, [new Node(2, [new Node(3), new Node(4)])])],
  [[1, null, 2, null, 3], new Node(1, [new Node(2, [new Node(3)])])]
])("generateNTreeNode(%o, %o)", (nums: (number | null)[], expected: Node | null) => {
  expect(util.generateNTreeNode(nums)).toEqual(expected);
})