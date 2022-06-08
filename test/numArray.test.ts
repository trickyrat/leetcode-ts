import { NumArray } from "../src/NumArray";

let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

test("NumArrayTest", () => {
  expect(numArray.sumRange(0, 2)).toEqual(1);
  expect(numArray.sumRange(2, 5)).toEqual(-1);
  expect(numArray.sumRange(0, 5)).toEqual(-3);
})