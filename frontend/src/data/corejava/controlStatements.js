export const controlStatementsTopics = [

    {
        id: 1,

        module: "control-statements",

        title: "Introduction to Control Statements",

        difficulty: "Beginner",

        concept:
            "Control statements determine the order in which statements are executed in a Java program.",

        explanation: `
By default, Java executes statements from top to bottom.

Control statements allow a program to:

- Make decisions
- Repeat code
- Skip statements
- Stop execution of loops or switch cases

The main categories are:

1. Decision-making statements
2. Looping statements
3. Jump statements
        `,

        whyImportant: `
Control statements are essential for writing dynamic programs.

They allow applications to make decisions based on conditions and
repeat operations when necessary.
        `,

        syntax: `
if (condition) {

    // code

}
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int age = 20;

        if (age >= 18) {

            System.out.println("Eligible to vote");

        }

    }
}
        `,

        output: `
Eligible to vote
        `,

        lineByLine: [
            {
                line: "int age = 20;",
                explanation:
                    "Creates an integer variable named age."
            },

            {
                line: "if (age >= 18)",
                explanation:
                    "Checks whether the age is greater than or equal to 18."
            },

            {
                line: 'System.out.println("Eligible to vote");',
                explanation:
                    "Executes when the condition is true."
            }
        ],

        realWorldUse: `
Control statements are used for login validation, user permissions,
business rules, loops, menu systems and data processing.
        `,

        interviewQuestions: [
            "What are control statements in Java?",
            "What are the different types of control statements?",
            "Why do we use control statements?"
        ],

        commonMistakes: [
            "Using assignment = instead of comparison ==.",
            "Writing conditions that always evaluate to true.",
            "Forgetting braces in complex conditional logic."
        ]
    },


    {
        id: 2,

        module: "control-statements",

        title: "if Statement",

        difficulty: "Beginner",

        concept:
            "The if statement executes a block of code only when a specified condition is true.",

        explanation: `
The if statement evaluates a boolean expression.

If the condition is true, the code inside the if block executes.

If the condition is false, the block is skipped.
        `,

        whyImportant: `
The if statement is the basic building block for decision-making
in Java programs.
        `,

        syntax: `
if (condition) {

    // code to execute

}
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int marks = 80;

        if (marks >= 40) {

            System.out.println("Pass");

        }

    }
}
        `,

        output: `
Pass
        `,

        lineByLine: [
            {
                line: "int marks = 80;",
                explanation:
                    "Stores the marks value."
            },

            {
                line: "if (marks >= 40)",
                explanation:
                    "Checks whether marks are greater than or equal to 40."
            },

            {
                line: 'System.out.println("Pass");',
                explanation:
                    "Prints Pass when the condition is true."
            }
        ],

        realWorldUse: `
Used for validation, authentication checks, eligibility conditions
and business rules.
        `,

        interviewQuestions: [
            "What is an if statement?",
            "What type of expression does an if statement require?",
            "What happens if the condition is false?"
        ],

        commonMistakes: [
            "Using = instead of ==.",
            "Using a non-boolean condition.",
            "Forgetting curly braces when multiple statements are required."
        ]
    },


    {
        id: 3,

        module: "control-statements",

        title: "if-else Statement",

        difficulty: "Beginner",

        concept:
            "The if-else statement chooses between two blocks of code based on a condition.",

        explanation: `
If the condition is true, the if block executes.

If the condition is false, the else block executes.

Only one of the two blocks will execute.
        `,

        whyImportant: `
The if-else statement is useful when an application needs two possible
outcomes.
        `,

        syntax: `
if (condition) {

    // true block

} else {

    // false block

}
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int age = 16;

        if (age >= 18) {

            System.out.println("Adult");

        } else {

            System.out.println("Minor");

        }

    }
}
        `,

        output: `
Minor
        `,

        lineByLine: [
            {
                line: "if (age >= 18)",
                explanation:
                    "Checks whether the person is 18 or older."
            },

            {
                line: 'System.out.println("Adult");',
                explanation:
                    "Executes when the condition is true."
            },

            {
                line: 'System.out.println("Minor");',
                explanation:
                    "Executes when the condition is false."
            }
        ],

        realWorldUse: `
Used for login success or failure, payment approval or rejection,
pass or fail results and access decisions.
        `,

        interviewQuestions: [
            "What is the difference between if and if-else?",
            "Can both if and else blocks execute?",
            "Is else optional?"
        ],

        commonMistakes: [
            "Writing else with a condition.",
            "Using assignment instead of comparison.",
            "Incorrect placement of braces."
        ]
    },


    {
        id: 4,

        module: "control-statements",

        title: "else-if Ladder",

        difficulty: "Beginner",

        concept:
            "An else-if ladder is used to check multiple conditions and execute the first matching block.",

        explanation: `
Java checks conditions from top to bottom.

When a condition becomes true, its block executes and the remaining
conditions are skipped.

The final else block is optional and handles cases where none of the
conditions are true.
        `,

        whyImportant: `
Else-if ladders are useful when an application has multiple possible
conditions or categories.
        `,

        syntax: `
if (condition1) {

    // code

} else if (condition2) {

    // code

} else {

    // default code

}
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int marks = 75;

        if (marks >= 90) {

            System.out.println("Grade A");

        } else if (marks >= 75) {

            System.out.println("Grade B");

        } else if (marks >= 50) {

            System.out.println("Grade C");

        } else {

            System.out.println("Fail");

        }

    }
}
        `,

        output: `
Grade B
        `,

        lineByLine: [
            {
                line: "if (marks >= 90)",
                explanation:
                    "Checks the first condition."
            },

            {
                line: "else if (marks >= 75)",
                explanation:
                    "Checks this condition only if the first condition is false."
            },

            {
                line: "else",
                explanation:
                    "Executes when none of the previous conditions are true."
            }
        ],

        realWorldUse: `
Used for grading systems, salary ranges, tax calculations,
discount rules and status classification.
        `,

        interviewQuestions: [
            "What is an else-if ladder?",
            "How are conditions evaluated in an else-if ladder?",
            "Can multiple blocks execute in one else-if ladder?"
        ],

        commonMistakes: [
            "Placing a broader condition before a more specific condition.",
            "Creating unreachable conditions.",
            "Using multiple separate if statements when only one result is needed."
        ]
    },


    {
        id: 5,

        module: "control-statements",

        title: "Nested if Statement",

        difficulty: "Beginner",

        concept:
            "A nested if statement is an if statement placed inside another if or else block.",

        explanation: `
Nested if statements are used when one condition depends on another.

The inner condition is checked only when the outer condition allows
execution to reach it.
        `,

        whyImportant: `
Nested conditions are useful when multiple levels of validation
or authorization are required.
        `,

        syntax: `
if (condition1) {

    if (condition2) {

        // code

    }

}
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        boolean isLoggedIn = true;

        boolean isAdmin = true;

        if (isLoggedIn) {

            if (isAdmin) {

                System.out.println("Admin Access Granted");

            }

        }

    }
}
        `,

        output: `
Admin Access Granted
        `,

        lineByLine: [
            {
                line: "if (isLoggedIn)",
                explanation:
                    "Checks whether the user is logged in."
            },

            {
                line: "if (isAdmin)",
                explanation:
                    "Checks whether the logged-in user has admin access."
            },

            {
                line: 'System.out.println("Admin Access Granted");',
                explanation:
                    "Executes when both conditions are true."
            }
        ],

        realWorldUse: `
Used in authentication, authorization, validation workflows and
multi-level business rules.
        `,

        interviewQuestions: [
            "What is a nested if statement?",
            "When should nested if statements be used?",
            "Can nested if statements be replaced with logical operators?"
        ],

        commonMistakes: [
            "Creating deeply nested code that is difficult to read.",
            "Using nested if statements when a logical operator would be simpler."
        ]
    },


    {
        id: 6,

        module: "control-statements",

        title: "switch Statement",

        difficulty: "Beginner",

        concept:
            "The switch statement selects one block of code based on the value of an expression.",

        explanation: `
A switch statement compares an expression with different case values.

When a matching case is found, its code executes.

The break statement is traditionally used to stop execution from
continuing into the next case.

The default block runs when no case matches.
        `,

        whyImportant: `
Switch statements can make code easier to read when checking one value
against multiple fixed options.
        `,

        syntax: `
switch (value) {

    case 1:
        // code
        break;

    case 2:
        // code
        break;

    default:
        // code

}
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int day = 2;

        switch (day) {

            case 1:
                System.out.println("Monday");
                break;

            case 2:
                System.out.println("Tuesday");
                break;

            default:
                System.out.println("Invalid Day");

        }

    }
}
        `,

        output: `
Tuesday
        `,

        lineByLine: [
            {
                line: "switch (day)",
                explanation:
                    "Evaluates the value of day."
            },

            {
                line: "case 2:",
                explanation:
                    "Matches when the day value is 2."
            },

            {
                line: "break;",
                explanation:
                    "Exits the switch statement."
            },

            {
                line: "default:",
                explanation:
                    "Executes when no case matches."
            }
        ],

        realWorldUse: `
Used for menu selection, status handling, role processing and
fixed category-based logic.
        `,

        interviewQuestions: [
            "What is a switch statement?",
            "What is the purpose of break?",
            "What is the default case?",
            "What is switch fall-through?"
        ],

        commonMistakes: [
            "Forgetting break when fall-through is not intended.",
            "Using duplicate case values.",
            "Assuming default is mandatory."
        ]
    },


    {
        id: 7,

        module: "control-statements",

        title: "for Loop",

        difficulty: "Beginner",

        concept:
            "A for loop repeats a block of code while a specified condition remains true.",

        explanation: `
A traditional for loop contains:

1. Initialization
2. Condition
3. Update expression

The loop continues until the condition becomes false.
        `,

        whyImportant: `
For loops are commonly used when the number of iterations is known
or when processing indexed data.
        `,

        syntax: `
for (initialization; condition; update) {

    // code

}
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {

            System.out.println(i);

        }

    }
}
        `,

        output: `
1
2
3
4
5
        `,

        lineByLine: [
            {
                line: "int i = 1",
                explanation:
                    "Initializes the loop counter."
            },

            {
                line: "i <= 5",
                explanation:
                    "The loop continues while this condition is true."
            },

            {
                line: "i++",
                explanation:
                    "Increases i by one after each iteration."
            }
        ],

        realWorldUse: `
Used for processing arrays, generating reports, repeating calculations
and iterating through collections.
        `,

        interviewQuestions: [
            "What are the three parts of a for loop?",
            "When is a for loop preferred?",
            "Can a for loop run infinitely?"
        ],

        commonMistakes: [
            "Creating an infinite loop.",
            "Incorrect loop boundary conditions.",
            "Modifying the loop counter incorrectly."
        ]
    },


    {
        id: 8,

        module: "control-statements",

        title: "while Loop",

        difficulty: "Beginner",

        concept:
            "A while loop repeatedly executes a block of code as long as its condition is true.",

        explanation: `
The condition is checked before each iteration.

If the condition is false initially, the loop body does not execute
even once.
        `,

        whyImportant: `
While loops are useful when the number of iterations is not known
in advance.
        `,

        syntax: `
while (condition) {

    // code

}
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int i = 1;

        while (i <= 5) {

            System.out.println(i);

            i++;

        }

    }
}
        `,

        output: `
1
2
3
4
5
        `,

        lineByLine: [
            {
                line: "int i = 1;",
                explanation:
                    "Initializes the counter before the loop."
            },

            {
                line: "while (i <= 5)",
                explanation:
                    "Checks the condition before every iteration."
            },

            {
                line: "i++;",
                explanation:
                    "Updates the counter to eventually stop the loop."
            }
        ],

        realWorldUse: `
Used for reading data until a condition changes, retry logic,
user input processing and unknown-length operations.
        `,

        interviewQuestions: [
            "What is a while loop?",
            "What is the difference between for and while?",
            "Can a while loop execute zero times?"
        ],

        commonMistakes: [
            "Forgetting to update the loop variable.",
            "Creating an infinite loop.",
            "Using an incorrect condition."
        ]
    },


    {
        id: 9,

        module: "control-statements",

        title: "do-while Loop",

        difficulty: "Beginner",

        concept:
            "A do-while loop executes its body at least once before checking the condition.",

        explanation: `
Unlike a while loop, the condition is checked after the loop body.

Therefore, even if the condition is false initially, the loop executes
one time.
        `,

        whyImportant: `
The do-while loop is useful when an operation must execute at least
once before checking whether it should continue.
        `,

        syntax: `
do {

    // code

} while (condition);
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        int i = 1;

        do {

            System.out.println(i);

            i++;

        } while (i <= 5);

    }
}
        `,

        output: `
1
2
3
4
5
        `,

        lineByLine: [
            {
                line: "do {",
                explanation:
                    "Starts the loop body, which executes first."
            },

            {
                line: "System.out.println(i);",
                explanation:
                    "Executes before the condition is checked."
            },

            {
                line: "} while (i <= 5);",
                explanation:
                    "Checks whether another iteration should occur."
            }
        ],

        realWorldUse: `
Useful for menu-driven applications, input validation and operations
that must execute at least once.
        `,

        interviewQuestions: [
            "What is a do-while loop?",
            "What is the difference between while and do-while?",
            "Why does a do-while loop execute at least once?"
        ],

        commonMistakes: [
            "Forgetting the semicolon after while(condition).",
            "Creating an infinite loop.",
            "Using do-while when the loop should not execute if the condition is initially false."
        ]
    },


    {
        id: 10,

        module: "control-statements",

        title: "break and continue",

        difficulty: "Intermediate",

        concept:
            "The break statement terminates a loop or switch, while continue skips the current iteration of a loop.",

        explanation: `
break:

Immediately exits the nearest loop or switch statement.

continue:

Skips the remaining code in the current loop iteration and moves to
the next iteration.
        `,

        whyImportant: `
Break and continue provide additional control over loop execution.
They are useful when certain conditions require stopping or skipping
processing.
        `,

        syntax: `
break;

continue;
        `,

        code: `
public class Main {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {

            if (i == 3) {

                continue;

            }

            if (i == 8) {

                break;

            }

            System.out.println(i);

        }

    }
}
        `,

        output: `
1
2
4
5
6
7
        `,

        lineByLine: [
            {
                line: "if (i == 3)",
                explanation:
                    "Checks whether i is equal to 3."
            },

            {
                line: "continue;",
                explanation:
                    "Skips printing 3 and moves to the next iteration."
            },

            {
                line: "if (i == 8)",
                explanation:
                    "Checks whether i is equal to 8."
            },

            {
                line: "break;",
                explanation:
                    "Stops the loop completely."
            }
        ],

        realWorldUse: `
Break can stop processing when a required result is found.

Continue can skip invalid records while continuing to process the
remaining data.
        `,

        interviewQuestions: [
            "What is the difference between break and continue?",
            "Can break be used inside a switch statement?",
            "What happens when continue executes inside a loop?"
        ],

        commonMistakes: [
            "Using break when continue is required.",
            "Using continue in a way that prevents the loop condition from eventually becoming false.",
            "Adding unnecessary break and continue statements that make code difficult to read."
        ]
    }

];