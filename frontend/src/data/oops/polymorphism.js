export const polymorphismTopics = [

    // ============================================================
    // 1. MEANING OF POLYMORPHISM
    // ============================================================

    {
        id: 1,
        module: "polymorphism",
        title: "Meaning of Polymorphism",
        concept: "Polymorphism means one interface, method name, or reference can represent different forms of behavior.",
        difficulty: "Easy",

        theory: `
The word polymorphism means:

Poly = Many
Morphism = Forms

In Java, polymorphism allows the same method call or interface
to produce different behavior depending on the context.

There are two main types:

1. Compile-time polymorphism
2. Runtime polymorphism

Examples:

Method overloading:
Same method name with different parameters.

Method overriding:
A child class provides its own implementation of a parent method.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal makes a sound"
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
    // 2. TYPES OF POLYMORPHISM
    // ============================================================

    {
        id: 2,
        module: "polymorphism",
        title: "Types of Polymorphism",
        concept: "Java primarily demonstrates polymorphism through method overloading and method overriding.",
        difficulty: "Easy",

        theory: `
The two main categories are:

1. Compile-time polymorphism

Usually achieved using method overloading.

The compiler determines which method should be called based
on the method arguments.


2. Runtime polymorphism

Usually achieved using method overriding.

The actual object determines which overridden instance method
implementation executes at runtime.
`,

        example: `
class Calculator {

    int add(int a, int b) {

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
    // 3. COMPILE-TIME POLYMORPHISM
    // ============================================================

    {
        id: 3,
        module: "polymorphism",
        title: "Compile-Time Polymorphism",
        concept: "Compile-time polymorphism occurs when the compiler resolves which overloaded method is applicable.",
        difficulty: "Easy",

        theory: `
Compile-time polymorphism is generally associated with
method overloading.

The compiler uses information such as:

- Number of arguments
- Types of arguments
- Order of argument types

The return type alone cannot be used to overload a method.

Example:

add(int, int)

add(double, double)
`,

        example: `
class Display {

    void show(int number) {

        System.out.println(
            "Integer: " + number
        );

    }

    void show(String text) {

        System.out.println(
            "String: " + text
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Display display =
            new Display();

        display.show(10);

        display.show("Java");

    }
}
`,

        output: `
Integer: 10
String: Java
`
    },


    // ============================================================
    // 4. METHOD OVERLOADING
    // ============================================================

    {
        id: 4,
        module: "polymorphism",
        title: "Method Overloading",
        concept: "Method overloading means defining multiple methods with the same name but different parameter lists.",
        difficulty: "Easy",

        theory: `
Method overloading requires a different parameter list.

You can change:

- Number of parameters
- Type of parameters
- Order of parameter types

You cannot overload a method only by changing its return type.
`,

        example: `
class Calculator {

    int multiply(
        int a,
        int b
    ) {

        return a * b;

    }

    int multiply(
        int a,
        int b,
        int c
    ) {

        return a * b * c;

    }
}

public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            new Calculator();

        System.out.println(
            calculator.multiply(2, 3)
        );

        System.out.println(
            calculator.multiply(2, 3, 4)
        );

    }
}
`,

        output: `
6
24
`
    },


    // ============================================================
    // 5. RUNTIME POLYMORPHISM
    // ============================================================

    {
        id: 5,
        module: "polymorphism",
        title: "Runtime Polymorphism",
        concept: "Runtime polymorphism occurs when an overridden instance method is selected based on the actual object at runtime.",
        difficulty: "Medium",

        theory: `
Runtime polymorphism is primarily achieved through:

- Inheritance
- Method overriding
- Parent references
- Child objects

Example:

Animal animal = new Dog();

The reference type is Animal.

The actual object type is Dog.

For an overridden instance method, Java selects the Dog
implementation at runtime.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
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
    // 6. METHOD OVERRIDING
    // ============================================================

    {
        id: 6,
        module: "polymorphism",
        title: "Method Overriding",
        concept: "Method overriding happens when a child class provides a specialized implementation of an inherited instance method.",
        difficulty: "Medium",

        theory: `
Method overriding is a foundation of runtime polymorphism.

The child method generally has:

- Same method name
- Same parameter list
- Compatible return type

Use @Override to let the compiler verify that the method
is actually overriding a parent method.

A child cannot override:

- final methods
- private methods

Static methods are hidden rather than overridden.
`,

        example: `
class Vehicle {

    void start() {

        System.out.println(
            "Vehicle starts"
        );

    }
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
    // 7. DYNAMIC METHOD DISPATCH
    // ============================================================

    {
        id: 7,
        module: "polymorphism",
        title: "Dynamic Method Dispatch",
        concept: "Dynamic method dispatch is the runtime process used to select the correct overridden instance method based on the actual object.",
        difficulty: "Hard",

        theory: `
Dynamic method dispatch happens when:

A parent reference points to a child object.

Example:

Animal animal = new Dog();

animal.sound();

The compiler verifies that sound() is available through
the reference type.

At runtime, Java selects the overridden implementation
based on the actual object type.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
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

        Animal animal;

        animal = new Dog();

        animal.sound();

        animal = new Cat();

        animal.sound();

    }
}
`,

        output: `
Dog barks
Cat meows
`
    },


    // ============================================================
    // 8. PARENT REFERENCE
    // ============================================================

    {
        id: 8,
        module: "polymorphism",
        title: "Parent Reference",
        concept: "A parent-class reference can refer to an object of a child class.",
        difficulty: "Easy",

        theory: `
Example:

Animal animal = new Dog();

The reference type is Animal.

The object type is Dog.

The reference can access members declared in Animal that are
accessible through that reference.

For overridden instance methods, the Dog implementation
can execute at runtime.
`,

        example: `
class Animal {

    void eat() {

        System.out.println(
            "Animal eats"
        );

    }
}

class Dog extends Animal {

    void bark() {

        System.out.println(
            "Dog barks"
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
Animal eats
`
    },


    // ============================================================
    // 9. CHILD OBJECT
    // ============================================================

    {
        id: 9,
        module: "polymorphism",
        title: "Child Object",
        concept: "A child object contains the state and behavior defined by its class together with inherited accessible behavior.",
        difficulty: "Easy",

        theory: `
Example:

Animal animal = new Dog();

The actual object created is Dog.

Therefore, overridden instance methods can execute using
the Dog implementation.

However, what members can be accessed directly is determined
at compile time by the reference type.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
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
    // 10. REFERENCE VS OBJECT TYPE
    // ============================================================

    {
        id: 10,
        module: "polymorphism",
        title: "Reference Type vs Object Type",
        concept: "The reference type controls compile-time member access, while overridden instance method behavior is selected using the actual object type.",
        difficulty: "Hard",

        theory: `
Consider:

Animal animal = new Dog();

Reference type:

Animal

Object type:

Dog

At compile time:

Java checks what can be accessed using Animal.

At runtime:

Java selects the correct overridden instance method
using the Dog object.

This distinction is essential for understanding polymorphism.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
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

    void bark() {

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

    }
}
`,

        output: `
Dog barks
`
    },


    // ============================================================
    // 11. UPCASTING
    // ============================================================

    {
        id: 11,
        module: "polymorphism",
        title: "Upcasting",
        concept: "Upcasting converts a child object reference to a parent type reference and is usually implicit.",
        difficulty: "Medium",

        theory: `
Upcasting means:

Child → Parent

Example:

Dog dog = new Dog();

Animal animal = dog;

Or directly:

Animal animal = new Dog();

Upcasting is safe because a Dog IS-A Animal.

Upcasting is commonly used to achieve runtime polymorphism.
`,

        example: `
class Animal {

    void eat() {

        System.out.println(
            "Eating"
        );

    }
}

class Dog extends Animal {

    void bark() {

        System.out.println(
            "Barking"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Dog dog =
            new Dog();

        Animal animal = dog;

        animal.eat();

    }
}
`,

        output: `
Eating
`
    },


    // ============================================================
    // 12. DOWNCASTING
    // ============================================================

    {
        id: 12,
        module: "polymorphism",
        title: "Downcasting",
        concept: "Downcasting converts a parent reference back to a more specific child type and requires an explicit cast.",
        difficulty: "Medium",

        theory: `
Downcasting means:

Parent reference → Child reference

Example:

Animal animal = new Dog();

Dog dog = (Dog) animal;

Downcasting can fail at runtime if the actual object is not
an instance of the target child type.

Therefore instanceof can be used when the runtime type is uncertain.
`,

        example: `
class Animal {

    void eat() {

        System.out.println(
            "Eating"
        );

    }
}

class Dog extends Animal {

    void bark() {

        System.out.println(
            "Barking"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Animal animal =
            new Dog();

        Dog dog =
            (Dog) animal;

        dog.eat();
        dog.bark();

    }
}
`,

        output: `
Eating
Barking
`
    },


    // ============================================================
    // 13. INSTANCEOF OPERATOR
    // ============================================================

    {
        id: 13,
        module: "polymorphism",
        title: "instanceof Operator",
        concept: "The instanceof operator checks whether an object is compatible with a specific reference type.",
        difficulty: "Medium",

        theory: `
The instanceof operator returns:

true

or

false

Example:

Animal animal = new Dog();

animal instanceof Dog

returns true.

It is often used before a downcast when the actual runtime type
is not guaranteed.
`,

        example: `
class Animal {

}

class Dog extends Animal {

    void bark() {

        System.out.println(
            "Dog barks"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Animal animal =
            new Dog();

        if (animal instanceof Dog) {

            Dog dog =
                (Dog) animal;

            dog.bark();

        }

    }
}
`,

        output: `
Dog barks
`
    },


    // ============================================================
    // 14. RUNTIME METHOD SELECTION
    // ============================================================

    {
        id: 14,
        module: "polymorphism",
        title: "Runtime Method Selection",
        concept: "For overridden instance methods, Java selects the implementation associated with the actual object at runtime.",
        difficulty: "Hard",

        theory: `
Consider:

Animal animal;

animal = new Dog();

animal.sound();

Dog.sound() executes.

Later:

animal = new Cat();

animal.sound();

Cat.sound() executes.

The same reference variable can refer to different
subclass objects.

This is one of the main benefits of polymorphism.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
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
            new Dog();

        animal.sound();

        animal =
            new Cat();

        animal.sound();

    }
}
`,

        output: `
Dog barks
Cat meows
`
    },


    // ============================================================
    // 15. POLYMORPHISM WITH INHERITANCE
    // ============================================================

    {
        id: 15,
        module: "polymorphism",
        title: "Polymorphism with Inheritance",
        concept: "Inheritance provides a common parent type that allows different child objects to be handled through the same reference type.",
        difficulty: "Medium",

        theory: `
Polymorphism and inheritance commonly work together.

Example hierarchy:

Animal
   ↓
Dog
Cat

A single Animal reference can point to:

new Dog()

or:

new Cat()

The appropriate overridden behavior executes at runtime.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
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

class Cat extends Animal {

    @Override
    void sound() {

        System.out.println(
            "Cat meows"
        );

    }
}

public class Main {

    static void makeSound(
        Animal animal
    ) {

        animal.sound();

    }

    public static void main(String[] args) {

        makeSound(
            new Dog()
        );

        makeSound(
            new Cat()
        );

    }
}
`,

        output: `
Dog barks
Cat meows
`
    },


    // ============================================================
    // 16. POLYMORPHISM WITH INTERFACES
    // ============================================================

    {
        id: 16,
        module: "polymorphism",
        title: "Polymorphism with Interfaces",
        concept: "An interface reference can refer to objects of any class that implements that interface.",
        difficulty: "Medium",

        theory: `
Interfaces provide another important form of polymorphism.

Example:

Payment payment;

payment = new CreditCardPayment();

payment.pay();

Later:

payment = new UPIPayment();

payment.pay();

The application can depend on the Payment abstraction
instead of a specific implementation.
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
    // 17. BENEFITS OF POLYMORPHISM
    // ============================================================

    {
        id: 17,
        module: "polymorphism",
        title: "Benefits of Polymorphism",
        concept: "Polymorphism improves flexibility by allowing code to work with abstractions rather than specific implementations.",
        difficulty: "Easy",

        theory: `
Benefits include:

1. Flexibility

The same code can work with different object types.


2. Extensibility

New implementations can often be added without changing
existing client code.


3. Loose coupling

Code can depend on interfaces or parent classes.


4. Maintainability

Common operations can be handled through a shared abstraction.


5. Runtime behavior

Different implementations can execute based on the actual object.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
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

class Cat extends Animal {

    @Override
    void sound() {

        System.out.println(
            "Cat meows"
        );

    }
}

public class Main {

    static void playSound(
        Animal animal
    ) {

        animal.sound();

    }

    public static void main(String[] args) {

        playSound(new Dog());

        playSound(new Cat());

    }
}
`,

        output: `
Dog barks
Cat meows
`
    },


    // ============================================================
    // 18. COMMON MISTAKES
    // ============================================================

    {
        id: 18,
        module: "polymorphism",
        title: "Common Polymorphism Mistakes",
        concept: "Common mistakes include confusing overloading with overriding and misunderstanding reference type versus object type.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Confusing overloading and overriding.

Overloading:

Same method name,
different parameter list.

Overriding:

Compatible method signature in a child class.


2. Trying to access child-specific members using only a parent reference.


3. Unsafe downcasting.

A wrong cast can cause ClassCastException.


4. Thinking fields use runtime polymorphism.

Field access is based on the reference type.


5. Thinking static methods are overridden.

Static methods are hidden, not overridden.


6. Forgetting to use @Override.

The annotation helps detect mistakes.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
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
    // 19. REAL-WORLD EXAMPLE - PAYMENT
    // ============================================================

    {
        id: 19,
        module: "polymorphism",
        title: "Real-World Example: Payment System",
        concept: "Different payment implementations can be processed through one common Payment interface.",
        difficulty: "Medium",

        theory: `
A payment system can support:

- Credit Card
- UPI
- Net Banking

Instead of writing separate processing logic for every payment type,
the application can use a common interface.

Payment → pay()

Different classes provide different implementations.
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
        module: "polymorphism",
        title: "Real-World Example: Notification System",
        concept: "A notification abstraction can support different implementations such as Email, SMS, and Push Notification.",
        difficulty: "Medium",

        theory: `
An application may send notifications using different channels.

Examples:

- Email
- SMS
- Push notification

A common Notification interface allows the system to process
all implementations in the same way.
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
    // 21. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 21,
        module: "polymorphism",
        title: "Polymorphism Interview Questions",
        concept: "Important interview questions about method overloading, overriding, dynamic dispatch, casting, and runtime behavior.",
        difficulty: "Medium",

        theory: `
1. What is polymorphism?

Polymorphism means one abstraction or operation can have
multiple forms of behavior.


2. What are the main types?

- Compile-time polymorphism
- Runtime polymorphism


3. How is compile-time polymorphism achieved?

Usually through method overloading.


4. How is runtime polymorphism achieved?

Usually through method overriding with dynamic method dispatch.


5. What is dynamic method dispatch?

It is the runtime selection of an overridden instance method
based on the actual object.


6. What is upcasting?

Assigning a child object to a parent reference.


7. What is downcasting?

Explicitly converting a parent reference to a child reference.


8. Why can downcasting be dangerous?

The actual object may not be an instance of the target type,
causing ClassCastException.


9. What is instanceof?

An operator used to test whether an object is compatible with
a particular type.


10. Are fields polymorphic?

No. Field access is determined using the reference type.


11. Are static methods polymorphic through overriding?

No. Static methods are hidden.


12. Can private methods be overridden?

No.


13. Can final methods be overridden?

No.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
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
    // 22. CODING PROBLEM - OVERLOADING
    // ============================================================

    {
        id: 22,
        module: "polymorphism",
        title: "Coding Problem: Method Overloading",
        concept: "Create multiple methods with the same name and different parameters.",
        difficulty: "Easy",

        theory: `
Problem:

Create a Calculator class.

Create overloaded methods:

add(int a, int b)

add(int a, int b, int c)

Call both methods.
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
    // 23. CODING PROBLEM - RUNTIME POLYMORPHISM
    // ============================================================

    {
        id: 23,
        module: "polymorphism",
        title: "Coding Problem: Runtime Polymorphism",
        concept: "Use a parent reference to execute overridden methods from different child objects.",
        difficulty: "Medium",

        theory: `
Problem:

Create:

Shape

Child classes:

Circle
Rectangle

Add an overridden method:

draw()

Use a Shape reference to call both implementations.
`,

        example: `
class Shape {

    void draw() {

        System.out.println(
            "Drawing shape"
        );

    }
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
    // 24. CODING PROBLEM - POLYMORPHIC ARRAY
    // ============================================================

    {
        id: 24,
        module: "polymorphism",
        title: "Coding Problem: Polymorphic Array",
        concept: "Store different child objects inside an array of a common parent type.",
        difficulty: "Medium",

        theory: `
Problem:

Create an Animal parent class.

Create:

Dog
Cat
Cow

Override sound().

Store all objects inside:

Animal[] animals

Use a loop to call sound().

Each object should execute its own implementation.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
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

class Cat extends Animal {

    @Override
    void sound() {

        System.out.println(
            "Cat meows"
        );

    }
}

class Cow extends Animal {

    @Override
    void sound() {

        System.out.println(
            "Cow moos"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Animal[] animals = {

            new Dog(),
            new Cat(),
            new Cow()

        };

        for (Animal animal : animals) {

            animal.sound();

        }

    }
}
`,

        output: `
Dog barks
Cat meows
Cow moos
`
    },


    // ============================================================
    // 25. CODING PROBLEM - INTERFACE POLYMORPHISM
    // ============================================================

    {
        id: 25,
        module: "polymorphism",
        title: "Coding Problem: Interface Polymorphism",
        concept: "Use one interface reference to work with multiple implementation classes.",
        difficulty: "Medium",

        theory: `
Problem:

Create a Payment interface.

Create:

CardPayment
UPIPayment

Implement:

pay()

Create a method that accepts Payment.

Pass both implementations to that method.
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

    static void processPayment(
        Payment payment
    ) {

        payment.pay();

    }

    public static void main(String[] args) {

        processPayment(
            new CardPayment()
        );

        processPayment(
            new UPIPayment()
        );

    }
}
`,

        output: `
Paid using card
Paid using UPI
`
    },


    // ============================================================
    // 26. CODING PROBLEM - SAFE DOWNCASTING
    // ============================================================

    {
        id: 26,
        module: "polymorphism",
        title: "Coding Problem: Safe Downcasting",
        concept: "Use instanceof before downcasting when the actual runtime type is uncertain.",
        difficulty: "Medium",

        theory: `
Problem:

Create:

Animal
Dog
Cat

Store a Dog object in an Animal reference.

Use instanceof to check the actual type.

Downcast safely and call the child-specific method.
`,

        example: `
class Animal {

}

class Dog extends Animal {

    void bark() {

        System.out.println(
            "Dog barks"
        );

    }
}

class Cat extends Animal {

    void meow() {

        System.out.println(
            "Cat meows"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Animal animal =
            new Dog();

        if (animal instanceof Dog) {

            Dog dog =
                (Dog) animal;

            dog.bark();

        }

    }
}
`,

        output: `
Dog barks
`
    }

];