export const associationTopics = [

    // ============================================================
    // 1. WHAT IS ASSOCIATION?
    // ============================================================

    {
        id: 1,
        module: "association",
        title: "What is Association?",
        concept: "Association represents a relationship between two independent objects or classes.",
        difficulty: "Easy",

        theory: `
Association is an object-oriented programming relationship
between two or more independent classes.

The objects can communicate or work together.

Example:

Student ---- Teacher

A Student can interact with a Teacher.

Both Student and Teacher can exist independently.

Association commonly represents a:

- HAS-A relationship
- USES-A relationship
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
    // 2. OBJECT RELATIONSHIP
    // ============================================================

    {
        id: 2,
        module: "association",
        title: "Object Relationship",
        concept: "An object relationship defines how one object connects, communicates, or collaborates with another object.",
        difficulty: "Easy",

        theory: `
In object-oriented programming, objects often need
to work together.

For example:

Customer
    |
    | uses
    v
Bank

Customer and Bank are separate objects.

The relationship between them is called an object relationship.

Association helps represent real-world relationships
inside software.
`,

        example: `
class Bank {

    void provideService() {

        System.out.println(
            "Bank service provided"
        );

    }
}

class Customer {

    String name;

    Customer(String name) {

        this.name = name;

    }

    void useBank(
        Bank bank
    ) {

        bank.provideService();

        System.out.println(
            name + " used the bank"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Bank bank =
            new Bank();

        Customer customer =
            new Customer("Saurabh");

        customer.useBank(bank);

    }
}
`,

        output: `
Bank service provided
Saurabh used the bank
`
    },


    // ============================================================
    // 3. HAS-A RELATIONSHIP
    // ============================================================

    {
        id: 3,
        module: "association",
        title: "HAS-A Relationship",
        concept: "A HAS-A relationship means one object contains, owns, references, or uses another object.",
        difficulty: "Easy",

        theory: `
Association is commonly represented as a HAS-A relationship.

Examples:

Employee HAS-A Department

Car HAS-A Engine

Student HAS-A Teacher

A class can maintain a reference to another object using:

- Instance variables
- Constructor parameters
- Method parameters
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

    Engine engine;

    Car(Engine engine) {

        this.engine = engine;

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

        Engine engine =
            new Engine();

        Car car =
            new Car(engine);

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
    // 4. TYPES OF ASSOCIATION
    // ============================================================

    {
        id: 4,
        module: "association",
        title: "Types of Association",
        concept: "Association can be one-to-one, one-to-many, or many-to-many.",
        difficulty: "Easy",

        theory: `
The main types of association are:

1. One-to-One

One object is associated with one other object.

Example:

Person ---- Passport


2. One-to-Many

One object is associated with multiple objects.

Example:

Department ---- Employees


3. Many-to-Many

Multiple objects are associated with multiple objects.

Example:

Students ---- Courses
`
    },


    // ============================================================
    // 5. ONE-TO-ONE
    // ============================================================

    {
        id: 5,
        module: "association",
        title: "One-to-One Association",
        concept: "One object is associated with exactly one other object.",
        difficulty: "Easy",

        theory: `
A one-to-one association connects one object
with one related object.

Example:

Person ---- Passport

One Person can have one Passport.

The two objects are represented by separate classes.
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
    // 6. ONE-TO-MANY
    // ============================================================

    {
        id: 6,
        module: "association",
        title: "One-to-Many Association",
        concept: "One object is associated with multiple objects.",
        difficulty: "Medium",

        theory: `
A one-to-many relationship means one object can be connected
to many objects.

Example:

Department
    |
    +---- Employee 1
    |
    +---- Employee 2
    |
    +---- Employee 3

One Department can contain many Employees.
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

    String name;

    List<Employee> employees =
        new ArrayList<>();

    Department(String name) {

        this.name = name;

    }

    void addEmployee(
        Employee employee
    ) {

        employees.add(employee);

    }

    void displayEmployees() {

        System.out.println(
            "Department: " + name
        );

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
            new Department("IT");

        department.addEmployee(
            new Employee("Saurabh")
        );

        department.addEmployee(
            new Employee("Rahul")
        );

        department.displayEmployees();

    }
}
`,

        output: `
Department: IT
Saurabh
Rahul
`
    },


    // ============================================================
    // 7. MANY-TO-MANY
    // ============================================================

    {
        id: 7,
        module: "association",
        title: "Many-to-Many Association",
        concept: "Multiple objects of one class are associated with multiple objects of another class.",
        difficulty: "Medium",

        theory: `
A many-to-many relationship means:

Students <----> Courses

One Student can enroll in multiple Courses.

One Course can contain multiple Students.

This type of relationship is common in:

- University systems
- User and role systems
- E-commerce systems
`
    },


    // ============================================================
    // 8. MANY-TO-MANY EXAMPLE
    // ============================================================

    {
        id: 8,
        module: "association",
        title: "Many-to-Many Example: Student and Course",
        concept: "Students can enroll in multiple courses and a course can be associated with multiple students.",
        difficulty: "Medium",

        theory: `
Many-to-many associations are usually represented using collections.

A Student may contain:

List<Course>

A Course may contain:

List<Student>

This allows navigation between multiple related objects.
`,

        example: `
import java.util.ArrayList;
import java.util.List;

class Course {

    String name;

    Course(String name) {

        this.name = name;

    }
}

class Student {

    String name;

    List<Course> courses =
        new ArrayList<>();

    Student(String name) {

        this.name = name;

    }

    void enroll(
        Course course
    ) {

        courses.add(course);

    }

    void displayCourses() {

        System.out.println(
            name + " enrolled in:"
        );

        for (
            Course course : courses
        ) {

            System.out.println(
                course.name
            );

        }

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student("Saurabh");

        student.enroll(
            new Course("Java")
        );

        student.enroll(
            new Course("Spring Boot")
        );

        student.displayCourses();

    }
}
`,

        output: `
Saurabh enrolled in:
Java
Spring Boot
`
    },


    // ============================================================
    // 9. UNIDIRECTIONAL ASSOCIATION
    // ============================================================

    {
        id: 9,
        module: "association",
        title: "Unidirectional Association",
        concept: "In a unidirectional association, one object knows about another object, but the reverse object does not maintain a reference back.",
        difficulty: "Medium",

        theory: `
A unidirectional association has only one navigation direction.

Example:

Employee
    |
    v
Department

The Employee knows its Department.

The Department does not necessarily know about the Employee.

This design is simpler when reverse navigation is not required.
`,

        example: `
class Department {

    String name;

    Department(String name) {

        this.name = name;

    }
}

class Employee {

    String name;

    Department department;

    Employee(
        String name,
        Department department
    ) {

        this.name = name;

        this.department = department;

    }

    void display() {

        System.out.println(
            name
            + " works in "
            + department.name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Department department =
            new Department("IT");

        Employee employee =
            new Employee(
                "Saurabh",
                department
            );

        employee.display();

    }
}
`,

        output: `
Saurabh works in IT
`
    },


    // ============================================================
    // 10. BIDIRECTIONAL ASSOCIATION
    // ============================================================

    {
        id: 10,
        module: "association",
        title: "Bidirectional Association",
        concept: "In a bidirectional association, both related objects maintain references to each other.",
        difficulty: "Medium",

        theory: `
A bidirectional association works in both directions.

Example:

Student <----> Teacher

The Student knows its Teacher.

The Teacher can maintain references to Students.

Bidirectional relationships are useful when both sides
need to navigate to each other.

Both sides should be kept consistent.
`
    },


    // ============================================================
    // 11. BIDIRECTIONAL EXAMPLE
    // ============================================================

    {
        id: 11,
        module: "association",
        title: "Bidirectional Association Example",
        concept: "Both objects maintain references that allow navigation in both directions.",
        difficulty: "Hard",

        theory: `
In this example:

Student knows Teacher.

Teacher maintains a list of Students.

When creating bidirectional associations, it is important
to update both sides of the relationship.
`,

        example: `
import java.util.ArrayList;
import java.util.List;

class Teacher {

    String name;

    List<Student> students =
        new ArrayList<>();

    Teacher(String name) {

        this.name = name;

    }

    void addStudent(
        Student student
    ) {

        students.add(student);

    }
}

class Student {

    String name;

    Teacher teacher;

    Student(String name) {

        this.name = name;

    }

    void setTeacher(
        Teacher teacher
    ) {

        this.teacher = teacher;

        teacher.addStudent(this);

    }
}

public class Main {

    public static void main(String[] args) {

        Teacher teacher =
            new Teacher("Rahul");

        Student student =
            new Student("Saurabh");

        student.setTeacher(teacher);

        System.out.println(
            student.name
            + " -> "
            + student.teacher.name
        );

        System.out.println(
            "Students: "
            + teacher.students.size()
        );

    }
}
`,

        output: `
Saurabh -> Rahul
Students: 1
`
    },


    // ============================================================
    // 12. ASSOCIATION VS INHERITANCE
    // ============================================================

    {
        id: 12,
        module: "association",
        title: "Association vs Inheritance",
        concept: "Association represents a HAS-A or USES-A relationship, while inheritance represents an IS-A relationship.",
        difficulty: "Medium",

        theory: `
Association represents:

HAS-A
USES-A

Example:

Employee HAS-A Department.


Inheritance represents:

IS-A

Example:

Dog IS-A Animal.

Use association when independent objects need to work together.

Use inheritance when one class is a specialized form
of another class.
`
    },


    // ============================================================
    // 13. LOOSE COUPLING
    // ============================================================

    {
        id: 13,
        module: "association",
        title: "Loose Coupling",
        concept: "Loose coupling means classes depend on each other as little as necessary, making the system easier to modify and maintain.",
        difficulty: "Hard",

        theory: `
Loose coupling means objects have minimal unnecessary dependencies.

A loosely coupled system is easier to:

- Modify
- Test
- Maintain
- Extend
- Replace implementations

Association can help create loose coupling.

For example:

OrderService
    |
    v
PaymentService

The OrderService collaborates with a PaymentService
instead of inheriting from it.
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

    PaymentService paymentService;

    OrderService(
        PaymentService paymentService
    ) {

        this.paymentService =
            paymentService;

    }

    void placeOrder() {

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
            new OrderService(
                paymentService
            );

        orderService.placeOrder();

    }
}
`,

        output: `
Payment processed
Order placed
`
    },


    // ============================================================
    // 14. REAL-WORLD EXAMPLE - STUDENT AND TEACHER
    // ============================================================

    {
        id: 14,
        module: "association",
        title: "Real-World Example: Student and Teacher",
        concept: "Student and Teacher are independent entities connected through an association.",
        difficulty: "Easy",

        theory: `
Student and Teacher are separate classes.

A Student can learn from a Teacher.

A Teacher can teach many Students.

This is an association because:

Student IS NOT A Teacher.

Teacher IS NOT A Student.
`,

        example: `
class Teacher {

    String name;

    Teacher(String name) {

        this.name = name;

    }

    void teach() {

        System.out.println(
            name + " is teaching"
        );

    }
}

class Student {

    String name;

    Student(String name) {

        this.name = name;

    }

    void attendClass(
        Teacher teacher
    ) {

        teacher.teach();

        System.out.println(
            name
            + " is learning"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Teacher teacher =
            new Teacher("Rahul");

        Student student =
            new Student("Saurabh");

        student.attendClass(teacher);

    }
}
`,

        output: `
Rahul is teaching
Saurabh is learning
`
    },


    // ============================================================
    // 15. REAL-WORLD EXAMPLE - EMPLOYEE AND DEPARTMENT
    // ============================================================

    {
        id: 15,
        module: "association",
        title: "Real-World Example: Employee and Department",
        concept: "An Employee can be associated with a Department without inheriting from it.",
        difficulty: "Easy",

        theory: `
Employee HAS-A Department.

Examples:

Employee -> IT

Employee -> HR

Employee -> Finance

Employee and Department have different responsibilities.

Therefore, association is appropriate.
`,

        example: `
class Department {

    String name;

    Department(String name) {

        this.name = name;

    }
}

class Employee {

    String name;

    Department department;

    Employee(
        String name,
        Department department
    ) {

        this.name = name;

        this.department = department;

    }

    void display() {

        System.out.println(
            "Employee: " + name
        );

        System.out.println(
            "Department: "
            + department.name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Department department =
            new Department("IT");

        Employee employee =
            new Employee(
                "Saurabh",
                department
            );

        employee.display();

    }
}
`,

        output: `
Employee: Saurabh
Department: IT
`
    },


    // ============================================================
    // 16. REAL-WORLD EXAMPLE - CUSTOMER AND BANK
    // ============================================================

    {
        id: 16,
        module: "association",
        title: "Real-World Example: Customer and Bank",
        concept: "A Customer can interact with a Bank while both remain independent objects.",
        difficulty: "Medium",

        theory: `
Customer and Bank demonstrate association.

A Customer can:

- Open an account
- Deposit money
- Withdraw money

A Bank provides banking services.

Customer IS NOT A Bank.

Therefore, inheritance is not appropriate.
`,

        example: `
class Bank {

    String name;

    Bank(String name) {

        this.name = name;

    }

    void provideService() {

        System.out.println(
            name
            + " provides banking service"
        );

    }
}

class Customer {

    String name;

    Customer(String name) {

        this.name = name;

    }

    void visitBank(
        Bank bank
    ) {

        bank.provideService();

        System.out.println(
            name
            + " uses the bank"
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Bank bank =
            new Bank("ABC Bank");

        Customer customer =
            new Customer("Saurabh");

        customer.visitBank(bank);

    }
}
`,

        output: `
ABC Bank provides banking service
Saurabh uses the bank
`
    },


    // ============================================================
    // 17. COMMON MISTAKES
    // ============================================================

    {
        id: 17,
        module: "association",
        title: "Common Association Mistakes",
        concept: "Common mistakes include confusing association with inheritance, creating unnecessary bidirectional relationships, and tightly coupling objects.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Using inheritance instead of association.

Incorrect:

Employee extends Department

Employee IS NOT A Department.


2. Creating unnecessary bidirectional associations.

Only use bidirectional navigation when needed.


3. Forgetting to update both sides.

This can create inconsistent relationships.


4. Creating tight coupling.

Classes should depend only on what they need.


5. Exposing internal objects unnecessarily.

This can break encapsulation.


6. Using association where inheritance is required.

Dog IS-A Animal.

This should use inheritance.
`
    },


    // ============================================================
    // 18. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 18,
        module: "association",
        title: "Association Interview Questions",
        concept: "Association interview questions test HAS-A relationships, object relationships, cardinality, coupling, and association versus inheritance.",
        difficulty: "Medium",

        theory: `
1. What is association in Java?

Association represents a relationship between independent objects.


2. What is a HAS-A relationship?

One object contains, owns, references, or uses another object.


3. What is one-to-one association?

One object is associated with one other object.


4. What is one-to-many association?

One object is associated with multiple objects.


5. What is many-to-many association?

Multiple objects are associated with multiple objects.


6. What is unidirectional association?

Only one object maintains a reference to another.


7. What is bidirectional association?

Both objects maintain references to each other.


8. What is the difference between association and inheritance?

Association represents HAS-A or USES-A.

Inheritance represents IS-A.


9. How does association support loose coupling?

Independent classes can collaborate without becoming subclasses
of each other.


10. Give an example of association.

Employee HAS-A Department.
Student learns from Teacher.
Customer uses Bank services.
`
    },


    // ============================================================
    // 19. CODING PROBLEM - PERSON AND PASSPORT
    // ============================================================

    {
        id: 19,
        module: "association",
        title: "Coding Problem: Person and Passport",
        concept: "Create a one-to-one association between Person and Passport.",
        difficulty: "Easy",

        theory: `
Problem:

Create:

Person

Passport

Each Person should have one Passport.

Display:

- Person name
- Passport number
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
    // 20. CODING PROBLEM - DEPARTMENT AND EMPLOYEES
    // ============================================================

    {
        id: 20,
        module: "association",
        title: "Coding Problem: Department and Employees",
        concept: "Create a one-to-many association where one Department contains multiple Employees.",
        difficulty: "Medium",

        theory: `
Problem:

Create:

Department

Employee

One Department should contain multiple Employees.

Use:

ArrayList<Employee>

Add employees and display them.
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

        department.addEmployee(
            new Employee("Amit")
        );

        department.display();

    }
}
`,

        output: `
Saurabh
Rahul
Amit
`
    },


    // ============================================================
    // 21. CODING PROBLEM - STUDENT AND COURSES
    // ============================================================

    {
        id: 21,
        module: "association",
        title: "Coding Problem: Student and Courses",
        concept: "Create a Student associated with multiple Course objects.",
        difficulty: "Medium",

        theory: `
Problem:

Create:

Student

Course

A Student should enroll in multiple Courses.

Use:

List<Course>

Display all enrolled courses.
`,

        example: `
import java.util.ArrayList;
import java.util.List;

class Course {

    String name;

    Course(String name) {

        this.name = name;

    }
}

class Student {

    String name;

    List<Course> courses =
        new ArrayList<>();

    Student(String name) {

        this.name = name;

    }

    void enroll(
        Course course
    ) {

        courses.add(course);

    }

    void displayCourses() {

        System.out.println(
            "Student: " + name
        );

        for (
            Course course : courses
        ) {

            System.out.println(
                course.name
            );

        }

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student("Saurabh");

        student.enroll(
            new Course("Core Java")
        );

        student.enroll(
            new Course("Spring Boot")
        );

        student.enroll(
            new Course("React")
        );

        student.displayCourses();

    }
}
`,

        output: `
Student: Saurabh
Core Java
Spring Boot
React
`
    },


    // ============================================================
    // 22. CODING PROBLEM - CUSTOMER AND BANK
    // ============================================================

    {
        id: 22,
        module: "association",
        title: "Coding Problem: Customer and Bank",
        concept: "Use association to allow a Customer object to interact with a Bank object.",
        difficulty: "Easy",

        theory: `
Problem:

Create:

Customer

Bank

The Customer should call a Bank method.

Demonstrate object interaction through association.
`,

        example: `
class Bank {

    void deposit(
        String customerName,
        double amount
    ) {

        System.out.println(
            customerName
            + " deposited "
            + amount
        );

    }
}

class Customer {

    String name;

    Customer(String name) {

        this.name = name;

    }

    void makeDeposit(
        Bank bank,
        double amount
    ) {

        bank.deposit(
            name,
            amount
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Bank bank =
            new Bank();

        Customer customer =
            new Customer("Saurabh");

        customer.makeDeposit(
            bank,
            5000
        );

    }
}
`,

        output: `
Saurabh deposited 5000.0
`
    },


    // ============================================================
    // 23. CODING PROBLEM - BIDIRECTIONAL ASSOCIATION
    // ============================================================

    {
        id: 23,
        module: "association",
        title: "Coding Problem: Bidirectional Association",
        concept: "Create Student and Teacher classes that maintain references to each other.",
        difficulty: "Hard",

        theory: `
Problem:

Create:

Teacher

Student

The Student should know its Teacher.

The Teacher should maintain a list of Students.

Create a method that updates both sides of the relationship.
`,

        example: `
import java.util.ArrayList;
import java.util.List;

class Teacher {

    String name;

    List<Student> students =
        new ArrayList<>();

    Teacher(String name) {

        this.name = name;

    }

    void addStudent(
        Student student
    ) {

        students.add(student);

    }
}

class Student {

    String name;

    Teacher teacher;

    Student(String name) {

        this.name = name;

    }

    void setTeacher(
        Teacher teacher
    ) {

        this.teacher = teacher;

        teacher.addStudent(this);

    }
}

public class Main {

    public static void main(String[] args) {

        Teacher teacher =
            new Teacher("Rahul");

        Student student =
            new Student("Saurabh");

        student.setTeacher(teacher);

        System.out.println(
            student.name
            + " -> "
            + student.teacher.name
        );

        System.out.println(
            teacher.students.size()
        );

    }
}
`,

        output: `
Saurabh -> Rahul
1
`
    }

];