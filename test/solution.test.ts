import { Solution } from "../src/Solution";
import { Node } from "../src/DataStructures/Node";
import { Utilities } from "../src/Utilities";
import { ListNode } from "../src/DataStructures/ListNode";
import { TreeNode } from "../src/DataStructures/TreeNode";

const solution = new Solution();
const utils = new Utilities();

test.each([
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
  [[1, 3], 6, []]
])("twoSum(%p, %i)", (nums: number[], target: number, expected: number[]) => {
  expect(solution.twoSum(nums, target)).toEqual(expected);
});

test.each([
  [utils.createListNode([2, 4, 3]), utils.createListNode([5, 6, 4]), [7, 0, 8]],
  [utils.createListNode([0]), utils.createListNode([0]), [0]],
  [utils.createListNode([9, 9, 9, 9, 9, 9, 9]), utils.createListNode([9, 9, 9, 9]), [8, 9, 9, 9, 0, 0, 0, 1]]
])("addTwoNumbers(%o, %o)", (l1: ListNode | null, l2: ListNode | null, expected: number[]) => {
  expect(utils.convertListNodeToArray(solution.addTwoNumbers(l1, l2))).toEqual(expected);
});

test.each([
  ["abcabcbb", 3],
  ["bbbbb", 1],
  ["pwwkew", 3],
])("lengthOfLongestSubstring(%s)", (s: string, expected: number) => {
  expect(solution.longestSubstringWithoutRepeating(s)).toEqual(expected);
});

test.each([
  ["PAYPALISHIRING", 3, "PAHNAPLSIIGYIR"],
  ["PAYPALISHIRING", 4, "PINALSIGYAHRPI"],
  ["A", 1, "A"]
])("zConvert(%s, %i)", (s: string, numRows: number, expected: string) => {
  expect(solution.zconvert(s, numRows)).toEqual(expected);
});

test.each([
  [123, 321],
  [-123, -321],
  [120, 21],
  [100, 1],
  [0, 0],
  [-2147483649, 0],
  [-2147483648, 0],
])("reverseIntNumber(%i)", (x: number, expected: number) => {
  expect(solution.reverseIntNumber(x)).toEqual(expected);
});

test.each([
  ["()", true],
  ["())", false],
  ["()[]{}", true],
  ["(]", false],
])("isValidParentheses()", (s: string, expected: boolean) => {
  expect(solution.isValidParentheses(s)).toEqual(expected);
});

test.each([
  [utils.createListNode([1, 2, 4]), utils.createListNode([1, 3, 4]), utils.createListNode([1, 1, 2, 3, 4, 4])],
  [utils.createListNode([]), utils.createListNode([]), utils.createListNode([])],
  [utils.createListNode([]), utils.createListNode([0]), utils.createListNode([0])]
])("mergeTwoLists(%o, %o)", (list1: ListNode | null, list2: ListNode | null, expected: ListNode | null) => {
  expect(solution.mergeTwoLists(list1, list2)).toEqual(expected);
});

test.each([
  [[3, 2, 2, 3], 3, 2],
  [[0, 1, 2, 2, 3, 0, 4, 2], 2, 5]
])("removeElement(%p, %i)", (nums: number[], val: number, expected: number) => {
  expect(solution.removeElement(nums, val)).toEqual(expected);
});

test.each([
  [[1, 2, 3], [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]],
  [[0, 1], [[0, 1], [1, 0]]],
  [[1], [[1]]]
])("permute(%p)", (nums: number[], expected: number[][]) => {
  expect(solution.permute(nums)).toEqual(expected);
});

test.each([
  [[1, 1, 2], [[1, 1, 2], [1, 2, 1], [2, 1, 1]]],
  [[1, 2, 3], [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]]
])("permuteUnique(%p)", (nums: number[], expected: number[][]) => {
  expect(solution.permuteUnique(nums)).toEqual(expected);
});

test.each([
  [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[7, 4, 1], [8, 5, 2], [9, 6, 3]]],
  [[[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]], [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]]
])("rotateImageUnit(%p)", (matrix: number[][], expected: number[][]) => {
  solution.rotate(matrix);
  expect(matrix).toEqual(expected);
});

test.each([
  [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
  [[1], 1],
  [[5, 4, -1, 7, 8], 23]
])("maxSubArray(%p)", (nums: number[], expected: number) => {
  expect(solution.maxSubArray(nums)).toEqual(expected);
});

test.each([
  [[[1, 1, 1], [1, 0, 1], [1, 1, 1]], [[1, 0, 1], [0, 0, 0], [1, 0, 1]]],
  [[[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]], [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]]
])("setZeroes(%p)", (matrix: number[][], expected: number[][]) => {
  solution.setZeroes(matrix)
  expect(matrix).toEqual(expected);
});

test.each([
  [utils.createListNode([1, 1, 2]), utils.createListNode([1, 2])],
  [utils.createListNode([1, 1, 2, 3, 3]), utils.createListNode([1, 2, 3])],
  [null, null]
])("deleteDuplicates(%o)", (head: ListNode | null, expected: ListNode | null) => {
  expect(solution.deleteDuplicates(head)).toEqual(expected);
});

test.each([
  [utils.createTreeNode([3, 9, 20, null, null, 15, 7]), 3],
  [utils.createTreeNode([1, null, 2]), 2]
])("maxDepth(%o)", (root: TreeNode | null, expected: number) => {
  expect(solution.maxDepth(root)).toEqual(expected);
});

test.each([
  [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
  [[1], 1, [], 0, [1]],
  [[0], 0, [1], 1, [1]]
])("merge(%p, %i, %p, %i)", (nums1: number[], m: number, nums2: number[], n: number, expected: number[]) => {
  solution.merge(nums1, m, nums2, n);
  expect(nums1).toEqual(expected)
});

test.each([
  [utils.createTreeNode([1, null, 2, 3]), [1, 3, 2]],
  [utils.createTreeNode([]), []],
  [utils.createTreeNode([1]), [1]]
])("inorderTraversal(%o)", (root: TreeNode | null, expected: number[]) => {
  expect(solution.inorderTraversal(root)).toEqual(expected);
});

test.each([
  [utils.createTreeNode([1, 2, 2, 3, 4, 4, 3]), true],
  [utils.createTreeNode([1, 2, 2, null, 3, null, 3]), false]
])("isSymmetric(%o)", (root: TreeNode | null, expected: boolean) => {
  expect(solution.isSymmetric(root)).toEqual(expected);
});

test.each([
  [utils.createTreeNode([3, 9, 20, null, null, 15, 7]), [[3], [9, 20], [15, 7]]],
  [utils.createTreeNode([1]), [[1]]],
  [utils.createTreeNode([]), []]
])("levelOrder(%o)", (root: TreeNode | null, expected: number[][]) => {
  expect(solution.levelOrder(root)).toEqual(expected);
});

test.each([
  [utils.createTreeNode([1, 2, 3]), 2, []],
  [utils.createTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22, [[5, 4, 11, 2], [5, 8, 4, 5]]]
])("pathSum(%o, %i)", (root: TreeNode | null, targetSum: number, expected: number[][]) => {
  expect(solution.pathSum(root, targetSum)).toEqual(expected);
});

test.each([
  [5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]],
  [1, [[1]]]
])("generate(%i)", (numRows: number, expected: number[][]) => {
  expect(solution.generate(numRows)).toEqual(expected);
});

test.each([
  [[7, 1, 5, 3, 6, 4], 5],
  [[7, 6, 4, 3, 1], 0]
])("maxProfit(%p)", (prices: number[], expected: number) => {
  expect(solution.maxProfit(prices)).toEqual(expected);
});

test("hasCycle()", () => {
  expect(solution.hasCycle(utils.createListNode([1]))).toEqual(false);
  expect(solution.hasCycle(null)).toEqual(false);
  let head2 = utils.createListNode([1, 2]);
  head2!.next!.next = head2;
  expect(solution.hasCycle(head2)).toEqual(true);
  let head3 = utils.createListNode([3, 2, 0, 4]);
  head3!.next!.next!.next!.next = head3;
  expect(solution.hasCycle(head3)).toEqual(true);
});

test.each([
  [utils.createTreeNode([1, null, 2, 3]), [1, 2, 3]],
  [utils.createTreeNode([]), []],
  [utils.createTreeNode([1]), [1]]
])("preorderTraversal(%o)", (root: TreeNode | null, expected: number[]) => {
  expect(solution.preorderTraversal(root)).toEqual(expected);
});

test.each([
  [utils.createTreeNode([1, null, 2, 3]), [3, 2, 1]],
  [utils.createTreeNode([]), []],
  [utils.createTreeNode([1]), [1]]
])("postorderTraversal(%o)", (root: TreeNode | null, expected: number[]) => {
  expect(solution.postorderTraversal(root)).toEqual(expected);
});

test.each([
  [1, "A"], [28, "AB"], [701, "ZY"]
])("convertToTitle(%i)", (columnNumber: number, expected: string) => {
  expect(solution.convertToTitle(columnNumber)).toEqual(expected);
});

test.each([
  ["A", 1], ["AB", 28], ["ZY", 701]
])("titleToNumber(%s)", (columnTitle: string, expected: number) => {
  expect(solution.titleToNumber(columnTitle)).toEqual(expected);
});

test.each([
  [3, 0], [5, 1], [0, 0]
])("trailingZeroes(%i)", (n: number, expected: number) => {
  expect(solution.trailingZeroes(n)).toEqual(expected);
});

test.each([
  [11, 3], [128, 1], [4294967293, 31]
])("hammingWeight(%i)", (n: number, expected: number) => {
  expect(solution.hammingWeight(n)).toEqual(expected);
});

test.each([
  [19, true], [2, false]
])("isHappy(%i)", (n: number, expected: boolean) => {
  expect(solution.isHappy(n)).toEqual(expected);
});

test.each([
  [utils.createListNode([1, 2, 6, 3, 4, 5, 6]), 6, utils.createListNode([1, 2, 3, 4, 5])],
  [utils.createListNode([]), 1, utils.createListNode([])],
  [utils.createListNode([7, 7, 7, 7]), 7, utils.createListNode([])]
])("removeElements(%o, %i)", (head: ListNode | null, val: number, expected: ListNode | null) => {
  expect(solution.removeElements(head, val)).toEqual(expected);
});

test.each([
  [utils.createListNode([1, 2, 3, 4, 5]), utils.createListNode([5, 4, 3, 2, 1])],
  [utils.createListNode([1, 2]), utils.createListNode([2, 1])],
  [utils.createListNode([]), utils.createListNode([])]
])("reverseList(%o)", (head: ListNode | null, expected: ListNode | null) => {
  expect(solution.reverseList(head)).toEqual(expected);
});

test.each([
  [[1, 2, 3, 1], true],
  [[1, 2, 3, 4], false],
  [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true]
])("containsDuplicate(%p)", (nums: number[], expected: boolean) => {
  expect(solution.containsDuplicate(nums)).toEqual(expected);
})

test.each([
  ["anagram", "nagaram", true],
  ["rat", "car", false]
])("isAnagram(%s, %s)", (s: string, t: string, expected: boolean) => {
  expect(solution.isAnagram(s, t)).toEqual(expected);
})

test.each([
  [38, 2], [0, 0]
])("addDigit(%i)", (num: number, expected: number) => {
  expect(solution.addDigits(num)).toEqual(expected);
});

test.each([
  [[1, 2, 2, 1], [2, 2], [2, 2]],
  [[4, 9, 5], [9, 4, 9, 8, 4], [9, 4]]
])("intersect(%p, %p)", (nums1: number[], nums2: number[], expected: number[]) => {
  expect(solution.intersect(nums1, nums2)).toEqual(expected);
});

test.each([
  [2, 91], [0, 1], [1, 10]
])("countNumbersWithUniqueDigits(%i)", (n: number, expected: number) => {
  expect(solution.countNumbersWithUniqueDigits(n)).toEqual(expected);
});

test.each([
  ["a", "b", false],
  ["aa", "ab", false],
  ["aa", "aab", true]
])("canConstruct(%s, %s)", (ransomNote: string, magazine: string, expected: boolean) => {
  expect(solution.canConstruct(ransomNote, magazine)).toEqual(expected);
});

test.each([
  [13, [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]],
  [2, [1, 2]]
])("lexical(%i)", (n: number, expected: number[]) => {
  expect(solution.lexicalOrder(n)).toEqual(expected);
});

test.each([
  ["leetcode", 0], ["loveleetcode", 2], ["aabb", -1]
])("firstUniqChar(%s)", (s: string, expected: number) => {
  expect(solution.firstUniqChar(s)).toEqual(expected);
});

test.each([
  ["abcd", "abcde", "e"], ["", "y", "y"]
])("findTheDifference(%s, %s)", (s: string, t: string, expected: string) => {
  expect(solution.findTheDifference(s, t)).toEqual(expected);
});

test.each([
  [utils.createTreeNode([3, 9, 20, null, null, 15, 7]), 24], [utils.createTreeNode([1]), 0]
])("sumOfLeftLeaves(%o)", (root: TreeNode | null, expected: number) => {
  expect(solution.sumOfLeftLeaves(root)).toEqual(expected);
});

test.each([
  [5, 12], [100, 682289015], [2, 1]
])("numPrimeArrangements(%i)", (n: number, expected: number) => {
  expect(solution.numPrimeArrangements(n)).toEqual(expected);
});

test.each([
  ["a", 1], ["cac", 2], ["zab", 6]
])("findSubstringInWraparoundString(%s)", (p: string, expected: number) => {
  expect(solution.findSubstringInWraparoundString(p)).toEqual(expected);
});

test.each([
  [[1, 1, 2, 2, 2], true], [[3, 3, 3, 3, 4], false], [[3, 3, 2, 2], false]
])("makeSquare(%p)", (matchsticks: number[], expected: boolean) => {
  expect(solution.makeSquare(matchsticks)).toEqual(expected);
});

test.each([
  [[4, 1, 2], [1, 3, 4, 2], [-1, 3, -1]],
  [[2, 4], [1, 2, 3, 4], [3, -1]]
])("nextGreaterElement(%p, %p)", (nums1: number[], nums2: number[], expected: number[]) => {
  expect(solution.nextGreaterElement(nums1, nums2)).toEqual(expected);
});

test.each([
  [6, 3], [1, 1]
])("magicalString(%i)", (n: number, expected: number) => {
  expect(solution.magicalString(n)).toEqual(expected);
});

test.each([
  [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], [1, 2, 4, 7, 5, 3, 6, 8, 9]],
  [[[1, 2], [3, 4]], [1, 2, 3, 4]],
  [[], []]
])("findDiagonalOrder(%p)", (matrix: number[][], expected: number[]) => {
  expect(solution.findDiagonalOrder(matrix)).toEqual(expected);
});

test.each([
  [100, "202"], [-7, "-10"], [0, "0"]
])("convertToBase7(%i)", (num: number, expected: string) => {
  expect(solution.convertToBase7(num)).toEqual(expected);
});

test.each([
  ["aba", "cdc", 3],
  ["aaa", "bbb", 3],
  ["aaa", "aaa", -1],
])("findLUSLength(%s, %s)", (a: string, b: string, expected: number) => {
  expect(solution.findLUSLength(a, b)).toEqual(expected);
});

test.each([
  [[1, 1, 2, 3, 3, 4, 4, 8, 8], 2],
  [[3, 3, 7, 7, 10, 11, 11], 10],
])("singleNonDuplicate(%p)", (nums: number[], expected: number) => {
  expect(solution.singleNonDuplicate(nums)).toEqual(expected);
});

test.each([
  [[1000, 100, 10, 2], "1000/(100/10/2)"],
  [[1000], "1000"],
  [[1000, 100], "1000/100"],
])("optimalDivision(%p)", (nums: number[], expected: string) => {
  expect(solution.optimalDivision(nums)).toEqual(expected);
});

test.each([
  [[[1, 2], [3, 4]], 1, 4, [[1, 2, 3, 4]]],
  [[[1, 2], [3, 4]], 2, 4, [[1, 2], [3, 4]]]
])("matrixReshape(%p, %i, %i)", (mat: number[][], r: number, c: number, expected: number[][]) => {
  expect(solution.matrixReshape(mat, r, c)).toEqual(expected);
});

test("preorder()", () => {
  let root = new Node(1);
  let first_child = new Node(3);
  first_child.children.push(new Node(5));
  first_child.children.push(new Node(6));
  root.children.push(first_child);
  root.children.push(new Node(2));
  root.children.push(new Node(4));
  expect(solution.preorder(root)).toEqual([1, 3, 5, 6, 2, 4]);
  let root2 = null;
  expect(solution.preorder(root2)).toEqual([]);
});

test("postorder()", () => {
  let root = new Node(1);
  let first_child = new Node(3);
  first_child.children.push(new Node(5));
  first_child.children.push(new Node(6));
  root.children.push(first_child);
  root.children.push(new Node(2));
  root.children.push(new Node(4));
  expect(solution.postorder(root)).toEqual([5, 6, 3, 2, 4, 1]);
  let root2 = null;
  expect(solution.postorder(root2)).toEqual([]);
});

test.each([
  [utils.createTreeNode([4, 2, 6, 3, 1, 5]), 1, 2, utils.createTreeNode([4, 1, 1, 2, null, null, 6, 3, 1, 5])],
  [utils.createTreeNode([4, 2, null, 3, 1]), 1, 3, utils.createTreeNode([4, 2, null, 1, 1, 3, null, null, 1])]
])("addOneRow(%o, %i, %i)", (root: TreeNode | null, val: number, depth: number, expected: TreeNode | null) => {
  expect(utils.preorderTraversal(solution.addOneRow(root, val, depth))).toEqual(utils.preorderTraversal(expected));
});

test.each([
  [2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"], [3, 4]],
  [1, ["0:start:0", "0:start:2", "0:end:5", "0:start:6", "0:end:6", "0:end:7"], [8]],
  [2, ["0:start:0", "0:start:2", "0:end:5", "1:start:6", "1:end:6", "0:end:7"], [7, 1]],
  [2, ["0:start:0", "0:start:2", "0:end:5", "1:start:7", "1:end:7", "0:end:8"], [8, 1]],
  [1, ["0:start:0", "0:end:0"], [1]]
])("exclusiveTime(%i, %p)", (n: number, logs: string[], expected: number[]) => {
  expect(solution.exclusiveTime(n, logs)).toEqual(expected);
});

test.each([
  [[[1, 2], [2, 3], [3, 4]], 2], [[[1, 2], [7, 8], [4, 5]], 3]
])("findLongestChain(%p)", (pairs: number[][], expected: number) => {
  expect(solution.findLongestChain(pairs)).toEqual(expected);
});

test.each([
  [utils.createTreeNode([1, 2, 3, 4, null, 2, 4, null, null, 4]), [
    utils.createTreeNode([4]),
    utils.createTreeNode([2, 4]),
  ]],
  [utils.createTreeNode([2, 1, 1]), [utils.createTreeNode([1])]],
  [utils.createTreeNode([2, 2, 2, 3, null, 3, null]), [
    utils.createTreeNode([3]),
    utils.createTreeNode([2, 3]),
  ]]
])("findDuplicateSubtrees(%o)", (root: TreeNode | null, expected: (TreeNode | null)[]) => {
  expect(solution.findDuplicateSubtrees(root)).toEqual(expected);
});

test.each([
  [[1, 2, 3, 4, 5], 4, 3, [1, 2, 3, 4]], [[1, 2, 3, 4, 5], 4, -1, [1, 2, 3, 4]]
])("findClosestElements(%p, %i, %i)", (arr: number[], k: number, x: number, expected: number[]) => {
  expect(solution.findClosestElements(arr, k, x)).toEqual(expected)
});

test.each([
  [utils.createTreeNode([1, 3, 2, 5, 3, null, 9]), 4],
  [utils.createTreeNode([1, 3, 2, 5, null, null, 9, 6, null, 7]), 7],
  [utils.createTreeNode([1, 3, 2, 5]), 2]
])("widthOfBinaryTree(%o)", (root: TreeNode | null, expected: number) => {
  expect(solution.widthOfBinaryTree(root)).toEqual(expected);
});

test.each([
  [3, 1, [1, 2, 3]], [3, 2, [1, 3, 2]]
])("constructArray(%i, %i)", (n: number, k: number, expected: number[]) => {
  expect(solution.constructArray(n, k)).toEqual(expected);
});

test.each([
  [utils.createTreeNode([1, 0, 2]), 1, 2, utils.createTreeNode([1, null, 2])],
  [utils.createTreeNode([3, 0, 4, null, 2, null, null, 1]), 1, 3, utils.createTreeNode([3, 2, null, 1])]
])("trimBST(%o, %i, %i)", (root: TreeNode | null, low: number, high: number, expected: TreeNode | null) => {
  expect(solution.trimBST(root, low, high)).toEqual(expected);
});

test.each([
  [2736, 7236], [9973, 9973]
])("maximumSwap(%i)", (num: number, expected: number) => {
  expect(solution.maximumSwap(num)).toEqual(expected);
});

test.each([
  [1, 1, 2],
  [2, 1, 3],
  [3, 1, 4],
])("flipLights(%i, %i)", (n: number, presses: number, expected: number) => {
  expect(solution.flipLights(n, presses)).toEqual(expected);
});

test.each([
  [["5", "2", "C", "D", "+"], 30],
  [["5", "-2", "4", "C", "D", "9", "+", "+"], 27],
  [["1"], 1]
])("calPoints(%p)", (ops: string[], expected: number) => {
  expect(solution.calPoints(ops)).toEqual(expected);
});

test.each([
  [utils.createTreeNode([5, 4, 5, 1, 1, null, 5]), 2],
  [utils.createTreeNode([1, 4, 5, 4, 4, null, 5]), 2],
])("longestUnivaluePath(%o)", (root: TreeNode | null, expected: number) => {
  expect(solution.longestUnivaluePath(root)).toEqual(expected);
});

test.each([
  ["Hello", "hello"],
  ["here", "here"],
  ["LOVELY", "lovely"]
])("toLowerCase(%s)", (s: string, expected: string) => {
  expect(solution.toLowerCase(s)).toEqual(expected);
});

test.each([
  [["w", "wo", "wor", "worl", "world"], "world"],
  [["a", "banana", "app", "appl", "ap", "apply", "apple"], "apple"]
])("longestWord(%p)", (words: string[], expected: string) => {
  expect(solution.longestWord(words)).toEqual(expected);
});

test.each([
  [["c", "f", "j"], "a", "c"],
  [["c", "f", "j"], "c", "f"],
  [["c", "f", "j"], "d", "f"],
  [["d"], "z", "d"]
])("nextGreatestLetter(%p, %s)", (letters: string[], target: string, expected: string) => {
  expect(solution.nextGreatestLetter(letters, target)).toEqual(expected);
});

test.each([
  [2, 3],
  [3, 2],
])("reachNumber(%i)", (target: number, expected: number) => {
  expect(solution.reachNumber(target)).toEqual(expected);
});

test.each([
  [[2, 3, -1, 8, 4], 3], [[1, -1, 4], 2], [[2, 5], -1]
])("pivotIndex(%p)", (nums: number[], expected: number) => {
  expect(solution.pivotIndex(nums)).toEqual(expected);
});

test.each([
  [1, 22, [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]],
  [47, 85, [48, 55, 66, 77]]
])("selfDividingNumbers(%i, %i, %p)", (left: number, right: number, expected: number[]) => {
  expect(solution.selfDividingNumbers(left, right)).toEqual(expected);
});

test.each([
  [6, 10, 4], [10, 15, 5]
])("countPrimeSetBits(%i, %i)", (left: number, right: number, expected: number) => {
  expect(solution.countPrimeSetBits(left, right)).toEqual(expected);
});

test.each([
  [5, [[4, 2]], 2],
  [1, [[0, 0]], 0]
])("orderOfLargestPlusSign(%i, %p)", (n: number, mines: number[][], expected: number) => {
  expect(solution.orderOfLongestPlusSign(n, mines)).toEqual(expected);
});

test.each([
  [[4, 3, 2, 1, 0], 1],
  [[1, 0, 2, 3, 4], 4]
])("maxChunksToSorted(%p)", (arr: number[], expected: number) => {
  expect(solution.maxChunksToSorted(arr)).toEqual(expected);
});

test.each([
  [[1, 0, 2], true],
  [[1, 2, 0], false],
])("isIdealPermutation(%p)", (nums: number[], expected: boolean) => {
  expect(solution.isIdealPermutation(nums)).toEqual(expected);
});

test.each([
  ["RXXLRXRXL", "XRLXXRRLX", true],
  ["X", "L", false]
])("canTransform(%s, %s)", (start: string, end: string, expected: boolean) => {
  expect(solution.canTransform(start, end)).toEqual(expected);
});

test.each([
  [1, 1, 0],
  [2, 1, 0],
  [2, 2, 1],
])("kthGrammar(%i, %i)", (n: number, k: number, expected: number) => {
  expect(solution.kthGrammar(n, k)).toEqual(expected);
});

test.each([
  ["a1b2", ["a1b2", "a1B2", "A1b2", "A1B2"]],
  ["3z4", ["3z4", "3Z4"]]
])("letterCasePermutation(%s)", (s: string, expected: string[]) => {
  const actual = solution.letterCasePermutation(s);
  actual.sort();
  expected.sort();
  expect(actual).toEqual(expected);
});

test.each([
  [3, 5],
  [1, 1]
])("numTilings(%i)", (n: number, expected: number) => {
  expect(solution.numTilings(n)).toEqual(expected);
});

test.each([
  ["cba", "abcd", "cbad"],
  ["cbafg", "abcd", "cbad"],
])("customSortString(%s, %s)", (order: string, s: string, expected: string) => {
  expect(solution.customSortString(order, s)).toEqual(expected);
});

test.each([
  ["abcde", ["a", "bb", "acd", "ace"], 3],
  ["dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"], 2],
])("numMatchingSubseq(%s, %p)", (s: string, words: string[], expected: number) => {
  expect(solution.numMatchingSubseq(s, words)).toEqual(expected);
});

test.each([
  [0, 5], [5, 0], [3, 5]
])("preimageSizeFZF(%i)", (k: number, expected: number) => {
  expect(solution.preimageSizeFZF(k)).toEqual(expected);
});

test.each([
  [[2, 1, 4, 3], 2, 3, 3],
  [[2, 9, 2, 5, 6], 2, 8, 7],
])("numSubarrayBoundedMax(%p, %i, %i)", (nums: number[], left: number, right: number, expected: number) => {
  expect(solution.numSubarrayBoundedMax(nums, left, right)).toEqual(expected);
});

test.each([
  [1, 1, 1, 0.00000],
  [2, 1, 1, 0.50000],
  [100000009, 33, 17, 1.00000],
])("champagneTower(%i, %i, %i)", (poured: number, query_row: number, query_glass: number, expected: number) => {
  expect(solution.champagneTower(poured, query_row, query_glass)).toBeCloseTo(expected);
});

test.each([
  [[1, 3, 5, 4], [1, 2, 3, 7], 1],
  [[0, 3, 5, 8, 9], [2, 1, 4, 6, 9], 1],
])("minSwap(%p, %p)", (nums1: number[], nums2: number[], expected: number) => {
  expect(solution.minSwap(nums1, nums2)).toEqual(expected);
});

test.each([
  [["gin", "zen", "gig", "msg"], 2],
  [["a"], 1],
])("uniqueMorseRepresentations(%p)", (words: string[], expected: number) => {
  expect(solution.uniqueMorseRepresentations(words)).toEqual(expected);
});

test.each([
  [[1, 2, 3, 4, 5, 6, 7, 8], true],
  [[3, 1], false],
])("splitArraySameAverage(%p)", (nums: number[], expected: boolean) => {
  expect(solution.splitArraySameAverage(nums)).toEqual(expected);
});

test.each([
  [[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "abcdefghijklmnopqrstuvwxyz", [3, 60]],
  [[4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "bbbcccdddaaa", [2, 4]],
])("numberOfLines(%p, %s)", (widths: number[], s: string, expected: number[]) => {
  expect(solution.numberOfLines(widths, s)).toEqual(expected);
});

test.each([
  ["heeellooo", ["hello", "hi", "helo"], 1],
  ["zzzzzyyyyy", ["zzyy", "zy", "zyy"], 3]
])("expressiveWords(%s, %p)", (s: string, words: string[], expected: number) => {
  expect(solution.expressiveWords(s, words)).toEqual(expected);
});

test.each([
  [["9001 discuss.leetcode.com"], ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]],
  [["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"], ["900 google.mail.com", "901 mail.com", "951 com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org", "5 org"]]
])("subdomainVisits(%p)", (cpdomains: string[], expected: string[]) => {
  let actual = solution.subdomainVisits(cpdomains);
  actual.sort();
  expected.sort();
  expect(actual).toEqual(expected);
});

test.each([
  ["(123)", ["(1, 2.3)", "(1, 23)", "(1.2, 3)", "(12, 3)"]]
])("ambiguousCoordinates(%s)", (s: string, expected: string[]) => {
  let actual = solution.ambiguousCoordinates(s);
  actual.sort();
  expected.sort();
  expect(actual).toEqual(expected);
});

test.each([
  [utils.createListNode([0, 1, 2, 3]), [0, 1, 3], 2],
  [utils.createListNode([0, 1, 2, 3, 4]), [0, 3, 1, 4], 2],
])("numComponents(%o, %p)", (head: ListNode | null, nums: number[], expected: number) => {
  expect(solution.numComponents(head, nums)).toEqual(expected);
});

test.each([
  ["Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"], "ball"]
])("mostCommonWord(%s, %p)", (paragraph: string, banned: string[], expected: string) => {
  expect(solution.mostCommonWord(paragraph, banned)).toEqual(expected);
});

test.each([
  ["loveleetcode", "e", [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]],
  ["aaab", "b", [3, 2, 1, 0]]
])("shortestToChar(%s, %s)", (s: string, c: string, expected: number[]) => {
  expect(solution.shortestToChar(s, c)).toEqual(expected);
});

test.each([
  ["ABC", 10],
  ["ABA", 8],
  ["LEETCODE", 92],
])("uniqueLetterString(%s)", (s: string, expected: number) => {
  expect(solution.uniqueLetterString(s)).toEqual(expected);
});

test.each([
  ["()", 1],
  ["(())", 2],
  ["()()", 2],
])("scoreOfParentheses(%s)", (s: string, expected: number) => {
  expect(solution.scoreOfParentheses(s)).toEqual(expected);
});

test.each([
  [[3, 1, 2, 4], [4, 2, 1, 3]],
  [[2, 4, 1, 3], [2, 4, 1, 3]],
  [[0], [0]]
])("sortArrayByParity(%p)", (nums: number[], expected: number[]) => {
  expect(solution.sortArrayByParity(nums)).toEqual(expected);
});

test.each([
  [[3, 1, 2, 4], 17],
  [[11, 81, 94, 43, 3], 444]
])("sumSubarrayMins(%p, %i)", (arr: number[], expected: number) => {
  expect(solution.sumSubarrayMins(arr)).toEqual(expected);
});

test.each([
  [[5, 0, 3, 8, 6], 3],
  [[1, 1, 1, 0, 6, 12], 4],
])("partitionDisjoint(%p)", (nums: number[], expected: number) => {
  expect(solution.partitionDisjoint(nums)).toEqual(expected);
});

test.each([
  ["())", 1],
  ["(((", 3]
])("minAddToMakeValid(%p)", (s: string, expected: number) => {
  expect(solution.minAddToMakeValid(s)).toEqual(expected);
});

test.each([
  [[1, 0, 1, 0, 1], [0, 3]],
  [[1, 1, 0, 1, 1], [-1, -1]],
  [[1, 1, 0, 0, 1], [0, 2]],
])("threeEqualParts(%p)", (arr: number[], expected: number[]) => {
  expect(solution.threeEqualParts(arr)).toEqual(expected);
});

test.each([
  [[[0, 1], [1, 0]], 1], [[[0, 1, 0], [0, 0, 0], [0, 0, 1]], 2], [[[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]], 1]
])("shortestBridge(%p)", (grid: number[][], expected: number) => {
  expect(solution.shortestBridge(grid)).toEqual(expected);
});

test.each([
  ["abc", 7],
  ["aba", 6],
  ["aaa", 3],
])("distinctSubseqII(%s)", (s: string, expected: number) => {
  expect(solution.distinctSubseqII(s)).toEqual(expected);
});

test.each([
  ["IDID", [0, 4, 1, 3, 2]],
  ["III", [0, 1, 2, 3]],
  ["DDI", [3, 2, 0, 1]]
])("DIStringMatch(%s)", (s: string, expected: number[]) => {
  expect(solution.diStringMatch(s)).toEqual(expected);
});

test.each([
  [["cba", "daf", "ghi"], 1], [["a", "b"], 0], [["zyx", "wvu", "tsr"], 3]
])("minDeletionSize(%p)", (strs: string[], expected: number) => {
  expect(solution.minDeletionSize(strs)).toEqual(expected);
});

test.each([
  [[1, 2, 3, 4, 5], [4, 5, 3, 2, 1], true], [[1, 2, 3, 4, 5], [4, 3, 5, 1, 2], false]
])("validateStackSequences(%p, %p)", (pushed: number[], popped: number[], expected: boolean) => {
  expect(solution.validateStackSequences(pushed, popped)).toEqual(expected);
});

test.each([
  [["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz", true],
  [["word", "world", "row"], "worldabcefghijkmnpqstuvxyz", false],
  [["apple", "app"], "abcdefghijklmnopqrstuvwxyz", false]
])("isAlienSorted(%p, %s)", (wrods: string[], order: string, expected: boolean) => {
  expect(solution.isAlienSorted(wrods, order)).toEqual(expected);
});

test.each([
  [[1, 2, 3, 3], 3],
  [[2, 1, 2, 5, 3, 2], 2],
  [[5, 1, 5, 2, 5, 3, 5, 4], 5],
  [[1, 2, 3, 4], -1],
])("repeatedNTimes(%p)", (nums: number[], expected: number) => {
  expect(solution.repeatedNTimes(nums)).toEqual(expected);
});

test.each([
  [[2, 1, 2], 5],
  [[1, 2, 1], 0]
])("largestPerimeter(%p)", (nums: number[], expected: number) => {
  expect(solution.largestPerimeter(nums)).toEqual(expected);
});

test.each([
  [utils.createTreeNode([4, 1, 3, null, null, 2]), 5, utils.createTreeNode([5, 4, null, 1, 3, null, null, 2])],
  [utils.createTreeNode([5, 2, 4, null, 1]), 3, utils.createTreeNode([5, 2, 4, null, 1, null, 3])],
  [utils.createTreeNode([5, 2, 3, null, 1]), 4, utils.createTreeNode([5, 2, 4, null, 1, 3])]
])("insertIntoMaxTree(%o, %i)", (root: TreeNode | null, val: number, expected: TreeNode | null) => {
  expect(solution.insertIntoMaxTree(root, val)).toEqual(expected);
});

test.each([
  ["(()())(())", "()()()"],
  ["(()())(())(()(()))", "()()()()(())"],
  ["()()", ""],
])("removeOuterParentheses(%s)", (s: string, expected: string) => {
  expect(solution.removeOuterParentheses(s)).toEqual(expected);
});

test.each([
  [utils.createTreeNode([1, 0, 1, 0, 1, 0, 1]), 22],
  [utils.createTreeNode([0]), 0],
  [null, 0]
])("sumRootToLeaf(%o)", (root: TreeNode | null, expected: number) => {
  expect(solution.sumRootToLeaf(root)).toEqual(expected);
});

test.each([
  ["&(|(f))", false],
  ["|(f,f,f,t)", true],
  ["!(&(f,t))", true],
])("parseBoolExpr(%s)", (expression: string, expected: boolean) => {
  expect(solution.parseBoolExpr(expression)).toEqual(expected);
});

test.each([
  [[[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]], true],
  [[[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]], false]
])("checkStraightLine(%p)", (coordinates: number[][], expected: boolean) => {
  expect(solution.checkStraightLine(coordinates)).toEqual(expected);
});

test.each([
  [[1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70], 120],
  [[1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60], 150],
  [[1, 1, 1], [2, 3, 4], [5, 6, 4], 6]
])("jobScheduling(%p, %p, %p)", (startTime: number[], endTime: number[], profit: number[], expected: number) => {
  expect(solution.jobScheduling(startTime, endTime, profit)).toEqual(expected);
});

test.each([
  [234, 15],
  [4421, 21]
])("subtractProductAndSum(%i)", (n: number, expected: number) => {
  expect(solution.subtractProductAndSum(n)).toEqual(expected);
});

test.each([
  [utils.createListNode([1, 0, 1]), 5],
  [utils.createListNode([0]), 0]
])("getDecimalValue(%o)", (head: ListNode | null, expected: number) => {
  expect(solution.getDecimalValue(head)).toEqual(expected);
});

test.each([
  ["10#11#12", "jkab"],
  ["1326#", "acz"]
])("freqAlphabets(%s)", (s: string, expected: string) => {
  expect(solution.freqAlphabets(s)).toEqual(expected);
});

test.each([
  [[0, 1, 2, 3, 4, 5, 6, 7, 8], [0, 1, 2, 4, 8, 3, 5, 6, 7]],
  [[1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1], [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]]
])("sortByBits(%p)", (arr: number[], expected: number[]) => {
  expect(solution.sortByBits(arr)).toEqual(expected);
});

test.each([
  [[4, 3, 10, 9, 8], [10, 9]],
  [[4, 4, 7, 6, 7], [7, 7, 6]],
  [[6], [6]]
])("minSubsequence(%p)", (nums: number[], expected: number[]) => {
  expect(solution.minSubsequence(nums)).toEqual(expected);
});

test.each([
  [["mass", "as", "hero", "superhero"], ["as", "hero"]],
  [["leetcode", "et", "code"], ["et", "code"]],
  [["blue", "green", "bu"], []]
])("stringMatching(%p)", (words: string[], expected: string[]) => {
  expect(solution.stringMatching(words)).toEqual(expected);
});

test.each([
  ["a0b1c2", "a0b1c2"],
  ["leetcode", ""],
  ["1229857369", ""]
])("reformat(%s)", (s: string, expected: string) => {
  expect(solution.reformat(s)).toEqual(expected);
});

test.each([
  [[1, 3], 3, ["Push", "Push", "Pop", "Push"]],
  [[1, 2, 3], 3, ["Push", "Push", "Push"]],
  [[1, 2], 4, ["Push", "Push"]]
])("buildArray(%p, %i)", (target: number[], n: number, expected: string[]) => {
  expect(solution.buildArray(target, n)).toEqual(expected);
});

test.each([
  [[1, 2, 3], [3, 2, 7], 4, 1],
  [[4], [4], 4, 1]
])("busyStudent(%p, %p, %i)", (startTime: number[], endTime: number[], queryTime: number, expected: number) => {
  expect(solution.busyStudent(startTime, endTime, queryTime)).toEqual(expected);
});

test.each([
  ["i love eating burger", "burg", 4],
  ["this problem is an easy problem", "pro", 2],
  ["i am tired", "you", -1]
])("isPrefixOfWord(%s, %s)", (sentence: string, searchWord: string, expected: number) => {
  expect(solution.isPrefixOfWord(sentence, searchWord)).toEqual(expected);
});

test.each([
  [[1, 2, 3, 4], [2, 4, 1, 3], true],
  [[7], [7], true],
  [[3, 7, 9], [3, 7, 11], false],
  [[3, 7, 11, 1], [3, 7, 11], false]
])("canBeEqual(%p, %p)", (target: number[], arr: number[], expected: boolean) => {
  expect(solution.canBeEqual(target, arr)).toEqual(expected);
});

test.each([
  [[3, 4, 5, 2], 12],
  [[1, 5, 4, 5], 16],
  [[3, 7], 12]
])("maxProduct(%p)", (nums: number[], expected: number) => {
  expect(solution.maxProduct(nums)).toEqual(expected);
});

test.each([
  [[2, 5, 1, 3, 4, 7], 3, [2, 3, 5, 4, 1, 7]],
  [[1, 2, 3, 4, 4, 3, 2, 1], 4, [1, 4, 2, 3, 3, 2, 4, 1]],
  [[1, 1, 2, 2], 2, [1, 2, 1, 2]]
])("shuffle(%p, %i)", (nums: number[], n: number, expected: number[]) => {
  expect(solution.shuffle(nums, n)).toEqual(expected);
});


test.each([
  [[8, 4, 6, 2, 3], [4, 2, 4, 2, 3]],
  [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
  [[10, 1, 1, 6], [9, 0, 1, 6]]
])("finalPrices(%p)", (prices: number[], expected: number[]) => {
  expect(solution.finalPrices(prices)).toEqual(expected);
});

test.each([
  [[4000, 3000, 1000, 2000], 2500.00000],
  [[1000, 2000, 3000], 2000.00000]
])("average(%p)", (salary: number[], expected: number) => {
  expect(solution.average(salary)).toEqual(expected);
});

test.each([
  [[3, 5, 1], true], [[1, 2, 4], false]
])("canMakeArithmeticProgression(%p)", (arr: number[], expected: boolean) => {
  expect(solution.canMakeArithmeticProgression(arr)).toEqual(expected);
});

test.each([
  [3, 7, 3], [8, 10, 1]
])("countOdds(%i, %i)", (low: number, high: number, expected: number) => {
  expect(solution.countOdds(low, high)).toEqual(expected);
});

test.each([
  [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 25],
  [[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], 8],
  [[[5]], 5]
])("diagonalSum(%p)", (mat: number[][], expected: number) => {
  expect(solution.diagonalSum(mat)).toEqual(expected);
});

test.each([
  [[[1, 0, 0], [0, 0, 1], [1, 0, 0]], 1],
  [[[1, 0, 0], [0, 1, 0], [0, 0, 1]], 3]
])("numSpecial(%p)", (mat: number[][], expected: number) => {
  expect(solution.numSpecial(mat)).toEqual(expected);
});

test.each([
  [[1, 4, 2, 5, 3], 58], [[1, 2], 3], [[10, 11, 12], 66]
])("sumOddLengthSubarrays(%p)", (arr: number[], expected: number) => {
  expect(solution.sumOddLengthSubarrays(arr)).toEqual(expected);
});

test.each([
  ["  this   is  a sentence ", "this   is   a   sentence"],
  [" practice   makes   perfect", "practice   makes   perfect "]
])("reorderSpaces(%s, %s)", (text: string, expected: string) => {
  expect(solution.reorderSpaces(text)).toEqual(expected);
});

test.each([
  [["d1/", "d2/", "../", "d21/", "./"], 2],
  [["d1/", "d2/", "./", "d3/", "../", "d31/"], 3],
  [["d1/", "../", "../", "../"], 0],
])("minOperations(%p)", (logs: string[], expected: number) => {
  expect(solution.minOperations(logs)).toEqual(expected);
});

test.each([
  [[3, 5], 2],
  [[0, 0], -1],
  [[0, 4, 3, 0, 4], 3]
])("specialArray(%p)", (nums: number[], expected: number) => {
  expect(solution.specialArray(nums)).toEqual(expected);
});

test.each([
  [[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3], 2.0000],
  [[6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0], 4.0000],
  [[6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4], 4.77777]
])("trimMean(%p)", (arr: number[], expected: number) => {
  expect(solution.trimMean(arr)).toBeCloseTo(expected);
});

test.each([
  [[[1, 2, 5], [2, 1, 7], [3, 1, 9]], 2, [2, 1]],
  [[[23, 11, 21]], 9, [23, 11]],
  [[[1, 2, 13], [2, 1, 7], [0, 1, 9]], 2, [1, 2]],
])("BestCoordinate(%p, %p)", (towers: number[][], radius: number, expected: number[]) => {
  expect(solution.bestCoordinate(towers, radius)).toEqual(expected);
});

test.each([
  ["aa", 0],
  ["abca", 2],
  ["cbzxy", -1],
])("maxLengthBetweenEqualCharacters(%s)", (s: string, expected: number) => {
  expect(solution.maxLengthBetweenEqualCharacters(s)).toEqual(expected);
});

test.each([
  [[1, 1, 2, 2, 2, 3], [3, 1, 1, 2, 2, 2]],
  [[2, 3, 1, 3, 2], [1, 3, 3, 2, 2]],
  [[-1, 1, -6, 4, 5, -6, 1, 4, 1], [5, -1, 4, 4, -6, -6, 1, 1, 1]]
])("frequencySort(%p)", (nums: number[], expected: number[]) => {
  expect(solution.frequencySort(nums)).toEqual(expected);
});

test.each([
  [[5, 7, 1, 4], 3, [12, 10, 16, 13]], [[1, 2, 3, 4], 0, [0, 0, 0, 0]], [[2, 4, 9, 3], -2, [12, 5, 6, 13]]
])("decrypt(%p, %i)", (code: number[], k: number, expected: number[]) => {
  expect(solution.decrypt(code, k)).toEqual(expected);
});

test.each([
  [["ab", "c"], ["a", "bc"], true],
  [["a", "cb"], ["ab", "c"], false],
  [["abc", "d", "defg"], ["abcddefg"], true],
])("ArrayStringAreEqual(%p, %p)", (word1: string[], word2: string[], expected: boolean) => {
  expect(solution.arrayStringAreEqual(word1, word2)).toEqual(expected);
});

test.each([
  ["ababc", "ab", 2],
  ["ababc", "ba", 1],
  ["ababc", "ac", 0],
])("MaxRepeating(%s, %s)", (sequence: string, word: string, expected: number) => {
  expect(solution.maxRepeating(sequence, word)).toEqual(expected);
});

test.each([
  [[[1, 2, 3], [3, 2, 1]], 6],
  [[[1, 5], [7, 3], [3, 5]], 10],
  [[[2, 8, 7], [7, 1, 3], [1, 9, 5]], 17],
])("maximumWealth(%p)", (accounts: number[][], expected: number) => {
  expect(solution.maximumWealth(accounts)).toEqual(expected);
});

test.each([
  [[10, 20, 5], [70, 50, 30], 2, 105.00000],
  [[3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3, 30.66666]
])("minCostToHireWorkers(%p, %p, %i)", (quality: number[], wage: number[], k: number, expected: number) => {
  expect(solution.minCostToHireWorkers(quality, wage, k)).toBeCloseTo(expected);
});

test.each([
  [[1], 1, 1],
  [[1, 2], 4, -1],
  [[2, -1, 2], 3, 3],
])("shortestSubarray(%p, %i)", (nums: number[], k: number, expected: number) => {
  expect(solution.shortestSubarray(nums, k)).toEqual(expected);
});

test.each([
  [[2, 7, 11, 15], [1, 10, 4, 11], [2, 11, 7, 15]],
  [[12, 24, 8, 32], [13, 25, 32, 11], [24, 32, 8, 12]]
])("advantageCount(%p, %p)", (nums1: number[], nums2: number[], expected: number[]) => {
  expect(solution.advantageCount(nums1, nums2)).toEqual(expected);
});

test.each([
  [utils.createListNode([1, 2, 3, 4, 5]), utils.createListNode([3, 4, 5])],
  [utils.createListNode([1, 2, 3, 4, 5, 6]), utils.createListNode([4, 5, 6])]
])("middleNode(%o)", (head: ListNode | null, expected: ListNode | null) => {
  expect(solution.middleNode(head)).toEqual(expected);
});

test.each([
  [[[1, 2], [3, 4]], 17], [[[2]], 5], [[[1, 0], [0, 2]], 8]
])("projectionArea(%p)", (grid: number[][], expected: number) => {
  expect(solution.projectionArea(grid)).toEqual(expected);
});

test.each([
  [4, [[1, 2], [1, 3], [2, 4]], true],
  [3, [[1, 2], [1, 3], [2, 3]], false],
  [5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]], false]
])("possibleBipartition(%i, %p)", (n: number, dislikes: number[][], expected: boolean) => {
  expect(solution.possibleBipartition(n, dislikes)).toEqual(expected);
});

test.each([
  [[1, 2, 1], 3], [[0, 1, 2, 2], 3], [[1, 2, 3, 2, 2], 4]
])("totalFruit(%p)", (fruits: number[], expected: number) => {
  expect(solution.totalFruit(fruits)).toEqual(expected);
});

test.each([
  ["G()(al)", "Goal"], ["G()()()()(al)", "Gooooal"], ["(al)G(al)()()G", "alGalooG"]
])("interpret(%s)", (command: string, expected: string) => {
  expect(solution.interpret(command)).toEqual(expected);
});

test.each([
  ["ab", ["ad", "bd", "aaab", "baa", "badab"], 2],
  ["abc", ["a", "b", "c", "ab", "ac", "bc", "abc"], 7],
  ["cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"], 4],
])("countConsistentStrings(%s, %p)", (allowed: string, words: string[], expected: number) => {
  expect(solution.countConsistentStrings(allowed, words)).toEqual(expected);
});

test.each([
  ["1-23-45 6", "123-456"], ["123 4-567", "123-45-67"], ["123 4-5678", "123-456-78"]
])("reformatNumber(%s)", (s: string, expected: string) => {
  expect(solution.reformatNumber(s)).toEqual(expected);
})

test.each([
  [[1, 1, 0, 0], [0, 1, 0, 1], 0],
  [[1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1], 3]
])("countStudent(%p, %P)", (students: number[], sandwiches: number[], expected: number) => {
  expect(solution.countStudents(students, sandwiches)).toEqual(expected);
})

test.each([
  ["book", true],
  ["textbook", false],
])("halvesAreAlike(%s)", (s: string, expected: boolean) => {
  expect(solution.halvesAreAlike(s)).toEqual(expected);
});

test.each([
  [[[1, 3], [2, 2], [3, 1]], 4, 8],
  [[[5, 10], [2, 5], [4, 7], [3, 9]], 10, 91],
])("maximumUnits(%p, %i)", (boxTypes: number[][], truckSize: number, expected: number) => {
  expect(solution.maximumUnits(boxTypes, truckSize)).toEqual(expected);
});

test.each([
  [[-5, 1, 5, 0, -7], 1],
  [[-4, -3, -2, -1, 4, 3, 2], 0],
])("largestAltitude(%p)", (gain: number[], expected: number) => {
  expect(solution.largestAltitude(gain)).toEqual(expected);
});

test.each([
  [1, 10, 2],
  [5, 15, 2],
  [19, 28, 2],
])("countBalls(%i, %i)", (lowLimit: number, highLimit: number, expected: number) => {
  expect(solution.countBalls(lowLimit, highLimit)).toEqual(expected);
})

test.each([
  ["ca", 2],
  ["cabaabac", 0],
  ["aabccabba", 3]
])("minimumLength(%s)", (s: string, expected: number) => {
  expect(solution.minimumLength(s)).toEqual(expected);
});

test.each([
  ["abc", "pqr", "apbqcr"],
  ["ab", "pqrs", "apbqrs"],
  ["abcd", "pq", "apbqcd"]
])("mergeAlternately(%s, %s)", (word1: string, word2: string, expected: string) => {
  expect(solution.mergeAlternately(word1, word2)).toEqual(expected);
})

test.each([
  [[["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver", 1],
  [[["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], "type", "phone", 2]
])("countMatches(%p, %s, %s)", (items: string[][], ruleKey: string, ruleValue: string, expected: number) => {
  expect(solution.countMatches(items, ruleKey, ruleValue)).toEqual(expected);
})

test.each([
  [3, 4, [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]], 2],
  [3, 4, [[3, 4]], 0],
  [3, 4, [[2, 3]], -1]
])("nearestValidPoint(%i, %i, %p)", (x: number, y: number, points: number[][], expected: number) => {
  expect(solution.nearestValidPoint(x, y, points)).toEqual(expected);
})

test.each([
  ["1001", false],
  ["110", true]
])("checkOnesSegment(%s)", (s: string, expected: boolean) => {
  expect(solution.checkOnesSegment(s)).toEqual(expected);
})

test.each([
  ["bank", "kanb", true],
  ["attack", "defend", false],
  ["kelb", "kelb", true]
])("areAlmostEqual(%s, %s)", (s1: string, s2: string, expected: boolean) => {
  expect(solution.areAlmostEqual(s1, s2)).toEqual(expected);
})

test.each([
  [[10, 20, 30, 5, 10, 50], 65],
  [[10, 20, 30, 40, 50], 150],
  [[12, 17, 15, 13, 10, 11, 12], 33]
])("maxAscendingSum(%p)", (nums: number[], expected: number) => {
  expect(solution.maxAscendingSum(nums)).toEqual(expected);
})

test.each([
  [[-1, -2, -3, -4, 3, 2, 1], 1],
  [[1, 5, 0, 2, -3], 0],
  [[-1, 1, -1, 1, -1], -1],
])("arraySign(%p)", (nums: number[], expected: number) => {
  expect(solution.arraySign(nums)).toEqual(expected);
})

test.each([
  [5, 2, 3],
  [6, 5, 1],
])("findTheWinner(%i, %i)", (n: number, k: number, expected: number) => {
  expect(solution.findTheWinner(n, k)).toEqual(expected);
});

test.each([
  [[1, 7, 3, 6, 5, 6], 3],
  [[1, 2, 3], -1],
])("findMiddleIndex(%p)", (nums: number[], expected: number) => {
  expect(solution.findMiddleIndex(nums)).toEqual(expected);
});

test.each([
  [[1, 2, 2, 1], 1, 4],
  [[1, 3], 3, 0],
  [[3, 2, 1, 5, 4], 2, 3],
])("countKDifference(%p, %i)", (nums: number[], k: number, expected: number) => {
  expect(solution.countKDifference(nums, k)).toEqual(expected);
});

test.each([
  [["--X", "X++", "X++"], 1],
  [["++X", "++X", "X++"], 3],
  [["X++", "++X", "--X", "X--"], 0],
])("finalValueAfterOperations(%p)", (operations: string[], expected: number) => {
  expect(solution.finalValueAfterOperations(operations)).toEqual(expected);
});

test.each([
  [[7, 1, 5, 4], 4],
  [[9, 4, 3, 2], -1],
  [[1, 5, 2, 10], 9],
])("maximumDifference(%p)", (nums: number[], expected: number) => {
  expect(solution.maximumDifference(nums)).toEqual(expected);
});

test.each([
  ["XXX", 1],
  ["XXOX", 2],
  ["OOOO", 0]
])("minimumMoves(%s)", (s: string, expected: number) => {
  expect(solution.minimumMoves(s)).toEqual(expected);
});

test.each([
  [[1, 1, 3, 2], [2, 3], [3], [3, 2]],
  [[3, 1], [2, 3], [1, 2], [2, 3, 1]],
  [[1, 2, 2], [4, 3, 3], [5], []],
])("twoOutOfThree(%p, %p, %p)", (nums1: number[], nums2: number[], nums3: number[], expected: number[]) => {
  expected = expected.sort((a, b) => a - b);
  let actual = solution.twoOutOfThree(nums1, nums2, nums3);
  actual = actual.sort((a, b) => a - b);
  expect(actual).toEqual(expected);
});

test.each([
  [[3, 1], 2],
  [[2, 2, 2], 7],
  [[3, 2, 1, 5], 6],
])("countMaxOrSubsets(%p)", (nums: number[], expected: number) => {
  expect(solution.countMaxOrSubsets(nums)).toEqual(expected);
});

test.each([
  ["**|**|***|", [[2, 5], [5, 9]], [2, 3]],
  ["***|**|*****|**||**|*", [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]], [9, 0, 0, 0, 0]]
])("platesBetweenCandles(%s, %p)", (s: string, queries: number[][], expected: number[]) => {
  expect(solution.platesBetweenCandles(s, queries)).toEqual(expected);
});

test.each([
  ["ilovecodingonleetcode", "code", 2],
  ["abcba", "abc", 1],
  ["abbaccaddaeea", "aaaaa", 1],
])("rearrangeCharacters(%s, %s)", (s: string, target: string, expected: number) => {
  expect(solution.rearrangeCharacters(s, target)).toEqual(expected);
});