import { InterviewSolution } from "../src/InterviewSolution";

let solution = new InterviewSolution;

test("IsFlippedStringTest", () => {
    expect(solution.is_flipped_string("waterbottle", "erbottlewat")).toEqual(true);
    expect(solution.is_flipped_string("aa", "aba")).toEqual(false);
})