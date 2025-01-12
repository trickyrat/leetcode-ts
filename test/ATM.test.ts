import { ATM } from "../src/ATM";
import { expect, test } from 'vitest'

test("ATMTest", () => {
    const atm = new ATM();
    atm.deposit([0, 0, 1, 2, 1]);
    expect(atm.withdraw(600)).toEqual([0, 0, 1, 0, 1]);
    atm.deposit([0, 1, 0, 1, 1]);
    expect(atm.withdraw(600)).toEqual([-1]);
    expect(atm.withdraw(550)).toEqual([0, 1, 0, 0, 1]);
})