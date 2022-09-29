export class InterviewSolution {

    /**
     * 面试题 01.08. Zero Matrix LCCI
     * @param matrix 
     */
    setZeroes(matrix: number[][]): void {
        let col0 = 1, rows = matrix.length, cols = matrix[0].length;
        // top-down
        for (let i = 0; i < rows; i++) {
            // first column
            if (matrix[i][0] == 0) col0 = 0;
            for (let j = 1; j < cols; j++) {
                // if the current cell is "0" set i row and j col as "0"
                if (matrix[i][j] == 0)
                    matrix[i][0] = matrix[0][j] = 0;
            }
        }
        // bottom-up
        for (let i = rows - 1; i >= 0; i--) {
            for (let j = cols - 1; j >= 1; j--) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0)
                    matrix[i][j] = 0;
            }
            if (col0 == 0) matrix[i][0] = 0;
        }
    }

    /**
     * 面试题 01.09. String Rotation LCCI
     * @param s1 
     * @param s2 
     * @returns 
     */
    isFlippedString(s1: string, s2: string): boolean {
        return s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1;
    }
}