import { NumArray } from "../src/NumArray";

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

test.each([
  [0, 2, 1],
  [2, 5, -1],
  [0, 5, -3]
])("NumArray.sumRange(%i, %i)", (left: number, right: number, expected: number) => {
  expect(numArray.sumRange(left, right)).toEqual(expected);
})