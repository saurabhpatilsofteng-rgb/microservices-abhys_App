const matrixQuestions = [

    // =========================================================
    // 121. Print Matrix
    // =========================================================

    {
        id: 121,
        module: "matrix",
        title: "Print Matrix",
        difficulty: "Easy",

        description:
            "Print all elements of a 2D matrix row by row.",

        inputArray: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],

        example:
            "Input:\n1 2 3\n4 5 6\n7 8 9\n\nOutput:\n1 2 3\n4 5 6\n7 8 9",

        explanation:
            "Use two nested loops. The outer loop traverses each row and the inner loop traverses every element in that row.",

        javaCode: `static void printMatrix(int[][] matrix) {

    for (int i = 0;
         i < matrix.length;
         i++) {

        for (int j = 0;
             j < matrix[i].length;
             j++) {

            System.out.print(
                    matrix[i][j] + " "
            );
        }

        System.out.println();
    }
}`,

        pseudoCode: `PRINT_MATRIX(matrix)

for each row i

    for each column j

        print matrix[i][j]

    move to next line`,

        timeComplexity: "O(rows × columns)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 122. Print Matrix Row-wise
    // =========================================================

    {
        id: 122,
        module: "matrix",
        title: "Print Matrix Row-wise",
        difficulty: "Easy",

        description:
            "Traverse a matrix row by row and print all elements continuously.",

        inputArray: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],

        example:
            "Input: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: 1 2 3 4 5 6 7 8 9",

        explanation:
            "The outer loop processes rows from top to bottom, while the inner loop processes each column from left to right.",

        javaCode: `static void printRowWise(
        int[][] matrix) {

    for (int i = 0;
         i < matrix.length;
         i++) {

        for (int j = 0;
             j < matrix[i].length;
             j++) {

            System.out.print(
                    matrix[i][j] + " "
            );
        }
    }

    System.out.println();
}`,

        pseudoCode: `PRINT_ROW_WISE(matrix)

for i = 0 to rows - 1

    for j = 0 to columns - 1

        print matrix[i][j]`,

        timeComplexity: "O(rows × columns)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 123. Print Matrix Column-wise
    // =========================================================

    {
        id: 123,
        module: "matrix",
        title: "Print Matrix Column-wise",
        difficulty: "Easy",

        description:
            "Traverse and print all elements of a matrix column by column.",

        inputArray: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],

        example:
            "Input: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: 1 4 7 2 5 8 3 6 9",

        explanation:
            "To traverse column-wise, the outer loop iterates over columns and the inner loop iterates over rows.",

        javaCode: `static void printColumnWise(
        int[][] matrix) {

    int rows = matrix.length;
    int columns = matrix[0].length;

    for (int j = 0;
         j < columns;
         j++) {

        for (int i = 0;
             i < rows;
             i++) {

            System.out.print(
                    matrix[i][j] + " "
            );
        }
    }

    System.out.println();
}`,

        pseudoCode: `PRINT_COLUMN_WISE(matrix)

rows = number of rows
columns = number of columns

for j = 0 to columns - 1

    for i = 0 to rows - 1

        print matrix[i][j]`,

        timeComplexity: "O(rows × columns)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 124. Find Sum of All Matrix Elements
    // =========================================================

    {
        id: 124,
        module: "matrix",
        title: "Find Sum of All Matrix Elements",
        difficulty: "Easy",

        description:
            "Calculate the sum of all elements present in a 2D matrix.",

        inputArray: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],

        example:
            "Input: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: 45",

        explanation:
            "Traverse every element of the matrix and add it to a running sum.",

        javaCode: `static int matrixSum(
        int[][] matrix) {

    int sum = 0;

    for (int i = 0;
         i < matrix.length;
         i++) {

        for (int j = 0;
             j < matrix[i].length;
             j++) {

            sum += matrix[i][j];
        }
    }

    return sum;
}`,

        pseudoCode: `MATRIX_SUM(matrix)

sum = 0

for each row

    for each element

        sum = sum + element

return sum`,

        timeComplexity: "O(rows × columns)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 125. Find Largest Element in Matrix
    // =========================================================

    {
        id: 125,
        module: "matrix",
        title: "Find Largest Element in Matrix",
        difficulty: "Easy",

        description:
            "Find the largest element present anywhere in a 2D matrix.",

        inputArray: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],

        example:
            "Input: [[1,2,3],[4,5,6],[7,8,9]]\nOutput: 9",

        explanation:
            "Initialize the largest value with Integer.MIN_VALUE and compare every matrix element against it. Whenever a larger element is found, update the largest value.",

        javaCode: `static int findLargest(
        int[][] matrix) {

    int largest =
            Integer.MIN_VALUE;

    for (int i = 0;
         i < matrix.length;
         i++) {

        for (int j = 0;
             j < matrix[i].length;
             j++) {

            if (matrix[i][j] > largest) {

                largest =
                        matrix[i][j];
            }
        }
    }

    return largest;
}`,

        pseudoCode: `FIND_LARGEST(matrix)

largest = MIN_VALUE

for each element

    if element > largest

        largest = element

return largest`,

        timeComplexity: "O(rows × columns)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 126. Transpose a Matrix
    // =========================================================

    {
        id: 126,
        module: "matrix",
        title: "Transpose a Matrix",
        difficulty: "Easy",

        description:
            "Create the transpose of a matrix by converting rows into columns and columns into rows.",

        inputArray: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],

        example:
            "Input:\n1 2 3\n4 5 6\n7 8 9\n\nOutput:\n1 4 7\n2 5 8\n3 6 9",

        explanation:
            "For every element matrix[i][j], place it at result[j][i]. The result matrix therefore has dimensions columns × rows.",

        javaCode: `static int[][] transpose(
        int[][] matrix) {

    int rows = matrix.length;
    int columns = matrix[0].length;

    int[][] result =
            new int[columns][rows];

    for (int i = 0;
         i < rows;
         i++) {

        for (int j = 0;
             j < columns;
             j++) {

            result[j][i] =
                    matrix[i][j];
        }
    }

    return result;
}`,

        pseudoCode: `TRANSPOSE(matrix)

rows = number of rows
columns = number of columns

create result[columns][rows]

for i = 0 to rows - 1

    for j = 0 to columns - 1

        result[j][i] = matrix[i][j]

return result`,

        timeComplexity: "O(rows × columns)",

        spaceComplexity: "O(rows × columns)"
    },


    // =========================================================
    // 127. Rotate Matrix by 90 Degrees Clockwise
    // =========================================================

    {
        id: 127,
        module: "matrix",
        title: "Rotate Matrix by 90 Degrees Clockwise",
        difficulty: "Medium",

        description:
            "Rotate a square matrix by 90 degrees clockwise using transpose followed by reversing every row.",

        inputArray: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],

        example:
            "Input:\n1 2 3\n4 5 6\n7 8 9\n\nOutput:\n7 4 1\n8 5 2\n9 6 3",

        explanation:
            "First transpose the matrix by swapping matrix[i][j] with matrix[j][i]. Then reverse every row. Together these two operations rotate the square matrix 90 degrees clockwise.",

        javaCode: `static void rotate90Degrees(
        int[][] matrix) {

    int n = matrix.length;

    // Step 1: Transpose
    for (int i = 0;
         i < n;
         i++) {

        for (int j = i + 1;
             j < n;
             j++) {

            int temp =
                    matrix[i][j];

            matrix[i][j] =
                    matrix[j][i];

            matrix[j][i] =
                    temp;
        }
    }

    // Step 2: Reverse every row
    for (int i = 0;
         i < n;
         i++) {

        int left = 0;
        int right = n - 1;

        while (left < right) {

            int temp =
                    matrix[i][left];

            matrix[i][left] =
                    matrix[i][right];

            matrix[i][right] =
                    temp;

            left++;
            right--;
        }
    }
}`,

        pseudoCode: `ROTATE_90_CLOCKWISE(matrix)

transpose matrix

for each row

    reverse the row

return rotated matrix`,

        timeComplexity: "O(n²)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 128. Search Element in Matrix
    // =========================================================

    {
        id: 128,
        module: "matrix",
        title: "Search Element in Matrix",
        difficulty: "Easy",

        description:
            "Search for a target element in a 2D matrix using a linear traversal.",

        inputArray: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],

        example:
            "Input: target = 5\nOutput: true",

        explanation:
            "Traverse every row and every column. If any element equals the target, immediately return true. If the complete matrix is traversed without finding the target, return false.",

        javaCode: `static boolean searchMatrix(
        int[][] matrix,
        int target) {

    for (int i = 0;
         i < matrix.length;
         i++) {

        for (int j = 0;
             j < matrix[i].length;
             j++) {

            if (matrix[i][j] == target) {
                return true;
            }
        }
    }

    return false;
}`,

        pseudoCode: `SEARCH_MATRIX(matrix, target)

for each row

    for each element

        if element == target

            return true

return false`,

        timeComplexity: "O(rows × columns)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 129. Spiral Traversal of Matrix
    // =========================================================

    {
        id: 129,
        module: "matrix",
        title: "Spiral Traversal of Matrix",
        difficulty: "Medium",

        description:
            "Traverse all elements of a matrix in spiral order, moving from left to right, top to bottom, right to left, and bottom to top.",

        inputArray: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],

        example:
            "Input:\n1 2 3\n4 5 6\n7 8 9\n\nOutput: 1 2 3 6 9 8 7 4 5",

        explanation:
            "Maintain four boundaries: top, bottom, left and right. Process the top row, right column, bottom row and left column in order. After each traversal, move the corresponding boundary inward.",

        javaCode: `static void spiralTraversal(
        int[][] matrix) {

    int top = 0;
    int bottom = matrix.length - 1;

    int left = 0;
    int right = matrix[0].length - 1;

    while (top <= bottom
            && left <= right) {

        // Left to Right
        for (int j = left;
             j <= right;
             j++) {

            System.out.print(
                    matrix[top][j] + " "
            );
        }

        top++;

        // Top to Bottom
        for (int i = top;
             i <= bottom;
             i++) {

            System.out.print(
                    matrix[i][right] + " "
            );
        }

        right--;

        // Right to Left
        if (top <= bottom) {

            for (int j = right;
                 j >= left;
                 j--) {

                System.out.print(
                        matrix[bottom][j] + " "
                );
            }

            bottom--;
        }

        // Bottom to Top
        if (left <= right) {

            for (int i = bottom;
                 i >= top;
                 i--) {

                System.out.print(
                        matrix[i][left] + " "
                );
            }

            left++;
        }
    }

    System.out.println();
}`,

        pseudoCode: `SPIRAL_TRAVERSAL(matrix)

top = 0
bottom = rows - 1
left = 0
right = columns - 1

while top <= bottom AND left <= right

    traverse top row from left to right
    top++

    traverse right column from top to bottom
    right--

    if top <= bottom

        traverse bottom row from right to left
        bottom--

    if left <= right

        traverse left column from bottom to top
        left++`,

        timeComplexity: "O(rows × columns)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 130. Set Matrix Zeroes
    // =========================================================

    {
        id: 130,
        module: "matrix",
        title: "Set Matrix Zeroes",
        difficulty: "Medium",

        description:
            "If an element in a matrix is 0, set its entire row and column to 0 while using the first row and first column as marker storage.",

        inputArray: [
            [1, 2, 3],
            [4, 0, 6],
            [7, 8, 9]
        ],

        example:
            "Input:\n1 2 3\n4 0 6\n7 8 9\n\nOutput:\n1 0 3\n0 0 0\n7 0 9",

        explanation:
            "The algorithm first records whether the first row or first column originally contains zero. Then it uses the first cell of each row and column as markers. Marked rows and columns are converted to zero, and finally the first row and first column are handled separately.",

        javaCode: `static void setMatrixZeroes(
        int[][] matrix) {

    int rows = matrix.length;
    int columns = matrix[0].length;

    boolean firstRowZero = false;
    boolean firstColumnZero = false;

    // Check first row
    for (int j = 0;
         j < columns;
         j++) {

        if (matrix[0][j] == 0) {

            firstRowZero = true;
            break;
        }
    }

    // Check first column
    for (int i = 0;
         i < rows;
         i++) {

        if (matrix[i][0] == 0) {

            firstColumnZero = true;
            break;
        }
    }

    // Mark rows and columns
    for (int i = 1;
         i < rows;
         i++) {

        for (int j = 1;
             j < columns;
             j++) {

            if (matrix[i][j] == 0) {

                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set rows to zero
    for (int i = 1;
         i < rows;
         i++) {

        if (matrix[i][0] == 0) {

            for (int j = 1;
                 j < columns;
                 j++) {

                matrix[i][j] = 0;
            }
        }
    }

    // Set columns to zero
    for (int j = 1;
         j < columns;
         j++) {

        if (matrix[0][j] == 0) {

            for (int i = 1;
                 i < rows;
                 i++) {

                matrix[i][j] = 0;
            }
        }
    }

    // First row
    if (firstRowZero) {

        for (int j = 0;
             j < columns;
             j++) {

            matrix[0][j] = 0;
        }
    }

    // First column
    if (firstColumnZero) {

        for (int i = 0;
             i < rows;
             i++) {

            matrix[i][0] = 0;
        }
    }
}`,

        pseudoCode: `SET_MATRIX_ZEROES(matrix)

check whether first row contains zero
check whether first column contains zero

for every cell except first row and first column

    if cell == 0

        mark its row using first column
        mark its column using first row

for each marked row

    set row elements to zero

for each marked column

    set column elements to zero

if first row originally had zero

    set first row to zero

if first column originally had zero

    set first column to zero`,

        timeComplexity: "O(rows × columns)",

        spaceComplexity: "O(1)"
    }
];