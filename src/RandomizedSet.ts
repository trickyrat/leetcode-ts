export class RandomizedSet {
  nums: number[];
  indices: Map<number, number>;

  constructor() {
    this.nums = [];
    this.indices = new Map<number, number>();
  }

  insert(val: number): boolean {
    if (this.indices.has(val)) {
      return false;
    }
    let index = this.nums.length;
    this.nums.push(val);
    this.indices.set(val, index);
    return true;
  }

  remove(val: number): boolean {
    if (!this.indices.has(val)) {
      return false;
    }
    let index = this.indices.get(val);
    this.nums[index!] = this.nums[this.nums.length - 1];
    this.indices.set(this.nums[index!], index!);
    this.nums.pop();
    this.indices.delete(val);
    return true;
  }

  getRandom(): number {
    let randomIndex = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomIndex];
  }
}