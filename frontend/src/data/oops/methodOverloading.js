export const methodOverloadingTopics = [

    // ============================================================
    // 1. WHAT IS METHOD OVERLOADING?
    // ============================================================

    {
        id: 1,
        module: "method-overloading",
        title: "What is Method Overloading?",
        concept: "Method overloading means creating multiple methods with the same name but different parameter lists.",
        difficulty: "Easy",

        theory: `
Method overloading allows multiple methods to have the same name.

The methods must differ in their parameter list.

They can differ by:

- Number of parameters
- Parameter types
- Parameter order

Example:

add(int a, int b)

add(int a, int b, int c)

add(double a, double b)

The compiler decides which overloaded method to call.
`,

        example: `
class Calculator {

    int add(
        int a,
        int b
    ) {

        return a + b;

    }

    int add(
        int a,
        int b,
        int c
    ) {

        return a + b + c;

    }
}

public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            new Calculator();

        System.out.println(
            calculator.add(10, 20)
        );

        System.out.println(
            calculator.add(10, 20, 30)
        );

    }
}
`,

        output: `
30
60
`
    },


    // ============================================================
    // 2. COMPILE-TIME POLYMORPHISM
    // ============================================================

    {
        id: 2,
        module: "method-overloading",
        title: "Compile-Time Polymorphism",
        concept: "Method overloading is a form of compile-time polymorphism because the compiler selects the method based on the arguments.",
        difficulty: "Easy",

        theory: `
Method overloading is also called:

Compile-time polymorphism

or:

Static polymorphism

The compiler determines which method should be called based on:

- Number of arguments
- Argument types
- Argument order

The decision is made during compilation.
`,

        example: `
class Printer {

    void print(
        String message
    ) {

        System.out.println(
            "String: " + message
        );

    }

    void print(
        int number
    ) {

        System.out.println(
            "Number: " + number
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Printer printer =
            new Printer();

        printer.print("Hello");

        printer.print(100);

    }
}
`,

        output: `
String: Hello
Number: 100
`
    },


    // ============================================================
    // 3. RULES OF OVERLOADING
    // ============================================================

    {
        id: 3,
        module: "method-overloading",
        title: "Rules of Method Overloading",
        concept: "Overloaded methods must have the same name and different parameter lists.",
        difficulty: "Medium",

        theory: `
Important rules:

1. Method names must be the same.

2. Parameter lists must be different.

3. Methods can differ by number of parameters.

4. Methods can differ by parameter types.

5. Methods can differ by parameter order when the parameter
   types are different.

6. Return type alone cannot overload a method.

7. Access modifiers may be different.

8. Static methods can also be overloaded.

9. Constructors can also be overloaded.
`
    },


    // ============================================================
    // 4. DIFFERENT NUMBER OF PARAMETERS
    // ============================================================

    {
        id: 4,
        module: "method-overloading",
        title: "Different Number of Parameters",
        concept: "Methods can be overloaded by changing the number of parameters.",
        difficulty: "Easy",

        theory: `
One of the simplest ways to overload a method is to change
the number of parameters.

Example:

add(int a, int b)

add(int a, int b, int c)
`,

        example: `
class Calculator {

    int add(
        int a,
        int b
    ) {

        return a + b;

    }

    int add(
        int a,
        int b,
        int c
    ) {

        return a + b + c;

    }
}

public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            new Calculator();

        System.out.println(
            calculator.add(5, 10)
        );

        System.out.println(
            calculator.add(5, 10, 15)
        );

    }
}
`,

        output: `
15
30
`
    },


    // ============================================================
    // 5. DIFFERENT PARAMETER TYPES
    // ============================================================

    {
        id: 5,
        module: "method-overloading",
        title: "Different Parameter Types",
        concept: "Methods can be overloaded by using different parameter data types.",
        difficulty: "Easy",

        theory: `
Methods can have the same number of parameters but different types.

Example:

add(int a, int b)

add(double a, double b)
`,

        example: `
class Calculator {

    int add(
        int a,
        int b
    ) {

        return a + b;

    }

    double add(
        double a,
        double b
    ) {

        return a + b;

    }
}

public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            new Calculator();

        System.out.println(
            calculator.add(10, 20)
        );

        System.out.println(
            calculator.add(10.5, 20.5)
        );

    }
}
`,

        output: `
30
31.0
`
    },


    // ============================================================
    // 6. DIFFERENT PARAMETER ORDER
    // ============================================================

    {
        id: 6,
        module: "method-overloading",
        title: "Different Parameter Order",
        concept: "Methods can be overloaded by changing the order of parameters when the parameter types differ.",
        difficulty: "Medium",

        theory: `
The following methods are different:

show(int number, String name)

show(String name, int number)

Because their parameter sequences are different.
`,

        example: `
class Demo {

    void show(
        int number,
        String name
    ) {

        System.out.println(
            number + " " + name
        );

    }

    void show(
        String name,
        int number
    ) {

        System.out.println(
            name + " " + number
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Demo demo =
            new Demo();

        demo.show(1, "Saurabh");

        demo.show("Java", 17);

    }
}
`,

        output: `
1 Saurabh
Java 17
`
    },


    // ============================================================
    // 7. RETURN TYPE AND OVERLOADING
    // ============================================================

    {
        id: 7,
        module: "method-overloading",
        title: "Return Type and Method Overloading",
        concept: "Changing only the return type does not create a valid overloaded method.",
        difficulty: "Medium",

        theory: `
This is invalid:

int add(int a, int b)

double add(int a, int b)

Both methods have exactly the same:

- Method name
- Number of parameters
- Parameter types
- Parameter order

The return type is not used to distinguish overloaded methods.

The parameter list must be different.
`,

        example: `
class Calculator {

    int add(
        int a,
        int b
    ) {

        return a + b;

    }

    double add(
        double a,
        double b
    ) {

        return a + b;

    }
}

public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            new Calculator();

        System.out.println(
            calculator.add(10, 20)
        );

    }
}
`,

        output: `
30
`
    },


    // ============================================================
    // 8. ACCESS MODIFIERS
    // ============================================================

    {
        id: 8,
        module: "method-overloading",
        title: "Access Modifiers and Overloading",
        concept: "Overloaded methods can use different access modifiers as long as their parameter lists differ.",
        difficulty: "Medium",

        theory: `
Access modifiers do not determine whether methods are overloaded.

The following is valid:

public void show(int number)

private void show(String message)

The methods are overloaded because their parameter lists differ.
`,

        example: `
class Demo {

    public void show(
        int number
    ) {

        System.out.println(
            "Number: " + number
        );

    }

    private void show(
        String message
    ) {

        System.out.println(
            "Message: " + message
        );

    }

    public void display() {

        show(100);

        show("Hello");

    }
}

public class Main {

    public static void main(String[] args) {

        Demo demo =
            new Demo();

        demo.display();

    }
}
`,

        output: `
Number: 100
Message: Hello
`
    },


    // ============================================================
    // 9. STATIC METHOD OVERLOADING
    // ============================================================

    {
        id: 9,
        module: "method-overloading",
        title: "Static Method Overloading",
        concept: "Static methods can also be overloaded by using different parameter lists.",
        difficulty: "Medium",

        theory: `
Static methods can be overloaded.

Example:

static void show(int number)

static void show(String message)

The compiler selects the correct method based on the arguments.
`,

        example: `
class Calculator {

    static int multiply(
        int a,
        int b
    ) {

        return a * b;

    }

    static double multiply(
        double a,
        double b
    ) {

        return a * b;

    }
}

public class Main {

    public static void main(String[] args) {

        System.out.println(
            Calculator.multiply(5, 10)
        );

        System.out.println(
            Calculator.multiply(2.5, 4.0)
        );

    }
}
`,

        output: `
50
10.0
`
    },


    // ============================================================
    // 10. CONSTRUCTOR OVERLOADING
    // ============================================================

    {
        id: 10,
        module: "method-overloading",
        title: "Constructor Overloading",
        concept: "Constructor overloading means creating multiple constructors with different parameter lists.",
        difficulty: "Easy",

        theory: `
Constructors can also be overloaded.

Example:

Student()

Student(String name)

Student(String name, int age)

The correct constructor is selected based on the arguments
provided during object creation.
`,

        example: `
class Student {

    String name;

    Student() {

        this.name = "Unknown";

    }

    Student(
        String name
    ) {

        this.name = name;

    }

    void display() {

        System.out.println(
            name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student student1 =
            new Student();

        Student student2 =
            new Student("Saurabh");

        student1.display();

        student2.display();

    }
}
`,

        output: `
Unknown
Saurabh
`
    },


    // ============================================================
    // 11. TYPE PROMOTION
    // ============================================================

    {
        id: 11,
        module: "method-overloading",
        title: "Type Promotion in Method Overloading",
        concept: "Java can perform widening primitive conversion when selecting an overloaded method.",
        difficulty: "Hard",

        theory: `
When an exact matching overloaded method is not available,
Java may use widening primitive conversion.

Example:

byte -> short -> int -> long -> float -> double

If:

show(int number)

is available and an int argument is passed, it is an exact match.

If only:

show(long number)

is available, an int argument can be widened to long.

Widening is preferred over boxing in overload resolution.
`,

        example: `
class Demo {

    void show(
        long number
    ) {

        System.out.println(
            "Long: " + number
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Demo demo =
            new Demo();

        int number = 10;

        demo.show(number);

    }
}
`,

        output: `
Long: 10
`
    },


    // ============================================================
    // 12. METHOD RESOLUTION
    // ============================================================

    {
        id: 12,
        module: "method-overloading",
        title: "Method Resolution",
        concept: "The compiler selects the most appropriate overloaded method based on the argument types and Java's overload resolution rules.",
        difficulty: "Hard",

        theory: `
Java attempts to find the most suitable overloaded method.

Important matching concepts include:

1. Exact match
2. Widening primitive conversion
3. Boxing and unboxing
4. Varargs

If more than one candidate is equally suitable, the call may
be ambiguous and result in a compile-time error.
`,

        example: `
class Demo {

    void show(
        int number
    ) {

        System.out.println(
            "Integer version"
        );

    }

    void show(
        long number
    ) {

        System.out.println(
            "Long version"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Demo demo =
            new Demo();

        demo.show(10);

    }
}
`,

        output: `
Integer version
`
    },


    // ============================================================
    // 13. VARARGS OVERLOADING
    // ============================================================

    {
        id: 13,
        module: "method-overloading",
        title: "Varargs Overloading",
        concept: "Varargs methods can be overloaded, but method resolution rules can produce ambiguity in some combinations.",
        difficulty: "Hard",

        theory: `
Varargs allow a method to accept zero or more arguments.

Syntax:

void show(int... numbers)

A varargs parameter is treated as an array inside the method.

Varargs methods can participate in overloading.

However, fixed-arity methods are generally considered before
varargs methods when a suitable fixed-arity match exists.
`,

        example: `
class Demo {

    void show(
        int number
    ) {

        System.out.println(
            "Single number: " + number
        );

    }

    void show(
        int... numbers
    ) {

        System.out.println(
            "Multiple numbers: "
            + numbers.length
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Demo demo =
            new Demo();

        demo.show(10);

        demo.show(10, 20, 30);

    }
}
`,

        output: `
Single number: 10
Multiple numbers: 3
`
    },


    // ============================================================
    // 14. AMBIGUOUS METHOD CALLS
    // ============================================================

    {
        id: 14,
        module: "method-overloading",
        title: "Ambiguous Method Calls",
        concept: "An ambiguous method call occurs when the compiler cannot determine which overloaded method is the best match.",
        difficulty: "Hard",

        theory: `
An overloaded call can become ambiguous when multiple methods
are equally suitable.

For example:

show(String value)

show(Integer value)

Then:

show(null)

is ambiguous because null can match both String and Integer,
and neither type is more specific than the other.

The compiler reports an error.
`
    },


    // ============================================================
    // 15. OVERLOADING VS OVERRIDING
    // ============================================================

    {
        id: 15,
        module: "method-overloading",
        title: "Method Overloading vs Method Overriding",
        concept: "Overloading uses the same method name with different parameters, while overriding provides a new implementation of an inherited method.",
        difficulty: "Medium",

        theory: `
Method Overloading:

- Same method name
- Different parameters
- Usually in the same class
- Compile-time polymorphism

Method Overriding:

- Same method signature
- Parent-child relationship
- Runtime polymorphism
- Requires inheritance
`
    },


    // ============================================================
    // 16. COMMON MISTAKES
    // ============================================================

    {
        id: 16,
        module: "method-overloading",
        title: "Common Method Overloading Mistakes",
        concept: "Common mistakes include changing only the return type, confusing overloading with overriding, and creating ambiguous calls.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Changing only the return type.

This does not create a valid overload.


2. Confusing overloading with overriding.

Overloading requires different parameters.

Overriding requires the same method signature.


3. Assuming access modifiers create overloading.

Different access modifiers alone are not enough.


4. Ignoring type promotion.

Java may select a widened type if an exact match is unavailable.


5. Creating ambiguous null calls.

Example:

show(String value)

show(Integer value)

show(null)

causes ambiguity.


6. Incorrect varargs combinations.

Multiple overloaded varargs methods may cause ambiguous calls.
`
    },


    // ============================================================
    // 17. REAL-WORLD EXAMPLE - CALCULATOR
    // ============================================================

    {
        id: 17,
        module: "method-overloading",
        title: "Real-World Example: Calculator",
        concept: "A calculator can overload methods to support different numbers and types of operands.",
        difficulty: "Easy",

        theory: `
A calculator may provide multiple add operations.

Examples:

add(int, int)

add(double, double)

add(int, int, int)

The method name remains meaningful while supporting
different input combinations.
`,

        example: `
class Calculator {

    int add(
        int a,
        int b
    ) {

        return a + b;

    }

    int add(
        int a,
        int b,
        int c
    ) {

        return a + b + c;

    }

    double add(
        double a,
        double b
    ) {

        return a + b;

    }
}

public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            new Calculator();

        System.out.println(
            calculator.add(10, 20)
        );

        System.out.println(
            calculator.add(10, 20, 30)
        );

        System.out.println(
            calculator.add(10.5, 20.5)
        );

    }
}
`,

        output: `
30
60
31.0
`
    },


    // ============================================================
    // 18. REAL-WORLD EXAMPLE - USER REGISTRATION
    // ============================================================

    {
        id: 18,
        module: "method-overloading",
        title: "Real-World Example: User Registration",
        concept: "Method overloading can support different levels of input when performing the same conceptual operation.",
        difficulty: "Medium",

        theory: `
A registration system may support:

register(name)

register(name, email)

register(name, email, phone)

Each method represents the same operation but accepts
different amounts of information.
`,

        example: `
class UserService {

    void register(
        String name
    ) {

        System.out.println(
            "Registered: " + name
        );

    }

    void register(
        String name,
        String email
    ) {

        System.out.println(
            "Registered: "
            + name
            + " "
            + email
        );

    }
}

public class Main {

    public static void main(String[] args) {

        UserService service =
            new UserService();

        service.register(
            "Saurabh"
        );

        service.register(
            "Saurabh",
            "saurabh@email.com"
        );

    }
}
`,

        output: `
Registered: Saurabh
Registered: Saurabh saurbh@email.com
`
    },


    // ============================================================
    // 19. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 19,
        module: "method-overloading",
        title: "Method Overloading Interview Questions",
        concept: "Interview questions commonly test overloading rules, return types, type promotion, static methods, and ambiguity.",
        difficulty: "Medium",

        theory: `
1. What is method overloading?

Creating multiple methods with the same name but different
parameter lists.


2. Is method overloading compile-time or runtime polymorphism?

Compile-time polymorphism.


3. Can methods be overloaded by changing only the return type?

No.


4. Can static methods be overloaded?

Yes.


5. Can constructors be overloaded?

Yes.


6. Can overloaded methods have different access modifiers?

Yes, if their parameter lists differ.


7. Can overloaded methods throw different exceptions?

Yes. The exception declarations do not define the overload;
the parameter list must still differ.


8. What are valid ways to overload a method?

- Different number of parameters
- Different parameter types
- Different parameter order when types differ


9. What is method resolution?

The compiler's process of selecting the most appropriate
overloaded method.


10. What can cause an ambiguous method call?

When multiple overloaded methods are equally applicable.


11. What is the difference between overloading and overriding?

Overloading uses different parameters and is resolved at compile time.

Overriding uses the same method signature in inheritance and is
resolved dynamically at runtime.
`
    },


    // ============================================================
    // 20. CODING PROBLEM - ADD NUMBERS
    // ============================================================

    {
        id: 20,
        module: "method-overloading",
        title: "Coding Problem: Add Numbers",
        concept: "Create overloaded add methods for two and three integers.",
        difficulty: "Easy",

        theory: `
Problem:

Create a Calculator class.

Create:

add(int a, int b)

add(int a, int b, int c)

Print the results.
`,

        example: `
class Calculator {

    int add(
        int a,
        int b
    ) {

        return a + b;

    }

    int add(
        int a,
        int b,
        int c
    ) {

        return a + b + c;

    }
}

public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            new Calculator();

        System.out.println(
            calculator.add(5, 10)
        );

        System.out.println(
            calculator.add(5, 10, 15)
        );

    }
}
`,

        output: `
15
30
`
    },


    // ============================================================
    // 21. CODING PROBLEM - AREA CALCULATOR
    // ============================================================

    {
        id: 21,
        module: "method-overloading",
        title: "Coding Problem: Area Calculator",
        concept: "Use overloaded methods to calculate areas using different parameter types and counts.",
        difficulty: "Medium",

        theory: `
Problem:

Create overloaded methods named:

area()

For:

1. Square

area(int side)

2. Rectangle

area(int length, int width)

Use method overloading.
`,

        example: `
class AreaCalculator {

    int area(
        int side
    ) {

        return side * side;

    }

    int area(
        int length,
        int width
    ) {

        return length * width;

    }
}

public class Main {

    public static void main(String[] args) {

        AreaCalculator calculator =
            new AreaCalculator();

        System.out.println(
            calculator.area(5)
        );

        System.out.println(
            calculator.area(5, 10)
        );

    }
}
`,

        output: `
25
50
`
    },


    // ============================================================
    // 22. CODING PROBLEM - PRINT DATA
    // ============================================================

    {
        id: 22,
        module: "method-overloading",
        title: "Coding Problem: Print Different Data Types",
        concept: "Create overloaded print methods for integer, string, and double values.",
        difficulty: "Easy",

        theory: `
Problem:

Create overloaded methods:

print(int value)

print(String value)

print(double value)

Call each method with the appropriate argument.
`,

        example: `
class Printer {

    void print(
        int value
    ) {

        System.out.println(
            "Integer: " + value
        );

    }

    void print(
        String value
    ) {

        System.out.println(
            "String: " + value
        );

    }

    void print(
        double value
    ) {

        System.out.println(
            "Double: " + value
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Printer printer =
            new Printer();

        printer.print(100);

        printer.print("Java");

        printer.print(10.5);

    }
}
`,

        output: `
Integer: 100
String: Java
Double: 10.5
`
    },


    // ============================================================
    // 23. CODING PROBLEM - VARARGS
    // ============================================================

    {
        id: 23,
        module: "method-overloading",
        title: "Coding Problem: Sum Using Varargs",
        concept: "Create a method using varargs and overload it with a fixed-parameter method.",
        difficulty: "Hard",

        theory: `
Problem:

Create:

sum(int a, int b)

and:

sum(int... numbers)

Demonstrate how Java selects the appropriate method.
`,

        example: `
class Calculator {

    int sum(
        int a,
        int b
    ) {

        return a + b;

    }

    int sum(
        int... numbers
    ) {

        int total = 0;

        for (int number : numbers) {

            total += number;

        }

        return total;

    }
}

public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            new Calculator();

        System.out.println(
            calculator.sum(10, 20)
        );

        System.out.println(
            calculator.sum(10, 20, 30, 40)
        );

    }
}
`,

        output: `
30
100
`
    }

];