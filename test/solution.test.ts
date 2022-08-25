import { Solution } from "../src/Solution";
import { Node } from "../src/Node";
import { createTreeNodeByBFS, createListNode, convertListNodeToArray, preorderTraversal } from "../src/Utilities";

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

test("IsValidParenthesesTest", () => {
  expect(solution.isValidParentheses("()")).toEqual(true);
  expect(solution.isValidParentheses("())")).toEqual(false);
  expect(solution.isValidParentheses("()[]{}")).toEqual(true);
  expect(solution.isValidParentheses("(]")).toEqual(false);
})

test("MergeTwoListsTest", () => {
  expect(solution.mergeTwoLists(createListNode([1, 2, 4]), createListNode([1, 3, 4]))).toEqual(createListNode([1, 1, 2, 3, 4, 4]));
  expect(solution.mergeTwoLists(createListNode([]), createListNode([]))).toEqual(createListNode([]));
  expect(solution.mergeTwoLists(createListNode([]), createListNode([0]))).toEqual(createListNode([0]));
})

test("RemoveElementTest", () => {
  expect(solution.removeElement([3, 2, 2, 3], 3)).toEqual(2);
  expect(solution.removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
})

test("PermuteTest", () => {
  expect(solution.permute([1, 2, 3])).toEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
  expect(solution.permute([0, 1])).toEqual([[0, 1], [1, 0]]);
  expect(solution.permute([1])).toEqual([[1]]);
})

test("PermuteUniqueTest", () => {
  expect(solution.permuteUnique([1, 1, 2])).toEqual([[1, 1, 2], [1, 2, 1], [2, 1, 1]]);
  expect(solution.permuteUnique([1, 2, 3])).toEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
})

test("RotateImageUnitTest", () => {
  let nums1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  solution.rotate(nums1)
  expect(nums1).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
  let nums2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
  solution.rotate(nums2);
  expect(nums2).toEqual([[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]);
});

test("MaxSubArrayTest", () => {
  expect(solution.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  expect(solution.maxSubArray([1])).toEqual(1);
  expect(solution.maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
})

test("SetZeroesTest", () => {
  let input1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
  solution.setZeroes(input1)
  expect(input1).toEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]]);
  let input2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
  solution.setZeroes(input2)
  expect(input2).toEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);
});

test("DeleteDuplicatesTest", () => {
  expect(solution.deleteDuplicates(createListNode([1, 1, 2]))).toEqual(createListNode([1, 2]));
  expect(solution.deleteDuplicates(createListNode([1, 1, 2, 3, 3]))).toEqual(createListNode([1, 2, 3]));
})

test("MaxDepthTest", () => {
  expect(solution.maxDepth(createTreeNodeByBFS([3, 9, 20, null, null, 15, 7]))).toEqual(3);
  expect(solution.maxDepth(createTreeNodeByBFS([1, null, 2]))).toEqual(2);
})

test("MergeTest", () => {
  let nums1 = [1, 2, 3, 0, 0, 0];
  solution.merge(nums1, 3, [2, 5, 6], 3);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
  let nums2 = [1];
  solution.merge(nums2, 1, [], 0);
  expect(nums2).toEqual([1])
  let nums3 = [0];
  solution.merge(nums3, 0, [1], 1);
  expect(nums3).toEqual([1])
})

test("InorderTraversalTest", () => {
  expect(solution.inorderTraversal(createTreeNodeByBFS([1, null, 2, 3]))).toEqual([1, 3, 2]);
  expect(solution.inorderTraversal(createTreeNodeByBFS([]))).toEqual([]);
  expect(solution.inorderTraversal(createTreeNodeByBFS([1]))).toEqual([1]);
})

test("IsSymmetricTest", () => {
  expect(solution.isSymmetric(createTreeNodeByBFS([1, 2, 2, 3, 4, 4, 3]))).toEqual(true);
  expect(solution.isSymmetric(createTreeNodeByBFS([1, 2, 2, null, 3, null, 3]))).toEqual(false);
})

test("LevelOrderTest", () => {
  expect(solution.levelOrder(createTreeNodeByBFS([3, 9, 20, null, null, 15, 7]))).toEqual([[3], [9, 20], [15, 7]]);
  expect(solution.levelOrder(createTreeNodeByBFS([1]))).toEqual([[1]]);
  expect(solution.levelOrder(createTreeNodeByBFS([]))).toEqual([]);
})

test("PathSumTest", () => {
  let root = createTreeNodeByBFS([1, 2, 3]);
  let root1 = createTreeNodeByBFS([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
  expect(solution.pathSum(root, 2)).toEqual([]);
  expect(solution.pathSum(root1, 22)).toEqual([[5, 4, 11, 2], [5, 8, 4, 5]]);
});

test("GenerateTest", () => {
  expect(solution.generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  expect(solution.generate(1)).toEqual([[1]]);
})

test("MaxProfitTest", () => {
  expect(solution.maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
  expect(solution.maxProfit([7, 6, 4, 3, 1])).toEqual(0);
})

test("HasCycleTest", () => {
  expect(solution.hasCycle(createListNode([1]))).toEqual(false);
  let head2 = createListNode([1, 2]);
  head2!.next!.next = head2;
  expect(solution.hasCycle(head2)).toEqual(true);
  let head3 = createListNode([3, 2, 0, 4]);
  head3!.next!.next!.next!.next = head3;
  expect(solution.hasCycle(head3)).toEqual(true);
})

test("PreorderTraversalTest", () => {
  expect(solution.preorderTraversal(createTreeNodeByBFS([1, null, 2, 3]))).toEqual([1, 2, 3]);
  expect(solution.preorderTraversal(createTreeNodeByBFS([]))).toEqual([]);
  expect(solution.preorderTraversal(createTreeNodeByBFS([1]))).toEqual([1]);
})

test("PostorderTraversalTest", () => {
  expect(solution.postorderTraversal(createTreeNodeByBFS([1, null, 2, 3]))).toEqual([3, 2, 1]);
  expect(solution.postorderTraversal(createTreeNodeByBFS([]))).toEqual([]);
  expect(solution.postorderTraversal(createTreeNodeByBFS([1]))).toEqual([1]);
})

test("ConvertToTitleTest", () => {
  expect(solution.convertToTitle(1)).toEqual("A");
  expect(solution.convertToTitle(28)).toEqual("AB");
  expect(solution.convertToTitle(701)).toEqual("ZY");
})

test("TitleToNumberTest", () => {
  expect(solution.titleToNumber("A")).toEqual(1);
  expect(solution.titleToNumber("AB")).toEqual(28);
  expect(solution.titleToNumber("ZY")).toEqual(701);
})

test("TrailingZeroesTest", () => {
  expect(solution.trailingZeroes(3)).toEqual(0);
  expect(solution.trailingZeroes(5)).toEqual(1);
  expect(solution.trailingZeroes(0)).toEqual(0);
});

test("HammingWeightTest", () => {
  expect(solution.hammingWeight(11)).toEqual(3);
  expect(solution.hammingWeight(128)).toEqual(1);
  expect(solution.hammingWeight(4294967293)).toEqual(31);
})

test("IsHappyTest", () => {
  expect(solution.isHappy(19)).toEqual(true);
  expect(solution.isHappy(2)).toEqual(false);
})

test("RemoveElementsTest", () => {
  expect(solution.removeElements(createListNode([1, 2, 6, 3, 4, 5, 6]), 6)).toEqual(createListNode([1, 2, 3, 4, 5]));
  expect(solution.removeElements(createListNode([]), 1)).toEqual(createListNode([]));
  expect(solution.removeElements(createListNode([7, 7, 7, 7]), 7)).toEqual(createListNode([]));
})

test("ReverseListTest", () => {
  expect(solution.reverseList(createListNode([1, 2, 3, 4, 5]))).toEqual(createListNode([5, 4, 3, 2, 1]));
  expect(solution.reverseList(createListNode([1, 2]))).toEqual(createListNode([2, 1]));
  expect(solution.reverseList(createListNode([]))).toEqual(createListNode([]));
})

test("ContainsDuplicateTest", () => {
  expect(solution.containsDuplicate([1, 2, 3, 1])).toEqual(true);
  expect(solution.containsDuplicate([1, 2, 3, 4])).toEqual(false);
  expect(solution.containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
})

test("IsAnagramTest", () => {
  expect(solution.isAnagram("anagram", "nagaram")).toEqual(true);
  expect(solution.isAnagram("rat", "car")).toEqual(false);
})

test("AddDigitTest", () => {
  expect(solution.addDigits(38)).toEqual(2);
  expect(solution.addDigits(0)).toEqual(0);
});

test("IntersectTest", () => {
  expect(solution.intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
  expect(solution.intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
})

test("CountNumbersWithUniqueDigitsTest", () => {
  expect(solution.countNumbersWithUniqueDigits(2)).toEqual(91);
  expect(solution.countNumbersWithUniqueDigits(0)).toEqual(1);
  expect(solution.countNumbersWithUniqueDigits(1)).toEqual(10);
});

test("CanConstructTest", () => {
  expect(solution.canConstruct("a", "b")).toEqual(false);
  expect(solution.canConstruct("aa", "ab")).toEqual(false);
  expect(solution.canConstruct("aa", "aab")).toEqual(true);
})

test("LexicalTest", () => {
  expect(solution.lexicalOrder(13)).toEqual([1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(solution.lexicalOrder(2)).toEqual([1, 2]);
})

test("FirstUniqCharTest", () => {
  expect(solution.firstUniqChar("leetcode")).toEqual(0);
  expect(solution.firstUniqChar("loveleetcode")).toEqual(2);
  expect(solution.firstUniqChar("aabb")).toEqual(-1);
})

test("FindTheDifferenceTest", () => {
  expect(solution.findTheDifference("abcd", "abcde")).toEqual("e");
  expect(solution.findTheDifference("", "y")).toEqual("y");
})

test("SumOfLeftLeavesTest", () => {
  expect(solution.sumOfLeftLeaves(createTreeNodeByBFS([3, 9, 20, null, null, 15, 7]))).toEqual(24);
  expect(solution.sumOfLeftLeaves(createTreeNodeByBFS([1]))).toEqual(0);
})

test("NumPrimeArrangementsTest", () => {
  expect(solution.numPrimeArrangements(5)).toEqual(12);
  expect(solution.numPrimeArrangements(100)).toEqual(682289015);
  expect(solution.numPrimeArrangements(2)).toEqual(1);
})

test("FindSubstringInWraparoundStringTest", () => {
  expect(solution.findSubstringInWraparoundString("a")).toEqual(1);
  expect(solution.findSubstringInWraparoundString("cac")).toEqual(2);
  expect(solution.findSubstringInWraparoundString("zab")).toEqual(6);
})

test("MakeSquareTest", () => {
  expect(solution.makeSquare([1, 1, 2, 2, 2])).toEqual(true);
  expect(solution.makeSquare([3, 3, 3, 3, 4])).toEqual(false);
  expect(solution.makeSquare([3, 3, 2, 2])).toEqual(false);
})

test("NextGreaterElementTest", () => {
  expect(solution.nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
  expect(solution.nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
})

test("FindDiagonalOrderTest", () => {
  expect(solution.findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
  expect(solution.findDiagonalOrder([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
  expect(solution.findDiagonalOrder([])).toEqual([]);
});

test("ConvertToBase7Test", () => {
  expect(solution.convertToBase7(100)).toEqual("202");
  expect(solution.convertToBase7(-7)).toEqual("-10");
  expect(solution.convertToBase7(0)).toEqual("0");
});

test("FindLUSLengthTest", () => {
  expect(solution.findLUSLength("aba", "cdc")).toEqual(3);
  expect(solution.findLUSLength("aaa", "bbb")).toEqual(3);
  expect(solution.findLUSLength("aaa", "aaa")).toEqual(-1);
});

test("SingleNonDuplicateTest", () => {
  expect(solution.singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])).toEqual(2);
  expect(solution.singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])).toEqual(10);
})

test("OptimalDivisionTest", () => {
  expect(solution.optimalDivision([1000, 100, 10, 2])).toEqual("1000/(100/10/2)");
  expect(solution.optimalDivision([1000])).toEqual("1000");
  expect(solution.optimalDivision([1000, 100])).toEqual("1000/100");
});

test("MatrixReshapeTest", () => {
  expect(solution.matrixReshape([[1, 2], [3, 4]], 1, 4)).toEqual([[1, 2, 3, 4]]);
  expect(solution.matrixReshape([[1, 2], [3, 4]], 2, 4)).toEqual([[1, 2], [3, 4]],);
})

test("PreorderTest", () => {
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
})

test("PostorderTest", () => {
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
})

test("AddOneRowTest", () => {
  let actual1 = solution.addOneRow(createTreeNodeByBFS([4, 2, 6, 3, 1, 5]), 1, 2);
  let actual2 = solution.addOneRow(createTreeNodeByBFS([4, 2, null, 3, 1]), 1, 3);
  let expect1 = createTreeNodeByBFS([4, 1, 1, 2, null, null, 6, 3, 1, 5]);
  let expect2 = createTreeNodeByBFS([4, 2, null, 1, 1, 3, null, null, 1]);
  expect(preorderTraversal(actual1)).toEqual(preorderTraversal(expect1));
  expect(preorderTraversal(actual2)).toEqual(preorderTraversal(expect2));
});

test("ExclusiveTimeTest", () => {
  expect(solution.exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"])).toEqual([3, 4]);
  expect(solution.exclusiveTime(1, ["0:start:0", "0:start:2", "0:end:5", "0:start:6", "0:end:6", "0:end:7"])).toEqual([8]);
  expect(solution.exclusiveTime(2, ["0:start:0", "0:start:2", "0:end:5", "1:start:6", "1:end:6", "0:end:7"])).toEqual([7, 1]);
  expect(solution.exclusiveTime(2, ["0:start:0", "0:start:2", "0:end:5", "1:start:7", "1:end:7", "0:end:8"])).toEqual([8, 1]);
  expect(solution.exclusiveTime(1, ["0:start:0", "0:end:0"])).toEqual([1]);
})

test("FindClosestElementsTest", () => {
  expect(solution.findClosestElements([1, 2, 3, 4, 5], 4, 3)).toEqual([1, 2, 3, 4])
  expect(solution.findClosestElements([1, 2, 3, 4, 5], 4, -1)).toEqual([1, 2, 3, 4])
})

test("CalPointsTest", () => {
  expect(solution.calPoints(["5", "2", "C", "D", "+"])).toEqual(30);
  expect(solution.calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toEqual(27);
  expect(solution.calPoints(["1"])).toEqual(1);
});

test("ToLowerCaseTest", () => {
  expect(solution.toLowerCase("Hello")).toEqual("hello");
  expect(solution.toLowerCase("here")).toEqual("here");
  expect(solution.toLowerCase("LOVELY")).toEqual("lovely");
})

test("LongestWordTest", () => {
  expect(solution.longestWord(["w", "wo", "wor", "worl", "world"])).toEqual("world");
  expect(solution.longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])).toEqual("apple");
})

test("NextGreatestLetterTest", () => {
  expect(solution.nextGreatestLetter(["c", "f", "j"], "a")).toEqual("c");
  expect(solution.nextGreatestLetter(["c", "f", "j"], "c")).toEqual("f");
  expect(solution.nextGreatestLetter(["c", "f", "j"], "d")).toEqual("f");
  expect(solution.nextGreatestLetter(["d"], "z")).toEqual("d");
})

test("PivotIndexTest", () => {
  expect(solution.pivotIndex([2, 3, -1, 8, 4])).toEqual(3);
  expect(solution.pivotIndex([1, -1, 4])).toEqual(2);
  expect(solution.pivotIndex([2, 5])).toEqual(-1);
})

test("SelfDividingNumbersTest", () => {
  expect(solution.selfDividingNumbers(1, 22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
  expect(solution.selfDividingNumbers(47, 85)).toEqual([48, 55, 66, 77]);
})

test("CountPrimeSetBitsTest", () => {
  expect(solution.countPrimeSetBits(6, 10)).toEqual(4);
  expect(solution.countPrimeSetBits(10, 15)).toEqual(5);
})

test("UniqueMorseRepresentationsTest", () => {
  expect(solution.uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toEqual(2);
  expect(solution.uniqueMorseRepresentations(["a"])).toEqual(1);
})

test("NumberOfLinesTest", () => {
  expect(solution.numberOfLines([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "abcdefghijklmnopqrstuvwxyz")).toEqual([3, 60]);
  expect(solution.numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], "bbbcccdddaaa")).toEqual([2, 4]);
})

test("MostCommonWordTest", () => {
  expect(solution.mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])).toEqual("ball");
})

test("ShortestToCharTest", () => {
  expect(solution.shortestToChar("loveleetcode", "e")).toEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);
  expect(solution.shortestToChar("aaab", "b")).toEqual([3, 2, 1, 0]);
})

test("SortArrayByParityTest", () => {
  expect(solution.sortArrayByParity([3, 1, 2, 4])).toEqual([4, 2, 1, 3]);
  expect(solution.sortArrayByParity([2, 4, 1, 3])).toEqual([2, 4, 1, 3]);
  expect(solution.sortArrayByParity([0])).toEqual([0]);
})

test("DIStringMatchTest", () => {
  expect(solution.diStringMatch("IDID")).toEqual([0, 4, 1, 3, 2]);
  expect(solution.diStringMatch("III")).toEqual([0, 1, 2, 3]);
  expect(solution.diStringMatch("DDI")).toEqual([3, 2, 0, 1]);
})

test("MinDeletionSizeTest", () => {
  expect(solution.minDeletionSize(["cba", "daf", "ghi"])).toEqual(1);
  expect(solution.minDeletionSize(["a", "b"])).toEqual(0);
  expect(solution.minDeletionSize(["zyx", "wvu", "tsr"])).toEqual(3);
})

test("IsAlienSortedTest", () => {
  expect(solution.isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")).toEqual(true);
  expect(solution.isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")).toEqual(false);
  expect(solution.isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")).toEqual(false);
})

test("RepeatedNTimesTest", () => {
  expect(solution.repeatedNTimes([1, 2, 3, 3])).toEqual(3);
  expect(solution.repeatedNTimes([2, 1, 2, 5, 3, 2])).toEqual(2);
  expect(solution.repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toEqual(5);
  expect(solution.repeatedNTimes([1, 2, 3, 4])).toEqual(-1);
})

test("LargestPerimeterTest", () => {
  expect(solution.largestPerimeter([2, 1, 2])).toEqual(5);
  expect(solution.largestPerimeter([1, 2, 1])).toEqual(0);
})

test("RemoveOuterParenthesesTest", () => {
  expect(solution.removeOuterParentheses("(()())(())")).toEqual("()()()");
  expect(solution.removeOuterParentheses("(()())(())(()(()))")).toEqual("()()()()(())");
  expect(solution.removeOuterParentheses("()()")).toEqual("");
})

test("SumRootToLeafTest", () => {
  expect(solution.sumRootToLeaf(createTreeNodeByBFS([1, 0, 1, 0, 1, 0, 1]))).toEqual(22);
  expect(solution.sumRootToLeaf(createTreeNodeByBFS([0]))).toEqual(0);
  expect(solution.sumRootToLeaf(null)).toEqual(0);
})

test("CheckStraightLineTest", () => {
  expect(solution.checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])).toEqual(true);
  expect(solution.checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])).toEqual(false);
})

test("SubtractProductAndSumTest", () => {
  expect(solution.subtractProductAndSum(234)).toEqual(15);
  expect(solution.subtractProductAndSum(4421)).toEqual(21);
})

test("GetDecimalValueTest", () => {
  expect(solution.getDecimalValue(createListNode([1, 0, 1]))).toEqual(5);
  expect(solution.getDecimalValue(createListNode([0]))).toEqual(0);
})

test("FreqAlphabetsTest", () => {
  expect(solution.freqAlphabets("10#11#12")).toEqual("jkab");
  expect(solution.freqAlphabets("1326#")).toEqual("acz");
})

test("SortByBitsTest", () => {
  expect(solution.sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])).toEqual([0, 1, 2, 4, 8, 3, 5, 6, 7]);
  expect(solution.sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])).toEqual([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
})

test("MinSubsequenceTest", () => {
  expect(solution.minSubsequence([4, 3, 10, 9, 8])).toEqual([10, 9]);
  expect(solution.minSubsequence([4, 4, 7, 6, 7])).toEqual([7, 7, 6]);
  expect(solution.minSubsequence([6])).toEqual([6]);
})

test("StringMatchingTest", () => {
  expect(solution.stringMatching(["mass", "as", "hero", "superhero"])).toEqual(["as", "hero"]);
  expect(solution.stringMatching(["leetcode", "et", "code"])).toEqual(["et", "code"]);
  expect(solution.stringMatching(["blue", "green", "bu"])).toEqual([]);
})

test("ReformatTest", () => {
  expect(solution.reformat("a0b1c2")).toEqual("a0b1c2");
  expect(solution.reformat("leetcode")).toEqual("");
  expect(solution.reformat("1229857369")).toEqual("");
})

test("BusyStudentTest", () => {
  expect(solution.busyStudent([1, 2, 3], [3, 2, 7], 4)).toEqual(1);
  expect(solution.busyStudent([4], [4], 4)).toEqual(1);
})

test("IsPrefixOfWordTest", () => {
  expect(solution.isPrefixOfWord("i love eating burger", "burg")).toEqual(4);
  expect(solution.isPrefixOfWord("this problem is an easy problem", "pro")).toEqual(2);
  expect(solution.isPrefixOfWord("i am tired", "you")).toEqual(-1);
})

test("CanBeEqualTest", () => {
  expect(solution.canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])).toEqual(true);
  expect(solution.canBeEqual([7], [7])).toEqual(true);
  expect(solution.canBeEqual([3, 7, 9], [3, 7, 11])).toEqual(false);
  expect(solution.canBeEqual([3, 7, 11, 1], [3, 7, 11])).toEqual(false);
})

test("MaxProductTest", () => {
  expect(solution.maxProduct([3, 4, 5, 2])).toEqual(12);
  expect(solution.maxProduct([1, 5, 4, 5])).toEqual(16);
  expect(solution.maxProduct([3, 7])).toEqual(12);
})

test("AverageTest", () => {
  expect(solution.average([4000, 3000, 1000, 2000])).toEqual(2500.00000);
  expect(solution.average([1000, 2000, 3000])).toEqual(2000.00000);
})

test("CanMakeArithmeticProgressionTest", () => {
  expect(solution.canMakeArithmeticProgression([3, 5, 1])).toEqual(true);
  expect(solution.canMakeArithmeticProgression([1, 2, 4])).toEqual(false);
})

test("CountOddsTest", () => {
  expect(solution.countOdds(3, 7)).toEqual(3);
  expect(solution.countOdds(8, 10)).toEqual(1);
})

test("DiagonalSumTest", () => {
  expect(solution.diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual(25);
  expect(solution.diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]])).toEqual(8);
  expect(solution.diagonalSum([[5]])).toEqual(5);
})

test("SumOddLengthSubarraysTest", () => {
  expect(solution.sumOddLengthSubarrays([1, 4, 2, 5, 3])).toEqual(58);
  expect(solution.sumOddLengthSubarrays([1, 2])).toEqual(3);
  expect(solution.sumOddLengthSubarrays([10, 11, 12])).toEqual(66);
})

test("MaximumWealthTest", () => {
  expect(solution.maximumWealth([[1, 2, 3], [3, 2, 1]])).toEqual(6);
  expect(solution.maximumWealth([[1, 5], [7, 3], [3, 5]])).toEqual(10);
  expect(solution.maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])).toEqual(17);
})

test("MiddleNodeTest", () => {
  expect(solution.middleNode(createListNode([1, 2, 3, 4, 5]))).toEqual(createListNode([3, 4, 5]));
  expect(solution.middleNode(createListNode([1, 2, 3, 4, 5, 6]))).toEqual(createListNode([4, 5, 6]));
})

test("ProjectionAreaTest", () => {
  expect(solution.projectionArea([[1, 2], [3, 4]])).toEqual(17);
  expect(solution.projectionArea([[2]])).toEqual(5);
  expect(solution.projectionArea([[1, 0], [0, 2]])).toEqual(8);
})

test("InterpretTest", () => {
  expect(solution.interpret("G()(al)")).toEqual("Goal");
  expect(solution.interpret("G()()()()(al)")).toEqual("Gooooal");
  expect(solution.interpret("(al)G(al)()()G")).toEqual("alGalooG");
})

test("MergeAlternatelyTest", () => {
  expect(solution.mergeAlternately("abc", "pqr")).toEqual("apbqcr");
  expect(solution.mergeAlternately("ab", "pqrs")).toEqual("apbqrs");
  expect(solution.mergeAlternately("abcd", "pq")).toEqual("apbqcd");
})

test("NearestValidPointTest", () => {
  expect(solution.nearestValidPoint(3, 4, [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]])).toEqual(2);
  expect(solution.nearestValidPoint(3, 4, [[3, 4]])).toEqual(0);
  expect(solution.nearestValidPoint(3, 4, [[2, 3]])).toEqual(-1);
})

test("AreAlmostEqualTest", () => {
  expect(solution.areAlmostEqual("bank", "kanb")).toEqual(true);
  expect(solution.areAlmostEqual("attack", "defend")).toEqual(false);
  expect(solution.areAlmostEqual("kelb", "kelb")).toEqual(true);
})

test("ArraySignTest", () => {
  expect(solution.arraySign([-1, -2, -3, -4, 3, 2, 1])).toEqual(1);
  expect(solution.arraySign([1, 5, 0, 2, -3])).toEqual(0);
  expect(solution.arraySign([-1, 1, -1, 1, -1])).toEqual(-1);
})

test("FindTheWinnerTest", () => {
  expect(solution.findTheWinner(5, 2)).toEqual(3);
  expect(solution.findTheWinner(6, 5)).toEqual(1);
})

test("FindMiddleIndexTest", () => {
  expect(solution.findMiddleIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
  expect(solution.findMiddleIndex([1, 2, 3])).toEqual(-1);
})

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

test("RearrangeCharactersTest", () => {
  expect(solution.rearrangeCharacters("ilovecodingonleetcode", "code")).toEqual(2);
  expect(solution.rearrangeCharacters("abcba", "abc")).toEqual(1);
  expect(solution.rearrangeCharacters("abbaccaddaeea", "aaaaa")).toEqual(1);
})