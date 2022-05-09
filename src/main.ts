import { TreeNode } from "./TreeNode";
import { createTreeNodeByBFS, createListNode } from "./Util";
import { Solution } from "./Solution";
import { ListNode } from "./ListNode";
import { RecentCounter } from "./RecentCounter";

let solution = new Solution();
let root = createTreeNodeByBFS("5,4,8,11,null,13,4,7,2,null,null,5,1");
let res = solution.pathSum(root, 22);
console.log(res);

let res1 = solution.twoSum([1, 2, 3, 4], 7);
console.log(res1);

let resNode = solution.addTwoNumbers(createListNode([1, 2, 3]), createListNode([1, 2, 3]));
console.log(resNode);

let longest = solution.longestSubstringWithoutRepeating("helloworld");
console.log(longest);

let reverseNum = solution.reverseIntNumber(123);
console.log(reverseNum);

let zcon = solution.zconvert("helloworld, greeting from typescript", 3);
console.log(zcon);

let pivot = solution.pivotIndex([1, 7, 3, 6, 5, 6]);
console.log(pivot);

let counter = new RecentCounter();
let val = counter.ping(1);
let val2 = counter.ping(100);