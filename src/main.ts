import { Solution } from "./Solution";
import { createTreeNodeByBFS } from "./Utilities";

let solution = new Solution();
console.log(createTreeNodeByBFS([1, null, 2, 3]));

console.log(solution.preorderTraversal(createTreeNodeByBFS([1, null, 2, 3])))


console.log(solution.numPrimeArrangements(2))