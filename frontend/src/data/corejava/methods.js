export const methodsTopics = [

    {
        id: 1,

        module: "methods",

        title: "What is a Method?",

        difficulty: "Beginner",

        concept:
            "A method is a block of code that performs a specific task and can be called whenever needed.",

        explanation: `
Methods help organize a Java program into smaller reusable blocks.

Instead of writing the same code multiple times, you can place the
logic inside a method and call that method whenever required.

A method can:

- Accept parameters
- Return a value
- Perform a specific task
        `,

        whyImportant: `
Methods improve code reusability, readability and maintainability.

They are one of the fundamental building blocks of Java programming
and are used extensively in real-world applications.
        `,

        syntax: `
returnType methodName() {

    // method body

}
        `,

        code: `
public class Main {

    static void greet() {

        System.out.println("Hello Java");

    }

    public static void main(String[] args) {

        greet();

    }
}
        `,

        output: `
Hello Java
        `,

        lineByLine: [
            {
                line: "static void greet()",
                explanation:
                    "Declares a method named greet that does not return a value."
            },

            {
                line: 'System.out.println("Hello Java");',
                explanation:
                    "Defines the task performed by the method."
            },

            {
                line: "greet();",
                explanation:
                    "Calls the greet method."
            }
        ],

        realWorldUse: `
Methods are used for tasks such as calculating totals, validating users,
saving data, sending notifications and processing business logic.
        `,

        interviewQuestions: [
            "What is a method in Java?",
            "Why do we use methods?",
            "What are the components of a method?",
            "What is the difference between defining and calling a method?"
        ],

        commonMistakes: [
            "Forgetting to call a method after defining it.",
            "Using an incorrect return type.",
            "Calling a non-static method directly from a static context."
        ]
    },


    {
        id: 2,

        module: "methods",

        title: "Method Declaration",

        difficulty: "Beginner",

        concept:
            "Method declaration defines the method name, return type, parameters and method body.",

        explanation: `
A method declaration generally contains:

1. Access modifier
2. Optional non-access modifiers
3. Return type
4. Method name
5. Parameters
6. Method body

Example:

public static int add(int a, int b)
        `,

        whyImportant: `
Understanding method declaration is necessary before working with
parameters, return values, overloading and object-oriented programming.
        `,

        syntax: `
accessModifier returnType methodName(parameters) {

    // method body

}
        `,

        code: `
public class Main {

    static void displayMessage() {

        System.out.println("Welcome");

    }

    public static void main(String[] args) {

        displayMessage();

    }
}
        `,

        output: `
Welcome
        `,

        lineByLine: [
            {
                line: "static void displayMessage()",
                explanation:
                    "Declares a static method named displayMessage with a void return type."
            },

            {
                line: "static",
                explanation:
                    "Allows the method to belong to the class."
            },

            {
                line: "void",
                explanation:
                    "Indicates that the method does not return a value."
            }
        ],

        realWorldUse: `
Methods are declared throughout Java applications for controller logic,
service logic, calculations, validations and database operations.
        `,

        interviewQuestions: [
            "What is method declaration?",
            "What are the parts of a method declaration?",
            "What is a return type?",
            "Can a method have no parameters?"
        ],

        commonMistakes: [
            "Forgetting parentheses after the method name.",
            "Using an invalid return type.",
            "Missing the method body braces."
        ]
    },


    {
        id: 3,

        module: "methods",

        title: "Method Parameters",

        difficulty: "Beginner",

        concept:
            "Parameters are variables declared in a method definition that receive values when the method is called.",

        explanation: `
Parameters allow methods to receive input.

For example:

void greet(String name)

Here, name is a parameter.

When the method is called:

greet("Saurabh");

The value "Saurabh" is called an argument.
        `,

        whyImportant: `
Parameters make methods flexible and reusable because the same method
can work with different input values.
        `,

        syntax: `
returnType methodName(dataType parameterName) {

}
        `,

        code: `
public class Main {

    static void greet(String name) {

        System.out.println("Hello " + name);

    }

    public static void main(String[] args) {

        greet("Saurabh");

        greet("Java");

    }
}
        `,

        output: `
Hello Saurabh
Hello Java
        `,

        lineByLine: [
            {
                line: "static void greet(String name)",
                explanation:
                    "Declares a method that accepts a String parameter named name."
            },

            {
                line: 'greet("Saurabh");',
                explanation:
                    "Calls the method and passes Saurabh as an argument."
            },

            {
                line: '"Hello " + name',
                explanation:
                    "Combines the text with the received parameter value."
            }
        ],

        realWorldUse: `
Parameters are used when passing data such as user IDs, names,
amounts, product IDs and request values to methods.
        `,

        interviewQuestions: [
            "What is a method parameter?",
            "What is the difference between a parameter and an argument?",
            "Can a method have multiple parameters?"
        ],

        commonMistakes: [
            "Passing arguments in the wrong order.",
            "Passing incompatible data types.",
            "Confusing parameters with local variables."
        ]
    },


    {
        id: 4,

        module: "methods",

        title: "Method Return Type",

        difficulty: "Beginner",

        concept:
            "The return type specifies the type of value that a method sends back to the caller.",

        explanation: `
A method can return a value using the return keyword.

For example:

int add(int a, int b) {

    return a + b;

}

The return type must be compatible with the returned value.

If a method does not return anything, its return type is void.
        `,

        whyImportant: `
Return values allow methods to calculate or process data and provide
the result to other parts of the application.
        `,

        syntax: `
returnType methodName() {

    return value;

}
        `,

        code: `
public class Main {

    static int add(int a, int b) {

        return a + b;

    }

    public static void main(String[] args) {

        int result = add(10, 20);

        System.out.println(result);

    }
}
        `,

        output: `
30
        `,

        lineByLine: [
            {
                line: "static int add(int a, int b)",
                explanation:
                    "Declares a method that returns an int value."
            },

            {
                line: "return a + b;",
                explanation:
                    "Returns the sum to the caller."
            },

            {
                line: "int result = add(10, 20);",
                explanation:
                    "Calls the method and stores the returned value."
            }
        ],

        realWorldUse: `
Return values are used in calculations, service methods, database
operations and business logic.
        `,

        interviewQuestions: [
            "What is a return type?",
            "What is the purpose of the return keyword?",
            "Can a void method return a value?",
            "Can a method return multiple values directly?"
        ],

        commonMistakes: [
            "Returning a value incompatible with the declared return type.",
            "Forgetting the return statement when required.",
            "Trying to assign the result of a void method."
        ]
    },


    {
        id: 5,

        module: "methods",

        title: "Calling a Method",

        difficulty: "Beginner",

        concept:
            "Calling a method executes the code defined inside that method.",

        explanation: `
After defining a method, it must be called to execute its code.

A static method can be called directly from another static method in
the same class.

An instance method generally requires an object.
        `,

        whyImportant: `
Understanding method calls is essential because methods organize
application behavior and program flow.
        `,

        syntax: `
methodName();

methodName(arguments);
        `,

        code: `
public class Main {

    static void display() {

        System.out.println("Method Executed");

    }

    public static void main(String[] args) {

        display();

    }
}
        `,

        output: `
Method Executed
        `,

        lineByLine: [
            {
                line: "static void display()",
                explanation:
                    "Defines the display method."
            },

            {
                line: "display();",
                explanation:
                    "Calls the method and executes its code."
            }
        ],

        realWorldUse: `
Methods are called throughout applications to perform actions such as
saving records, fetching data, validating input and calculating values.
        `,

        interviewQuestions: [
            "How do you call a method in Java?",
            "What happens when a method is called?",
            "Can one method call another method?"
        ],

        commonMistakes: [
            "Calling a method with the wrong number of arguments.",
            "Calling an instance method without an object from a static context."
        ]
    },


    {
        id: 6,

        module: "methods",

        title: "Methods with Arguments",

        difficulty: "Beginner",

        concept:
            "A method can accept one or more arguments to perform operations using dynamic input values.",

        explanation: `
Arguments are the actual values passed when a method is called.

A method can accept multiple parameters.

The arguments should match the required parameter types and order.
        `,

        whyImportant: `
Methods with arguments make programs reusable because the same logic
can operate on different values.
        `,

        syntax: `
returnType methodName(type1 value1, type2 value2) {

}
        `,

        code: `
public class Main {

    static void printSum(int a, int b) {

        System.out.println(a + b);

    }

    public static void main(String[] args) {

        printSum(10, 20);

        printSum(50, 100);

    }
}
        `,

        output: `
30
150
        `,

        lineByLine: [
            {
                line: "static void printSum(int a, int b)",
                explanation:
                    "Defines a method with two integer parameters."
            },

            {
                line: "printSum(10, 20);",
                explanation:
                    "Passes 10 and 20 as arguments."
            },

            {
                line: "System.out.println(a + b);",
                explanation:
                    "Adds and prints the received values."
            }
        ],

        realWorldUse: `
Methods with arguments are used when passing user input, IDs, amounts,
objects and other application data.
        `,

        interviewQuestions: [
            "Can a method accept multiple arguments?",
            "What is the difference between arguments and parameters?",
            "Does argument order matter?"
        ],

        commonMistakes: [
            "Passing arguments in the wrong order.",
            "Passing incompatible argument types.",
            "Providing too many or too few arguments."
        ]
    },


    {
        id: 7,

        module: "methods",

        title: "Method Overloading",

        difficulty: "Intermediate",

        concept:
            "Method overloading allows multiple methods to have the same name with different parameter lists.",

        explanation: `
Java supports compile-time polymorphism through method overloading.

Methods can have the same name if their parameters differ by:

- Number of parameters
- Type of parameters
- Order of parameter types

Changing only the return type is not sufficient for method overloading.
        `,

        whyImportant: `
Method overloading improves readability by allowing related operations
to use the same method name.
        `,

        syntax: `
void display(int number) {

}

void display(String text) {

}
        `,

        code: `
public class Main {

    static int add(int a, int b) {

        return a + b;

    }

    static int add(int a, int b, int c) {

        return a + b + c;

    }

    public static void main(String[] args) {

        System.out.println(add(10, 20));

        System.out.println(add(10, 20, 30));

    }
}
        `,

        output: `
30
60
        `,

        lineByLine: [
            {
                line: "static int add(int a, int b)",
                explanation:
                    "Defines an add method with two parameters."
            },

            {
                line: "static int add(int a, int b, int c)",
                explanation:
                    "Defines another add method with three parameters."
            },

            {
                line: "add(10, 20, 30)",
                explanation:
                    "Java selects the overloaded method that matches three arguments."
            }
        ],

        realWorldUse: `
Java libraries use method overloading extensively, such as different
versions of methods that accept different parameter types.
        `,

        interviewQuestions: [
            "What is method overloading?",
            "Is method overloading compile-time or runtime polymorphism?",
            "Can methods be overloaded by changing only the return type?",
            "What can be changed to overload a method?"
        ],

        commonMistakes: [
            "Trying to overload methods only by changing the return type.",
            "Creating ambiguous overloaded method calls.",
            "Confusing method overloading with method overriding."
        ]
    },


    {
        id: 8,

        module: "methods",

        title: "Static Methods",

        difficulty: "Intermediate",

        concept:
            "A static method belongs to the class rather than to a specific object.",

        explanation: `
Static methods can be called using the class name.

They are commonly used for utility operations that do not depend on
object-specific state.

The main method is also a static method.
        `,

        whyImportant: `
Static methods are useful for utility functions, helper methods,
factory methods and operations that do not require an object.
        `,

        syntax: `
class ClassName {

    static void methodName() {

    }

}
        `,

        code: `
public class Main {

    static void display() {

        System.out.println("Static Method");

    }

    public static void main(String[] args) {

        display();

    }
}
        `,

        output: `
Static Method
        `,

        lineByLine: [
            {
                line: "static void display()",
                explanation:
                    "Declares a method that belongs to the class."
            },

            {
                line: "display();",
                explanation:
                    "Calls the static method directly from another static method in the same class."
            }
        ],

        realWorldUse: `
Static methods are commonly used for utility classes, mathematical
operations and helper functions.
        `,

        interviewQuestions: [
            "What is a static method?",
            "Can a static method access instance variables directly?",
            "Why is the main method static?",
            "How do you call a static method?"
        ],

        commonMistakes: [
            "Accessing instance members directly from a static method.",
            "Using static methods when object-specific state is required."
        ]
    },


    {
        id: 9,

        module: "methods",

        title: "Instance Methods",

        difficulty: "Intermediate",

        concept:
            "An instance method belongs to an object and is generally called using an object reference.",

        explanation: `
Unlike static methods, instance methods operate on object-specific data.

To call an instance method, an object must usually be created first.
        `,

        whyImportant: `
Instance methods are fundamental to object-oriented programming because
they define the behavior of objects.
        `,

        syntax: `
ClassName object = new ClassName();

object.methodName();
        `,

        code: `
public class Main {

    void display() {

        System.out.println("Instance Method");

    }

    public static void main(String[] args) {

        Main object = new Main();

        object.display();

    }
}
        `,

        output: `
Instance Method
        `,

        lineByLine: [
            {
                line: "void display()",
                explanation:
                    "Defines a non-static instance method."
            },

            {
                line: "Main object = new Main();",
                explanation:
                    "Creates an object of the Main class."
            },

            {
                line: "object.display();",
                explanation:
                    "Calls the instance method using the object."
            }
        ],

        realWorldUse: `
Instance methods are used in domain objects such as User, Product,
Order and Employee to define object behavior.
        `,

        interviewQuestions: [
            "What is an instance method?",
            "What is the difference between static and instance methods?",
            "Can an instance method access static variables?"
        ],

        commonMistakes: [
            "Trying to call an instance method directly from a static context.",
            "Creating unnecessary objects when a static utility method is more appropriate."
        ]
    },


    {
        id: 10,

        module: "methods",

        title: "Recursion",

        difficulty: "Intermediate",

        concept:
            "Recursion is a technique where a method calls itself until a base condition is reached.",

        explanation: `
A recursive method must contain:

1. Base case
2. Recursive case

The base case stops the recursion.

The recursive case calls the method again with a modified value.

Without a proper base case, recursion can continue until a
StackOverflowError occurs.
        `,

        whyImportant: `
Recursion is useful for problems involving repeated smaller versions
of the same problem, such as factorials, tree traversal and algorithms.
        `,

        syntax: `
returnType methodName(value) {

    if (baseCondition) {

        return result;

    }

    return methodName(modifiedValue);

}
        `,

        code: `
public class Main {

    static int factorial(int number) {

        if (number == 1) {

            return 1;

        }

        return number * factorial(number - 1);

    }

    public static void main(String[] args) {

        System.out.println(factorial(5));

    }
}
        `,

        output: `
120
        `,

        lineByLine: [
            {
                line: "if (number == 1)",
                explanation:
                    "This is the base case that stops recursion."
            },

            {
                line: "return number * factorial(number - 1);",
                explanation:
                    "Calls the factorial method again with a smaller value."
            },

            {
                line: "factorial(5)",
                explanation:
                    "Starts the recursive calculation."
            }
        ],

        realWorldUse: `
Recursion is commonly used in tree traversal, divide-and-conquer
algorithms, mathematical calculations and certain DSA problems.
        `,

        interviewQuestions: [
            "What is recursion?",
            "What is a base case?",
            "What happens if recursion has no base case?",
            "What is the difference between recursion and iteration?",
            "What is StackOverflowError?"
        ],

        commonMistakes: [
            "Forgetting the base condition.",
            "Creating infinite recursion.",
            "Using recursion when iteration would be simpler and more memory efficient."
        ]
    }

];