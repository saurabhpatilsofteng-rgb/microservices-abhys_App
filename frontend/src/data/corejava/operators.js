export const operatorsTopics = [

    {
        id: 1,

        module: "operators",

        title: "Introduction to Operators",

        difficulty: "Beginner",

        concept:
            "Operators are special symbols that perform operations on variables and values.",

        explanation: `
Operators allow Java programs to perform calculations, comparisons
and logical operations.

For example:

+
-
*
/
>

Java provides different categories of operators depending on the
operation being performed.
        `,

        whyImportant: `
Operators are used in almost every Java program.

They are required for calculations, conditions, comparisons and
decision-making.
        `,

        syntax: `
operand operator operand

Example:

a + b
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int a = 10;

        int b = 20;

        int result = a + b;

        System.out.println(result);
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
                    "Creates an integer variable named a."
            },

            {
                line: "int b = 20;",
                explanation:
                    "Creates an integer variable named b."
            },

            {
                line: "int result = a + b;",
                explanation:
                    "Uses the addition operator to add a and b."
            }
        ],

        realWorldUse: `
Operators are used to calculate prices, totals, salaries, discounts,
conditions and many other application values.
        `,

        interviewQuestions: [
            "What is an operator in Java?",
            "What are the different types of operators?",
            "What is an operand?"
        ],

        commonMistakes: [
            "Confusing an operator with an operand.",
            "Using the wrong operator for a condition."
        ]
    },


    {
        id: 2,

        module: "operators",

        title: "Arithmetic Operators",

        difficulty: "Beginner",

        concept:
            "Arithmetic operators perform mathematical calculations on numeric values.",

        explanation: `
Java provides the following arithmetic operators:

+  Addition
-  Subtraction
*  Multiplication
/  Division
%  Modulus

The modulus operator returns the remainder after division.
        `,

        whyImportant: `
Arithmetic operators are required for calculations such as totals,
averages, percentages and financial calculations.
        `,

        syntax: `
a + b

a - b

a * b

a / b

a % b
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int a = 10;

        int b = 3;

        System.out.println(a + b);

        System.out.println(a - b);

        System.out.println(a * b);

        System.out.println(a / b);

        System.out.println(a % b);
    }
}
        `,

        output: `
13
7
30
3
1
        `,

        lineByLine: [
            {
                line: "a + b",
                explanation:
                    "Adds the values."
            },

            {
                line: "a - b",
                explanation:
                    "Subtracts b from a."
            },

            {
                line: "a * b",
                explanation:
                    "Multiplies the values."
            },

            {
                line: "a / b",
                explanation:
                    "Performs integer division."
            },

            {
                line: "a % b",
                explanation:
                    "Returns the remainder."
            }
        ],

        realWorldUse: `
Arithmetic operators are used in billing systems, salary calculations,
shopping carts, reports and mathematical operations.
        `,

        interviewQuestions: [
            "What are arithmetic operators?",
            "What does the modulus operator do?",
            "What is integer division in Java?",
            "What is the difference between / and %?"
        ],

        commonMistakes: [
            "Expecting integer division to return decimal values.",
            "Dividing an integer by zero.",
            "Confusing modulus with percentage."
        ]
    },


    {
        id: 3,

        module: "operators",

        title: "Unary Operators",

        difficulty: "Beginner",

        concept:
            "Unary operators perform an operation on a single operand.",

        explanation: `
Common unary operators include:

+  Unary plus
-  Unary minus
++ Increment
-- Decrement
!  Logical NOT

Increment and decrement operators can be prefix or postfix.
        `,

        whyImportant: `
Unary operators are frequently used in loops, counters and boolean
conditions.
        `,

        syntax: `
++value

value++

--value

value--

!condition
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int number = 10;

        number++;

        System.out.println(number);

        number--;

        System.out.println(number);

        boolean active = true;

        System.out.println(!active);
    }
}
        `,

        output: `
11
10
false
        `,

        lineByLine: [
            {
                line: "number++;",
                explanation:
                    "Increases the value of number by one."
            },

            {
                line: "number--;",
                explanation:
                    "Decreases the value of number by one."
            },

            {
                line: "!active",
                explanation:
                    "Reverses the boolean value."
            }
        ],

        realWorldUse: `
Unary operators are commonly used for loop counters, indexes,
status flags and boolean conditions.
        `,

        interviewQuestions: [
            "What are unary operators?",
            "What is the difference between prefix and postfix increment?",
            "What does the ! operator do?"
        ],

        commonMistakes: [
            "Confusing ++i and i++.",
            "Using increment operators in complex expressions without understanding evaluation order."
        ]
    },


    {
        id: 4,

        module: "operators",

        title: "Assignment Operators",

        difficulty: "Beginner",

        concept:
            "Assignment operators assign values to variables and can combine assignment with arithmetic operations.",

        explanation: `
The basic assignment operator is:

=

Java also provides compound assignment operators:

+=
-=
*=
/=
%=
        `,

        whyImportant: `
Assignment operators make code shorter and are frequently used when
updating counters, totals and variable values.
        `,

        syntax: `
value = 10;

value += 5;

value -= 2;
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int value = 10;

        value += 5;

        System.out.println(value);

        value *= 2;

        System.out.println(value);
    }
}
        `,

        output: `
15
30
        `,

        lineByLine: [
            {
                line: "int value = 10;",
                explanation:
                    "Assigns the value 10 to value."
            },

            {
                line: "value += 5;",
                explanation:
                    "Adds 5 to the current value."
            },

            {
                line: "value *= 2;",
                explanation:
                    "Multiplies the current value by 2."
            }
        ],

        realWorldUse: `
Compound assignment operators are useful for updating balances,
quantities, scores and counters.
        `,

        interviewQuestions: [
            "What is the difference between = and ==?",
            "What are compound assignment operators?",
            "What does += do?"
        ],

        commonMistakes: [
            "Using = instead of == in conditions.",
            "Not understanding that += updates the existing value."
        ]
    },


    {
        id: 5,

        module: "operators",

        title: "Relational Operators",

        difficulty: "Beginner",

        concept:
            "Relational operators compare two values and return a boolean result.",

        explanation: `
Relational operators include:

==  Equal to
!=  Not equal to
>   Greater than
<   Less than
>=  Greater than or equal to
<=  Less than or equal to
        `,

        whyImportant: `
Relational operators are used in if statements, loops, validation
and decision-making.
        `,

        syntax: `
a == b

a > b

a <= b
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int age = 25;

        System.out.println(age >= 18);

        System.out.println(age < 18);

        System.out.println(age == 25);
    }
}
        `,

        output: `
true
false
true
        `,

        lineByLine: [
            {
                line: "age >= 18",
                explanation:
                    "Checks whether age is greater than or equal to 18."
            },

            {
                line: "age < 18",
                explanation:
                    "Checks whether age is less than 18."
            },

            {
                line: "age == 25",
                explanation:
                    "Checks whether age is equal to 25."
            }
        ],

        realWorldUse: `
Relational operators are used for validation, eligibility checks,
filtering data and controlling application flow.
        `,

        interviewQuestions: [
            "What are relational operators?",
            "What is the difference between = and ==?",
            "What is the return type of a relational operation?"
        ],

        commonMistakes: [
            "Using = instead of ==.",
            "Using == to compare String content instead of equals()."
        ]
    },


    {
        id: 6,

        module: "operators",

        title: "Logical Operators",

        difficulty: "Beginner",

        concept:
            "Logical operators combine or modify boolean expressions.",

        explanation: `
Java provides three main logical operators:

&&  Logical AND
||  Logical OR
!   Logical NOT

AND returns true when both conditions are true.

OR returns true when at least one condition is true.

NOT reverses a boolean value.
        `,

        whyImportant: `
Logical operators are essential for combining multiple conditions in
application logic.
        `,

        syntax: `
condition1 && condition2

condition1 || condition2

!condition
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int age = 25;

        boolean hasLicense = true;

        boolean canDrive = age >= 18 && hasLicense;

        System.out.println(canDrive);
    }
}
        `,

        output: `
true
        `,

        lineByLine: [
            {
                line: "age >= 18",
                explanation:
                    "Checks whether the person is at least 18."
            },

            {
                line: "hasLicense",
                explanation:
                    "Contains the boolean license status."
            },

            {
                line: "age >= 18 && hasLicense",
                explanation:
                    "Both conditions must be true."
            }
        ],

        realWorldUse: `
Logical operators are used in authentication, authorization,
validation and business rules.
        `,

        interviewQuestions: [
            "What is the difference between && and ||?",
            "What does ! do?",
            "What is short-circuit evaluation?"
        ],

        commonMistakes: [
            "Confusing && with &.",
            "Confusing || with |.",
            "Using multiple conditions without understanding operator precedence."
        ]
    },


    {
        id: 7,

        module: "operators",

        title: "Bitwise Operators",

        difficulty: "Intermediate",

        concept:
            "Bitwise operators perform operations on the binary representation of integer values.",

        explanation: `
Java provides bitwise operators such as:

&   AND
|   OR
^   XOR
~   Complement

These operators work bit by bit on integer values.
        `,

        whyImportant: `
Bitwise operators are useful in low-level programming, permissions,
flags and performance-sensitive operations.
        `,

        syntax: `
a & b

a | b

a ^ b

~a
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int a = 5;

        int b = 3;

        System.out.println(a & b);

        System.out.println(a | b);

        System.out.println(a ^ b);
    }
}
        `,

        output: `
1
7
6
        `,

        lineByLine: [
            {
                line: "a & b",
                explanation:
                    "Performs bitwise AND."
            },

            {
                line: "a | b",
                explanation:
                    "Performs bitwise OR."
            },

            {
                line: "a ^ b",
                explanation:
                    "Performs bitwise XOR."
            }
        ],

        realWorldUse: `
Bitwise operations can be used for flags, permissions, binary data
processing and low-level system operations.
        `,

        interviewQuestions: [
            "What are bitwise operators?",
            "What is the difference between & and &&?",
            "What does XOR do?",
            "What is bitwise complement?"
        ],

        commonMistakes: [
            "Confusing bitwise operators with logical operators.",
            "Using bitwise operations without understanding binary representation."
        ]
    },


    {
        id: 8,

        module: "operators",

        title: "Shift Operators",

        difficulty: "Intermediate",

        concept:
            "Shift operators move the binary bits of an integer to the left or right.",

        explanation: `
Java provides:

<<   Left shift
>>   Signed right shift
>>>  Unsigned right shift

Left shifting generally moves bits to the left.

Right shifting moves bits to the right.
        `,

        whyImportant: `
Shift operators are useful for binary manipulation and some
performance-oriented calculations.
        `,

        syntax: `
number << 1

number >> 1

number >>> 1
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int number = 8;

        System.out.println(number << 1);

        System.out.println(number >> 1);
    }
}
        `,

        output: `
16
4
        `,

        lineByLine: [
            {
                line: "number << 1",
                explanation:
                    "Shifts the bits one position to the left."
            },

            {
                line: "number >> 1",
                explanation:
                    "Shifts the bits one position to the right."
            }
        ],

        realWorldUse: `
Shift operators are used in binary algorithms, flags, encoding and
low-level programming.
        `,

        interviewQuestions: [
            "What are shift operators?",
            "What is the difference between >> and >>>?",
            "What does left shift do?"
        ],

        commonMistakes: [
            "Assuming >> and >>> always produce the same result.",
            "Using shift operators without understanding signed binary numbers."
        ]
    },


    {
        id: 9,

        module: "operators",

        title: "Ternary Operator",

        difficulty: "Beginner",

        concept:
            "The ternary operator is a shorthand conditional operator that returns one of two values based on a condition.",

        explanation: `
The ternary operator uses this format:

condition ? valueIfTrue : valueIfFalse

It can often be used as a short alternative to a simple if-else
statement.
        `,

        whyImportant: `
The ternary operator can make simple conditional assignments more
concise.
        `,

        syntax: `
condition ? value1 : value2;
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int age = 20;

        String result = age >= 18
                ? "Adult"
                : "Minor";

        System.out.println(result);
    }
}
        `,

        output: `
Adult
        `,

        lineByLine: [
            {
                line: "age >= 18",
                explanation:
                    "Evaluates the condition."
            },

            {
                line: '? "Adult"',
                explanation:
                    "Returns Adult when the condition is true."
            },

            {
                line: ': "Minor"',
                explanation:
                    "Returns Minor when the condition is false."
            }
        ],

        realWorldUse: `
The ternary operator is useful for conditional assignments, display
values and simple decision logic.
        `,

        interviewQuestions: [
            "What is the ternary operator?",
            "What is the syntax of the ternary operator?",
            "Can the ternary operator replace every if-else statement?"
        ],

        commonMistakes: [
            "Using nested ternary operators that make code difficult to read.",
            "Using ternary expressions for complex business logic."
        ]
    },


    {
        id: 10,

        module: "operators",

        title: "Operator Precedence and Associativity",

        difficulty: "Intermediate",

        concept:
            "Operator precedence determines which operation is performed first, while associativity determines the evaluation direction when operators have the same precedence.",

        explanation: `
Consider this expression:

10 + 5 * 2

Multiplication has higher precedence than addition.

Therefore Java evaluates:

5 * 2

first, followed by:

10 + 10

Parentheses can be used to explicitly control evaluation order.
        `,

        whyImportant: `
Understanding precedence prevents unexpected results in mathematical
and logical expressions.
        `,

        syntax: `
a + b * c

(a + b) * c
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int result1 = 10 + 5 * 2;

        int result2 = (10 + 5) * 2;

        System.out.println(result1);

        System.out.println(result2);
    }
}
        `,

        output: `
20
30
        `,

        lineByLine: [
            {
                line: "10 + 5 * 2",
                explanation:
                    "Multiplication happens first, resulting in 10 + 10."
            },

            {
                line: "(10 + 5) * 2",
                explanation:
                    "Parentheses force addition to happen first."
            }
        ],

        realWorldUse: `
Operator precedence is important when writing calculations, conditions,
validation rules and complex expressions.
        `,

        interviewQuestions: [
            "What is operator precedence?",
            "What is operator associativity?",
            "How can you control operator evaluation order?"
        ],

        commonMistakes: [
            "Assuming expressions are always evaluated from left to right.",
            "Writing complex expressions without parentheses.",
            "Misunderstanding precedence between arithmetic and logical operators."
        ]
    }

];