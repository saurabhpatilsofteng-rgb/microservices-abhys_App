export const variablesDataTypesTopics = [

    {
        id: 1,

        module: "variables-data-types",

        title: "What is a Variable?",

        difficulty: "Beginner",

        concept:
            "A variable is a named memory location used to store data that can be used and changed during program execution.",

        explanation: `
Variables allow a Java program to store information.

Every variable has:

1. A data type
2. A variable name
3. A value

The data type determines what type of data the variable can store.

For example, an int variable stores whole numbers while a boolean
variable stores true or false.
        `,

        whyImportant: `
Variables are one of the most fundamental concepts in programming.

They are used to store user information, calculations, configuration
values, application state and data processed by a program.
        `,

        syntax: `
dataType variableName = value;
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int age = 25;

        String name = "Saurabh";

        System.out.println(name);

        System.out.println(age);
    }
}
        `,

        output: `
Saurabh
25
        `,

        lineByLine: [
            {
                line: 'int age = 25;',
                explanation:
                    "Creates an integer variable named age and stores the value 25."
            },

            {
                line: 'String name = "Saurabh";',
                explanation:
                    "Creates a String reference variable named name."
            },

            {
                line: 'System.out.println(name);',
                explanation:
                    "Prints the value stored in the name variable."
            }
        ],

        realWorldUse: `
Variables are used everywhere in applications.

For example, a banking application may store account balance, customer
name, account number and transaction amount in variables.
        `,

        interviewQuestions: [
            "What is a variable in Java?",
            "What are the rules for naming variables?",
            "What is the difference between a variable and a constant?",
            "Where are local variables stored?"
        ],

        commonMistakes: [
            "Using a Java keyword as a variable name.",
            "Starting a variable name with a number.",
            "Using a variable before initializing it.",
            "Confusing the variable name with its value."
        ]
    },


    {
        id: 2,

        module: "variables-data-types",

        title: "Variable Declaration and Initialization",

        difficulty: "Beginner",

        concept:
            "Variable declaration creates a variable, while initialization assigns its first value.",

        explanation: `
A variable can be declared first and initialized later.

Declaration:

int age;

Initialization:

age = 25;

A variable can also be declared and initialized in one statement.
        `,

        whyImportant: `
Understanding declaration and initialization helps you understand
variable lifecycle and prevents errors caused by using uninitialized
local variables.
        `,

        syntax: `
Declaration:
dataType variableName;

Initialization:
variableName = value;

Declaration and Initialization:
dataType variableName = value;
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int age;

        age = 25;

        String name = "Saurabh";

        System.out.println(age);

        System.out.println(name);
    }
}
        `,

        output: `
25
Saurabh
        `,

        lineByLine: [
            {
                line: "int age;",
                explanation:
                    "Declares an integer variable named age."
            },

            {
                line: "age = 25;",
                explanation:
                    "Initializes the age variable with the value 25."
            },

            {
                line: 'String name = "Saurabh";',
                explanation:
                    "Declares and initializes the name variable in one statement."
            }
        ],

        realWorldUse: `
A value may not be available when a variable is declared.

For example, a program can declare a variable first and assign a value
later after receiving input from a user or database.
        `,

        interviewQuestions: [
            "What is variable declaration?",
            "What is variable initialization?",
            "Can a local variable be used without initialization?",
            "What is the difference between declaration and initialization?"
        ],

        commonMistakes: [
            "Using an uninitialized local variable.",
            "Declaring the same local variable twice in the same scope.",
            "Assigning an incompatible data type."
        ]
    },


    {
        id: 3,

        module: "variables-data-types",

        title: "Primitive Data Types",

        difficulty: "Beginner",

        concept:
            "Primitive data types are the basic built-in data types provided directly by Java.",

        explanation: `
Java has eight primitive data types:

byte
short
int
long
float
double
char
boolean

Primitive variables store actual values rather than references to objects.
        `,

        whyImportant: `
Primitive data types are used in almost every Java application.

Choosing the correct type helps manage memory usage and represents data
correctly.
        `,

        syntax: `
byte smallNumber = 10;

short shortNumber = 1000;

int number = 100;

long bigNumber = 100000L;

float price = 99.5F;

double salary = 50000.50;

char grade = 'A';

boolean active = true;
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int age = 25;

        double salary = 50000.50;

        char grade = 'A';

        boolean active = true;

        System.out.println(age);
        System.out.println(salary);
        System.out.println(grade);
        System.out.println(active);
    }
}
        `,

        output: `
25
50000.5
A
true
        `,

        lineByLine: [
            {
                line: "int age = 25;",
                explanation:
                    "Stores a whole number."
            },

            {
                line: "double salary = 50000.50;",
                explanation:
                    "Stores a decimal number."
            },

            {
                line: "char grade = 'A';",
                explanation:
                    "Stores a single character."
            },

            {
                line: "boolean active = true;",
                explanation:
                    "Stores a true or false value."
            }
        ],

        realWorldUse: `
Primitive types are used for values such as age, salary, price,
status, grade, quantity and calculation results.
        `,

        interviewQuestions: [
            "How many primitive data types are there in Java?",
            "What are the eight primitive data types?",
            "What is the difference between primitive and non-primitive data types?",
            "Which data type is used for true and false?"
        ],

        commonMistakes: [
            "Using double quotes for char values.",
            "Forgetting the L suffix for large long literals when required.",
            "Forgetting the F suffix for float literals.",
            "Assuming String is a primitive data type."
        ]
    },


    {
        id: 4,

        module: "variables-data-types",

        title: "Non-Primitive Data Types",

        difficulty: "Beginner",

        concept:
            "Non-primitive data types represent objects and reference types rather than simple primitive values.",

        explanation: `
Common non-primitive data types include:

String
Arrays
Classes
Interfaces
Objects

A non-primitive variable generally stores a reference to an object.
        `,

        whyImportant: `
Java is an object-oriented programming language.

Non-primitive types are used to represent complex data and application
objects.
        `,

        syntax: `
String name = "Saurabh";

int[] numbers = {10, 20, 30};
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        String name = "Saurabh";

        int[] numbers = {10, 20, 30};

        System.out.println(name);

        System.out.println(numbers[0]);
    }
}
        `,

        output: `
Saurabh
10
        `,

        lineByLine: [
            {
                line: 'String name = "Saurabh";',
                explanation:
                    "Creates a String object reference."
            },

            {
                line: "int[] numbers = {10, 20, 30};",
                explanation:
                    "Creates an array containing multiple integer values."
            },

            {
                line: "numbers[0]",
                explanation:
                    "Accesses the first element of the array."
            }
        ],

        realWorldUse: `
Non-primitive types are used to represent customers, employees,
products, orders, arrays and other complex application data.
        `,

        interviewQuestions: [
            "What are non-primitive data types?",
            "Is String primitive or non-primitive?",
            "What is the difference between primitive and reference types?",
            "What does a reference variable store?"
        ],

        commonMistakes: [
            "Thinking String is a primitive type.",
            "Accessing a null reference.",
            "Confusing an object with a reference variable."
        ]
    },


    {
        id: 5,

        module: "variables-data-types",

        title: "Integer Data Types",

        difficulty: "Beginner",

        concept:
            "Java provides byte, short, int and long for storing whole numbers.",

        explanation: `
The integer primitive data types are:

byte  - 8 bits
short - 16 bits
int   - 32 bits
long  - 64 bits

The int type is commonly used for normal integer values.

The long type is used when a larger range is required.
        `,

        whyImportant: `
Choosing the correct integer type is important for representing numeric
data and avoiding overflow.
        `,

        syntax: `
byte value1 = 100;

short value2 = 10000;

int value3 = 100000;

long value4 = 10000000000L;
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        byte a = 100;

        short b = 10000;

        int c = 100000;

        long d = 10000000000L;

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
    }
}
        `,

        output: `
100
10000
100000
10000000000
        `,

        lineByLine: [
            {
                line: "byte a = 100;",
                explanation:
                    "Stores a small whole number using the byte type."
            },

            {
                line: "short b = 10000;",
                explanation:
                    "Stores a whole number using the short type."
            },

            {
                line: "int c = 100000;",
                explanation:
                    "Stores a standard integer value."
            },

            {
                line: "long d = 10000000000L;",
                explanation:
                    "Stores a large integer value. The L suffix identifies the literal as long."
            }
        ],

        realWorldUse: `
Integer types can store age, quantity, product count, IDs, timestamps
and other whole-number values.
        `,

        interviewQuestions: [
            "What are the integer data types in Java?",
            "What is the default integer type in Java?",
            "Why do we use L with a long literal?",
            "What is integer overflow?"
        ],

        commonMistakes: [
            "Assigning a value outside the range of the data type.",
            "Forgetting the L suffix for long literals.",
            "Using byte or short when int is more appropriate without considering arithmetic promotion."
        ]
    },


    {
        id: 6,

        module: "variables-data-types",

        title: "Floating Point Data Types",

        difficulty: "Beginner",

        concept:
            "Java uses float and double data types to store decimal or fractional numbers.",

        explanation: `
Java provides two floating-point types:

float  - single precision
double - double precision

A double is the default type for decimal literals.

A float value usually requires the F or f suffix.
        `,

        whyImportant: `
Floating-point types are used for measurements, prices, percentages,
scientific calculations and other decimal values.
        `,

        syntax: `
float price = 99.99F;

double salary = 50000.50;
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        float price = 99.99F;

        double salary = 50000.50;

        System.out.println(price);

        System.out.println(salary);
    }
}
        `,

        output: `
99.99
50000.5
        `,

        lineByLine: [
            {
                line: "float price = 99.99F;",
                explanation:
                    "Stores a decimal value as float. F marks the literal as a float."
            },

            {
                line: "double salary = 50000.50;",
                explanation:
                    "Stores a decimal value using double precision."
            }
        ],

        realWorldUse: `
Floating-point values can represent measurements, percentages,
coordinates and scientific values.

For exact financial calculations, BigDecimal is generally preferred
over float or double.
        `,

        interviewQuestions: [
            "What is the difference between float and double?",
            "Why is double the default for decimal literals?",
            "Why do we use F with float?",
            "Can floating-point values have precision issues?"
        ],

        commonMistakes: [
            "Writing float price = 99.99 without F.",
            "Using float or double when exact decimal financial precision is required.",
            "Expecting all decimal values to be represented exactly in binary floating-point."
        ]
    },


    {
        id: 7,

        module: "variables-data-types",

        title: "Character Data Type",

        difficulty: "Beginner",

        concept:
            "The char data type stores a single Unicode character.",

        explanation: `
A char stores one character.

Characters are written using single quotes.

Examples:

'A'
'B'
'1'
'#'

Java char values can also represent Unicode characters.
        `,

        whyImportant: `
The char type is useful when working with individual characters,
grades, symbols and character-based processing.
        `,

        syntax: `
char grade = 'A';

char symbol = '#';
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        char grade = 'A';

        char symbol = '#';

        System.out.println(grade);

        System.out.println(symbol);
    }
}
        `,

        output: `
A
#
        `,

        lineByLine: [
            {
                line: "char grade = 'A';",
                explanation:
                    "Stores the single character A."
            },

            {
                line: "char symbol = '#';",
                explanation:
                    "Stores the # character."
            }
        ],

        realWorldUse: `
The char type can be used for grades, menu choices, symbols and
processing individual characters from text.
        `,

        interviewQuestions: [
            "What is the size of char in Java?",
            "Can char store numbers?",
            "What is the difference between char and String?",
            "Why does char use single quotes?"
        ],

        commonMistakes: [
            "Using double quotes for char values.",
            "Trying to store multiple characters in a char.",
            "Confusing the character '1' with the numeric value 1."
        ]
    },


    {
        id: 8,

        module: "variables-data-types",

        title: "Boolean Data Type",

        difficulty: "Beginner",

        concept:
            "The boolean data type stores one of two logical values: true or false.",

        explanation: `
Boolean values are mainly used in conditions and decision-making.

A boolean variable can contain only:

true
false

Boolean values are commonly used with if statements, loops and logical
operators.
        `,

        whyImportant: `
Boolean values control application flow.

For example, they can represent whether a user is logged in, an account
is active or a condition has been satisfied.
        `,

        syntax: `
boolean isLoggedIn = true;

boolean isAdmin = false;
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        boolean isLoggedIn = true;

        if (isLoggedIn) {

            System.out.println("Welcome User");

        }
    }
}
        `,

        output: `
Welcome User
        `,

        lineByLine: [
            {
                line: "boolean isLoggedIn = true;",
                explanation:
                    "Creates a boolean variable with the value true."
            },

            {
                line: "if (isLoggedIn)",
                explanation:
                    "Checks whether the boolean value is true."
            },

            {
                line: 'System.out.println("Welcome User");',
                explanation:
                    "Runs only when the condition is true."
            }
        ],

        realWorldUse: `
Boolean variables are commonly used for authentication status,
validation results, feature flags and application conditions.
        `,

        interviewQuestions: [
            "What values can boolean store?",
            "What is the default value of a boolean instance variable?",
            "Can a boolean store 0 or 1 in Java?",
            "Where are boolean values commonly used?"
        ],

        commonMistakes: [
            "Writing True or False instead of lowercase true or false.",
            "Trying to assign 0 or 1 directly to a boolean.",
            "Using assignment = instead of comparison when a comparison is intended."
        ]
    },


    {
        id: 9,

        module: "variables-data-types",

        title: "Type Casting",

        difficulty: "Intermediate",

        concept:
            "Type casting converts a value from one data type to another data type.",

        explanation: `
Java supports two main types of casting:

1. Widening Casting

A smaller type is automatically converted into a larger compatible type.

Example:

int to double

2. Narrowing Casting

A larger type is explicitly converted into a smaller type.

Example:

double to int
        `,

        whyImportant: `
Type casting is important when different parts of an application use
different numeric types.

It is also important for avoiding compilation errors and understanding
possible data loss.
        `,

        syntax: `
Widening:

int number = 10;
double value = number;

Narrowing:

double price = 99.99;
int result = (int) price;
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int number = 10;

        double value = number;

        double price = 99.99;

        int result = (int) price;

        System.out.println(value);

        System.out.println(result);
    }
}
        `,

        output: `
10.0
99
        `,

        lineByLine: [
            {
                line: "double value = number;",
                explanation:
                    "Automatically converts the int value to double. This is widening."
            },

            {
                line: "int result = (int) price;",
                explanation:
                    "Explicitly converts the double value to int. The decimal part is discarded."
            }
        ],

        realWorldUse: `
Type casting is used when processing numeric values from APIs,
databases, calculations and different application layers.
        `,

        interviewQuestions: [
            "What is type casting?",
            "What is widening casting?",
            "What is narrowing casting?",
            "Why can narrowing casting cause data loss?",
            "Is explicit casting required for widening conversion?"
        ],

        commonMistakes: [
            "Expecting narrowing conversion to round the value automatically.",
            "Ignoring possible overflow during narrowing.",
            "Forgetting explicit casting when converting from a wider numeric type to a narrower one."
        ]
    },


    {
        id: 10,

        module: "variables-data-types",

        title: "Type Conversion and Type Promotion",

        difficulty: "Intermediate",

        concept:
            "Type conversion changes one compatible type into another, while type promotion automatically converts smaller numeric types during expressions.",

        explanation: `
Java can automatically convert compatible smaller numeric types into
larger types.

During arithmetic operations, byte, short and char values are generally
promoted to int.

For example:

byte a = 10;
byte b = 20;

int result = a + b;

The result is int because Java promotes the operands before performing
the arithmetic operation.
        `,

        whyImportant: `
Understanding type promotion helps prevent unexpected compilation
errors and explains why arithmetic expressions involving byte and short
often produce an int result.
        `,

        syntax: `
byte a = 10;

byte b = 20;

int result = a + b;
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        byte a = 10;

        byte b = 20;

        int result = a + b;

        double total = result + 10.5;

        System.out.println(result);

        System.out.println(total);
    }
}
        `,

        output: `
30
40.5
        `,

        lineByLine: [
            {
                line: "byte a = 10;",
                explanation:
                    "Creates a byte variable."
            },

            {
                line: "byte b = 20;",
                explanation:
                    "Creates another byte variable."
            },

            {
                line: "int result = a + b;",
                explanation:
                    "Java promotes both byte values to int before addition, so the result is int."
            },

            {
                line: "double total = result + 10.5;",
                explanation:
                    "The int result is promoted to double because it is combined with a double value."
            }
        ],

        realWorldUse: `
Type promotion occurs automatically in calculations involving different
numeric data types, such as totals, averages and mathematical formulas.
        `,

        interviewQuestions: [
            "What is type conversion in Java?",
            "What is type promotion?",
            "Why does byte + byte produce an int?",
            "What happens when int and double are used in the same expression?",
            "What is numeric promotion?"
        ],

        commonMistakes: [
            "Trying to assign byte + byte directly to a byte variable.",
            "Ignoring automatic promotion during arithmetic.",
            "Assuming the result type is always the same as the operand type."
        ]
    }

];