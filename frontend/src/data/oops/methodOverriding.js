export const methodOverridingTopics = [

    // ============================================================
    // 1. WHAT IS METHOD OVERRIDING?
    // ============================================================

    {
        id: 1,
        module: "method-overriding",
        title: "What is Method Overriding?",
        concept: "Method overriding occurs when a child class provides its own implementation of a method inherited from a parent class.",
        difficulty: "Easy",

        theory: `
Method overriding happens when a child class defines a method
with the same signature as a method in its parent class.

The child class provides a new implementation.

Example:

class Animal {

    void sound() {

        System.out.println("Animal sound");

    }
}

class Dog extends Animal {

    void sound() {

        System.out.println("Dog barks");

    }
}

When sound() is called on a Dog object, the Dog implementation
is executed.
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
    // 2. RUNTIME POLYMORPHISM
    // ============================================================

    {
        id: 2,
        module: "method-overriding",
        title: "Runtime Polymorphism",
        concept: "Method overriding enables runtime polymorphism because the method implementation is selected based on the actual object.",
        difficulty: "Easy",

        theory: `
Method overriding is associated with:

Runtime polymorphism

The method that executes depends on the actual object created.

Example:

Animal animal =
    new Dog();

animal.sound();

The reference type is Animal.

The actual object type is Dog.

Therefore, the Dog implementation is executed at runtime.
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
    // 3. OVERRIDING RULES
    // ============================================================

    {
        id: 3,
        module: "method-overriding",
        title: "Method Overriding Rules",
        concept: "Overriding requires an inherited method and generally the same method signature, subject to Java's rules for return type, access, exceptions, and method kind.",
        difficulty: "Medium",

        theory: `
Important overriding rules:

1. There must be an inheritance relationship.

2. The method name must be the same.

3. The parameter list must be the same.

4. The return type must be the same or covariant.

5. The child method cannot reduce the accessibility
   of the inherited method.

6. final methods cannot be overridden.

7. static methods are hidden, not overridden.

8. private methods are not inherited and therefore
   cannot be overridden.

9. Constructors cannot be overridden.

10. @Override is recommended because it allows the
    compiler to detect mistakes.
`
    },


    // ============================================================
    // 4. SAME METHOD SIGNATURE
    // ============================================================

    {
        id: 4,
        module: "method-overriding",
        title: "Same Method Signature",
        concept: "An overriding method must have the same method name and parameter list as the inherited method.",
        difficulty: "Easy",

        theory: `
The method signature for overriding must match the parent method.

Example:

Parent:

void display(String name)

Child:

void display(String name)

If the parameter list changes, it becomes method overloading,
not method overriding.
`,

        example: `
class Parent {

    void display(
        String name
    ) {

        System.out.println(
            "Parent: " + name
        );

    }
}

class Child extends Parent {

    @Override
    void display(
        String name
    ) {

        System.out.println(
            "Child: " + name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Child child =
            new Child();

        child.display("Java");

    }
}
`,

        output: `
Child: Java
`
    },


    // ============================================================
    // 5. COVARIANT RETURN TYPE
    // ============================================================

    {
        id: 5,
        module: "method-overriding",
        title: "Covariant Return Type",
        concept: "An overriding method may return a subtype of the return type declared by the parent method.",
        difficulty: "Hard",

        theory: `
Java supports covariant return types.

If the parent method returns a class type, the child method
may return a subclass of that type.

Example:

Parent returns:

Animal

Child can return:

Dog

because Dog extends Animal.
`,

        example: `
class Animal {

}

class Dog extends Animal {

}

class Parent {

    Animal getAnimal() {

        return new Animal();

    }
}

class Child extends Parent {

    @Override
    Dog getAnimal() {

        return new Dog();

    }
}

public class Main {

    public static void main(String[] args) {

        Child child =
            new Child();

        Animal animal =
            child.getAnimal();

        System.out.println(
            animal.getClass()
                .getSimpleName()
        );

    }
}
`,

        output: `
Dog
`
    },


    // ============================================================
    // 6. ACCESS MODIFIER RULES
    // ============================================================

    {
        id: 6,
        module: "method-overriding",
        title: "Access Modifier Rules",
        concept: "An overriding method cannot be more restrictive than the parent method, but it may increase accessibility.",
        difficulty: "Medium",

        theory: `
The child method cannot reduce visibility.

Example:

Parent:

protected void show()

Child:

public void show()

This is valid because public is more accessible.

But if the parent method is public:

public void show()

The child cannot override it as:

protected void show()

because that would reduce accessibility.
`,

        example: `
class Parent {

    protected void show() {

        System.out.println(
            "Parent method"
        );

    }
}

class Child extends Parent {

    @Override
    public void show() {

        System.out.println(
            "Child method"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Child child =
            new Child();

        child.show();

    }
}
`,

        output: `
Child method
`
    },


    // ============================================================
    // 7. PARENT METHOD AND CHILD METHOD
    // ============================================================

    {
        id: 7,
        module: "method-overriding",
        title: "Parent Method and Child Method",
        concept: "The parent defines inherited behavior, while the child can replace that behavior by overriding the method.",
        difficulty: "Easy",

        theory: `
The parent class contains the original method.

The child class inherits that method.

The child may override it to provide specialized behavior.

Parent:

class Vehicle

Child:

class Car extends Vehicle
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
            "Car starts with key"
        );

    }
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
Car starts with key
`
    },


    // ============================================================
    // 8. @OVERRIDE ANNOTATION
    // ============================================================

    {
        id: 8,
        module: "method-overriding",
        title: "@Override Annotation",
        concept: "The @Override annotation tells the compiler that a method is intended to override an inherited method.",
        difficulty: "Easy",

        theory: `
The @Override annotation is strongly recommended.

It helps detect mistakes.

For example, if the method name or parameter list does not match
an inherited method, the compiler reports an error.

Without @Override, a typo could accidentally create a new method
instead of overriding the intended parent method.
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
    // 9. DYNAMIC METHOD DISPATCH
    // ============================================================

    {
        id: 9,
        module: "method-overriding",
        title: "Dynamic Method Dispatch",
        concept: "Dynamic method dispatch is the mechanism through which Java selects an overridden instance method at runtime based on the actual object.",
        difficulty: "Medium",

        theory: `
Dynamic method dispatch occurs when:

Parent reference
        |
        v
Child object

Example:

Animal animal =
    new Dog();

animal.sound();

The compiler allows sound() because Animal declares it.

At runtime, Java checks the actual object.

Because the object is Dog, the Dog version executes.
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal sound"
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
    // 10. SUPER.METHOD()
    // ============================================================

    {
        id: 10,
        module: "method-overriding",
        title: "Calling Parent Method Using super.method()",
        concept: "super.methodName() explicitly calls the parent implementation from an overriding method.",
        difficulty: "Medium",

        theory: `
When a child overrides a method, it can still call the
parent implementation using:

super.methodName();

This is useful when the child wants to extend the parent behavior
instead of completely replacing it.
`,

        example: `
class Parent {

    void display() {

        System.out.println(
            "Parent display"
        );

    }
}

class Child extends Parent {

    @Override
    void display() {

        super.display();

        System.out.println(
            "Child display"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Child child =
            new Child();

        child.display();

    }
}
`,

        output: `
Parent display
Child display
`
    },


    // ============================================================
    // 11. FINAL METHODS
    // ============================================================

    {
        id: 11,
        module: "method-overriding",
        title: "final Methods",
        concept: "A final method cannot be overridden by a child class.",
        difficulty: "Medium",

        theory: `
The final keyword prevents method overriding.

Example:

class Parent {

    final void display() {

    }

}

A child class cannot provide another implementation
of display().

final methods are useful when a behavior must remain unchanged
in subclasses.
`,

        example: `
class Parent {

    final void display() {

        System.out.println(
            "Final method"
        );

    }
}

class Child extends Parent {

}

public class Main {

    public static void main(String[] args) {

        Child child =
            new Child();

        child.display();

    }
}
`,

        output: `
Final method
`
    },


    // ============================================================
    // 12. STATIC METHODS
    // ============================================================

    {
        id: 12,
        module: "method-overriding",
        title: "Static Methods and Method Hiding",
        concept: "Static methods are resolved using the reference or class type and are hidden rather than overridden.",
        difficulty: "Hard",

        theory: `
Static methods belong to the class.

They are not dynamically dispatched like instance methods.

If a child class declares a static method with the same signature
as a static method in the parent class, this is called:

Method hiding

The selected static method depends on the reference or class type.
`,

        example: `
class Parent {

    static void show() {

        System.out.println(
            "Parent static method"
        );

    }
}

class Child extends Parent {

    static void show() {

        System.out.println(
            "Child static method"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Parent parent =
            new Child();

        parent.show();

        Child.show();

    }
}
`,

        output: `
Parent static method
Child static method
`
    },


    // ============================================================
    // 13. PRIVATE METHODS
    // ============================================================

    {
        id: 13,
        module: "method-overriding",
        title: "Private Methods",
        concept: "Private methods are not inherited, so they cannot be overridden.",
        difficulty: "Medium",

        theory: `
A private method belongs only to the class where it is declared.

It is not inherited by child classes.

Therefore, a child method with the same name and parameters
does not override the parent's private method.

It is a completely separate method.
`,

        example: `
class Parent {

    private void show() {

        System.out.println(
            "Parent private method"
        );

    }

    void callParentMethod() {

        show();

    }
}

class Child extends Parent {

    void show() {

        System.out.println(
            "Child method"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Child child =
            new Child();

        child.callParentMethod();

        child.show();

    }
}
`,

        output: `
Parent private method
Child method
`
    },


    // ============================================================
    // 14. CONSTRUCTORS AND OVERRIDING
    // ============================================================

    {
        id: 14,
        module: "method-overriding",
        title: "Constructors and Method Overriding",
        concept: "Constructors are not inherited and therefore cannot be overridden.",
        difficulty: "Easy",

        theory: `
Constructors cannot be overridden.

A constructor belongs to its own class.

A child class does not inherit the parent's constructors.

However, when creating a child object, parent constructors may
execute through:

super()

Constructor execution is different from method overriding.
`
    },


    // ============================================================
    // 15. METHOD HIDING
    // ============================================================

    {
        id: 15,
        module: "method-overriding",
        title: "Method Hiding",
        concept: "Method hiding occurs when a child class declares a static method with the same signature as a static method in the parent class.",
        difficulty: "Hard",

        theory: `
Method hiding applies to static methods.

Example:

Parent.show()

Child.show()

If both methods are static, the child method hides the parent method.

Unlike overriding, the actual object does not determine
which static method executes.

The reference type determines the method.
`,

        example: `
class Parent {

    static void display() {

        System.out.println(
            "Parent"
        );

    }
}

class Child extends Parent {

    static void display() {

        System.out.println(
            "Child"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Parent parent =
            new Child();

        parent.display();

        Child.display();

    }
}
`,

        output: `
Parent
Child
`
    },


    // ============================================================
    // 16. OVERLOADING VS OVERRIDING
    // ============================================================

    {
        id: 16,
        module: "method-overriding",
        title: "Method Overloading vs Method Overriding",
        concept: "Overloading uses different parameter lists, while overriding provides a new implementation for an inherited method with the same signature.",
        difficulty: "Medium",

        theory: `
Method Overloading:

- Same method name
- Different parameters
- Inheritance is not required
- Compile-time polymorphism


Method Overriding:

- Same method signature
- Inheritance relationship required
- Runtime polymorphism
- Child provides a new implementation
`
    },


    // ============================================================
    // 17. COMMON MISTAKES
    // ============================================================

    {
        id: 17,
        module: "method-overriding",
        title: "Common Method Overriding Mistakes",
        concept: "Common mistakes include changing parameters, reducing access, trying to override static or final methods, and forgetting that private methods are not overridden.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Changing the parameter list.

This creates overloading, not overriding.


2. Changing only the return type incorrectly.

Return types must be compatible.


3. Reducing access visibility.

A public parent method cannot become protected or private
in the child.


4. Trying to override a final method.


5. Treating static methods as overridden.

Static methods are hidden.


6. Trying to override private methods.

Private methods are not inherited.


7. Forgetting @Override.

Using @Override helps detect mistakes.


8. Confusing the reference type with the actual object type.

For overridden instance methods, the actual object determines
which implementation executes.
`
    },


    // ============================================================
    // 18. REAL-WORLD EXAMPLE - PAYMENT
    // ============================================================

    {
        id: 18,
        module: "method-overriding",
        title: "Real-World Example: Payment System",
        concept: "Different payment types can override a common payment method to provide their own processing behavior.",
        difficulty: "Medium",

        theory: `
A payment system may define common behavior in a parent class.

Different payment types can override the pay() method.

Examples:

- UPIPayment
- CardPayment
- NetBankingPayment

Each payment type provides its own implementation.
`,

        example: `
class Payment {

    void pay() {

        System.out.println(
            "Processing payment"
        );

    }
}

class UPIPayment extends Payment {

    @Override
    void pay() {

        System.out.println(
            "Processing UPI payment"
        );

    }
}

class CardPayment extends Payment {

    @Override
    void pay() {

        System.out.println(
            "Processing card payment"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Payment payment =
            new UPIPayment();

        payment.pay();

        payment =
            new CardPayment();

        payment.pay();

    }
}
`,

        output: `
Processing UPI payment
Processing card payment
`
    },


    // ============================================================
    // 19. REAL-WORLD EXAMPLE - NOTIFICATION
    // ============================================================

    {
        id: 19,
        module: "method-overriding",
        title: "Real-World Example: Notification System",
        concept: "Different notification channels can override a common send method.",
        difficulty: "Medium",

        theory: `
A notification system may support:

- Email
- SMS
- Push notification

Each notification type can inherit from a common Notification
class and override the send() method.
`,

        example: `
class Notification {

    void send(
        String message
    ) {

        System.out.println(
            "Sending notification"
        );

    }
}

class EmailNotification
        extends Notification {

    @Override
    void send(
        String message
    ) {

        System.out.println(
            "Email: " + message
        );

    }
}

class SMSNotification
        extends Notification {

    @Override
    void send(
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
    // 20. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 20,
        module: "method-overriding",
        title: "Method Overriding Interview Questions",
        concept: "Interview questions commonly test overriding rules, runtime polymorphism, covariant returns, access rules, static methods, and dynamic dispatch.",
        difficulty: "Medium",

        theory: `
1. What is method overriding?

A child class provides its own implementation of an inherited method.


2. Is overriding compile-time or runtime polymorphism?

Runtime polymorphism.


3. Is inheritance required for overriding?

Yes.


4. Can static methods be overridden?

No. They are hidden.


5. Can final methods be overridden?

No.


6. Can private methods be overridden?

No, because they are not inherited.


7. Can constructors be overridden?

No.


8. What is dynamic method dispatch?

The runtime process that selects the overridden instance method
based on the actual object.


9. Can an overriding method have a different return type?

It must be compatible. Reference return types may be covariant.


10. Can an overriding method reduce access visibility?

No.


11. What is the purpose of @Override?

It tells the compiler that the method is intended to override
an inherited method.


12. What is the difference between overriding and overloading?

Overloading uses different parameter lists.

Overriding uses the same method signature in an inheritance hierarchy.
`
    },


    // ============================================================
    // 21. CODING PROBLEM - ANIMAL SOUND
    // ============================================================

    {
        id: 21,
        module: "method-overriding",
        title: "Coding Problem: Animal Sound",
        concept: "Create a parent class and override its method in multiple child classes.",
        difficulty: "Easy",

        theory: `
Problem:

Create a parent class:

Animal

Method:

sound()

Create:

Dog

Cat

Override sound() in both child classes.
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
    // 22. CODING PROBLEM - VEHICLE
    // ============================================================

    {
        id: 22,
        module: "method-overriding",
        title: "Coding Problem: Vehicle Start",
        concept: "Use a parent reference with different child objects to demonstrate dynamic method dispatch.",
        difficulty: "Medium",

        theory: `
Problem:

Create:

Vehicle

Method:

start()

Create child classes:

Car

Bike

Override start().

Use a Vehicle reference to call both implementations.
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

class Bike extends Vehicle {

    @Override
    void start() {

        System.out.println(
            "Bike starts"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Vehicle vehicle =
            new Car();

        vehicle.start();

        vehicle =
            new Bike();

        vehicle.start();

    }
}
`,

        output: `
Car starts
Bike starts
`
    },


    // ============================================================
    // 23. CODING PROBLEM - SUPER METHOD
    // ============================================================

    {
        id: 23,
        module: "method-overriding",
        title: "Coding Problem: Extend Parent Behavior",
        concept: "Override a method and call the parent implementation using super.methodName().",
        difficulty: "Medium",

        theory: `
Problem:

Create a parent method:

display()

Override it in the child.

Inside the child method:

1. Call the parent method using super.display()
2. Add child-specific behavior.
`,

        example: `
class Parent {

    void display() {

        System.out.println(
            "Parent behavior"
        );

    }
}

class Child extends Parent {

    @Override
    void display() {

        super.display();

        System.out.println(
            "Child behavior"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Child child =
            new Child();

        child.display();

    }
}
`,

        output: `
Parent behavior
Child behavior
`
    },


    // ============================================================
    // 24. CODING PROBLEM - SHAPE AREA
    // ============================================================

    {
        id: 24,
        module: "method-overriding",
        title: "Coding Problem: Shape Area",
        concept: "Use method overriding so different shapes calculate area differently.",
        difficulty: "Hard",

        theory: `
Problem:

Create a Shape parent class.

Create:

Rectangle

Square

Override the area() method in each class.

Use polymorphism through a Shape reference.
`,

        example: `
class Shape {

    int area() {

        return 0;

    }
}

class Rectangle extends Shape {

    int length = 10;

    int width = 5;

    @Override
    int area() {

        return length * width;

    }
}

class Square extends Shape {

    int side = 5;

    @Override
    int area() {

        return side * side;

    }
}

public class Main {

    public static void main(String[] args) {

        Shape shape =
            new Rectangle();

        System.out.println(
            shape.area()
        );

        shape =
            new Square();

        System.out.println(
            shape.area()
        );

    }
}
`,

        output: `
50
25
`
    }

];