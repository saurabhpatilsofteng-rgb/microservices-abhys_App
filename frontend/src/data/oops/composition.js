export const compositionTopics = [

    // ============================================================
    // 1. WHAT IS COMPOSITION?
    // ============================================================

    {
        id: 1,
        module: "composition",
        title: "What is Composition?",
        concept: "Composition is a strong HAS-A relationship where one object owns another object and controls its lifecycle.",
        difficulty: "Easy",

        theory: `
Composition is a special type of association.

It represents a strong HAS-A relationship.

Example:

House HAS-A Room

A Room is strongly connected to its House.

In composition, the whole object owns the part object.

The lifecycle of the part is usually dependent on
the lifecycle of the whole object.
`,

        example: `
class House {

    private Room room;

    House() {

        room = new Room();

    }

    void showRoom() {

        room.display();

    }

}

class Room {

    void display() {

        System.out.println(
            "Room exists inside House"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        House house =
            new House();

        house.showRoom();

    }

}
`,

        output: `
Room exists inside House
`
    },


    // ============================================================
    // 2. STRONG HAS-A RELATIONSHIP
    // ============================================================

    {
        id: 2,
        module: "composition",
        title: "Strong HAS-A Relationship",
        concept: "Composition represents a strong HAS-A relationship because the contained object belongs to and is managed by the containing object.",
        difficulty: "Easy",

        theory: `
Composition represents a strong HAS-A relationship.

Examples:

House HAS-A Room

Car HAS-A Engine

Human HAS-A Heart

The important characteristic is ownership.

The container object creates or strongly manages
the contained object.

Unlike aggregation, the contained object's lifecycle
is strongly connected to the owner.
`
    },


    // ============================================================
    // 3. OBJECT OWNERSHIP
    // ============================================================

    {
        id: 3,
        module: "composition",
        title: "Object Ownership",
        concept: "In composition, one object owns and manages another object as one of its internal parts.",
        difficulty: "Medium",

        theory: `
Composition involves object ownership.

Example:

Car owns Engine.

The Car object manages its Engine.

Conceptually:

Car
 |
 +---- Engine

The Engine is treated as an internal component
of the Car.

The owner controls access to and usage of
the composed object.
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

        engine = new Engine();

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
    // 4. DEPENDENT OBJECT LIFECYCLE
    // ============================================================

    {
        id: 4,
        module: "composition",
        title: "Dependent Object Lifecycle",
        concept: "In composition, the part object is conceptually dependent on the lifecycle of the whole object.",
        difficulty: "Medium",

        theory: `
A key characteristic of composition is
dependent lifecycle.

Example:

House -> Room

If the House does not exist, its internally owned
Room objects conceptually do not exist either.

The part is strongly connected to the whole.

Conceptually:

Whole created
    |
    v
Part created

Whole lifecycle ends
    |
    v
Part lifecycle ends
`
    },


    // ============================================================
    // 5. CREATING OBJECTS INSIDE ANOTHER OBJECT
    // ============================================================

    {
        id: 5,
        module: "composition",
        title: "Creating Objects Inside Another Object",
        concept: "Composition is commonly implemented by creating the dependent object inside the owning class.",
        difficulty: "Easy",

        theory: `
A common implementation of composition is:

class Car {

    private Engine engine;

    Car() {

        engine = new Engine();

    }

}

The Car creates its own Engine.

The Engine reference is private.

External classes do not directly control
the Engine lifecycle.

This demonstrates strong ownership.
`,

        example: `
class CPU {

    void process() {

        System.out.println(
            "CPU is processing"
        );

    }

}

class Computer {

    private CPU cpu;

    Computer() {

        cpu = new CPU();

    }

    void start() {

        cpu.process();

    }

}

public class Main {

    public static void main(String[] args) {

        Computer computer =
            new Computer();

        computer.start();

    }

}
`,

        output: `
CPU is processing
`
    },


    // ============================================================
    // 6. HOUSE AND ROOM
    // ============================================================

    {
        id: 6,
        module: "composition",
        title: "Composition Example: House and Room",
        concept: "A House can strongly own its Room objects.",
        difficulty: "Easy",

        theory: `
House and Room is a common composition example.

House
 |
 +---- Room
 |
 +---- Room
 |
 +---- Room

The House manages its Rooms.

The Rooms are treated as internal parts
of that specific House.
`,

        example: `
class Room {

    String name;

    Room(String name) {

        this.name = name;

    }

    void display() {

        System.out.println(
            name
        );

    }

}

class House {

    private Room bedroom;

    private Room kitchen;

    House() {

        bedroom =
            new Room("Bedroom");

        kitchen =
            new Room("Kitchen");

    }

    void showRooms() {

        bedroom.display();

        kitchen.display();

    }

}

public class Main {

    public static void main(String[] args) {

        House house =
            new House();

        house.showRooms();

    }

}
`,

        output: `
Bedroom
Kitchen
`
    },


    // ============================================================
    // 7. CAR AND ENGINE
    // ============================================================

    {
        id: 7,
        module: "composition",
        title: "Composition Example: Car and Engine",
        concept: "A Car can create and own an Engine as an internal component.",
        difficulty: "Easy",

        theory: `
Car and Engine can be modeled using composition.

The Car creates and manages the Engine.

The Engine performs a specific responsibility.

Car is responsible for:

- Creating the Engine
- Using the Engine
- Managing access to the Engine
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

    void start() {

        engine.start();

        System.out.println(
            "Car is running"
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
Engine started
Car is running
`
    },


    // ============================================================
    // 8. HUMAN AND HEART
    // ============================================================

    {
        id: 8,
        module: "composition",
        title: "Composition Example: Human and Heart",
        concept: "A Heart can be modeled as a strongly owned internal part of a Human object.",
        difficulty: "Easy",

        theory: `
Human and Heart is a conceptual example
of composition.

Human
 |
 +---- Heart

The Heart is treated as an internal component
of the Human.

The Human object uses the Heart object
to perform heart-related behavior.
`,

        example: `
class Heart {

    void beat() {

        System.out.println(
            "Heart is beating"
        );

    }

}

class Human {

    private Heart heart;

    Human() {

        heart =
            new Heart();

    }

    void live() {

        heart.beat();

        System.out.println(
            "Human is alive"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        Human human =
            new Human();

        human.live();

    }

}
`,

        output: `
Heart is beating
Human is alive
`
    },


    // ============================================================
    // 9. COMPOSITION VS AGGREGATION
    // ============================================================

    {
        id: 9,
        module: "composition",
        title: "Composition vs Aggregation",
        concept: "Composition represents strong ownership and dependent lifecycle, while aggregation represents weaker ownership with independent object lifecycle.",
        difficulty: "Medium",

        theory: `
Composition:

Strong HAS-A relationship.

Example:

House HAS Rooms.

The part is strongly tied to the whole.


Aggregation:

Weak HAS-A relationship.

Example:

Department HAS Employees.

Employees can exist independently.


Main difference:

Composition
    -> Strong ownership
    -> Dependent lifecycle

Aggregation
    -> Weak relationship
    -> Independent lifecycle
`
    },


    // ============================================================
    // 10. COMPOSITION VS INHERITANCE
    // ============================================================

    {
        id: 10,
        module: "composition",
        title: "Composition vs Inheritance",
        concept: "Composition models a HAS-A relationship, while inheritance models an IS-A relationship.",
        difficulty: "Medium",

        theory: `
Composition:

HAS-A relationship.

Example:

Car HAS-A Engine.


Inheritance:

IS-A relationship.

Example:

Car IS-A Vehicle.

Inheritance creates a parent-child hierarchy.

Composition combines objects to build behavior.

Composition is often more flexible because
behavior can be changed by replacing
or modifying internal components.
`
    },


    // ============================================================
    // 11. BENEFITS OF COMPOSITION
    // ============================================================

    {
        id: 11,
        module: "composition",
        title: "Benefits of Composition",
        concept: "Composition improves code organization, reuse, flexibility, and separation of responsibilities.",
        difficulty: "Easy",

        theory: `
Benefits of composition:

1. Code reuse

Classes can reuse behavior from contained objects.


2. Flexibility

Internal components can be changed without
changing the class hierarchy.


3. Separation of responsibilities

Each class performs a specific responsibility.


4. Better maintainability

Smaller focused classes are easier to maintain.


5. Reduced inheritance dependency

Classes do not need deep inheritance hierarchies.
`
    },


    // ============================================================
    // 12. CODE REUSE
    // ============================================================

    {
        id: 12,
        module: "composition",
        title: "Composition for Code Reuse",
        concept: "Composition allows a class to reuse another class's behavior by containing and delegating work to an object.",
        difficulty: "Medium",

        theory: `
Composition supports code reuse.

Instead of inheriting behavior, a class can
delegate work to another object.

Example:

Car
 |
 +---- Engine

Car.start()

delegates to:

Engine.start()

This approach keeps responsibilities separated.
`,

        example: `
class Printer {

    void print() {

        System.out.println(
            "Printing document"
        );

    }

}

class Office {

    private Printer printer;

    Office() {

        printer =
            new Printer();

    }

    void printDocument() {

        printer.print();

    }

}

public class Main {

    public static void main(String[] args) {

        Office office =
            new Office();

        office.printDocument();

    }

}
`,

        output: `
Printing document
`
    },


    // ============================================================
    // 13. FLEXIBILITY
    // ============================================================

    {
        id: 13,
        module: "composition",
        title: "Flexibility with Composition",
        concept: "Composition allows behavior to be organized into separate components instead of permanently coupling behavior to an inheritance hierarchy.",
        difficulty: "Medium",

        theory: `
Composition can improve flexibility.

Instead of placing every behavior inside
one large class, responsibilities can be
delegated to separate objects.

Example:

Computer

contains:

- CPU
- Memory
- Storage

Each component has its own responsibility.

The main class coordinates the components.
`
    },


    // ============================================================
    // 14. LOOSE COUPLING
    // ============================================================

    {
        id: 14,
        module: "composition",
        title: "Composition and Loose Coupling",
        concept: "Composition can support loose coupling when classes depend on focused abstractions or components rather than large inheritance hierarchies.",
        difficulty: "Hard",

        theory: `
Composition can help reduce unnecessary coupling.

A class can delegate responsibilities to
other focused objects.

Example:

OrderService
 |
 +---- PaymentService
 |
 +---- NotificationService

Each component performs its own responsibility.

The main object coordinates them.

Good composition design can make systems:

- Easier to test
- Easier to modify
- Easier to extend
`
    },


    // ============================================================
    // 15. FAVOR COMPOSITION OVER INHERITANCE
    // ============================================================

    {
        id: 15,
        module: "composition",
        title: "Favor Composition Over Inheritance",
        concept: "Prefer composition when behavior is better modeled by combining independent components rather than creating a rigid IS-A hierarchy.",
        difficulty: "Hard",

        theory: `
A common object-oriented design principle is:

Favor composition over inheritance.

This does not mean inheritance is always wrong.

Use inheritance when there is a genuine IS-A
relationship.

Use composition when one class needs to use
or combine the behavior of another object.

Inheritance:

Dog IS-A Animal


Composition:

Car HAS-A Engine


Composition can often provide greater flexibility
than deep inheritance hierarchies.
`
    },


    // ============================================================
    // 16. UML COMPOSITION CONCEPT
    // ============================================================

    {
        id: 16,
        module: "composition",
        title: "UML Composition Concept",
        concept: "In UML, composition is represented using a filled diamond at the whole or owner side of the relationship.",
        difficulty: "Medium",

        theory: `
In UML, composition is represented using
a filled diamond.

Example:

House ◆──── Room

The filled diamond is placed near
the whole object.

House = Whole

Room = Part

The filled diamond indicates strong ownership
and lifecycle dependency.
`
    },


    // ============================================================
    // 17. COMMON MISTAKES
    // ============================================================

    {
        id: 17,
        module: "composition",
        title: "Common Composition Mistakes",
        concept: "Common mistakes include confusing composition with aggregation, using composition for an IS-A relationship, and creating unnecessarily rigid object dependencies.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Confusing composition with aggregation.

Composition:

Strong ownership.


Aggregation:

Independent lifecycle.


2. Using composition instead of inheritance.

If:

Dog IS-A Animal

Inheritance may be appropriate.


3. Making every object private and internally created.

Not every HAS-A relationship requires composition.


4. Creating unnecessary tight coupling.

Composition should improve design, not create
large classes with too many responsibilities.


5. Ignoring object lifecycle.

Ask:

Does the part strongly belong to the whole?

If yes, composition may be appropriate.
`
    },


    // ============================================================
    // 18. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 18,
        module: "composition",
        title: "Composition Interview Questions",
        concept: "Composition interview questions focus on strong HAS-A relationships, object ownership, lifecycle dependency, UML notation, and composition versus inheritance.",
        difficulty: "Medium",

        theory: `
1. What is composition in Java?

Composition is a strong HAS-A relationship where
one object owns and manages another object.


2. What is the difference between composition
and aggregation?

Composition has stronger ownership and lifecycle
dependency.

Aggregation allows more independent lifecycles.


3. Give an example of composition.

House and Room.

Car and Engine.

Human and Heart.


4. What relationship does composition represent?

A strong HAS-A relationship.


5. How is composition represented in UML?

Using a filled diamond.


6. What is the difference between composition
and inheritance?

Composition represents HAS-A.

Inheritance represents IS-A.


7. Why favor composition over inheritance?

Composition can provide flexibility and avoid
unnecessary rigid inheritance hierarchies.


8. Does composition mean one class cannot use
another class?

No.

It means the contained object is treated as a
strongly owned component of the whole.
`
    },


    // ============================================================
    // 19. CODING PROBLEM - HOUSE AND ROOMS
    // ============================================================

    {
        id: 19,
        module: "composition",
        title: "Coding Problem: House and Rooms",
        concept: "Create a House that internally creates and manages Room objects.",
        difficulty: "Easy",

        theory: `
Problem:

Create:

House

Room

The House should create its Room objects internally.

Display all rooms.
`,

        example: `
class Room {

    String name;

    Room(String name) {

        this.name = name;

    }

    void display() {

        System.out.println(
            name
        );

    }

}

class House {

    private Room bedroom;

    private Room kitchen;

    House() {

        bedroom =
            new Room("Bedroom");

        kitchen =
            new Room("Kitchen");

    }

    void displayRooms() {

        bedroom.display();

        kitchen.display();

    }

}

public class Main {

    public static void main(String[] args) {

        House house =
            new House();

        house.displayRooms();

    }

}
`,

        output: `
Bedroom
Kitchen
`
    },


    // ============================================================
    // 20. CODING PROBLEM - CAR AND ENGINE
    // ============================================================

    {
        id: 20,
        module: "composition",
        title: "Coding Problem: Car and Engine",
        concept: "Create a Car that owns and manages an Engine object.",
        difficulty: "Easy",

        theory: `
Problem:

Create:

Car

Engine

The Car should create the Engine internally.

Create a method:

startCar()

The Car should delegate engine startup
to the Engine.
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
    // 21. CODING PROBLEM - COMPUTER COMPONENTS
    // ============================================================

    {
        id: 21,
        module: "composition",
        title: "Coding Problem: Computer Components",
        concept: "Create a Computer that internally manages CPU and Memory components.",
        difficulty: "Medium",

        theory: `
Problem:

Create:

Computer

CPU

Memory

The Computer should internally create:

CPU

Memory

The start() method should use both components.
`,

        example: `
class CPU {

    void process() {

        System.out.println(
            "CPU processing"
        );

    }

}

class Memory {

    void load() {

        System.out.println(
            "Memory loaded"
        );

    }

}

class Computer {

    private CPU cpu;

    private Memory memory;

    Computer() {

        cpu =
            new CPU();

        memory =
            new Memory();

    }

    void start() {

        memory.load();

        cpu.process();

        System.out.println(
            "Computer started"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        Computer computer =
            new Computer();

        computer.start();

    }

}
`,

        output: `
Memory loaded
CPU processing
Computer started
`
    },


    // ============================================================
    // 22. CODING PROBLEM - HUMAN AND HEART
    // ============================================================

    {
        id: 22,
        module: "composition",
        title: "Coding Problem: Human and Heart",
        concept: "Create a Human that internally owns and uses a Heart object.",
        difficulty: "Easy",

        theory: `
Problem:

Create:

Human

Heart

The Human should create the Heart internally.

Create a live() method that calls:

heart.beat()
`,

        example: `
class Heart {

    void beat() {

        System.out.println(
            "Heart beating"
        );

    }

}

class Human {

    private Heart heart;

    Human() {

        heart =
            new Heart();

    }

    void live() {

        heart.beat();

        System.out.println(
            "Human is alive"
        );

    }

}

public class Main {

    public static void main(String[] args) {

        Human human =
            new Human();

        human.live();

    }

}
`,

        output: `
Heart beating
Human is alive
`
    },


    // ============================================================
    // 23. CODING PROBLEM - COMPANY DEPARTMENTS
    // ============================================================

    {
        id: 23,
        module: "composition",
        title: "Coding Problem: School and Classrooms",
        concept: "Create a School that internally creates and manages its Classroom objects.",
        difficulty: "Medium",

        theory: `
Problem:

Create:

School

Classroom

The School should internally create
its Classroom objects.

Display all classrooms.
`,

        example: `
class Classroom {

    String name;

    Classroom(String name) {

        this.name = name;

    }

    void display() {

        System.out.println(
            name
        );

    }

}

class School {

    private Classroom room1;

    private Classroom room2;

    School() {

        room1 =
            new Classroom("Classroom A");

        room2 =
            new Classroom("Classroom B");

    }

    void displayClassrooms() {

        room1.display();

        room2.display();

    }

}

public class Main {

    public static void main(String[] args) {

        School school =
            new School();

        school.displayClassrooms();

    }

}
`,

        output: `
Classroom A
Classroom B
`
    }

];