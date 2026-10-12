export const javaBasicsTopics = [

    {
        id: 1,

        module: "java-basics",

        title: "What is Java?",

        difficulty: "Beginner",

        concept:
            "Java is a high-level, object-oriented, class-based programming language.",

        explanation: `
Java was designed to make applications portable across different
operating systems.

Java source code is compiled into bytecode.

The bytecode runs inside the Java Virtual Machine (JVM).
        `,

        whyImportant: `
Java is widely used for backend development, enterprise applications,
Android development, microservices and large-scale systems.

Understanding Java fundamentals is essential before learning
Spring Boot and Spring Microservices.
        `,

        syntax: `
public class Main {

    public static void main(String[] args) {

        System.out.println("Hello Java");

    }
}
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        System.out.println("Hello Java");

    }
}
        `,

        output: `
Hello Java
        `,

        lineByLine: [
            {
                line: "public class Main",
                explanation:
                    "Creates a class named Main."
            },

            {
                line: "public static void main(String[] args)",
                explanation:
                    "This is the main method. Java starts program execution from here."
            },

            {
                line: 'System.out.println("Hello Java");',
                explanation:
                    "Prints Hello Java on the console."
            }
        ],

        realWorldUse: `
Every Java application starts from a class and execution begins
from a main method for standalone applications.
        `,

        interviewQuestions: [
            "What is Java?",
            "Why is Java platform independent?",
            "What is bytecode?",
            "What is JVM?",
            "What is JDK?",
            "What is JRE?"
        ],

        commonMistakes: [
            "Confusing JDK, JRE and JVM.",
            "Thinking Java source code directly runs on the operating system.",
            "Forgetting that Java class names are case-sensitive."
        ]
    },


    {
        id: 2,

        module: "java-basics",

        title: "JDK vs JRE vs JVM",

        difficulty: "Beginner",

        concept:
            "JDK, JRE and JVM are three important components of the Java platform.",

        explanation: `
JDK is used by developers to develop Java applications.

JRE provides the environment required to run Java applications.

JVM executes Java bytecode.
        `,

        whyImportant: `
This is one of the most frequently asked Core Java interview questions.

It also helps you understand how Java achieves platform independence.
        `,

        syntax: `
Java Source Code
       ↓
     javac
       ↓
   Bytecode
       ↓
      JVM
       ↓
    Program
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        System.out.println("Java runs inside JVM");

    }
}
        `,

        output: `
Java runs inside JVM
        `,

        lineByLine: [
            {
                line: "public class Main",
                explanation:
                    "Defines the Main class."
            },

            {
                line: "main()",
                explanation:
                    "Starting point of the Java program."
            },

            {
                line: "System.out.println()",
                explanation:
                    "Displays text on the console."
            }
        ],

        interviewQuestions: [
            "What is JVM?",
            "What is JRE?",
            "What is JDK?",
            "What is the difference between JDK and JRE?",
            "Why is Java platform independent?"
        ]
    },


    {
        id: 3,

        module: "java-basics",

        title: "First Java Program",

        difficulty: "Beginner",

        concept:
            "A Java program normally contains a class and a main method from which execution starts.",

        explanation: `
The compiler compiles the Java source file into bytecode.

The JVM then executes that bytecode.
        `,

        whyImportant:
            "This is the foundation for understanding every Java application.",

        code: `
public class Main {

    public static void main(String[] args) {

        int a = 10;

        int b = 20;

        int sum = a + b;

        System.out.println(sum);
    }
}
        `,

        output: `
30
        `,

        lineByLine: [
            {
                line: "int a = 10;",
                explanation:
                    "Creates an integer variable named a and stores 10."
            },

            {
                line: "int b = 20;",
                explanation:
                    "Creates another integer variable."
            },

            {
                line: "int sum = a + b;",
                explanation:
                    "Adds a and b and stores the result in sum."
            },

            {
                line: "System.out.println(sum);",
                explanation:
                    "Prints the result."
            }
        ],

        interviewQuestions: [
            "What is the main method?",
            "Why is main static?",
            "Why is main public?",
            "Why is the return type void?"
        ]
    }

];