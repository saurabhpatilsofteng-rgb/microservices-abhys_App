const dynamicProgrammingQuestions = [

    // =========================================================
    // 131. Fibonacci using Dynamic Programming
    // =========================================================

    {
        id: 131,
        module: "dynamic-programming",
        title: "Fibonacci using Dynamic Programming",
        difficulty: "Easy",

        description:
            "Find the nth Fibonacci number using Dynamic Programming by storing previously calculated Fibonacci values.",

        inputArray: [10],

        example:
            "Input: n = 10\nOutput: 55",

        explanation:
            "Use a DP array where dp[i] stores the ith Fibonacci number. Each value is calculated using dp[i - 1] + dp[i - 2]. This avoids the repeated calculations of naive recursive Fibonacci.",

        javaCode: `static int fibonacci(int n) {

    if (n <= 1) {
        return n;
    }

    int[] dp = new int[n + 1];

    dp[0] = 0;
    dp[1] = 1;

    for (int i = 2; i <= n; i++) {

        dp[i] =
                dp[i - 1]
                + dp[i - 2];
    }

    return dp[n];
}`,

        pseudoCode: `FIBONACCI(n)

if n <= 1
    return n

create dp array of size n + 1

dp[0] = 0
dp[1] = 1

for i = 2 to n
    dp[i] = dp[i - 1] + dp[i - 2]

return dp[n]`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 132. Climbing Stairs
    // =========================================================

    {
        id: 132,
        module: "dynamic-programming",
        title: "Climbing Stairs",
        difficulty: "Easy",

        description:
            "Find the number of distinct ways to reach the top of a staircase when you can climb either one or two steps at a time.",

        inputArray: [5],

        example:
            "Input: n = 5\nOutput: 8",

        explanation:
            "The number of ways to reach step i is the sum of ways to reach step i-1 and step i-2 because the final move can be either one step or two steps.",

        javaCode: `static int climbStairs(int n) {

    if (n <= 2) {
        return n;
    }

    int[] dp =
            new int[n + 1];

    dp[1] = 1;
    dp[2] = 2;

    for (int i = 3;
         i <= n;
         i++) {

        dp[i] =
                dp[i - 1]
                + dp[i - 2];
    }

    return dp[n];
}`,

        pseudoCode: `CLIMB_STAIRS(n)

if n <= 2
    return n

dp[1] = 1
dp[2] = 2

for i = 3 to n
    dp[i] = dp[i - 1] + dp[i - 2]

return dp[n]`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 133. House Robber
    // =========================================================

    {
        id: 133,
        module: "dynamic-programming",
        title: "House Robber",
        difficulty: "Medium",

        description:
            "Find the maximum amount of money that can be robbed from houses without robbing two adjacent houses.",

        inputArray: [2, 7, 9, 3, 1],

        example:
            "Input: [2, 7, 9, 3, 1]\nOutput: 12",

        explanation:
            "For each house, choose between skipping the current house and taking the current house along with the best result from two houses before it. The recurrence is max(dp[i-1], dp[i-2] + houses[i]).",

        javaCode: `static int houseRobber(int[] houses) {

    int n = houses.length;

    if (n == 0) {
        return 0;
    }

    if (n == 1) {
        return houses[0];
    }

    int[] dp =
            new int[n];

    dp[0] = houses[0];

    dp[1] =
            Math.max(
                    houses[0],
                    houses[1]
            );

    for (int i = 2;
         i < n;
         i++) {

        dp[i] =
                Math.max(
                        dp[i - 1],
                        dp[i - 2]
                                + houses[i]
                );
    }

    return dp[n - 1];
}`,

        pseudoCode: `HOUSE_ROBBER(houses)

if no houses
    return 0

if one house
    return houses[0]

dp[0] = houses[0]
dp[1] = max(houses[0], houses[1])

for i = 2 to n - 1

    skip = dp[i - 1]
    rob = dp[i - 2] + houses[i]

    dp[i] = max(skip, rob)

return dp[n - 1]`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 134. 0/1 Knapsack
    // =========================================================

    {
        id: 134,
        module: "dynamic-programming",
        title: "0/1 Knapsack",
        difficulty: "Medium",

        description:
            "Find the maximum value that can be obtained by selecting items whose total weight does not exceed the given capacity. Each item can be selected at most once.",

        inputArray: {
            weights: [1, 3, 4, 5],
            values: [1, 4, 5, 7],
            capacity: 7
        },

        example:
            "Weights: [1,3,4,5]\nValues: [1,4,5,7]\nCapacity: 7\nOutput: 9",

        explanation:
            "For every item and capacity, consider two choices: do not take the item or take it if its weight fits. Store the maximum value in the DP table.",

        javaCode: `static int knapsack(
        int[] weights,
        int[] values,
        int capacity) {

    int n = weights.length;

    int[][] dp =
            new int[n + 1]
                      [capacity + 1];

    for (int i = 1;
         i <= n;
         i++) {

        for (int w = 0;
             w <= capacity;
             w++) {

            // Do not take item
            dp[i][w] =
                    dp[i - 1][w];

            // Take item
            if (weights[i - 1] <= w) {

                dp[i][w] =
                        Math.max(
                                dp[i][w],
                                values[i - 1]
                                + dp[i - 1]
                                  [w - weights[i - 1]]
                        );
            }
        }
    }

    return dp[n][capacity];
}`,

        pseudoCode: `KNAPSACK(weights, values, capacity)

create dp[n + 1][capacity + 1]

for each item i

    for each capacity w

        do not take item
        dp[i][w] = dp[i - 1][w]

        if weight[i - 1] <= w

            take item
            value =
                values[i - 1]
                + dp[i - 1][w - weight]

            dp[i][w] =
                max(dp[i][w], value)

return dp[n][capacity]`,

        timeComplexity: "O(n × capacity)",

        spaceComplexity: "O(n × capacity)"
    },


    // =========================================================
    // 135. Coin Change
    // =========================================================

    {
        id: 135,
        module: "dynamic-programming",
        title: "Coin Change",
        difficulty: "Medium",

        description:
            "Find the minimum number of coins required to make a given amount using unlimited copies of the available coin denominations.",

        inputArray: {
            coins: [1, 2, 5],
            amount: 11
        },

        example:
            "Input: coins = [1,2,5], amount = 11\nOutput: 3\nExplanation: 5 + 5 + 1 = 11",

        explanation:
            "dp[i] represents the minimum number of coins required to make amount i. For every amount, try each coin and use dp[i - coin] + 1.",

        javaCode: `static int coinChange(
        int[] coins,
        int amount) {

    int[] dp =
            new int[amount + 1];

    Arrays.fill(
            dp,
            amount + 1
    );

    dp[0] = 0;

    for (int i = 1;
         i <= amount;
         i++) {

        for (int coin : coins) {

            if (coin <= i) {

                dp[i] =
                        Math.min(
                                dp[i],
                                1 + dp[i - coin]
                        );
            }
        }
    }

    if (dp[amount] > amount) {
        return -1;
    }

    return dp[amount];
}`,

        pseudoCode: `COIN_CHANGE(coins, amount)

create dp[amount + 1]

fill dp with amount + 1

dp[0] = 0

for i = 1 to amount

    for each coin

        if coin <= i

            dp[i] =
                min(
                    dp[i],
                    1 + dp[i - coin]
                )

if dp[amount] is impossible
    return -1

return dp[amount]`,

        timeComplexity: "O(amount × number of coins)",

        spaceComplexity: "O(amount)"
    },


    // =========================================================
    // 136. Longest Common Subsequence
    // =========================================================

    {
        id: 136,
        module: "dynamic-programming",
        title: "Longest Common Subsequence",
        difficulty: "Medium",

        description:
            "Find the length of the longest subsequence that appears in the same order in two given strings.",

        inputArray: {
            string1: "abcde",
            string2: "ace"
        },

        example:
            "Input: s1 = \"abcde\", s2 = \"ace\"\nOutput: 3\nLCS = \"ace\"",

        explanation:
            "If the current characters are equal, extend the LCS from the previous diagonal cell. Otherwise, take the maximum of the result obtained by skipping one character from either string.",

        javaCode: `static int longestCommonSubsequence(
        String s1,
        String s2) {

    int m = s1.length();
    int n = s2.length();

    int[][] dp =
            new int[m + 1][n + 1];

    for (int i = 1;
         i <= m;
         i++) {

        for (int j = 1;
             j <= n;
             j++) {

            if (s1.charAt(i - 1)
                    == s2.charAt(j - 1)) {

                dp[i][j] =
                        1
                        + dp[i - 1][j - 1];

            } else {

                dp[i][j] =
                        Math.max(
                                dp[i - 1][j],
                                dp[i][j - 1]
                        );
            }
        }
    }

    return dp[m][n];
}`,

        pseudoCode: `LCS(s1, s2)

create dp[m + 1][n + 1]

for i = 1 to m

    for j = 1 to n

        if s1[i - 1] == s2[j - 1]

            dp[i][j] =
                1 + dp[i - 1][j - 1]

        else

            dp[i][j] =
                max(
                    dp[i - 1][j],
                    dp[i][j - 1]
                )

return dp[m][n]`,

        timeComplexity: "O(m × n)",

        spaceComplexity: "O(m × n)"
    },


    // =========================================================
    // 137. Longest Increasing Subsequence
    // =========================================================

    {
        id: 137,
        module: "dynamic-programming",
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",

        description:
            "Find the length of the longest strictly increasing subsequence in an array.",

        inputArray: [10, 9, 2, 5, 3, 7, 101, 18],

        example:
            "Input: [10,9,2,5,3,7,101,18]\nOutput: 4\nOne LIS is [2,3,7,101]",

        explanation:
            "dp[i] represents the length of the longest increasing subsequence ending at index i. For every previous index j, if arr[j] is smaller than arr[i], update dp[i].",

        javaCode: `static int longestIncreasingSubsequence(
        int[] arr) {

    int n = arr.length;

    if (n == 0) {
        return 0;
    }

    int[] dp =
            new int[n];

    Arrays.fill(dp, 1);

    int answer = 1;

    for (int i = 1;
         i < n;
         i++) {

        for (int j = 0;
             j < i;
             j++) {

            if (arr[j] < arr[i]) {

                dp[i] =
                        Math.max(
                                dp[i],
                                dp[j] + 1
                        );
            }
        }

        answer =
                Math.max(
                        answer,
                        dp[i]
                );
    }

    return answer;
}`,

        pseudoCode: `LIS(arr)

if array is empty
    return 0

fill dp with 1

answer = 1

for i = 1 to n - 1

    for j = 0 to i - 1

        if arr[j] < arr[i]

            dp[i] =
                max(
                    dp[i],
                    dp[j] + 1
                )

    answer = max(answer, dp[i])

return answer`,

        timeComplexity: "O(n²)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 138. Minimum Path Sum
    // =========================================================

    {
        id: 138,
        module: "dynamic-programming",
        title: "Minimum Path Sum",
        difficulty: "Medium",

        description:
            "Find the minimum sum of values along a path from the top-left cell to the bottom-right cell of a grid, moving only right or down.",

        inputArray: [
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1]
        ],

        example:
            "Input:\n1 3 1\n1 5 1\n4 2 1\n\nOutput: 7",

        explanation:
            "For every cell, the minimum path can come either from the cell above or from the cell on the left. Therefore dp[i][j] equals grid[i][j] plus the smaller of those two previous path sums.",

        javaCode: `static int minimumPathSum(
        int[][] grid) {

    int rows =
            grid.length;

    int columns =
            grid[0].length;

    int[][] dp =
            new int[rows][columns];

    dp[0][0] =
            grid[0][0];

    // First row
    for (int j = 1;
         j < columns;
         j++) {

        dp[0][j] =
                dp[0][j - 1]
                + grid[0][j];
    }

    // First column
    for (int i = 1;
         i < rows;
         i++) {

        dp[i][0] =
                dp[i - 1][0]
                + grid[i][0];
    }

    // Remaining cells
    for (int i = 1;
         i < rows;
         i++) {

        for (int j = 1;
             j < columns;
             j++) {

            dp[i][j] =
                    grid[i][j]
                    + Math.min(
                            dp[i - 1][j],
                            dp[i][j - 1]
                    );
        }
    }

    return dp[rows - 1]
             [columns - 1];
}`,

        pseudoCode: `MINIMUM_PATH_SUM(grid)

create dp[rows][columns]

dp[0][0] = grid[0][0]

calculate first row

calculate first column

for each remaining cell

    dp[i][j] =
        grid[i][j]
        + min(
            dp[i - 1][j],
            dp[i][j - 1]
        )

return dp[rows - 1][columns - 1]`,

        timeComplexity: "O(rows × columns)",

        spaceComplexity: "O(rows × columns)"
    },


    // =========================================================
    // 139. Subset Sum
    // =========================================================

    {
        id: 139,
        module: "dynamic-programming",
        title: "Subset Sum",
        difficulty: "Medium",

        description:
            "Determine whether there exists a subset of an array whose elements add up exactly to a given target sum.",

        inputArray: {
            array: [3, 34, 4, 12, 5, 2],
            target: 9
        },

        example:
            "Input: [3,34,4,12,5,2], target = 9\nOutput: true\nOne valid subset is [4,5]",

        explanation:
            "dp[i][sum] indicates whether a subset of the first i elements can create the given sum. For every element, either exclude it or include it if its value does not exceed the current sum.",

        javaCode: `static boolean subsetSum(
        int[] arr,
        int target) {

    int n = arr.length;

    boolean[][] dp =
            new boolean[n + 1]
                        [target + 1];

    dp[0][0] = true;

    for (int i = 1;
         i <= n;
         i++) {

        dp[i][0] = true;

        for (int sum = 1;
             sum <= target;
             sum++) {

            // Do not take element
            dp[i][sum] =
                    dp[i - 1][sum];

            // Take element
            if (arr[i - 1] <= sum) {

                dp[i][sum] =
                        dp[i][sum]
                        ||
                        dp[i - 1]
                          [sum - arr[i - 1]];
            }
        }
    }

    return dp[n][target];
}`,

        pseudoCode: `SUBSET_SUM(arr, target)

create dp[n + 1][target + 1]

dp[0][0] = true

for i = 1 to n

    dp[i][0] = true

    for sum = 1 to target

        do not take element
        dp[i][sum] = dp[i - 1][sum]

        if arr[i - 1] <= sum

            take element
            dp[i][sum] =
                dp[i][sum]
                OR
                dp[i - 1][sum - arr[i - 1]]

return dp[n][target]`,

        timeComplexity: "O(n × target)",

        spaceComplexity: "O(n × target)"
    },


    // =========================================================
    // 140. Longest Palindromic Subsequence
    // =========================================================

    {
        id: 140,
        module: "dynamic-programming",
        title: "Longest Palindromic Subsequence",
        difficulty: "Medium",

        description:
            "Find the length of the longest subsequence of a string that is also a palindrome.",

        inputArray: ["bbbab"],

        example:
            "Input: s = \"bbbab\"\nOutput: 4\nOne longest palindromic subsequence is \"bbbb\"",

        explanation:
            "dp[i][j] represents the longest palindromic subsequence between indices i and j. If both characters are equal, extend the inner palindrome by 2. Otherwise, take the maximum by excluding either the left or right character.",

        javaCode: `static int longestPalindromicSubsequence(
        String s) {

    int n = s.length();

    int[][] dp =
            new int[n][n];

    // Every single character
    // is a palindrome
    for (int i = 0;
         i < n;
         i++) {

        dp[i][i] = 1;
    }

    // Length from 2 to n
    for (int length = 2;
         length <= n;
         length++) {

        for (int i = 0;
             i <= n - length;
             i++) {

            int j =
                    i + length - 1;

            if (s.charAt(i)
                    == s.charAt(j)) {

                if (length == 2) {

                    dp[i][j] = 2;

                } else {

                    dp[i][j] =
                            2
                            + dp[i + 1][j - 1];
                }

            } else {

                dp[i][j] =
                        Math.max(
                                dp[i + 1][j],
                                dp[i][j - 1]
                        );
            }
        }
    }

    return dp[0][n - 1];
}`,

        pseudoCode: `LONGEST_PALINDROMIC_SUBSEQUENCE(s)

create dp[n][n]

for every i
    dp[i][i] = 1

for length = 2 to n

    for each starting index i

        j = i + length - 1

        if s[i] == s[j]

            if length == 2
                dp[i][j] = 2
            else
                dp[i][j] =
                    2 + dp[i + 1][j - 1]

        else

            dp[i][j] =
                max(
                    dp[i + 1][j],
                    dp[i][j - 1]
                )

return dp[0][n - 1]`,

        timeComplexity: "O(n²)",

        spaceComplexity: "O(n²)"
    }
];