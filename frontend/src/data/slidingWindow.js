export const slidingWindowQuestions = [

    {
        id: 31,
        module: "sliding-window",
        title: "Maximum Sum Subarray of Size K",
        difficulty: "Easy",

        description:
            "Find the maximum sum of any contiguous subarray of size K.",

        inputArray: [2, 1, 5, 1, 3, 2],

        example: {
            input: "Array = [2, 1, 5, 1, 3, 2], K = 3",
            output: "Maximum Sum: 9"
        },

        explanation: `Use a sliding window of size K.

First calculate the sum of the first K elements.

Then move the window one position at a time.

When the window moves:
- Add the new element entering the window.
- Remove the old element leaving the window.

Keep track of the maximum window sum.`,

        javaCode: `public class Main {

    static void maximumSumSubarray(int[] arr, int k) {

        int windowSum = 0;
        int maxSum = Integer.MIN_VALUE;

        for (int i = 0; i < arr.length; i++) {

            windowSum += arr[i];

            if (i >= k - 1) {

                maxSum = Math.max(maxSum, windowSum);

                windowSum -= arr[i - k + 1];
            }
        }

        System.out.println("Maximum Sum: " + maxSum);
    }

    public static void main(String[] args) {

        int[] arr = {2, 1, 5, 1, 3, 2};

        maximumSumSubarray(arr, 3);
    }
}`,

        pseudoCode: `START

windowSum = 0
maxSum = -infinity

FOR each element in array

    windowSum = windowSum + element

    IF window size == K

        maxSum = maximum(maxSum, windowSum)

        Remove first element of window

PRINT maxSum

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    {
        id: 32,
        module: "sliding-window",
        title: "Minimum Sum Subarray of Size K",
        difficulty: "Easy",

        description:
            "Find the minimum sum of any contiguous subarray of size K.",

        inputArray: [2, 1, 5, 1, 3, 2],

        example: {
            input: "Array = [2, 1, 5, 1, 3, 2], K = 3",
            output: "Minimum Sum: 6"
        },

        explanation: `Maintain a sliding window of size K.

Calculate the sum of the first K elements.

Then move the window through the array.

For every new window, remove the element leaving the window and add the new element.

Keep track of the minimum sum.`,

        javaCode: `public class Main {

    static void minimumSumSubarray(int[] arr, int k) {

        int windowSum = 0;
        int minSum = Integer.MAX_VALUE;

        for (int i = 0; i < arr.length; i++) {

            windowSum += arr[i];

            if (i >= k - 1) {

                minSum = Math.min(minSum, windowSum);

                windowSum -= arr[i - k + 1];
            }
        }

        System.out.println("Minimum Sum: " + minSum);
    }

    public static void main(String[] args) {

        int[] arr = {2, 1, 5, 1, 3, 2};

        minimumSumSubarray(arr, 3);
    }
}`,

        pseudoCode: `START

windowSum = 0
minSum = +infinity

FOR each element in array

    windowSum = windowSum + element

    IF window size == K

        minSum = minimum(minSum, windowSum)

        Remove first element of window

PRINT minSum

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    {
        id: 33,
        module: "sliding-window",
        title: "Average of Every Subarray of Size K",
        difficulty: "Easy",

        description:
            "Find the average of every contiguous subarray of size K.",

        inputArray: [1, 3, 2, 6, -1, 4, 1, 8, 2],

        example: {
            input: "Array = [1, 3, 2, 6, -1, 4, 1, 8, 2], K = 5",
            output: "Averages: 2.2 2.8 2.4 3.6 2.8"
        },

        explanation: `Maintain the sum of the current window.

When the window reaches size K, calculate:

average = windowSum / K

Then remove the first element from the current window before moving forward.`,

        javaCode: `public class Main {

    static void averageOfSubarrays(int[] arr, int k) {

        int windowSum = 0;

        for (int i = 0; i < arr.length; i++) {

            windowSum += arr[i];

            if (i >= k - 1) {

                double average = (double) windowSum / k;

                System.out.print(average + " ");

                windowSum -= arr[i - k + 1];
            }
        }
    }

    public static void main(String[] args) {

        int[] arr = {
            1, 3, 2, 6, -1, 4, 1, 8, 2
        };

        averageOfSubarrays(arr, 5);
    }
}`,

        pseudoCode: `START

windowSum = 0

FOR each element

    windowSum = windowSum + element

    IF window size == K

        average = windowSum / K
        PRINT average

        Remove first element

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    {
        id: 34,
        module: "sliding-window",
        title: "Maximum Number of Consecutive 1s",
        difficulty: "Easy",

        description:
            "Find the maximum number of consecutive 1s in a binary array.",

        inputArray: [1, 1, 0, 1, 1, 1, 0, 1],

        example: {
            input: "[1, 1, 0, 1, 1, 1, 0, 1]",
            output: "Maximum Consecutive 1s: 3"
        },

        explanation: `Maintain two variables:

current represents the number of consecutive 1s currently being counted.

maximum stores the largest sequence found so far.

Whenever the current element is 1, increase current.

Whenever the current element is 0, reset current to 0.`,

        javaCode: `public class Main {

    static void maximumConsecutiveOnes(int[] arr) {

        int current = 0;
        int maximum = 0;

        for (int num : arr) {

            if (num == 1) {

                current++;

                maximum = Math.max(
                    maximum,
                    current
                );

            } else {

                current = 0;
            }
        }

        System.out.println(
            "Maximum Consecutive 1s: " + maximum
        );
    }

    public static void main(String[] args) {

        int[] arr = {
            1, 1, 0, 1, 1, 1, 0, 1
        };

        maximumConsecutiveOnes(arr);
    }
}`,

        pseudoCode: `START

current = 0
maximum = 0

FOR each element

    IF element == 1

        current = current + 1

        maximum = maximum of
                  maximum and current

    ELSE

        current = 0

PRINT maximum

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    {
        id: 35,
        module: "sliding-window",
        title: "Longest Subarray With Sum At Most K",
        difficulty: "Medium",

        description:
            "Find the longest contiguous subarray whose sum is less than or equal to K.",

        inputArray: [1, 2, 1, 0, 1, 1, 0],

        example: {
            input: "Array = [1, 2, 1, 0, 1, 1, 0], K = 4",
            output: "Longest Length: 5"
        },

        explanation: `Use two pointers: left and right.

Expand the window by moving right.

Add the current element to sum.

If sum becomes greater than K, shrink the window from the left until the sum becomes valid again.

For every valid window, calculate its length and update the maximum length.

This approach assumes all numbers are non-negative.`,

        javaCode: `public class Main {

    static void longestSubarraySumAtMostK(
            int[] arr, int k) {

        int left = 0;
        int sum = 0;
        int maxLength = 0;

        for (int right = 0;
             right < arr.length;
             right++) {

            sum += arr[right];

            while (sum > k) {

                sum -= arr[left];

                left++;
            }

            int length = right - left + 1;

            maxLength = Math.max(
                maxLength,
                length
            );
        }

        System.out.println(
            "Longest Subarray Length: "
            + maxLength
        );
    }

    public static void main(String[] args) {

        int[] arr = {
            1, 2, 1, 0, 1, 1, 0
        };

        longestSubarraySumAtMostK(arr, 4);
    }
}`,

        pseudoCode: `START

left = 0
sum = 0
maxLength = 0

FOR right from 0 to n - 1

    sum = sum + array[right]

    WHILE sum > K

        sum = sum - array[left]
        left++

    length = right - left + 1

    maxLength = maximum(
        maxLength,
        length
    )

PRINT maxLength

END

NOTE:
All numbers must be non-negative.`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    {
        id: 36,
        module: "sliding-window",
        title: "Smallest Subarray With Sum At Least K",
        difficulty: "Medium",

        description:
            "Find the length of the smallest contiguous subarray whose sum is greater than or equal to K.",

        inputArray: [2, 1, 5, 2, 3, 2],

        example: {
            input: "Array = [2, 1, 5, 2, 3, 2], K = 7",
            output: "Smallest Length: 2"
        },

        explanation: `Use a sliding window with two pointers.

Expand the window by moving right and add elements to sum.

When sum becomes greater than or equal to K, the current window is valid.

Try to shrink the window from the left while keeping the sum greater than or equal to K.

Keep the smallest window length found.

This approach assumes all numbers are positive.`,

        javaCode: `public class Main {

    static void smallestSubarraySumAtLeastK(
            int[] arr, int k) {

        int left = 0;
        int sum = 0;

        int minLength = Integer.MAX_VALUE;

        for (int right = 0;
             right < arr.length;
             right++) {

            sum += arr[right];

            while (sum >= k) {

                int length =
                    right - left + 1;

                minLength = Math.min(
                    minLength,
                    length
                );

                sum -= arr[left];

                left++;
            }
        }

        if (minLength == Integer.MAX_VALUE) {
            minLength = 0;
        }

        System.out.println(
            "Smallest Subarray Length: "
            + minLength
        );
    }

    public static void main(String[] args) {

        int[] arr = {
            2, 1, 5, 2, 3, 2
        };

        smallestSubarraySumAtLeastK(arr, 7);
    }
}`,

        pseudoCode: `START

left = 0
sum = 0
minLength = infinity

FOR right from 0 to n - 1

    sum = sum + array[right]

    WHILE sum >= K

        length = right - left + 1

        minLength = minimum(
            minLength,
            length
        )

        sum = sum - array[left]

        left++

IF minLength == infinity

    minLength = 0

PRINT minLength

END

NOTE:
All numbers must be positive.`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    {
        id: 37,
        module: "sliding-window",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",

        description:
            "Find the longest substring that contains no repeated characters.",

        inputString: "abcabcbb",

        example: {
            input: "\"abcabcbb\"",
            output: "Longest: abc | Length: 3"
        },

        explanation: `Use a sliding window and a HashSet.

The Set stores characters currently inside the window.

Move right to expand the window.

If the current character already exists in the Set, remove characters from the left until the duplicate is removed.

Then add the current character.

Track the longest valid window.`,

        javaCode: `import java.util.*;

public class Main {

    static void longestSubstringWithoutRepeating(
            String str) {

        Set<Character> set =
            new HashSet<>();

        int left = 0;
        int maxLength = 0;
        String longest = "";

        for (int right = 0;
             right < str.length();
             right++) {

            char ch = str.charAt(right);

            while (set.contains(ch)) {

                set.remove(
                    str.charAt(left)
                );

                left++;
            }

            set.add(ch);

            int length =
                right - left + 1;

            if (length > maxLength) {

                maxLength = length;

                longest =
                    str.substring(
                        left,
                        right + 1
                    );
            }
        }

        System.out.println(
            "Longest: " + longest
            + " | Length: " + maxLength
        );
    }

    public static void main(String[] args) {

        String str = "abcabcbb";

        longestSubstringWithoutRepeating(str);
    }
}`,

        pseudoCode: `START

Create empty Set

left = 0
maxLength = 0

FOR right from 0 to string length - 1

    character = string[right]

    WHILE character exists in Set

        Remove string[left]
        left++

    Add character to Set

    length = right - left + 1

    Update maxLength

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    {
        id: 38,
        module: "sliding-window",
        title: "Longest Substring With At Most K Distinct Characters",
        difficulty: "Medium",

        description:
            "Find the longest substring containing at most K distinct characters.",

        inputString: "araaci",

        example: {
            input: "String = \"araaci\", K = 2",
            output: "Longest: araa | Length: 4"
        },

        explanation: `Use a sliding window and a HashMap.

The HashMap stores each character and its frequency inside the current window.

Expand the window using right.

If the number of distinct characters becomes greater than K, shrink the window from the left.

Remove a character from the map when its frequency becomes zero.

Track the longest valid window.`,

        javaCode: `import java.util.*;

public class Main {

    static void longestSubstringKDistinct(
            String str, int k) {

        Map<Character, Integer> map =
            new HashMap<>();

        int left = 0;
        int maxLength = 0;
        String longest = "";

        for (int right = 0;
             right < str.length();
             right++) {

            char ch = str.charAt(right);

            map.put(
                ch,
                map.getOrDefault(ch, 0) + 1
            );

            while (map.size() > k) {

                char leftChar =
                    str.charAt(left);

                map.put(
                    leftChar,
                    map.get(leftChar) - 1
                );

                if (map.get(leftChar) == 0) {
                    map.remove(leftChar);
                }

                left++;
            }

            int length =
                right - left + 1;

            if (length > maxLength) {

                maxLength = length;

                longest =
                    str.substring(
                        left,
                        right + 1
                    );
            }
        }

        System.out.println(
            "Longest: " + longest
            + " | Length: " + maxLength
        );
    }

    public static void main(String[] args) {

        String str = "araaci";

        longestSubstringKDistinct(str, 2);
    }
}`,

        pseudoCode: `START

Create HashMap

left = 0
maxLength = 0

FOR right from 0 to n - 1

    Add string[right] to map
    Increase its frequency

    WHILE number of distinct characters > K

        Decrease frequency of string[left]

        IF frequency becomes 0

            Remove character

        left++

    length = right - left + 1

    Update maxLength

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(k)"
    },


    {
        id: 39,
        module: "sliding-window",
        title: "Maximum Number of Vowels in Substring of Size K",
        difficulty: "Easy",

        description:
            "Find the maximum number of vowels present in any substring of size K.",

        inputString: "abciiidef",

        example: {
            input: "String = \"abciiidef\", K = 3",
            output: "Maximum Vowels: 3"
        },

        explanation: `Maintain a sliding window of size K.

Whenever a new character enters the window, check whether it is a vowel.

When the window moves forward, remove the character leaving the window.

Keep track of the maximum vowel count.`,

        javaCode: `public class Main {

    static void maximumVowels(
            String str, int k) {

        int vowelCount = 0;
        int maxVowels = 0;

        for (int i = 0;
             i < str.length();
             i++) {

            char ch =
                Character.toLowerCase(
                    str.charAt(i)
                );

            if (isVowel(ch)) {
                vowelCount++;
            }

            if (i >= k) {

                char oldChar =
                    Character.toLowerCase(
                        str.charAt(i - k)
                    );

                if (isVowel(oldChar)) {
                    vowelCount--;
                }
            }

            if (i >= k - 1) {

                maxVowels =
                    Math.max(
                        maxVowels,
                        vowelCount
                    );
            }
        }

        System.out.println(
            "Maximum Vowels: " + maxVowels
        );
    }

    static boolean isVowel(char ch) {

        return ch == 'a'
            || ch == 'e'
            || ch == 'i'
            || ch == 'o'
            || ch == 'u';
    }

    public static void main(String[] args) {

        String str = "abciiidef";

        maximumVowels(str, 3);
    }
}`,

        pseudoCode: `START

vowelCount = 0
maxVowels = 0

FOR each character

    IF character is vowel

        vowelCount++

    IF window size > K

        Check character leaving window

        IF it is vowel

            vowelCount--

    IF window size == K

        maxVowels =
        maximum(maxVowels, vowelCount)

PRINT maxVowels

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    {
        id: 40,
        module: "sliding-window",
        title: "Minimum Window Substring",
        difficulty: "Hard",

        description:
            "Find the smallest substring of a string that contains all characters of a target string.",

        inputString: "ADOBECODEBANC",

        targetString: "ABC",

        example: {
            input: "String = \"ADOBECODEBANC\", Target = \"ABC\"",
            output: "Minimum Window: BANC"
        },

        explanation: `Use a sliding window with two pointers.

First count how many times every character is required in the target.

Expand the window using right.

When the current window contains all required characters with the required frequencies, try to shrink the window from the left.

Whenever a smaller valid window is found, store it.

At the end, return the smallest valid window.`,

        javaCode: `import java.util.*;

public class Main {

    static void minimumWindowSubstring(
            String str,
            String target) {

        Map<Character, Integer> required =
            new HashMap<>();

        for (char ch : target.toCharArray()) {

            required.put(
                ch,
                required.getOrDefault(ch, 0) + 1
            );
        }

        Map<Character, Integer> window =
            new HashMap<>();

        int left = 0;
        int formed = 0;

        int minLength =
            Integer.MAX_VALUE;

        int startIndex = 0;

        for (int right = 0;
             right < str.length();
             right++) {

            char ch =
                str.charAt(right);

            window.put(
                ch,
                window.getOrDefault(ch, 0) + 1
            );

            if (required.containsKey(ch)
                    && window.get(ch)
                    .intValue()
                    == required.get(ch)
                    .intValue()) {

                formed++;
            }

            while (formed == required.size()) {

                int length =
                    right - left + 1;

                if (length < minLength) {

                    minLength = length;
                    startIndex = left;
                }

                char leftChar =
                    str.charAt(left);

                window.put(
                    leftChar,
                    window.get(leftChar) - 1
                );

                if (required.containsKey(leftChar)
                        && window.get(leftChar)
                        < required.get(leftChar)) {

                    formed--;
                }

                left++;
            }
        }

        if (minLength ==
                Integer.MAX_VALUE) {

            System.out.println(
                "Minimum Window: Not Found"
            );

        } else {

            String result =
                str.substring(
                    startIndex,
                    startIndex + minLength
                );

            System.out.println(
                "Minimum Window: " + result
            );
        }
    }

    public static void main(String[] args) {

        String str =
            "ADOBECODEBANC";

        String target = "ABC";

        minimumWindowSubstring(
            str,
            target
        );
    }
}`,

        pseudoCode: `START

Create required character frequency map

Create window frequency map

left = 0
formed = 0
minLength = infinity
startIndex = 0

FOR right from 0 to string length - 1

    Add string[right] to window

    IF required frequency is satisfied

        formed++

    WHILE all required characters are present

        Calculate current window length

        IF current length < minLength

            Save current window

        Remove string[left] from window

        IF required character is no longer satisfied

            formed--

        left++

IF no valid window exists

    PRINT Not Found

ELSE

    PRINT minimum window

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    }

];