import { ListNode } from "./DataStructures/ListNode";
import { TreeNode } from "./DataStructures/TreeNode";
import { Node } from "./DataStructures/Node";
import { Trie } from "./DataStructures/Trie";
import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
import { Utilities } from "./Utilities";

export class Solution {
    utils: Utilities;

    constructor() {
        this.utils = new Utilities();
    }

    /**
     * 1.Two Sum
     * @param nums
     * @param target
     * @returns
     */
    twoSum(nums: number[], target: number): number[] {
        let res = [0, 0];
        let dic: Map<number, number> = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            if (dic.has(target - nums[i])) {
                res[0] = dic.get(target - nums[i]) as number;
                res[1] = i;
                return res;
            } else {
                dic.set(nums[i], i);
            }
        }
        return [];
    }

    /**
     * 2.Add Two Numbers
     * @param l1
     * @param l2
     * @returns
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        let dummyHead: ListNode | null = new ListNode();
        let carry: number = 0;
        let curr: ListNode | null = dummyHead;
        while (l1 || l2) {
            let sum: number = 0;
            if (l1) {
                sum += l1.val;
                l1 = l1.next;
            }
            if (l2) {
                sum += l2.val;
                l2 = l2.next;
            }
            sum += carry;
            curr.next = new ListNode(sum % 10);
            curr = curr.next
            carry = Math.floor(sum / 10);
        }
        if (carry != 0) {
            curr.next = new ListNode(carry);
        }
        return dummyHead.next;
    }

    /**
     * 3.Longest Substring Without Repeating Characters
     * @param s
     * @returns
     */
    longestSubstringWithoutRepeating(s: string): number {
        let len: number = s.length, ans: number = 0;
        let index: Array<number> = new Array<number>(128).fill(0);
        for (let i = 0, j = 0; j < len; j++) {
            i = Math.max(index[s[j].charCodeAt(0)], i);
            ans = Math.max(ans, j - i + 1);
            index[s[j].charCodeAt(0)] = j + 1;
        }
        return ans;
    }

    /**
     * 6.Zigzag Conversion
     * @param s
     * @param numRows
     * @returns
     */
    zconvert(s: string, numRows: number): string {
        let n = s.length, r = numRows;
        if (r == 1 || r > n) {
            return s;
        }
        let t = r * 2 - 2;
        let ans = [];
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < n - i; j += t) {
                ans.push(s[i + j]);
                if (i > 0 && i < r - 1 && j + t - i < n) {
                    ans.push(s[j + t - i]);
                }
            }
        }
        return ans.join('');
    }

    /**
     * 7.Reverse Integer
     * @param x
     */
    reverseIntNumber(x: number): number {
        let res = 0;
        while (x != 0) {
            let digit = x % 10;
            x = ~~(x / 10);
            res = res * 10 + digit;
            if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
                return 0;
            }
        }
        return res;
    }

    /**
     * 20.Valid Parentheses
     * @param s 
     */
    isValidParentheses(s: string): boolean {
        let n = s.length;
        if (n % 2 === 1) {
            return false;
        }
        let pairs: Map<string, string> = new Map([
            [")", "("],
            ["]", "["],
            ["}", "{"],
        ]);
        let stack: string[] = [];
        for (const c of s) {
            if (pairs.has(c)) {
                if (!stack.length || stack[stack.length - 1] != pairs.get(c)) {
                    return false;
                }
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        return !stack.length;
    }

    /**
     * 21.Merge Two Sorted Lists
     * @param list1 
     * @param list2 
     * @returns 
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        let head = new ListNode(-1);
        let dummyHead = head;
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                dummyHead.next = list1;
                list1 = list1.next;
            } else {
                dummyHead.next = list2;
                list2 = list2.next;
            }
            dummyHead = dummyHead.next;
        }
        dummyHead.next = list1 === null ? list2 : list1;
        return head.next;
    }

    /**
     * 27.Remove Element
     * @param nums 
     * @param val 
     */
    removeElement(nums: number[], val: number): number {
        let left = 0, n = nums.length;
        for (let right = 0; right < n; right++) {
            if (nums[right] != val) {
                nums[left] = nums[right];
                left++;
            }
        }
        return left;
    }

    /**
    * 46.Permutations
    * @param nums 
    */
    permute(nums: number[]): number[][] {
        let res: number[][] = [];
        let used: boolean[] = new Array<boolean>(nums.length).fill(false);
        const backtrack = (candidates: number[], track: number[]) => {
            if (track.length === candidates.length) {
                res.push(track.slice());
                return;
            }
            for (let i = 0; i < candidates.length; ++i) {
                if (used[i]) {
                    continue;
                }
                track.push(candidates[i]);
                used[i] = true;
                backtrack(candidates, track);
                track.pop();
                used[i] = false;
            }
        };
        let track: number[] = [];
        backtrack(nums, track);
        return res;
    }

    /**
     * 47.Permutations II
     * @param nums 
     */
    permuteUnique(nums: number[]): number[][] {
        let ans: number[][] = [];
        let visited: boolean[] = new Array<boolean>(nums.length).fill(false);
        const backtrack = (index: number, perm: number[]) => {
            if (index === nums.length) {
                ans.push(perm.slice());
                return;
            }
            for (let i = 0; i < nums.length; ++i) {
                if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
                    continue;
                }
                perm.push(nums[i]);
                visited[i] = true;
                backtrack(index + 1, perm);
                visited[i] = false;
                perm.pop();
            }
        };
        nums.sort((x, y) => x - y);
        backtrack(0, []);
        return ans;
    }

    /**
     * 48.Rotate Image
     * @param matrix 
     */
    rotate(matrix: number[][]): void {
        let n = matrix.length;
        for (let i = 0; i < Math.floor(n / 2); ++i) {
            for (let j = 0; j < n; ++j) {
                [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
            }
        }

        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < i; ++j) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
    }

    /**
     * 53.Maximum Subarray
     * @param nums 
     */
    maxSubArray(nums: number[]): number {
        let pre = 0, maxAns = nums[0];
        for (const num of nums) {
            pre = Math.max(pre + num, num);
            maxAns = Math.max(maxAns, pre);
        }
        return maxAns;
    }

    /**
     * 73.Set Matrix Zeroes
     * @param matrix 
     */
    setZeroes(matrix: number[][]): void {
        let col0 = 1, rows = matrix.length, cols = matrix[0].length;
        for (let i = 0; i < rows; i++) {
            if (matrix[i][0] === 0) {
                col0 = 0;
            }
            for (let j = 1; j < cols; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = matrix[0][j] = 0;
                }
            }
        }
        for (let i = rows - 1; i >= 0; i--) {
            for (let j = cols - 1; j >= 1; j--) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
            if (col0 === 0) {
                matrix[i][0] = 0;
            }
        }
    }

    /**
     * 83.Remove Duplicates from Sorted List
     * @param head 
     */
    deleteDuplicates(head: ListNode | null): ListNode | null {
        if (!head) {
            return head;
        }
        let curr = head;
        while (curr.next) {
            if (curr.val === curr.next.val) {
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
            }
        }
        return head;
    }

    /**
     * 88.Merge Sorted Array
     * @param nums1 
     * @param m 
     * @param nums2 
     * @param n 
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let p1 = m - 1, p2 = n - 1;
        let tail = m + n - 1;
        let cur = 0;
        while (p1 >= 0 || p2 >= 0) {
            if (p1 === - 1) {
                cur = nums2[p2--];
            } else if (p2 === -1) {
                cur = nums1[p1--];
            } else if (nums1[p1] > nums2[p2]) {
                cur = nums1[p1--];
            } else {
                cur = nums2[p2--];
            }
            nums1[tail--] = cur;
        }
    }

    /**
     * 94.Binary Tree Inorder Traversal
     * @param root 
     * @returns 
     */
    inorderTraversal(root: TreeNode | null): number[] {
        let inorder = (node: TreeNode | null, res: number[]) => {
            if (!node) return;
            inorder(node.left, res);
            res.push(node.val);
            inorder(node.right, res);
        };
        let res: number[] = [];
        inorder(root, res);
        return res;
    }

    /**
     * 101.Symmetric Tree
     * @param root 
     */
    isSymmetric(root: TreeNode | null): boolean {
        let helper = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
            if (!node1 && !node2) return true;
            if (!node1 || !node2) return false;
            return node1.val === node2.val && helper(node1.left, node2.right) && helper(node1.right, node2.left);
        }
        return helper(root, root);
    }

    /**
     * 102.Binary Tree Level Order Traversal
     * @param root 
     */
    levelOrder(root: TreeNode | null): number[][] {
        let res: number[][] = [];
        if (!root) return res;
        let queue: TreeNode[] = [];
        queue.push(root);
        while (queue.length !== 0) {
            let currentLevelSize = queue.length;
            res.push([]);
            for (let i = 1; i <= currentLevelSize; ++i) {
                let currentNode = queue.shift() as TreeNode;
                res[res.length - 1].push(currentNode.val);
                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);
            }
        }
        return res;
    }

    /**
     * 104.Maximum Depth of Binary Tree
     * @param root 
     */
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;
        return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
    }

    /**
     * 113.Path Sum II
     * @param root
     * @param targetSum
     * @returns 
     */
    pathSum(root: TreeNode | null, targetSum: number): number[][] {
        let res: number[][] = [];
        const dfs = (node: TreeNode | null, targetSum: number, path: number[]) => {
            if (!node) {
                return;
            }
            path.push(node.val);
            targetSum -= node.val;
            if (!node.left && !node.right && targetSum === 0) {
                res.push(path.slice());
            }
            dfs(node.left, targetSum, path);
            dfs(node.right, targetSum, path);
            path.pop();
        }
        dfs(root, targetSum, []);
        return res;
    }

    /**
     * 118.Pascal's Triangle
     * @param numRows 
     */
    generate(numRows: number): number[][] {
        let res: number[][] = [];
        for (let i = 0; i < numRows; ++i) {
            let row = new Array<number>(i + 1).fill(1);
            for (let j = 1; j < row.length - 1; ++j) {
                row[j] = res[i - 1][j - 1] + res[i - 1][j];
            }
            res.push(row);
        }
        return res;
    }

    /**
     * 121.Best Time to Buy and Sell Stock
     * @param prices 
     */
    maxProfit(prices: number[]): number {
        let minPrice = Number.MAX_VALUE, max = 0;
        for (const price of prices) {
            max = Math.max(max, price - minPrice);
            minPrice = Math.min(price, minPrice);
        }
        return max;
    }

    /**
     * 141.Linked List Cycle
     * @param head 
     */
    hasCycle(head: ListNode | null): boolean {
        if (!head || !head.next) {
            return false;
        }
        let slow = head;
        let fast = head?.next;
        while (slow != fast) {
            if (!slow || !fast) {
                return false;
            }
            slow = slow?.next!;
            fast = fast?.next?.next!;
        }
        return true;
    }

    /**
     * 144.Binary Tree Preorder Traversal
     * @param root 
     * @returns 
     */
    preorderTraversal(root: TreeNode | null) {
        let preorder = (node: TreeNode | null, res: number[]) => {
            if (!node) return;
            res.push(node.val);
            preorder(node.left, res);
            preorder(node.right, res);
        };
        let res: number[] = [];
        preorder(root, res);
        return res;
    }

    /**
     * 145.Binary Tree Postorder Traversal
     * @param root 
     * @returns 
     */
    postorderTraversal(root: TreeNode | null) {
        let postorder = (node: TreeNode | null, res: number[]) => {
            if (!node) return;
            postorder(node.left, res);
            postorder(node.right, res);
            res.push(node.val);
        };
        let res: number[] = [];
        postorder(root, res);
        return res;
    }

    /**
     * 168.Excel Sheet Column Title
     * @param columnNumber 
     */
    convertToTitle(columnNumber: number): string {
        let sb = [];
        while (columnNumber !== 0) {
            columnNumber--;
            sb.push(String.fromCharCode(columnNumber % 26 + "A".charCodeAt(0)));
            columnNumber = Math.floor(columnNumber / 26);
        }
        return sb.reverse().join("");
    }

    /**
     * 171.Excel Sheet Column Number
     * @param columnTitle 
     */
    titleToNumber(columnTitle: string): number {
        let n = 0;
        let multiple = 1;
        for (let i = columnTitle.length - 1; i >= 0; --i) {
            let k = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
            n += k * multiple;
            multiple *= 26;
        }
        return n;
    }

    /**
     * 172.Factorial Trailing Zeroes
     * @param n 
     */
    trailingZeroes(n: number): number {
        let ans = 0;
        while (n != 0) {
            n = Math.floor(n / 5);
            ans += n;
        }
        return ans
    }

    /**
     * 191.Number of 1 Bits
     * @param n 
     */
    hammingWeight(n: number): number {
        let ret: number = 0;
        while (n) {
            n &= n - 1;
            ret++;
        }
        return ret;
    }

    /**
     * 202.Happy Number
     * @param n 
     */
    isHappy(n: number): boolean {
        let getNext = (num: number): number => {
            let totalSum = 0;
            while (num > 0) {
                let digit = num % 10;
                num = Math.floor(num / 10);
                totalSum += digit * digit;
            }
            return totalSum;
        };
        let slow = n;
        let fast = getNext(n);
        while (fast != 1 && slow != fast) {
            slow = getNext(slow);
            fast = getNext(getNext(fast));
        }
        return fast === 1;
    }

    /**
     * 203.Remove Linked List Elements
     * @param head 
     * @param val 
     */
    removeElements(head: ListNode | null, val: number): ListNode | null {
        let dummyHead = new ListNode(0);
        dummyHead.next = head;
        let tmp = dummyHead;
        while (tmp.next !== null) {
            if (tmp.next.val == val) {
                tmp.next = tmp.next.next;
            } else {
                tmp = tmp.next;
            }
        }
        return dummyHead.next;
    }

    /**
     * 206.Reverse Linked List
     * @param head 
     */
    reverseList(head: ListNode | null): ListNode | null {
        let prev = null;
        let curr = head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    /**
     * 217.Contains Duplicate
     * @param nums 
     */
    containsDuplicate(nums: number[]): boolean {
        let set: Set<number> = new Set<number>();
        for (const num of nums) {
            if (set.has(num)) {
                return true;
            }
            set.add(num);
        }
        return false;
    }

    /**
     * 242.Valid Anagram
     * @param s 
     * @param t 
     */
    isAnagram(s: string, t: string): boolean {
        let m = s.length;
        let n = t.length;
        if (m != n) {
            return false;
        }
        let map: Map<string, number> = new Map<string, number>();
        for (let i = 0; i < m; ++i) {
            if (map.has(s[i])) {
                let val = map.get(s[i]) as number;
                val++;
                map.set(s[i], val);
            } else {
                map.set(s[i], 1);
            }
        }

        for (let i = 0; i < n; ++i) {
            if (map.has(t[i])) {
                let val = map.get(t[i]) as number;
                val--;
                map.set(t[i], val);
            } else {
                map.set(t[i], -1);
            }
            if (map.get(t[i]) as number < 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * 258.Add Digits
     * @param num 
     * @returns 
     */
    addDigits(num: number): number {
        return (num - 1) % 9 + 1;
    }

    /**
     * 350.Intersection of Two Arrays II
     * @param nums1 
     * @param nums2 
     */
    intersect(nums1: number[], nums2: number[]): number[] {
        if (nums1.length > nums2.length) {
            this.intersect(nums2, nums1);
        }
        let map: Map<number, number> = new Map();
        for (const num of nums1) {
            if (map.has(num)) {
                let val = map.get(num) as number;
                val++;
                map.set(num, val);
            } else {
                map.set(num, 1);
            }
        }
        let intersection: number[] = [];
        let index = 0;
        for (const num of nums2) {
            if (map.has(num)) {
                let val = map.get(num) as number;
                if (val > 0) {
                    intersection[index++] = num;
                    val--;
                    if (val > 0) {
                        map.set(num, val);
                    } else {
                        map.delete(num);
                    }
                }
            }
        }
        return intersection;
    }

    /**
     * 357.Count Numbers with Unique Digits
     * @param n 
     */
    countNumbersWithUniqueDigits(n: number): number {
        if (n == 0) {
            return 1;
        }
        if (n == 1) {
            return 10;
        }
        let res = 10, cur = 9;
        for (let i = 0; i < n - 1; i++) {
            cur *= 9 - i;
            res += cur;
        }
        return res;
    }

    /**
     * 383.Ransom Note
     * @param ransomNote 
     * @param magazine 
     */
    canConstruct(ransomNote: string, magazine: string): boolean {
        if (ransomNote.length > magazine.length) {
            return false;
        }
        let count = new Array<number>(26).fill(0);
        for (const c of magazine) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (const c of ransomNote) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]--;
            if (count[c.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * 386.Lexicographical Numbers
     * @param n 
     */
    lexicalOrder(n: number): number[] {
        let ret = [];
        let num = 1;
        for (let i = 0; i < n; ++i) {
            ret.push(num);
            if (num * 10 <= n) {
                num *= 10;
            } else {
                while (num % 10 === 9 || num + 1 > n) {
                    num = Math.floor(num / 10);
                }
                num++;
            }
        }
        return ret;
    }

    /**
     * 387.First Unique Character in a String
     * @param s 
     */
    firstUniqChar(s: string): number {
        let position: Map<string, number> = new Map<string, number>();
        let n = s.length;
        for (let [i, ch] of Array.from(s).entries()) {
            if (position.has(ch)) {
                position.set(ch, -1);
            } else {
                position.set(ch, i);
            }
        }

        let first = n;
        for (let pos of position.values()) {
            if (pos !== -1 && pos < first) {
                first = pos;
            }
        }
        if (first === n) {
            first = -1;
        }
        return first;
    }

    /**
     * 389.Find the Difference
     * @param s 
     * @param t 
     */
    findTheDifference(s: string, t: string): string {
        let n = s.length;
        if (n === 0) {
            return t;
        }
        let sSum = 0;
        for (const ch of s) {
            sSum += ch.charCodeAt(0);
        }
        let tSum = 0
        for (const ch of t) {
            tSum += ch.charCodeAt(0);
        }
        return String.fromCharCode(tSum - sSum);
    }

    /**
     * 404.Sum of Left Leaves
     * @param root 
     */
    sumOfLeftLeaves(root: TreeNode | null): number {
        let isLeafNode = (node: TreeNode): boolean => {
            return !node.left && !node.right;
        };
        let dfs = (node: TreeNode | null): number => {
            let sum = 0;
            if (node?.left) {
                sum += isLeafNode(node.left) ? node.left.val : dfs(node.left);
            }
            if (node?.right && !isLeafNode(node.right)) {
                sum += dfs(node.right);
            }
            return sum;
        };
        return root ? dfs(root) : 0;
    }

    /**
     * 467.Unique Substrings in Wraparound String
     * @param p 
     */
    findSubstringInWraparoundString(p: string): number {
        let dp = new Array<number>(26).fill(0);
        let k = 0;
        for (let i = 0; i < p.length; ++i) {
            if (i > 0 && (p[i].charCodeAt(0) - p[i - 1].charCodeAt(0) + 26) % 26 === 1) {
                ++k;
            } else {
                k = 1;
            }
            dp[p[i].charCodeAt(0) - 'a'.charCodeAt(0)] = Math.max(dp[p[i].charCodeAt(0) - 'a'.charCodeAt(0)], k);
        }
        return dp.reduce((prev, curr) => prev + curr, 0);
    }

    /**
     * 473.Matchsticks to Square
     * @param matchsticks 
     */
    makeSquare(matchsticks: number[]): boolean {
        let dfs = (index: number, data: number[], edges: number[], len: number): boolean => {
            if (index === data.length) {
                return true;
            }
            for (let i = 0; i < edges.length; ++i) {
                edges[i] += data[index];
                if (edges[i] <= len && dfs(index + 1, data, edges, len)) {
                    return true;
                }
                edges[i] -= data[index];
            }
            return false;
        };
        let total = matchsticks.reduce((prev, curr) => prev + curr, 0);
        if (total % 4 !== 0) {
            return false;
        }
        matchsticks.sort((a, b) => a - b);
        for (let i = 0, j = matchsticks.length - 1; i < j; ++i, --j) {
            [matchsticks[i], matchsticks[j]] = [matchsticks[j], matchsticks[i]];
        }
        let edges = new Array<number>(4).fill(0);
        return dfs(0, matchsticks, edges, Math.floor(total / 4));
    }

    /**
     * 481. Magical String
     * @param n 
     */
    magicalString(n: number): number {
        if (n < 4) {
            return 1;
        }
        let s = new Array<string>(n);
        s[0] = '1';
        s[1] = '2';
        s[2] = '2';
        let res = 1;
        let i = 2, j = 3;
        while (j < n) {
            let size = s[i].charCodeAt(0) - '0'.charCodeAt(0);
            const num = 3 - (s[j - 1].charCodeAt(0) - '0'.charCodeAt(0));
            while (size > 0 && j < n) {
                s[j] = String.fromCharCode('0'.charCodeAt(0) + num);
                if (num === 1) {
                    ++res;
                }
                ++j;
                --size;
            }
            ++i;
        }
        return res;
    }

    /**
     * 496.Next Greater Element I
     * @param nums1 
     * @param nums2 
     */
    nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        let map: Map<number, number> = new Map();
        let stack: number[] = [];
        for (let i = nums2.length - 1; i >= 0; --i) {
            let num = nums2[i];
            while (stack.length && num >= stack[stack.length - 1]) {
                stack.pop();
            }
            map.set(num, stack.length ? stack[stack.length - 1] : -1);
            stack.push(num);
        }
        let ans = new Array<number>(nums1.length).fill(0).map((_, i) => map.get(nums1[i])) as number[];
        return ans;
    }

    /**
     * 498.Diagonal Traverse
     * @param matrix 
     */
    findDiagonalOrder(matrix: number[][]): number[] {
        if (matrix === null || matrix.length === 0) {
            return [];
        }
        let N = matrix.length, M = matrix[0].length;
        let row = 0, col = 0;
        let direction = 1;
        let res = new Array<number>(N * M);
        let r = 0;
        while (row < N && col < M) {
            res[r++] = matrix[row][col];
            let newRow = row + (direction == 1 ? -1 : 1);
            let newCol = col + (direction == 1 ? 1 : -1);
            if (newRow < 0 || newRow == N || newCol < 0 || newCol == M) {
                if (direction == 1) {
                    row += (col == M - 1 ? 1 : 0);
                    col += (col < M - 1 ? 1 : 0);
                } else {
                    col += (row == N - 1 ? 1 : 0);
                    row += (row < N - 1 ? 1 : 0);
                }
                direction = 1 - direction;
            } else {
                row = newRow;
                col = newCol;
            }
        }
        return res;
    }

    /**
     * 504.Base 7
     * @param num 
     */
    convertToBase7(num: number): string {
        if (num === 0) {
            return "0";
        }
        let negative = num < 0;
        num = Math.abs(num);
        let digits = []
        while (num > 0) {
            digits.push(num % 7);
            num = Math.floor(num / 7);
        }
        if (negative) {
            digits.push("-");
        }
        return digits.reverse().join("");
    }

    /**
     * 521.Longest Uncommon Subsequence I
     * @param a 
     * @param b 
     * @returns 
     */
    findLUSLength(a: string, b: string): number {
        return a === b ? -1 : Math.max(a.length, b.length);
    }

    /**
     * 540.Single Element in a Sorted Array
     * @param nums 
     * @returns 
     */
    singleNonDuplicate(nums: number[]): number {
        let low = 0, high = nums.length - 1;
        while (low < high) {
            let mid = Math.floor((high - low) / 2) + low;
            if (nums[mid] == nums[mid ^ 1]) {
                low = mid + 1;
            }
            else {
                high = mid;
            }
        }
        return nums[low];
    }

    /**
     * 553.Optimal Division
     * @param nums
     * @returns
     */
    optimalDivision(nums: number[]): string {
        let n = nums.length;
        if (n == 1) {
            return "" + nums[0];
        }
        if (n == 2) {
            return "" + nums[0] + "/" + nums[1];
        }
        let res = new Array<string>();
        res.push(nums[0].toString());
        res.push("/(");
        res.push(nums[1].toString());
        for (let i = 2; i < n; i++) {
            res.push("/");
            res.push(nums[i].toString());
        }
        res.push(")");
        return res.join('');
    }

    /**
     * 566.Reshape the Matrix
     * @param mat 
     * @param r 
     * @param c 
     */
    matrixReshape(mat: number[][], r: number, c: number): number[][] {
        let m = mat.length, n = mat[0].length;
        if (m * n !== r * c) {
            return mat;
        }
        let ans = new Array<number>(r).fill(0).map(() => new Array<number>(c).fill(0));
        for (let x = 0; x < m * n; ++x) {
            ans[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n];
        }
        return ans;
    }

    /**
     * 589.N-ary Tree Preorder Traversal
     * @param root 
     */
    preorder(root: Node | null): number[] {
        let ans: number[] = [];
        const dfs = (node: Node | null) => {
            if (node === null) {
                return;
            }
            ans.push(node.val);
            for (const ch of node.children) {
                dfs(ch);
            }
        };
        dfs(root);
        return ans;
    }

    /**
     * 590.N-ary Tree Postorder Traversal
     * @param root 
     * @returns 
     */
    postorder(root: Node | null): number[] {
        let ans: number[] = [];
        const dfs = (node: Node | null) => {
            if (node === null) {
                return;
            }
            for (const ch of node.children) {
                dfs(ch);
            }
            ans.push(node.val);
        };
        dfs(root);
        return ans;
    }

    /**
     * 623.Add One Row to Tree
     * @param root 
     * @param val 
     * @param depth 
     * @returns 
     */
    addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
        if (!root) {
            return null;
        }
        if (depth === 1) {
            return new TreeNode(val, root, null);
        }
        if (depth === 2) {
            root.left = new TreeNode(val, root.left, null);
            root.right = new TreeNode(val, null, root.right);
        } else {
            root.left = this.addOneRow(root.left, val, depth - 1);
            root.right = this.addOneRow(root.right, val, depth - 1);
        }
        return root;
    }

    /**
     * 636.Exclusive Time of Functions
     * @param n 
     * @param logs 
     */
    exclusiveTime(n: number, logs: string[]): number[] {
        let stack: number[][] = []; // [index, timestamp]
        let res: number[] = new Array(n).fill(0);
        const start = "start";
        for (const log of logs) {
            // 0:start:1 
            // 0:end:1
            let firstColonIndex = log.indexOf(":");
            let lastColonIndex = log.lastIndexOf(":");
            let index = parseInt(log.substring(0, firstColonIndex));
            let type = log.substring(log.indexOf(":") + 1, lastColonIndex);
            let timestamp = parseInt(log.substring(lastColonIndex + 1));
            if (type === start) {
                if (stack.length) {
                    res[stack[stack.length - 1][0]] += timestamp - stack[stack.length - 1][1];
                }
                stack.push([index, timestamp]);
            } else {
                let pair = stack.pop()!;
                res[pair[0]] += timestamp - pair[1] + 1;
                if (stack.length) {
                    stack[stack.length - 1][1] = timestamp + 1;
                }
            }
        }
        return res;
    }

    /**
     * 646.Maximum Length of Pair Chain
     * @param pairs 
     */
    findLongestChain(pairs: number[][]): number {
        pairs.sort((a, b) => a[1] - b[1]);
        let curr = -Infinity, res = 0;
        for (const pair of pairs) {
            if (curr < pair[0]) {
                curr = pair[1];
                res++;
            }
        }
        return res;
    }

    /**
     * 652.Find Duplicate Subtrees
     * @param root 
     */
    findDuplicateSubtrees(root: TreeNode | null): (TreeNode | null)[] {
        let seen = new Map<string, [TreeNode, number]>();
        let repeat = new Set<TreeNode>();
        let index = 0;
        const dfs = (node: TreeNode | null): number => {
            if (node === null) {
                return 0;
            }
            let triple: [number, number, number] = [node.val, dfs(node.left), dfs(node.right)];
            let key = triple.toString();
            if (seen.has(key)) {
                let pair: [TreeNode, number] | undefined = seen.get(key);
                repeat.add(pair![0]);
                return pair![1];
            } else {
                seen.set(key, [node, ++index]);
                return index;
            }
        };
        dfs(root);
        return [...repeat];
    }

    /**
     * 658.Find K Closest Elements
     * @param arr 
     * @param k 
     * @param x 
     */
    findClosestElements(arr: number[], k: number, x: number): number[] {
        const binary_search = (nums: number[], target: number): number => {
            let low = 0, high = nums.length - 1;
            while (low < high) {
                const mid = low + Math.floor((high - low) / 2);
                if (nums[mid] >= x) {
                    high = mid;
                } else {
                    low = mid + 1;
                }
            }
            return low;
        }
        let right = binary_search(arr, x);
        let left = right - 1;
        while (k-- > 0) {
            if (left < 0) {
                right++;
            } else if (right >= arr.length) {
                left--;
            } else if (x - arr[left] <= arr[right] - x) {
                left--;
            } else {
                right++;
            }
        }
        const res = [];
        for (let i = left + 1; i < right; i++) {
            res.push(arr[i]);
        }
        return res;
    }

    /**
     * 662.Maximum Width of Binary Tree
     * @param root 
     */
    widthOfBinaryTree(root: TreeNode | null): number {
        let levelMin = new Map<number, number>();
        const dfs = (node: TreeNode | null, depth: number, index: number): number => {
            if (!node) {
                return 0;
            }
            if (!levelMin.get(depth)) {
                levelMin.set(depth, index);
            }
            return Math.max(index - levelMin.get(depth)! + 1,
                Math.max(
                    dfs(node.left, depth + 1, index * 2),
                    dfs(node.right, depth + 1, index * 2 + 1)
                ));
        };
        return dfs(root, 1, 1);
    }

    /**
     * 667.Beautiful Arrangement II
     * @param n 
     * @param k 
     */
    constructArray(n: number, k: number): number[] {
        let res = Array<number>(n).fill(0);
        let index = 0;
        for (let i = 1; i < n - k; ++i) {
            res[index++] = i;
        }
        for (let i = n - k, j = n; i <= j; ++i, --j) {
            res[index++] = i;
            if (i != j) {
                res[index++] = j;
            }
        }
        return res;
    }

    /**
     * 669.Trim a Binary Search Tree
     * @param root 
     * @param low 
     * @param high 
     */
    trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
        while (root && (root.val < low || root.val > high)) {
            if (root.val < low) {
                root = root.right;
            } else {
                root = root.left;
            }
        }
        if (!root) {
            return null;
        }
        for (let node = root; node.left;) {
            if (node.left.val < low) {
                node.left = node.left.right;
            } else {
                node = node.left;
            }
        }
        for (let node = root; node.right;) {
            if (node.right.val > high) {
                node.right = node.right.left;
            } else {
                node = node.right;
            }
        }
        return root;
    }

    /**
     * 670.Maximum Swap
     * @param num 
     */
    maximumSwap(num: number): number {
        let chars: string[] = [...'' + num];
        let n = chars.length;
        let maxIndex = n - 1;
        let index1 = -1, index2 = -1;
        for (let i = n - 1; i >= 0; i--) {
            if (chars[i] > chars[maxIndex]) {
                maxIndex = i;
            } else if (chars[i] < chars[maxIndex]) {
                index1 = i;
                index2 = maxIndex;
            }
        }
        if (index1 >= 0) {
            [chars[index1], chars[index2]] = [chars[index2], chars[index1]];
            return parseInt(chars.join(''));
        }
        return num;
    }

    /**
     * 672.Bulb Switcher II
     * @param n 
     * @param presses 
     */
    flipLights(n: number, presses: number): number {
        let seen = new Set<number>();
        for (let i = 0; i < 16; i++) {
            let pressArray = new Array<number>(4).fill(0);
            for (let j = 0; j < 4; j++) {
                pressArray[j] = (i >> j) & 1;
            }
            let sum = pressArray.reduce((accumulator, currentValue) => accumulator + currentValue);
            if (sum % 2 === presses % 2 && sum <= presses) {
                let status = pressArray[0] ^ pressArray[1] ^ pressArray[3];
                if (n >= 2) {
                    status |= (pressArray[0] ^ pressArray[1]) << 1;
                }
                if (n >= 3) {
                    status |= (pressArray[0] ^ pressArray[2]) << 2;
                }
                if (n >= 4) {
                    status |= (pressArray[0] ^ pressArray[1] ^ pressArray[3]) << 3;
                }
                seen.add(status);
            }
        }
        return seen.size;
    }

    /**
     * 682.Baseball Game
     * @param ops 
     */
    calPoints(ops: string[]): number {
        let ret = 0;
        let points: number[] = [];
        for (const op of ops) {
            let n = points.length;
            switch (op[0]) {
                case '+':
                    ret += points[n - 1] + points[n - 2];
                    points.push(points[n - 1] + points[n - 2]);
                    break;
                case 'D':
                    ret += 2 * points[n - 1];
                    points.push(2 * points[n - 1]);
                    break;
                case 'C':
                    ret -= points[n - 1];
                    points.pop();
                    break;
                default:
                    let val: number = parseInt(op);
                    ret += val;
                    points.push(val);
            }
        }
        return ret;
    }

    /**
     * 687.Longest Univalue Path
     * @param root 
     */
    longestUnivaluePath(root: TreeNode | null): number {
        let res = 0;
        const dfs = (node: TreeNode | null): number => {
            if (!node) {
                return 0;
            }
            let left = dfs(node.left);
            let right = dfs(node.right);
            let left1 = 0, right1 = 0;
            if (node.left && node.left.val === node.val) {
                left1 = left + 1;
            }
            if (node.right && node.right.val === node.val) {
                right1 = right + 1;
            }
            res = Math.max(res, left1 + right1);
            return Math.max(left1, right1);
        }
        dfs(root);
        return res;
    }

    /**
     * 709.To Lower Case
     * @param s 
     */
    toLowerCase(s: string): string {
        let sb: string[] = [];
        for (let ch of s) {
            let val = ch.charCodeAt(0);
            if (val >= 65 && val <= 90) {
                ch = String.fromCharCode(val | 32);
            }
            sb.push(ch);
        }
        return sb.join("");
    }

    /**
     * 720.Longest Word in Dictionary
     * @param words 
     * @returns 
     */
    longestWord(words: string[]): string {
        let trie: Trie = new Trie();
        words.forEach(word => {
            trie.insert(word);
        });
        let longest: string = "";
        words.forEach(word => {
            if (trie.search(word)) {
                if (word.length > longest.length || (word.length == longest.length && word.localeCompare(longest) < 0)) {
                    longest = word;
                }
            }

        });
        return longest;
    }

    /**
     * 724.Find Pivot Index
     * @param nums 
     */
    pivotIndex(nums: number[]): number {
        let total = nums.reduce((a, b) => a + b, 0);
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            if (2 * sum + nums[i] == total) {
                return i;
            }
            sum += nums[i];
        }
        return -1;
    }

    /**
     * 728.Self Dividing Numbers
     * @param left 
     * @param right 
     */
    selfDividingNumbers(left: number, right: number): number[] {
        let isSelfDividing = (num: number) => {
            let tmp = num;
            while (tmp > 0) {
                let digit = tmp % 10;
                if (digit == 0 || num % digit != 0) {
                    return false;
                }
                tmp = Math.floor(tmp / 10);
            }
            return true;
        }
        let ans = [];
        for (let i = left; i <= right; i++) {
            if (isSelfDividing(i)) {
                ans.push(i);
            }
        }
        return ans;
    }


    /**
     * 744.Find Smallest Letter Greater Than Target
     * @param letters 
     * @param target 
     */
    nextGreatestLetter(letters: string[], target: string): string {
        let len = letters.length;
        if (target >= letters[len - 1]) {
            return letters[0];
        }
        let low = 0, high = len - 1;
        while (low < high) {
            let mid = Math.floor((high - low) / 2) + low;
            if (letters[mid] > target) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return letters[low];
    }

    /**
     * 754. Reach a Number
     * @param target 
     */
    reachNumber(target: number): number {
        target = Math.abs(target);
        let k = 0;
        while (target > 0) {
            k++;
            target -= k;
        }
        return target % 2 === 0 ? k : k + 1 + k % 2;
    }

    /**
     * 762.Prime Number of Set Bits in Binary Representation
     * @param left 
     * @param right 
     */
    countPrimeSetBits(left: number, right: number): number {
        let bitCount = (x: number) => {
            return x.toString(2).split('0').join('').length;
        };
        let ans = 0;
        for (let x = left; x <= right; ++x) {
            if (((1 << bitCount(x)) & 665772) != 0) {
                ++ans;
            }
        }
        return ans;
    }

    /**
     * 764. Largest Plus Sign
     * @param n 
     * @param mines 
     */
    orderOfLongestPlusSign(n: number, mines: number[][]): number {
        let dp = new Array<Array<number>>(n).fill([]).map(() => new Array<number>(n).fill(n));
        let banned = new Set<number>();
        mines.forEach(x => banned.add(x[0] * n + x[1]));
        let res = 0;
        for (let i = 0; i < n; i++) {
            let count = 0;
            for (let j = 0; j < n; j++) {
                if (banned.has(i * n + j)) {
                    count = 0;
                } else {
                    count++;
                }
                dp[i][j] = Math.min(dp[i][j], count);
            }
            count = 0;
            for (let j = n - 1; j >= 0; j--) {
                if (banned.has(i * n + j)) {
                    count = 0;
                } else {
                    count++;
                }
                dp[i][j] = Math.min(dp[i][j], count);
            }
        }
        for (let i = 0; i < n; i++) {
            let count = 0;
            for (let j = 0; j < n; j++) {
                if (banned.has(j * n + i)) {
                    count = 0;
                } else {
                    count++;
                }
                dp[j][i] = Math.min(dp[j][i], count);
            }
            count = 0;
            for (let j = n - 1; j >= 0; j--) {
                if (banned.has(j * n + i)) {
                    count = 0;
                } else {
                    count++;
                }
                dp[j][i] = Math.min(dp[j][i], count);
                res = Math.max(res, dp[j][i])
            }
        }
        return res;
    }

    /**
     * 769. Max Chunks To Make Sorted
     * @param arr 
     */
    maxChunksToSorted(arr: number[]): number {
        let m = 0, res = 0;
        for (let i = 0; i < arr.length; i++) {
            m = Math.max(m, arr[i]);
            if (m === i) {
                res++;
            }
        }
        return res;
    }

    /**
     * 775. Global and Local Inversions
     * @param nums 
     */
    isIdealPermutation(nums: number[]): boolean {
        for (let i = 0; i < nums.length; i++) {
            if (Math.abs(nums[i] - i) > 1) {
                return false;
            }
        }
        return true;
    }

    /**
     * 777.Swap Adjacent in LR String
     * @param start 
     * @param end 
     */
    canTransform(start: string, end: string): boolean {
        let n = start.length;
        let i = 0, j = 0;
        while (i < n && j < n) {
            while (i < n && start[i] === 'X') {
                i++;
            }
            while (j < n && end[j] === 'X') {
                j++;
            }
            if (i < n && j < n) {
                let c = start[i];
                if (c !== end[j]) {
                    return false;
                }
                if ((c === 'L' && i < j) || (c === 'R' && i > j)) {
                    return false;
                }
                i++;
                j++;
            }
        }
        while (i < n) {
            if (start[i] !== 'X') {
                return false;
            }
            i++;
        }
        while (j < n) {
            if (end[j] !== 'X') {
                return false;
            }
            j++;
        }
        return true;
    }

    /**
     * 779. K-th Symbol in Grammar
     * @param n 
     * @param k 
     */
    kthGrammar(n: number, k: number): number {
        k -= 1;
        let res = 0;
        while (k) {
            k &= k - 1;
            res ^= 1;
        }
        return res;
    }

    /**
     * 784. Letter Case Permutation
     * @param s 
     */
    letterCasePermutation(s: string): string[] {
        const n = s.length;
        let m = 0;
        for (let i = 0; i < n; i++) {
            if (this.utils.isLetter(s[i])) {
                m++;
            }
        }
        let res: string[] = [];
        for (let mask = 0; mask < (1 << m); mask++) {
            let sb = "";
            for (let j = 0, k = 0; j < n; j++) {
                if (this.utils.isLetter(s[j]) && (mask & (1 << k++)) !== 0) {
                    sb += s[j].toUpperCase();
                } else {
                    sb += s[j].toLocaleLowerCase();
                }
            }
            res.push(sb);
        }
        return res;
    }

    /**
     * 790. Domino and Tromino Tiling
     * @param n 
     */
    numTilings(n: number): number {
        const mod = 1e9 + 7;
        let dp = new Array<Array<number>>(n + 1).fill([]).map(() => new Array<number>(4).fill(0));
        dp[0][3] = 1;
        for (let i = 1; i <= n; i++) {
            dp[i][0] = dp[i - 1][3];
            dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % mod;
            dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % mod;
            dp[i][3] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3]) % mod;
        }
        return dp[n][3];
    }

    /**
     * 791. Custom Sort String
     * @param order 
     * @param s 
     */
    customSortString(order: string, s: string): string {
        let alphas = new Array<number>(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            const ch = s[i];
            ++alphas[ch.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        let res = "";
        for (let i = 0; i < order.length; i++) {
            const ch = order[i];
            while (alphas[ch.charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
                res += ch;
                alphas[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--;
            }
        }
        for (let i = 0; i < 26; i++) {
            while (alphas[i] > 0) {
                res += String.fromCharCode(i + 'a'.charCodeAt(0));
                alphas[i]--;
            }
        }
        return res;
    }

    /**
     * 792. Number of Matching Subsequences
     * @param s 
     * @param words 
     */
    numMatchingSubseq(s: string, words: string[]): number {
        let p = new Array<Array<Array<number>>>(26).fill([]).map(() => new Array<Array<number>>());
        const aascii = 'a'.charCodeAt(0);
        words.forEach((x, i) => {
            p[x[0].charCodeAt(0) - aascii].push([i, 0]);
        });
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            let len = p[c.charCodeAt(0) - aascii].length;
            while (len > 0) {
                const t = p[c.charCodeAt(0) - aascii].shift()!;
                if (t[1] === words[t[0]].length - 1) {
                    ++res;
                } else {
                    ++t[1];
                    p[words[t[0]][t[1]].charCodeAt(0) - aascii].push(t);
                }
                --len;
            }
        }
        return res;
    }

    /**
     * 793.Preimage Size of Factorial Zeroes Function
     * @param k 
     */
    preimageSizeFZF(k: number): number {
        const zeta = (x: number): number => {
            let res = 0;
            while (x != 0) {
                res += Math.floor(x / 5);
                x = Math.floor(x / 5);
            }
            return res;
        };

        const nx = (x: number): number => {
            let left = 0, right = 5 * x;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (zeta(mid) < x) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return right + 1;
        };

        return nx(k + 1) - nx(k);
    }

    /**
     * 795. Number of Subarrays with Bounded Maximum
     * @param nums 
     * @param left 
     * @param right 
     */
    numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
        let res = 0, last2 = -1, last1 = -1;
        for (let i = 0; i < nums.length; i++) {
            if (left <= nums[i] && nums[i] <= right) {
                last1 = i;
            } else if (nums[i] > right) {
                last2 = i;
                last1 = -1;
            }
            if (last1 !== -1) {
                res += last1 - last2;
            }
        }
        return res;
    }

    /**
     * 799. Champagne Tower
     * @param poured 
     * @param query_row 
     * @param query_glass 
     */
    champagneTower(poured: number, query_row: number, query_glass: number): number {
        let row = [poured];
        for (let i = 1; i <= query_row; i++) {
            let nextRow = new Array<number>(i + 1).fill(0);
            for (let j = 0; j < i; j++) {
                const volume = row[j];
                if (volume > 1) {
                    nextRow[j] += (volume - 1) / 2;
                    nextRow[j + 1] += (volume - 1) / 2;
                }
            }
            row = nextRow;
        }
        return Math.min(1, row[query_glass]);
    }

    /**
     * 801. Minimum Swaps To Make Sequences Increasing
     * @param nums1 
     * @param nums2 
     */
    minSwap(nums1: number[], nums2: number[]): number {
        let n = nums1.length;
        let a = 0, b = 1;
        for (let i = 1; i < n; i++) {
            let at = a, bt = b;
            a = b = n;
            if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
                a = Math.min(a, at);
                b = Math.min(b, bt + 1);
            }
            if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
                a = Math.min(a, bt);
                b = Math.min(b, at + 1);
            }
        }
        return Math.min(a, b);
    }

    /**
     * 804.Unique Morse Code Words
     * @param words 
     */
    uniqueMorseRepresentations(words: string[]): number {
        let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
        let seen = new Set<string>();
        for (const word of words) {
            let code = "";
            for (const ch of word) {
                code += (morse[ch.charCodeAt(0) - 'a'.charCodeAt(0)]);
            }
            seen.add(code);
        }
        return seen.size;
    }

    /**
     * 805. Split Array With Same Average
     * @param nums 
     */
    splitArraySameAverage(nums: number[]): boolean {
        if (nums.length === 1) {
            return false;
        }
        const n = nums.length, m = Math.floor(n / 2);
        const sum = nums.reduce((prev, curr) => prev + curr, 0);
        let isPossible = false;
        for (let i = 1; i <= m; i++) {
            if (sum * i % n === 0) {
                isPossible = true;
                break;
            }
        }
        if (!isPossible) {
            return false;
        }
        let dp = new Array<Set<number>>(m + 1).fill(new Set<number>()).map(() => new Set<number>());
        dp[0].add(0);
        for (const num of nums) {
            for (let i = m; i >= 1; i--) {
                for (const x of dp[i - 1]) {
                    let curr = x + num;
                    if (curr * n === sum * i) {
                        return true;
                    }
                    dp[i].add(curr);
                }
            }
        }
        return false;
    }

    /**
     * 806.Number of Lines To Write String
     * @param widths 
     * @param s 
     */
    numberOfLines(widths: number[], s: string): number[] {
        const MAX_WIDTH = 100;
        let lines = 1;
        let width = 0;
        for (let i = 0; i < s.length; i++) {
            let need = widths[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];
            width += need;
            if (width > MAX_WIDTH) {
                lines++;
                width = need;
            }
        }
        return [lines, width];
    }

    /**
     * 809. Expressive Words
     * @param s 
     * @param words 
     */
    expressiveWords(s: string, words: string[]): number {
        const expand = (s: string, t: string): boolean => {
            let i = 0, j = 0;
            while (i < s.length && j < t.length) {
                if (s[i] != t[j]) {
                    return false;
                }
                const ch: string = s[i];
                let cnti = 0;
                while (i < s.length && s[i] === ch) {
                    ++cnti;
                    ++i;
                }
                let cntj = 0;
                while (j < t.length && t[j] === ch) {
                    ++cntj;
                    ++j;
                }
                if (cnti < cntj) {
                    return false;
                }
                if (cnti != cntj && cnti < 3) {
                    return false;
                }
            }
            return i === s.length && j === t.length;
        }
        let res = 0;
        for (const word of words) {
            if (expand(s, word)) {
                ++res;
            }
        }
        return res;
    }

    /**
     * 811.Subdomain Visit Count
     * @param cpdomains 
     */
    subdomainVisits(cpdomains: string[]): string[] {
        let res: string[] = [];
        let counts = new Map<string, number>();
        for (const cpdomain of cpdomains) {
            let space = cpdomain.indexOf(' ');
            let count = parseInt(cpdomain.slice(0, space));
            let domain = cpdomain.slice(space + 1);
            counts.set(domain, (counts.get(domain) || 0) + count);
            for (let i = 0; i < domain.length; i++) {
                if (domain[i] === '.') {
                    let subdomain = domain.slice(i + 1);
                    counts.set(subdomain, (counts.get(subdomain) || 0) + count);
                }
            }
        }
        for (const [subdomain, count] of counts.entries()) {
            res.push(count + " " + subdomain);
        }
        return res;
    }

    /**
     * 816. Ambiguous Coordinates
     * @param s 
     */
    ambiguousCoordinates(s: string): string[] {
        const getPos = (s: string): string[] => {
            let pos: string[] = [];
            if (s[0] !== '0' || "0" === s) {
                pos.push(s);
            }
            for (let p = 1; p < s.length; ++p) {
                if ((p !== 1 && s[0] === '0') || s[s.length - 1] === '0') {
                    continue;
                }
                pos.push(s.slice(0, p) + "." + s.slice(p));
            }
            return pos;
        };
        const n = s.length - 2;
        let res: string[] = [];
        s = s.slice(1, s.length - 1);
        for (let l = 1; l < n; l++) {
            const lt = getPos(s.slice(0, l));
            if (lt.length === 0) {
                continue;
            }
            const rt = getPos(s.slice(l));
            if (rt.length === 0) {
                continue;
            }
            lt.forEach(x => {
                rt.forEach(y => {
                    res.push("(" + x + ", " + y + ")");
                })
            })
        }
        return res;
    }

    /**
     * 817. Linked List Components
     * @param head 
     * @param nums 
     */
    numComponents(head: ListNode | null, nums: number[]): number {
        let numSet = new Set<number>();
        for (const num of nums) {
            numSet.add(num);
        }
        let inSet = false;
        let res = 0;
        while (head) {
            if (numSet.has(head.val)) {
                if (!inSet) {
                    inSet = true;
                    res++;
                }
            } else {
                inSet = false;
            }
            head = head.next;
        }
        return res;
    }

    /**
     * 819.Most Common Word
     * @param paragraph 
     * @param banned 
     */
    mostCommonWord(paragraph: string, banned: string[]): string {
        let isLetter = (ch: string) => {
            return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
        };
        let bannedSet = new Set<string>();
        for (const word of banned) {
            bannedSet.add(word);
        }
        let maxFrequency = 0;
        let frequencies = new Map<string, number>();
        let sb = "";
        let len = paragraph.length;
        for (let i = 0; i <= len; i++) {
            if (i < len && isLetter(paragraph[i])) {
                sb = sb + paragraph[i].toLowerCase();
            } else if (sb.length > 0) {
                if (!bannedSet.has(sb)) {
                    let frequency = (frequencies.get(sb) || 0) + 1;
                    frequencies.set(sb, frequency);
                    maxFrequency = Math.max(maxFrequency, frequency);
                }
                sb = "";
            }
        }
        let mostCommon = "";
        for (const [word, frequency] of frequencies.entries()) {
            if (frequency === maxFrequency) {
                mostCommon = word;
                break;
            }
        }
        return mostCommon;
    }

    /**
     * 821.Shortest Distance to a Character
     * @param s 
     * @param c 
     */
    shortestToChar(s: string, c: string): number[] {
        let n = s.length;
        let ans = new Array<number>(n).fill(0);
        for (let i = 0, index = -n; i < n; ++i) {
            if (s[i] === c) {
                index = i;
            }
            ans[i] = i - index;
        }

        for (let i = n - 1, index = 2 * n; i >= 0; --i) {
            if (s[i] === c) {
                index = i;
            }
            ans[i] = Math.min(ans[i], index - i);
        }
        return ans;
    }

    /**
     * 828.Count Unique Characters of All Substrings of a Given String
     * @param s 
     */
    uniqueLetterString(s: string): number {
        let index = new Map<string, Array<number>>();
        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (!index.has(c)) {
                index.set(c, []);
                index.get(c)?.push(-1);
            }
            index.get(c)?.push(i);
        }

        let res = 0;
        for (const [_, arr] of index.entries()) {
            arr.push(s.length);
            for (let i = 1; i < arr.length - 1; i++) {
                res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i]);
            }
        }
        return res;
    }

    /**
     * 856. Score of Parentheses
     * @param s 
     */
    scoreOfParentheses(s: string): number {
        let bal = 0, n = s.length, res = 0;
        for (let i = 0; i < n; i++) {
            bal += (s[i] === '(' ? 1 : -1);
            if (s[i] === ')' && s[i - 1] === '(') {
                res += 1 << bal;
            }
        }
        return res;
    }

    /**
     * 857.Minimum Cost to Hire K Workers
     * @param quality 
     * @param wage 
     * @param k 
     */
    minCostToHireWorkers(quality: number[], wage: number[], k: number): number {
        let n = quality.length;
        let hire = new Array<number>(n).fill(0).map((_, i) => i);
        hire.sort((a, b) => {
            return quality[b] * wage[a] - quality[a] * wage[b];
        });
        let res = 1e9;
        let totalQuality = 0.0;
        let queue = new MaxPriorityQueue<number>();
        for (let i = 0; i < k - 1; i++) {
            totalQuality += quality[hire[i]];
            queue.enqueue(quality[hire[i]]);
        }
        for (let i = k - 1; i < n; i++) {
            let index = hire[i];
            totalQuality += quality[index];
            queue.enqueue(quality[index]);
            let totalCost = (wage[index] / quality[index]) * totalQuality;
            res = Math.min(res, totalCost);
            totalQuality -= queue.dequeue();
        }
        return res;
    }

    /**
     * 862. Shortest Subarray with Sum at Least K
     * @param nums 
     * @param k 
     */
    shortestSubarray(nums: number[], k: number): number {
        const n = nums.length;
        const preSum = new Array<number>(n + 1).fill(0);
        for (let i = 0; i < n; i++) {
            preSum[i + 1] = preSum[i] + nums[i];
        }
        let res = n + 1;
        let queue: number[] = [];
        for (let i = 0; i <= n; i++) {
            let currSum = preSum[i];
            while (queue.length != 0 && currSum - preSum[queue[0]] >= k) {
                res = Math.min(res, i - queue.shift()!);
            }
            while (queue.length != 0 && preSum[queue[queue.length - 1]] >= currSum) {
                queue.pop();
            }
            queue.push(i);
        }
        return res < n + 1 ? res : -1;
    }

    /**
     * 870. Advantage Shuffle
     * @param nums1 
     * @param nums2 
     */
    advantageCount(nums1: number[], nums2: number[]): number[] {
        let n = nums1.length;
        let index1 = new Array<number>(n).fill(0);
        let index2 = new Array<number>(n).fill(0);
        for (let i = 0; i < n; i++) {
            index1[i] = i;
            index2[i] = i;
        }
        index1.sort((i, j) => nums1[i] - nums1[j]);
        index2.sort((i, j) => nums2[i] - nums2[j]);

        let res = new Array<number>(n).fill(0);
        let left = 0, right = n - 1;
        for (let i = 0; i < n; i++) {
            if (nums1[index1[i]] > nums2[index2[left]]) {
                res[index2[left]] = nums1[index1[i]];
                left++;
            } else {
                res[index2[right]] = nums1[index1[i]];
                right--;
            }
        }
        return res;
    }

    /**
     * 876.Middle of the Linked List
     * @param head 
     */
    middleNode(head: ListNode | null): ListNode | null {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow?.next!;
            fast = fast.next.next;
        }
        return slow;
    }

    /**
     * 883.Projection Area of 3D Shapes
     * @param grid 
     */
    projectionArea(grid: number[][]): number {
        let n = grid.length;
        let xyArea = 0, yzArea = 0, zxArea = 0;
        for (let i = 0; i < n; i++) {
            let yzHeight = 0, zxHeight = 0;
            for (let j = 0; j < n; j++) {
                xyArea += grid[i][j] > 0 ? 1 : 0;
                yzHeight = Math.max(yzHeight, grid[j][i]);
                zxHeight = Math.max(zxHeight, grid[i][j]);
            }
            yzArea += yzHeight;
            zxArea += zxHeight;
        }
        return xyArea + yzArea + zxArea;
    }

    /**
     * 886. Possible Bipartition
     * @param n 
     * @param dislikes 
     */
    possibleBipartition(n: number, dislikes: number[][]): boolean {
        const dfs = (curr: number, nowColor: number, color: number[], group: number[][]) => {
            color[curr] = nowColor;
            for (const next of group[curr]) {
                if (color[next] !== 0 && color[next] === color[curr]) {
                    return false;
                }
                if (color[next] === 0 && !dfs(next, 3 ^ nowColor, color, group)) {
                    return false;
                }
            }
            return true;
        };

        let color = new Array<number>(n + 1).fill(0);
        let group = new Array<Array<number>>(n + 1).fill([]).map(() => new Array<number>());
        dislikes.forEach(x => {
            group[x[0]].push(x[1]);
            group[x[1]].push(x[0]);
        })
        for (let i = 1; i <= n; i++) {
            if (color[i] === 0 && !dfs(i, 1, color, group)) {
                return false;
            }
        }
        return true;
    }

    /**
     * 904. Fruit Into Baskets
     * @param fruits 
     */
    totalFruit(fruits: number[]): number {
        const n = fruits.length;
        let map = new Map<number, number>();
        let left = 0, res = 0;
        for (let right = 0; right < n; ++right) {
            map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);
            while (map.size > 2) {
                map.set(fruits[left], map.get(fruits[left])! - 1);
                if (map.get(fruits[left]) == 0) {
                    map.delete(fruits[left]);
                }
                ++left;
            }
            res = Math.max(res, right - left + 1);
        }
        return res;
    }

    /**
     * 905.Sort Array By Parity
     * @param nums 
     */
    sortArrayByParity(nums: number[]): number[] {
        let left = 0, right = nums.length - 1;
        while (left < right) {
            while (left < right && nums[left] % 2 == 0) {
                left++;
            }
            while (left < right && nums[right] % 2 == 1) {
                right--;
            }
            if (left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }
        }
        return nums;
    }

    /**
     * 907. Sum of Subarray Minimums
     * @param arr 
     */
    sumSubarrayMins(arr: number[]): number {
        const n = arr.length;
        let res = 0;
        const mod = 1000000007;
        let monoStack: number[] = [];
        let dp = new Array<number>(n).fill(0);
        for (let i = 0; i < n; i++) {
            while (monoStack.length != 0 && arr[monoStack[monoStack.length - 1]] > arr[i]) {
                monoStack.pop();
            }
            const k = monoStack.length === 0 ? i + 1 : i - monoStack[monoStack.length - 1];
            dp[i] = k * arr[i] + (monoStack.length === 0 ? 0 : dp[i - k]);
            res = (res + dp[i]) % mod;
            monoStack.push(i);
        }
        return res;
    }

    /**
     * 915. Partition Array into Disjoint Intervals
     * @param nums 
     */
    partitionDisjoint(nums: number[]): number {
        const n = nums.length;
        let leftMax = nums[0], leftPos = 0, curr = nums[0];
        for (let i = 1; i < n - 1; i++) {
            curr = Math.max(curr, nums[i]);
            if (nums[i] < leftMax) {
                leftMax = curr;
                leftPos = i;
            }
        }
        return leftPos + 1;
    }

    /**
     * 921.Minimum Add to Make Parentheses Valid
     * @param s 
     */
    minAddToMakeValid(s: string): number {
        let res = 0;
        let leftCount = 0;
        let len = s.length;
        for (let i = 0; i < len; i++) {
            let ch = s[i];
            if (ch === '(') {
                leftCount++;
            } else {
                if (leftCount > 0) {
                    leftCount--;
                } else {
                    res++;
                }
            }
        }
        res += leftCount;
        return res;
    }

    /**
     * 927.Three Equal Parts
     * @param arr 
     */
    threeEqualParts(arr: number[]): number[] {
        let sum = arr.reduce((accumulator, curr) => accumulator + curr, 0);
        if (sum % 3 !== 0) {
            return [-1, -1];
        }
        if (sum === 0) {
            return [0, 2];
        }
        let partial = Math.floor(sum / 3);
        let first = 0, second = 0, third = 0, curr = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 1) {
                if (curr === 0) {
                    first = i;
                } else if (curr === partial) {
                    second = i;
                } else if (curr === 2 * partial) {
                    third = i;
                }
                curr++;
            }
        }
        let len = arr.length - third;
        if (first + len <= second && second + len <= third) {
            let i = 0;
            while (third + i < arr.length) {
                if (arr[first + i] !== arr[second + i] || arr[first + i] !== arr[third + i]) {
                    return [-1, -1];
                }
                i++;
            }
            return [first + len - 1, second + len];
        }
        return [-1, -1];
    }

    /**
     * 934. Shortest Bridge
     * @param grid 
     */
    shortestBridge(grid: number[][]): number {
        let dfs = (x: number, y: number, grid: number[][], queue: [number, number][]): void => {
            if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] != 1) {
                return;
            }
            queue.push([x, y]);
            grid[x][y] = -1;
            dfs(x - 1, y, grid, queue);
            dfs(x + 1, y, grid, queue);
            dfs(x, y - 1, grid, queue);
            dfs(x, y + 1, grid, queue);
        };
        const n = grid.length;
        let dirs: number[][] = [[-1, 0], [1, 0], [0, 1], [0, -1]];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    let queue: [number, number][] = [];
                    dfs(i, j, grid, queue);
                    let step = 0;
                    while (queue.length > 0) {
                        let size = queue.length;
                        for (let k = 0; k < size; k++) {
                            let cell = queue.shift()!;
                            let x = cell[0], y = cell[1];
                            for (let d = 0; d < 4; d++) {
                                let nx = x + dirs[d][0];
                                let ny = y + dirs[d][1];
                                if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
                                    if (grid[nx][ny] === 0) {
                                        queue.push([nx, ny]);
                                        grid[nx][ny] = -1;
                                    } else if (grid[nx][ny] === 1) {
                                        return step;
                                    }
                                }
                            }
                        }
                        step++;
                    }
                }
            }
        }
        return 0;
    }

    /**
     * 940. Distinct Subsequences II
     * @param s 
     */
    distinctSubseqII(s: string): number {
        let mod = 1000000007;
        let alphas = new Array<number>(26).fill(0);
        let n = s.length, res = 0;
        for (let i = 0; i < n; i++) {
            let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            let prev = alphas[index];
            alphas[index] = (res + 1) % mod;
            res = ((res + alphas[index] - prev) % mod + mod) % mod;
        }
        return res;
    }

    /**
     * 942.DI String Match
     * @param s 
     */
    diStringMatch(s: string): number[] {
        let n = s.length, lo = 0, hi = n;
        let perm = [];
        for (let i = 0; i < n; ++i) {
            perm[i] = s[i] === 'I' ? lo++ : hi--;
        }
        perm.push(lo);
        return perm;
    }

    /**
     * 944.Delete Columns to Make Sorted
     * @param strs 
     */
    minDeletionSize(strs: string[]): number {
        let row = strs.length;
        let col = strs[0].length;
        let ans = 0;
        for (let j = 0; j < col; ++j) {
            for (let i = 1; i < row; ++i) {
                if (strs[i - 1][j] > strs[i][j]) {
                    ans++;
                    break;
                }
            }
        }
        return ans;
    }

    /**
     * 946.Validate Stack Sequences
     * @param pushed 
     * @param popped 
     */
    validateStackSequences(pushed: number[], popped: number[]): boolean {
        const stack = [];
        const n = pushed.length;
        for (let i = 0, j = 0; i < n; ++i) {
            stack.push(pushed[i]);
            while (stack.length && stack[stack.length - 1] === popped[j]) {
                stack.pop();
                j++;
            }
        }
        return stack.length === 0;
    }

    /**
     * 953.Verifying an Alien Dictionary
     * @param words 
     * @param order 
     */
    isAlienSorted(words: string[], order: string): boolean {
        let index = new Array<number>(26).fill(0);
        for (let i = 0; i < order.length; ++i) {
            index[order[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;
        }
        for (let i = 1; i < words.length; ++i) {
            let valid = false;
            for (let j = 0; j < words[i - 1].length && j < words[i].length; ++j) {
                let prev = index[words[i - 1][j].charCodeAt(0) - 'a'.charCodeAt(0)];
                let curr = index[words[i][j].charCodeAt(0) - 'a'.charCodeAt(0)];
                if (prev < curr) {
                    valid = true;
                    break;
                } else if (prev > curr) {
                    return false;
                }
            }
            if (!valid) {
                if (words[i - 1].length > words[i].length) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * 961.N-Repeated Element in Size 2N Array
     * @param nums 
     */
    repeatedNTimes(nums: number[]): number {
        let found = new Set<number>();
        for (const num of nums) {
            if (found.has(num)) {
                return num;
            }
            found.add(num);
        }
        return -1;
    }

    /**
     * 976.Largest Perimeter Triangle
     * @param nums 
     */
    largestPerimeter(nums: number[]): number {
        nums = nums.sort((a, b) => a - b);
        for (let i = nums.length - 1; i >= 2; --i) {
            if (nums[i - 2] + nums[i - 1] > nums[i]) {
                return nums[i - 2] + nums[i - 1] + nums[i];
            }
        }
        return 0;
    }

    /**
     * 998.Maximum Binary Tree II
     * @param root 
     * @param val 
     */
    insertIntoMaxTree(root: TreeNode | null, val: number): TreeNode | null {
        let parent = null;
        let curr = root;
        while (curr) {
            if (val > curr.val) {
                if (!parent) {
                    return new TreeNode(val, root, null);
                }
                parent.right = new TreeNode(val, curr, null);
                return root;
            } else {
                parent = curr;
                curr = curr.right!;
            }
        }
        parent!.right = new TreeNode(val);
        return root;
    }

    /**
     * 1021.Remove Outermost Parentheses
     * @param s 
     */
    removeOuterParentheses(s: string): string {
        let level = 0;
        let res = "";
        for (let i = 0; i < s.length; ++i) {
            let ch = s[i];
            if (ch === ")") {
                level--;
            }
            if (level > 0) {
                res += ch;
            }
            if (ch === "(") {
                level++;
            }
        }
        return res;
    }

    /**
     * 1022.Sum of Root To Leaf Binary Numbers
     * @param root 
     */
    sumRootToLeaf(root: TreeNode | null): number {
        let dfs = (node: TreeNode | null, val: number): number => {
            if (!node) {
                return 0;
            }
            val = (val << 1) | node?.val;
            if (!node.left && !node.right) {
                return val;
            }
            return dfs(node.left, val) + dfs(node.right, val);
        };
        return dfs(root, 0);
    }

    /**
     * 1106. Parsing A Boolean Expression
     * @param expression 
     */
    parseBoolExpr(expression: string): boolean {
        let stack: string[] = [];
        const n = expression.length;
        for (let i = 0; i < n; i++) {
            const c = expression[i];
            if (c === ',') {
                continue;
            } else if (c !== ')') {
                stack.push(c);
            } else {
                let t = 0, f = 0;
                while (stack[stack.length - 1] !== '(') {
                    const val = stack.pop();
                    if (val === 't') {
                        t++;
                    } else {
                        f++;
                    }
                }
                stack.pop();
                const op = stack.pop();
                switch (op) {
                    case '!':
                        stack.push(f === 1 ? 't' : 'f');
                        break;
                    case '&':
                        stack.push(f === 0 ? 't' : 'f');
                        break;
                    case '|':
                        stack.push(t > 0 ? 't' : 'f');
                        break;
                    default:
                }
            }
        }
        return stack.pop() === 't';
    }

    /**
     * 1175.Prime Arrangements
     * @param n 
     */
    numPrimeArrangements(n: number): number {
        const countPrime = (n: number) => {
            let primes = [];
            let isPrime = new Array<number>(n).fill(1);
            for (let i = 2; i < n; ++i) {
                if (isPrime[i]) {
                    primes.push(i);
                }
                for (let j = 0; j < primes.length && i * primes[j] < n; ++j) {
                    isPrime[i * primes[j]] = 0;
                    if (i % primes[j] === 0) {
                        break;
                    }
                }
            }
            return primes.length;
        };
        const MOD = 1000000007;

        let numberOfPrimes = countPrime(n + 1);
        let res = 1;
        let m = n - numberOfPrimes;
        while (numberOfPrimes > 0) {
            res = res % MOD;
            res *= numberOfPrimes;
            numberOfPrimes--;
        }
        while (m > 0) {
            res = res % MOD;
            res *= m;
            m--;
        }
        return res;
    }

    /**
     * 1232.Check If It Is a Straight Line
     * @param coordinates 
     */
    checkStraightLine(coordinates: number[][]): boolean {
        let dx = coordinates[0][0], dy = coordinates[0][1];
        let n = coordinates.length;
        for (let i = 0; i < n; ++i) {
            coordinates[i][0] -= dx;
            coordinates[i][1] -= dy;
        }
        let A = coordinates[1][1], B = -coordinates[1][0];
        for (let i = 2; i < n; ++i) {
            let x = coordinates[i][0], y = coordinates[i][1];
            if (A * x + B * y !== 0) {
                return false;
            }
        }
        return true;
    };

    /**
     * 1235. Maximum Profit in Job Scheduling
     * @param startTime 
     * @param endTime 
     * @param profit 
     */
    jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
        const binarySearch = (jobs: number[][], right: number, target: number): number => {
            let left = 0;
            while (left < right) {
                const mid = left + Math.floor((right - left) / 2);
                if (jobs[mid][1] > target) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            return left;
        }
        const n = startTime.length;
        let jobs = new Array<number>(n).fill(0).map((_, index) => [startTime[index], endTime[index], profit[index]]);
        jobs.sort((a, b) => a[1] - b[1]);
        let dp = new Array<number>(n + 1).fill(0);
        for (let i = 1; i <= n; i++) {
            const k = binarySearch(jobs, i - 1, jobs[i - 1][0]);
            dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2]);
        }
        return dp[n];
    }

    /**
     * 1281.Subtract the Product and Sum of Digits of an Integer
     * @param n 
     */
    subtractProductAndSum(n: number): number {
        let sum: number = 0;
        let product: number = 1;
        while (n > 0) {
            let digit: number = n % 10;
            n = Math.floor(n / 10);
            sum += digit;
            product *= digit;
        }
        return product - sum;
    }

    /**
     * 1290.Convert Binary Number in a Linked List to Integer
     * @param head 
     */
    getDecimalValue(head: ListNode | null): number {
        let curr = head;
        let ans = 0;
        while (curr) {
            ans = ans * 2 + curr.val;
            curr = curr.next;
        }
        return ans;
    }

    /**
     * 1309.Decrypt String from Alphabet to Integer Mapping
     * @param s 
     */
    freqAlphabets(s: string): string {
        let ans = "";
        let n = s.length;
        for (let i = 0; i < n; ++i) {
            if (i + 2 < n && s[i + 2] === "#") {
                ans += String.fromCharCode((s[i].charCodeAt(0) - '0'.charCodeAt(0)) * 10
                    + s[i + 1].charCodeAt(0) - '1'.charCodeAt(0) + 'a'.charCodeAt(0));
                i += 2;
            } else {
                ans += String.fromCharCode(s[i].charCodeAt(0) - '1'.charCodeAt(0) + 'a'.charCodeAt(0));
            }
        }
        return ans;
    }

    /**
     * 1356.Sort Integers by The Number of 1 Bits
     * @param arr 
     */
    sortByBits(arr: number[]): number[] {
        let bits: number[] = new Array<number>(10001).fill(0);
        for (let i = 0; i <= 10000; ++i) {
            bits[i] = bits[i >> 1] + (i & 1);
        }
        arr.sort((a, b) => {
            if (bits[a] !== bits[b]) {
                return bits[a] - bits[b];
            }
            return a - b;
        });
        return arr;
    }

    /**
     * 1403.Minimum Subsequence in Non-Increasing Order
     * @param nums 
     */
    minSubsequence(nums: number[]): number[] {
        let total = nums.reduce((prev, curr) => prev + curr, 0);
        nums.sort((a, b) => a - b);
        let ans = [];
        let curr = 0;
        for (let i = nums.length - 1; i >= 0; --i) {
            curr += nums[i];
            ans.push(nums[i]);
            if (total - curr < curr) {
                break;
            }
        }
        return ans;
    }

    /**
     * 1408.String Matching in an Array
     * @param words 
     */
    stringMatching(words: string[]): string[] {
        let res: string[] = []
        for (let i = 0; i < words.length; ++i) {
            for (let j = 0; j < words.length; ++j) {
                if (i != j && words[j].search(words[i]) !== -1) {
                    res.push(words[i]);
                    break;
                }
            }
        }
        return res;
    }

    /**
     * 1417.Reformat The String
     * @param s 
     */
    reformat(s: string): string {
        let sumDigit = 0;
        for (let i = 0; i < s.length; ++i) {
            if (this.utils.isDigit(s[i])) {
                sumDigit++;
            }
        }
        let sumAlpha = s.length - sumDigit;
        if (Math.abs(sumDigit - sumAlpha) > 1) {
            return "";
        }
        let flag = sumDigit > sumAlpha;
        const arr = [...s];
        for (let i = 0, j = 1; i < s.length; i += 2) {
            if (this.utils.isDigit(arr[i]) !== flag) {
                while (this.utils.isDigit(arr[j]) !== flag) {
                    j += 2;
                }
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        return arr.join('');
    }

    /**
     * 1441. Build an Array With Stack Operations
     * @param target 
     * @param n 
     */
    buildArray(target: number[], n: number): string[] {
        let res: string[] = [];
        let prev = 0;
        target.forEach(x => {
            for (let i = 0; i < x - prev - 1; i++) {
                res.push("Push");
                res.push("Pop");
            }
            res.push("Push");
            prev = x;
        });
        return res;
    }

    /**
     * 1450.Number of Students Doing Homework at a Given Time
     * @param startTime 
     * @param endTime 
     * @param queryTime 
     */
    busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
        let res = 0;
        for (let i = 0; i < startTime.length; ++i) {
            if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
                res++;
            }
        }
        return res;
    }

    /**
     * 1455.Check If a Word Occurs As a Prefix of Any Word in a Sentence
     * @param sentence 
     * @param searchWord 
     */
    isPrefixOfWord(sentence: string, searchWord: string): number {
        const isPrefix = (input: string, start: number, end: number, target: string): boolean => {
            for (let i = 0; i < target.length; ++i) {
                if (start + i >= end || input[start + i] != target[i]) {
                    return false;
                }
            }
            return true;
        };
        let n = sentence.length, index = 1, start = 0, end = 0;
        while (start < n) {
            while (end < n && sentence[end] != ' ') {
                end++;
            }
            if (isPrefix(sentence, start, end, searchWord)) {
                return index;
            }
            index++;
            end++;
            start = end;
        }
        return -1;
    }

    /**
     * 1460.Make Two Arrays Equal by Reversing Sub-arrays
     * @param target 
     * @param arr 
     */
    canBeEqual(target: number[], arr: number[]): boolean {
        if (target.length != arr.length) {
            return false;
        }
        target.sort();
        arr.sort();
        return target.toString() === arr.toString();
    }

    /**
     * 1464.Maximum Product of Two Elements in an Array
     * @param nums 
     */
    maxProduct(nums: number[]): number {
        let a = nums[0], b = nums[1];
        if (a < b) {
            const temp = a;
            a = b;
            b = temp;
        }
        for (let i = 2; i < nums.length; ++i) {
            if (nums[i] > a) {
                b = a;
                a = nums[i];
            } else if (nums[i] > b) {
                b = nums[i];
            }
        }
        return (a - 1) * (b - 1);
    }

    /**
     * 1470.Shuffle the Array
     * @param nums 
     * @param n 
     */
    shuffle(nums: number[], n: number): number[] {
        let res = [];
        for (let i = 0; i < n; ++i) {
            res[2 * i] = nums[i];
            res[2 * i + 1] = nums[i + n];
        }
        return res;
    }

    /**
     * 1475.Final Prices With a Special Discount in a Shop
     * @param prices 
     */
    finalPrices(prices: number[]): number[] {
        const n = prices.length;
        let res = new Array<number>(n).fill(0);
        let stack: number[] = [];
        for (let i = n - 1; i >= 0; --i) {
            while (stack.length && stack[stack.length - 1] > prices[i]) {
                stack.pop();
            }
            res[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
            stack.push(prices[i]);
        }
        return res;
    }

    /**
     * 1491.Average Salary Excluding the Minimum and Maximum Salary
     * @param salary 
     * @returns 
     */
    average(salary: number[]): number {
        let min: number = Number.MAX_VALUE;
        let max: number = Number.MIN_VALUE;
        let sum: number = 0;
        for (let item of salary) {
            sum += item;
            max = Math.max(max, item);
            min = Math.min(min, item);
        }
        return (sum - min - max) / (salary.length - 2);
    }

    /**
     * 1502.Can Make Arithmetic Progression From Sequence
     * @param arr 
     * @returns 
     */
    canMakeArithmeticProgression(arr: number[]): boolean {
        arr = arr.sort((a, b) => a - b);
        for (let i = 1; i < arr.length - 1; ++i) {
            if (arr[i] * 2 != arr[i - 1] + arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    /**
     * 1523.Count Odd Numbers in an Interval Range
     * @param low 
     * @param high 
     * @returns 
     */
    countOdds(low: number, high: number): number {
        const pre = (num: number) => {
            return (num + 1) >> 1;
        };

        return pre(high) - pre(low - 1);
    }

    /**
     * 1572.Matrix Diagonal Sum
     * @param mat 
     */
    diagonalSum(mat: number[][]): number {
        let n = mat.length, mid = Math.floor(n / 2);
        let sum = 0;
        for (let i = 0; i < n; ++i) {
            sum += mat[i][i] + mat[i][n - i - 1];
        }
        return sum - mat[mid][mid] * (n & 1);
    }

    /**
     * 1582.Special Positions in a Binary Matrix
     * @param mat 
     */
    numSpecial(mat: number[][]): number {
        let m = mat.length, n = mat[1].length;
        for (let i = 0; i < m; ++i) {
            let count = 0;
            for (let j = 0; j < n; ++j) {
                if (mat[i][j] === 1) {
                    count++;
                }
            }

            if (i === 0) {
                count--;
            }
            if (count > 0) {
                for (let j = 0; j < n; ++j) {
                    if (mat[i][j] === 1) {
                        mat[0][j] += count;
                    }
                }
            }
        }
        let sum = 0;
        for (const num of mat[0]) {
            if (num === 1) {
                sum++;
            }
        }
        return sum;
    }

    /**
     * 1588.Sum of All Odd Length Subarrays
     * @param arr 
     * @returns 
     */
    sumOddLengthSubarrays(arr: number[]): number {
        let sum = 0;
        let n = arr.length;
        for (let i = 0; i < n; ++i) {
            let leftCount = i, rightCount = n - i - 1;
            let leftOdd = Math.floor((leftCount + 1) / 2);
            let rightOdd = Math.floor((rightCount + 1) / 2);
            let leftEven = Math.floor(leftCount / 2) + 1;
            let rightEven = Math.floor(rightCount / 2) + 1;
            sum += arr[i] * (leftOdd * rightOdd + leftEven * rightEven);
        }
        return sum;
    }

    /**
     * 1592.Rearrange Spaces Between Words
     * @param text 
     */
    reorderSpaces(text: string): string {
        let n = text.length;
        let words: string[] = [];
        text.split(' ').forEach(e => {
            if (e.length > 0) {
                words.push(e);
            }
        });

        let spaceCount = n;
        for (const word of words) {
            if (word.length) {
                spaceCount -= word.length;
            }
        }

        let sb = "";
        if (words.length === 1) {
            sb += words[0];
            for (let i = 0; i < spaceCount; i++) {
                sb += " ";
            }
            return sb;
        }

        let perSpace = Math.floor(spaceCount / (words.length - 1));
        let restSpace = spaceCount % (words.length - 1);
        for (let i = 0; i < words.length; i++) {
            if (i > 0) {
                for (let j = 0; j < perSpace; j++) {
                    sb += " ";
                }
            }
            sb += words[i];
        }
        for (let i = 0; i < restSpace; i++) {
            sb += " ";
        }
        return sb;
    }

    /**
     * 1598.Crawler Log Folder
     * @param logs 
     */
    minOperations(logs: string[]): number {
        let depth = 0;
        logs.forEach(log => {
            if (log === "../") {
                if (depth > 0) {
                    depth--;
                }
            } else if (log === "./") {
                return;
            } else {
                depth++;
            }
        });
        return depth;
    }

    /**
     * 1608.Special Array With X Elements Greater Than or Equal X
     * @param nums 
     */
    specialArray(nums: number[]): number {
        let n = nums.length;
        nums.sort((a, b) => b - a);
        for (let i = 1; i <= n; ++i) {
            if (nums[i - 1] >= i && (i == n || nums[i] < i)) {
                return i;
            }
        }
        return -1;
    }

    /**
     * 1619.Mean of Array After Removing Some Elements
     * @param arr 
     */
    trimMean(arr: number[]): number {
        let n = arr.length;
        arr.sort((a, b) => a - b);
        let sum = 0;
        for (let i = n / 20; i < 19 * n / 20; i++) {
            sum += arr[i];
        }
        return sum / (n * 0.9);
    }

    /**
     * 1620. Coordinate With Maximum Network Quality
     * @param towers 
     * @param radius 
     */
    bestCoordinate(towers: number[][], radius: number): number[] {
        const getSquaredDistance = (coordinate: number[], tower: number[]): number => {
            return (tower[0] - coordinate[0]) * (tower[0] - coordinate[0]) + (tower[1] - coordinate[1]) * (tower[1] - coordinate[1]);
        };
        let xMax = Number.MIN_VALUE, yMax = -Number.MAX_VALUE;
        towers.forEach(t => {
            let x = t[0], y = t[1];
            xMax = Math.max(xMax, x);
            yMax = Math.max(yMax, y);
        });
        let cx = 0, cy = 0;
        let maxQuality = 0;
        for (let x = 0; x <= xMax; x++) {
            for (let y = 0; y <= yMax; y++) {
                const coordinate = [x, y];
                let quality = 0;
                towers.forEach(t => {
                    const squaredDistance = getSquaredDistance(coordinate, t);
                    if (squaredDistance <= radius * radius) {
                        const distance = Math.sqrt(squaredDistance);
                        quality += Math.floor(t[2] / (1 + distance));
                    }
                });
                if (quality > maxQuality) {
                    cx = x;
                    cy = y;
                    maxQuality = quality;
                }
            }
        }
        return [cx, cy];
    }

    /**
     * 1624.Largest Substring Between Two Equal Characters
     * @param s 
     */
    maxLengthBetweenEqualCharacters(s: string): number {
        let map = new Map<string, number>();
        let res = -1;
        for (let i = 0; i < s.length; i++) {
            if (!map.has(s[i])) {
                map.set(s[i], i);
            } else {
                res = Math.max(res, i - map.get(s[i])! - 1)
            }
        }
        return res;
    }

    /**
     * 1636.Sort Array by Increasing Frequency
     * @param nums 
     */
    frequencySort(nums: number[]): number[] {
        let count = new Map<number, number>();
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        nums.sort((a, b) => {
            let count1 = count.get(a), count2 = count.get(b);
            return count1 !== count2 ? count1! - count2! : b - a;
        });
        return nums;
    }

    /**
     * 1652.Defuse the Bomb
     * @param code 
     * @param k
     */
    decrypt(code: number[], k: number): number[] {
        let n = code.length;
        let res = new Array<number>(n).fill(0);
        if (k === 0) {
            return res;
        }
        let newCode = new Array<number>(n * 2).fill(0).map((_, index) => {
            return code[index % n];
        });
        code = newCode;
        let l = k > 0 ? 1 : n + k;
        let r = k > 0 ? k : n - 1;
        let w = 0;
        for (let i = l; i <= r; i++) {
            w += code[i];
        }
        for (let i = 0; i < n; i++) {
            res[i] = w;
            w -= code[l];
            w += code[r + 1];
            l++;
            r++;
        }
        return res;
    }

    /**
     * 1662. Check If Two String Arrays are Equivalent
     * @param word1 
     * @param word2 
     */
    arrayStringAreEqual(word1: string[], word2: string[]): boolean {
        let p1 = 0, p2 = 0, i = 0, j = 0;
        while (p1 < word1.length && p2 < word2.length) {
            if (word1[p1][i] !== word2[p2][j]) {
                return false;
            }
            i++;
            if (i === word1[p1].length) {
                p1++;
                i = 0;
            }
            j++;
            if (j === word2[p2].length) {
                p2++;
                j = 0;
            }
        }
        return p1 === word1.length && p2 === word2.length;
    }

    /**
     * 1668. Maximum Repeating Substring
     * @param sequence 
     * @param word 
     */
    maxRepeating(sequence: string, word: string): number {
        const n = sequence.length, m = word.length;
        if (n < m) {
            return 0;
        }
        let fail = new Array<number>(n).fill(-1);
        for (let i = 1; i < m; i++) {
            let j = fail[i - 1];
            while (j !== -1 && word[j + 1] !== word[i]) {
                j = fail[j];
            }
            if (word[j + 1] === word[i]) {
                fail[i] = j + 1;
            }
        }
        let f = new Array<number>(n).fill(0);
        let j = -1;
        for (let i = 0; i < n; i++) {
            while (j !== -1 && word[j + 1] !== sequence[i]) {
                j = fail[j];
            }
            if (word[j + 1] === sequence[i]) {
                ++j;
                if (j === m - 1) {
                    f[i] = (i >= m ? f[i - m] : 0) + 1;
                    j = fail[j];
                }
            }
        }
        return Math.max(...f);
    }

    /**
     * 1672.Richest Customer Wealth
     * @param accounts 
     */
    maximumWealth(accounts: number[][]): number {
        let maxWealth = 0;
        for (const account of accounts) {
            maxWealth = Math.max(maxWealth, account.reduce((a, b) => a + b));
        }
        return maxWealth
    }

    /**
     * 1678.Goal Parser Interpretation
     * @param command 
     */
    interpret(command: string): string {
        let n = command.length;
        let ans = "";
        for (let i = 0; i < n; ++i) {
            if (command[i] === "G") {
                ans += "G";
            } else if (command[i] === ")") {
                if (command[i - 1] === "(") {
                    ans += "o";
                } else if (command[i - 1] === "l") {
                    ans += "al"
                }
            }
        }
        return ans;
    }

    /**
     * 1684. Count the Number of Consistent Strings
     * @param allowed 
     * @param words 
     */
    countConsistentStrings(allowed: string, words: string[]): number {
        let mask = 0;
        for (let i = 0; i < allowed.length; i++) {
            const c = allowed[i];
            mask |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
        }
        let res = 0;
        words.forEach(word => {
            let mask1 = 0;
            for (let i = 0; i < word.length; i++) {
                const c = word[i];
                mask1 |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
            }
            if ((mask | mask1) === mask) {
                res++;
            }
        });
        return res;
    }

    /**
     * 1694.Reformat Phone Number
     * @param number 
     */
    reformatNumber(number: string): string {
        let digits = "";
        for (let i = 0; i < number.length; i++) {
            if (this.utils.isDigit(number[i])) {
                digits += number[i];
            }
        }
        let n = digits.length;
        let pt = 0;
        let res = "";
        while (n > 0) {
            if (n > 4) {
                res += digits.slice(pt, pt + 3) + "-";
                pt += 3;
                n -= 3;
            } else {
                if (n === 4) {
                    res += digits.slice(pt, pt + 2) + "-" + digits.slice(pt + 2, pt + 4);
                } else {
                    res += digits.slice(pt, pt + n);
                }
                break;
            }
        }
        return res;
    }

    /**
     * 1700. Number of Students Unable to Eat Lunch
     * @param students 
     * @param sandwiches 
     * @returns 
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let square = students.reduce((prev, curr) => prev + curr, 0);
        let circular = students.length - square;
        for (let i = 0; i < sandwiches.length; i++) {
            if (sandwiches[i] == 1 && square > 0) {
                square--;
            } else if (sandwiches[i] == 0 && circular > 0) {
                circular--;
            } else {
                break;
            }
        }
        return square + circular;
    }

    /**
     * 1704. Determine if String Halves Are Alike
     * @param s 
     */
    halvesAreAlike(s: string): boolean {
        const a = s.substring(0, s.length / 2);
        const b = s.substring(s.length / 2);
        const vowels = "aeiouAEIOU";
        let sum1 = 0, sum2 = 0;
        for (let i = 0; i < a.length; i++) {
            if (vowels.indexOf(a[i]) >= 0) {
                sum1++;
            }
        }
        for (let i = 0; i < b.length; i++) {
            if (vowels.indexOf(b[i]) >= 0) {
                sum2++;
            }
        }
        return sum1 === sum2;
    }

    /**
     * 1710. Maximum Units on a Truck
     * @param boxTypes 
     * @param truckSize 
     */
    maximumUnits(boxTypes: number[][], truckSize: number): number {
        boxTypes.sort((a, b) => b[1] - a[1]);
        let res = 0;
        for (const boxType of boxTypes) {
            let numberOfBoxes = boxType[0];
            let numberOfUnitsPerBox = boxType[1];
            if (numberOfBoxes < truckSize) {
                res += numberOfBoxes * numberOfUnitsPerBox;
                truckSize -= numberOfBoxes;
            } else {
                res += truckSize * numberOfUnitsPerBox;
                break;
            }
        };
        return res;
    }

    /**
     * 1732. Find the Highest Altitude
     * @param gain 
     */
    largestAltitude(gain: number[]): number {
        let res = 0, start = 0;
        gain.forEach(x => {
            start = x + start;
            res = Math.max(res, start);
        });
        return res;
    }

    /**
     * add 1742. Maximum Number of Balls in a Box
     * @param lowLimit 
     * @param highLimit 
     */
    countBalls(lowLimit: number, highLimit: number): number {
        let counter = new Map<number, number>();
        let res = 0;
        for (let i = lowLimit; i <= highLimit; i++) {
            let box = 0, x = i;
            while (x != 0) {
                box += x % 10;
                x = Math.floor(x / 10);
            }
            counter.set(box, (counter.get(box) || 0) + 1);
            res = Math.max(res, counter.get(box)!);
        }
        return res;
    }

    /**
     * 1768.Merge Strings Alternately
     * @param word1 
     * @param words 
     */
    mergeAlternately(word1: string, word2: string): string {
        let m = word1.length, n = word2.length, index = 0;
        let res: string[] = new Array<string>(m + n).fill(" ");
        for (let i = 0; i < m || i < n; ++i) {
            if (i < m) {
                res[index++] = word1[i];
            }
            if (i < n) {
                res[index++] = word2[i];
            }
        }
        return res.join("");
    }

    /**
     * 1773. Count Items Matching a Rule
     * @param items 
     * @param ruleKey 
     * @param ruleValue 
     */
    countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
        const index = { "type": 0, "color": 1, "name": 2 }[ruleKey]!;
        let res = 0;
        items.forEach(x => {
            if (x[index] === ruleValue) {
                res++;
            }
        });
        return res;
    }

    /**
     * 1779.Find Nearest Point That Has the Same X or Y Coordinate
     * @param x 
     * @param y 
     * @param points 
     * @returns 
     */
    nearestValidPoint(x: number, y: number, points: number[][]): number {
        let min = Number.MAX_VALUE;
        let ans = -1;
        for (let i = 0; i < points.length; ++i) {
            if (points[i][0] == x || points[i][1] == y) {
                let distance = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);
                if (distance < min) {
                    min = distance;
                    ans = i;
                }
            }
        }
        return ans;
    }

    /**
     * 1784.Check if Binary String Has at Most One Segment of Ones
     * @param s 
     */
    checkOnesSegment(s: string): boolean {
        return s.indexOf("01") === -1;
    }

    /**
     * 1790.Check if One String Swap Can Make Strings Equal
     * @param s1 
     * @param s2 
     * @returns 
     */
    areAlmostEqual(s1: string, s2: string): boolean {
        if (s1 === s2) {
            return true;
        }
        let s1Diff = "";
        let s2Diff = "";
        for (let i = 0; i < s1.length; ++i) {
            if (s1[i] !== s2[i]) {
                s1Diff += s1[i];
                s2Diff = s2[i] + s2Diff;
                if (s1Diff.length > 2) {
                    return false;
                }
            }
        }
        return s1Diff.length === 2 && s1Diff === s2Diff;
    }

    /**
     * 1800.Maximum Ascending Subarray Sum
     * @param nums 
     */
    maxAscendingSum(nums: number[]): number {
        let res = 0;
        let i = 0;
        while (i < nums.length) {
            let sum = nums[i++];
            while (i < nums.length && nums[i] > nums[i - 1]) {
                sum += nums[i++];
            }
            res = Math.max(res, sum);
        }
        return res;
    }

    /**
     * 1822.Sign of the Product of an Array
     * @param nums 
     */
    arraySign(nums: number[]): number {
        let sign = 1;
        for (const num of nums) {
            if (num === 0) {
                return 0;
            } else if (num < 0) {
                sign *= -1;
            }
        }
        return sign > 0 ? 1 : -1;
    }

    /**
     * 1823.Find the Winner of the Circular Game
     * @param n 
     * @param k 
     */
    findTheWinner(n: number, k: number): number {
        let winner = 1;
        for (let i = 2; i <= n; ++i) {
            winner = (k + winner - 1) % i + 1;
        }
        return winner;
    }

    /**
     * 1991.Find the Middle Index in Array
     * @param nums 
     */
    findMiddleIndex(nums: number[]): number {
        let total = nums.reduce((a, b) => a + b, 0);
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            if (2 * sum + nums[i] === total) {
                return i;
            }
            sum += nums[i];
        }
        return -1;
    }

    /**
     * 2006.Count Number of Pairs With Absolute Difference K
     * @param nums
     * @param k
     * @returns
     */
    countKDifference(nums: number[], k: number): number {
        let ans = 0, n = nums.length;
        let cnt = new Map();
        for (let i = 0; i < n; i++) {
            ans += (cnt.get(nums[i] - k) || 0) + (cnt.get(nums[i] + k) || 0);
            cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1);
        }
        return ans;
    }

    /**
     * 2011. Final Value of Variable After Performing Operations
     * @param operations 
     */
    finalValueAfterOperations(operations: string[]): number {
        return operations.reduce((prev, curr) => prev + (curr[1] === "+" ? 1 : -1), 0);
    }

    /**
     * 2016.Maximum Difference Between Increasing Elements
     * @param nums
     * @returns
     */
    maximumDifference(nums: number[]): number {
        let n = nums.length;
        let ans = -1, premin = nums[0];
        for (let i = 0; i < n; i++) {
            if (nums[i] > premin) {
                ans = Math.max(ans, nums[i] - premin);
            } else {
                premin = nums[i];
            }
        }
        return ans;
    }

    /**
     * 2044.Count Number of Maximum Bitwise-OR Subsets
     * @param nums 
     */
    countMaxOrSubsets(nums: number[]): number {
        let maxOr = 0, cnt = 0
        const dfs = (pos: number, orVal: number) => {
            if (pos === nums.length) {
                if (orVal > maxOr) {
                    maxOr = orVal;
                    cnt = 1;
                } else if (orVal === maxOr) {
                    cnt++;
                }
                return;
            }
            dfs(pos + 1, orVal | nums[pos]);
            dfs(pos + 1, orVal);
        };
        dfs(0, 0);
        return cnt;
    }

    /**
     * 2055.Plates Between Candles
     * @param s 
     * @param queries 
     * @returns 
     */
    platesBetweenCandles(s: string, queries: number[][]): number[] {
        let n = s.length;
        let preSum = new Array(n).fill(0);
        for (let i = 0, sum = 0; i < n; i++) {
            if (s[i] === "*") {
                sum++;
            }
            preSum[i] = sum;
        }
        let left = new Array(n).fill(0);
        for (let i = 0, l = -1; i < n; i++) {
            if (s[i] === "|") {
                l = i;
            }
            left[i] = l;
        }
        let right = new Array(n).fill(0);
        for (let i = n - 1, r = -1; i >= 0; i--) {
            if (s[i] === "|") {
                r = i;
            }
            right[i] = r;
        }
        let ans = new Array(queries.length).fill(0);
        for (let i = 0; i < queries.length; i++) {
            let query = queries[i];
            let x = right[query[0]], y = left[query[1]];
            ans[i] = x === -1 || y === -1 || x >= y ? 0 : preSum[y] - preSum[x];

        }
        return ans;
    }

    /**
     * 6078.Rearrange Characters to Make Target String
     * @param s 
     * @param target 
     */
    rearrangeCharacters(s: string, target: string): number {
        let sMap = new Map<string, number>();
        let targetMap = new Map<string, number>();

        for (const item of s) {
            if (sMap.has(item)) {
                let value = sMap.get(item);
                if (value) {
                    sMap.set(item, value + 1);
                }
            } else {
                sMap.set(item, 1);
            }
        }

        for (const item of target) {
            if (targetMap.has(item)) {
                let value = targetMap.get(item);
                if (value) {
                    targetMap.set(item, value + 1);
                }
            } else {
                targetMap.set(item, 1);
            }
        }
        let ans = Number.MAX_VALUE;
        for (const item of target) {
            let sValue = sMap.get(item);
            if (!sValue) {
                sValue = 0;
            }
            let targetValue = targetMap.get(item);
            if (targetValue) {
                ans = Math.min(ans, Math.floor(sValue / targetValue));
            }
        }
        return ans;
    }
}
