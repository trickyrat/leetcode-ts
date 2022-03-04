import { TreeNode } from "./TreeNode";
import { createTreeNodeByBFS } from "./Util";
import { Solution } from "./Solution";

let solution = new Solution();
let root = createTreeNodeByBFS("5,4,8,11,null,13,4,7,2,null,null,5,1");
let res = solution.pathSum(root, 22);
console.log(res);