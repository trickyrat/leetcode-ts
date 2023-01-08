import { StockSpanner } from "../src/StockSpanner";

const stockSpanner = new StockSpanner();

test.each([
    [100, 1],
    [80, 1],
    [60, 1],
    [70, 2],
    [60, 1],
    [75, 4],
    [85, 6],
])("StockSpanner.next(%i)", (price: number, expected: number) => {
    expect(stockSpanner.next(price)).toEqual(expected);
});