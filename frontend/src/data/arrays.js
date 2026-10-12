
export const arrayQuestions = [
    {
        id: 1,
        module: "arrays",
        title: "Find Largest and Smallest Element",
        difficulty: "Easy",

        description:
            "Find the largest and smallest elements in an integer array.",

        inputArray: [10, 5, 20, 8, 15],

        example: {
            input: "[10, 5, 20, 8, 15]",
            output: "Largest: 20, Smallest: 5"
        },

        explanation: `Start by assuming the first element is both the largest and smallest.

Traverse the complete array.

If the current element is greater than largest, update largest.

If the current element is smaller than smallest, update smallest.

After checking all elements, we have both values.`,

        javaCode: `import java.util.*;

public class Main {

    static void findLargestSmallest(int[] arr) {

        int largest = arr[0];
        int smallest = arr[0];

        for (int num : arr) {

            if (num > largest) {
                largest = num;
            }

            if (num < smallest) {
                smallest = num;
            }
        }

        System.out.println("Largest: " + largest);
        System.out.println("Smallest: " + smallest);
    }

    public static void main(String[] args) {

        int[] arr = {10, 5, 20, 8, 15};

        findLargestSmallest(arr);
    }
}`,

        pseudoCode: `START

largest = array[0]
smallest = array[0]

FOR each element in array

    IF element > largest
        largest = element

    IF element < smallest
        smallest = element

PRINT largest
PRINT smallest

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    {
        id: 2,
        module: "arrays",
        title: "Find Second Largest Element",
        difficulty: "Easy",

        description:
            "Find the second-largest distinct element in an integer array.",

        inputArray: [10, 5, 20, 8, 15],

        example: {
            input: "[10, 5, 20, 8, 15]",
            output: "15"
        },

        explanation: `Maintain two variables: largest and secondLargest.

When a new largest element is found, the previous largest becomes secondLargest.

Otherwise, if the current element is greater than secondLargest and different from largest, update secondLargest.`,

        javaCode: `public class Main {

    static void findSecondLargest(int[] arr) {

        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int num : arr) {

            if (num > largest) {
                secondLargest = largest;
                largest = num;

            } else if (
                num > secondLargest &&
                num != largest
            ) {
                secondLargest = num;
            }
        }

        System.out.println("Second Largest: " + secondLargest);
    }

    public static void main(String[] args) {

        int[] arr = {10, 5, 20, 8, 15};

        findSecondLargest(arr);
    }
}`,

        pseudoCode: `START

largest = -infinity
secondLargest = -infinity

FOR each element

    IF element > largest

        secondLargest = largest
        largest = element

    ELSE IF element > secondLargest
             AND element != largest

        secondLargest = element

PRINT secondLargest

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    {
        id: 3,
        module: "arrays",
        title: "Reverse an Array",
        difficulty: "Easy",

        description:
            "Reverse the elements of an array without using another array.",

        inputArray: [10, 20, 30, 40, 50],

        example: {
            input: "[10, 20, 30, 40, 50]",
            output: "[50, 40, 30, 20, 10]"
        },

        explanation: `Use two pointers.

The left pointer starts at index 0.

The right pointer starts at the last index.

Swap the values at left and right.

Move left forward and right backward.

Continue until both pointers meet.`,

        javaCode: `import java.util.*;

public class Main {

    static void reverseArray(int[] arr) {

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {

            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }

        System.out.println(
            "Reversed Array: " +
            Arrays.toString(arr)
        );
    }

    public static void main(String[] args) {

        int[] arr = {10, 20, 30, 40, 50};

        reverseArray(arr);
    }
}`,

        pseudoCode: `START

left = 0
right = array.length - 1

WHILE left < right

    SWAP array[left] and array[right]

    left = left + 1
    right = right - 1

PRINT array

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    {
        id: 4,
        module: "arrays",
        title: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",

        description:
            "Remove duplicate elements from a sorted array using the two-pointer technique.",

        inputArray: [1, 1, 2, 2, 3, 3, 4, 5, 5],

        example: {
            input: "[1, 1, 2, 2, 3, 3, 4, 5, 5]",
            output: "[1, 2, 3, 4, 5]"
        },

        explanation: `This algorithm works on a sorted array.

Keep pointer j at the position of the last unique element.

Traverse the array using i.

Whenever arr[i] is different from arr[j], move j forward and store arr[i].

At the end, indexes 0 through j contain the unique elements.`,

        javaCode: `import java.util.*;

public class Main {

    static void removeDuplicates(int[] arr) {

        int j = 0;

        for (int i = 1; i < arr.length; i++) {

            if (arr[i] != arr[j]) {

                j++;
                arr[j] = arr[i];
            }
        }

        System.out.print("Unique elements: ");

        for (int i = 0; i <= j; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static void main(String[] args) {

        int[] arr = {1, 1, 2, 2, 3, 3, 4, 5, 5};

        removeDuplicates(arr);
    }
}`,

        pseudoCode: `START

j = 0

FOR i = 1 TO array.length - 1

    IF array[i] != array[j]

        j = j + 1
        array[j] = array[i]

PRINT elements from index 0 to j

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    {
        id: 5,
        module: "arrays",
        title: "Find Missing Number from 1 to N",
        difficulty: "Easy",

        description:
            "Find the missing number from a sequence containing numbers from 1 to n.",

        inputArray: [1, 2, 3, 5, 6],

        n: 6,

        example: {
            input: "[1, 2, 3, 5, 6], n = 6",
            output: "4"
        },

        explanation: `The sum of numbers from 1 to n is:

n * (n + 1) / 2

Calculate the expected sum.

Then calculate the actual sum.

The difference between expected sum and actual sum is the missing number.`,

        javaCode: `public class Main {

    static void findMissingNumber(int[] arr, int n) {

        int expectedSum = n * (n + 1) / 2;

        int actualSum = 0;

        for (int num : arr) {
            actualSum += num;
        }

        int missing = expectedSum - actualSum;

        System.out.println("Missing Number: " + missing);
    }

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 5, 6};

        findMissingNumber(arr, 6);
    }
}`,

        pseudoCode: `START

expectedSum = n * (n + 1) / 2

actualSum = 0

FOR each element

    actualSum = actualSum + element

missing = expectedSum - actualSum

PRINT missing

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    {
        id: 6,
        module: "arrays",
        title: "Find Duplicate Elements",
        difficulty: "Medium",

        description:
            "Find elements that occur more than once and display their frequency.",

        inputArray: [10, 20, 30, 20, 40, 10, 50],

        example: {
            input: "[10, 20, 30, 20, 40, 10, 50]",
            output: "10 -> 2 times, 20 -> 2 times"
        },

        explanation: `For every element, check whether it was already processed.

If it was already processed, skip it.

Otherwise count how many times the element appears.

If the count is greater than one, the element is a duplicate.`,

        javaCode: `public class Main {

    static void findDuplicates(int[] arr) {

        for (int i = 0; i < arr.length; i++) {

            boolean alreadyPrinted = false;

            for (int k = 0; k < i; k++) {

                if (arr[i] == arr[k]) {
                    alreadyPrinted = true;
                    break;
                }
            }

            if (alreadyPrinted) {
                continue;
            }

            int count = 1;

            for (int j = i + 1; j < arr.length; j++) {

                if (arr[i] == arr[j]) {
                    count++;
                }
            }

            if (count > 1) {
                System.out.println(
                    arr[i] + " -> " + count + " times"
                );
            }
        }
    }

    public static void main(String[] args) {

        int[] arr = {
            10, 20, 30, 20, 40, 10, 50
        };

        findDuplicates(arr);
    }
}`,

        pseudoCode: `START

FOR every element

    IF element was already processed
        CONTINUE

    count = number of occurrences

    IF count > 1
        PRINT element and count

END`,

        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    },

    {
        id: 7,
        module: "arrays",
        title: "Maximum Subarray Sum - Kadane's Algorithm",
        difficulty: "Medium",

        description:
            "Find the maximum possible sum of a contiguous subarray.",

        inputArray: [-2, 1, -3, 4, -1, 2, 1, -5, 4],

        example: {
            input: "[-2, 1, -3, 4, -1, 2, 1, -5, 4]",
            output: "6"
        },

        explanation: `Kadane's Algorithm maintains currentSum and maxSum.

For every element, choose between starting a new subarray or extending the current subarray.

Then update maxSum.

For this example, the maximum subarray is [4, -1, 2, 1].

Its sum is 6.`,

        javaCode: `public class Main {

    static void kadaneAlgorithm(int[] arr) {

        int currentSum = arr[0];
        int maxSum = arr[0];

        for (int i = 1; i < arr.length; i++) {

            currentSum = Math.max(
                arr[i],
                currentSum + arr[i]
            );

            maxSum = Math.max(
                maxSum,
                currentSum
            );
        }

        System.out.println(
            "Maximum Subarray Sum: " + maxSum
        );
    }

    public static void main(String[] args) {

        int[] arr = {
            -2, 1, -3, 4,
            -1, 2, 1, -5, 4
        };

        kadaneAlgorithm(arr);
    }
}`,

        pseudoCode: `START

currentSum = array[0]
maxSum = array[0]

FOR i from 1 to n - 1

    currentSum =
        MAX(array[i], currentSum + array[i])

    maxSum =
        MAX(maxSum, currentSum)

PRINT maxSum

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    {
        id: 8,
        module: "arrays",
        title: "Move All Zeroes to the End",
        difficulty: "Easy",

        description:
            "Move all zero values to the end while maintaining the order of non-zero elements.",

        inputArray: [0, 1, 0, 3, 12],

        example: {
            input: "[0, 1, 0, 3, 12]",
            output: "[1, 3, 12, 0, 0]"
        },

        explanation: `Use an index variable to represent the position where the next non-zero element should be placed.

Traverse the array.

Whenever a non-zero element is found, place it at the current index.

After processing all elements, fill the remaining positions with zeroes.`,

        javaCode: `import java.util.*;

public class Main {

    static void moveZeroes(int[] arr) {

        int index = 0;

        for (int num : arr) {

            if (num != 0) {
                arr[index] = num;
                index++;
            }
        }

        while (index < arr.length) {

            arr[index] = 0;
            index++;
        }

        System.out.println(
            "Result: " + Arrays.toString(arr)
        );
    }

    public static void main(String[] args) {

        int[] arr = {0, 1, 0, 3, 12};

        moveZeroes(arr);
    }
}`,

        pseudoCode: `START

index = 0

FOR each number

    IF number != 0

        array[index] = number
        index++

WHILE index < array.length

    array[index] = 0
    index++

PRINT array

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    {
        id: 9,
        module: "arrays",
        title: "Two Sum",
        difficulty: "Easy",

        description:
            "Find two elements whose sum is equal to a given target.",

        inputArray: [2, 7, 11, 15],

        target: 9,

        example: {
            input: "Array: [2, 7, 11, 15], Target: 9",
            output: "2 + 7 = 9"
        },

        explanation: `Check every possible pair of elements.

For each pair, calculate their sum.

If the sum equals the target, we have found the required pair.

This implementation uses nested loops.`,

        javaCode: `public class Main {

    static void twoSum(int[] arr, int target) {

        for (int i = 0; i < arr.length; i++) {

            for (int j = i + 1; j < arr.length; j++) {

                if (arr[i] + arr[j] == target) {

                    System.out.println(
                        arr[i] + " + " +
                        arr[j] + " = " +
                        target
                    );

                    return;
                }
            }
        }

        System.out.println("No pair found");
    }

    public static void main(String[] args) {

        int[] arr = {2, 7, 11, 15};

        twoSum(arr, 9);
    }
}`,

        pseudoCode: `START

FOR i = 0 to n - 1

    FOR j = i + 1 to n - 1

        IF array[i] + array[j] == target

            PRINT array[i]
            PRINT array[j]

            STOP

PRINT "No pair found"

END`,

        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    },

    {
        id: 10,
        module: "arrays",
        title: "Merge Two Sorted Arrays",
        difficulty: "Medium",

        inputArray: [
            [1, 3, 5, 7],
            [2, 4, 6, 8]
        ],

        arr1: [1, 3, 5, 7],
        arr2: [2, 4, 6, 8],

        description:
            "Merge two sorted arrays into one sorted array.",

        example: {
            input: "[1, 3, 5, 7] and [2, 4, 6, 8]",
            output: "[1, 2, 3, 4, 5, 6, 7, 8]"
        },

        explanation: `Use three pointers.

i points to the first array.
j points to the second array.
k points to the result array.

Compare the values at i and j.

Store the smaller value in the result.

Continue until one array is completely processed.

Then copy the remaining elements.`,

        javaCode: `import java.util.*;

public class Main {

    static void mergeSortedArrays(
            int[] arr1,
            int[] arr2) {

        int[] result =
            new int[arr1.length + arr2.length];

        int i = 0;
        int j = 0;
        int k = 0;

        while (
            i < arr1.length &&
            j < arr2.length
        ) {

            if (arr1[i] < arr2[j]) {

                result[k] = arr1[i];
                i++;

            } else {

                result[k] = arr2[j];
                j++;
            }

            k++;
        }

        while (i < arr1.length) {

            result[k] = arr1[i];
            i++;
            k++;
        }

        while (j < arr2.length) {

            result[k] = arr2[j];
            j++;
            k++;
        }

        System.out.println(
            "Merged Array: " +
            Arrays.toString(result)
        );
    }

    public static void main(String[] args) {

        int[] arr1 = {1, 3, 5, 7};
        int[] arr2 = {2, 4, 6, 8};

        mergeSortedArrays(arr1, arr2);
    }
}`,

        pseudoCode: `START

CREATE result array

i = 0
j = 0
k = 0

WHILE i < array1.length
AND j < array2.length

    IF array1[i] < array2[j]

        result[k] = array1[i]
        i++

    ELSE

        result[k] = array2[j]
        j++

    k++

COPY remaining elements

PRINT result

END`,

        timeComplexity: "O(n + m)",
        spaceComplexity: "O(n + m)"
    }
];

