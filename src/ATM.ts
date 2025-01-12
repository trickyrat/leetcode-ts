export class ATM {
    private count: number[];
    private value: number[];
    constructor() {
        this.count = [0, 0, 0, 0, 0];
        this.value = [20, 50, 100, 200, 500];
    }

    deposit(banknotesCount: number[]): void {
        for (let i = 0; i < 5; i++) {
            this.count[i] += banknotesCount[i];
        }
    }

    withdraw(amount: number): number[] {
        let res = new Array(5).fill(0);
        for (let i = 4; i >= 0; i--) {
            res[i] = Math.min(this.count[i], Math.floor(amount / this.value[i]));
            amount -= res[i] * this.value[i];
        }

        if (amount > 0) {
            return [-1];
        } else {
            for (let i = 0; i < 5; i++) {
                this.count[i] -= res[i];
            }
            return res;
        }
    }
}