import { ListNode } from "./ListNode";
import { TreeNode } from "./TreeNode";

/**
 * 使用数组创建单链表
 * @param nums 
 * @returns 链表头节点
 */
export function createListNode(nums: number[]): ListNode | null {
  let head = new ListNode(0);
  let dummyHead = head;
  for (const num of nums) {
    dummyHead.next = new ListNode(num);
    dummyHead = dummyHead.next;
  }
  return head.next;
}

/**
 * 把单链表转换成数组
 * @param head 
 * @returns 链表数组
 */
export function convertListNodeToArray(head: ListNode | null): number[] {
  let res = new Array<number>();
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

/**
 * 使用数组创建二叉树结点(前序遍历顺序)
 * @param nums 输入数组，其中'null'代表该节点为null
 * @returns 二叉树根节点
 */
export function createTreeNodeByDFS(nums: (number | null)[]): TreeNode | null {
  const dfs = (dataList: (number | null)[]) => {
    if (dataList[0] === null) {
      dataList.shift();
      return null;
    }
    let root = new TreeNode(dataList[0]);
    dataList.shift();
    root.left = dfs(dataList);
    root.right = dfs(dataList);
    return root;
  }
  return dfs(nums);
}

/**
* 使用数组创建二叉树结点(前序遍历顺序)
* @param nums 输入数组，其中'null'代表该节点为null
* @returns 二叉树根节点
*/
export function createTreeNodeByBFS(nums: (number | null)[]): TreeNode | null {
  if (nums[0] === null || nums[0] === undefined) {
    return null;
  }
  let root = new TreeNode(nums[0]);
  let queue = [root];
  let cursor = 1;
  while (cursor < nums.length) {
    let node = queue.shift();
    let leftVal = nums[cursor];
    let rightVal = nums[cursor + 1];
    if (leftVal !== null && leftVal !== undefined) {
      let leftNode = new TreeNode(leftVal);
      if (node) {
        node.left = leftNode;
      }
      queue.push(leftNode);
    }
    if (rightVal !== null && rightVal !== undefined) {
      let rightNode = new TreeNode(rightVal);
      if (node) {
        node.right = rightNode;
      }
      queue.push(rightNode);
    }
    cursor += 2;
  }
  return root;
}
