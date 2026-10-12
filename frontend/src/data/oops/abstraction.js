export const abstractionTopics = [

    // ============================================================
    // 1. DEFINITION
    // ============================================================

    {
        id: 1,
        module: "abstraction",
        title: "Abstraction in Java",
        concept: "Abstraction means exposing essential behavior while hiding unnecessary implementation details.",
        difficulty: "Easy",

        theory: `
Abstraction is one of the four major principles of Object-Oriented Programming.

It focuses on:

What an object does

instead of:

How the object performs the operation.

For example:

A user can call:

payment.pay();

The user does not need to know the complete internal logic
used to process the payment.

In Java, abstraction is commonly achieved using:

- Abstract classes
- Interfaces
`,

        example: `
abstract class Animal {

    abstract void sound();

}

class Dog extends Animal {

    @Override
    void sound() {

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
    // 2. WHY ABSTRACTION
    // ============================================================

    {
        id: 2,
        module: "abstraction",
        title: "Why Use Abstraction?",
        concept: "Abstraction reduces complexity by allowing users of a class to focus on required operations rather than implementation details.",
        difficulty: "Easy",

        theory: `
Abstraction is useful because applications can become complex.

Instead of exposing every implementation detail, a class or
interface can provide a simple contract.

Benefits include:

- Reduced complexity
- Loose coupling
- Easier maintenance
- Better extensibility
- Clear separation between behavior and implementation

For example:

A Payment interface can define:

pay()

Different classes can implement that operation differently.
`
    },


    // ============================================================
    // 3. HIDING IMPLEMENTATION DETAILS
    // ============================================================

    {
        id: 3,
        module: "abstraction",
        title: "Hiding Implementation Details",
        concept: "Abstraction hides unnecessary implementation details and exposes only the operations needed by the client.",
        difficulty: "Easy",

        theory: `
Consider a car.

A driver uses:

start()

accelerate()

brake()

The driver does not need to understand every internal operation
of the engine.

Similarly, in Java:

The client calls a method.

The implementation details remain inside the implementing class.
`,

        example: `
interface Payment {

    void pay();

}

class UPIPayment
        implements Payment {

    public void pay() {

        System.out.println(
            "Processing UPI payment"
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
Processing UPI payment
`
    },


    // ============================================================
    // 4. ABSTRACT CLASS
    // ============================================================

    {
        id: 4,
        module: "abstraction",
        title: "Abstract Class",
        concept: "An abstract class is a class declared with the abstract keyword and may contain abstract as well as concrete methods.",
        difficulty: "Easy",

        theory: `
An abstract class is declared using:

abstract class

It can contain:

- Abstract methods
- Concrete methods
- Fields
- Constructors

An abstract class cannot be instantiated directly.

Example:

abstract class Animal

You cannot write:

new Animal();

A concrete subclass must provide implementations for inherited
abstract methods unless that subclass is also abstract.
`,

        example: `
abstract class Animal {

    abstract void sound();

}

class Dog extends Animal {

    @Override
    void sound() {

        System.out.println(
            "Dog barks"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Dog dog =
            new Dog();

        dog.sound();

    }
}
`,

        output: `
Dog barks
`
    },


    // ============================================================
    // 5. ABSTRACT CLASS SYNTAX
    // ============================================================

    {
        id: 5,
        module: "abstraction",
        title: "Abstract Class Syntax",
        concept: "An abstract class is declared using the abstract keyword before the class keyword.",
        difficulty: "Easy",

        theory: `
Basic syntax:

abstract class ClassName {

    abstract void methodName();

    void concreteMethod() {

    }

}

A subclass can extend the abstract class and provide the
implementation for abstract methods.
`,

        example: `
abstract class Vehicle {

    abstract void start();

}

class Car extends Vehicle {

    @Override
    void start() {

        System.out.println(
            "Car starts"
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
Car starts
`
    },


    // ============================================================
    // 6. ABSTRACT CLASS RULES
    // ============================================================

    {
        id: 6,
        module: "abstraction",
        title: "Abstract Class Rules",
        concept: "Abstract classes follow specific rules regarding abstract methods, inheritance, and object creation.",
        difficulty: "Medium",

        theory: `
Important rules:

1. An abstract class cannot be instantiated directly.

2. An abstract class may contain abstract methods.

3. An abstract class may also contain concrete methods.

4. An abstract method does not have a method body.

5. If a class contains an abstract method, the class must
   generally be declared abstract.

6. A concrete subclass must implement inherited abstract methods.

7. An abstract class can contain fields and constructors.

8. An abstract class can extend another class.

9. A class can extend only one class, including an abstract class.
`
    },


    // ============================================================
    // 7. OBJECT CREATION
    // ============================================================

    {
        id: 7,
        module: "abstraction",
        title: "Object Creation with Abstract Classes",
        concept: "You cannot create an object directly from an abstract class, but an abstract class reference can refer to a concrete subclass object.",
        difficulty: "Medium",

        theory: `
This is not allowed:

Animal animal = new Animal();

This is allowed:

Animal animal = new Dog();

The actual object is:

Dog

The reference type is:

Animal

This also allows polymorphism.
`,

        example: `
abstract class Animal {

    abstract void sound();

}

class Cat extends Animal {

    @Override
    void sound() {

        System.out.println(
            "Cat meows"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Animal animal =
            new Cat();

        animal.sound();

    }
}
`,

        output: `
Cat meows
`
    },


    // ============================================================
    // 8. ABSTRACT METHOD
    // ============================================================

    {
        id: 8,
        module: "abstraction",
        title: "Abstract Method",
        concept: "An abstract method declares required behavior without providing its implementation.",
        difficulty: "Easy",

        theory: `
An abstract method has:

- Method signature
- No method body

Example:

abstract void sound();

A concrete child class provides the implementation.

An abstract method represents behavior that subclasses
are expected to define.
`,

        example: `
abstract class Shape {

    abstract void draw();

}

class Circle extends Shape {

    @Override
    void draw() {

        System.out.println(
            "Drawing circle"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Shape shape =
            new Circle();

        shape.draw();

    }
}
`,

        output: `
Drawing circle
`
    },


    // ============================================================
    // 9. CONCRETE METHOD
    // ============================================================

    {
        id: 9,
        module: "abstraction",
        title: "Concrete Method",
        concept: "A concrete method has a complete implementation and can exist inside an abstract class.",
        difficulty: "Easy",

        theory: `
An abstract class does not need to contain only abstract methods.

It can also provide shared implemented behavior.

Example:

abstract class Animal {

    abstract void sound();

    void sleep() {

        System.out.println("Sleeping");

    }

}

The subclasses must implement sound(), but they can reuse sleep().
`,

        example: `
abstract class Animal {

    abstract void sound();

    void sleep() {

        System.out.println(
            "Animal is sleeping"
        );

    }
}

class Dog extends Animal {

    @Override
    void sound() {

        System.out.println(
            "Dog barks"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Dog dog =
            new Dog();

        dog.sound();

        dog.sleep();

    }
}
`,

        output: `
Dog barks
Animal is sleeping
`
    },


    // ============================================================
    // 10. ABSTRACT CLASS CONSTRUCTOR
    // ============================================================

    {
        id: 10,
        module: "abstraction",
        title: "Abstract Class Constructor",
        concept: "An abstract class can have constructors that initialize shared state when a concrete subclass object is created.",
        difficulty: "Medium",

        theory: `
Although an abstract class cannot be instantiated directly,
it can still have a constructor.

When a subclass object is created, the parent constructor
is executed as part of object construction.

This is useful for initializing common fields.
`,

        example: `
abstract class Animal {

    String name;

    Animal(
        String name
    ) {

        this.name = name;

        System.out.println(
            "Animal constructor called"
        );

    }

    abstract void sound();
}

class Dog extends Animal {

    Dog(
        String name
    ) {

        super(name);

    }

    @Override
    void sound() {

        System.out.println(
            name + " barks"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Dog dog =
            new Dog("Tommy");

        dog.sound();

    }
}
`,

        output: `
Animal constructor called
Tommy barks
`
    },


    // ============================================================
    // 11. ABSTRACT CLASS INHERITANCE
    // ============================================================

    {
        id: 11,
        module: "abstraction",
        title: "Abstract Class Inheritance",
        concept: "A concrete class extends an abstract class and implements its required abstract methods.",
        difficulty: "Medium",

        theory: `
A child class uses:

extends

Example:

class Dog extends Animal

If Dog is a concrete class, it must implement all inherited
abstract methods that have not already been implemented.

Otherwise, Dog must also be declared abstract.
`,

        example: `
abstract class Vehicle {

    abstract void start();

    void stop() {

        System.out.println(
            "Vehicle stopped"
        );

    }
}

class Car extends Vehicle {

    @Override
    void start() {

        System.out.println(
            "Car started"
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
Car started
Vehicle stopped
`
    },


    // ============================================================
    // 12. INTERFACE-BASED ABSTRACTION
    // ============================================================

    {
        id: 12,
        module: "abstraction",
        title: "Interface-Based Abstraction",
        concept: "Interfaces define a contract that implementing classes fulfill with their own behavior.",
        difficulty: "Medium",

        theory: `
An interface represents a contract.

Example:

interface Payment {

    void pay();

}

Any implementing class must provide the required implementation.

This allows client code to depend on the abstraction:

Payment

instead of a specific implementation:

CardPayment
UPIPayment
`
    },


    // ============================================================
    // 13. ABSTRACTION USING ABSTRACT CLASSES
    // ============================================================

    {
        id: 13,
        module: "abstraction",
        title: "Abstraction Using Abstract Classes",
        concept: "Abstract classes are useful when related classes share common state or behavior while still requiring specialized implementations.",
        difficulty: "Medium",

        theory: `
Use an abstract class when classes:

- Share common fields
- Share common methods
- Have a common base implementation
- Need some required methods to be implemented differently

Example:

Animal

Shared behavior:

sleep()

Required specialized behavior:

sound()
`,

        example: `
abstract class Animal {

    void sleep() {

        System.out.println(
            "Sleeping"
        );

    }

    abstract void sound();
}

class Dog extends Animal {

    @Override
    void sound() {

        System.out.println(
            "Barking"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Animal animal =
            new Dog();

        animal.sound();

        animal.sleep();

    }
}
`,

        output: `
Barking
Sleeping
`
    },


    // ============================================================
    // 14. ABSTRACTION USING INTERFACES
    // ============================================================

    {
        id: 14,
        module: "abstraction",
        title: "Abstraction Using Interfaces",
        concept: "Interfaces allow unrelated classes to follow the same contract.",
        difficulty: "Medium",

        theory: `
Interfaces are useful when different classes should expose
the same capability.

Example:

Payment

Different implementations:

- CardPayment
- UPIPayment
- NetBankingPayment

Each class can implement the same pay() operation differently.

A class can implement multiple interfaces.
`,

        example: `
interface Payment {

    void pay();

}

class CardPayment
        implements Payment {

    public void pay() {

        System.out.println(
            "Paid using card"
        );

    }
}

class UPIPayment
        implements Payment {

    public void pay() {

        System.out.println(
            "Paid using UPI"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Payment payment =
            new CardPayment();

        payment.pay();

        payment =
            new UPIPayment();

        payment.pay();

    }
}
`,

        output: `
Paid using card
Paid using UPI
`
    },


    // ============================================================
    // 15. PARTIAL ABSTRACTION
    // ============================================================

    {
        id: 15,
        module: "abstraction",
        title: "Partial Abstraction",
        concept: "An abstract class can provide both abstract behavior and implemented behavior, which is commonly described as partial abstraction.",
        difficulty: "Medium",

        theory: `
Partial abstraction means some behavior is already implemented
while other behavior is left for subclasses.

Example:

abstract class Vehicle {

    abstract void start();

    void stop() {

    }

}

start() must be implemented.

stop() is already implemented.
`,

        example: `
abstract class Vehicle {

    abstract void start();

    void stop() {

        System.out.println(
            "Vehicle stopped"
        );

    }
}

class Bike extends Vehicle {

    @Override
    void start() {

        System.out.println(
            "Bike started"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Bike bike =
            new Bike();

        bike.start();

        bike.stop();

    }
}
`,

        output: `
Bike started
Vehicle stopped
`
    },


    // ============================================================
    // 16. COMPLETE ABSTRACTION CONCEPT
    // ============================================================

    {
        id: 16,
        module: "abstraction",
        title: "Complete Abstraction Concept",
        concept: "An interface can represent a fully abstract contract, while modern Java interfaces may also contain default, static, and private methods.",
        difficulty: "Hard",

        theory: `
Traditionally, interfaces were described as providing
complete abstraction because they mainly defined method contracts.

Modern Java interfaces can also contain:

- default methods
- static methods
- private helper methods

Therefore, it is more accurate to say that an interface primarily
defines an abstraction or contract.

The implementing class provides the implementation for required
abstract methods.
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
    // 17. ABSTRACT CLASS VS CONCRETE CLASS
    // ============================================================

    {
        id: 17,
        module: "abstraction",
        title: "Abstract Class vs Concrete Class",
        concept: "An abstract class cannot be instantiated directly, while a concrete class provides complete implementations required for object creation.",
        difficulty: "Medium",

        theory: `
Abstract class:

- Declared using abstract
- Cannot be instantiated directly
- May contain abstract methods
- May contain concrete methods

Concrete class:

- Can be instantiated
- Provides implementations for inherited abstract methods
- Can contain regular fields and methods
`
    },


    // ============================================================
    // 18. ABSTRACTION VS ENCAPSULATION
    // ============================================================

    {
        id: 18,
        module: "abstraction",
        title: "Abstraction vs Encapsulation",
        concept: "Abstraction focuses on essential behavior and contracts, while encapsulation focuses on controlling access to object state and implementation details.",
        difficulty: "Medium",

        theory: `
Abstraction focuses on:

What an object can do.

Example:

Payment

pay()


Encapsulation focuses on:

How an object's state is protected and controlled.

Example:

private double balance;

deposit()

withdraw()


Abstraction commonly uses:

- Abstract classes
- Interfaces

Encapsulation commonly uses:

- Private fields
- Controlled methods
`
    },


    // ============================================================
    // 19. REAL-WORLD EXAMPLE - PAYMENT
    // ============================================================

    {
        id: 19,
        module: "abstraction",
        title: "Real-World Example: Payment System",
        concept: "A payment abstraction allows different payment implementations to be used through one common interface.",
        difficulty: "Medium",

        theory: `
An application can support multiple payment methods.

Examples:

- Credit Card
- UPI
- Net Banking

The application can work with:

Payment

instead of directly depending on every concrete class.

Each implementation provides its own pay() behavior.
`,

        example: `
interface Payment {

    void pay(
        double amount
    );

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

public class Main {

    public static void main(String[] args) {

        Payment payment =
            new CardPayment();

        payment.pay(500);

        payment =
            new UPIPayment();

        payment.pay(1000);

    }
}
`,

        output: `
Card payment: 500.0
UPI payment: 1000.0
`
    },


    // ============================================================
    // 20. REAL-WORLD EXAMPLE - NOTIFICATION
    // ============================================================

    {
        id: 20,
        module: "abstraction",
        title: "Real-World Example: Notification System",
        concept: "A common notification abstraction allows different delivery channels to provide their own implementation.",
        difficulty: "Medium",

        theory: `
An application may send notifications through:

- Email
- SMS
- Push Notification

Instead of writing client code for every implementation,
the application can use a common abstraction.
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
    // 21. COMMON MISTAKES
    // ============================================================

    {
        id: 21,
        module: "abstraction",
        title: "Common Abstraction Mistakes",
        concept: "Common mistakes include trying to instantiate abstract classes, forgetting to implement abstract methods, and confusing abstraction with encapsulation.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Trying to create an object of an abstract class.

Wrong:

Animal animal =
    new Animal();


2. Forgetting to implement abstract methods in a concrete class.


3. Confusing abstract classes and interfaces.

They both support abstraction but have different design purposes.


4. Assuming interfaces can contain only abstract methods.

Modern Java interfaces can also contain default, static,
and private methods.


5. Thinking abstraction and encapsulation are the same.

They solve different design concerns.


6. Using abstraction unnecessarily.

An abstraction should represent a meaningful contract or
common concept.
`
    },


    // ============================================================
    // 22. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 22,
        module: "abstraction",
        title: "Abstraction Interview Questions",
        concept: "Important interview questions cover abstract classes, abstract methods, interfaces, constructors, and abstraction design.",
        difficulty: "Medium",

        theory: `
1. What is abstraction?

Abstraction exposes essential behavior while hiding unnecessary
implementation details.


2. How is abstraction achieved in Java?

Using:

- Abstract classes
- Interfaces


3. Can we create an object of an abstract class?

No, not directly.


4. Can an abstract class have a constructor?

Yes.


5. Can an abstract class have concrete methods?

Yes.


6. Can an abstract class have fields?

Yes.


7. Can an abstract class have no abstract methods?

Yes.


8. What is an abstract method?

A method declaration without a method body.


9. Can an abstract method be private?

No, because subclasses must be able to implement or override
the required behavior.


10. What is the difference between an abstract class and interface?

An abstract class can provide shared state and implementation.

An interface primarily defines a contract and supports
multiple interface implementation.


11. Can a class implement multiple interfaces?

Yes.


12. Can a class extend multiple classes?

No.


13. What is partial abstraction?

An abstract class can contain both abstract and concrete methods.


14. What is complete abstraction?

This term traditionally refers to interfaces defining behavior
without implementation, although modern interfaces can also contain
default, static, and private methods.
`
    },


    // ============================================================
    // 23. CODING PROBLEM - SHAPE
    // ============================================================

    {
        id: 23,
        module: "abstraction",
        title: "Coding Problem: Abstract Shape",
        concept: "Create an abstract Shape class and implement different drawing behavior in subclasses.",
        difficulty: "Easy",

        theory: `
Problem:

Create an abstract class:

Shape

Create an abstract method:

draw()

Create subclasses:

Circle
Rectangle

Each class should provide its own implementation.
`,

        example: `
abstract class Shape {

    abstract void draw();

}

class Circle extends Shape {

    @Override
    void draw() {

        System.out.println(
            "Drawing circle"
        );

    }
}

class Rectangle extends Shape {

    @Override
    void draw() {

        System.out.println(
            "Drawing rectangle"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Shape shape =
            new Circle();

        shape.draw();

        shape =
            new Rectangle();

        shape.draw();

    }
}
`,

        output: `
Drawing circle
Drawing rectangle
`
    },


    // ============================================================
    // 24. CODING PROBLEM - PAYMENT INTERFACE
    // ============================================================

    {
        id: 24,
        module: "abstraction",
        title: "Coding Problem: Payment Interface",
        concept: "Create a Payment interface and implement different payment methods.",
        difficulty: "Medium",

        theory: `
Problem:

Create an interface:

Payment

Method:

pay()

Create:

CardPayment
UPIPayment

Use a Payment reference to execute both implementations.
`,

        example: `
interface Payment {

    void pay();

}

class CardPayment
        implements Payment {

    public void pay() {

        System.out.println(
            "Paid using card"
        );

    }
}

class UPIPayment
        implements Payment {

    public void pay() {

        System.out.println(
            "Paid using UPI"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Payment payment =
            new CardPayment();

        payment.pay();

        payment =
            new UPIPayment();

        payment.pay();

    }
}
`,

        output: `
Paid using card
Paid using UPI
`
    },


    // ============================================================
    // 25. CODING PROBLEM - EMPLOYEE
    // ============================================================

    {
        id: 25,
        module: "abstraction",
        title: "Coding Problem: Employee Salary",
        concept: "Use an abstract class to define a common employee structure with different salary calculations.",
        difficulty: "Medium",

        theory: `
Problem:

Create an abstract Employee class.

Fields:

name

Abstract method:

calculateSalary()

Create:

FullTimeEmployee
PartTimeEmployee

Each subclass calculates salary differently.
`,

        example: `
abstract class Employee {

    String name;

    Employee(
        String name
    ) {

        this.name = name;

    }

    abstract double calculateSalary();
}

class FullTimeEmployee
        extends Employee {

    FullTimeEmployee(
        String name
    ) {

        super(name);

    }

    @Override
    double calculateSalary() {

        return 50000;

    }
}

class PartTimeEmployee
        extends Employee {

    PartTimeEmployee(
        String name
    ) {

        super(name);

    }

    @Override
    double calculateSalary() {

        return 25000;

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new FullTimeEmployee(
                "Saurabh"
            );

        System.out.println(
            employee.calculateSalary()
        );

        employee =
            new PartTimeEmployee(
                "Rahul"
            );

        System.out.println(
            employee.calculateSalary()
        );

    }
}
`,

        output: `
50000.0
25000.0
`
    },


    // ============================================================
    // 26. CODING PROBLEM - VEHICLE
    // ============================================================

    {
        id: 26,
        module: "abstraction",
        title: "Coding Problem: Vehicle Abstraction",
        concept: "Create an abstract Vehicle class with common behavior and specialized start behavior.",
        difficulty: "Medium",

        theory: `
Problem:

Create an abstract class:

Vehicle

Create:

abstract void start()

Also create a concrete method:

stop()

Create subclasses:

Car
Bike

Each subclass should implement start().
`,

        example: `
abstract class Vehicle {

    abstract void start();

    void stop() {

        System.out.println(
            "Vehicle stopped"
        );

    }
}

class Car extends Vehicle {

    @Override
    void start() {

        System.out.println(
            "Car started"
        );

    }
}

class Bike extends Vehicle {

    @Override
    void start() {

        System.out.println(
            "Bike started"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Vehicle vehicle =
            new Car();

        vehicle.start();

        vehicle.stop();

        vehicle =
            new Bike();

        vehicle.start();

        vehicle.stop();

    }
}
`,

        output: `
Car started
Vehicle stopped
Bike started
Vehicle stopped
`
    }

];