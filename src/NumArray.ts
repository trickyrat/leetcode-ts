export class NumArray {
  sums: number[];
  constructor(nums: number[]) {
    let n = nums.length;
    this.sums = new Array<number>(n + 1).fill(0);
    for (let i = 0; i < n; ++i) {
      this.sums[i + 1] = this.sums[i] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.sums[right + 1] - this.sums[left];
  }
}