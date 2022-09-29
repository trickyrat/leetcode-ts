import { InterviewSolution } from "../src/InterviewSolution";

let solution = new InterviewSolution;

test("SetZeroesTest", () => {
    let matrix1 = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ];
    let matrix2 = [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
    ];
    solution.setZeroes(matrix1);
    solution.setZeroes(matrix2);
    expect(matrix1).toEqual([
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]
    ]);
    expect(matrix2).toEqual([
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0]
    ]);
})

test("IsFlippedStringTest", () => {
    expect(solution.isFlippedString("waterbottle", "erbottlewat")).toEqual(true);
    expect(solution.isFlippedString("aa", "aba")).toEqual(false);
})