export const constructorsTopics = [

    // ============================================================
    // 1. WHAT IS A CONSTRUCTOR?
    // ============================================================

    {
        id: 1,
        module: "constructors",
        title: "What is a Constructor?",
        concept: "A constructor is a special member of a class used to initialize an object when it is created.",
        difficulty: "Easy",

        theory: `
A constructor is automatically invoked when an object is created.

The constructor usually initializes the initial state of an object.

Example:

Student student = new Student();

When new Student() is executed, the Student constructor is called.

Important points:

- Constructor name must match the class name.
- Constructors do not have a return type.
- Constructors are called during object creation.
- Constructors can accept parameters.
- Constructors can be overloaded.
`,

        example: `
class Student {

    Student() {

        System.out.println(
            "Constructor Called"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

    }
}
`,

        output: `
Constructor Called
`
    },


    // ============================================================
    // 2. PURPOSE OF CONSTRUCTOR
    // ============================================================

    {
        id: 2,
        module: "constructors",
        title: "Purpose of Constructor",
        concept: "Constructors initialize objects and establish their initial valid state.",
        difficulty: "Easy",

        theory: `
The main purpose of a constructor is to initialize an object.

For example, when creating an Employee object, we may want to
initialize:

- id
- name
- salary

Instead of creating the object first and assigning every value later,
a constructor can initialize the values immediately.

Constructors can also perform validation or setup logic.
`,

        example: `
class Employee {

    int id;
    String name;

    Employee(
        int id,
        String name
    ) {

        this.id = id;
        this.name = name;

    }

    void display() {

        System.out.println(
            id + " - " + name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee(
                101,
                "Saurabh"
            );

        employee.display();

    }
}
`,

        output: `
101 - Saurabh
`
    },


    // ============================================================
    // 3. CONSTRUCTOR SYNTAX
    // ============================================================

    {
        id: 3,
        module: "constructors",
        title: "Constructor Syntax",
        concept: "A constructor has the same name as its class and does not declare a return type.",
        difficulty: "Easy",

        theory: `
Basic syntax:

class ClassName {

    ClassName() {

        // initialization code

    }

}

Parameterized constructor syntax:

class ClassName {

    ClassName(
        DataType parameter
    ) {

        // initialization

    }

}

Unlike a method, a constructor does not have a return type,
not even void.
`,

        example: `
class Car {

    String brand;

    Car(String brand) {

        this.brand = brand;

    }

    void display() {

        System.out.println(brand);

    }
}

public class Main {

    public static void main(String[] args) {

        Car car =
            new Car("Toyota");

        car.display();

    }
}
`,

        output: `
Toyota
`
    },


    // ============================================================
    // 4. CONSTRUCTOR CHARACTERISTICS
    // ============================================================

    {
        id: 4,
        module: "constructors",
        title: "Constructor Characteristics",
        concept: "Constructors have special rules related to object initialization and inheritance.",
        difficulty: "Medium",

        theory: `
Important characteristics of constructors:

1. Same name as the class.

2. No return type.

3. Invoked automatically during object creation.

4. Can accept parameters.

5. Can be overloaded.

6. Are not inherited in the same way as ordinary methods.

7. Cannot be static.

8. Cannot be final.

9. Cannot be abstract.

10. Can have access modifiers.

Examples:

public Student()

private Student()

protected Student()
`,

        example: `
class Student {

    String name;

    Student(String name) {

        this.name = name;

        System.out.println(
            "Object Initialized"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student("Saurabh");

    }
}
`,

        output: `
Object Initialized
`
    },


    // ============================================================
    // TYPES OF CONSTRUCTORS
    // ============================================================

    {
        id: 5,
        module: "constructors",
        title: "Default Constructor",
        concept: "A default constructor is the no-argument constructor automatically provided by the compiler only when no constructor is declared.",
        difficulty: "Medium",

        theory: `
If you do not declare any constructor in a class, Java provides
a default constructor.

Example:

class Student {

}

Conceptually, the compiler provides a no-argument constructor.

Important:

If you explicitly declare any constructor, Java does not automatically
add the default constructor.

The compiler-provided constructor should not be confused with a
user-defined no-argument constructor.
`,

        example: `
class Student {

    String name;

}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

        student.name = "Saurabh";

        System.out.println(
            student.name
        );

    }
}
`,

        output: `
Saurabh
`
    },


    {
        id: 6,
        module: "constructors",
        title: "No-Argument Constructor",
        concept: "A no-argument constructor is a constructor explicitly declared with no parameters.",
        difficulty: "Easy",

        theory: `
A no-argument constructor has no parameters.

Example:

class Student {

    Student() {

        System.out.println("Created");

    }

}

A no-argument constructor can initialize fields with default
or custom values.
`,

        example: `
class Student {

    String name;

    Student() {

        name = "Saurabh";

    }

    void display() {

        System.out.println(name);

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

        student.display();

    }
}
`,

        output: `
Saurabh
`
    },


    {
        id: 7,
        module: "constructors",
        title: "Parameterized Constructor",
        concept: "A parameterized constructor receives values during object creation.",
        difficulty: "Easy",

        theory: `
A parameterized constructor accepts one or more parameters.

It allows different objects to be initialized with different values.

Example:

Student s1 =
    new Student("Saurabh");

Student s2 =
    new Student("Rahul");

Both objects use the same constructor but receive different values.
`,

        example: `
class Student {

    String name;
    int age;

    Student(
        String name,
        int age
    ) {

        this.name = name;
        this.age = age;

    }

    void display() {

        System.out.println(
            name + " - " + age
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student(
                "Saurabh",
                25
            );

        student.display();

    }
}
`,

        output: `
Saurabh - 25
`
    },


    {
        id: 8,
        module: "constructors",
        title: "Copy Constructor Concept",
        concept: "Java has no built-in copy constructor syntax, but a constructor can accept another object of the same class and copy its state.",
        difficulty: "Medium",

        theory: `
Java does not provide a special copy constructor feature like C++.

However, we can create a constructor that accepts an object
of the same class.

Example:

Student(Student other) {

    this.name = other.name;
    this.age = other.age;

}

This creates a new object with copied field values.

The type of copying depends on the fields.

For primitive and immutable values, simple assignment is often enough.

For mutable referenced objects, shallow copying and deep copying
must be considered separately.
`,

        example: `
class Student {

    String name;
    int age;

    Student(
        String name,
        int age
    ) {

        this.name = name;
        this.age = age;

    }

    Student(Student other) {

        this.name = other.name;
        this.age = other.age;

    }

    void display() {

        System.out.println(
            name + " - " + age
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student s1 =
            new Student(
                "Saurabh",
                25
            );

        Student s2 =
            new Student(s1);

        s2.display();

    }
}
`,

        output: `
Saurabh - 25
`
    },


    // ============================================================
    // CONSTRUCTOR OVERLOADING
    // ============================================================

    {
        id: 9,
        module: "constructors",
        title: "Constructor Overloading",
        concept: "Constructor overloading means defining multiple constructors with different parameter lists.",
        difficulty: "Medium",

        theory: `
A class can contain multiple constructors.

Each constructor must have a different parameter list.

Examples:

Student()

Student(String name)

Student(String name, int age)

Java selects the appropriate constructor based on the arguments
provided during object creation.
`,

        example: `
class Student {

    String name;
    int age;

    Student() {

        name = "Unknown";

    }

    Student(String name) {

        this.name = name;

    }

    Student(
        String name,
        int age
    ) {

        this.name = name;
        this.age = age;

    }

    void display() {

        System.out.println(
            name + " - " + age
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student s1 =
            new Student();

        Student s2 =
            new Student("Saurabh");

        Student s3 =
            new Student(
                "Rahul",
                25
            );

        s1.display();
        s2.display();
        s3.display();

    }
}
`,

        output: `
Unknown - 0
Saurabh - 0
Rahul - 25
`
    },


    // ============================================================
    // CONSTRUCTOR CHAINING
    // ============================================================

    {
        id: 10,
        module: "constructors",
        title: "Constructor Chaining",
        concept: "Constructor chaining means invoking one constructor from another constructor.",
        difficulty: "Medium",

        theory: `
Constructor chaining allows constructors to reuse initialization logic.

There are two main mechanisms:

1. this()

Calls another constructor in the same class.

2. super()

Calls a constructor from the parent class.

Constructor chaining reduces duplicate initialization code.
`,

        example: `
class Student {

    String name;
    int age;

    Student() {

        this("Unknown", 0);

    }

    Student(
        String name,
        int age
    ) {

        this.name = name;
        this.age = age;

    }

    void display() {

        System.out.println(
            name + " - " + age
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

        student.display();

    }
}
`,

        output: `
Unknown - 0
`
    },


    {
        id: 11,
        module: "constructors",
        title: "this() Constructor Call",
        concept: "this() calls another constructor in the same class.",
        difficulty: "Medium",

        theory: `
The this() constructor call is used to invoke another constructor
from the same class.

Example:

Student() {

    this("Unknown");

}

The called constructor must exist in the same class.

this() helps reuse constructor initialization logic.
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

        Student student =
            new Student();

        student.display();

    }
}
`,

        output: `
Saurabh
`
    },


    {
        id: 12,
        module: "constructors",
        title: "Calling Another Constructor",
        concept: "A constructor can delegate initialization to another constructor using this().",
        difficulty: "Medium",

        theory: `
Constructor delegation can avoid repeated code.

For example:

Student() {

    this("Unknown", 0);

}

Student(String name) {

    this(name, 0);

}

Student(String name, int age) {

    this.name = name;
    this.age = age;

}

All initialization can eventually be handled by one main constructor.
`,

        example: `
class Student {

    String name;
    int age;

    Student() {

        this("Unknown");

    }

    Student(String name) {

        this(name, 18);

    }

    Student(
        String name,
        int age
    ) {

        this.name = name;
        this.age = age;

    }

    void display() {

        System.out.println(
            name + " - " + age
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student s1 =
            new Student();

        Student s2 =
            new Student("Saurabh");

        Student s3 =
            new Student(
                "Rahul",
                25
            );

        s1.display();
        s2.display();
        s3.display();

    }
}
`,

        output: `
Unknown - 18
Saurabh - 18
Rahul - 25
`
    },


    {
        id: 13,
        module: "constructors",
        title: "Constructor Chaining Rules",
        concept: "this() and super() constructor calls have strict placement and usage rules.",
        difficulty: "Hard",

        theory: `
Important constructor chaining rules:

1. this() must be the first statement in a constructor.

2. super() must also be the first statement when explicitly used.

3. A constructor cannot use both this() and super() directly because
   both would need to be the first statement.

4. Constructor chaining must not create recursive cycles.

Invalid idea:

A() {
    this();
}

This would recursively call itself.

5. A constructor called through this() can eventually invoke super()
   through the constructor chain.
`,

        example: `
class Student {

    String name;

    Student() {

        this("Unknown");

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

        Student student =
            new Student();

        student.display();

    }
}
`,

        output: `
Unknown
`
    },


    // ============================================================
    // SUPER()
    // ============================================================

    {
        id: 14,
        module: "constructors",
        title: "super() Parent Constructor Call",
        concept: "super() invokes a constructor of the immediate parent class.",
        difficulty: "Medium",

        theory: `
super() is used inside a constructor to invoke a constructor
of the immediate parent class.

Example:

class Parent {

    Parent() {

        System.out.println("Parent");

    }
}

class Child extends Parent {

    Child() {

        super();

        System.out.println("Child");

    }
}

The parent constructor executes before the child constructor body.
`,

        example: `
class Parent {

    Parent() {

        System.out.println(
            "Parent Constructor"
        );

    }
}

class Child extends Parent {

    Child() {

        super();

        System.out.println(
            "Child Constructor"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Child child =
            new Child();

    }
}
`,

        output: `
Parent Constructor
Child Constructor
`
    },


    {
        id: 15,
        module: "constructors",
        title: "Explicit super()",
        concept: "Explicit super() is written directly to call a specific accessible parent constructor.",
        difficulty: "Medium",

        theory: `
An explicit super() call is written directly inside a child constructor.

Example:

Child() {

    super();

}

For a parameterized parent constructor:

Child() {

    super("Saurabh");

}

The arguments determine which accessible parent constructor
is invoked.
`,

        example: `
class Parent {

    Parent(String name) {

        System.out.println(
            "Parent: " + name
        );

    }
}

class Child extends Parent {

    Child() {

        super("Saurabh");

        System.out.println(
            "Child Constructor"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Child child =
            new Child();

    }
}
`,

        output: `
Parent: Saurabh
Child Constructor
`
    },


    {
        id: 16,
        module: "constructors",
        title: "Implicit super()",
        concept: "If a constructor does not explicitly call this() or super(), Java inserts an implicit call to the accessible no-argument parent constructor.",
        difficulty: "Hard",

        theory: `
If a child constructor does not explicitly call:

this(...)

or:

super(...)

Java attempts to insert:

super();

This requires the parent class to have an accessible no-argument
constructor.

If the parent does not have an accessible no-argument constructor,
the child constructor must explicitly call an appropriate parent
constructor.
`,

        example: `
class Parent {

    Parent() {

        System.out.println(
            "Parent Constructor"
        );

    }
}

class Child extends Parent {

    Child() {

        System.out.println(
            "Child Constructor"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Child child =
            new Child();

    }
}
`,

        output: `
Parent Constructor
Child Constructor
`
    },


    // ============================================================
    // INHERITANCE
    // ============================================================

    {
        id: 17,
        module: "constructors",
        title: "Constructor and Inheritance",
        concept: "Constructors are not inherited, but parent constructors participate in child object initialization.",
        difficulty: "Medium",

        theory: `
Constructors are not inherited as ordinary methods.

However, when a child object is created, constructor execution moves
through the inheritance chain.

Example:

Animal -> Dog

When a Dog object is created, initialization includes the appropriate
Animal constructor first, then the Dog constructor.

The child constructor can explicitly select a parent constructor
using super(...).
`,

        example: `
class Animal {

    Animal() {

        System.out.println(
            "Animal Created"
        );

    }
}

class Dog extends Animal {

    Dog() {

        System.out.println(
            "Dog Created"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Dog dog =
            new Dog();

    }
}
`,

        output: `
Animal Created
Dog Created
`
    },


    {
        id: 18,
        module: "constructors",
        title: "Constructor Execution Order",
        concept: "During inheritance, superclass initialization occurs before subclass constructor execution.",
        difficulty: "Hard",

        theory: `
For a basic inheritance hierarchy, construction proceeds from the
superclass toward the subclass.

Conceptually:

Object
↓
Parent
↓
Child

When creating a Child object, the required superclass construction
happens before the child constructor body.

For a single class, initialization also involves field initialization
and instance initializer blocks before the constructor body.

The exact order is governed by Java's initialization rules, so code
should avoid relying on side effects that make initialization difficult
to understand.
`,

        example: `
class Parent {

    Parent() {

        System.out.println(
            "1. Parent Constructor"
        );

    }
}

class Child extends Parent {

    Child() {

        System.out.println(
            "2. Child Constructor"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        new Child();

    }
}
`,

        output: `
1. Parent Constructor
2. Child Constructor
`
    },


    // ============================================================
    // PRIVATE CONSTRUCTOR
    // ============================================================

    {
        id: 19,
        module: "constructors",
        title: "Private Constructor",
        concept: "A private constructor restricts object creation from outside the class.",
        difficulty: "Medium",

        theory: `
A private constructor can only be called from inside the same class.

Private constructors are useful for:

- Utility classes
- Singleton patterns
- Factory methods
- Controlling object creation

Example:

class Utility {

    private Utility() {

    }

}

External code cannot directly execute:

new Utility();
`,

        example: `
class Utility {

    private Utility() {

        System.out.println(
            "Private Constructor"
        );

    }

    public static void create() {

        new Utility();

    }
}

public class Main {

    public static void main(String[] args) {

        Utility.create();

    }
}
`,

        output: `
Private Constructor
`
    },


    // ============================================================
    // CONSTRUCTOR VS METHOD
    // ============================================================

    {
        id: 20,
        module: "constructors",
        title: "Constructor vs Method",
        concept: "Constructors initialize objects, while methods define operations and behavior.",
        difficulty: "Easy",

        theory: `
Constructor:

- Same name as the class.
- No return type.
- Invoked during object creation.
- Initializes object state.
- Cannot be called like an ordinary method.

Method:

- Can have any valid name.
- Has a return type or void.
- Called explicitly.
- Defines object or class behavior.

Example:

Student() {

    // constructor

}

void study() {

    // method

}
`,

        example: `
class Student {

    Student() {

        System.out.println(
            "Constructor"
        );

    }

    void study() {

        System.out.println(
            "Student Studying"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

        student.study();

    }
}
`,

        output: `
Constructor
Student Studying
`
    },


    // ============================================================
    // CONSTRUCTOR RULES
    // ============================================================

    {
        id: 21,
        module: "constructors",
        title: "Constructor Rules",
        concept: "Constructors follow specific syntax and inheritance rules in Java.",
        difficulty: "Medium",

        theory: `
Important constructor rules:

1. Name must match the class name.

2. Constructors do not have a return type.

3. Constructors can have parameters.

4. Constructors can be overloaded.

5. Constructors can use access modifiers.

6. Constructors cannot be static.

7. Constructors cannot be final.

8. Constructors cannot be abstract.

9. this() must be the first statement if used.

10. super() must be the first statement if used explicitly.

11. Constructors are not inherited as ordinary methods.

12. If no constructor is declared, the compiler can provide a default
    constructor.

13. If a constructor calls another constructor using this(), that
    constructor call happens before the current constructor body.
`,

        example: `
class Student {

    Student() {

        System.out.println(
            "Valid Constructor"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        new Student();

    }
}
`,

        output: `
Valid Constructor
`
    },


    // ============================================================
    // COMMON MISTAKES
    // ============================================================

    {
        id: 22,
        module: "constructors",
        title: "Common Constructor Mistakes",
        concept: "Constructor mistakes usually involve incorrect syntax, return types, missing super calls, or incorrect this() usage.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Adding a return type.

Wrong:

void Student() {

}

This is a method, not a constructor.


2. Using a different name.

Wrong:

class Student {

    StudentData() {

    }

}


3. Calling this() after another statement.

Wrong:

Student() {

    System.out.println("Hello");

    this("Saurabh");

}

this() must be the first statement.


4. Forgetting super(...) when the parent has no accessible
no-argument constructor.


5. Thinking constructors are inherited.


6. Expecting the compiler-provided default constructor after declaring
another constructor.


7. Creating recursive constructor calls.
`,

        example: `
class Student {

    String name;

    Student() {

        this("Unknown");

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

        Student student =
            new Student();

        student.display();

    }
}
`,

        output: `
Unknown
`
    },


    // ============================================================
    // REAL-WORLD EXAMPLES
    // ============================================================

    {
        id: 23,
        module: "constructors",
        title: "Real-World Example: Bank Account",
        concept: "A constructor can initialize a BankAccount object with required account information.",
        difficulty: "Medium",

        theory: `
A BankAccount object may require initial values such as:

- accountNumber
- holderName
- initialBalance

A constructor ensures the object starts with those values.

This is better than leaving a newly created object partially initialized
and assigning every required field later.
`,

        example: `
class BankAccount {

    String accountNumber;
    String holderName;
    double balance;

    BankAccount(
        String accountNumber,
        String holderName,
        double balance
    ) {

        this.accountNumber =
            accountNumber;

        this.holderName =
            holderName;

        this.balance =
            balance;

    }

    void display() {

        System.out.println(
            holderName
        );

        System.out.println(
            balance
        );

    }
}

public class Main {

    public static void main(String[] args) {

        BankAccount account =
            new BankAccount(
                "ACC101",
                "Saurabh",
                5000
            );

        account.display();

    }
}
`,

        output: `
Saurabh
5000.0
`
    },


    {
        id: 24,
        module: "constructors",
        title: "Real-World Example: Product",
        concept: "Constructors can ensure a Product starts with required initial data.",
        difficulty: "Easy",

        theory: `
A Product object can be initialized with:

- id
- name
- price

Using a constructor makes object creation concise and ensures
the required values are supplied when the object is created.
`,

        example: `
class Product {

    int id;
    String name;
    double price;

    Product(
        int id,
        String name,
        double price
    ) {

        this.id = id;
        this.name = name;
        this.price = price;

    }

    void display() {

        System.out.println(
            name + " - " + price
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Product product =
            new Product(
                101,
                "Laptop",
                50000
            );

        product.display();

    }
}
`,

        output: `
Laptop - 50000.0
`
    },


    // ============================================================
    // INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 25,
        module: "constructors",
        title: "Constructor Interview Questions",
        concept: "Common Java interview questions related to constructors, this(), super(), overloading, and inheritance.",
        difficulty: "Medium",

        theory: `
1. What is a constructor?

A constructor initializes an object during object creation.


2. Can a constructor have a return type?

No.

A declaration with a return type is a method.


3. Can constructors be overloaded?

Yes.

Multiple constructors can exist with different parameter lists.


4. What is the difference between a default constructor and a
no-argument constructor?

A default constructor is compiler-provided when no constructor is
declared.

A no-argument constructor is any constructor with zero parameters,
including one explicitly written by the programmer.


5. What is constructor chaining?

Calling one constructor from another using this() or through the
inheritance chain using super().


6. What does this() do?

It calls another constructor in the same class.


7. What does super() do?

It calls a constructor of the immediate parent class.


8. Can this() and super() both be called directly in the same
constructor?

No.

Both must occupy the first statement position.


9. Are constructors inherited?

Constructors are not inherited as ordinary methods.


10. Can a constructor be private?

Yes.

Private constructors are used to restrict external object creation.


11. Can a constructor be static?

No.


12. Can a constructor be final?

No.


13. What happens if the parent class has no accessible no-argument
constructor?

The child constructor must explicitly invoke an appropriate accessible
parent constructor using super(arguments).


14. When does a constructor execute?

During object creation.


15. What happens if you write void before a constructor-like declaration?

It becomes a method.
`,

        example: `
class Student {

    Student() {

        System.out.println(
            "No-Argument Constructor"
        );

    }

    Student(String name) {

        System.out.println(
            "Name: " + name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        new Student();

        new Student("Saurabh");

    }
}
`,

        output: `
No-Argument Constructor
Name: Saurabh
`
    },


    // ============================================================
    // CODING PROBLEMS
    // ============================================================

    {
        id: 26,
        module: "constructors",
        title: "Coding Problem: Student Constructor",
        concept: "Create a Student class and initialize its fields using a parameterized constructor.",
        difficulty: "Easy",

        theory: `
Problem:

Create a Student class with:

- name
- age
- marks

Initialize all fields using a parameterized constructor.

Create a display() method.
`,

        example: `
class Student {

    String name;
    int age;
    int marks;

    Student(
        String name,
        int age,
        int marks
    ) {

        this.name = name;
        this.age = age;
        this.marks = marks;

    }

    void display() {

        System.out.println(
            "Name: " + name
        );

        System.out.println(
            "Age: " + age
        );

        System.out.println(
            "Marks: " + marks
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student(
                "Saurabh",
                25,
                85
            );

        student.display();

    }
}
`,

        output: `
Name: Saurabh
Age: 25
Marks: 85
`
    },


    {
        id: 27,
        module: "constructors",
        title: "Coding Problem: Constructor Overloading",
        concept: "Create multiple constructors and initialize objects using different argument combinations.",
        difficulty: "Medium",

        theory: `
Problem:

Create a Product class with:

- name
- price

Create these constructors:

Product()

Product(String name)

Product(String name, double price)

Use constructor chaining where appropriate.
`,

        example: `
class Product {

    String name;
    double price;

    Product() {

        this("Unknown", 0);

    }

    Product(String name) {

        this(name, 0);

    }

    Product(
        String name,
        double price
    ) {

        this.name = name;
        this.price = price;

    }

    void display() {

        System.out.println(
            name + " - " + price
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Product p1 =
            new Product();

        Product p2 =
            new Product("Laptop");

        Product p3 =
            new Product(
                "Mobile",
                30000
            );

        p1.display();
        p2.display();
        p3.display();

    }
}
`,

        output: `
Unknown - 0.0
Laptop - 0.0
Mobile - 30000.0
`
    },


    {
        id: 28,
        module: "constructors",
        title: "Coding Problem: Copy Constructor",
        concept: "Create a second object by copying the field values of an existing object.",
        difficulty: "Medium",

        theory: `
Problem:

Create an Employee class with:

- id
- name
- salary

Create:

1. A parameterized constructor.
2. A constructor that accepts another Employee object.
3. A display() method.

Create an employee and then create a copied employee.
`,

        example: `
class Employee {

    int id;
    String name;
    double salary;

    Employee(
        int id,
        String name,
        double salary
    ) {

        this.id = id;
        this.name = name;
        this.salary = salary;

    }

    Employee(Employee other) {

        this.id = other.id;
        this.name = other.name;
        this.salary = other.salary;

    }

    void display() {

        System.out.println(
            id + " - "
            + name + " - "
            + salary
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Employee e1 =
            new Employee(
                101,
                "Saurabh",
                50000
            );

        Employee e2 =
            new Employee(e1);

        e2.display();

    }
}
`,

        output: `
101 - Saurabh - 50000.0
`
    },


    {
        id: 29,
        module: "constructors",
        title: "Coding Problem: Constructor Inheritance",
        concept: "Use super() to initialize parent class fields before initializing child class fields.",
        difficulty: "Hard",

        theory: `
Problem:

Create:

Person

Fields:

name

Create:

Employee extends Person

Fields:

employeeId

Use super(name) inside the Employee constructor.

Display both values.
`,

        example: `
class Person {

    String name;

    Person(String name) {

        this.name = name;

    }
}

class Employee extends Person {

    int employeeId;

    Employee(
        String name,
        int employeeId
    ) {

        super(name);

        this.employeeId =
            employeeId;

    }

    void display() {

        System.out.println(
            name
        );

        System.out.println(
            employeeId
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee(
                "Saurabh",
                101
            );

        employee.display();

    }
}
`,

        output: `
Saurabh
101
`
    },


    {
        id: 30,
        module: "constructors",
        title: "Coding Problem: Bank Account Initialization",
        concept: "Use a constructor to initialize a BankAccount and validate its initial balance.",
        difficulty: "Medium",

        theory: `
Problem:

Create a BankAccount class with:

- accountNumber
- holderName
- balance

Use a parameterized constructor.

If the initial balance is negative, initialize it to 0.

Display the account details.
`,

        example: `
class BankAccount {

    String accountNumber;
    String holderName;
    double balance;

    BankAccount(
        String accountNumber,
        String holderName,
        double balance
    ) {

        this.accountNumber =
            accountNumber;

        this.holderName =
            holderName;

        if (balance >= 0) {

            this.balance = balance;

        } else {

            this.balance = 0;

        }
    }

    void display() {

        System.out.println(
            "Account: "
            + accountNumber
        );

        System.out.println(
            "Holder: "
            + holderName
        );

        System.out.println(
            "Balance: "
            + balance
        );

    }
}

public class Main {

    public static void main(String[] args) {

        BankAccount account =
            new BankAccount(
                "ACC101",
                "Saurabh",
                -500
            );

        account.display();

    }
}
`,

        output: `
Account: ACC101
Holder: Saurabh
Balance: 0.0
`
    }

];