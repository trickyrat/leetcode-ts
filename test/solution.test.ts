import { Solution } from "../src/Solution";
import { createTreeNodeByDFS, createTreeNodeByBFS, createListNode, convertListNodeToArray } from "../src/Util";

let solution = new Solution();

test("TwoSumTest", () => {
  expect(solution.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(solution.twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(solution.twoSum([3, 3], 6)).toEqual([0, 1]);
  expect(solution.twoSum([1, 3], 6)).toEqual([]);
});


test("AddTwoNumbersTest", () => {
  expect(convertListNodeToArray(solution.addTwoNumbers(createListNode([2, 4, 3]), createListNode([5, 6, 4])))).toEqual([7, 0, 8]);
  expect(convertListNodeToArray(solution.addTwoNumbers(createListNode([0]), createListNode([0])))).toEqual([0]);
  expect(convertListNodeToArray(solution.addTwoNumbers(createListNode([9, 9, 9, 9, 9, 9, 9]), createListNode([9, 9, 9, 9])))).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});

test("LengthOfLongestSubstringTest", () => {
  expect(solution.longestSubstringWithoutRepeating("abcabcbb")).toEqual(3);
  expect(solution.longestSubstringWithoutRepeating("bbbbb")).toEqual(1);
  expect(solution.longestSubstringWithoutRepeating("pwwkew")).toEqual(3);
});

test("ZConvertTest", () => {
  expect(solution.zconvert("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
  expect(solution.zconvert("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI");
  expect(solution.zconvert("A", 1)).toEqual("A");
});

test("ReverseIntNumberTest", () => {
  expect(solution.reverseIntNumber(123)).toEqual(321);
  expect(solution.reverseIntNumber(-123)).toEqual(-321);
  expect(solution.reverseIntNumber(120)).toEqual(21);
  expect(solution.reverseIntNumber(100)).toEqual(1);
  expect(solution.reverseIntNumber(0)).toEqual(0);
  expect(solution.reverseIntNumber(-2147483649)).toEqual(0);
  expect(solution.reverseIntNumber(-2147483648)).toEqual(0);
});


test("PathSumTest", () => {
  let root = createTreeNodeByBFS("1,2,3");
  let root1 = createTreeNodeByBFS("5,4,8,11,null,13,4,7,2,null,null,5,1");
  expect(solution.pathSum(root, 2)).toEqual([]);
  expect(solution.pathSum(root1, 22)).toEqual([[5, 4, 11, 2], [5, 8, 4, 5]]);
});

test("AddDigitTest", () => {
  expect(solution.addDigits(38)).toEqual(2);
  expect(solution.addDigits(0)).toEqual(0);
});

test("ConvertToBase7", () => {
  expect(solution.convertToBase7(100)).toEqual("202");
  expect(solution.convertToBase7(-7)).toEqual("-10");
});

test("FindLUSLength", () => {
  expect(solution.findLUSLength("aba", "cdc")).toEqual(3);
  expect(solution.findLUSLength("aaa", "bbb")).toEqual(3);
  expect(solution.findLUSLength("aaa", "aaa")).toEqual(-1);
});

test("OptimalDivisionTest", () => {
  expect(solution.optimalDivision([1000, 100, 10, 2])).toEqual("1000/(100/10/2)");
  expect(solution.optimalDivision([1000])).toEqual("1000");
  expect(solution.optimalDivision([1000, 100])).toEqual("1000/100");
});

test("CountKDifferenceTest", () => {
  expect(solution.countKDifference([1, 2, 2, 1], 1)).toEqual(4);
  expect(solution.countKDifference([1, 3], 3)).toEqual(0);
  expect(solution.countKDifference([3, 2, 1, 5, 4], 2)).toEqual(3);
})


test("MaximumDifferenceTest", () => {
  expect(solution.maximumDifference([7, 1, 5, 4])).toEqual(4);
  expect(solution.maximumDifference([9, 4, 3, 2])).toEqual(-1);
  expect(solution.maximumDifference([1, 5, 2, 10])).toEqual(9);
})

test("CountMaxOrSubsetsTest", () => {
  expect(solution.countMaxOrSubsets([3, 1])).toEqual(2);
  expect(solution.countMaxOrSubsets([2, 2, 2])).toEqual(7);
  expect(solution.countMaxOrSubsets([3, 2, 1, 5])).toEqual(6);
})


test("PlatesBetweenCandlesTest", () => {
  expect(solution.platesBetweenCandles("**|**|***|", [[2, 5], [5, 9]])).toEqual([2, 3]);
  expect(solution.platesBetweenCandles("***|**|*****|**||**|*", [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]])).toEqual([9, 0, 0, 0, 0]);
})