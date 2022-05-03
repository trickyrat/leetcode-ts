import { TreeNode } from "./TreeNode";
import { createTreeNodeByBFS, createListNode } from "./Util";
import { Solution } from "./Solution";
import { ListNode } from "./ListNode";

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