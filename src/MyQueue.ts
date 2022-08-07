export class MyQueue {
  private inStack: number[];
  private outStack: number[];
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    if (!this.outStack.length) {
      this.in2out();
    }
    return this.outStack.pop() as number;
  }

  peek(): number {
    if (!this.outStack.length) {
      this.in2out();
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return this.outStack.length === 0 && this.inStack.length === 0;
  }

  private in2out() {
    while (this.inStack.length) {
      let val = this.inStack.pop() as number;
      this.outStack.push(val);
    }
  }
}
