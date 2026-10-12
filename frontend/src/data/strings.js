    
export const stringQuestions = [

    // ============================================================
    // 1. REVERSE STRING
    // ============================================================

    {
        id: 11,
        module: "strings",
        title: "Reverse a String",
        difficulty: "Easy",

        description:
            "Reverse a given string without using a built-in reverse method.",

        inputString: "programming",

        example: {
            input: "programming",
            output: "gnimmargorp"
        },

        explanation: `
Start from the last character of the string.

Traverse the string from right to left.

Add each character to the reversed string.

After reaching the first character,
the reversed string is ready.
        `,

        javaCode: `
package StringJava;

public class Main {

    static void reverseString(String str) {

        String reversed = "";

        for (int i = str.length() - 1; i >= 0; i--) {

            reversed = reversed + str.charAt(i);
        }

        System.out.println(
            "Reversed String: " + reversed
        );
    }

    public static void main(String[] args) {

        String str = "programming";

        reverseString(str);
    }
}
        `,

        pseudoCode: `
START

Take a string

Set reversed = ""

FOR i = string.length - 1 TO 0

    reversed = reversed + string[i]

END FOR

PRINT reversed

END
        `,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",

        visualizationType: "string-reverse"
    },


    // ============================================================
    // 2. PALINDROME
    // ============================================================

    {
        id: 12,
        module: "strings",
        title: "Check Whether a String is Palindrome",
        difficulty: "Easy",

        description:
            "Check whether a given string reads the same from left to right and right to left.",

        inputString: "madam",

        example: {
            input: "madam",
            output: "Palindrome: Yes"
        },

        explanation: `
Reverse the given string.

Compare the original string
with the reversed string.

If both strings are equal,
the string is a palindrome.

Otherwise, it is not a palindrome.
        `,

        javaCode: `
package StringJava;

public class Main {

    static void checkPalindrome(String str) {

        String reversed = "";

        for (int i = str.length() - 1; i >= 0; i--) {

            reversed = reversed + str.charAt(i);
        }

        if (str.equals(reversed)) {

            System.out.println("Palindrome: Yes");

        } else {

            System.out.println("Palindrome: No");
        }
    }

    public static void main(String[] args) {

        String str = "madam";

        checkPalindrome(str);
    }
}
        `,

        pseudoCode: `
START

Take a string

Set reversed = ""

FOR i = string.length - 1 TO 0

    reversed = reversed + string[i]

END FOR

IF string == reversed

    PRINT "Palindrome"

ELSE

    PRINT "Not Palindrome"

END IF

END
        `,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",

        visualizationType: "palindrome"
    },


    // ============================================================
    // 3. CHARACTER FREQUENCY
    // ============================================================

    {
        id: 13,
        module: "strings",
        title: "Count Frequency of Each Character",
        difficulty: "Easy",

        description:
            "Count how many times each character occurs in a string.",

        inputString: "programming",

        example: {
            input: "programming",
            output: "{p=1, r=2, o=1, g=2, a=1, m=2, i=1, n=1}"
        },

        explanation: `
Create a map to store character frequencies.

Traverse every character in the string.

If the character already exists,
increase its count.

Otherwise, add the character
with a count of 1.
        `,

        javaCode: `
package StringJava;

import java.util.*;

public class Main {

    static void characterFrequency(String str) {

        Map<Character, Integer> map =
            new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {

            map.put(
                ch,
                map.getOrDefault(ch, 0) + 1
            );
        }

        System.out.println(
            "Character Frequency: " + map
        );
    }

    public static void main(String[] args) {

        String str = "programming";

        characterFrequency(str);
    }
}
        `,

        pseudoCode: `
START

Create empty map

FOR each character in string

    IF character exists in map

        Increase frequency

    ELSE

        Add character with frequency 1

END FOR

PRINT map

END
        `,

        timeComplexity: "O(n)",
        spaceComplexity: "O(k)",

        visualizationType: "character-frequency"
    },


    // ============================================================
    // 4. FIRST NON-REPEATING CHARACTER
    // ============================================================

    {
        id: 14,
        module: "strings",
        title: "Find First Non-Repeating Character",
        difficulty: "Medium",

        description:
            "Find the first character that appears only once in a string.",

        inputString: "programming",

        example: {
            input: "programming",
            output: "p"
        },

        explanation: `
First count the frequency of every character.

Then traverse the original string again.

The first character whose frequency is 1
is the first non-repeating character.
        `,

        javaCode: `
package StringJava;

import java.util.*;

public class Main {

    static void firstNonRepeatingCharacter(String str) {

        Map<Character, Integer> map =
            new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {

            map.put(
                ch,
                map.getOrDefault(ch, 0) + 1
            );
        }

        for (char ch : str.toCharArray()) {

            if (map.get(ch) == 1) {

                System.out.println(
                    "First Non-Repeating Character: "
                    + ch
                );

                return;
            }
        }

        System.out.println(
            "No non-repeating character found"
        );
    }

    public static void main(String[] args) {

        String str = "programming";

        firstNonRepeatingCharacter(str);
    }
}
        `,

        pseudoCode: `
START

Create frequency map

FOR each character

    Count character frequency

END FOR

FOR each character in original string

    IF frequency == 1

        PRINT character

        STOP

END FOR

PRINT "No non-repeating character"

END
        `,

        timeComplexity: "O(n)",
        spaceComplexity: "O(k)",

        visualizationType: "first-non-repeating"
    },


    // ============================================================
    // 5. DUPLICATE CHARACTERS
    // ============================================================

    {
        id: 15,
        module: "strings",
        title: "Find Duplicate Characters",
        difficulty: "Easy",

        description:
            "Find all characters that occur more than once in a string.",

        inputString: "programming",

        example: {
            input: "programming",
            output: "r g m"
        },

        explanation: `
Count the frequency of every character.

Traverse the frequency map.

If a character has a frequency greater than 1,
it is a duplicate character.
        `,

        javaCode: `
package StringJava;

import java.util.*;

public class Main {

    static void duplicateCharacters(String str) {

        Map<Character, Integer> map =
            new LinkedHashMap<>();

        for (char ch : str.toCharArray()) {

            map.put(
                ch,
                map.getOrDefault(ch, 0) + 1
            );
        }

        System.out.print(
            "Duplicate Characters: "
        );

        for (
            Map.Entry<Character, Integer> entry
            : map.entrySet()
        ) {

            if (entry.getValue() > 1) {

                System.out.print(
                    entry.getKey() + " "
                );
            }
        }

        System.out.println();
    }

    public static void main(String[] args) {

        String str = "programming";

        duplicateCharacters(str);
    }
}
        `,

        pseudoCode: `
START

Create frequency map

FOR each character

    Count frequency

END FOR

FOR each character

    IF frequency > 1

        PRINT character

END FOR

END
        `,

        timeComplexity: "O(n)",
        spaceComplexity: "O(k)",

        visualizationType: "duplicate-characters"
    },


    // ============================================================
    // 6. ANAGRAM
    // ============================================================

    {
        id: 16,
        module: "strings",
        title: "Check Whether Two Strings are Anagrams",
        difficulty: "Easy",

        description:
            "Check whether two strings contain the same characters with the same frequencies.",

        inputString: "listen",

        secondString: "silent",

        example: {
            input: "listen, silent",
            output: "Anagram: Yes"
        },

        explanation: `
First check whether both strings have
the same length.

Convert both strings into character arrays.

Sort both arrays.

If the sorted arrays are equal,
the strings are anagrams.
        `,

        javaCode: `
package StringJava;

import java.util.*;

public class Main {

    static void checkAnagram(
            String str1,
            String str2) {

        if (str1.length() != str2.length()) {

            System.out.println(
                "Anagram: No"
            );

            return;
        }

        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();

        Arrays.sort(arr1);
        Arrays.sort(arr2);

        if (Arrays.equals(arr1, arr2)) {

            System.out.println(
                "Anagram: Yes"
            );

        } else {

            System.out.println(
                "Anagram: No"
            );
        }
    }

    public static void main(String[] args) {

        String str1 = "listen";
        String str2 = "silent";

        checkAnagram(str1, str2);
    }
}
        `,

        pseudoCode: `
START

Take two strings

IF lengths are different

    PRINT "Not Anagram"

SORT both strings

IF sorted strings are equal

    PRINT "Anagram"

ELSE

    PRINT "Not Anagram"

END IF

END
        `,

        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",

        visualizationType: "anagram"
    },


    // ============================================================
    // 7. REMOVE DUPLICATE CHARACTERS
    // ============================================================

    {
        id: 17,
        module: "strings",
        title: "Remove Duplicate Characters",
        difficulty: "Easy",

        description:
            "Remove duplicate characters from a string while preserving their original order.",

        inputString: "programming",

        example: {
            input: "programming",
            output: "progamin"
        },

        explanation: `
Use a LinkedHashSet to store characters.

A Set does not allow duplicate values.

LinkedHashSet also maintains insertion order.

Finally, build a new string from the set.
        `,

        javaCode: `
package StringJava;

import java.util.*;

public class Main {

    static void removeDuplicateCharacters(
            String str) {

        Set<Character> set =
            new LinkedHashSet<>();

        for (char ch : str.toCharArray()) {

            set.add(ch);
        }

        String result = "";

        for (char ch : set) {

            result = result + ch;
        }

        System.out.println(
            "After Removing Duplicates: "
            + result
        );
    }

    public static void main(String[] args) {

        String str = "programming";

        removeDuplicateCharacters(str);
    }
}
        `,

        pseudoCode: `
START

Create empty Set

FOR each character

    Add character to Set

END FOR

Create result string

FOR each character in Set

    Add character to result

END FOR

PRINT result

END
        `,

        timeComplexity: "O(n)",
        spaceComplexity: "O(k)",

        visualizationType: "remove-duplicates"
    },


    // ============================================================
    // 8. LONGEST SUBSTRING WITHOUT REPEATING
    // ============================================================

    {
        id: 18,
        module: "strings",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",

        description:
            "Find the longest substring that contains no repeated characters.",

        inputString: "abcabcbb",

        example: {
            input: "abcabcbb",
            output: "abc (Length: 3)"
        },

        explanation: `
Use the sliding window technique.

Maintain a window using left and right pointers.

Use a Set to store characters in the current window.

When a duplicate character is found,
remove characters from the left until
the duplicate is removed.

Keep track of the longest window.
        `,

        javaCode: `
package StringJava;

import java.util.*;

public class Main {

    static void longestSubstringWithoutRepeating(
            String str) {

        Set<Character> set =
            new HashSet<>();

        int left = 0;
        int maxLength = 0;
        String longest = "";

        for (
            int right = 0;
            right < str.length();
            right++
        ) {

            char ch = str.charAt(right);

            while (set.contains(ch)) {

                set.remove(
                    str.charAt(left)
                );

                left++;
            }

            set.add(ch);

            int currentLength =
                right - left + 1;

            if (
                currentLength > maxLength
            ) {

                maxLength = currentLength;

                longest =
                    str.substring(
                        left,
                        right + 1
                    );
            }
        }

        System.out.println(
            "Longest Substring: "
            + longest
            + " (Length: "
            + maxLength
            + ")"
        );
    }

    public static void main(String[] args) {

        String str = "abcabcbb";

        longestSubstringWithoutRepeating(str);
    }
}
        `,

        pseudoCode: `
START

Create empty Set

left = 0

maxLength = 0

FOR right = 0 TO string.length - 1

    character = string[right]

    WHILE character exists in Set

        Remove string[left]

        left++

    END WHILE

    Add character to Set

    currentLength = right - left + 1

    Update maxLength

END FOR

PRINT longest substring

END
        `,

        timeComplexity: "O(n)",
        spaceComplexity: "O(k)",

        visualizationType: "longest-substring"
    },


    // ============================================================
    // 9. VOWELS AND CONSONANTS
    // ============================================================

    {
        id: 19,
        module: "strings",
        title: "Count Vowels and Consonants",
        difficulty: "Easy",

        description:
            "Count the number of vowels and consonants present in a string.",

        inputString: "Hello World",

        example: {
            input: "Hello World",
            output: "Vowels: 3, Consonants: 7"
        },

        explanation: `
Convert the string to lowercase.

Traverse every character.

Check whether the character is an alphabet.

If it is a, e, i, o or u,
increase the vowel count.

Otherwise, increase the consonant count.
        `,

        javaCode: `
package StringJava;

public class Main {

    static void countVowelsAndConsonants(
            String str) {

        int vowels = 0;
        int consonants = 0;

        str = str.toLowerCase();

        for (char ch : str.toCharArray()) {

            if (
                ch >= 'a' &&
                ch <= 'z'
            ) {

                if (
                    ch == 'a' ||
                    ch == 'e' ||
                    ch == 'i' ||
                    ch == 'o' ||
                    ch == 'u'
                ) {

                    vowels++;

                } else {

                    consonants++;
                }
            }
        }

        System.out.println(
            "Vowels: " + vowels
        );

        System.out.println(
            "Consonants: " + consonants
        );
    }

    public static void main(String[] args) {

        String str = "Hello World";

        countVowelsAndConsonants(str);
    }
}
        `,

        pseudoCode: `
START

vowels = 0

consonants = 0

Convert string to lowercase

FOR each character

    IF character is alphabet

        IF character is vowel

            vowels++

        ELSE

            consonants++

END FOR

PRINT vowels

PRINT consonants

END
        `,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",

        visualizationType: "vowels-consonants"
    },


    // ============================================================
    // 10. LONGEST PALINDROMIC SUBSTRING
    // ============================================================

    {
        id: 20,
        module: "strings",
        title: "Find Longest Palindromic Substring",
        difficulty: "Medium",

        description:
            "Find the longest substring that is a palindrome.",

        inputString: "babad",

        example: {
            input: "babad",
            output: "bab"
        },

        explanation: `
For every character, consider it as
the center of a palindrome.

Check for an odd-length palindrome
using the same character as left and right.

Check for an even-length palindrome
using adjacent characters as left and right.

Expand while both characters are equal.

Keep the longest palindrome found.
        `,

        javaCode: `
package StringJava;

public class Main {

    static void longestPalindromicSubstring(
            String str) {

        if (
            str == null ||
            str.length() == 0
        ) {

            return;
        }

        String longest = "";

        for (
            int i = 0;
            i < str.length();
            i++
        ) {

            String odd =
                expandFromCenter(
                    str,
                    i,
                    i
                );

            String even =
                expandFromCenter(
                    str,
                    i,
                    i + 1
                );

            if (
                odd.length() >
                longest.length()
            ) {

                longest = odd;
            }

            if (
                even.length() >
                longest.length()
            ) {

                longest = even;
            }
        }

        System.out.println(
            "Longest Palindromic Substring: "
            + longest
        );
    }


    static String expandFromCenter(
            String str,
            int left,
            int right) {

        while (
            left >= 0 &&
            right < str.length() &&
            str.charAt(left) ==
            str.charAt(right)
        ) {

            left--;
            right++;
        }

        return str.substring(
            left + 1,
            right
        );
    }


    public static void main(String[] args) {

        String str = "babad";

        longestPalindromicSubstring(str);
    }
}
        `,

        pseudoCode: `
START

longest = ""

FOR each character i

    Find odd length palindrome
    centered at i

    Find even length palindrome
    centered between i and i + 1

    IF palindrome is longer

        Update longest

END FOR

PRINT longest

END
        `,

        timeComplexity: "O(n²)",
        spaceComplexity: "O(n)",

        visualizationType: "longest-palindromic-substring"
    }

];

