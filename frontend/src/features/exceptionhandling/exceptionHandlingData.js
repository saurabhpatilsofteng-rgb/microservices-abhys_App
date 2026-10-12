export const exceptionHandlingModules = [

    {
        id: 1,
        slug: "exception-basics",

        title: "Exception Basics",

        description:
            "Understand what exceptions are, why they occur, and how Java handles runtime problems.",

        topics: [

            {
                id: 1,

                title: "What is an Exception?",

                explanation:
                    "An exception is an event that occurs during program execution and disrupts the normal flow of the program.",

                importance:
                    "Exception handling prevents application crashes and allows developers to handle errors gracefully.",

                code: `public class Main {

    public static void main(String[] args) {

        int a = 10;
        int b = 0;

        int result = a / b;

        System.out.println(result);

    }

}`,

                complexity:
                    "Exception handling does not have a typical algorithmic time complexity."
            },

            {
                id: 2,

                title: "Error vs Exception",

                explanation:
                    "Errors generally represent serious problems that applications should not normally handle, while exceptions represent conditions that applications can often handle.",

                importance:
                    "Understanding the difference helps you decide which problems should be handled using exception handling.",

                code: `public class Main {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

        } catch (ArithmeticException e) {

            System.out.println("Cannot divide by zero");

        }

    }

}`
            },

            {
                id: 3,

                title: "Exception Hierarchy",

                explanation:
                    "Java exceptions are part of the Throwable hierarchy. Throwable has two major branches: Error and Exception.",

                importance:
                    "The hierarchy helps developers understand checked exceptions, unchecked exceptions, and runtime exceptions.",

                code: `Throwable
│
├── Error
│
└── Exception
    │
    ├── RuntimeException
    │   ├── ArithmeticException
    │   ├── NullPointerException
    │   └── ArrayIndexOutOfBoundsException
    │
    └── Checked Exceptions
        ├── IOException
        └── SQLException`
            }

        ]

    },


    {
        id: 2,
        slug: "try-catch",

        title: "Try and Catch",

        description:
            "Learn how to handle exceptions using try, catch and multiple catch blocks.",

        topics: [

            {
                id: 1,

                title: "try Block",

                explanation:
                    "The try block contains code that may throw an exception.",

                importance:
                    "It identifies the code section where exception handling may be required.",

                code: `public class Main {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

        }

    }

}`
            },

            {
                id: 2,

                title: "catch Block",

                explanation:
                    "The catch block handles an exception thrown inside the corresponding try block.",

                importance:
                    "It allows the application to recover or display a meaningful error message.",

                code: `public class Main {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

        } catch (ArithmeticException e) {

            System.out.println(
                "Division by zero is not allowed"
            );

        }

    }

}`
            },

            {
                id: 3,

                title: "Multiple Catch Blocks",

                explanation:
                    "Java allows multiple catch blocks to handle different types of exceptions.",

                importance:
                    "Different exceptions may require different handling logic.",

                code: `public class Main {

    public static void main(String[] args) {

        try {

            int[] numbers = {10, 20};

            System.out.println(numbers[5]);

        } catch (ArithmeticException e) {

            System.out.println("Arithmetic error");

        } catch (ArrayIndexOutOfBoundsException e) {

            System.out.println("Invalid array index");

        }

    }

}`
            },

            {
                id: 4,

                title: "Multi-Catch",

                explanation:
                    "Java allows multiple exception types to be handled in a single catch block.",

                importance:
                    "It reduces duplicate exception handling code when the handling logic is the same.",

                code: `public class Main {

    public static void main(String[] args) {

        try {

            int[] arr = {1, 2};

            System.out.println(arr[5]);

        } catch (
            ArithmeticException |
            ArrayIndexOutOfBoundsException e
        ) {

            System.out.println(
                "An error occurred"
            );

        }

    }

}`
            }

        ]

    },


    {
        id: 3,
        slug: "finally",

        title: "Finally Block",

        description:
            "Learn how the finally block is used for cleanup operations.",

        topics: [

            {
                id: 1,

                title: "finally Block",

                explanation:
                    "The finally block is generally used to execute cleanup code after try and catch blocks.",

                importance:
                    "It is commonly used for closing resources such as files, database connections, and streams.",

                code: `public class Main {

    public static void main(String[] args) {

        try {

            int result = 10 / 0;

        } catch (ArithmeticException e) {

            System.out.println(
                "Exception occurred"
            );

        } finally {

            System.out.println(
                "Cleanup operation"
            );

        }

    }

}`
            }

        ]

    },


    {
        id: 4,
        slug: "throw",

        title: "throw Keyword",

        description:
            "Learn how to manually throw exceptions in Java.",

        topics: [

            {
                id: 1,

                title: "Using throw",

                explanation:
                    "The throw keyword is used to explicitly throw an exception.",

                importance:
                    "It allows developers to validate business rules and stop execution when invalid conditions occur.",

                code: `public class Main {

    public static void main(String[] args) {

        int age = 16;

        if (age < 18) {

            throw new RuntimeException(
                "Age must be 18 or above"
            );

        }

        System.out.println(
            "Eligible"
        );

    }

}`
            },

            {
                id: 2,

                title: "Business Validation Using throw",

                explanation:
                    "Applications commonly use throw to enforce business rules.",

                importance:
                    "This is frequently used in Spring Boot service layers.",

                code: `public void withdraw(
        double balance,
        double amount
) {

    if (amount > balance) {

        throw new RuntimeException(
            "Insufficient balance"
        );

    }

}`
            }

        ]

    },


    {
        id: 5,
        slug: "throws",

        title: "throws Keyword",

        description:
            "Learn how to declare exceptions in method signatures.",

        topics: [

            {
                id: 1,

                title: "Using throws",

                explanation:
                    "The throws keyword declares that a method may throw one or more exceptions.",

                importance:
                    "It allows responsibility for handling checked exceptions to be passed to the calling method.",

                code: `import java.io.IOException;

public class Main {

    public static void main(String[] args)
            throws IOException {

        readFile();

    }

    public static void readFile()
            throws IOException {

        throw new IOException(
            "File not found"
        );

    }

}`
            },

            {
                id: 2,

                title: "throw vs throws",

                explanation:
                    "throw is used to explicitly create and throw an exception object. throws is used in a method declaration to specify possible exceptions.",

                importance:
                    "This is a very common Java interview question.",

                code: `// throw

throw new RuntimeException(
    "Invalid data"
);


// throws

public void process()
        throws IOException {

}`
            }

        ]

    },


    {
        id: 6,
        slug: "checked-unchecked",

        title: "Checked and Unchecked Exceptions",

        description:
            "Understand the difference between checked exceptions and unchecked exceptions.",

        topics: [

            {
                id: 1,

                title: "Checked Exceptions",

                explanation:
                    "Checked exceptions must generally be handled or declared using throws at compile time.",

                importance:
                    "Java forces developers to explicitly consider recovery from these exceptional conditions.",

                code: `import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        try {

            throw new IOException(
                "File error"
            );

        } catch (IOException e) {

            System.out.println(
                e.getMessage()
            );

        }

    }

}`
            },

            {
                id: 2,

                title: "Unchecked Exceptions",

                explanation:
                    "Unchecked exceptions are subclasses of RuntimeException and are not required to be declared or caught.",

                importance:
                    "They often indicate programming errors such as null references or invalid array indexes.",

                code: `public class Main {

    public static void main(String[] args) {

        String name = null;

        System.out.println(
            name.length()
        );

    }

}`
            }

        ]

    },


    {
        id: 7,
        slug: "custom-exceptions",

        title: "Custom Exceptions",

        description:
            "Create your own application-specific exceptions.",

        topics: [

            {
                id: 1,

                title: "Creating a Custom Exception",

                explanation:
                    "A custom exception is created by extending Exception or RuntimeException.",

                importance:
                    "Custom exceptions make application errors more meaningful and improve code readability.",

                code: `class InvalidAgeException
        extends RuntimeException {

    public InvalidAgeException(
            String message
    ) {

        super(message);

    }

}


public class Main {

    public static void main(String[] args) {

        int age = 15;

        if (age < 18) {

            throw new InvalidAgeException(
                "Age must be at least 18"
            );

        }

    }

}`
            },

            {
                id: 2,

                title: "Custom Exception in Spring Boot",

                explanation:
                    "Custom exceptions are commonly used in service layers to represent business errors.",

                importance:
                    "They can be handled centrally using @RestControllerAdvice.",

                code: `public class UserNotFoundException
        extends RuntimeException {

    public UserNotFoundException(
            String message
    ) {

        super(message);

    }

}


// Service

User user = repository
        .findById(id)
        .orElseThrow(
            () -> new UserNotFoundException(
                "User not found"
            )
        );`
            }

        ]

    },


    {
        id: 8,
        slug: "try-with-resources",

        title: "Try With Resources",

        description:
            "Learn automatic resource management introduced in Java 7.",

        topics: [

            {
                id: 1,

                title: "Try-With-Resources",

                explanation:
                    "Try-with-resources automatically closes resources after the try block finishes.",

                importance:
                    "It reduces boilerplate code and prevents resource leaks.",

                code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {

    public static void main(String[] args) {

        try (

            BufferedReader reader =
                new BufferedReader(
                    new FileReader(
                        "data.txt"
                    )
                )

        ) {

            System.out.println(
                reader.readLine()
            );

        } catch (IOException e) {

            System.out.println(
                e.getMessage()
            );

        }

    }

}`
            }

        ]

    }

];