export const thisKeywordTopics = [

    // ============================================================
    // 1. INTRODUCTION TO THIS KEYWORD
    // ============================================================

    {
        id: 1,
        module: "this-keyword",
        title: "What is this Keyword?",
        difficulty: "Easy",

        definition: `
The this keyword in Java refers to the current object of the class.
It is used to access instance variables, instance methods, and constructors
of the current object.
        `,

        explanation: `
The this keyword is commonly used when local variables and instance
variables have the same name.

It can also be used to:

1. Access current class variables
2. Call current class methods
3. Call another constructor using this()
4. Pass the current object as an argument
5. Return the current object
        `,

        example: `
class Student {

    String name;

    void setName(String name) {

        this.name = name;

    }

    void display() {

        System.out.println(this.name);

    }
}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        student.setName("Saurabh");

        student.display();
    }
}
        `,

        output: `
Saurabh
        `,

        keyPoints: [
            "this refers to the current object.",
            "It is mainly used inside instance methods and constructors.",
            "this helps distinguish instance variables from local variables.",
            "this() is used for constructor chaining."
        ]
    },


    // ============================================================
    // 2. ACCESS CURRENT CLASS VARIABLE
    // ============================================================

    {
        id: 2,
        module: "this-keyword",
        title: "Access Current Class Variable",
        difficulty: "Easy",

        definition: `
The this keyword can be used to access an instance variable of the
current object.
        `,

        example: `
class Employee {

    String name = "Saurabh";

    void display() {

        System.out.println(this.name);

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee = new Employee();

        employee.display();
    }
}
        `,

        output: `
Saurabh
        `,

        keyPoints: [
            "this.variableName accesses the current object's instance variable.",
            "It is useful when variable names are the same."
        ]
    },


    // ============================================================
    // 3. VARIABLE SHADOWING
    // ============================================================

    {
        id: 3,
        module: "this-keyword",
        title: "Resolve Variable Shadowing",
        difficulty: "Easy",

        explanation: `
Variable shadowing happens when a local variable or parameter has the
same name as an instance variable.

In this situation, the local variable gets priority.

The this keyword is used to access the instance variable.
        `,

        example: `
class Student {

    String name;

    Student(String name) {

        this.name = name;

    }

    void display() {

        System.out.println(name);

    }
}

public class Main {

    public static void main(String[] args) {

        Student student = new Student("Saurabh");

        student.display();
    }
}
        `,

        output: `
Saurabh
        `,

        keyPoints: [
            "Local variables can hide instance variables.",
            "this.name refers to the instance variable.",
            "name without this refers to the nearest local variable or parameter."
        ]
    },


    // ============================================================
    // 4. CALL CURRENT CLASS METHOD
    // ============================================================

    {
        id: 4,
        module: "this-keyword",
        title: "Call Current Class Method",
        difficulty: "Easy",

        definition: `
The this keyword can be used to explicitly call another instance method
of the current object.
        `,

        example: `
class Demo {

    void display() {

        this.message();

    }

    void message() {

        System.out.println("Hello Java");

    }
}

public class Main {

    public static void main(String[] args) {

        Demo demo = new Demo();

        demo.display();
    }
}
        `,

        output: `
Hello Java
        `,

        keyPoints: [
            "this.methodName() calls a method of the current object.",
            "Using this is optional in many normal method calls."
        ]
    },


    // ============================================================
    // 5. CALL CURRENT CLASS CONSTRUCTOR
    // ============================================================

    {
        id: 5,
        module: "this-keyword",
        title: "Call Current Class Constructor using this()",
        difficulty: "Medium",

        definition: `
this() is used to call another constructor of the same class.
        `,

        explanation: `
This process is called constructor chaining.

It helps avoid duplicate initialization code.
        `,

        example: `
class Student {

    String name;

    Student() {

        this("Saurabh");

    }

    Student(String name) {

        this.name = name;

    }

    void display() {

        System.out.println(name);

    }
}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        student.display();
    }
}
        `,

        output: `
Saurabh
        `,

        keyPoints: [
            "this() calls another constructor in the same class.",
            "this() must be the first statement in a constructor.",
            "Constructor chaining reduces duplicate code."
        ]
    },


    // ============================================================
    // 6. PARAMETERIZED this()
    // ============================================================

    {
        id: 6,
        module: "this-keyword",
        title: "Parameterized this() Constructor",
        difficulty: "Medium",

        explanation: `
this(arguments) calls another constructor of the current class
with matching parameters.
        `,

        example: `
class Employee {

    String name;
    int age;

    Employee() {

        this("Saurabh", 28);

    }

    Employee(String name, int age) {

        this.name = name;
        this.age = age;

    }

    void display() {

        System.out.println(name);
        System.out.println(age);

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee = new Employee();

        employee.display();
    }
}
        `,

        output: `
Saurabh
28
        `,

        keyPoints: [
            "this(arguments) calls another constructor.",
            "The arguments must match a constructor signature.",
            "It must be the first statement."
        ]
    },


    // ============================================================
    // 7. PASS CURRENT OBJECT AS ARGUMENT
    // ============================================================

    {
        id: 7,
        module: "this-keyword",
        title: "Pass Current Object as Argument",
        difficulty: "Medium",

        explanation: `
The this keyword can be passed as an argument to another method.

In this case, this represents the current object.
        `,

        example: `
class Student {

    void display() {

        printStudent(this);

    }

    void printStudent(Student student) {

        System.out.println("Student object received");

    }
}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        student.display();
    }
}
        `,

        output: `
Student object received
        `,

        keyPoints: [
            "this can be passed as a method argument.",
            "It represents the current object."
        ]
    },


    // ============================================================
    // 8. RETURN CURRENT OBJECT
    // ============================================================

    {
        id: 8,
        module: "this-keyword",
        title: "Return Current Object",
        difficulty: "Medium",

        explanation: `
A method can return this to return the current object.

This is commonly used in method chaining and fluent APIs.
        `,

        example: `
class Calculator {

    int number;

    Calculator add(int value) {

        number = number + value;

        return this;
    }

    Calculator multiply(int value) {

        number = number * value;

        return this;
    }

    void display() {

        System.out.println(number);
    }
}

public class Main {

    public static void main(String[] args) {

        new Calculator()
            .add(10)
            .multiply(2)
            .display();
    }
}
        `,

        output: `
20
        `,

        keyPoints: [
            "return this returns the current object.",
            "It allows method chaining.",
            "This pattern is used in fluent APIs and builder-style code."
        ]
    },


    // ============================================================
    // 9. this() RULES
    // ============================================================

    {
        id: 9,
        module: "this-keyword",
        title: "this() Rules",
        difficulty: "Medium",

        explanation: `
Important rules of this():

1. this() must be the first statement in a constructor.
2. this() calls another constructor in the same class.
3. this() and super() cannot both be directly used in the same constructor.
4. Recursive constructor calls are not allowed.
5. this() is used only inside constructors.
        `,

        keyPoints: [
            "this() must be first.",
            "this() calls a constructor of the same class.",
            "this() and super() cannot both be first.",
            "Recursive constructor chaining causes a compilation error."
        ]
    },


    // ============================================================
    // 10. this VS super
    // ============================================================

    {
        id: 10,
        module: "this-keyword",
        title: "this vs super",
        difficulty: "Medium",

        explanation: `
The this keyword refers to the current object.

The super keyword is used to access members and constructors of the
immediate parent class.
        `,

        comparison: [
            {
                feature: "Reference",
                thisKeyword: "Current class object",
                superKeyword: "Immediate parent class"
            },
            {
                feature: "Variable",
                thisKeyword: "Access current class variable",
                superKeyword: "Access parent class variable"
            },
            {
                feature: "Method",
                thisKeyword: "Call current class method",
                superKeyword: "Call parent class method"
            },
            {
                feature: "Constructor",
                thisKeyword: "Call another constructor using this()",
                superKeyword: "Call parent constructor using super()"
            }
        ]
    },


    // ============================================================
    // 11. LIMITATIONS OF this
    // ============================================================

    {
        id: 11,
        module: "this-keyword",
        title: "Limitations of this",
        difficulty: "Medium",

        limitations: [
            "this cannot be used directly in a static context.",
            "this() can only be used inside a constructor.",
            "this() must be the first statement.",
            "Recursive constructor calls using this() are not allowed."
        ]
    },


    // ============================================================
    // 12. COMMON MISTAKES
    // ============================================================

    {
        id: 12,
        module: "this-keyword",
        title: "Common Mistakes with this",
        difficulty: "Medium",

        mistakes: [
            {
                mistake: "Using this inside a static method",
                reason: "Static methods belong to the class, not a specific object."
            },
            {
                mistake: "Using this() after another statement",
                reason: "this() must be the first statement in a constructor."
            },
            {
                mistake: "Using this() and super() together directly",
                reason: "Both must be the first statement in a constructor."
            },
            {
                mistake: "Creating recursive constructor calls",
                reason: "A constructor cannot keep calling itself through this()."
            }
        ]
    },


    // ============================================================
    // 13. REAL-WORLD EXAMPLES
    // ============================================================

    {
        id: 13,
        module: "this-keyword",
        title: "Real-world Examples",
        difficulty: "Easy",

        examples: [
            {
                title: "Student",
                explanation: `
this.name is used when a constructor parameter name
and instance variable name are both name.
                `
            },
            {
                title: "Bank Account",
                explanation: `
this can be used to update and access the current
BankAccount object's balance.
                `
            },
            {
                title: "Builder Pattern",
                explanation: `
return this is commonly used to create method chains
such as object.setName().setAge().setAddress().
                `
            }
        ]
    },


    // ============================================================
    // 14. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 14,
        module: "this-keyword",
        title: "this Keyword Interview Questions",
        difficulty: "Hard",

        questions: [
            "What is the this keyword in Java?",
            "What does this refer to?",
            "Why is this used in constructors?",
            "What is variable shadowing?",
            "What is this()?",
            "Can this() call another constructor?",
            "Can this() and super() be used together?",
            "Can this be used in a static method?",
            "Can a method return this?",
            "How is this used in method chaining?",
            "What is the difference between this and super?"
        ]
    },


    // ============================================================
    // 15. CODING PROBLEMS
    // ============================================================

    {
        id: 15,
        module: "this-keyword",
        title: "this Keyword Coding Problems",
        difficulty: "Hard",

        problems: [
            "Create a Student class and resolve variable shadowing using this.",
            "Create multiple constructors and demonstrate constructor chaining using this().",
            "Create an Employee class with no-argument and parameterized constructors.",
            "Pass the current object to another method using this.",
            "Return the current object using return this.",
            "Create a Calculator using method chaining.",
            "Create a Builder-style class using this.",
            "Demonstrate the difference between this and super."
        ]
    }

];