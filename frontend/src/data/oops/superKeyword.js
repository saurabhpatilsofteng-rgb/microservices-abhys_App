export const superKeywordTopics = [

    // ============================================================
    // 1. INTRODUCTION TO SUPER KEYWORD
    // ============================================================

    {
        id: 1,
        module: "super-keyword",
        title: "What is super Keyword?",
        difficulty: "Easy",

        definition: `
The super keyword in Java is used to refer to the immediate parent class object.
It is mainly used to access parent class variables, methods, and constructors.
        `,

        explanation: `
When a child class inherits from a parent class, Java provides the super keyword
to access members of the parent class.

The super keyword can be used for:

1. Accessing parent class variables
2. Calling parent class methods
3. Calling parent class constructors
        `,

        example: `
class Parent {
    String name = "Parent";
}

class Child extends Parent {

    void display() {
        System.out.println(super.name);
    }
}

public class Main {

    public static void main(String[] args) {

        Child child = new Child();

        child.display();
    }
}
        `,

        output: `
Parent
        `,

        keyPoints: [
            "super refers to the immediate parent class.",
            "super can access parent variables.",
            "super can call parent methods.",
            "super() can call parent constructors."
        ]
    },


    // ============================================================
    // 2. ACCESS PARENT CLASS VARIABLE
    // ============================================================

    {
        id: 2,
        module: "super-keyword",
        title: "Access Parent Class Variable",
        difficulty: "Easy",

        definition: `
The super keyword can be used to access a variable from the parent class.
        `,

        explanation: `
If both parent and child classes contain variables with the same name,
the child variable hides the parent variable.

The super keyword allows us to access the parent variable.
        `,

        example: `
class Parent {

    String name = "Parent";

}

class Child extends Parent {

    String name = "Child";

    void display() {

        System.out.println(name);

        System.out.println(super.name);

    }
}

public class Main {

    public static void main(String[] args) {

        Child child = new Child();

        child.display();

    }
}
        `,

        output: `
Child
Parent
        `,

        keyPoints: [
            "Child variables can hide parent variables.",
            "super.variableName accesses the parent variable.",
            "Without super, the child variable is accessed."
        ]
    },


    // ============================================================
    // 3. CALL PARENT CLASS METHOD
    // ============================================================

    {
        id: 3,
        module: "super-keyword",
        title: "Call Parent Class Method",
        difficulty: "Easy",

        definition: `
The super keyword can be used to call a method of the parent class.
        `,

        explanation: `
When a child class overrides a method, the parent version of that method
can still be called using super.methodName().
        `,

        example: `
class Parent {

    void display() {

        System.out.println("Parent display method");

    }
}

class Child extends Parent {

    @Override
    void display() {

        super.display();

        System.out.println("Child display method");

    }
}

public class Main {

    public static void main(String[] args) {

        Child child = new Child();

        child.display();

    }
}
        `,

        output: `
Parent display method
Child display method
        `,

        keyPoints: [
            "super.methodName() calls the parent method.",
            "It is commonly used with method overriding.",
            "The parent method executes before the child method in this example."
        ]
    },


    // ============================================================
    // 4. CALL PARENT CONSTRUCTOR
    // ============================================================

    {
        id: 4,
        module: "super-keyword",
        title: "Call Parent Constructor using super()",
        difficulty: "Medium",

        definition: `
super() is used to call the constructor of the immediate parent class.
        `,

        explanation: `
When an object of a child class is created, the parent class constructor
must execute first.

Java automatically calls the parent constructor if super() is not explicitly written.
        `,

        example: `
class Parent {

    Parent() {

        System.out.println("Parent Constructor");

    }
}

class Child extends Parent {

    Child() {

        super();

        System.out.println("Child Constructor");

    }
}

public class Main {

    public static void main(String[] args) {

        new Child();

    }
}
        `,

        output: `
Parent Constructor
Child Constructor
        `,

        keyPoints: [
            "super() calls the parent constructor.",
            "super() must be the first statement in a constructor.",
            "Java automatically inserts super() if possible."
        ]
    },


    // ============================================================
    // 5. PARAMETERIZED SUPER()
    // ============================================================

    {
        id: 5,
        module: "super-keyword",
        title: "Parameterized super() Constructor",
        difficulty: "Medium",

        definition: `
super(arguments) is used to call a parameterized constructor of the parent class.
        `,

        example: `
class Parent {

    Parent(String name) {

        System.out.println("Parent Name: " + name);

    }
}

class Child extends Parent {

    Child() {

        super("Saurabh");

        System.out.println("Child Constructor");

    }
}

public class Main {

    public static void main(String[] args) {

        new Child();

    }
}
        `,

        output: `
Parent Name: Saurabh
Child Constructor
        `,

        keyPoints: [
            "super(arguments) calls a specific parent constructor.",
            "The arguments must match the parent constructor parameters.",
            "super(arguments) must be the first statement."
        ]
    },


    // ============================================================
    // 6. SUPER() RULES
    // ============================================================

    {
        id: 6,
        module: "super-keyword",
        title: "super() Rules",
        difficulty: "Medium",

        explanation: `
Important rules of super():

1. super() must be the first statement in a constructor.
2. this() and super() cannot both be used directly in the same constructor.
3. super() calls the immediate parent constructor.
4. If super() is not written, Java inserts it automatically when possible.
5. A parameterized parent constructor requires matching arguments.
        `,

        keyPoints: [
            "super() must be first.",
            "this() and super() cannot both be first.",
            "super() calls only the immediate parent constructor.",
            "Java automatically adds super() when a no-argument parent constructor exists."
        ]
    },


    // ============================================================
    // 7. CONSTRUCTOR CHAINING
    // ============================================================

    {
        id: 7,
        module: "super-keyword",
        title: "Constructor Chaining with super",
        difficulty: "Medium",

        explanation: `
Constructor chaining occurs when constructors of parent and child classes
execute in sequence.

The parent constructor executes before the child constructor.
        `,

        example: `
class A {

    A() {

        System.out.println("A Constructor");

    }
}

class B extends A {

    B() {

        super();

        System.out.println("B Constructor");

    }
}

class C extends B {

    C() {

        super();

        System.out.println("C Constructor");

    }
}

public class Main {

    public static void main(String[] args) {

        new C();

    }
}
        `,

        output: `
A Constructor
B Constructor
C Constructor
        `,

        keyPoints: [
            "Parent constructors execute before child constructors.",
            "Constructor execution follows the inheritance hierarchy.",
            "super() creates the constructor chain."
        ]
    },


    // ============================================================
    // 8. SUPER VS THIS
    // ============================================================

    {
        id: 8,
        module: "super-keyword",
        title: "super vs this",
        difficulty: "Medium",

        explanation: `
The this keyword refers to the current object.

The super keyword refers to the immediate parent class object.
        `,

        comparison: [
            {
                feature: "Reference",
                thisKeyword: "Current class object",
                superKeyword: "Parent class object"
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
    // 9. SUPER WITH METHOD OVERRIDING
    // ============================================================

    {
        id: 9,
        module: "super-keyword",
        title: "super with Method Overriding",
        difficulty: "Medium",

        explanation: `
When a child class overrides a parent method, the original parent method
can be accessed using super.
        `,

        example: `
class Animal {

    void sound() {

        System.out.println("Animal makes a sound");

    }
}

class Dog extends Animal {

    @Override
    void sound() {

        super.sound();

        System.out.println("Dog barks");

    }
}

public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();

        dog.sound();

    }
}
        `,

        output: `
Animal makes a sound
Dog barks
        `
    },


    // ============================================================
    // 10. CONSTRUCTOR EXECUTION ORDER
    // ============================================================

    {
        id: 10,
        module: "super-keyword",
        title: "Constructor Execution Order",
        difficulty: "Hard",

        explanation: `
When an object is created in an inheritance hierarchy, constructors execute
from the top-most parent class to the child class.

Example:

GrandParent
      ↓
Parent
      ↓
Child
        `,

        example: `
class GrandParent {

    GrandParent() {

        System.out.println("GrandParent Constructor");

    }
}

class Parent extends GrandParent {

    Parent() {

        System.out.println("Parent Constructor");

    }
}

class Child extends Parent {

    Child() {

        System.out.println("Child Constructor");

    }
}

public class Main {

    public static void main(String[] args) {

        new Child();

    }
}
        `,

        output: `
GrandParent Constructor
Parent Constructor
Child Constructor
        `,

        keyPoints: [
            "Top-most parent constructor executes first.",
            "Each constructor implicitly or explicitly calls super().",
            "Child constructor executes last."
        ]
    },


    // ============================================================
    // 11. LIMITATIONS OF SUPER
    // ============================================================

    {
        id: 11,
        module: "super-keyword",
        title: "Limitations of super",
        difficulty: "Medium",

        explanation: `
The super keyword has several limitations.
        `,

        limitations: [
            "super cannot directly access private parent members.",
            "super cannot be used in a static context.",
            "super refers only to the immediate parent class.",
            "super() can only be used inside a constructor.",
            "super() must be the first statement of a constructor."
        ]
    },


    // ============================================================
    // 12. COMMON MISTAKES
    // ============================================================

    {
        id: 12,
        module: "super-keyword",
        title: "Common Mistakes with super",
        difficulty: "Medium",

        mistakes: [

            {
                mistake: "Using super() after another statement",
                reason: "super() must be the first statement in a constructor."
            },

            {
                mistake: "Using this() and super() together",
                reason: "Both must be the first statement, so they cannot both appear directly in the same constructor."
            },

            {
                mistake: "Accessing private parent variables",
                reason: "Private members cannot be directly accessed by child classes."
            },

            {
                mistake: "Using super in a static method",
                reason: "super belongs to an object context and cannot be used directly in a static context."
            }
        ]
    },


    // ============================================================
    // 13. REAL WORLD EXAMPLES
    // ============================================================

    {
        id: 13,
        module: "super-keyword",
        title: "Real-world Examples",
        difficulty: "Easy",

        examples: [

            {
                title: "Vehicle and Car",
                explanation: `
A Car can inherit common properties from Vehicle.
The super keyword can access Vehicle properties or methods.
                `
            },

            {
                title: "Employee and Manager",
                explanation: `
A Manager can inherit employee information and use super()
to initialize the Employee constructor.
                `
            },

            {
                title: "Animal and Dog",
                explanation: `
A Dog can override the sound() method and still call
the Animal sound() method using super.sound().
                `
            }
        ]
    },


    // ============================================================
    // 14. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 14,
        module: "super-keyword",
        title: "super Keyword Interview Questions",
        difficulty: "Hard",

        questions: [

            "What is the super keyword in Java?",

            "What are the main uses of super?",

            "What is the difference between super and this?",

            "Can super access private members of the parent class?",

            "Why must super() be the first statement in a constructor?",

            "What happens if we do not write super()?",

            "Can this() and super() be used together in the same constructor?",

            "Can super be used inside a static method?",

            "What is the difference between super() and super.method()?",

            "How does super work in multilevel inheritance?"
        ]
    },


    // ============================================================
    // 15. CODING PROBLEMS
    // ============================================================

    {
        id: 15,
        module: "super-keyword",
        title: "super Keyword Coding Problems",
        difficulty: "Hard",

        problems: [

            "Create Parent and Child classes with variables having the same name and access both variables.",

            "Override a parent method and call the parent method using super.",

            "Create a parent class with a parameterized constructor and call it using super(arguments).",

            "Create a three-level inheritance hierarchy and print constructor execution order.",

            "Create an Employee class and Manager class using super() for constructor initialization.",

            "Demonstrate the difference between this.name and super.name.",

            "Create an example showing implicit and explicit super() calls."
        ]
    }

];