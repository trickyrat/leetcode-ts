export class InterviewSolution {
    /**
     * 面试题 01.09. String Rotation LCCI
     * @param s1 
     * @param s2 
     * @returns 
     */
    is_flipped_string(s1: string, s2: string): boolean {
        return s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1;
    }
}