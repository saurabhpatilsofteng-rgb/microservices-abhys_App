export const aggregationTopics = [

    // ============================================================
    // 1. WHAT IS AGGREGATION?
    // ============================================================

    {
        id: 1,
        module: "aggregation",
        title: "What is Aggregation?",
        concept: "Aggregation is a special type of association where one object has a relationship with another object, but both objects can exist independently.",
        difficulty: "Easy",

        theory: `
Aggregation represents a HAS-A relationship.

It is considered a weak relationship between objects.

For example:

Department HAS Employees

A Department contains Employees.

However, if the Department is removed, the Employee
can still exist independently.

Aggregation represents an independent object lifecycle.
`,

        example: `
class Employee {

    String name;

    Employee(String name) {

        this.name = name;

    }
}

class Department {

    String name;

    Employee employee;

    Department(
        String name,
        Employee employee
    ) {

        this.name = name;

        this.employee = employee;

    }

    void display() {

        System.out.println(
            name
            + " department has "
            + employee.name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee("Saurabh");

        Department department =
            new Department(
                "IT",
                employee
            );

        department.display();

    }
}
`,

        output: `
IT department has Saurabh
`
    },


    // ============================================================
    // 2. HAS-A RELATIONSHIP
    // ============================================================

    {
        id: 2,
        module: "aggregation",
        title: "Aggregation as a HAS-A Relationship",
        concept: "Aggregation represents a HAS-A relationship where the contained object can exist independently.",
        difficulty: "Easy",

        theory: `
Aggregation is a HAS-A relationship.

Examples:

Department HAS-A Employee

Library HAS-A Book

Team HAS-A Player

The important feature is that the related object
can exist without the container object.

For example:

Employee exists
        |
        v
Department uses Employee

The Employee is not completely dependent on
the Department.
`,

        example: `
class Address {

    String city;

    Address(String city) {

        this.city = city;

    }
}

class Person {

    String name;

    Address address;

    Person(
        String name,
        Address address
    ) {

        this.name = name;

        this.address = address;

    }

    void display() {

        System.out.println(
            name
            + " lives in "
            + address.city
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Address address =
            new Address("Mumbai");

        Person person =
            new Person(
                "Saurabh",
                address
            );

        person.display();

    }
}
`,

        output: `
Saurabh lives in Mumbai
`
    },


    // ============================================================
    // 3. WEAK RELATIONSHIP
    // ============================================================

    {
        id: 3,
        module: "aggregation",
        title: "Weak Relationship",
        concept: "Aggregation is called a weak relationship because the contained object does not depend completely on the lifecycle of the container object.",
        difficulty: "Medium",

        theory: `
Aggregation is weaker than composition.

Example:

Department ---- Employee

If the Department object is removed,
the Employee object can still exist.

Therefore:

Department lifecycle != Employee lifecycle

The objects have independent lifecycles.
`
    },


    // ============================================================
    // 4. INDEPENDENT OBJECT LIFECYCLE
    // ============================================================

    {
        id: 4,
        module: "aggregation",
        title: "Independent Object Lifecycle",
        concept: "In aggregation, the related objects can be created and destroyed independently.",
        difficulty: "Medium",

        theory: `
The main characteristic of aggregation is
independent object lifecycle.

Example:

Employee employee =
    new Employee("Saurabh");

Department department =
    new Department("IT", employee);

The Employee object is created independently.

The Department only receives a reference
to that Employee.

The Employee may later be used by another object.
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
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee("Saurabh");

        Department department1 =
            new Department(employee);

        Department department2 =
            new Department(employee);

        System.out.println(
            department1.employee.name
        );

        System.out.println(
            department2.employee.name
        );

    }
}
`,

        output: `
Saurabh
Saurabh
`
    },


    // ============================================================
    // 5. DEPARTMENT AND EMPLOYEE
    // ============================================================

    {
        id: 5,
        module: "aggregation",
        title: "Aggregation Example: Department and Employee",
        concept: "A Department can have Employees, but Employees can exist independently of the Department.",
        difficulty: "Easy",

        theory: `
Department and Employee are a common example
of aggregation.

Relationship:

Department HAS-A Employee

The Employee is created separately and passed
to the Department.

The Department uses the Employee reference.
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

        Employee employee1 =
            new Employee("Saurabh");

        Employee employee2 =
            new Employee("Rahul");

        Department department =
            new Department("IT");

        department.addEmployee(employee1);

        department.addEmployee(employee2);

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
    // 6. LIBRARY AND BOOK
    // ============================================================

    {
        id: 6,
        module: "aggregation",
        title: "Aggregation Example: Library and Book",
        concept: "A Library can contain Books, but a Book can exist independently of a particular Library.",
        difficulty: "Easy",

        theory: `
Library HAS-A Books.

A Book may:

- Exist before being added to a Library
- Be removed from a Library
- Be moved to another Library

Therefore, Library and Book can demonstrate aggregation.
`,

        example: `
import java.util.ArrayList;
import java.util.List;

class Book {

    String title;

    Book(String title) {

        this.title = title;

    }
}

class Library {

    List<Book> books =
        new ArrayList<>();

    void addBook(
        Book book
    ) {

        books.add(book);

    }

    void displayBooks() {

        for (
            Book book : books
        ) {

            System.out.println(
                book.title
            );

        }

    }
}

public class Main {

    public static void main(String[] args) {

        Book book1 =
            new Book("Java");

        Book book2 =
            new Book("Spring Boot");

        Library library =
            new Library();

        library.addBook(book1);

        library.addBook(book2);

        library.displayBooks();

    }
}
`,

        output: `
Java
Spring Boot
`
    },


    // ============================================================
    // 7. TEAM AND PLAYER
    // ============================================================

    {
        id: 7,
        module: "aggregation",
        title: "Aggregation Example: Team and Player",
        concept: "A Team can have Players, but a Player can exist independently and potentially move to another Team.",
        difficulty: "Easy",

        theory: `
Team HAS-A Players.

A Player can exist independently from a Team.

For example:

Player -> Team A

Later:

Player -> Team B

The Player object does not depend on one Team
for its existence.
`,

        example: `
import java.util.ArrayList;
import java.util.List;

class Player {

    String name;

    Player(String name) {

        this.name = name;

    }
}

class Team {

    String name;

    List<Player> players =
        new ArrayList<>();

    Team(String name) {

        this.name = name;

    }

    void addPlayer(
        Player player
    ) {

        players.add(player);

    }

    void displayPlayers() {

        System.out.println(
            "Team: " + name
        );

        for (
            Player player : players
        ) {

            System.out.println(
                player.name
            );

        }

    }
}

public class Main {

    public static void main(String[] args) {

        Player player1 =
            new Player("Saurabh");

        Player player2 =
            new Player("Rahul");

        Team team =
            new Team("India");

        team.addPlayer(player1);

        team.addPlayer(player2);

        team.displayPlayers();

    }
}
`,

        output: `
Team: India
Saurabh
Rahul
`
    },


    // ============================================================
    // 8. AGGREGATION VS ASSOCIATION
    // ============================================================

    {
        id: 8,
        module: "aggregation",
        title: "Aggregation vs Association",
        concept: "Aggregation is a specialized form of association that represents a whole-part HAS-A relationship with independent lifecycles.",
        difficulty: "Medium",

        theory: `
Association:

Represents a general relationship between objects.

Example:

Student uses Teacher.


Aggregation:

Represents a whole-part relationship.

Example:

Department HAS Employees.

The contained object can exist independently.

In simple terms:

Association
    |
    └── Aggregation

Aggregation is a more specific type of association.
`
    },


    // ============================================================
    // 9. AGGREGATION VS COMPOSITION
    // ============================================================

    {
        id: 9,
        module: "aggregation",
        title: "Aggregation vs Composition",
        concept: "Aggregation allows independent object lifecycles, while composition represents a stronger ownership relationship where the part is typically lifecycle-dependent on the whole.",
        difficulty: "Medium",

        theory: `
Aggregation:

Weak HAS-A relationship.

Example:

Department HAS Employees.

Employees can exist without the Department.


Composition:

Strong HAS-A relationship.

Example:

House HAS Rooms.

Rooms are strongly associated with a specific House
in the composition model.


Aggregation:

Whole removed
        |
        v
Part may still exist


Composition:

Whole removed
        |
        v
Part lifecycle is strongly tied to the whole
`
    },


    // ============================================================
    // 10. UML AGGREGATION CONCEPT
    // ============================================================

    {
        id: 10,
        module: "aggregation",
        title: "UML Aggregation Concept",
        concept: "In UML, aggregation is represented using a hollow diamond at the whole or container side of the relationship.",
        difficulty: "Medium",

        theory: `
In UML diagrams, aggregation is represented using
an empty or hollow diamond.

Example:

Department ◇──── Employee

The diamond is placed near the whole object.

Department = Whole

Employee = Part

The hollow diamond indicates aggregation.

It shows that the part can exist independently
of the whole.
`
    },


    // ============================================================
    // 11. ADVANTAGES
    // ============================================================

    {
        id: 11,
        module: "aggregation",
        title: "Advantages of Aggregation",
        concept: "Aggregation improves object modeling by allowing reusable and independently managed objects to collaborate.",
        difficulty: "Easy",

        theory: `
Advantages of aggregation:

1. Reusability

The same object can potentially be used by
different objects.


2. Loose coupling

Objects are less dependent on each other's lifecycle.


3. Better real-world modeling

It represents whole-part relationships naturally.


4. Maintainability

Independent classes are easier to modify.


5. Flexibility

Objects can be created separately and passed
where required.
`
    },


    // ============================================================
    // 12. REAL-WORLD EXAMPLES
    // ============================================================

    {
        id: 12,
        module: "aggregation",
        title: "Real-World Aggregation Examples",
        concept: "Aggregation can model independent whole-part relationships such as Department and Employee, Library and Book, and Team and Player.",
        difficulty: "Easy",

        theory: `
Common aggregation examples:

Department HAS Employees

Library HAS Books

Team HAS Players

University HAS Students

Company HAS Employees

Playlist HAS Songs

The important point is that the contained object
can exist independently from the container.
`
    },


    // ============================================================
    // 13. REAL-WORLD EXAMPLE - COMPANY AND EMPLOYEE
    // ============================================================

    {
        id: 13,
        module: "aggregation",
        title: "Real-World Example: Company and Employee",
        concept: "A Company can have Employees, but an Employee can exist independently and change companies.",
        difficulty: "Easy",

        theory: `
Company HAS Employees.

An Employee can:

- Join a company
- Leave a company
- Join another company

The Employee does not disappear when the Company
object is no longer used.

Therefore, this can be modeled using aggregation.
`,

        example: `
class Employee {

    String name;

    Employee(String name) {

        this.name = name;

    }
}

class Company {

    String name;

    Employee employee;

    Company(
        String name,
        Employee employee
    ) {

        this.name = name;

        this.employee = employee;

    }

    void display() {

        System.out.println(
            employee.name
            + " works at "
            + name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee("Saurabh");

        Company company =
            new Company(
                "Tech Company",
                employee
            );

        company.display();

    }
}
`,

        output: `
Saurabh works at Tech Company
`
    },


    // ============================================================
    // 14. COMMON MISTAKES
    // ============================================================

    {
        id: 14,
        module: "aggregation",
        title: "Common Aggregation Mistakes",
        concept: "Common mistakes include confusing aggregation with composition, assuming every HAS-A relationship is aggregation, and creating dependent objects inside the container when independent lifecycle is intended.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Confusing aggregation with composition.

Aggregation = weak relationship.

Composition = strong ownership relationship.


2. Assuming every HAS-A relationship is aggregation.

HAS-A is a broad concept.

The lifecycle relationship determines whether
aggregation or composition is appropriate.


3. Creating the part object only inside the container
when independent lifecycle is required.

Aggregation usually works well when objects can
be created separately.


4. Using inheritance instead of aggregation.

Employee IS NOT A Department.

Employee has a relationship with Department.


5. Ignoring object lifecycle.

Always ask:

Can the part object exist without the whole?

If yes, aggregation may be appropriate.
`
    },


    // ============================================================
    // 15. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 15,
        module: "aggregation",
        title: "Aggregation Interview Questions",
        concept: "Aggregation interview questions focus on weak HAS-A relationships, independent lifecycles, UML notation, and the difference between association and composition.",
        difficulty: "Medium",

        theory: `
1. What is aggregation in Java?

Aggregation is a specialized form of association
representing a HAS-A relationship with independent
object lifecycles.


2. Is aggregation a type of association?

Yes.

Aggregation is a specialized form of association.


3. What is the main difference between aggregation
and composition?

Aggregation has a weaker lifecycle relationship.

Composition has stronger ownership and lifecycle dependency.


4. Give an aggregation example.

Department and Employee.

Library and Book.

Team and Player.


5. Can the child object exist without the parent object?

In aggregation, yes.


6. How is aggregation represented in UML?

Using a hollow diamond.


7. What relationship does aggregation represent?

A HAS-A or whole-part relationship.


8. Is every HAS-A relationship aggregation?

No.

The object lifecycle and ownership determine
whether aggregation or composition is appropriate.
`
    },


    // ============================================================
    // 16. CODING PROBLEM - LIBRARY AND BOOK
    // ============================================================

    {
        id: 16,
        module: "aggregation",
        title: "Coding Problem: Library and Book",
        concept: "Create a Library that aggregates independently created Book objects.",
        difficulty: "Easy",

        theory: `
Problem:

Create:

Book

Library

Create Book objects independently.

Pass them to the Library.

Display all books.
`,

        example: `
import java.util.ArrayList;
import java.util.List;

class Book {

    String title;

    Book(String title) {

        this.title = title;

    }
}

class Library {

    List<Book> books =
        new ArrayList<>();

    void addBook(
        Book book
    ) {

        books.add(book);

    }

    void displayBooks() {

        for (
            Book book : books
        ) {

            System.out.println(
                book.title
            );

        }

    }
}

public class Main {

    public static void main(String[] args) {

        Book book1 =
            new Book("Java");

        Book book2 =
            new Book("Spring Boot");

        Library library =
            new Library();

        library.addBook(book1);

        library.addBook(book2);

        library.displayBooks();

    }
}
`,

        output: `
Java
Spring Boot
`
    },


    // ============================================================
    // 17. CODING PROBLEM - TEAM AND PLAYER
    // ============================================================

    {
        id: 17,
        module: "aggregation",
        title: "Coding Problem: Team and Player",
        concept: "Create independently existing Player objects and add them to a Team.",
        difficulty: "Easy",

        theory: `
Problem:

Create:

Player

Team

Create Player objects separately.

Add Players to the Team.

Display the Team members.
`,

        example: `
import java.util.ArrayList;
import java.util.List;

class Player {

    String name;

    Player(String name) {

        this.name = name;

    }
}

class Team {

    List<Player> players =
        new ArrayList<>();

    void addPlayer(
        Player player
    ) {

        players.add(player);

    }

    void displayPlayers() {

        for (
            Player player : players
        ) {

            System.out.println(
                player.name
            );

        }

    }
}

public class Main {

    public static void main(String[] args) {

        Player player1 =
            new Player("Saurabh");

        Player player2 =
            new Player("Rahul");

        Team team =
            new Team();

        team.addPlayer(player1);

        team.addPlayer(player2);

        team.displayPlayers();

    }
}
`,

        output: `
Saurabh
Rahul
`
    },


    // ============================================================
    // 18. CODING PROBLEM - DEPARTMENT AND EMPLOYEE
    // ============================================================

    {
        id: 18,
        module: "aggregation",
        title: "Coding Problem: Department and Employee",
        concept: "Create Employee objects independently and associate them with a Department.",
        difficulty: "Medium",

        theory: `
Problem:

Create:

Employee

Department

A Department should maintain a list of Employees.

Employees must be created independently.

Display all employees in the department.
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

    void display() {

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

        Employee employee1 =
            new Employee("Saurabh");

        Employee employee2 =
            new Employee("Rahul");

        Department department =
            new Department("IT");

        department.addEmployee(employee1);

        department.addEmployee(employee2);

        department.display();

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
    // 19. CODING PROBLEM - REUSE SAME OBJECT
    // ============================================================

    {
        id: 19,
        module: "aggregation",
        title: "Coding Problem: Reusing an Aggregated Object",
        concept: "Demonstrate aggregation by using the same independently created object in more than one container object.",
        difficulty: "Hard",

        theory: `
Problem:

Create:

Employee

Department

Create one Employee.

Associate the same Employee with two Department objects.

This demonstrates that the Employee object exists
independently from the Department objects.
`,

        example: `
class Employee {

    String name;

    Employee(String name) {

        this.name = name;

    }
}

class Department {

    String name;

    Employee employee;

    Department(
        String name,
        Employee employee
    ) {

        this.name = name;

        this.employee = employee;

    }

    void display() {

        System.out.println(
            name
            + " -> "
            + employee.name
        );

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee("Saurabh");

        Department department1 =
            new Department(
                "IT",
                employee
            );

        Department department2 =
            new Department(
                "Training",
                employee
            );

        department1.display();

        department2.display();

    }
}
`,

        output: `
IT -> Saurabh
Training -> Saurabh
`
    }

];