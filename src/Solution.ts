import { ListNode } from "./ListNode";
import { TreeNode } from "./TreeNode";
import { Node } from "./Node";
import { Trie } from "./Trie";

export class Solution {
    /**
     * 1.两数之和
     * @param nums 输入数组
     * @param target 两数之和
     * @returns 包含索引的数组
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
     * 2.两数相加
     * @param l1 链表头节点
     * @param l2 链表头节点
     * @returns 相加后链表
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
     * 3.无重复字符的最长子串
     * @param s 输入字符串
     * @returns 最长字串的长度
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
     * 6.Z字形转换
     * @param s 输入字符串
     * @param numRows 输入行数
     * @returns 转换后的字符
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
     * 7.整数反转
     * @param x 输入整数
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
     * 73.矩阵置零
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
     * 113.路径总和II
     * @param root 输入根节点
     * @param targetSum 目标值
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
     * 172.阶乘后的零
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
     * 258.各位相加
     * @param num 
     * @returns 
     */
    addDigits(num: number): number {
        return (num - 1) % 9 + 1;
    }

    /**
     * 357. 统计各位数字都不同的数字个数
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
     * 498.对角线遍历
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
     * 504.七进制数
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
     * 521.最长特殊序列
     * @param a 
     * @param b 
     * @returns 
     */
    findLUSLength(a: string, b: string): number {
        return a === b ? -1 : Math.max(a.length, b.length);
    }

    /**
     * 553.最优除法
     * @param nums 输入数组
     * @returns 结果字符串
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
     * 589.N叉树的前序遍历
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
     * 590.N叉树的后序遍历
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
     * 682.棒球比赛
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
     * 720. 词典中最长的单词
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
     * 728.自除数
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
     * 744.寻找比目标字母大的最小字母
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
     * 762.二进制表示中质数个计算置位
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
     * 804.唯一摩尔斯密码词
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
     * 806. 写字符串需要的行数
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
<<<<<<< HEAD
     * 819. 最常见的单词
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
=======
     * 1672. 最富有客户的资产总量
     * @param accounts 
     */
    maximumWealth(accounts: number[][]): number {
        let maxWealth = 0;
        for (const account of accounts) {
            maxWealth = Math.max(maxWealth, account.reduce((a, b) => a + b));
        }
        return maxWealth
>>>>>>> cc3d68a7f8a90d51c274d5e1eea4bf80863633cc
    }

    /**
     * 1991.找到数组的中间位置
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
     * 2006.差值的绝对值为k数对数目
     * @param nums 输入数组
     * @param k 差值
     * @returns 数对数目
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
     * 2016.增量元素之间的最大值
     * @param nums 输入元素
     * @returns 最大值
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
     * 2044.统计按位或能得到最大值的子集数目
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
     * 2055.蜡烛之间的盘子
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
}
