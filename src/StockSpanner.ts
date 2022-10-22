export class StockSpanner {
    private stack: number[][];
    private index: number;
    constructor() {
        this.stack = [];
        this.stack.push([-1, Number.MAX_VALUE]);
        this.index = -1;
    }

    next(price: number): number {
        this.index++;
        while (price >= this.stack[this.stack.length - 1][1]) {
            this.stack.pop();
        }
        let res = this.index - this.stack[this.stack.length - 1][0];
        this.stack.push([this.index, price]);
        return res;
    }
}