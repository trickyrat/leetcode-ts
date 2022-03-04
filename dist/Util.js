"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTreeNodeByBFS = exports.createTreeNodeByDFS = exports.convertListNodeToArray = exports.createListNode = void 0;
const ListNode_1 = require("./ListNode");
const TreeNode_1 = require("./TreeNode");
/**
 * 使用数组创建单链表
 * @param nums
 * @returns
 */
function createListNode(nums) {
    let head = new ListNode_1.ListNode(0);
    let dummyHead = head;
    for (const num of nums) {
        dummyHead.next = new ListNode_1.ListNode(num);
        dummyHead = dummyHead.next;
    }
    return head.next;
}
exports.createListNode = createListNode;
/**
 * 把单链表转换成数组
 * @param head
 * @returns
 */
function convertListNodeToArray(head) {
    let res = new Array();
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}
exports.convertListNodeToArray = convertListNodeToArray;
/**
 * 使用数组创建二叉树结点(前序遍历顺序)
 * @param nums 输入数组，其中'null'代表该节点为null
 * @returns
 */
function createTreeNodeByDFS(data) {
    const dfs = (dataList) => {
        if (dataList[0] === "null") {
            dataList.shift();
            return null;
        }
        let root = new TreeNode_1.TreeNode(parseInt(dataList[0]));
        dataList.shift();
        root.left = dfs(dataList);
        root.right = dfs(dataList);
        return root;
    };
    let list = data.split(",");
    return dfs(list);
}
exports.createTreeNodeByDFS = createTreeNodeByDFS;
/**
* 使用数组创建二叉树结点(前序遍历顺序)
* @param nums 输入数组，其中'null'代表该节点为null
* @returns
*/
function createTreeNodeByBFS(data) {
    let nums = data.split(',');
    if (nums[0] === 'null') {
        return null;
    }
    let root = new TreeNode_1.TreeNode(parseInt(nums[0]));
    let queue = [root];
    let cursor = 1;
    while (cursor < nums.length) {
        let node = queue.shift();
        let leftVal = nums[cursor];
        let rightVal = nums[cursor + 1];
        if (leftVal !== "null") {
            let leftNode = new TreeNode_1.TreeNode(parseInt(leftVal));
            if (node) {
                node.left = leftNode;
            }
            queue.push(leftNode);
        }
        if (rightVal !== "null") {
            let rightNode = new TreeNode_1.TreeNode(parseInt(rightVal));
            if (node) {
                node.right = rightNode;
            }
            queue.push(rightNode);
        }
        cursor += 2;
    }
    return root;
}
exports.createTreeNodeByBFS = createTreeNodeByBFS;
//# sourceMappingURL=Util.js.map