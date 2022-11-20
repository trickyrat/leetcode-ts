import { RecentCounter } from "../src/RecentCounter"

const recentCounter = new RecentCounter();

test.each([
  [1, 1], [100, 2], [3001, 3], [3002, 3]
])("RecentCounter.ping()", (t: number, expected: number) => {
  expect(recentCounter.ping(t)).toEqual(expected);
})