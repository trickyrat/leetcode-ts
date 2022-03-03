import { ListNode } from "./ListNode";
import { TreeNode } from "./TreeNode";


export function createListNode(nums: number[]): ListNode | null {
  let head = new ListNode(0);
  let dummyHead = head;
  for (const num of nums) {
    dummyHead.next = new ListNode(num);
    dummyHead = dummyHead.next;
  }
  return head.next;
}
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
 * @returns 
 */
export function createTreeNodeByDFS(nums: string[]): TreeNode | null {
  // let root = null;
  // let n = nums.length;
  // if (n >= 1) {
  //   root = new TreeNode(parseInt(nums[0]));
  // }
  // const dfs = (node: TreeNode | null, index: number, arr: string[]) => {
  //   if (node) {
  //     if (2 * index + 1 < n) {
  //       if (nums[2 * index + 1] === "null") {
  //         node.left = null;
  //       } else {
  //         node.left = new TreeNode(parseInt(nums[2 * index + 1]));
  //       }
  //       dfs(node.left, 2 * index + 1, arr);
  //     }
  //     if (2 * index + 2 < n) {
  //       if (nums[2 * index + 2] === "null") {
  //         node.right = null;
  //       } else {
  //         node.right = new TreeNode(parseInt(nums[2 * index + 2]));
  //       }
  //       dfs(node.right, 2 * index + 2, arr);
  //     }
  //   }
  // }

  //return root;
  return dfs(nums);
}

function dfs(list: string[]): TreeNode | null {
  if (list[0] === "null") {
    list.shift();
    return null;
  }
  let root = new TreeNode(parseInt(list[0]));
  list.shift();
  root.left = dfs(list);
  root.right = dfs(list);
  return root;
}

/**
* 使用数组创建二叉树结点(前序遍历顺序)
* @param nums 输入数组，其中'null'代表该节点为null
* @returns
*/
export function createTreeNodeByBFS(nums: string[]): TreeNode | null {
  if (nums[0] === 'null') {
    return null;
  }
  let root = new TreeNode(parseInt(nums[0]));
  let queue = [root];
  let cursor = 1;
  while (cursor < nums.length) {
    let node = queue.shift();
    let leftVal = nums[cursor];
    let rightVal = nums[cursor + 1];
    if (leftVal !== "null") {
      let leftNode = new TreeNode(parseInt(leftVal));
      if (node) {
        node.left = leftNode;
      }
      queue.push(leftNode);
    }
    if (rightVal !== "null") {
      let rightNode = new TreeNode(parseInt(rightVal));
      if (node) {
        node.right = rightNode;
      }
      queue.push(rightNode);
    }
    cursor += 2;
  }
  return root;
}
