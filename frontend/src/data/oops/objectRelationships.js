export const objectRelationshipsTopics = [

    // ============================================================
    // 1. WHAT ARE OBJECT RELATIONSHIPS?
    // ============================================================

    {
        id: 1,
        module: "object-relationships",
        title: "What are Object Relationships?",
        concept: "Object relationships define how classes and objects interact, depend on, own, or extend each other.",
        difficulty: "Easy",

        theory: `
In Object-Oriented Programming, objects rarely work alone.

Objects can have different types of relationships.

The major relationships are:

1. IS-A relationship
   -> Inheritance

2. HAS-A relationship
   -> Association
   -> Aggregation
   -> Composition

3. USES-A relationship
   -> Dependency

Understanding these relationships helps us design
flexible and maintainable applications.
`,

        example: `
class Engine {

    void start() {

        System.out.println("Engine started");

    }
}

class Car {

    private Engine engine =
        new Engine();

    void startCar() {

        engine.start();

    }
}

public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        car.startCar();

    }
}
`,

        output: `
Engine started
`
    },


    // ============================================================
    // 2. IS-A RELATIONSHIP
    // ============================================================

    {
        id: 2,
        module: "object-relationships",
        title: "IS-A Relationship",
        concept: "An IS-A relationship represents inheritance where a child class is a specialized type of a parent class.",
        difficulty: "Easy",

        theory: `
IS-A relationship is implemented using inheritance.

Examples:

Dog IS-A Animal

Car IS-A Vehicle

Manager IS-A Employee

The child class inherits accessible properties
and methods from the parent class.

Java uses the extends keyword for class inheritance.
`,

        example: `
class Animal {

    void eat() {

        System.out.println("Animal eats");

    }
}

class Dog extends Animal {

    void bark() {

        System.out.println("Dog barks");

    }
}

public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();

        dog.eat();

        dog.bark();

    }
}
`,

        output: `
Animal eats
Dog barks
`
    },


    // ============================================================
    // 3. INHERITANCE
    // ============================================================

    {
        id: 3,
        module: "object-relationships",
        title: "IS-A Relationship using Inheritance",
        concept: "Inheritance allows a child class to reuse and extend the behavior of a parent class.",
        difficulty: "Easy",

        theory: `
Inheritance represents an IS-A relationship.

Syntax:

class Child extends Parent {

}

Example:

Employee
   |
   +---- Manager

Manager IS-A Employee.

The Manager can inherit common Employee behavior
and also define its own behavior.
`,

        example: `
class Employee {

    String name;

    Employee(String name) {

        this.name = name;

    }

    void work() {

        System.out.println(
            name + " is working"
        );

    }
}

class Manager extends Employee {

    Manager(String name) {

        super(name);

    }

    void manage() {

        System.out.println(
            name + " is managing"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Manager manager =
            new Manager("Saurabh");

        manager.work();

        manager.manage();

    }
}
`,

        output: `
Saurabh is working
Saurabh is managing
`
    },


    // ============================================================
    // 4. HAS-A RELATIONSHIP
    // ============================================================

    {
        id: 4,
        module: "object-relationships",
        title: "HAS-A Relationship",
        concept: "A HAS-A relationship means one object contains, owns, references, or works with another object.",
        difficulty: "Easy",

        theory: `
HAS-A relationships represent object collaboration.

Examples:

Car HAS-A Engine

Department HAS Employees

Library HAS Books

HAS-A relationships can be implemented using:

- Association
- Aggregation
- Composition

The exact relationship depends on ownership
and object lifecycle.
`
    },


    // ============================================================
    // 5. ASSOCIATION
    // ============================================================

    {
        id: 5,
        module: "object-relationships",
        title: "Association",
        concept: "Association is a general relationship between independent objects that communicate or work together.",
        difficulty: "Easy",

        theory: `
Association represents a connection between
independent objects.

Example:

Student ---- Teacher

The Student and Teacher can exist independently.

Association can be:

- One-to-one
- One-to-many
- Many-to-many

Association usually represents collaboration
between objects.
`,

        example: `
class Teacher {

    String name;

    Teacher(String name) {

        this.name = name;

    }
}

class Student {

    String name;

    Student(String name) {

        this.name = name;

    }

    void learn(
        Teacher teacher
    ) {

        System.out.println(
            name
            + " learns from "
            + teacher.name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Teacher teacher =
            new Teacher("Rahul");

        Student student =
            new Student("Saurabh");

        student.learn(teacher);

    }
}
`,

        output: `
Saurabh learns from Rahul
`
    },


    // ============================================================
    // 6. ONE-TO-ONE
    // ============================================================

    {
        id: 6,
        module: "object-relationships",
        title: "One-to-One Association",
        concept: "One object is associated with one other object.",
        difficulty: "Easy",

        theory: `
One-to-one association means:

One Person
    |
    |
One Passport

A Person can reference one Passport.

Both classes remain separate objects.
`,

        example: `
class Passport {

    String number;

    Passport(String number) {

        this.number = number;

    }
}

class Person {

    String name;

    Passport passport;

    Person(
        String name,
        Passport passport
    ) {

        this.name = name;

        this.passport = passport;

    }

    void display() {

        System.out.println(
            name
            + " - "
            + passport.number
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Passport passport =
            new Passport("P12345");

        Person person =
            new Person(
                "Saurabh",
                passport
            );

        person.display();

    }
}
`,

        output: `
Saurabh - P12345
`
    },


    // ============================================================
    // 7. ONE-TO-MANY
    // ============================================================

    {
        id: 7,
        module: "object-relationships",
        title: "One-to-Many Association",
        concept: "One object is associated with multiple objects.",
        difficulty: "Medium",

        theory: `
One-to-many means:

Department
    |
    +---- Employee
    +---- Employee
    +---- Employee

One Department can reference multiple Employees.

Collections such as List are commonly used
to represent this relationship.
`,

        example: `
import java.util.ArrayList;
import java.util.List;

class Employee {

    String name;

    Employee(String name) {

        this.name = name;

    }
}

class Department {

    List<Employee> employees =
        new ArrayList<>();

    void addEmployee(
        Employee employee
    ) {

        employees.add(employee);

    }

    void display() {

        for (
            Employee employee : employees
        ) {

            System.out.println(
                employee.name
            );

        }

    }
}

public class Main {

    public static void main(String[] args) {

        Department department =
            new Department();

        department.addEmployee(
            new Employee("Saurabh")
        );

        department.addEmployee(
            new Employee("Rahul")
        );

        department.display();

    }
}
`,

        output: `
Saurabh
Rahul
`
    },


    // ============================================================
    // 8. MANY-TO-MANY
    // ============================================================

    {
        id: 8,
        module: "object-relationships",
        title: "Many-to-Many Association",
        concept: "Many objects of one class can be associated with many objects of another class.",
        difficulty: "Medium",

        theory: `
Many-to-many means:

Students <----> Courses

One Student can enroll in multiple Courses.

One Course can have multiple Students.

This relationship is commonly used in:

- University systems
- User and Role systems
- E-commerce systems
`
    },


    // ============================================================
    // 9. AGGREGATION
    // ============================================================

    {
        id: 9,
        module: "object-relationships",
        title: "Aggregation",
        concept: "Aggregation is a weak HAS-A relationship where related objects can exist independently.",
        difficulty: "Medium",

        theory: `
Aggregation represents weak ownership.

Example:

Department HAS Employees.

The Employee can exist independently
from the Department.

Department removed:

Employee can still exist.

Aggregation is a specialized type
of association.
`,

        example: `
class Employee {

    String name;

    Employee(String name) {

        this.name = name;

    }
}

class Department {

    Employee employee;

    Department(Employee employee) {

        this.employee = employee;

    }

    void display() {

        System.out.println(
            employee.name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee("Saurabh");

        Department department =
            new Department(employee);

        department.display();

    }
}
`,

        output: `
Saurabh
`
    },


    // ============================================================
    // 10. WEAK OWNERSHIP
    // ============================================================

    {
        id: 10,
        module: "object-relationships",
        title: "Weak Ownership",
        concept: "Weak ownership means the contained object is not fully dependent on the lifecycle of the containing object.",
        difficulty: "Medium",

        theory: `
Aggregation represents weak ownership.

Example:

Team HAS Players.

A Player can:

- Exist before joining a Team
- Leave a Team
- Join another Team

Therefore, the Player has an independent lifecycle.

This is different from strong composition ownership.
`
    },


    // ============================================================
    // 11. COMPOSITION
    // ============================================================

    {
        id: 11,
        module: "object-relationships",
        title: "Composition",
        concept: "Composition is a strong HAS-A relationship where the whole object strongly owns and manages its parts.",
        difficulty: "Medium",

        theory: `
Composition represents strong ownership.

Example:

House HAS Rooms.

The Room is strongly connected to
the House object.

The whole object commonly creates
and manages the part object.

Composition models dependent lifecycle.
`,

        example: `
class Engine {

    void start() {

        System.out.println(
            "Engine started"
        );

    }
}

class Car {

    private Engine engine;

    Car() {

        engine =
            new Engine();

    }

    void startCar() {

        engine.start();

    }
}

public class Main {

    public static void main(String[] args) {

        Car car =
            new Car();

        car.startCar();

    }
}
`,

        output: `
Engine started
`
    },


    // ============================================================
    // 12. STRONG OWNERSHIP
    // ============================================================

    {
        id: 12,
        module: "object-relationships",
        title: "Strong Ownership",
        concept: "Strong ownership means the owner object is responsible for managing the lifecycle of its composed parts.",
        difficulty: "Medium",

        theory: `
Composition represents strong ownership.

Example:

House
 |
 +---- Room

The House strongly owns the Room.

The Room is considered an internal component
of the House.

The lifecycle of the part is conceptually
dependent on the whole.
`
    },


    // ============================================================
    // 13. USES-A RELATIONSHIP
    // ============================================================

    {
        id: 13,
        module: "object-relationships",
        title: "USES-A Relationship",
        concept: "A USES-A relationship means one class temporarily uses another class to perform a task.",
        difficulty: "Easy",

        theory: `
A USES-A relationship is commonly implemented
using dependency.

Example:

OrderService USES PaymentService.

The OrderService may use PaymentService
inside a method.

The relationship can be temporary.

Unlike composition, the object is not necessarily
owned by the class.
`
    },


    // ============================================================
    // 14. DEPENDENCY
    // ============================================================

    {
        id: 14,
        module: "object-relationships",
        title: "Dependency",
        concept: "Dependency occurs when one class uses another class to perform an operation.",
        difficulty: "Medium",

        theory: `
Dependency means:

Class A USES Class B.

Class B may be passed as:

- Method parameter
- Local variable
- Method call dependency

Example:

OrderService

uses:

PaymentService

If PaymentService changes significantly,
OrderService may be affected.
`,

        example: `
class PaymentService {

    void pay() {

        System.out.println(
            "Payment successful"
        );

    }
}

class OrderService {

    void placeOrder(
        PaymentService paymentService
    ) {

        paymentService.pay();

        System.out.println(
            "Order placed"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        PaymentService paymentService =
            new PaymentService();

        OrderService orderService =
            new OrderService();

        orderService.placeOrder(
            paymentService
        );

    }
}
`,

        output: `
Payment successful
Order placed
`
    },


    // ============================================================
    // 15. COUPLING
    // ============================================================

    {
        id: 15,
        module: "object-relationships",
        title: "Coupling",
        concept: "Coupling measures how strongly one class depends on another class.",
        difficulty: "Medium",

        theory: `
Coupling describes the dependency level
between classes.

Two common types are:

1. Loose coupling

Classes have fewer and more controlled dependencies.


2. Tight coupling

Classes depend heavily on concrete implementations.

Good object-oriented design generally aims
to reduce unnecessary coupling.
`
    },


    // ============================================================
    // 16. LOOSE COUPLING
    // ============================================================

    {
        id: 16,
        module: "object-relationships",
        title: "Loose Coupling",
        concept: "Loose coupling means classes have minimal knowledge of each other's internal implementation.",
        difficulty: "Hard",

        theory: `
Loose coupling makes applications easier to:

- Modify
- Test
- Maintain
- Extend

A common approach is to depend on abstractions.

Example:

interface Payment {

    void pay();

}

OrderService depends on Payment instead
of depending directly on one specific payment class.
`,

        example: `
interface Payment {

    void pay();

}

class CardPayment
    implements Payment {

    public void pay() {

        System.out.println(
            "Card payment"
        );

    }
}

class OrderService {

    private Payment payment;

    OrderService(Payment payment) {

        this.payment = payment;

    }

    void placeOrder() {

        payment.pay();

        System.out.println(
            "Order placed"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Payment payment =
            new CardPayment();

        OrderService orderService =
            new OrderService(payment);

        orderService.placeOrder();

    }
}
`,

        output: `
Card payment
Order placed
`
    },


    // ============================================================
    // 17. TIGHT COUPLING
    // ============================================================

    {
        id: 17,
        module: "object-relationships",
        title: "Tight Coupling",
        concept: "Tight coupling occurs when a class directly creates or depends heavily on a specific implementation.",
        difficulty: "Medium",

        theory: `
Tight coupling example:

class OrderService {

    PaymentService paymentService =
        new PaymentService();

}

OrderService is directly connected
to PaymentService.

Replacing PaymentService can require changes
to OrderService.

Tight coupling is not always avoidable,
but unnecessary tight coupling can make
systems harder to modify and test.
`
    },


    // ============================================================
    // 18. UML RELATIONSHIP SYMBOLS
    // ============================================================

    {
        id: 18,
        module: "object-relationships",
        title: "UML Relationship Symbols",
        concept: "UML uses different visual symbols to represent inheritance, association, aggregation, composition, and dependency.",
        difficulty: "Medium",

        theory: `
Common UML relationship symbols:

Inheritance:

Child ─────▷ Parent

Usually represented using a solid line
with a hollow triangle.


Association:

Class ───── Class

Usually represented using a solid line.


Aggregation:

Whole ◇──── Part

Hollow diamond near the whole.


Composition:

Whole ◆──── Part

Filled diamond near the whole.


Dependency:

Class - - - -> Class

Usually represented using a dashed arrow.
`
    },


    // ============================================================
    // 19. RELATIONSHIP COMPARISON
    // ============================================================

    {
        id: 19,
        module: "object-relationships",
        title: "Relationship Comparison",
        concept: "Different object relationships describe different levels of inheritance, ownership, and dependency.",
        difficulty: "Medium",

        theory: `
IS-A:

Relationship:
Inheritance

Example:
Dog IS-A Animal


HAS-A:

Relationship:
Association / Aggregation / Composition

Example:
Car HAS-A Engine


USES-A:

Relationship:
Dependency

Example:
OrderService USES PaymentService


Choose the relationship based on:

- Meaning
- Ownership
- Lifecycle
- Dependency
- Reusability
`
    },


    // ============================================================
    // 20. ASSOCIATION VS AGGREGATION
    // ============================================================

    {
        id: 20,
        module: "object-relationships",
        title: "Association vs Aggregation",
        concept: "Association is a general object relationship, while aggregation is a specialized association representing weak whole-part ownership.",
        difficulty: "Medium",

        theory: `
Association:

General relationship between independent objects.

Example:

Student uses Teacher.


Aggregation:

Whole-part relationship.

Example:

Department HAS Employees.

The part can exist independently.

Aggregation is a specialized form
of association.
`
    },


    // ============================================================
    // 21. AGGREGATION VS COMPOSITION
    // ============================================================

    {
        id: 21,
        module: "object-relationships",
        title: "Aggregation vs Composition",
        concept: "Aggregation has weak ownership and independent lifecycle, while composition has strong ownership and dependent lifecycle.",
        difficulty: "Medium",

        theory: `
Aggregation:

Department HAS Employee

Employee can exist independently.


Composition:

House HAS Room

Room is strongly owned by House.


Aggregation:

◇ Hollow diamond


Composition:

◆ Filled diamond


Main difference:

Object ownership and lifecycle dependency.
`
    },


    // ============================================================
    // 22. INHERITANCE VS COMPOSITION
    // ============================================================

    {
        id: 22,
        module: "object-relationships",
        title: "Inheritance vs Composition",
        concept: "Inheritance models an IS-A relationship, while composition models a HAS-A relationship.",
        difficulty: "Hard",

        theory: `
Inheritance:

Dog IS-A Animal.

Used when one class is a specialized
form of another class.


Composition:

Car HAS-A Engine.

Used when a class is built using
other objects.

A common design principle is:

Favor composition over inheritance
when inheritance does not represent
a genuine IS-A relationship.
`
    },


    // ============================================================
    // 23. REAL-WORLD EXAMPLES
    // ============================================================

    {
        id: 23,
        module: "object-relationships",
        title: "Real-World Object Relationship Examples",
        concept: "Real-world systems use different object relationships depending on hierarchy, ownership, and collaboration.",
        difficulty: "Easy",

        theory: `
Examples:

IS-A:

Manager IS-A Employee

Dog IS-A Animal


Association:

Student and Teacher

Customer and Bank


Aggregation:

Department HAS Employees

Library HAS Books


Composition:

House HAS Rooms

Car HAS Engine


Dependency:

OrderService USES PaymentService
`
    },


    // ============================================================
    // 24. DESIGN EXAMPLE
    // ============================================================

    {
        id: 24,
        module: "object-relationships",
        title: "Design Example: E-Commerce System",
        concept: "A real application can use multiple object relationships together.",
        difficulty: "Hard",

        theory: `
Consider an E-Commerce application.

Relationships:

Customer
    |
    | association
    v
Order


Order
    |
    | composition
    v
OrderItem


OrderService
    |
    | dependency
    v
PaymentService


PremiumCustomer
    |
    | inheritance
    v
Customer


Real applications often combine multiple
object relationship types.
`,

        example: `
class PaymentService {

    void pay() {

        System.out.println(
            "Payment processed"
        );

    }
}

class OrderService {

    void placeOrder(
        PaymentService paymentService
    ) {

        paymentService.pay();

        System.out.println(
            "Order created"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        PaymentService paymentService =
            new PaymentService();

        OrderService orderService =
            new OrderService();

        orderService.placeOrder(
            paymentService
        );

    }
}
`,

        output: `
Payment processed
Order created
`
    },


    // ============================================================
    // 25. COMMON MISTAKES
    // ============================================================

    {
        id: 25,
        module: "object-relationships",
        title: "Common Object Relationship Mistakes",
        concept: "Common mistakes include confusing IS-A with HAS-A, using inheritance unnecessarily, and misunderstanding object ownership and lifecycle.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Using inheritance for a HAS-A relationship.

Incorrect:

Car extends Engine


Correct:

Car HAS-A Engine


2. Confusing aggregation and composition.

Ask:

Can the part exist independently?


3. Creating unnecessary bidirectional relationships.

Only use them when navigation is required
in both directions.


4. Creating tight coupling.

Prefer controlled dependencies and abstractions
when appropriate.


5. Ignoring lifecycle ownership.

Determine who creates, owns, and manages
the related object.
`
    },


    // ============================================================
    // 26. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 26,
        module: "object-relationships",
        title: "Object Relationships Interview Questions",
        concept: "Object relationship questions commonly test IS-A, HAS-A, USES-A, association, aggregation, composition, dependency, and coupling.",
        difficulty: "Medium",

        theory: `
1. What are object relationships?

They describe how objects interact,
inherit, own, contain, or use each other.


2. What is an IS-A relationship?

An inheritance relationship.

Example:

Dog IS-A Animal.


3. What is a HAS-A relationship?

One object contains or works with another object.


4. What is a USES-A relationship?

A dependency relationship.


5. What is the difference between aggregation
and composition?

Aggregation has independent lifecycle.

Composition has strong ownership and
dependent lifecycle.


6. What is loose coupling?

Classes have limited dependency on
each other's implementation.


7. What is tight coupling?

Classes are strongly dependent on
specific implementations.


8. What is the difference between inheritance
and composition?

Inheritance represents IS-A.

Composition represents HAS-A.


9. What is association?

A general relationship between independent objects.


10. What is dependency?

One class temporarily or functionally uses
another class.
`
    },


    // ============================================================
    // 27. CODING PROBLEM - IS-A
    // ============================================================

    {
        id: 27,
        module: "object-relationships",
        title: "Coding Problem: IS-A Relationship",
        concept: "Create an Employee parent class and a Developer child class using inheritance.",
        difficulty: "Easy",

        theory: `
Problem:

Create:

Employee

Developer

Developer must extend Employee.

Add:

work()

and:

writeCode()

Demonstrate the IS-A relationship.
`,

        example: `
class Employee {

    void work() {

        System.out.println(
            "Employee is working"
        );

    }
}

class Developer
    extends Employee {

    void writeCode() {

        System.out.println(
            "Developer writes code"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Developer developer =
            new Developer();

        developer.work();

        developer.writeCode();

    }
}
`,

        output: `
Employee is working
Developer writes code
`
    },


    // ============================================================
    // 28. CODING PROBLEM - HAS-A
    // ============================================================

    {
        id: 28,
        module: "object-relationships",
        title: "Coding Problem: HAS-A Relationship",
        concept: "Create a Car that has an Engine object.",
        difficulty: "Easy",

        theory: `
Problem:

Create:

Car

Engine

Car should have an Engine.

Create a method:

startCar()

Use the Engine object to start the car.
`,

        example: `
class Engine {

    void start() {

        System.out.println(
            "Engine started"
        );

    }
}

class Car {

    private Engine engine;

    Car() {

        engine =
            new Engine();

    }

    void startCar() {

        engine.start();

        System.out.println(
            "Car started"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Car car =
            new Car();

        car.startCar();

    }
}
`,

        output: `
Engine started
Car started
`
    },


    // ============================================================
    // 29. CODING PROBLEM - USES-A
    // ============================================================

    {
        id: 29,
        module: "object-relationships",
        title: "Coding Problem: USES-A Relationship",
        concept: "Create an OrderService that uses a PaymentService through a method parameter.",
        difficulty: "Medium",

        theory: `
Problem:

Create:

PaymentService

OrderService

OrderService should temporarily use
PaymentService to process payment.

Demonstrate a dependency relationship.
`,

        example: `
class PaymentService {

    void processPayment() {

        System.out.println(
            "Payment processed"
        );

    }
}

class OrderService {

    void placeOrder(
        PaymentService paymentService
    ) {

        paymentService.processPayment();

        System.out.println(
            "Order placed"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        PaymentService paymentService =
            new PaymentService();

        OrderService orderService =
            new OrderService();

        orderService.placeOrder(
            paymentService
        );

    }
}
`,

        output: `
Payment processed
Order placed
`
    },


    // ============================================================
    // 30. CODING PROBLEM - RELATIONSHIP DESIGN
    // ============================================================

    {
        id: 30,
        module: "object-relationships",
        title: "Coding Problem: Design Multiple Relationships",
        concept: "Create a small design that uses inheritance, composition, and dependency together.",
        difficulty: "Hard",

        theory: `
Problem:

Create:

Vehicle

Car extends Vehicle

Car HAS-A Engine

Car USES a FuelService

Relationships:

Car IS-A Vehicle

Car HAS-A Engine

Car USES-A FuelService
`,

        example: `
class Vehicle {

    void move() {

        System.out.println(
            "Vehicle is moving"
        );

    }
}

class Engine {

    void start() {

        System.out.println(
            "Engine started"
        );

    }
}

class FuelService {

    void provideFuel() {

        System.out.println(
            "Fuel provided"
        );

    }
}

class Car extends Vehicle {

    private Engine engine =
        new Engine();

    void startCar(
        FuelService fuelService
    ) {

        fuelService.provideFuel();

        engine.start();

        move();

    }
}

public class Main {

    public static void main(String[] args) {

        Car car =
            new Car();

        FuelService fuelService =
            new FuelService();

        car.startCar(
            fuelService
        );

    }
}
`,

        output: `
Fuel provided
Engine started
Vehicle is moving
`
    }

];