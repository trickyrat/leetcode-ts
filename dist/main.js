"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("./Util");
const Solution_1 = require("./Solution");
let solution = new Solution_1.Solution();
let root = (0, Util_1.createTreeNodeByBFS)("5,4,8,11,null,13,4,7,2,null,null,5,1");
let res = solution.pathSum(root, 22);
console.log(res);
//# sourceMappingURL=main.js.map