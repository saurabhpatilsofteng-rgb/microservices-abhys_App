const java8Questions = [

    // =========================================================
    // 181. Find Duplicate Elements Using Stream
    // =========================================================

    {
        id: 181,
        module: "java-8",
        title: "Find Duplicate Elements Using Stream",
        difficulty: "Easy",

        description:
            "Find all duplicate elements in a List of integers using Java 8 Stream API.",

        inputArray: [10, 20, 30, 20, 40, 50, 10, 60, 30, 70],

        example:
            "Input: [10,20,30,20,40,50,10,60,30,70]\nOutput: [10,20,30]",

        explanation:
            "The stream checks each number using Collections.frequency(). Elements whose frequency is greater than 1 are collected into a Set, which automatically removes repeated occurrences.",

        javaCode: `static void findDuplicates(
        List<Integer> numbers) {

    Set<Integer> duplicates =
            numbers.stream()
                    .filter(n ->
                            Collections.frequency(
                                    numbers, n
                            ) > 1)
                    .collect(
                            Collectors.toSet()
                    );

    System.out.println(duplicates);
}`,

        pseudoCode: `FIND_DUPLICATES(numbers)

create stream from numbers

filter elements whose frequency > 1

collect elements into a Set

return or print duplicate elements`,

        timeComplexity: "O(n²)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 182. Find Even Numbers Using Stream
    // =========================================================

    {
        id: 182,
        module: "java-8",
        title: "Find Even Numbers Using Stream",
        difficulty: "Easy",

        description:
            "Use Java 8 Stream API to filter and print all even numbers from a list.",

        inputArray: [10, 20, 30, 21, 41, 50],

        example:
            "Input: [10,20,30,21,41,50]\nOutput: [10,20,30,50]",

        explanation:
            "An even number is divisible by 2. The filter() operation keeps only elements for which n % 2 == 0.",

        javaCode: `static void findEvenNumbers(
        List<Integer> numbers) {

    numbers.stream()
            .filter(n -> n % 2 == 0)
            .forEach(
                    System.out::println
            );
}`,

        pseudoCode: `FIND_EVEN_NUMBERS(numbers)

create stream

for each number

    if number % 2 == 0

        print number`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 183. Find Odd Numbers Using Stream
    // =========================================================

    {
        id: 183,
        module: "java-8",
        title: "Find Odd Numbers Using Stream",
        difficulty: "Easy",

        description:
            "Use Java 8 Stream API to filter and print all odd numbers from a list.",

        inputArray: [10, 20, 31, 41, 50, 61],

        example:
            "Input: [10,20,31,41,50,61]\nOutput: [31,41,61]",

        explanation:
            "An odd number is not divisible by 2. The filter() operation keeps elements for which n % 2 != 0.",

        javaCode: `static void findOddNumbers(
        List<Integer> numbers) {

    numbers.stream()
            .filter(n -> n % 2 != 0)
            .forEach(
                    System.out::println
            );
}`,

        pseudoCode: `FIND_ODD_NUMBERS(numbers)

create stream

for each number

    if number % 2 != 0

        print number`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 184. Find Maximum Number Using Stream
    // =========================================================

    {
        id: 184,
        module: "java-8",
        title: "Find Maximum Number Using Stream",
        difficulty: "Easy",

        description:
            "Find the maximum integer from a List using Java 8 Stream API.",

        inputArray: [10, 20, 30, 70, 40, 50],

        example:
            "Input: [10,20,30,70,40,50]\nOutput: 70",

        explanation:
            "The max() terminal operation compares the stream elements using Integer::compareTo and returns the largest element.",

        javaCode: `static void findMaximum(
        List<Integer> numbers) {

    int max = numbers.stream()
            .max(Integer::compareTo)
            .get();

    System.out.println(max);
}`,

        pseudoCode: `FIND_MAXIMUM(numbers)

create stream

find maximum element

return maximum`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 185. Find Minimum Number Using Stream
    // =========================================================

    {
        id: 185,
        module: "java-8",
        title: "Find Minimum Number Using Stream",
        difficulty: "Easy",

        description:
            "Find the minimum integer from a List using Java 8 Stream API.",

        inputArray: [50, 20, 70, 10, 40, 30],

        example:
            "Input: [50,20,70,10,40,30]\nOutput: 10",

        explanation:
            "The min() terminal operation compares all elements and returns the smallest value.",

        javaCode: `static void findMinimum(
        List<Integer> numbers) {

    int min = numbers.stream()
            .min(Integer::compareTo)
            .get();

    System.out.println(min);
}`,

        pseudoCode: `FIND_MINIMUM(numbers)

create stream

find minimum element

return minimum`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 186. Sort Numbers Using Stream
    // =========================================================

    {
        id: 186,
        module: "java-8",
        title: "Sort Numbers Using Stream",
        difficulty: "Easy",

        description:
            "Sort the elements of a List in ascending order using the Java 8 Stream sorted() operation.",

        inputArray: [50, 20, 40, 10, 30],

        example:
            "Input: [50,20,40,10,30]\nOutput: [10,20,30,40,50]",

        explanation:
            "The sorted() intermediate operation arranges stream elements in their natural ascending order.",

        javaCode: `static void sortNumbers(
        List<Integer> numbers) {

    numbers.stream()
            .sorted()
            .forEach(
                    System.out::println
            );
}`,

        pseudoCode: `SORT_NUMBERS(numbers)

create stream

sort elements in ascending order

print each element`,

        timeComplexity: "O(n log n)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 187. Remove Duplicates Using Stream
    // =========================================================

    {
        id: 187,
        module: "java-8",
        title: "Remove Duplicates Using Stream",
        difficulty: "Easy",

        description:
            "Remove duplicate elements from a List using the Java 8 Stream distinct() operation.",

        inputArray: [10, 20, 10, 30, 20, 40, 30],

        example:
            "Input: [10,20,10,30,20,40,30]\nOutput: [10,20,30,40]",

        explanation:
            "The distinct() intermediate operation removes duplicate elements from the stream while preserving encounter order for an ordered stream.",

        javaCode: `static void removeDuplicates(
        List<Integer> numbers) {

    numbers.stream()
            .distinct()
            .forEach(
                    System.out::println
            );
}`,

        pseudoCode: `REMOVE_DUPLICATES(numbers)

create stream

apply distinct()

print unique elements`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 188. Count Frequency of Each Number
    // =========================================================

    {
        id: 188,
        module: "java-8",
        title: "Count Frequency of Each Number",
        difficulty: "Medium",

        description:
            "Count how many times each number occurs in a List using groupingBy(), Function.identity(), and counting().",

        inputArray: [10, 20, 30, 20, 40, 50, 10, 30],

        example:
            "Input: [10,20,30,20,40,50,10,30]\nOutput: {10=2, 20=2, 30=2, 40=1, 50=1}",

        explanation:
            "groupingBy() groups identical elements. Function.identity() uses the element itself as the map key, while counting() counts how many elements belong to each group.",

        javaCode: `static void countFrequency(
        List<Integer> numbers) {

    Map<Integer, Long> frequency =
            numbers.stream()
                    .collect(
                            Collectors.groupingBy(
                                    Function.identity(),
                                    Collectors.counting()
                            )
                    );

    System.out.println(frequency);
}`,

        pseudoCode: `COUNT_FREQUENCY(numbers)

create stream

group elements by their value

count elements in every group

store result in Map

return map`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 189. Convert List to Map
    // =========================================================

    {
        id: 189,
        module: "java-8",
        title: "Convert List to Map Using Stream",
        difficulty: "Medium",

        description:
            "Convert a List of integers into a Map where each distinct number is used as both the key and value.",

        inputArray: [10, 20, 30, 20, 40, 10],

        example:
            "Input: [10,20,30,20,40,10]\nOutput: {10=10, 20=20, 30=30, 40=40}",

        explanation:
            "First, distinct() removes duplicate numbers. Then Collectors.toMap() creates a map where the number itself is used as both key and value.",

        javaCode: `static void convertListToMap(
        List<Integer> numbers) {

    Map<Integer, Integer> map =
            numbers.stream()
                    .distinct()
                    .collect(
                            Collectors.toMap(
                                    n -> n,
                                    n -> n
                            )
                    );

    System.out.println(map);
}`,

        pseudoCode: `CONVERT_LIST_TO_MAP(numbers)

create stream

remove duplicates

for each number

    use number as key
    use number as value

collect into Map

return map`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 190. Find Second Highest Number
    // =========================================================

    {
        id: 190,
        module: "java-8",
        title: "Find Second Highest Number Using Stream",
        difficulty: "Medium",

        description:
            "Find the second-highest distinct number from a List using Java 8 Stream API.",

        inputArray: [
            10, 20, 30, 20,
            40, 50, 10, 60,
            30, 70
        ],

        example:
            "Input: [10,20,30,20,40,50,10,60,30,70]\nOutput: 60",

        explanation:
            "First remove duplicates using distinct(). Then sort the values in descending order, skip the highest value, and retrieve the next value using findFirst().",

        javaCode: `static void findSecondHighest(
        List<Integer> numbers) {

    int secondHighest =
            numbers.stream()
                    .distinct()
                    .sorted(
                            Comparator.reverseOrder()
                    )
                    .skip(1)
                    .findFirst()
                    .get();

    System.out.println(
            secondHighest
    );
}`,

        pseudoCode: `FIND_SECOND_HIGHEST(numbers)

create stream

remove duplicates

sort in descending order

skip the first element

get the next element

return second highest`,

        timeComplexity: "O(n log n)",

        spaceComplexity: "O(n)"
    }
];