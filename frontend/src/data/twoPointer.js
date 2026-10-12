export const twoPointerQuestions = [

    // =========================================================
    // 1. Reverse an Array Using Two Pointers
    // =========================================================

    {
        id: 21,
        module: "twoPointer",
        title: "Reverse an Array Using Two Pointers",
        difficulty: "Easy",

        description:
            "Reverse an integer array in-place using the two pointer technique.",

        inputArray: [10, 20, 30, 40, 50],

        example: {
            input: "[10, 20, 30, 40, 50]",
            output: "[50, 40, 30, 20, 10]"
        },

        explanation: `Use two pointers: left starts from the beginning of the array and right starts from the end.

Swap the elements at left and right.

Move left forward and right backward.

Continue until left becomes greater than or equal to right.

The array is reversed in-place without using another array.`,

        javaCode: `package TwoPointerJava;

import java.util.*;

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

        System.out.println(Arrays.toString(arr));
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

    left++
    right--

PRINT array

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 2. Check Array Palindrome
    // =========================================================

    {
        id: 22,
        module: "twoPointer",
        title: "Check Whether an Array is a Palindrome",
        difficulty: "Easy",

        description:
            "Check whether an integer array reads the same from left to right and right to left.",

        inputArray: [1, 2, 3, 2, 1],

        example: {
            input: "[1, 2, 3, 2, 1]",
            output: "true"
        },

        explanation: `Use two pointers.

The left pointer starts from the first element and the right pointer starts from the last element.

Compare both elements.

If they are different, the array is not a palindrome.

If they are equal, move left forward and right backward.

If all corresponding elements match, the array is a palindrome.`,

        javaCode: `package TwoPointerJava;

public class Main {

    static void checkPalindrome(int[] arr) {

        int left = 0;
        int right = arr.length - 1;

        boolean isPalindrome = true;

        while (left < right) {

            if (arr[left] != arr[right]) {

                isPalindrome = false;
                break;
            }

            left++;
            right--;
        }

        System.out.println("Array Palindrome: "
                + isPalindrome);
    }

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 2, 1};

        checkPalindrome(arr);
    }
}`,

        pseudoCode: `START

left = 0
right = array.length - 1

isPalindrome = true

WHILE left < right

    IF array[left] != array[right]

        isPalindrome = false
        BREAK

    left++
    right--

PRINT isPalindrome

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 3. Two Sum in Sorted Array
    // =========================================================

    {
        id: 23,
        module: "twoPointer",
        title: "Two Sum in a Sorted Array",
        difficulty: "Easy",

        description:
            "Find two elements in a sorted array whose sum is equal to a given target.",

        inputArray: [1, 2, 3, 4, 6, 8, 10],

        example: {
            input: "Array = [1, 2, 3, 4, 6, 8, 10], Target = 10",
            output: "2 + 8 = 10"
        },

        explanation: `Because the array is sorted, use two pointers.

The left pointer starts from the beginning.

The right pointer starts from the end.

Calculate the sum of both elements.

If the sum equals the target, the pair is found.

If the sum is smaller than the target, move left forward.

If the sum is greater than the target, move right backward.`,

        javaCode: `package TwoPointerJava;

public class Main {

    static void twoSumSorted(int[] arr, int target) {

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {

            int sum = arr[left] + arr[right];

            if (sum == target) {

                System.out.println(
                    arr[left] + " + "
                    + arr[right] + " = "
                    + target
                );

                return;
            }

            else if (sum < target) {
                left++;
            }

            else {
                right--;
            }
        }

        System.out.println("No pair found");
    }

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4, 6, 8, 10};

        twoSumSorted(arr, 10);
    }
}`,

        pseudoCode: `START

left = 0
right = array.length - 1

WHILE left < right

    sum = array[left] + array[right]

    IF sum == target

        PRINT pair
        RETURN

    ELSE IF sum < target

        left++

    ELSE

        right--

PRINT "No pair found"

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 4. Remove Duplicates
    // =========================================================

    {
        id: 24,
        module: "twoPointer",
        title: "Remove Duplicates from a Sorted Array",
        difficulty: "Easy",

        description:
            "Remove duplicate elements from a sorted array using the two pointer technique.",

        inputArray: [1, 1, 2, 2, 3, 3, 4, 5],

        example: {
            input: "[1, 1, 2, 2, 3, 3, 4, 5]",
            output: "[1, 2, 3, 4, 5]"
        },

        explanation: `Use two pointers.

The j pointer represents the position of the last unique element.

The i pointer scans the array.

Whenever array[i] is different from array[j], increment j and copy array[i] to array[j].

At the end, elements from index 0 to j contain only unique elements.`,

        javaCode: `package TwoPointerJava;

public class Main {

    static void removeDuplicates(int[] arr) {

        int j = 0;

        for (int i = 1; i < arr.length; i++) {

            if (arr[i] != arr[j]) {

                j++;
                arr[j] = arr[i];
            }
        }

        for (int i = 0; i <= j; i++) {

            System.out.print(arr[i] + " ");
        }
    }

    public static void main(String[] args) {

        int[] arr = {
            1, 1, 2, 2, 3, 3, 4, 5
        };

        removeDuplicates(arr);
    }
}`,

        pseudoCode: `START

j = 0

FOR i = 1 TO array.length - 1

    IF array[i] != array[j]

        j++
        array[j] = array[i]

FOR i = 0 TO j

    PRINT array[i]

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 5. Move Zeroes
    // =========================================================

    {
        id: 25,
        module: "twoPointer",
        title: "Move Zeroes to the End",
        difficulty: "Easy",

        description:
            "Move all zero elements to the end of an array while maintaining the relative order of non-zero elements.",

        inputArray: [0, 1, 0, 3, 12],

        example: {
            input: "[0, 1, 0, 3, 12]",
            output: "[1, 3, 12, 0, 0]"
        },

        explanation: `Use two pointers.

The left pointer represents the position where the next non-zero element should be placed.

The right pointer scans the complete array.

Whenever a non-zero element is found, swap it with the element at left.

Then increment left.

This moves all non-zero elements toward the beginning and all zeroes toward the end.`,

        javaCode: `package TwoPointerJava;

import java.util.*;

public class Main {

    static void moveZeroes(int[] arr) {

        int left = 0;

        for (int right = 0; right < arr.length; right++) {

            if (arr[right] != 0) {

                int temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;

                left++;
            }
        }

        System.out.println(Arrays.toString(arr));
    }

    public static void main(String[] args) {

        int[] arr = {0, 1, 0, 3, 12};

        moveZeroes(arr);
    }
}`,

        pseudoCode: `START

left = 0

FOR right = 0 TO array.length - 1

    IF array[right] != 0

        SWAP array[left] and array[right]

        left++

PRINT array

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 6. Pair With Given Sum
    // =========================================================

    {
        id: 26,
        module: "twoPointer",
        title: "Find a Pair with a Given Sum",
        difficulty: "Easy",

        description:
            "Find two elements in an unsorted array whose sum is equal to a given target using two pointers.",

        inputArray: [10, 5, 20, 3, 7],

        example: {
            input: "Array = [10, 5, 20, 3, 7], Target = 10",
            output: "3 + 7 = 10"
        },

        explanation: `The two pointer technique requires a sorted array.

First sort the array.

Place one pointer at the beginning and another at the end.

Calculate their sum.

If the sum equals the target, the pair is found.

If the sum is smaller, move the left pointer forward.

If the sum is greater, move the right pointer backward.`,

        javaCode: `package TwoPointerJava;

import java.util.*;

public class Main {

    static void pairWithGivenSum(int[] arr, int target) {

        Arrays.sort(arr);

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {

            int sum = arr[left] + arr[right];

            if (sum == target) {

                System.out.println(
                    arr[left] + " + "
                    + arr[right] + " = "
                    + target
                );

                return;
            }

            else if (sum < target) {
                left++;
            }

            else {
                right--;
            }
        }

        System.out.println("No pair found");
    }

    public static void main(String[] args) {

        int[] arr = {10, 5, 20, 3, 7};

        pairWithGivenSum(arr, 10);
    }
}`,

        pseudoCode: `START

SORT array

left = 0
right = array.length - 1

WHILE left < right

    sum = array[left] + array[right]

    IF sum == target

        PRINT pair
        RETURN

    ELSE IF sum < target

        left++

    ELSE

        right--

PRINT "No pair found"

END`,

        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 7. Pair With Given Difference
    // =========================================================

    {
        id: 27,
        module: "twoPointer",
        title: "Find a Pair with a Given Difference",
        difficulty: "Medium",

        description:
            "Find two elements in an array whose difference is equal to a given value using two pointers.",

        inputArray: [10, 5, 20, 3, 7],

        example: {
            input: "Array = [10, 5, 20, 3, 7], Difference = 5",
            output: "5 - 10 or 10 - 5"
        },

        explanation: `First sort the array.

Use two pointers: left and right.

Calculate array[right] - array[left].

If the difference equals the required difference, the pair is found.

If the difference is smaller, move right forward.

If the difference is greater, move left forward.

Make sure left and right never point to the same element.`,

        javaCode: `package TwoPointerJava;

import java.util.*;

public class Main {

    static void pairWithGivenDifference(
            int[] arr,
            int difference) {

        Arrays.sort(arr);

        int left = 0;
        int right = 1;

        while (right < arr.length) {

            int diff = arr[right] - arr[left];

            if (diff == difference) {

                System.out.println(
                    arr[right] + " - "
                    + arr[left] + " = "
                    + difference
                );

                return;
            }

            else if (diff < difference) {

                right++;
            }

            else {

                left++;

                if (left == right) {
                    right++;
                }
            }
        }

        System.out.println("No pair found");
    }

    public static void main(String[] args) {

        int[] arr = {10, 5, 20, 3, 7};

        pairWithGivenDifference(arr, 5);
    }
}`,

        pseudoCode: `START

SORT array

left = 0
right = 1

WHILE right < array.length

    difference =
        array[right] - array[left]

    IF difference == target

        PRINT pair
        RETURN

    ELSE IF difference < target

        right++

    ELSE

        left++

        IF left == right

            right++

PRINT "No pair found"

END`,

        timeComplexity: "O(n log n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 8. Merge Two Sorted Arrays
    // =========================================================

    {
        id: 28,
        module: "twoPointer",
        title: "Merge Two Sorted Arrays",
        difficulty: "Medium",

        description:
            "Merge two sorted arrays into a single sorted array using two pointers.",

        inputArray: [1, 3, 5, 7],

        example: {
            input: "Array 1 = [1, 3, 5, 7], Array 2 = [2, 4, 6, 8]",
            output: "[1, 2, 3, 4, 5, 6, 7, 8]"
        },

        explanation: `Use one pointer for each sorted array.

Compare the current elements of both arrays.

Copy the smaller element into the result array.

Move the pointer of the array from which the element was selected.

When one array is completely processed, copy the remaining elements from the other array.`,

        javaCode: `package TwoPointerJava;

import java.util.*;

public class Main {

    static void mergeSortedArrays(
            int[] arr1,
            int[] arr2) {

        int[] result =
            new int[arr1.length + arr2.length];

        int i = 0;
        int j = 0;
        int k = 0;

        while (i < arr1.length &&
               j < arr2.length) {

            if (arr1[i] <= arr2[j]) {

                result[k] = arr1[i];
                i++;
            }

            else {

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

i = 0
j = 0
k = 0

WHILE i < array1.length
AND j < array2.length

    IF array1[i] <= array2[j]

        result[k] = array1[i]
        i++

    ELSE

        result[k] = array2[j]
        j++

    k++

WHILE i < array1.length

    result[k] = array1[i]
    i++
    k++

WHILE j < array2.length

    result[k] = array2[j]
    j++
    k++

PRINT result

END`,

        timeComplexity: "O(n + m)",
        spaceComplexity: "O(n + m)"
    },


    // =========================================================
    // 9. Container With Most Water
    // =========================================================

    {
        id: 29,
        module: "twoPointer",
        title: "Container With Most Water",
        difficulty: "Medium",

        description:
            "Find two vertical lines that together with the x-axis form a container that holds the maximum amount of water.",

        inputArray: [1, 8, 6, 2, 5, 4, 8, 3, 7],

        example: {
            input: "[1, 8, 6, 2, 5, 4, 8, 3, 7]",
            output: "Maximum Water: 49"
        },

        explanation: `Place the left pointer at the first element and the right pointer at the last element.

The width is right - left.

The height of the container is the smaller of the two heights.

Calculate:

area = width × minimum height

Update the maximum area.

Move the pointer with the smaller height because moving the taller pointer cannot increase the limiting height.

Continue until the two pointers meet.`,

        javaCode: `package TwoPointerJava;

public class Main {

    static void containerWithMostWater(int[] height) {

        int left = 0;
        int right = height.length - 1;

        int maxArea = 0;

        while (left < right) {

            int width = right - left;

            int minHeight =
                Math.min(height[left], height[right]);

            int area =
                width * minHeight;

            maxArea =
                Math.max(maxArea, area);

            if (height[left] < height[right]) {

                left++;
            }

            else {

                right--;
            }
        }

        System.out.println(
            "Maximum Water: " + maxArea
        );
    }

    public static void main(String[] args) {

        int[] height = {
            1, 8, 6, 2, 5, 4, 8, 3, 7
        };

        containerWithMostWater(height);
    }
}`,

        pseudoCode: `START

left = 0
right = array.length - 1

maxArea = 0

WHILE left < right

    width = right - left

    minHeight =
        MIN(array[left], array[right])

    area = width * minHeight

    maxArea = MAX(maxArea, area)

    IF array[left] < array[right]

        left++

    ELSE

        right--

PRINT maxArea

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 10. Three Sum
    // =========================================================

    {
        id: 30,
        module: "twoPointer",
        title: "Three Sum",
        difficulty: "Medium",

        description:
            "Find triplets in an array whose sum is equal to a given target using sorting and the two pointer technique.",

        inputArray: [-1, 0, 1, 2, -1, -4],

        example: {
            input: "Array = [-1, 0, 1, 2, -1, -4], Target = 0",
            output: "[-1, -1, 2] and [-1, 0, 1]"
        },

        explanation: `First sort the array.

Fix one element using a loop.

For every fixed element, use two pointers for the remaining portion of the array.

The left pointer starts immediately after the fixed element.

The right pointer starts at the end.

Calculate:

sum = fixed element + left element + right element

If the sum equals the target, a triplet is found.

If the sum is smaller than the target, move left forward.

If the sum is greater than the target, move right backward.

Repeat for every possible fixed element.`,

        javaCode: `package TwoPointerJava;

import java.util.*;

public class Main {

    static void threeSum(int[] arr, int target) {

        Arrays.sort(arr);

        boolean found = false;

        for (int i = 0;
             i < arr.length - 2;
             i++) {

            int left = i + 1;
            int right = arr.length - 1;

            while (left < right) {

                int sum =
                    arr[i]
                    + arr[left]
                    + arr[right];

                if (sum == target) {

                    System.out.println(
                        arr[i] + " + "
                        + arr[left] + " + "
                        + arr[right]
                        + " = "
                        + target
                    );

                    found = true;

                    left++;
                    right--;
                }

                else if (sum < target) {

                    left++;
                }

                else {

                    right--;
                }
            }
        }

        if (!found) {

            System.out.println(
                "No triplet found"
            );
        }
    }

    public static void main(String[] args) {

        int[] arr = {
            -1, 0, 1, 2, -1, -4
        };

        threeSum(arr, 0);
    }
}`,

        pseudoCode: `START

SORT array

found = false

FOR i = 0 TO array.length - 3

    left = i + 1
    right = array.length - 1

    WHILE left < right

        sum =
            array[i]
            + array[left]
            + array[right]

        IF sum == target

            PRINT triplet
            found = true

            left++
            right--

        ELSE IF sum < target

            left++

        ELSE

            right--

IF found == false

    PRINT "No triplet found"

END`,

        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)"
    }

];