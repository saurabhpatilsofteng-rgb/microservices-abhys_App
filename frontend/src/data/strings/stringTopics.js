export const stringTopics = [

    {
        id: 1,

        module: "string-basics",

        title: "String Basics",

        difficulty: "Beginner",

        concept:
            "A String is a sequence of characters.",

        explanation: `
In Java, String is a class.

You can create a String using a String literal
or using the new keyword.
        `,

        whyImportant: `
String is one of the most frequently used classes
in Java applications.

It is heavily used in APIs, databases,
file processing and web applications.
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        String name = "Saurabh";

        System.out.println(name);

    }

}
        `,

        output: `
Saurabh
        `,

        interviewQuestions: [

            "What is String in Java?",

            "Is String a class or primitive data type?",

            "How do you create a String?",

            "Why is String immutable?",

            "What is the difference between String and char[]?"

        ]

    },


    {
        id: 2,

        module: "string-pool",

        title: "String Pool",

        difficulty: "Intermediate",

        concept:
            "String Pool is a special memory area used to store String literals.",

        explanation: `
When you create a String literal,
Java checks the String Pool.

If the same String already exists,
Java can reuse the existing object.
        `,

        whyImportant: `
Understanding the String Pool is very important
for Java memory management and interview questions.
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        String a = "Java";

        String b = "Java";

        System.out.println(a == b);

    }

}
        `,

        output: `
true
        `,

        interviewQuestions: [

            "What is String Pool?",

            "Where is String Pool stored?",

            "Why does a == b return true?",

            "What happens when new String() is used?",

            "What is intern()?"

        ]

    },


    {
        id: 3,

        module: "string-immutability",

        title: "String Immutability",

        difficulty: "Intermediate",

        concept:
            "String objects cannot be changed after they are created.",

        explanation: `
When a String appears to change,
Java actually creates another String object.

The original String remains unchanged.
        `,

        whyImportant: `
String immutability provides security,
thread safety and efficient String Pool usage.
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        String name = "Java";

        name = name + " Programming";

        System.out.println(name);

    }

}
        `,

        output: `
Java Programming
        `,

        interviewQuestions: [

            "Why is String immutable?",

            "What does immutable mean?",

            "Can we change a String object?",

            "Why is immutability useful?",

            "How does String immutability improve security?"

        ]

    },


    {
        id: 4,

        module: "string-methods",

        title: "String Methods",

        difficulty: "Beginner",

        concept:
            "Java String provides many methods for processing text.",

        explanation: `
Some important methods are:

length()
charAt()
substring()
toUpperCase()
toLowerCase()
contains()
startsWith()
endsWith()
trim()
replace()
        `,

        whyImportant:
            "String methods are frequently used in real-world Java development.",

        code: `
public class Main {

    public static void main(String[] args) {

        String text = "Hello Java";

        System.out.println(text.length());

        System.out.println(text.toUpperCase());

        System.out.println(text.charAt(1));

        System.out.println(
            text.contains("Java")
        );

    }

}
        `,

        output: `
10
HELLO JAVA
e
true
        `,

        interviewQuestions: [

            "What does length() return?",

            "What does charAt() do?",

            "What does substring() do?",

            "Difference between contains() and indexOf()?",

            "What does trim() do?"

        ]

    },


    {
        id: 5,

        module: "string-comparison",

        title: "String Comparison",

        difficulty: "Intermediate",

        concept:
            "Java provides == and equals() for comparing Strings, but they work differently.",

        explanation: `
== compares object references.

equals() compares the actual String content.
        `,

        whyImportant:
            "This is one of the most common Java interview questions.",

        code: `
public class Main {

    public static void main(String[] args) {

        String a = "Java";

        String b = "Java";

        String c = new String("Java");

        System.out.println(a == b);

        System.out.println(a == c);

        System.out.println(a.equals(c));

    }

}
        `,

        output: `
true
false
true
        `,

        interviewQuestions: [

            "Difference between == and equals()?",

            "Why does == sometimes return true?",

            "Why does new String() behave differently?",

            "How do you compare String contents?",

            "What is equalsIgnoreCase()?"

        ]

    },


    {
        id: 6,

        module: "string-builder",

        title: "StringBuilder",

        difficulty: "Intermediate",

        concept:
            "StringBuilder is a mutable sequence of characters.",

        explanation: `
Unlike String, StringBuilder can be modified
without creating a new object for every change.
        `,

        whyImportant:
            "StringBuilder is useful when many String modifications are required.",

        code: `
public class Main {

    public static void main(String[] args) {

        StringBuilder builder =
            new StringBuilder("Java");

        builder.append(" Programming");

        System.out.println(builder);

    }

}
        `,

        output: `
Java Programming
        `,

        interviewQuestions: [

            "What is StringBuilder?",

            "Why is StringBuilder faster than String?",

            "Is StringBuilder thread-safe?",

            "What is append()?",

            "StringBuilder vs String?"

        ]

    }

];