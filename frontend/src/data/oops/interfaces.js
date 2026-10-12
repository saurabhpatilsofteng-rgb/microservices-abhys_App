





export const interfacesTopics  = [

    // ============================================================
    // 1. WHAT IS AN INTERFACE?
    // ============================================================

    {
        id: 1,
        module: "interface",
        title: "What is an Interface?",
        concept: "An interface defines a contract that classes can implement.",
        difficulty: "Easy",

        theory: `
An interface is a Java reference type used to define a contract.

It specifies behavior that implementing classes must provide.

For example:

interface Payment {

    void pay();

}

Any class that implements Payment must provide an implementation
for pay() unless the class is abstract.

Interfaces are commonly used for:

- Abstraction
- Loose coupling
- Polymorphism
- Multiple inheritance of type
`,

        example: `
interface Animal {

    void sound();

}

class Dog implements Animal {

    public void sound() {

        System.out.println(
            "Dog barks"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Animal animal =
            new Dog();

        animal.sound();

    }
}
`,

        output: `
Dog barks
`
    },


    // ============================================================
    // 2. INTERFACE KEYWORD
    // ============================================================

    {
        id: 2,
        module: "interface",
        title: "interface Keyword",
        concept: "The interface keyword is used to declare an interface in Java.",
        difficulty: "Easy",

        theory: `
The syntax for creating an interface is:

interface InterfaceName {

    // members

}

Example:

interface Payment {

    void pay();

}

The interface defines the contract.

A class provides the implementation.
`,

        example: `
interface Vehicle {

    void start();

}

public class Main {

    public static void main(String[] args) {

        System.out.println(
            "Interface created"
        );

    }
}
`,

        output: `
Interface created
`
    },


    // ============================================================
    // 3. IMPLEMENTS KEYWORD
    // ============================================================

    {
        id: 3,
        module: "interface",
        title: "implements Keyword",
        concept: "A class uses the implements keyword to provide implementations for an interface.",
        difficulty: "Easy",

        theory: `
A class uses:

implements

to follow an interface contract.

Syntax:

class ClassName
    implements InterfaceName {

}

The implementing class must implement all inherited abstract
methods unless the class itself is declared abstract.
`,

        example: `
interface Vehicle {

    void start();

}

class Car implements Vehicle {

    public void start() {

        System.out.println(
            "Car started"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Vehicle vehicle =
            new Car();

        vehicle.start();

    }
}
`,

        output: `
Car started
`
    },


    // ============================================================
    // 4. ABSTRACT METHODS
    // ============================================================

    {
        id: 4,
        module: "interface",
        title: "Abstract Methods in Interfaces",
        concept: "Interface methods without a body are implicitly public and abstract unless declared as default, static, or private.",
        difficulty: "Medium",

        theory: `
A traditional interface method has no body.

Example:

void pay();

Such a method is implicitly:

public abstract

Therefore:

void pay();

is conceptually equivalent to:

public abstract void pay();

The implementing class normally provides the method body.
`,

        example: `
interface Payment {

    void pay();

}

class UPIPayment
        implements Payment {

    public void pay() {

        System.out.println(
            "UPI payment completed"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Payment payment =
            new UPIPayment();

        payment.pay();

    }
}
`,

        output: `
UPI payment completed
`
    },


    // ============================================================
    // 5. DEFAULT METHODS
    // ============================================================

    {
        id: 5,
        module: "interface",
        title: "Default Methods",
        concept: "A default method provides an implementation inside an interface.",
        difficulty: "Medium",

        theory: `
Default methods were introduced in Java 8.

A default method has a body.

Syntax:

default void methodName() {

}

Default methods allow interfaces to evolve by adding new behavior
without requiring every existing implementation to immediately
implement the new method.
`,

        example: `
interface Vehicle {

    default void start() {

        System.out.println(
            "Vehicle starting"
        );

    }
}

class Car implements Vehicle {

}

public class Main {

    public static void main(String[] args) {

        Car car =
            new Car();

        car.start();

    }
}
`,

        output: `
Vehicle starting
`
    },


    // ============================================================
    // 6. STATIC METHODS
    // ============================================================

    {
        id: 6,
        module: "interface",
        title: "Static Methods in Interfaces",
        concept: "Static methods belong to the interface itself and are called using the interface name.",
        difficulty: "Medium",

        theory: `
Interfaces can contain static methods.

Syntax:

static void methodName() {

}

A static interface method belongs to the interface.

It is called using:

InterfaceName.methodName()

Implementing classes do not inherit interface static methods
in the same way as instance methods.
`,

        example: `
interface Calculator {

    static int add(
        int a,
        int b
    ) {

        return a + b;

    }
}

public class Main {

    public static void main(String[] args) {

        int result =
            Calculator.add(10, 20);

        System.out.println(
            result
        );

    }
}
`,

        output: `
30
`
    },


    // ============================================================
    // 7. PRIVATE METHODS
    // ============================================================

    {
        id: 7,
        module: "interface",
        title: "Private Methods in Interfaces",
        concept: "Private methods allow interfaces to reuse internal implementation logic inside default and static methods.",
        difficulty: "Hard",

        theory: `
Private interface methods were introduced in Java 9.

They are useful for avoiding duplicate code inside interface
default and static methods.

Private methods cannot be called directly from implementing classes.

They are internal helper methods of the interface.
`,

        example: `
interface Logger {

    default void info(
        String message
    ) {

        print(
            "INFO: " + message
        );

    }

    private void print(
        String message
    ) {

        System.out.println(
            message
        );

    }
}

class AppLogger
        implements Logger {

}

public class Main {

    public static void main(String[] args) {

        AppLogger logger =
            new AppLogger();

        logger.info("Application started");

    }
}
`,

        output: `
INFO: Application started
`
    },


    // ============================================================
    // 8. INTERFACE CONSTANTS
    // ============================================================

    {
        id: 8,
        module: "interface",
        title: "Interface Constants",
        concept: "Fields declared in an interface are implicitly public, static, and final.",
        difficulty: "Medium",

        theory: `
Variables declared inside an interface are constants.

They are implicitly:

public static final

Example:

int MAX_USERS = 100;

is conceptually equivalent to:

public static final int MAX_USERS = 100;

A constant cannot be reassigned.
`,

        example: `
interface AppConfig {

    int MAX_USERS = 100;

}

public class Main {

    public static void main(String[] args) {

        System.out.println(
            AppConfig.MAX_USERS
        );

    }
}
`,

        output: `
100
`
    },


    // ============================================================
    // 9. IMPLEMENTING INTERFACES
    // ============================================================

    {
        id: 9,
        module: "interface",
        title: "Implementing an Interface",
        concept: "A concrete class implements the required abstract methods defined by an interface.",
        difficulty: "Easy",

        theory: `
A class can implement an interface using:

implements

Example:

class Dog
    implements Animal

The implementing class provides the actual behavior.

Interfaces allow code to depend on a common contract instead
of a specific implementation.
`,

        example: `
interface Animal {

    void eat();

}

class Dog implements Animal {

    public void eat() {

        System.out.println(
            "Dog is eating"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Animal animal =
            new Dog();

        animal.eat();

    }
}
`,

        output: `
Dog is eating
`
    },


    // ============================================================
    // 10. MULTIPLE INTERFACES
    // ============================================================

    {
        id: 10,
        module: "interface",
        title: "Multiple Interfaces",
        concept: "A Java class can implement multiple interfaces.",
        difficulty: "Medium",

        theory: `
Java does not support multiple inheritance with classes.

However, a class can implement multiple interfaces.

Syntax:

class MyClass
    implements InterfaceA, InterfaceB {

}

This allows a class to provide multiple capabilities.
`,

        example: `
interface Printable {

    void print();

}

interface Scannable {

    void scan();

}

class Printer
        implements Printable, Scannable {

    public void print() {

        System.out.println(
            "Printing document"
        );

    }

    public void scan() {

        System.out.println(
            "Scanning document"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Printer printer =
            new Printer();

        printer.print();

        printer.scan();

    }
}
`,

        output: `
Printing document
Scanning document
`
    },


    // ============================================================
    // 11. INTERFACE INHERITANCE
    // ============================================================

    {
        id: 11,
        module: "interface",
        title: "Interface Inheritance",
        concept: "An interface can extend one or more other interfaces.",
        difficulty: "Medium",

        theory: `
Interfaces use:

extends

to inherit from other interfaces.

An interface can extend multiple interfaces.

Example:

interface Child
    extends Parent1, Parent2 {

}

This differs from classes, where a class can extend only one class.
`,

        example: `
interface Animal {

    void eat();

}

interface Pet extends Animal {

    void play();

}

class Dog implements Pet {

    public void eat() {

        System.out.println(
            "Dog is eating"
        );

    }

    public void play() {

        System.out.println(
            "Dog is playing"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Pet pet =
            new Dog();

        pet.eat();

        pet.play();

    }
}
`,

        output: `
Dog is eating
Dog is playing
`
    },


    // ============================================================
    // 12. FUNCTIONAL INTERFACE
    // ============================================================

    {
        id: 12,
        module: "interface",
        title: "Functional Interface",
        concept: "A functional interface has exactly one abstract method.",
        difficulty: "Medium",

        theory: `
A functional interface contains exactly one abstract method.

It may also contain:

- Default methods
- Static methods
- Private methods

Examples in Java include:

Runnable

Comparator

Callable

Functional interfaces are commonly used with lambda expressions.
`
    },


    // ============================================================
    // 13. @FUNCTIONALINTERFACE
    // ============================================================

    {
        id: 13,
        module: "interface",
        title: "@FunctionalInterface Annotation",
        concept: "The @FunctionalInterface annotation indicates that an interface is intended to have exactly one abstract method.",
        difficulty: "Medium",

        theory: `
The annotation is:

@FunctionalInterface

Example:

@FunctionalInterface
interface Calculator {

    int calculate(int a, int b);

}

The compiler checks that the interface follows the functional
interface requirement.

The annotation is recommended but not required for an interface
to be treated as a functional interface.
`,

        example: `
@FunctionalInterface
interface Greeting {

    void sayHello();

}

public class Main {

    public static void main(String[] args) {

        Greeting greeting =
            () -> System.out.println(
                "Hello"
            );

        greeting.sayHello();

    }
}
`,

        output: `
Hello
`
    },


    // ============================================================
    // 14. SINGLE ABSTRACT METHOD
    // ============================================================

    {
        id: 14,
        module: "interface",
        title: "Single Abstract Method",
        concept: "A functional interface must have exactly one abstract method.",
        difficulty: "Medium",

        theory: `
A functional interface can contain only one abstract method.

This is valid:

interface Printer {

    void print();

}

This is not a functional interface:

interface Printer {

    void print();

    void scan();

}

Default and static methods do not count as additional abstract methods.
`
    },


    // ============================================================
    // 15. LAMBDA EXPRESSIONS
    // ============================================================

    {
        id: 15,
        module: "interface",
        title: "Lambda Expressions with Interfaces",
        concept: "Lambda expressions provide a concise way to implement a functional interface.",
        difficulty: "Medium",

        theory: `
Before lambda expressions:

Greeting greeting =
    new Greeting() {

        public void sayHello() {

        }

    };

With a lambda:

Greeting greeting =
    () -> System.out.println("Hello");

Lambda expressions work with functional interfaces.
`,

        example: `
@FunctionalInterface
interface Calculator {

    int add(
        int a,
        int b
    );

}

public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            (a, b) -> a + b;

        int result =
            calculator.add(10, 20);

        System.out.println(
            result
        );

    }
}
`,

        output: `
30
`
    },


    // ============================================================
    // 16. MARKER INTERFACE
    // ============================================================

    {
        id: 16,
        module: "interface",
        title: "Marker Interface",
        concept: "A marker interface contains no methods and is used to provide metadata or identify a class for special treatment.",
        difficulty: "Medium",

        theory: `
A marker interface has no methods.

Example:

interface MyMarker {

}

A class can implement it to indicate a specific property
or capability.

A well-known Java example is Serializable.

Marker interfaces are primarily used to mark or categorize
classes.
`,

        example: `
interface Printable {

}

class Document
        implements Printable {

}

public class Main {

    public static void main(String[] args) {

        Document document =
            new Document();

        if (document instanceof Printable) {

            System.out.println(
                "Document is printable"
            );

        }

    }
}
`,

        output: `
Document is printable
`
    },


    // ============================================================
    // 17. DEFAULT METHOD CONFLICTS
    // ============================================================

    {
        id: 17,
        module: "interface",
        title: "Default Method Conflicts",
        concept: "If a class inherits conflicting default methods from multiple interfaces, it must resolve the conflict by overriding the method.",
        difficulty: "Hard",

        theory: `
Suppose two interfaces contain the same default method.

Example:

interface A {

    default void show() {}

}

interface B {

    default void show() {}

}

A class implementing both interfaces must override show().

The class can also explicitly call an interface's default method using:

InterfaceName.super.methodName()
`,

        example: `
interface A {

    default void show() {

        System.out.println(
            "A show"
        );

    }
}

interface B {

    default void show() {

        System.out.println(
            "B show"
        );

    }
}

class Demo
        implements A, B {

    @Override
    public void show() {

        A.super.show();

    }
}

public class Main {

    public static void main(String[] args) {

        Demo demo =
            new Demo();

        demo.show();

    }
}
`,

        output: `
A show
`
    },


    // ============================================================
    // 18. INTERFACE VS ABSTRACT CLASS
    // ============================================================

    {
        id: 18,
        module: "interface",
        title: "Interface vs Abstract Class",
        concept: "Interfaces primarily define contracts, while abstract classes can provide shared state and partial implementation.",
        difficulty: "Medium",

        theory: `
Interface:

- Defines a contract
- Supports multiple interface implementation
- Fields are constants
- Can have abstract, default, static, and private methods
- Does not provide instance state through ordinary fields


Abstract class:

- Can have instance fields
- Can have constructors
- Can contain abstract methods
- Can contain concrete methods
- A class can extend only one class

Use an interface for capabilities and contracts.

Use an abstract class when related classes need shared state
or common implementation.
`
    },


    // ============================================================
    // 19. INTERFACE VS CLASS
    // ============================================================

    {
        id: 19,
        module: "interface",
        title: "Interface vs Class",
        concept: "A class represents an implementation that can create objects, while an interface defines a contract for behavior.",
        difficulty: "Easy",

        theory: `
Class:

class Car {

}

A class can contain:

- Instance variables
- Constructors
- Methods

Objects can be created from concrete classes.


Interface:

interface Vehicle {

    void start();

}

An interface defines behavior that implementing classes provide.

You cannot instantiate an interface directly.
`
    },


    // ============================================================
    // 20. REAL-WORLD EXAMPLE - PAYMENT
    // ============================================================

    {
        id: 20,
        module: "interface",
        title: "Real-World Example: Payment Interface",
        concept: "A payment interface allows different payment systems to provide their own implementation through a common contract.",
        difficulty: "Medium",

        theory: `
An application may support:

- UPI
- Credit Card
- Net Banking

All payment systems can follow the same contract:

pay()

The application can work with the Payment interface instead
of depending directly on a specific payment implementation.
`,

        example: `
interface Payment {

    void pay(
        double amount
    );

}

class UPIPayment
        implements Payment {

    public void pay(
        double amount
    ) {

        System.out.println(
            "UPI payment: "
            + amount
        );

    }
}

class CardPayment
        implements Payment {

    public void pay(
        double amount
    ) {

        System.out.println(
            "Card payment: "
            + amount
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Payment payment =
            new UPIPayment();

        payment.pay(500);

        payment =
            new CardPayment();

        payment.pay(1000);

    }
}
`,

        output: `
UPI payment: 500.0
Card payment: 1000.0
`
    },


    // ============================================================
    // 21. REAL-WORLD EXAMPLE - NOTIFICATION
    // ============================================================

    {
        id: 21,
        module: "interface",
        title: "Real-World Example: Notification Interface",
        concept: "A notification interface allows multiple delivery mechanisms to share one common contract.",
        difficulty: "Medium",

        theory: `
An application may send notifications using:

- Email
- SMS
- Push notification

All implementations can follow:

send(message)

The calling code can work with the Notification interface.
`,

        example: `
interface Notification {

    void send(
        String message
    );

}

class EmailNotification
        implements Notification {

    public void send(
        String message
    ) {

        System.out.println(
            "Email: " + message
        );

    }
}

class SMSNotification
        implements Notification {

    public void send(
        String message
    ) {

        System.out.println(
            "SMS: " + message
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Notification notification =
            new EmailNotification();

        notification.send("Hello");

        notification =
            new SMSNotification();

        notification.send("Welcome");

    }
}
`,

        output: `
Email: Hello
SMS: Welcome
`
    },


    // ============================================================
    // 22. COMMON MISTAKES
    // ============================================================

    {
        id: 22,
        module: "interface",
        title: "Common Interface Mistakes",
        concept: "Common mistakes include incorrect method visibility, trying to instantiate interfaces, and misunderstanding default method behavior.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Trying to instantiate an interface.

Wrong:

Payment payment =
    new Payment();


2. Forgetting public visibility when implementing an interface method.

An implementation of a public interface method cannot reduce
its access level.


3. Treating interface variables like instance variables.

Interface fields are implicitly:

public static final


4. Trying to call an interface static method through an object.

Use:

InterfaceName.methodName()


5. Creating a functional interface with multiple abstract methods.


6. Ignoring default method conflicts when implementing
multiple interfaces.


7. Confusing extends and implements.

Class extends Class

Class implements Interface

Interface extends Interface
`
    },


    // ============================================================
    // 23. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 23,
        module: "interface",
        title: "Interface Interview Questions",
        concept: "Interview questions commonly cover interfaces, multiple inheritance, default methods, functional interfaces, and differences from abstract classes.",
        difficulty: "Medium",

        theory: `
1. What is an interface?

An interface defines a contract for behavior.


2. Can we create an object of an interface?

No, not directly.


3. Which keyword is used by a class to use an interface?

implements


4. Can a class implement multiple interfaces?

Yes.


5. Can an interface extend multiple interfaces?

Yes.


6. What are interface variables?

They are implicitly:

public static final


7. What are default methods?

Methods with implementations inside an interface.


8. What are static methods in interfaces?

Methods belonging to the interface itself.


9. Can an interface contain private methods?

Yes, in modern Java.


10. What is a functional interface?

An interface with exactly one abstract method.


11. What is @FunctionalInterface?

An annotation indicating that an interface is intended to
follow functional interface rules.


12. What is a marker interface?

An interface without methods used to mark or categorize classes.


13. What happens when two interfaces provide the same
default method?

The implementing class must resolve the conflict by overriding it.


14. Difference between abstract class and interface?

Abstract classes can provide shared state and implementation.

Interfaces primarily define contracts and support multiple
interface implementation.
`
    },


    // ============================================================
    // 24. CODING PROBLEM - MULTIPLE INTERFACES
    // ============================================================

    {
        id: 24,
        module: "interface",
        title: "Coding Problem: Multiple Interfaces",
        concept: "Create a class that implements two interfaces and provides both capabilities.",
        difficulty: "Easy",

        theory: `
Problem:

Create two interfaces:

Printable

Scannable

Methods:

print()

scan()

Create a Machine class that implements both interfaces.
`,

        example: `
interface Printable {

    void print();

}

interface Scannable {

    void scan();

}

class Machine
        implements Printable, Scannable {

    public void print() {

        System.out.println(
            "Printing"
        );

    }

    public void scan() {

        System.out.println(
            "Scanning"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Machine machine =
            new Machine();

        machine.print();

        machine.scan();

    }
}
`,

        output: `
Printing
Scanning
`
    },


    // ============================================================
    // 25. CODING PROBLEM - FUNCTIONAL INTERFACE
    // ============================================================

    {
        id: 25,
        module: "interface",
        title: "Coding Problem: Functional Interface",
        concept: "Create a functional interface and implement it using a lambda expression.",
        difficulty: "Medium",

        theory: `
Problem:

Create a functional interface:

Calculator

Method:

calculate(int a, int b)

Use a lambda expression to multiply two numbers.
`,

        example: `
@FunctionalInterface
interface Calculator {

    int calculate(
        int a,
        int b
    );

}

public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            (a, b) -> a * b;

        int result =
            calculator.calculate(10, 5);

        System.out.println(
            result
        );

    }
}
`,

        output: `
50
`
    },


    // ============================================================
    // 26. CODING PROBLEM - PAYMENT SYSTEM
    // ============================================================

    {
        id: 26,
        module: "interface",
        title: "Coding Problem: Payment System",
        concept: "Create multiple payment implementations and execute them using an interface reference.",
        difficulty: "Medium",

        theory: `
Problem:

Create an interface:

Payment

Method:

pay(double amount)

Create:

UPIPayment

CardPayment

Use a Payment reference to execute both implementations.
`,

        example: `
interface Payment {

    void pay(
        double amount
    );

}

class UPIPayment
        implements Payment {

    public void pay(
        double amount
    ) {

        System.out.println(
            "UPI: " + amount
        );

    }
}

class CardPayment
        implements Payment {

    public void pay(
        double amount
    ) {

        System.out.println(
            "Card: " + amount
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Payment payment =
            new UPIPayment();

        payment.pay(500);

        payment =
            new CardPayment();

        payment.pay(1000);

    }
}
`,

        output: `
UPI: 500.0
Card: 1000.0
`
    },

    // ============================================================
    // 27. CODING PROBLEM - DEFAULT METHOD CONFLICT
    // ============================================================

    {
        id: 27,
        module: "interface",
        title: "Coding Problem: Resolve Default Method Conflict",
        concept: "Resolve a conflict when two interfaces define the same default method.",
        difficulty: "Hard",

        theory: `
Problem:

Create two interfaces:

A
B

Both should contain:

default void show()

Create a Demo class implementing both interfaces.

Resolve the conflict by overriding show().
`,

        example: `
interface A {

    default void show() {

        System.out.println(
            "A implementation"
        );

    }
}

interface B {

    default void show() {

        System.out.println(
            "B implementation"
        );

    }
}

class Demo
        implements A, B {

    @Override
    public void show() {

        System.out.println(
            "Conflict resolved"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Demo demo =
            new Demo();

        demo.show();

    }
}
`,

        output: `
Conflict resolved
`
    }

];