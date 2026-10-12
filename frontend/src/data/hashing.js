
export const hashingQuestions = [

    // =========================================================
    // 41. TWO SUM USING HASHING
    // =========================================================

    {
        id: 41,
        module: "hashing",
        title: "Two Sum Using Hashing",
        difficulty: "Easy",

        description:
            "Find two indices whose elements add up to the given target.",

        inputArray: [2, 7, 11, 15],

        example: {
            input: "Array = [2, 7, 11, 15], Target = 9",
            output: "Indices: [0, 1]"
        },

        explanation: `Use a HashMap to store each number and its index.

For every element:
- Calculate its complement: target - current element.
- Check whether the complement already exists in the HashMap.
- If it exists, we found the two required indices.
- Otherwise, store the current number and its index.

For example:

2 -> complement = 7
7 -> complement = 2

When we reach 7, 2 already exists in the HashMap.
Therefore, the answer is [0, 1].`,

        javaCode: `import java.util.HashMap;

public class Main {

    public static int[] twoSum(int[] nums, int target) {

        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {

            int complement = target - nums[i];

            if (map.containsKey(complement)) {

                return new int[] {
                    map.get(complement),
                    i
                };
            }

            map.put(nums[i], i);
        }

        return new int[] {-1, -1};
    }

    public static void main(String[] args) {

        int[] nums = {2, 7, 11, 15};

        int target = 9;

        int[] result = twoSum(nums, target);

        System.out.println(
            "Indices: [" + result[0] + ", " + result[1] + "]"
        );
    }
}`,

        pseudoCode: `START

Create an empty HashMap

FOR each element in array

    complement = target - current element

    IF complement exists in HashMap

        RETURN stored index and current index

    ELSE

        Store current element and its index

END FOR

RETURN [-1, -1]

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 42. FREQUENCY OF ELEMENTS
    // =========================================================

    {
        id: 42,
        module: "hashing",
        title: "Frequency of Elements in an Array",
        difficulty: "Easy",

        description:
            "Count how many times each element appears in an array using HashMap.",

        inputArray: [1, 2, 2, 3, 3, 3],

        example: {
            input: "Array = [1, 2, 2, 3, 3, 3]",
            output: "{1=1, 2=2, 3=3}"
        },

        explanation: `Use a HashMap where:

Key   = Array element
Value = Frequency of that element

For every element:
- If the element already exists, increase its frequency by 1.
- Otherwise, insert it with frequency 1.

For example:

1 -> 1
2 -> 2
3 -> 3

Therefore:

{1=1, 2=2, 3=3}`,

        javaCode: `import java.util.HashMap;

public class Main {

    public static HashMap<Integer, Integer>
    frequency(int[] nums) {

        HashMap<Integer, Integer> map =
            new HashMap<>();

        for (int num : nums) {

            if (map.containsKey(num)) {

                map.put(
                    num,
                    map.get(num) + 1
                );

            } else {

                map.put(num, 1);
            }
        }

        return map;
    }

    public static void main(String[] args) {

        int[] nums = {1, 2, 2, 3, 3, 3};

        HashMap<Integer, Integer> result =
            frequency(nums);

        System.out.println(
            "Frequency: " + result
        );
    }
}`,

        pseudoCode: `START

Create an empty HashMap

FOR each element in array

    IF element exists in HashMap

        Increase its frequency by 1

    ELSE

        Store element with frequency 1

END FOR

PRINT HashMap

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 43. FIRST NON-REPEATING ELEMENT
    // =========================================================

    {
        id: 43,
        module: "hashing",
        title: "First Non-Repeating Element",
        difficulty: "Easy",

        description:
            "Find the first element in an array that appears only once.",

        inputArray: [4, 5, 1, 2, 1, 4, 5],

        example: {
            input: "Array = [4, 5, 1, 2, 1, 4, 5]",
            output: "First Non-Repeating Element: 2"
        },

        explanation: `First count the frequency of every element using a HashMap.

Then traverse the array again.

The first element whose frequency is 1 is the first non-repeating element.

For this array:

4 -> 2
5 -> 2
1 -> 2
2 -> 1

Therefore, the answer is 2.`,

        javaCode: `import java.util.HashMap;

public class Main {

    public static int firstNonRepeating(int[] nums) {

        HashMap<Integer, Integer> map =
            new HashMap<>();

        for (int num : nums) {

            map.put(
                num,
                map.getOrDefault(num, 0) + 1
            );
        }

        for (int num : nums) {

            if (map.get(num) == 1) {

                return num;
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        int[] nums = {
            4, 5, 1, 2, 1, 4, 5
        };

        System.out.println(
            "First Non-Repeating Element: "
            + firstNonRepeating(nums)
        );
    }
}`,

        pseudoCode: `START

Create HashMap

FOR each element

    Store frequency of element

END FOR

FOR each element

    IF frequency of element == 1

        RETURN element

END FOR

RETURN -1

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 44. FIRST REPEATING ELEMENT
    // =========================================================

    {
        id: 44,
        module: "hashing",
        title: "First Repeating Element",
        difficulty: "Easy",

        description:
            "Find the first element that appears more than once in an array.",

        inputArray: [10, 5, 3, 4, 3, 5, 6],

        example: {
            input: "Array = [10, 5, 3, 4, 3, 5, 6]",
            output: "First Repeating Element: 3"
        },

        explanation: `Use a HashSet to keep track of elements already seen.

Traverse the array from left to right.

If an element already exists in the HashSet, it is the first repeating element.

Otherwise, add it to the HashSet.

For example:

10 -> add
5  -> add
3  -> add
4  -> add
3  -> already exists

Therefore, the answer is 3.`,

        javaCode: `import java.util.HashSet;

public class Main {

    public static int firstRepeating(int[] nums) {

        HashSet<Integer> set =
            new HashSet<>();

        for (int num : nums) {

            if (set.contains(num)) {

                return num;
            }

            set.add(num);
        }

        return -1;
    }

    public static void main(String[] args) {

        int[] nums = {
            10, 5, 3, 4, 3, 5, 6
        };

        System.out.println(
            "First Repeating Element: "
            + firstRepeating(nums)
        );
    }
}`,

        pseudoCode: `START

Create empty HashSet

FOR each element

    IF element exists in HashSet

        RETURN element

    ELSE

        Add element to HashSet

END FOR

RETURN -1

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 45. CHECK DUPLICATES
    // =========================================================

    {
        id: 45,
        module: "hashing",
        title: "Check If Array Contains Duplicate",
        difficulty: "Easy",

        description:
            "Check whether an array contains any duplicate element.",

        inputArray: [1, 2, 3, 1],

        example: {
            input: "Array = [1, 2, 3, 1]",
            output: "Contains Duplicate: true"
        },

        explanation: `Use a HashSet.

Traverse the array:
- If the element already exists in the HashSet, a duplicate exists.
- Otherwise, add the element to the HashSet.

In this example, 1 appears again.

Therefore, the array contains a duplicate.`,

        javaCode: `import java.util.HashSet;

public class Main {

    public static boolean containsDuplicate(int[] nums) {

        HashSet<Integer> set =
            new HashSet<>();

        for (int num : nums) {

            if (set.contains(num)) {

                return true;
            }

            set.add(num);
        }

        return false;
    }

    public static void main(String[] args) {

        int[] nums = {1, 2, 3, 1};

        System.out.println(
            "Contains Duplicate: "
            + containsDuplicate(nums)
        );
    }
}`,

        pseudoCode: `START

Create empty HashSet

FOR each element

    IF element exists in HashSet

        RETURN true

    Add element to HashSet

END FOR

RETURN false

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 46. INTERSECTION OF TWO ARRAYS
    // =========================================================

    {
        id: 46,
        module: "hashing",
        title: "Intersection of Two Arrays",
        difficulty: "Easy",

        description:
            "Find the common elements between two arrays using hashing.",

        inputArray: [1, 2, 2, 1],

        example: {
            input: "Array1 = [1, 2, 2, 1], Array2 = [2, 2]",
            output: "Intersection: [2]"
        },

        explanation: `Store elements of the first array in a HashSet.

Then traverse the second array.

If an element exists in the HashSet, it is common to both arrays.

Another HashSet can be used for the result so duplicate values are not added multiple times.`,

        javaCode: `import java.util.HashSet;

public class Main {

    public static HashSet<Integer>
    intersection(int[] nums1, int[] nums2) {

        HashSet<Integer> set =
            new HashSet<>();

        HashSet<Integer> result =
            new HashSet<>();

        for (int num : nums1) {

            set.add(num);
        }

        for (int num : nums2) {

            if (set.contains(num)) {

                result.add(num);
            }
        }

        return result;
    }

    public static void main(String[] args) {

        int[] nums1 = {1, 2, 2, 1};

        int[] nums2 = {2, 2};

        System.out.println(
            "Intersection: "
            + intersection(nums1, nums2)
        );
    }
}`,

        pseudoCode: `START

Create HashSet

FOR each element in first array

    Add element to HashSet

END FOR

Create result HashSet

FOR each element in second array

    IF element exists in first HashSet

        Add element to result

END FOR

PRINT result

END`,

        timeComplexity: "O(n + m)",
        spaceComplexity: "O(n + m)"
    },


    // =========================================================
    // 47. UNION OF TWO ARRAYS
    // =========================================================

    {
        id: 47,
        module: "hashing",
        title: "Union of Two Arrays",
        difficulty: "Easy",

        description:
            "Find all unique elements present in either of two arrays.",

        inputArray: [1, 2, 2, 3],

        example: {
            input: "Array1 = [1, 2, 2, 3], Array2 = [2, 3, 4]",
            output: "Union: [1, 2, 3, 4]"
        },

        explanation: `Use a HashSet because a HashSet stores only unique elements.

Add every element from the first array.

Then add every element from the second array.

Duplicate values are automatically ignored.

Therefore, the final HashSet contains the union of both arrays.`,

        javaCode: `import java.util.HashSet;

public class Main {

    public static HashSet<Integer>
    union(int[] nums1, int[] nums2) {

        HashSet<Integer> set =
            new HashSet<>();

        for (int num : nums1) {

            set.add(num);
        }

        for (int num : nums2) {

            set.add(num);
        }

        return set;
    }

    public static void main(String[] args) {

        int[] nums1 = {1, 2, 2, 3};

        int[] nums2 = {2, 3, 4};

        System.out.println(
            "Union: "
            + union(nums1, nums2)
        );
    }
}`,

        pseudoCode: `START

Create empty HashSet

FOR each element in first array

    Add element

END FOR

FOR each element in second array

    Add element

END FOR

PRINT HashSet

END`,

        timeComplexity: "O(n + m)",
        spaceComplexity: "O(n + m)"
    },


    // =========================================================
    // 48. MAJORITY ELEMENT
    // =========================================================

    {
        id: 48,
        module: "hashing",
        title: "Find Majority Element Using Hashing",
        difficulty: "Easy",

        description:
            "Find the element that appears more than n/2 times in an array.",

        inputArray: [2, 2, 1, 1, 1, 2, 2],

        example: {
            input: "Array = [2, 2, 1, 1, 1, 2, 2]",
            output: "Majority Element: 2"
        },

        explanation: `Count the frequency of every element using a HashMap.

After calculating the frequency, check which element has a frequency greater than n / 2.

For this array:

2 -> 4 times
1 -> 3 times

Array length = 7

n / 2 = 3

2 appears 4 times, so 2 is the majority element.`,

        javaCode: `import java.util.HashMap;

public class Main {

    public static int majorityElement(int[] nums) {

        HashMap<Integer, Integer> map =
            new HashMap<>();

        for (int num : nums) {

            map.put(
                num,
                map.getOrDefault(num, 0) + 1
            );
        }

        for (int num : map.keySet()) {

            if (map.get(num) > nums.length / 2) {

                return num;
            }
        }

        return -1;
    }

    public static void main(String[] args) {

        int[] nums = {
            2, 2, 1, 1, 1, 2, 2
        };

        System.out.println(
            "Majority Element: "
            + majorityElement(nums)
        );
    }
}`,

        pseudoCode: `START

Create HashMap

FOR each element

    Increase frequency of element

END FOR

FOR each element in HashMap

    IF frequency > n / 2

        RETURN element

END FOR

RETURN -1

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 49. SUBARRAY WITH SUM ZERO
    // =========================================================

    {
        id: 49,
        module: "hashing",
        title: "Check Subarray With Zero Sum",
        difficulty: "Medium",

        description:
            "Check whether an array contains a contiguous subarray whose sum is zero.",

        inputArray: [4, 2, -3, 1, 6],

        example: {
            input: "Array = [4, 2, -3, 1, 6]",
            output: "Zero Sum Subarray Exists: true"
        },

        explanation: `Use a HashSet to store prefix sums.

Calculate the running sum.

If the same prefix sum appears again, the elements between those two positions have sum zero.

Also, if the running sum itself becomes zero, a zero-sum subarray exists from the beginning.`,

        javaCode: `import java.util.HashSet;

public class Main {

    public static boolean hasZeroSumSubarray(int[] nums) {

        HashSet<Integer> set =
            new HashSet<>();

        int sum = 0;

        for (int num : nums) {

            sum += num;

            if (sum == 0 || set.contains(sum)) {

                return true;
            }

            set.add(sum);
        }

        return false;
    }

    public static void main(String[] args) {

        int[] nums = {
            4, 2, -3, 1, 6
        };

        System.out.println(
            "Zero Sum Subarray Exists: "
            + hasZeroSumSubarray(nums)
        );
    }
}`,

        pseudoCode: `START

Create empty HashSet

sum = 0

FOR each element

    sum = sum + element

    IF sum == 0

        RETURN true

    IF sum exists in HashSet

        RETURN true

    Add sum to HashSet

END FOR

RETURN false

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 50. COUNT SUBARRAYS WITH ZERO SUM
    // =========================================================

    {
        id: 50,
        module: "hashing",
        title: "Count Subarrays With Zero Sum",
        difficulty: "Medium",

        description:
            "Count the number of contiguous subarrays whose sum is zero.",

        inputArray: [1, -1, 2, -2, 3],

        example: {
            input: "Array = [1, -1, 2, -2, 3]",
            output: "Count: 2"
        },

        explanation: `Use prefix sums and a HashMap.

The HashMap stores:

prefix sum -> number of times it has appeared

When the same prefix sum appears again, the elements between the two positions have sum zero.

For every repeated prefix sum, add its previous frequency to the answer.`,

        javaCode: `import java.util.HashMap;

public class Main {

    public static int countZeroSumSubarrays(int[] nums) {

        HashMap<Integer, Integer> map =
            new HashMap<>();

        map.put(0, 1);

        int sum = 0;
        int count = 0;

        for (int num : nums) {

            sum += num;

            if (map.containsKey(sum)) {

                count += map.get(sum);
            }

            map.put(
                sum,
                map.getOrDefault(sum, 0) + 1
            );
        }

        return count;
    }

    public static void main(String[] args) {

        int[] nums = {
            1, -1, 2, -2, 3
        };

        System.out.println(
            "Zero Sum Subarrays: "
            + countZeroSumSubarrays(nums)
        );
    }
}`,

        pseudoCode: `START

Create HashMap

Store prefix sum 0 with frequency 1

sum = 0
count = 0

FOR each element

    sum = sum + element

    IF sum exists in HashMap

        count = count + frequency of sum

    Increase frequency of sum

END FOR

PRINT count

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    }

];

