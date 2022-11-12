import { ListNode } from "./DataStructures/ListNode";
import { TreeNode } from "./DataStructures/TreeNode";

export class Utilities {
  createListNode(nums: number[]): ListNode | null {
    if (!nums || nums.length === 0) {
      return null;
    }
    let head = new ListNode(0);
    let dummyHead = head;
    for (const num of nums) {
      dummyHead.next = new ListNode(num);
      dummyHead = dummyHead.next;
    }
    return head.next;
  }
  convertListNodeToArray(head: ListNode | null): number[] {
    let res: number[] = [];
    while (head) {
      res.push(head.val);
      head = head.next;
    }
    return res;
  }

  createTreeNode(nums: (number | null)[]): TreeNode | null {
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

  preorderTraversal(root: TreeNode | null): number[] {
    let res: number[] = [];
    if (!root) {
      return res;
    }
    let p1: TreeNode | null = root, p2 = null;
    while (p1) {
      p2 = p1.left;
      if (p2) {
        while (p2.right && p2.right !== p1) {
          p2 = p2.right;
        }
        if (!p2.right) {
          res.push(p1.val);
          p2.right = p1;
          p1 = p1.left;
          continue;
        } else {
          p2.right = null;
        }
      } else {
        res.push(p1.val);
      }
      p1 = p1.right;
    }
    return res;
  }

  isDigit(ch: string): boolean {
    return parseInt(ch).toString() === "NaN" ? false : true;
  }

  isLetter(ch: string): boolean {
    return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z';
  }

  isSameTree(lhs: TreeNode | null, rhs: TreeNode | null): boolean {
    if (lhs === null && rhs === null) {
      return true;
    } else if (lhs === null || rhs === null) {
      return false;
    } else if (lhs.val !== rhs.val) {
      return false;
    } else {
      return this.isSameTree(lhs.left, rhs.left) && this.isSameTree(lhs.right, rhs.right);
    }
  }
}