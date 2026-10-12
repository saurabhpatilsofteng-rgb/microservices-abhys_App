export const arrayTopics = [

    {
        id: 1,

        module: "array-basics",

        title: "Array Basics",

        difficulty: "Beginner",

        concept:
            "An array is a fixed-size collection of elements of the same data type.",

        explanation: `
An array allows us to store multiple values
inside one variable.

For example, instead of creating:

int mark1;
int mark2;
int mark3;

we can create:

int[] marks;

An array has a fixed length after creation.
        `,

        whyImportant: `
Arrays are one of the fundamental data structures
provided by Java.

They are also heavily used internally by many
Java APIs and collections.
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int[] marks = {
            80,
            75,
            90,
            85
        };

        System.out.println(marks[0]);

        System.out.println(marks[2]);

    }

}
        `,

        output: `
80
90
        `,

        interviewQuestions: [

            "What is an array?",

            "Why do we use arrays?",

            "Can an array store different data types?",

            "Is the size of an array fixed?",

            "What is the default value of an int array?"

        ]

    },


    {
        id: 2,

        module: "array-declaration",

        title: "Array Declaration & Initialization",

        difficulty: "Beginner",

        concept:
            "Java provides multiple ways to declare and initialize arrays.",

        explanation: `
An array can be declared using:

int[] numbers;

It can then be created using:

numbers = new int[5];

Or both can be done together:

int[] numbers = new int[5];

You can also initialize values directly.
        `,

        whyImportant:
            "Knowing array initialization is required for writing almost every Java program involving arrays.",

        code: `
public class Main {

    public static void main(String[] args) {

        int[] a;

        a = new int[3];

        int[] b = new int[3];

        int[] c = {10, 20, 30};

        System.out.println(c[1]);

    }

}
        `,

        output: `
20
        `,

        interviewQuestions: [

            "How do you declare an array?",

            "How do you initialize an array?",

            "What is new int[5]?",

            "What are default values in an integer array?",

            "Can we change the array size after creation?"

        ]

    },


    {
        id: 3,

        module: "one-dimensional-array",

        title: "One Dimensional Array",

        difficulty: "Beginner",

        concept:
            "A one-dimensional array stores elements in a single sequence.",

        explanation: `
A 1D array uses a single index.

The first element is at index 0.

The second element is at index 1.

The last element is at index length - 1.
        `,

        whyImportant:
            "1D arrays are the most commonly used array type in Java.",

        code: `
public class Main {

    public static void main(String[] args) {

        int[] numbers = {
            10,
            20,
            30,
            40
        };

        for (int i = 0;
             i < numbers.length;
             i++) {

            System.out.println(
                numbers[i]
            );

        }

    }

}
        `,

        output: `
10
20
30
40
        `,

        interviewQuestions: [

            "What is a 1D array?",

            "What is the first index of an array?",

            "What is array.length?",

            "What happens when an invalid index is accessed?"

        ]

    },


    {
        id: 4,

        module: "two-dimensional-array",

        title: "Two Dimensional Array",

        difficulty: "Intermediate",

        concept:
            "A two-dimensional array stores data in rows and columns.",

        explanation: `
A 2D array can be visualized as a table.

For example:

10 20 30
40 50 60

There are two indexes:

row
column
        `,

        whyImportant:
            "2D arrays are commonly used for matrices, tables and grid-based problems.",

        code: `
public class Main {

    public static void main(String[] args) {

        int[][] matrix = {

            {10, 20, 30},

            {40, 50, 60}

        };


        System.out.println(
            matrix[0][1]
        );


        System.out.println(
            matrix[1][2]
        );

    }

}
        `,

        output: `
20
60
        `,

        interviewQuestions: [

            "What is a 2D array?",

            "How do you access a 2D array element?",

            "What does matrix[1][2] mean?",

            "Can rows have different lengths in Java?"

        ]

    },


    {
        id: 5,

        module: "array-memory",

        title: "Array Memory",

        difficulty: "Intermediate",

        concept:
            "Arrays are objects in Java and are created using the new keyword.",

        explanation: `
When an array is created using new,
memory is allocated for the array object.

The variable stores a reference to that array object.

For example:

int[] numbers = new int[5];

numbers is a reference variable.
        `,

        whyImportant:
            "Understanding array memory helps with Java references, heap memory and interview questions.",

        code: `
public class Main {

    public static void main(String[] args) {

        int[] numbers =
            new int[3];

        numbers[0] = 10;

        numbers[1] = 20;

        numbers[2] = 30;

        System.out.println(
            numbers[1]
        );

    }

}
        `,

        output: `
20
        `,

        interviewQuestions: [

            "Are arrays objects in Java?",

            "Where are arrays created?",

            "What does an array variable store?",

            "What happens when an array reference is null?"

        ]

    },


    {
        id: 6,

        module: "array-traversal",

        title: "Array Traversal",

        difficulty: "Beginner",

        concept:
            "Array traversal means visiting each element of an array.",

        explanation: `
The traditional for loop gives access to the index.

The enhanced for loop directly gives the value.
        `,

        whyImportant:
            "Array traversal is required whenever you need to process array elements.",

        code: `
public class Main {

    public static void main(String[] args) {

        int[] numbers = {
            10,
            20,
            30
        };


        for (int number : numbers) {

            System.out.println(number);

        }

    }

}
        `,

        output: `
10
20
30
        `,

        interviewQuestions: [

            "What is array traversal?",

            "What is the enhanced for loop?",

            "Difference between for loop and enhanced for loop?",

            "Can enhanced for loop access the index directly?"

        ]

    },


    {
        id: 7,

        module: "arrays-class",

        title: "Java Arrays Class",

        difficulty: "Intermediate",

        concept:
            "java.util.Arrays provides utility methods for working with arrays.",

        explanation: `
Some useful methods include:

Arrays.sort()
Arrays.toString()
Arrays.equals()
Arrays.copyOf()
Arrays.fill()
        `,

        whyImportant:
            "The Arrays utility class saves time and provides reliable array operations.",

        code: `
import java.util.Arrays;


public class Main {

    public static void main(String[] args) {

        int[] numbers = {
            30,
            10,
            20
        };


        Arrays.sort(numbers);


        System.out.println(
            Arrays.toString(numbers)
        );

    }

}
        `,

        output: `
[10, 20, 30]
        `,

        interviewQuestions: [

            "What is java.util.Arrays?",

            "What does Arrays.sort() do?",

            "What does Arrays.toString() do?",

            "What is Arrays.copyOf()?"

        ]

    },


    {
        id: 8,

        module: "array-copy",

        title: "Array Copy",

        difficulty: "Intermediate",

        concept:
            "Java provides several ways to copy array elements.",

        explanation: `
Common approaches include:

System.arraycopy()

Arrays.copyOf()

Arrays.copyOfRange()
        `,

        whyImportant:
            "Array copying is frequently required when creating modified or resized arrays.",

        code: `
import java.util.Arrays;


public class Main {

    public static void main(String[] args) {

        int[] original = {
            10,
            20,
            30
        };


        int[] copy =
            Arrays.copyOf(
                original,
                original.length
            );


        System.out.println(
            Arrays.toString(copy)
        );

    }

}
        `,

        output: `
[10, 20, 30]
        `,

        interviewQuestions: [

            "How do you copy an array?",

            "What is System.arraycopy()?",

            "What is Arrays.copyOf()?",

            "What is shallow copying?"

        ]

    },


    {
        id: 9,

        module: "array-vs-arraylist",

        title: "Array vs ArrayList",

        difficulty: "Intermediate",

        concept:
            "Array has a fixed size while ArrayList can dynamically grow.",

        explanation: `
Array:

Fixed size.
Can store primitives.
Uses [] syntax.

ArrayList:

Dynamic size.
Stores objects.
Provides collection methods.
        `,

        whyImportant:
            "This is a very common Java interview question.",

        code: `
import java.util.ArrayList;


public class Main {

    public static void main(String[] args) {

        int[] array = {
            10,
            20
        };


        ArrayList<Integer> list =
            new ArrayList<>();


        list.add(10);

        list.add(20);

        list.add(30);


        System.out.println(list);

    }

}
        `,

        output: `
[10, 20, 30]
        `,

        interviewQuestions: [

            "Array vs ArrayList?",

            "Can ArrayList store primitives?",

            "Can array size change?",

            "When should you use ArrayList instead of array?"

        ]

    },


    {
        id: 10,

        module: "common-array-mistakes",

        title: "Common Array Mistakes",

        difficulty: "Beginner",

        concept:
            "Many beginners make mistakes involving indexes and array size.",

        explanation: `
The most common mistake is accessing an index
outside the valid range.

For an array of length 5:

Valid indexes are:

0
1
2
3
4

Index 5 is invalid.
        `,

        whyImportant:
            "Understanding these errors helps prevent ArrayIndexOutOfBoundsException.",

        code: `
public class Main {

    public static void main(String[] args) {

        int[] numbers = {
            10,
            20,
            30
        };


        System.out.println(
            numbers[3]
        );

    }

}
        `,

        output: `
ArrayIndexOutOfBoundsException
        `,

        interviewQuestions: [

            "What is ArrayIndexOutOfBoundsException?",

            "What is the first valid index?",

            "What is the last valid index?",

            "Why does index 3 fail for an array of length 3?"

        ]

    }

];