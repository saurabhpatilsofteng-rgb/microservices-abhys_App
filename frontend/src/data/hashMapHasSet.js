
export const hashMapHashSetQuestions = [

    // =========================================================
    // 51. FIND DUPLICATE ELEMENTS
    // =========================================================

    {
        id: 51,
        module: "hashmap-hashset",
        title: "Find Duplicate Elements",
        difficulty: "Easy",

        description:
            "Find all duplicate elements in an array using HashSet.",

        inputArray: [10, 20, 30, 20, 40, 10, 50],

        example: {
            input: "Array = [10, 20, 30, 20, 40, 10, 50]",
            output: "Duplicate Elements: 20 10"
        },

        explanation: `Use a HashSet to keep track of elements that have already appeared.

For every element:
- Try to add the element to the HashSet.
- If add() returns true, the element is appearing for the first time.
- If add() returns false, the element already exists and is a duplicate.

For example:

10 -> first occurrence
20 -> first occurrence
30 -> first occurrence
20 -> duplicate
40 -> first occurrence
10 -> duplicate

Therefore, the duplicate elements are 20 and 10.`,

        javaCode: `import java.util.HashSet;
import java.util.Set;

public class Main {

    static void findDuplicates(int[] arr) {

        Set<Integer> set =
                new HashSet<>();

        System.out.print(
                "Duplicate Elements: "
        );

        for (int num : arr) {

            if (!set.add(num)) {

                System.out.print(
                        num + " "
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

Create empty HashSet

FOR each element in array

    IF element cannot be added to HashSet

        PRINT element as duplicate

    ELSE

        Add element to HashSet

END FOR

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 52. FREQUENCY OF ELEMENTS
    // =========================================================

    {
        id: 52,
        module: "hashmap-hashset",
        title: "Find Frequency of Elements",
        difficulty: "Easy",

        description:
            "Count the frequency of every element in an array using HashMap.",

        inputArray: [10, 20, 10, 30, 20, 10],

        example: {
            input: "Array = [10, 20, 10, 30, 20, 10]",
            output: "Frequency: {10=3, 20=2, 30=1}"
        },

        explanation: `Use a HashMap.

The key represents the array element.

The value represents how many times that element appears.

For every number:

map.put(
    number,
    map.getOrDefault(number, 0) + 1
);

For this array:

10 -> 3
20 -> 2
30 -> 1

Therefore:

{10=3, 20=2, 30=1}`,

        javaCode: `import java.util.HashMap;
import java.util.Map;

public class Main {

    static void findFrequency(int[] arr) {

        Map<Integer, Integer> map =
                new HashMap<>();

        for (int num : arr) {

            map.put(
                    num,
                    map.getOrDefault(num, 0) + 1
            );
        }

        System.out.println(
                "Frequency: " + map
        );
    }

    public static void main(String[] args) {

        int[] arr = {
                10, 20, 10, 30, 20, 10
        };

        findFrequency(arr);
    }
}`,

        pseudoCode: `START

Create empty HashMap

FOR each element

    IF element exists

        Increase its frequency

    ELSE

        Store element with frequency 1

END FOR

PRINT HashMap

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 53. TWO SUM
    // =========================================================

    {
        id: 53,
        module: "hashmap-hashset",
        title: "Two Sum Using HashMap",
        difficulty: "Easy",

        description:
            "Find two indices whose values add up to the given target using HashMap.",

        inputArray: [2, 7, 11, 15],

        example: {
            input: "Array = [2, 7, 11, 15], Target = 9",
            output: "Two Sum: 0 + 1 = 9"
        },

        explanation: `Use a HashMap to store:

element -> index

For every element calculate:

complement = target - current element

Then check whether the complement already exists in the HashMap.

For example:

Current = 2
Complement = 9 - 2 = 7

7 is not present.

Store:

2 -> 0

Next:

Current = 7
Complement = 9 - 7 = 2

2 already exists at index 0.

Therefore:

0 + 1 = 9`,

        javaCode: `import java.util.HashMap;
import java.util.Map;

public class Main {

    static void twoSum(
            int[] arr,
            int target) {

        Map<Integer, Integer> map =
                new HashMap<>();

        for (int i = 0;
             i < arr.length;
             i++) {

            int complement =
                    target - arr[i];

            if (map.containsKey(complement)) {

                System.out.println(
                        "Two Sum: "
                        + map.get(complement)
                        + " + "
                        + i
                        + " = "
                        + target
                );

                return;
            }

            map.put(arr[i], i);
        }

        System.out.println(
                "No Two Sum Pair Found"
        );
    }

    public static void main(String[] args) {

        int[] arr = {
                2, 7, 11, 15
        };

        twoSum(arr, 9);
    }
}`,

        pseudoCode: `START

Create empty HashMap

FOR each element

    complement = target - element

    IF complement exists in HashMap

        RETURN stored index and current index

    Store element and its index

END FOR

PRINT no pair found

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 54. FIRST NON-REPEATING ELEMENT
    // =========================================================

    {
        id: 54,
        module: "hashmap-hashset",
        title: "First Non-Repeating Element",
        difficulty: "Easy",

        description:
            "Find the first element that appears exactly once in an array.",

        inputArray: [4, 5, 1, 2, 1, 4, 5],

        example: {
            input: "Array = [4, 5, 1, 2, 1, 4, 5]",
            output: "First Non-Repeating Element: 2"
        },

        explanation: `First calculate the frequency of every element using a HashMap.

Then traverse the original array again.

The first element whose frequency is 1 is the first non-repeating element.

Frequencies:

4 -> 2
5 -> 2
1 -> 2
2 -> 1

Therefore, 2 is the first non-repeating element.`,

        javaCode: `import java.util.HashMap;
import java.util.Map;

public class Main {

    static void firstNonRepeating(int[] arr) {

        Map<Integer, Integer> map =
                new HashMap<>();

        for (int num : arr) {

            map.put(
                    num,
                    map.getOrDefault(num, 0) + 1
            );
        }

        for (int num : arr) {

            if (map.get(num) == 1) {

                System.out.println(
                        "First Non-Repeating Element: "
                                + num
                );

                return;
            }
        }

        System.out.println(
                "No Non-Repeating Element"
        );
    }

    public static void main(String[] args) {

        int[] arr = {
                4, 5, 1, 2, 1, 4, 5
        };

        firstNonRepeating(arr);
    }
}`,

        pseudoCode: `START

Create HashMap

FOR each element

    Count frequency

END FOR

FOR each element in original array

    IF frequency == 1

        PRINT element

        STOP

END FOR

PRINT no non-repeating element

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 55. INTERSECTION OF TWO ARRAYS
    // =========================================================

    {
        id: 55,
        module: "hashmap-hashset",
        title: "Intersection of Two Arrays",
        difficulty: "Easy",

        description:
            "Find the common unique elements between two arrays using HashSet.",

        inputArray: [1, 2, 3, 4, 5],

        example: {
            input: "Array1 = [1, 2, 3, 4, 5], Array2 = [3, 4, 5, 6, 7]",
            output: "Intersection: [3, 4, 5]"
        },

        explanation: `Store all elements of the first array in a HashSet.

Then traverse the second array.

If an element exists in the first HashSet, it is common to both arrays.

Use a LinkedHashSet for the result so duplicate values are not stored and insertion order is maintained.

Common elements:

3
4
5`,

        javaCode: `import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

public class Main {

    static void intersection(
            int[] arr1,
            int[] arr2) {

        Set<Integer> set1 =
                new HashSet<>();

        Set<Integer> result =
                new LinkedHashSet<>();

        for (int num : arr1) {

            set1.add(num);
        }

        for (int num : arr2) {

            if (set1.contains(num)) {

                result.add(num);
            }
        }

        System.out.println(
                "Intersection: " + result
        );
    }

    public static void main(String[] args) {

        int[] arr1 = {
                1, 2, 3, 4, 5
        };

        int[] arr2 = {
                3, 4, 5, 6, 7
        };

        intersection(arr1, arr2);
    }
}`,

        pseudoCode: `START

Create HashSet

FOR each element in first array

    Add element to HashSet

END FOR

Create result set

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
    // 56. UNION OF TWO ARRAYS
    // =========================================================

    {
        id: 56,
        module: "hashmap-hashset",
        title: "Union of Two Arrays",
        difficulty: "Easy",

        description:
            "Find all unique elements present in either of two arrays.",

        inputArray: [1, 2, 3, 4, 5],

        example: {
            input: "Array1 = [1, 2, 3, 4, 5], Array2 = [3, 4, 5, 6, 7]",
            output: "Union: [1, 2, 3, 4, 5, 6, 7]"
        },

        explanation: `Use a Set because a Set stores only unique elements.

Add all elements from the first array.

Then add all elements from the second array.

If an element is already present, the Set ignores the duplicate.

Therefore:

[1, 2, 3, 4, 5]
+
[3, 4, 5, 6, 7]

gives:

[1, 2, 3, 4, 5, 6, 7]`,

        javaCode: `import java.util.LinkedHashSet;
import java.util.Set;

public class Main {

    static void union(
            int[] arr1,
            int[] arr2) {

        Set<Integer> result =
                new LinkedHashSet<>();

        for (int num : arr1) {

            result.add(num);
        }

        for (int num : arr2) {

            result.add(num);
        }

        System.out.println(
                "Union: " + result
        );
    }

    public static void main(String[] args) {

        int[] arr1 = {
                1, 2, 3, 4, 5
        };

        int[] arr2 = {
                3, 4, 5, 6, 7
        };

        union(arr1, arr2);
    }
}`,

        pseudoCode: `START

Create empty Set

FOR each element in first array

    Add element

END FOR

FOR each element in second array

    Add element

END FOR

PRINT Set

END`,

        timeComplexity: "O(n + m)",
        spaceComplexity: "O(n + m)"
    },


    // =========================================================
    // 57. SAME ELEMENTS
    // =========================================================

    {
        id: 57,
        module: "hashmap-hashset",
        title: "Check Whether Two Arrays Contain Same Elements",
        difficulty: "Easy",

        description:
            "Check whether two arrays contain the same elements with the same frequencies.",

        inputArray: [1, 2, 2, 3],

        example: {
            input: "Array1 = [1, 2, 2, 3], Array2 = [2, 3, 2, 1]",
            output: "Same Elements: true"
        },

        explanation: `First check whether both arrays have the same length.

Then create a frequency map for the first array.

For every element in the second array:
- Check whether it exists.
- Decrease its frequency.
- Remove it when its frequency becomes zero.

If the map becomes empty, both arrays contain the same elements with the same frequencies.`,

        javaCode: `import java.util.HashMap;
import java.util.Map;

public class Main {

    static void sameElements(
            int[] arr1,
            int[] arr2) {

        if (arr1.length != arr2.length) {

            System.out.println(
                    "Same Elements: false"
            );

            return;
        }

        Map<Integer, Integer> map =
                new HashMap<>();

        for (int num : arr1) {

            map.put(
                    num,
                    map.getOrDefault(num, 0) + 1
            );
        }

        for (int num : arr2) {

            if (!map.containsKey(num)) {

                System.out.println(
                        "Same Elements: false"
                );

                return;
            }

            map.put(
                    num,
                    map.get(num) - 1
            );

            if (map.get(num) == 0) {

                map.remove(num);
            }
        }

        System.out.println(
                "Same Elements: "
                        + map.isEmpty()
        );
    }

    public static void main(String[] args) {

        int[] arr1 = {
                1, 2, 2, 3
        };

        int[] arr2 = {
                2, 3, 2, 1
        };

        sameElements(arr1, arr2);
    }
}`,

        pseudoCode: `START

IF array lengths are different

    RETURN false

Create frequency HashMap for first array

FOR each element in second array

    IF element does not exist

        RETURN false

    Decrease frequency

    IF frequency becomes zero

        Remove element

END FOR

RETURN map is empty

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 58. COUNT SUBARRAYS WITH SUM K
    // =========================================================

    {
        id: 58,
        module: "hashmap-hashset",
        title: "Count Subarrays With Sum K",
        difficulty: "Medium",

        description:
            "Count the number of contiguous subarrays whose sum equals K.",

        inputArray: [1, 1, 1],

        example: {
            input: "Array = [1, 1, 1], K = 2",
            output: "Subarrays With Sum 2: 2"
        },

        explanation: `Use prefix sum and HashMap.

The HashMap stores:

prefixSum -> frequency

For every element:

prefixSum = prefixSum + element

We need:

prefixSum - K

If prefixSum - K exists in the HashMap, then those previous prefix sums form subarrays whose sum is K.

Initially store:

0 -> 1

because a prefix sum of zero exists before processing the array.

For [1, 1, 1] and K = 2:

Subarray [1,1] at indexes 0-1
Subarray [1,1] at indexes 1-2

Answer = 2.`,

        javaCode: `import java.util.HashMap;
import java.util.Map;

public class Main {

    static void countSubarraysWithSumK(
            int[] arr,
            int k) {

        Map<Integer, Integer> map =
                new HashMap<>();

        map.put(0, 1);

        int prefixSum = 0;
        int count = 0;

        for (int num : arr) {

            prefixSum += num;

            if (map.containsKey(
                    prefixSum - k)) {

                count += map.get(
                        prefixSum - k
                );
            }

            map.put(
                    prefixSum,
                    map.getOrDefault(
                            prefixSum,
                            0
                    ) + 1
            );
        }

        System.out.println(
                "Subarrays With Sum "
                        + k + ": " + count
        );
    }

    public static void main(String[] args) {

        int[] arr = {
                1, 1, 1
        };

        countSubarraysWithSumK(arr, 2);
    }
}`,

        pseudoCode: `START

Create HashMap

Store:
prefixSum 0 -> frequency 1

prefixSum = 0
count = 0

FOR each element

    prefixSum = prefixSum + element

    required = prefixSum - K

    IF required exists

        count = count + its frequency

    Increase frequency of prefixSum

END FOR

PRINT count

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 59. LONGEST CONSECUTIVE SEQUENCE
    // =========================================================

    {
        id: 59,
        module: "hashmap-hashset",
        title: "Longest Consecutive Sequence",
        difficulty: "Medium",

        description:
            "Find the length of the longest sequence of consecutive integers using HashSet.",

        inputArray: [100, 4, 200, 1, 3, 2],

        example: {
            input: "Array = [100, 4, 200, 1, 3, 2]",
            output: "Longest Consecutive Sequence: 4"
        },

        explanation: `Store all elements in a HashSet.

For every number, check whether it is the beginning of a sequence.

A number is the beginning of a sequence when:

set.contains(num - 1) == false

Then keep checking:

num + 1
num + 2
num + 3 ...

For this array:

1, 2, 3, 4

is the longest consecutive sequence.

Therefore, the length is 4.`,

        javaCode: `import java.util.HashSet;
import java.util.Set;

public class Main {

    static void longestConsecutive(int[] arr) {

        Set<Integer> set =
                new HashSet<>();

        for (int num : arr) {

            set.add(num);
        }

        int longest = 0;

        for (int num : set) {

            if (!set.contains(num - 1)) {

                int current = num;
                int length = 1;

                while (
                    set.contains(current + 1)
                ) {

                    current++;
                    length++;
                }

                longest = Math.max(
                        longest,
                        length
                );
            }
        }

        System.out.println(
                "Longest Consecutive Sequence: "
                        + longest
        );
    }

    public static void main(String[] args) {

        int[] arr = {
                100, 4, 200, 1, 3, 2
        };

        longestConsecutive(arr);
    }
}`,

        pseudoCode: `START

Create HashSet

FOR each element

    Add element to Set

END FOR

longest = 0

FOR each element

    IF element - 1 does not exist

        current = element
        length = 1

        WHILE current + 1 exists

            current++
            length++

        END WHILE

        longest = maximum(longest, length)

END FOR

PRINT longest

END`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 60. GROUP ANAGRAMS
    // =========================================================

    {
        id: 60,
        module: "hashmap-hashset",
        title: "Group Anagrams",
        difficulty: "Medium",

        description:
            "Group words that are anagrams of each other using HashMap.",

        inputArray: [
            "eat",
            "tea",
            "tan",
            "ate",
            "nat",
            "bat"
        ],

        example: {
            input: 'Words = ["eat", "tea", "tan", "ate", "nat", "bat"]',
            output: "[[eat, tea, ate], [tan, nat], [bat]]"
        },

        explanation: `Anagrams contain the same characters with the same frequency.

Sort the characters of every word.

Use the sorted characters as the HashMap key.

For example:

eat -> aet
tea -> aet
ate -> aet

Therefore, all three words have the same key:

aet

Similarly:

tan -> ant
nat -> ant

So they are grouped together.

Final groups:

[eat, tea, ate]
[tan, nat]
[bat]`,

        javaCode: `import java.util.*;

public class Main {

    static void groupAnagrams(
            String[] words) {

        Map<String, List<String>> map =
                new HashMap<>();

        for (String word : words) {

            char[] chars =
                    word.toCharArray();

            Arrays.sort(chars);

            String key =
                    new String(chars);

            map.computeIfAbsent(
                    key,
                    k -> new ArrayList<>()
            ).add(word);
        }

        System.out.println(
                "Group Anagrams:"
        );

        for (List<String> group :
                map.values()) {

            System.out.println(group);
        }
    }

    public static void main(String[] args) {

        String[] words = {
                "eat",
                "tea",
                "tan",
                "ate",
                "nat",
                "bat"
        };

        groupAnagrams(words);
    }
}`,

        pseudoCode: `START

Create HashMap

FOR each word

    Convert word to character array

    Sort characters

    Create sorted string as key

    IF key does not exist

        Create new list

    Add word to list

END FOR

FOR each group

    PRINT group

END`,

        timeComplexity: "O(n * k log k)",
        spaceComplexity: "O(n * k)"
    }

];

