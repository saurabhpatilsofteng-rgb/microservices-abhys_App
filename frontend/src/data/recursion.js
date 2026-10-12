const recursionQuestions = [

    // =========================================================
    // 101. Print Numbers from 1 to N
    // =========================================================

    {
        id: 101,
        module: "recursion",
        title: "Print Numbers from 1 to N",
        difficulty: "Easy",

        description:
            "Print all numbers from 1 to N using recursion.",

        inputArray: [5],

        example: {
            input: "N = 5",
            output: "1 2 3 4 5"
        },

        explanation:
            "The recursive call is made first with n - 1. After the recursive call returns, the current value of n is printed. This causes the numbers to be printed from 1 to N.",

        javaCode: `
static void print1ToN(int n) {

    if (n == 0) {
        return;
    }

    print1ToN(n - 1);

    System.out.print(n + " ");
}
`,

        pseudoCode: `
START

FUNCTION print1ToN(n)

    IF n = 0
        RETURN
    END IF

    print1ToN(n - 1)

    Print n

END FUNCTION

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n) because of recursion stack"
    },


    // =========================================================
    // 102. Print Numbers from N to 1
    // =========================================================

    {
        id: 102,
        module: "recursion",
        title: "Print Numbers from N to 1",
        difficulty: "Easy",

        description:
            "Print all numbers from N down to 1 using recursion.",

        inputArray: [5],

        example: {
            input: "N = 5",
            output: "5 4 3 2 1"
        },

        explanation:
            "Print the current value before making the recursive call. Then recursively process n - 1 until n becomes zero.",

        javaCode: `
static void printNTo1(int n) {

    if (n == 0) {
        return;
    }

    System.out.print(n + " ");

    printNTo1(n - 1);
}
`,

        pseudoCode: `
START

FUNCTION printNTo1(n)

    IF n = 0
        RETURN
    END IF

    Print n

    printNTo1(n - 1)

END FUNCTION

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n) because of recursion stack"
    },


    // =========================================================
    // 103. Find Factorial
    // =========================================================

    {
        id: 103,
        module: "recursion",
        title: "Find Factorial using Recursion",
        difficulty: "Easy",

        description:
            "Calculate the factorial of a non-negative integer using recursion.",

        inputArray: [5],

        example: {
            input: "N = 5",
            output: "120"
        },

        explanation:
            "Factorial follows the recurrence n! = n × (n-1)!. The base cases 0! and 1! are both 1.",

        javaCode: `
static int factorial(int n) {

    if (n == 0 || n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
`,

        pseudoCode: `
START

FUNCTION factorial(n)

    IF n = 0 OR n = 1
        RETURN 1
    END IF

    RETURN n * factorial(n - 1)

END FUNCTION

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n) because of recursion stack"
    },


    // =========================================================
    // 104. Find Fibonacci
    // =========================================================

    {
        id: 104,
        module: "recursion",
        title: "Find Fibonacci using Recursion",
        difficulty: "Medium",

        description:
            "Find the Fibonacci number at position N using recursive calls.",

        inputArray: [7],

        example: {
            input: "N = 7",
            output: "13"
        },

        explanation:
            "The Fibonacci sequence is defined as F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2). The basic recursive implementation recalculates many subproblems.",

        javaCode: `
static int fibonacci(int n) {

    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return 1;
    }

    return fibonacci(n - 1)
            + fibonacci(n - 2);
}
`,

        pseudoCode: `
START

FUNCTION fibonacci(n)

    IF n = 0
        RETURN 0
    END IF

    IF n = 1
        RETURN 1
    END IF

    RETURN fibonacci(n - 1)
           + fibonacci(n - 2)

END FUNCTION

END
`,

        timeComplexity: "O(2^n)",
        spaceComplexity: "O(n) because of recursion stack"
    },


    // =========================================================
    // 105. Calculate Power
    // =========================================================

    {
        id: 105,
        module: "recursion",
        title: "Calculate Power using Recursion",
        difficulty: "Easy",

        description:
            "Calculate base raised to the power of exponent using recursion.",

        inputArray: [2, 5],

        example: {
            input: "Base = 2, Exponent = 5",
            output: "32"
        },

        explanation:
            "When the exponent becomes zero, the result is 1. Otherwise, multiply the base by the result of recursively calculating the power with exponent - 1.",

        javaCode: `
static int power(int base, int exponent) {

    if (exponent == 0) {
        return 1;
    }

    return base * power(
            base,
            exponent - 1
    );
}
`,

        pseudoCode: `
START

FUNCTION power(base, exponent)

    IF exponent = 0
        RETURN 1
    END IF

    RETURN base *
           power(base, exponent - 1)

END FUNCTION

END
`,

        timeComplexity: "O(exponent)",
        spaceComplexity: "O(exponent)"
    },


    // =========================================================
    // 106. Sum of Digits
    // =========================================================

    {
        id: 106,
        module: "recursion",
        title: "Find Sum of Digits",
        difficulty: "Easy",

        description:
            "Find the sum of all digits of a number using recursion.",

        inputArray: [12345],

        example: {
            input: "N = 12345",
            output: "15"
        },

        explanation:
            "Extract the last digit using n % 10 and recursively process the remaining number using n / 10. Continue until the number becomes zero.",

        javaCode: `
static int sumOfDigits(int n) {

    if (n == 0) {
        return 0;
    }

    return (n % 10)
            + sumOfDigits(n / 10);
}
`,

        pseudoCode: `
START

FUNCTION sumOfDigits(n)

    IF n = 0
        RETURN 0
    END IF

    digit = n % 10

    RETURN digit +
           sumOfDigits(n / 10)

END FUNCTION

END
`,

        timeComplexity: "O(log n)",
        spaceComplexity: "O(log n)"
    },


    // =========================================================
    // 107. Reverse a Number
    // =========================================================

    {
        id: 107,
        module: "recursion",
        title: "Reverse a Number using Recursion",
        difficulty: "Easy",

        description:
            "Reverse the digits of a number using recursion.",

        inputArray: [12345],

        example: {
            input: "N = 12345",
            output: "54321"
        },

        explanation:
            "Extract the last digit using n % 10 and append it to the reverse value. Then recursively process the remaining digits by dividing n by 10.",

        javaCode: `
static int reverseNumber(
        int n,
        int reverse) {

    if (n == 0) {
        return reverse;
    }

    int digit = n % 10;

    reverse =
            reverse * 10 + digit;

    return reverseNumber(
            n / 10,
            reverse
    );
}
`,

        pseudoCode: `
START

FUNCTION reverseNumber(n, reverse)

    IF n = 0
        RETURN reverse
    END IF

    digit = n % 10

    reverse =
        reverse * 10 + digit

    RETURN reverseNumber(
        n / 10,
        reverse
    )

END FUNCTION

END
`,

        timeComplexity: "O(log n)",
        spaceComplexity: "O(log n)"
    },


    // =========================================================
    // 108. Check Palindrome using Recursion
    // =========================================================

    {
        id: 108,
        module: "recursion",
        title: "Check Palindrome using Recursion",
        difficulty: "Easy",

        description:
            "Check whether a string is a palindrome using recursion.",

        inputArray: ["m", "a", "d", "a", "m"],

        example: {
            input: "madam",
            output: "true"
        },

        explanation:
            "Compare the characters at the left and right positions. If they are different, the string is not a palindrome. Otherwise, recursively move the left pointer forward and the right pointer backward.",

        javaCode: `
static boolean isPalindrome(
        String str,
        int left,
        int right) {

    if (left >= right) {
        return true;
    }

    if (str.charAt(left)
            != str.charAt(right)) {

        return false;
    }

    return isPalindrome(
            str,
            left + 1,
            right - 1
    );
}
`,

        pseudoCode: `
START

FUNCTION isPalindrome(str, left, right)

    IF left >= right
        RETURN true
    END IF

    IF str[left] != str[right]
        RETURN false
    END IF

    RETURN isPalindrome(
        str,
        left + 1,
        right - 1
    )

END FUNCTION

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 109. Find GCD using Recursion
    // =========================================================

    {
        id: 109,
        module: "recursion",
        title: "Find GCD using Recursion",
        difficulty: "Easy",

        description:
            "Find the greatest common divisor (GCD) of two integers using the recursive Euclidean algorithm.",

        inputArray: [48, 18],

        example: {
            input: "A = 48, B = 18",
            output: "6"
        },

        explanation:
            "The Euclidean algorithm uses the rule GCD(a, b) = GCD(b, a % b). When b becomes zero, a is the GCD.",

        javaCode: `
static int gcd(int a, int b) {

    if (b == 0) {
        return a;
    }

    return gcd(
            b,
            a % b
    );
}
`,

        pseudoCode: `
START

FUNCTION gcd(a, b)

    IF b = 0
        RETURN a
    END IF

    RETURN gcd(
        b,
        a % b
    )

END FUNCTION

END
`,

        timeComplexity: "O(log(min(a, b)))",
        spaceComplexity: "O(log(min(a, b)))"
    },


    // =========================================================
    // 110. Binary Search using Recursion
    // =========================================================

    {
        id: 110,
        module: "recursion",
        title: "Binary Search using Recursion",
        difficulty: "Medium",

        description:
            "Search for a target element in a sorted array using recursive binary search.",

        inputArray: [10, 20, 30, 40, 50, 60, 70],

        example: {
            input: "Array = [10,20,30,40,50,60,70], Target = 50",
            output: "Index = 4"
        },

        explanation:
            "Binary search repeatedly divides the sorted search range into two halves. If the target is smaller than the middle element, search the left half. Otherwise, search the right half.",

        javaCode: `
static int binarySearch(
        int[] arr,
        int left,
        int right,
        int target) {

    if (left > right) {
        return -1;
    }

    int mid =
            left + (right - left) / 2;

    if (arr[mid] == target) {
        return mid;
    }

    if (target < arr[mid]) {

        return binarySearch(
                arr,
                left,
                mid - 1,
                target
        );

    } else {

        return binarySearch(
                arr,
                mid + 1,
                right,
                target
        );
    }
}
`,

        pseudoCode: `
START

FUNCTION binarySearch(arr, left, right, target)

    IF left > right
        RETURN -1
    END IF

    mid = left + (right - left) / 2

    IF arr[mid] = target
        RETURN mid
    END IF

    IF target < arr[mid]

        RETURN binarySearch(
            arr,
            left,
            mid - 1,
            target
        )

    ELSE

        RETURN binarySearch(
            arr,
            mid + 1,
            right,
            target
        )

    END IF

END FUNCTION

END
`,

        timeComplexity: "O(log n)",
        spaceComplexity: "O(log n) because of recursion stack"
    }

];