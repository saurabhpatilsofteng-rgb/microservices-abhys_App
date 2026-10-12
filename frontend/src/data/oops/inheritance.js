
export const inheritanceTopics = [

    // ============================================================
    // 1. WHAT IS INHERITANCE?
    // ============================================================

    {
        id: 1,
        module: "inheritance",
        title: "What is Inheritance?",
        concept: "Inheritance is an OOP mechanism where one class acquires accessible properties and behaviors from another class.",
        difficulty: "Easy",

        theory: `
Inheritance allows a new class to reuse and extend an existing class.

The existing class is called the parent, superclass, or base class.

The new class is called the child, subclass, or derived class.

Java uses the extends keyword for class inheritance.

Example:

class Animal {
    void eat() {
    }
}

class Dog extends Animal {
    void bark() {
    }
}

Dog can use its own methods and accessible methods inherited
from Animal.
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
    // 2. WHY USE INHERITANCE?
    // ============================================================

    {
        id: 2,
        module: "inheritance",
        title: "Why Use Inheritance?",
        concept: "Inheritance promotes code reuse, extensibility, and hierarchical modeling.",
        difficulty: "Easy",

        theory: `
Inheritance is useful when multiple classes share common
properties or behavior.

Benefits:

- Code reuse
- Reduced duplication
- Easier maintenance
- Extensibility
- Supports method overriding
- Represents hierarchical relationships

For example:

Vehicle
    ↓
Car
Bike
Truck

Common functionality can be placed in Vehicle.
Specific functionality can be placed in child classes.
`,

        example: `
class Vehicle {

    void start() {

        System.out.println("Vehicle started");

    }
}

class Car extends Vehicle {

    void openBoot() {

        System.out.println("Boot opened");

    }
}

public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        car.start();
        car.openBoot();

    }
}
`,

        output: `
Vehicle started
Boot opened
`
    },


    // ============================================================
    // 3. EXTENDS KEYWORD
    // ============================================================

    {
        id: 3,
        module: "inheritance",
        title: "extends Keyword",
        concept: "The extends keyword creates an inheritance relationship between a child class and a parent class.",
        difficulty: "Easy",

        theory: `
Java uses the extends keyword for class inheritance.

Syntax:

class Child extends Parent {

}

The child class inherits accessible members of the parent class.

A Java class can directly extend only one class.
`,

        example: `
class Person {

    String name = "Saurabh";

}

class Employee extends Person {

    int employeeId = 101;

}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee();

        System.out.println(
            employee.name
        );

        System.out.println(
            employee.employeeId
        );

    }
}
`,

        output: `
Saurabh
101
`
    },


    // ============================================================
    // 4. PARENT CLASS
    // ============================================================

    {
        id: 4,
        module: "inheritance",
        title: "Parent Class",
        concept: "A parent class is the class whose accessible members can be inherited by a child class.",
        difficulty: "Easy",

        theory: `
A parent class contains common properties and behavior that
can be reused by child classes.

Other names:

- Superclass
- Base class

Example:

class Animal {

    void eat() {

    }

}

Animal is the parent class of Dog.
`,

        example: `
class Animal {

    void eat() {

        System.out.println("Eating");

    }
}

class Dog extends Animal {

}

public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();

        dog.eat();

    }
}
`,

        output: `
Eating
`
    },


    // ============================================================
    // 5. CHILD CLASS
    // ============================================================

    {
        id: 5,
        module: "inheritance",
        title: "Child Class",
        concept: "A child class inherits accessible members from its parent class and can add its own members.",
        difficulty: "Easy",

        theory: `
A child class is derived from another class.

Other names:

- Subclass
- Derived class

A child class can:

- Inherit accessible fields
- Inherit accessible methods
- Add new fields
- Add new methods
- Override inherited instance methods when permitted
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
    // 6. BASE CLASS
    // ============================================================

    {
        id: 6,
        module: "inheritance",
        title: "Base Class",
        concept: "Base class is another term commonly used for the parent or superclass.",
        difficulty: "Easy",

        theory: `
Base class means the class from which another class derives.

In Java terminology, superclass and parent class are more common.

Example:

Vehicle → base class

Car → derived class
`,

        example: `
class Vehicle {

    void start() {

        System.out.println("Vehicle started");

    }
}

class Car extends Vehicle {

}

public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        car.start();

    }
}
`,

        output: `
Vehicle started
`
    },


    // ============================================================
    // 7. DERIVED CLASS
    // ============================================================

    {
        id: 7,
        module: "inheritance",
        title: "Derived Class",
        concept: "A derived class is another term for a child class that extends a base class.",
        difficulty: "Easy",

        theory: `
A derived class inherits accessible behavior from its base class.

It can also introduce additional state and behavior.

Example:

Vehicle
   ↓
Car

Car is a derived class.
`,

        example: `
class Vehicle {

    void move() {

        System.out.println("Vehicle moving");

    }
}

class Car extends Vehicle {

    void openDoor() {

        System.out.println("Door opened");

    }
}

public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        car.move();
        car.openDoor();

    }
}
`,

        output: `
Vehicle moving
Door opened
`
    },


    // ============================================================
    // 8. IS-A RELATIONSHIP
    // ============================================================

    {
        id: 8,
        module: "inheritance",
        title: "IS-A Relationship",
        concept: "Inheritance represents an IS-A relationship between a child class and its parent class.",
        difficulty: "Easy",

        theory: `
Inheritance should model a genuine IS-A relationship.

Examples:

Dog IS-A Animal

Car IS-A Vehicle

Employee IS-A Person

Incorrect design can make inheritance difficult to maintain.

For example, using inheritance only to reuse code is not always
a good design choice.

Inheritance should represent a meaningful subtype relationship.
`,

        example: `
class Animal {

    void eat() {

        System.out.println("Eating");

    }
}

class Dog extends Animal {

}

public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();

        dog.eat();

    }
}
`,

        output: `
Eating
`
    },


    // ============================================================
    // TYPES OF INHERITANCE
    // ============================================================

    {
        id: 9,
        module: "inheritance",
        title: "Single Inheritance",
        concept: "Single inheritance means one child class extends one parent class.",
        difficulty: "Easy",

        theory: `
Single inheritance structure:

Animal
   ↓
Dog

Dog directly extends Animal.

Java fully supports single inheritance with classes.
`,

        example: `
class Animal {

    void eat() {

        System.out.println("Eating");

    }
}

class Dog extends Animal {

    void bark() {

        System.out.println("Barking");

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
Eating
Barking
`
    },


    {
        id: 10,
        module: "inheritance",
        title: "Multilevel Inheritance",
        concept: "Multilevel inheritance forms a chain where one class extends another child class.",
        difficulty: "Easy",

        theory: `
Multilevel inheritance structure:

Animal
   ↓
Dog
   ↓
Puppy

Puppy can inherit accessible members through the inheritance chain.
`,

        example: `
class Animal {

    void eat() {

        System.out.println("Eating");

    }
}

class Dog extends Animal {

    void bark() {

        System.out.println("Barking");

    }
}

class Puppy extends Dog {

    void weep() {

        System.out.println("Weeping");

    }
}

public class Main {

    public static void main(String[] args) {

        Puppy puppy = new Puppy();

        puppy.eat();
        puppy.bark();
        puppy.weep();

    }
}
`,

        output: `
Eating
Barking
Weeping
`
    },


    {
        id: 11,
        module: "inheritance",
        title: "Hierarchical Inheritance",
        concept: "Hierarchical inheritance occurs when multiple child classes extend the same parent class.",
        difficulty: "Easy",

        theory: `
Hierarchical inheritance:

        Animal
       /      \\
     Dog      Cat

Dog and Cat inherit from Animal.

Each child can have its own specific behavior.
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

class Cat extends Animal {

    void meow() {

        System.out.println("Cat meows");

    }
}

public class Main {

    public static void main(String[] args) {

        Dog dog = new Dog();
        Cat cat = new Cat();

        dog.bark();
        cat.meow();

    }
}
`,

        output: `
Dog barks
Cat meows
`
    },


    {
        id: 12,
        module: "inheritance",
        title: "Multiple Inheritance",
        concept: "Multiple inheritance means inheriting from more than one parent, which Java does not allow directly for classes.",
        difficulty: "Medium",

        theory: `
A multiple inheritance structure would look like:

ParentA      ParentB
      \\      /
        Child

Java does not allow:

class Child extends ParentA, ParentB

However, Java supports a form of multiple inheritance of type through
interfaces.

Example:

class Child implements InterfaceA, InterfaceB {

}
`,

        example: `
interface Camera {

    void takePhoto();

}

interface GPS {

    void showLocation();

}

class Smartphone
        implements Camera, GPS {

    public void takePhoto() {

        System.out.println("Photo taken");

    }

    public void showLocation() {

        System.out.println("Location shown");

    }
}

public class Main {

    public static void main(String[] args) {

        Smartphone phone =
            new Smartphone();

        phone.takePhoto();
        phone.showLocation();

    }
}
`,

        output: `
Photo taken
Location shown
`
    },


    {
        id: 13,
        module: "inheritance",
        title: "Hybrid Inheritance Concept",
        concept: "Hybrid inheritance combines multiple inheritance patterns and is modeled in Java using class inheritance together with interfaces.",
        difficulty: "Hard",

        theory: `
Hybrid inheritance combines different inheritance structures.

For example:

            Vehicle
               ↓
              Car
             /   \\
        GPS       Camera

Java does not support multiple inheritance with classes.

However, interfaces can be combined with class inheritance.

A class can:

- Extend one class
- Implement multiple interfaces
`,

        example: `
class Vehicle {

    void start() {

        System.out.println("Vehicle started");

    }
}

interface GPS {

    void navigate();

}

interface Camera {

    void capture();

}

class Car
        extends Vehicle
        implements GPS, Camera {

    public void navigate() {

        System.out.println("Navigation started");

    }

    public void capture() {

        System.out.println("Image captured");

    }
}

public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        car.start();
        car.navigate();
        car.capture();

    }
}
`,

        output: `
Vehicle started
Navigation started
Image captured
`
    },


    // ============================================================
    // MULTIPLE INHERITANCE AND DIAMOND PROBLEM
    // ============================================================

    {
        id: 14,
        module: "inheritance",
        title: "Why Java Doesn't Support Multiple Class Inheritance",
        concept: "Java avoids multiple inheritance of implementation through classes to prevent ambiguity and excessive complexity.",
        difficulty: "Hard",

        theory: `
Suppose two parent classes contain the same method:

ParentA → show()

ParentB → show()

If Child inherited from both:

Child → show()

Which parent implementation should Java use?

This ambiguity is one reason Java does not allow a class to extend
multiple classes.

Java instead allows:

- Single class inheritance
- Multiple interface implementation
`,

        example: `
interface ParentA {

    void show();

}

interface ParentB {

    void show();

}

class Child
        implements ParentA, ParentB {

    public void show() {

        System.out.println(
            "Child implementation"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Child child = new Child();

        child.show();

    }
}
`,

        output: `
Child implementation
`
    },


    {
        id: 15,
        module: "inheritance",
        title: "Diamond Problem",
        concept: "The diamond problem occurs when multiple inheritance can make it ambiguous which inherited implementation should be used.",
        difficulty: "Hard",

        theory: `
The diamond structure is:

        Parent
        /    \\
    ChildA  ChildB
        \\    /
         GrandChild

If ChildA and ChildB both provide different implementations of
the same method, ambiguity can occur.

Java avoids this problem for classes by allowing only single
class inheritance.

With interfaces containing conflicting default methods, Java requires
the implementing class to resolve the conflict explicitly.
`,

        example: `
interface A {

    default void show() {

        System.out.println("A");

    }
}

interface B {

    default void show() {

        System.out.println("B");

    }
}

class C implements A, B {

    public void show() {

        System.out.println("C");

    }
}

public class Main {

    public static void main(String[] args) {

        C object = new C();

        object.show();

    }
}
`,

        output: `
C
`
    },


    // ============================================================
    // SUPER KEYWORD
    // ============================================================

    {
        id: 16,
        module: "inheritance",
        title: "super Keyword",
        concept: "The super keyword refers to the immediate parent class and is used for accessing parent members or constructors.",
        difficulty: "Medium",

        theory: `
The super keyword can be used to:

1. Access a parent variable.
2. Call a parent method.
3. Call a parent constructor.

Examples:

super.name;

super.show();

super();
`,

        example: `
class Parent {

    String name = "Parent";

}

class Child extends Parent {

    String name = "Child";

    void display() {

        System.out.println(
            super.name
        );

        System.out.println(
            this.name
        );

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
Child
`
    },


    {
        id: 17,
        module: "inheritance",
        title: "super: Access Parent Variable",
        concept: "super.variableName accesses an inherited parent field when it is hidden by a child field with the same name.",
        difficulty: "Medium",

        theory: `
If both parent and child declare a field with the same name,
the child field hides the parent field.

Use:

super.variableName

to access the parent field.
`,

        example: `
class Parent {

    int value = 10;

}

class Child extends Parent {

    int value = 20;

    void display() {

        System.out.println(
            super.value
        );

        System.out.println(
            value
        );

    }
}

public class Main {

    public static void main(String[] args) {

        new Child().display();

    }
}
`,

        output: `
10
20
`
    },


    {
        id: 18,
        module: "inheritance",
        title: "super: Call Parent Method",
        concept: "super.methodName() explicitly invokes an accessible method implementation from the immediate parent class.",
        difficulty: "Medium",

        theory: `
When a child overrides a parent method, the parent implementation
can still be called using super.

Example:

super.display();

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

        new Child().display();

    }
}
`,

        output: `
Parent display
Child display
`
    },


    {
        id: 19,
        module: "inheritance",
        title: "super: Call Parent Constructor",
        concept: "super() or super(arguments) invokes an accessible constructor of the immediate parent class.",
        difficulty: "Medium",

        theory: `
A child constructor can explicitly call a parent constructor.

Example:

Child() {

    super();

}

For a parameterized parent constructor:

Child(String name) {

    super(name);

}

The super call must be the first statement in a constructor.
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
            "Child constructor"
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
Parent: Saurabh
Child constructor
`
    },


    // ============================================================
    // METHOD AND VARIABLE INHERITANCE
    // ============================================================

    {
        id: 20,
        module: "inheritance",
        title: "Method Inheritance",
        concept: "A child class can inherit accessible instance methods from its parent class.",
        difficulty: "Easy",

        theory: `
A child can use accessible methods declared in its parent.

Methods may be:

- public
- protected
- package-private when accessible according to package rules

Private methods are not inherited as accessible members.

A child can also override an inherited instance method when allowed.
`,

        example: `
class Person {

    void walk() {

        System.out.println("Walking");

    }
}

class Employee extends Person {

    void work() {

        System.out.println("Working");

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee();

        employee.walk();
        employee.work();

    }
}
`,

        output: `
Walking
Working
`
    },


    {
        id: 21,
        module: "inheritance",
        title: "Variable Inheritance",
        concept: "A child class can access inherited fields when they are accessible under Java access-control rules.",
        difficulty: "Easy",

        theory: `
Fields declared in a parent class can be accessed by a child
when visibility allows it.

Example:

class Parent {

    protected int value = 100;

}

class Child extends Parent {

    void show() {

        System.out.println(value);

    }

}

Private parent fields are not directly accessible in the child class.
They should usually be accessed through appropriate parent methods.
`,

        example: `
class Parent {

    protected String name =
        "Saurabh";

}

class Child extends Parent {

    void display() {

        System.out.println(name);

    }
}

public class Main {

    public static void main(String[] args) {

        new Child().display();

    }
}
`,

        output: `
Saurabh
`
    },


    // ============================================================
    // CONSTRUCTOR EXECUTION
    // ============================================================

    {
        id: 22,
        module: "inheritance",
        title: "Constructor Execution in Inheritance",
        concept: "When a child object is created, required parent construction happens before the child constructor body executes.",
        difficulty: "Hard",

        theory: `
Consider:

Parent
   ↓
Child

When a Child object is created:

1. The appropriate parent constructor is invoked.
2. Parent initialization completes.
3. The child constructor body executes.

If super() is not explicitly written and this() is not used,
Java attempts an implicit super() call.

Therefore, the parent must have an accessible no-argument constructor
or the child must explicitly call another accessible parent constructor.
`,

        example: `
class Parent {

    Parent() {

        System.out.println(
            "Parent constructor"
        );

    }
}

class Child extends Parent {

    Child() {

        System.out.println(
            "Child constructor"
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
Parent constructor
Child constructor
`
    },


    // ============================================================
    // METHOD OVERRIDING
    // ============================================================

    {
        id: 23,
        module: "inheritance",
        title: "Method Overriding",
        concept: "Method overriding occurs when a child class provides its own implementation of an inherited instance method with a compatible signature.",
        difficulty: "Medium",

        theory: `
Method overriding allows runtime polymorphism.

A child class can provide a more specific implementation.

Use @Override whenever overriding a method.

Basic requirements include:

- Same method name
- Compatible parameter list, typically identical
- Compatible return type
- Cannot reduce visibility
- final methods cannot be overridden
- static methods are hidden, not overridden
- private methods are not overridden
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
    // ACCESS MODIFIERS
    // ============================================================

    {
        id: 24,
        module: "inheritance",
        title: "Inheritance and Access Modifiers",
        concept: "Access modifiers control whether inherited members can be accessed directly by child classes.",
        difficulty: "Medium",

        theory: `
Access modifiers affect accessibility.

public:

Accessible from anywhere.

protected:

Accessible within the same package and also available to subclasses
subject to Java's protected access rules.

default / package-private:

Accessible only within the same package.

private:

Not directly accessible from a child class.

For inheritance design, protected is sometimes used for subclass
extension, while private is often preferred for encapsulation.
`,

        example: `
class Parent {

    public int publicValue = 10;

    protected int protectedValue = 20;

    private int privateValue = 30;

}

class Child extends Parent {

    void display() {

        System.out.println(
            publicValue
        );

        System.out.println(
            protectedValue
        );

    }
}

public class Main {

    public static void main(String[] args) {

        new Child().display();

    }
}
`,

        output: `
10
20
`
    },


    // ============================================================
    // FINAL AND INHERITANCE
    // ============================================================

    {
        id: 25,
        module: "inheritance",
        title: "final and Inheritance",
        concept: "The final keyword can prevent class inheritance or method overriding.",
        difficulty: "Medium",

        theory: `
final class:

A final class cannot be extended.

Example:

final class Parent {

}

class Child extends Parent {

}

This is invalid.

final method:

A final instance method cannot be overridden.

Example:

final void display() {

}

A child can still inherit the method if accessible, but cannot
provide an overriding implementation.
`,

        example: `
class Parent {

    final void show() {

        System.out.println(
            "Final method"
        );

    }
}

class Child extends Parent {

}

public class Main {

    public static void main(String[] args) {

        new Child().show();

    }
}
`,

        output: `
Final method
`
    },


    // ============================================================
    // OBJECT CLASS
    // ============================================================

    {
        id: 26,
        module: "inheritance",
        title: "Object Class",
        concept: "java.lang.Object is the root class of the Java class hierarchy.",
        difficulty: "Medium",

        theory: `
Every Java class ultimately derives from Object.

Common methods inherited from Object include:

- toString()
- equals()
- hashCode()
- getClass()

Some Object methods have additional rules and should be overridden
carefully, especially equals() and hashCode().

Even if a class does not explicitly extend another class,
it implicitly extends Object.
`,

        example: `
class Student {

    String name = "Saurabh";

}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

        System.out.println(
            student.getClass()
                .getSimpleName()
        );

        System.out.println(
            student instanceof Object
        );

    }
}
`,

        output: `
Student
true
`
    },


    // ============================================================
    // COMMON MISTAKES
    // ============================================================

    {
        id: 27,
        module: "inheritance",
        title: "Common Inheritance Mistakes",
        concept: "Inheritance errors often involve confusing inheritance with composition, access rules, constructors, or method overriding.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Trying to extend multiple classes.

Wrong:

class Child
    extends A, B

Java does not allow this.


2. Assuming private fields are directly accessible in a child.


3. Forgetting to call an appropriate parent constructor.


4. Reducing access visibility while overriding.


5. Trying to override a final method.


6. Confusing method overriding with method overloading.


7. Using inheritance where there is no real IS-A relationship.


8. Forgetting that constructors are not inherited.
`,

        example: `
class Parent {

    void display() {

        System.out.println(
            "Parent"
        );

    }
}

class Child extends Parent {

    @Override
    void display() {

        System.out.println(
            "Child"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Parent object =
            new Child();

        object.display();

    }
}
`,

        output: `
Child
`
    },


    // ============================================================
    // REAL-WORLD EXAMPLES
    // ============================================================

    {
        id: 28,
        module: "inheritance",
        title: "Real-World Example: Employee",
        concept: "Different employee types can inherit common employee data and behavior from a shared Employee class.",
        difficulty: "Medium",

        theory: `
An organization may have common employee information:

- id
- name

A Developer can extend Employee and add:

- programmingLanguage

Inheritance avoids duplicating common employee fields.
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

    void displayEmployee() {

        System.out.println(
            id + " - " + name
        );

    }
}

class Developer extends Employee {

    String language;

    Developer(
        int id,
        String name,
        String language
    ) {

        super(id, name);

        this.language = language;

    }

    void display() {

        displayEmployee();

        System.out.println(
            "Language: " + language
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Developer developer =
            new Developer(
                101,
                "Saurabh",
                "Java"
            );

        developer.display();

    }
}
`,

        output: `
101 - Saurabh
Language: Java
`
    },


    {
        id: 29,
        module: "inheritance",
        title: "Real-World Example: Vehicle",
        concept: "Vehicle classes can share common behavior while each child type provides its own implementation.",
        difficulty: "Medium",

        theory: `
Vehicle can contain common functionality.

Car and Bike can extend Vehicle.

Each child can override behavior such as start().

This allows polymorphic behavior while sharing a common abstraction.
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

class Bike extends Vehicle {

    @Override
    void start() {

        System.out.println(
            "Bike starts with button"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Vehicle car = new Car();

        Vehicle bike = new Bike();

        car.start();
        bike.start();

    }
}
`,

        output: `
Car starts with key
Bike starts with button
`
    },


    // ============================================================
    // INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 30,
        module: "inheritance",
        title: "Inheritance Interview Questions",
        concept: "Common Java interview questions covering inheritance, extends, super, overriding, Object, final, and multiple inheritance.",
        difficulty: "Medium",

        theory: `
1. What is inheritance?

Inheritance allows a child class to reuse and extend accessible
behavior from a parent class.


2. Which keyword is used for class inheritance?

extends


3. Can Java support multiple inheritance with classes?

No. A class can directly extend only one class.


4. How can Java achieve multiple inheritance behavior?

By implementing multiple interfaces.


5. What is an IS-A relationship?

A subtype relationship represented through inheritance.


6. What is the difference between parent and child class?

The parent provides inherited members; the child extends and may
specialize the parent.


7. What is super?

A keyword used to refer to the immediate parent class.


8. Can private members be directly accessed in a child?

No.


9. Are constructors inherited?

No, but parent constructors participate in child object construction.


10. What is method overriding?

Providing a child implementation for an inherited instance method
with a compatible signature.


11. Can a final method be overridden?

No.


12. Can a final class be extended?

No.


13. What is the root class of Java classes?

java.lang.Object.


14. What happens when a child constructor does not explicitly call super?

Java attempts an implicit call to an accessible no-argument parent
constructor.
`,

        example: `
class Parent {

    void show() {

        System.out.println(
            "Parent"
        );

    }
}

class Child extends Parent {

    @Override
    void show() {

        System.out.println(
            "Child"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Parent object =
            new Child();

        object.show();

    }
}
`,

        output: `
Child
`
    },


    // ============================================================
    // CODING PROBLEMS
    // ============================================================

    {
        id: 31,
        module: "inheritance",
        title: "Coding Problem: Basic Single Inheritance",
        concept: "Create a child class that inherits a method from a parent class.",
        difficulty: "Easy",

        theory: `
Problem:

Create:

Person

Method:

introduce()

Create:

Student extends Person

Add:

study()

Create a Student object and call both methods.
`,

        example: `
class Person {

    void introduce() {

        System.out.println(
            "I am a person"
        );

    }
}

class Student extends Person {

    void study() {

        System.out.println(
            "Student is studying"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

        student.introduce();

        student.study();

    }
}
`,

        output: `
I am a person
Student is studying
`
    },


    {
        id: 32,
        module: "inheritance",
        title: "Coding Problem: Method Overriding",
        concept: "Override a parent method to provide specialized child behavior.",
        difficulty: "Medium",

        theory: `
Problem:

Create an Animal class with:

sound()

Create:

Dog extends Animal

Override sound() so that Dog prints:

Dog barks
`,

        example: `
class Animal {

    void sound() {

        System.out.println(
            "Animal makes sound"
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


    {
        id: 33,
        module: "inheritance",
        title: "Coding Problem: Multilevel Inheritance",
        concept: "Create a three-level inheritance hierarchy and use methods from each level.",
        difficulty: "Medium",

        theory: `
Problem:

Create:

LivingThing
    ↓
Animal
    ↓
Dog

Add one method to each class.

Create a Dog object and call all methods.
`,

        example: `
class LivingThing {

    void breathe() {

        System.out.println(
            "Breathing"
        );

    }
}

class Animal extends LivingThing {

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

        Dog dog = new Dog();

        dog.breathe();
        dog.eat();
        dog.bark();

    }
}
`,

        output: `
Breathing
Eating
Barking
`
    },


    {
        id: 34,
        module: "inheritance",
        title: "Coding Problem: Constructor and super()",
        concept: "Initialize parent and child fields using constructor chaining through super().",
        difficulty: "Medium",

        theory: `
Problem:

Create:

Person

Field:

name

Create:

Employee extends Person

Field:

employeeId

Use:

super(name)

inside the Employee constructor.
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
            "Name: " + name
        );

        System.out.println(
            "Employee ID: "
            + employeeId
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
Name: Saurabh
Employee ID: 101
`
    },


    {
        id: 35,
        module: "inheritance",
        title: "Coding Problem: Hierarchical Inheritance",
        concept: "Create multiple child classes that inherit common behavior from one parent class.",
        difficulty: "Medium",

        theory: `
Problem:

Create:

Shape

Method:

draw()

Create:

Circle extends Shape

Rectangle extends Shape

Override draw() in both child classes.
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

        Shape circle =
            new Circle();

        Shape rectangle =
            new Rectangle();

        circle.draw();
        rectangle.draw();

    }
}
`,

        output: `
Drawing circle
Drawing rectangle
`
    }

];