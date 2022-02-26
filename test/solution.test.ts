import { Solution } from "../src/Solution";
import { Util } from "../src/Util";

let solution = new Solution();
let util = new Util();

test("TwoSumTest", () => {
  expect(solution.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(solution.twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(solution.twoSum([3, 3], 6)).toEqual([0, 1]);
  expect(solution.twoSum([1, 3], 6)).toEqual([]);
});


test("AddTwoNumbersTest", () => {
  expect(util.convertListNodeToArray(solution.addTwoNumbers(util.createListNode([2, 4, 3]), util.createListNode([5, 6, 4])))).toEqual([7, 0, 8]);
  expect(util.convertListNodeToArray(solution.addTwoNumbers(util.createListNode([0]), util.createListNode([0])))).toEqual([0]);
  expect(util.convertListNodeToArray(solution.addTwoNumbers(util.createListNode([9, 9, 9, 9, 9, 9, 9]), util.createListNode([9, 9, 9, 9])))).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});

test("LengthOfLongestSubstringTest", () => {
  expect(solution.longestSubstringWithoutRepeating("abcabcbb")).toEqual(3);
  expect(solution.longestSubstringWithoutRepeating("bbbbb")).toEqual(1);
  expect(solution.longestSubstringWithoutRepeating("pwwkew")).toEqual(3);
});

test("OptimalDivisionTest", () => {
  expect(solution.optimalDivision([1000, 100, 10, 2])).toEqual("1000/(100/10/2)");
});


test("MaximumDifferenceTest", () => {
  expect(solution.maximumDifference([7, 1, 5, 4])).toEqual(4);
  expect(solution.maximumDifference([9, 4, 3, 2])).toEqual(-1);
  expect(solution.maximumDifference([1, 5, 2, 10])).toEqual(9);
})