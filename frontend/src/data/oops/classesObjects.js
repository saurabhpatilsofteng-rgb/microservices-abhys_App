export const classObjectTopics = [

    // ============================================================
    // CLASS
    // ============================================================

    {
        id: 1,
        module: "classes-objects",
        title: "What is a Class?",
        concept: "A class is a blueprint or template used to create objects.",
        difficulty: "Easy",

        theory: `
A class is a blueprint for creating objects in Java.

A class defines the structure and behavior of objects.

A class can contain:

- Fields
- Methods
- Constructors
- Static members
- Final members
- Nested classes

For example:

Student is a class.

Individual students such as Saurabh and Rahul can be
objects created from the Student class.
`,

        example: `
class Student {

    String name;
    int age;

    void display() {

        System.out.println(name);
        System.out.println(age);

    }
}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        student.name = "Saurabh";
        student.age = 25;

        student.display();

    }
}
`,

        output: `
Saurabh
25
`
    },


    {
        id: 2,
        module: "classes-objects",
        title: "Why Use Classes?",
        concept: "Classes help organize related data and behavior into reusable units.",
        difficulty: "Easy",

        theory: `
Classes are used to model entities and organize code.

Instead of creating separate variables and functions for every
student, employee, or product, we create a class.

Benefits of classes:

- Code organization
- Code reusability
- Object creation
- Encapsulation
- Maintainability
- Easier real-world modeling

For example, instead of:

String student1Name;
String student2Name;

We can create a Student class and multiple Student objects.
`,

        example: `
class Student {

    String name;

    void study() {

        System.out.println(
            name + " is studying"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student s1 = new Student();
        Student s2 = new Student();

        s1.name = "Saurabh";
        s2.name = "Rahul";

        s1.study();
        s2.study();

    }
}
`,

        output: `
Saurabh is studying
Rahul is studying
`
    },


    {
        id: 3,
        module: "classes-objects",
        title: "Class Syntax",
        concept: "A class is declared using the class keyword followed by a class name.",
        difficulty: "Easy",

        theory: `
Basic class syntax:

class ClassName {

    // fields

    // constructors

    // methods

}

A class name generally follows PascalCase.

Examples:

Student
BankAccount
Employee
Product
`,

        example: `
class Student {

    String name;

    void display() {

        System.out.println(name);

    }
}

public class Main {

    public static void main(String[] args) {

        Student student = new Student();

        student.name = "Saurabh";

        student.display();

    }
}
`,

        output: `
Saurabh
`
    },


    {
        id: 4,
        module: "classes-objects",
        title: "Fields and Instance Variables",
        concept: "Fields are variables declared inside a class that represent object data or state.",
        difficulty: "Easy",

        theory: `
Fields are variables declared inside a class.

Instance variables belong to individual objects.

Each object normally has its own copy of instance variables.

Example:

class Student {

    String name;
    int age;

}

If two Student objects are created, each object can have
different values for name and age.
`,

        example: `
class Student {

    String name;
    int age;

}

public class Main {

    public static void main(String[] args) {

        Student s1 = new Student();
        Student s2 = new Student();

        s1.name = "Saurabh";
        s1.age = 25;

        s2.name = "Rahul";
        s2.age = 24;

        System.out.println(
            s1.name + " - " + s1.age
        );

        System.out.println(
            s2.name + " - " + s2.age
        );

    }
}
`,

        output: `
Saurabh - 25
Rahul - 24
`
    },


    {
        id: 5,
        module: "classes-objects",
        title: "Methods",
        concept: "Methods define the behavior and operations that objects can perform.",
        difficulty: "Easy",

        theory: `
A method is a block of code that performs a specific operation.

Methods represent object behavior.

Examples:

Car:

start()
stop()
drive()

BankAccount:

deposit()
withdraw()

Student:

study()
display()

A method can:

- Accept parameters
- Return a value
- Modify object state
- Perform an operation
`,

        example: `
class Calculator {

    int add(int a, int b) {

        return a + b;

    }
}

public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            new Calculator();

        int result =
            calculator.add(10, 20);

        System.out.println(result);

    }
}
`,

        output: `
30
`
    },


    {
        id: 6,
        module: "classes-objects",
        title: "Constructors",
        concept: "Constructors initialize objects when they are created.",
        difficulty: "Easy",

        theory: `
A constructor is automatically executed when an object is created.

Important rules:

- Constructor name must match the class name.
- Constructors do not have a return type.
- Constructors can accept parameters.
- Constructors can be overloaded.

Constructors are commonly used to initialize object fields.
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

        System.out.println(name);
        System.out.println(age);

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
Saurabh
25
`
    },


    {
        id: 7,
        module: "classes-objects",
        title: "Access Modifiers",
        concept: "Access modifiers control where classes and their members can be accessed.",
        difficulty: "Medium",

        theory: `
Java provides four main access levels:

1. public

Accessible from anywhere.

2. protected

Accessible within the same package and by subclasses,
subject to Java access rules.

3. default

Accessible within the same package.

4. private

Accessible only inside the same class.

Access modifiers are important for encapsulation and API design.
`,

        example: `
class Student {

    public String name = "Saurabh";

    private int age = 25;

    public void displayAge() {

        System.out.println(age);

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

        System.out.println(
            student.name
        );

        student.displayAge();

    }
}
`,

        output: `
Saurabh
25
`
    },


    {
        id: 8,
        module: "classes-objects",
        title: "Static Members",
        concept: "Static members belong to the class itself rather than to individual objects.",
        difficulty: "Medium",

        theory: `
Static members belong to the class.

Static members are shared by all objects of that class.

Examples:

- static variables
- static methods
- static blocks

Example:

class Student {

    static String college =
        "ABC College";

}

The college field is shared by every Student object.
`,

        example: `
class Student {

    String name;

    static String college =
        "ABC College";

}

public class Main {

    public static void main(String[] args) {

        Student s1 = new Student();
        Student s2 = new Student();

        s1.name = "Saurabh";
        s2.name = "Rahul";

        System.out.println(
            Student.college
        );

        System.out.println(
            s1.name
        );

        System.out.println(
            s2.name
        );

    }
}
`,

        output: `
ABC College
Saurabh
Rahul
`
    },


    {
        id: 9,
        module: "classes-objects",
        title: "Final Members",
        concept: "Final members restrict modification, overriding, or inheritance depending on how final is used.",
        difficulty: "Medium",

        theory: `
The final keyword can be used with:

- Variables
- Methods
- Classes

final variable:

Cannot be reassigned after initialization.

final method:

Cannot be overridden.

final class:

Cannot be extended.

Example:

final int MAX_AGE = 100;
`,

        example: `
class Student {

    final String college =
        "ABC College";

    void display() {

        System.out.println(college);

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
ABC College
`
    },


    {
        id: 10,
        module: "classes-objects",
        title: "Nested Classes Basics",
        concept: "A nested class is a class declared inside another class.",
        difficulty: "Medium",

        theory: `
A nested class is declared inside another class.

There are two broad categories:

1. Static nested class

Declared using static.

2. Inner class

A non-static nested class associated with an instance
of the outer class.

Nested classes are useful when a helper type is strongly
related to one outer class.
`,

        example: `
class Outer {

    static class Inner {

        void display() {

            System.out.println(
                "Inside Nested Class"
            );

        }
    }
}

public class Main {

    public static void main(String[] args) {

        Outer.Inner inner =
            new Outer.Inner();

        inner.display();

    }
}
`,

        output: `
Inside Nested Class
`
    },


    // ============================================================
    // OBJECT
    // ============================================================

    {
        id: 11,
        module: "classes-objects",
        title: "What is an Object?",
        concept: "An object is an instance of a class with its own state, behavior, and identity.",
        difficulty: "Easy",

        theory: `
An object is an instance created from a class.

An object generally has:

- State
- Behavior
- Identity

Example:

Class:

Student

Objects:

student1
student2

Each Student object can have different values and can
perform operations defined by the Student class.
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
        id: 12,
        module: "classes-objects",
        title: "Object Creation",
        concept: "Objects are commonly created by declaring a reference and using the new keyword.",
        difficulty: "Easy",

        theory: `
The common syntax for creating an object is:

ClassName reference =
    new ClassName();

Example:

Student student =
    new Student();

Here:

Student -> Class type

student -> Reference variable

new -> Creates the object

Student() -> Constructor invocation
`,

        example: `
class Car {

    String brand;

}

public class Main {

    public static void main(String[] args) {

        Car car =
            new Car();

        car.brand = "Toyota";

        System.out.println(
            car.brand
        );

    }
}
`,

        output: `
Toyota
`
    },


    {
        id: 13,
        module: "classes-objects",
        title: "new Keyword",
        concept: "The new keyword creates an object and invokes its constructor.",
        difficulty: "Easy",

        theory: `
The new keyword is commonly used to create objects.

Example:

Student student =
    new Student();

The expression new Student() creates an instance and
invokes the constructor.

The resulting object reference is assigned to the
student reference variable.
`,

        example: `
class Student {

    Student() {

        System.out.println(
            "Object Created"
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
Object Created
`
    },


    {
        id: 14,
        module: "classes-objects",
        title: "Object Reference",
        concept: "A reference variable refers to an object and allows access to that object's members.",
        difficulty: "Medium",

        theory: `
Variables whose type is a class are reference variables.

Example:

Student student =
    new Student();

student refers to the Student object.

Two reference variables can refer to the same object.

Example:

Student s1 = new Student();

Student s2 = s1;

Both s1 and s2 refer to the same object.
`,

        example: `
class Student {

    String name;

}

public class Main {

    public static void main(String[] args) {

        Student s1 =
            new Student();

        s1.name = "Saurabh";

        Student s2 = s1;

        s2.name = "Rahul";

        System.out.println(
            s1.name
        );

    }
}
`,

        output: `
Rahul
`
    },


    {
        id: 15,
        module: "classes-objects",
        title: "Memory Allocation Basics",
        concept: "Objects are created at runtime, and reference variables are used to access those objects.",
        difficulty: "Medium",

        theory: `
When an object is created:

Student student =
    new Student();

Conceptually:

1. The Student object is created at runtime.
2. A constructor initializes the object.
3. The reference variable student is used to access it.

Java manages object memory automatically through garbage collection.

You should understand references rather than relying on overly
simplified diagrams of exact JVM memory layout.
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
        id: 16,
        module: "classes-objects",
        title: "Multiple Objects",
        concept: "One class can be used to create multiple independent objects.",
        difficulty: "Easy",

        theory: `
A class is a blueprint.

The same blueprint can create multiple objects.

Each object normally maintains its own instance state.

Example:

Student s1
Student s2
Student s3

All are Student objects but can contain different data.
`,

        example: `
class Student {

    String name;

}

public class Main {

    public static void main(String[] args) {

        Student s1 =
            new Student();

        Student s2 =
            new Student();

        s1.name = "Saurabh";
        s2.name = "Rahul";

        System.out.println(s1.name);
        System.out.println(s2.name);

    }
}
`,

        output: `
Saurabh
Rahul
`
    },


    {
        id: 17,
        module: "classes-objects",
        title: "Object State",
        concept: "Object state is represented by the current values of its instance variables.",
        difficulty: "Easy",

        theory: `
The state of an object is represented by its data.

Example:

Student:

name = "Saurabh"
age = 25

These current values represent the state of the object.

When field values change, the object state changes.
`,

        example: `
class BankAccount {

    double balance;

    void deposit(double amount) {

        balance += amount;

    }
}

public class Main {

    public static void main(String[] args) {

        BankAccount account =
            new BankAccount();

        account.balance = 1000;

        account.deposit(500);

        System.out.println(
            account.balance
        );

    }
}
`,

        output: `
1500.0
`
    },


    {
        id: 18,
        module: "classes-objects",
        title: "Object Behavior",
        concept: "Object behavior is defined by the methods it can execute.",
        difficulty: "Easy",

        theory: `
Behavior describes what an object can do.

Methods define object behavior.

Example:

Car:

start()
stop()

BankAccount:

deposit()
withdraw()

Student:

study()

The combination of state and behavior is fundamental
to object-oriented programming.
`,

        example: `
class Car {

    void start() {

        System.out.println(
            "Car Started"
        );

    }

    void stop() {

        System.out.println(
            "Car Stopped"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Car car =
            new Car();

        car.start();
        car.stop();

    }
}
`,

        output: `
Car Started
Car Stopped
`
    },


    {
        id: 19,
        module: "classes-objects",
        title: "Object Identity",
        concept: "Object identity distinguishes one object from another even when their data is identical.",
        difficulty: "Medium",

        theory: `
Each object is a distinct instance.

Two objects can contain identical field values but still
be different objects.

The == operator compares object references.

Example:

Student s1 = new Student();

Student s2 = new Student();

s1 == s2

returns false because they refer to different objects.
`,

        example: `
class Student {

    String name;

}

public class Main {

    public static void main(String[] args) {

        Student s1 =
            new Student();

        Student s2 =
            new Student();

        s1.name = "Saurabh";
        s2.name = "Saurabh";

        System.out.println(
            s1 == s2
        );

    }
}
`,

        output: `
false
`
    },


    // ============================================================
    // CLASS VS OBJECT
    // ============================================================

    {
        id: 20,
        module: "classes-objects",
        title: "Class vs Object",
        concept: "A class is a blueprint while an object is a concrete instance created from that blueprint.",
        difficulty: "Easy",

        theory: `
Class:

- Blueprint
- Defines structure
- Defines behavior
- Used to create objects

Object:

- Instance of a class
- Has its own state
- Uses class behavior
- Represents a specific entity

Example:

Student -> Class

Student s1 = new Student();

s1 -> Object
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
        id: 21,
        module: "classes-objects",
        title: "Object Creation Examples",
        concept: "Different classes can be instantiated to represent different entities.",
        difficulty: "Easy",

        theory: `
Objects can be created from many different classes.

Examples:

Student student =
    new Student();

Employee employee =
    new Employee();

Car car =
    new Car();

BankAccount account =
    new BankAccount();

Each object is an instance of its corresponding class.
`,

        example: `
class Employee {

    String name;

    Employee(String name) {

        this.name = name;

    }

    void display() {

        System.out.println(name);

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee(
                "Saurabh"
            );

        employee.display();

    }
}
`,

        output: `
Saurabh
`
    },


    {
        id: 22,
        module: "classes-objects",
        title: "Multiple Object Examples",
        concept: "Multiple objects can be created from one class, each with independent instance data.",
        difficulty: "Easy",

        theory: `
A class can create many objects.

Example:

Student s1 =
    new Student();

Student s2 =
    new Student();

Student s3 =
    new Student();

Each object can store different values.
`,

        example: `
class Product {

    String name;
    int price;

    Product(
        String name,
        int price
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
            new Product(
                "Laptop",
                50000
            );

        Product p2 =
            new Product(
                "Mobile",
                30000
            );

        p1.display();
        p2.display();

    }
}
`,

        output: `
Laptop - 50000
Mobile - 30000
`
    },


    {
        id: 23,
        module: "classes-objects",
        title: "Real-World Examples",
        concept: "Classes model categories of entities while objects represent specific instances.",
        difficulty: "Easy",

        theory: `
Real-world examples:

Class: Car

Fields:

brand
model
speed

Methods:

start()
stop()
accelerate()


Class: Employee

Fields:

id
name
salary

Methods:

work()
display()


Class: BankAccount

Fields:

accountNumber
balance

Methods:

deposit()
withdraw()

Objects represent individual instances of these classes.
`,

        example: `
class BankAccount {

    String holderName;
    double balance;

    void deposit(double amount) {

        balance += amount;

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
            new BankAccount();

        account.holderName =
            "Saurabh";

        account.deposit(5000);

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
        module: "classes-objects",
        title: "Common Mistakes",
        concept: "Understanding common mistakes helps avoid errors when working with classes and objects.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Forgetting to create an object

Wrong:

Student.display();

If display() is not static, an object is required.


2. Accessing private fields directly

Wrong:

student.age = 25;

when age is private.


3. Comparing object content using ==

== compares references for objects.

Use equals() when appropriate for logical equality.


4. Forgetting the new keyword

Student student;

This only declares a reference variable.
It does not create a Student object.


5. Using an uninitialized reference

Student student = null;

student.display();

This causes a NullPointerException.


6. Confusing static and instance members.

Static members belong to the class.

Instance members belong to individual objects.
`,

        example: `
class Student {

    String name;

    void display() {

        System.out.println(name);

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

        student.name = "Saurabh";

        student.display();

    }
}
`,

        output: `
Saurabh
`
    },


    {
        id: 25,
        module: "classes-objects",
        title: "Class and Object Interview Questions",
        concept: "Common Java interview questions about classes, objects, references, and object behavior.",
        difficulty: "Medium",

        theory: `
1. What is a class?

A class is a blueprint used to create objects.


2. What is an object?

An object is an instance of a class.


3. What is the difference between a class and an object?

A class defines structure and behavior.

An object is a specific instance created from that class.


4. How do you create an object?

ClassName object =
    new ClassName();


5. What is the new keyword?

It creates an object and invokes its constructor.


6. What is an object reference?

A reference variable is used to refer to and access an object.


7. What happens when two references point to the same object?

Changes made through one reference are visible through the other.


8. What is object state?

The current values of an object's fields.


9. What is object behavior?

The operations represented by the object's methods.


10. What is object identity?

The fact that an object is a distinct instance.


11. Can one class create multiple objects?

Yes.


12. What is the difference between static and instance members?

Static members belong to the class.

Instance members belong to individual objects.


13. Does declaring a reference create an object?

No.

Student student;

only declares a reference.


14. What does == compare for objects?

It compares references.


15. What is a nested class?

A class declared inside another class.
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

        Student student =
            new Student(
                "Saurabh"
            );

        student.display();

    }
}
`,

        output: `
Saurabh
`
    },


    // ============================================================
    // CODING PROBLEMS
    // ============================================================

    {
        id: 26,
        module: "classes-objects",
        title: "Coding Problem: Student Class",
        concept: "Create a Student class, initialize its fields, and display the student information.",
        difficulty: "Easy",

        theory: `
Problem:

Create a Student class with:

- name
- age
- marks

Create an object.

Assign values.

Create a display() method to print the values.
`,

        example: `
class Student {

    String name;
    int age;
    int marks;

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
            new Student();

        student.name = "Saurabh";
        student.age = 25;
        student.marks = 85;

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
        module: "classes-objects",
        title: "Coding Problem: Rectangle Area",
        concept: "Create a Rectangle class with fields and a method to calculate its area.",
        difficulty: "Easy",

        theory: `
Problem:

Create a Rectangle class.

Fields:

length
width

Method:

calculateArea()

Formula:

length * width
`,

        example: `
class Rectangle {

    int length;
    int width;

    int calculateArea() {

        return length * width;

    }
}

public class Main {

    public static void main(String[] args) {

        Rectangle rectangle =
            new Rectangle();

        rectangle.length = 10;
        rectangle.width = 5;

        System.out.println(
            rectangle.calculateArea()
        );

    }
}
`,

        output: `
50
`
    },


    {
        id: 28,
        module: "classes-objects",
        title: "Coding Problem: Employee Class",
        concept: "Create an Employee object using a parameterized constructor.",
        difficulty: "Easy",

        theory: `
Problem:

Create an Employee class with:

- id
- name
- salary

Use a parameterized constructor.

Create a display() method.
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

    void display() {

        System.out.println(
            "ID: " + id
        );

        System.out.println(
            "Name: " + name
        );

        System.out.println(
            "Salary: " + salary
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee(
                101,
                "Saurabh",
                50000
            );

        employee.display();

    }
}
`,

        output: `
ID: 101
Name: Saurabh
Salary: 50000.0
`
    },


    {
        id: 29,
        module: "classes-objects",
        title: "Coding Problem: Bank Account",
        concept: "Create a BankAccount class with methods to deposit, withdraw, and display the balance.",
        difficulty: "Medium",

        theory: `
Problem:

Create a BankAccount class with:

- accountNumber
- holderName
- balance

Methods:

deposit()
withdraw()
displayBalance()

Do not allow a withdrawal greater than the current balance.
`,

        example: `
class BankAccount {

    String accountNumber;
    String holderName;
    double balance;

    void deposit(double amount) {

        if (amount > 0) {

            balance += amount;

        }
    }

    void withdraw(double amount) {

        if (
            amount > 0
            && amount <= balance
        ) {

            balance -= amount;

        } else {

            System.out.println(
                "Insufficient Balance"
            );

        }
    }

    void displayBalance() {

        System.out.println(
            "Balance: " + balance
        );

    }
}

public class Main {

    public static void main(String[] args) {

        BankAccount account =
            new BankAccount();

        account.balance = 10000;

        account.deposit(5000);

        account.withdraw(3000);

        account.displayBalance();

    }
}
`,

        output: `
Balance: 12000.0
`
    },


    {
        id: 30,
        module: "classes-objects",
        title: "Coding Problem: Multiple Objects",
        concept: "Create multiple objects from one class and demonstrate independent object state.",
        difficulty: "Medium",

        theory: `
Problem:

Create a Student class.

Create three Student objects.

Each object should have:

- name
- marks

Display all students.

This demonstrates that multiple objects created from one
class maintain independent instance state.
`,

        example: `
class Student {

    String name;
    int marks;

    Student(
        String name,
        int marks
    ) {

        this.name = name;
        this.marks = marks;

    }

    void display() {

        System.out.println(
            name + " - " + marks
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student s1 =
            new Student(
                "Saurabh",
                85
            );

        Student s2 =
            new Student(
                "Rahul",
                90
            );

        Student s3 =
            new Student(
                "Amit",
                88
            );

        s1.display();
        s2.display();
        s3.display();

    }
}
`,

        output: `
Saurabh - 85
Rahul - 90
Amit - 88
`
    }

];