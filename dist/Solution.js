"use strict";
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
class Solution {
    twoSum(nums, target) {
        let res = [0, 0];
        let dic = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (dic.has(target - nums[i])) {
                res[0] = dic.get(target - nums[i]);
                res[1] = i;
                return res;
            }
            else {
                dic.set(nums[i], i);
            }
        }
        return [];
    }
    addTwoNumbers(l1, l2) {
        let dummyHead = new ListNode();
        let carry = 0;
        let curr = dummyHead;
        while (l1 || l2) {
            let sum = 0;
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
            curr = curr.next;
            carry = Math.floor(sum / 10);
        }
        if (carry != 0) {
            curr.next = new ListNode(carry);
        }
        return dummyHead.next;
    }
    longestSubstringWithoutRepeating(s) {
        let len = s.length, ans = 0;
        let index = new Array(128).fill(0);
        for (let i = 0, j = 0; j < len; j++) {
            i = Math.max(index[s[j].charCodeAt(0)], i);
            ans = Math.max(ans, j - i + 1);
            index[s[j].charCodeAt(0)] = j + 1;
        }
        return ans;
    }
}
let solution = new Solution();
let s = "abcabcbb";
console.log(solution.longestSubstringWithoutRepeating(s));
