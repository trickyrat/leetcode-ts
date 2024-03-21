import { ListNode } from "./DataStructures/ListNode";
import { TreeNode } from "./DataStructures/TreeNode";
import { Node } from "./DataStructures/Node";

export class Util {
  generateListNode(nums: number[]): ListNode | null {
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

  detectCycle(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null  = head;
    while (fast !== null) {
      slow = slow!.next;

      if (fast.next === null) return null;

      fast = fast.next.next;
      
      if (slow === fast) {
        let ptr: ListNode | null  = head;
        while (ptr !== slow) {
          ptr = ptr!.next;
          slow = slow!.next;
        }
        return ptr;
      }
    }
    return null;
  };


  convertListNodeToString(head: ListNode | null, separator: string = "->"): string {
    let res: string[] = [];
    const cycleNode = this.detectCycle(head);
    while (head) {
      res.push(head.val.toString());
      head = head.next;
      if (head && cycleNode && head === cycleNode) {
        res.push(`${cycleNode.val}`);
        break;
      }  
    }
    return res.join(separator);
  }

  generateTreeNode(nums: (number | null)[]): TreeNode | null {
    if (!nums || nums.length === 0 || nums[0] === null) {
      return null;
    }
    let root = new TreeNode(nums[0]);
    let queue = [root];
    let fillLeft = true;
    for (let i = 1; i < nums.length; i++) {
      let node = nums[i] !== null ? new TreeNode(nums[i]!) : null;
      if (fillLeft) {
        queue[0].left = node;
        fillLeft = false;
      } else {
        queue[0].right = node;
        fillLeft = true;
      }

      if (node) {
        queue.push(node);
      }

      if (fillLeft) {
        queue.shift();
      }
    }

    return root;
  }

  generateNTreeNode(nums: (number | null)[]): Node | null {
    if (!nums || nums.length === 0 || nums[0] === null) {
      return null;
    }
    let root = new Node(nums[0]);
    let queue = [root];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i]) {
        let parent = queue[0];
        let child = new Node(nums[i]!);
        parent.children.push(child);
        queue.push(child);
      } else if (!nums[i] && queue.length < 2) {
        continue;
      } else {
        queue.shift();
      }
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