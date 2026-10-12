export const encapsulationTopics = [

    // ============================================================
    // 1. DEFINITION
    // ============================================================

    {
        id: 1,
        module: "encapsulation",
        title: "Encapsulation in Java",
        concept: "Encapsulation means bundling data and methods together and controlling access to an object's internal state.",
        difficulty: "Easy",

        theory: `
Encapsulation is one of the four major principles of OOP.

It combines:

- Data
- Methods

inside a single class.

The internal data is commonly protected using private variables.

Access to that data is provided through controlled methods
such as getters and setters.
`,

        example: `
class Student {

    private String name;

    public void setName(
        String name
    ) {

        this.name = name;

    }

    public String getName() {

        return name;

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

        student.setName("Saurabh");

        System.out.println(
            student.getName()
        );

    }
}
`,

        output: `
Saurabh
`
    },


    // ============================================================
    // 2. WHY ENCAPSULATION
    // ============================================================

    {
        id: 2,
        module: "encapsulation",
        title: "Why Use Encapsulation?",
        concept: "Encapsulation protects object state and allows controlled interaction with data.",
        difficulty: "Easy",

        theory: `
Without encapsulation, external code may directly modify
an object's internal data.

Example:

student.age = -10;

This may create an invalid object state.

With encapsulation, the class can control how values are read
or modified.

Benefits include:

- Security
- Validation
- Maintainability
- Flexibility
- Controlled access
`
    },


    // ============================================================
    // 3. DATA HIDING
    // ============================================================

    {
        id: 3,
        module: "encapsulation",
        title: "Data Hiding",
        concept: "Data hiding means restricting direct access to internal object data.",
        difficulty: "Easy",

        theory: `
Data hiding is commonly achieved using the private access modifier.

Private variables cannot be accessed directly from outside
the class.

Instead, public methods can provide controlled access.

Example:

private double balance;

The balance cannot be directly changed from another class.
`,

        example: `
class BankAccount {

    private double balance;

    public void deposit(
        double amount
    ) {

        balance = balance + amount;

    }

    public double getBalance() {

        return balance;

    }
}

public class Main {

    public static void main(String[] args) {

        BankAccount account =
            new BankAccount();

        account.deposit(5000);

        System.out.println(
            account.getBalance()
        );

    }
}
`,

        output: `
5000.0
`
    },


    // ============================================================
    // 4. PRIVATE VARIABLES
    // ============================================================

    {
        id: 4,
        module: "encapsulation",
        title: "Private Variables",
        concept: "Private variables can only be accessed directly inside the class where they are declared.",
        difficulty: "Easy",

        theory: `
The private access modifier restricts direct access.

Example:

private String name;

External classes cannot do this:

student.name = "Saurabh";

Instead, controlled methods can be used.

Private fields are a common technique for protecting
an object's internal state.
`,

        example: `
class Employee {

    private String name;

    public void setName(
        String name
    ) {

        this.name = name;

    }

    public String getName() {

        return name;

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee();

        employee.setName("Saurabh");

        System.out.println(
            employee.getName()
        );

    }
}
`,

        output: `
Saurabh
`
    },


    // ============================================================
    // 5. PUBLIC METHODS
    // ============================================================

    {
        id: 5,
        module: "encapsulation",
        title: "Public Methods for Controlled Access",
        concept: "Public methods provide a controlled way to interact with private data.",
        difficulty: "Easy",

        theory: `
Encapsulation does not mean that data must always be inaccessible.

Instead, access can be controlled.

Public methods can:

- Read data
- Modify data
- Validate data
- Reject invalid operations

The class decides how its internal state should change.
`,

        example: `
class Counter {

    private int count;

    public void increment() {

        count++;

    }

    public int getCount() {

        return count;

    }
}

public class Main {

    public static void main(String[] args) {

        Counter counter =
            new Counter();

        counter.increment();

        counter.increment();

        System.out.println(
            counter.getCount()
        );

    }
}
`,

        output: `
2
`
    },


    // ============================================================
    // 6. GETTERS
    // ============================================================

    {
        id: 6,
        module: "encapsulation",
        title: "Getters",
        concept: "A getter is a method used to read the value of a private field.",
        difficulty: "Easy",

        theory: `
A getter usually returns the value of a private variable.

Naming convention:

getVariableName()

Example:

getName()

For boolean properties, Java commonly uses:

isActive()
`,

        example: `
class User {

    private String username;

    public User(
        String username
    ) {

        this.username = username;

    }

    public String getUsername() {

        return username;

    }
}

public class Main {

    public static void main(String[] args) {

        User user =
            new User("saurabh");

        System.out.println(
            user.getUsername()
        );

    }
}
`,

        output: `
saurabh
`
    },


    // ============================================================
    // 7. SETTERS
    // ============================================================

    {
        id: 7,
        module: "encapsulation",
        title: "Setters",
        concept: "A setter is a method used to update the value of a private field.",
        difficulty: "Easy",

        theory: `
A setter usually changes the value of a private variable.

Naming convention:

setVariableName(value)

Example:

setName("Saurabh")

A setter does not simply have to assign a value.

It can also:

- Validate input
- Transform input
- Reject invalid values
- Trigger other business logic
`,

        example: `
class Student {

    private String name;

    public void setName(
        String name
    ) {

        this.name = name;

    }

    public String getName() {

        return name;

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

        student.setName("Saurabh");

        System.out.println(
            student.getName()
        );

    }
}
`,

        output: `
Saurabh
`
    },


    // ============================================================
    // 8. VALIDATION USING SETTERS
    // ============================================================

    {
        id: 8,
        module: "encapsulation",
        title: "Validation Using Setters",
        concept: "A setter can validate input before changing the internal state of an object.",
        difficulty: "Medium",

        theory: `
Validation prevents invalid data from entering an object.

For example, age should not be negative.

The setter can check the value before assigning it.

This keeps the object in a valid state.
`,

        example: `
class Person {

    private int age;

    public void setAge(
        int age
    ) {

        if (age >= 0) {

            this.age = age;

        }

    }

    public int getAge() {

        return age;

    }
}

public class Main {

    public static void main(String[] args) {

        Person person =
            new Person();

        person.setAge(25);

        person.setAge(-10);

        System.out.println(
            person.getAge()
        );

    }
}
`,

        output: `
25
`
    },


    // ============================================================
    // 9. CONTROLLED ACCESS
    // ============================================================

    {
        id: 9,
        module: "encapsulation",
        title: "Controlled Access",
        concept: "Encapsulation allows a class to define exactly how external code can interact with its state.",
        difficulty: "Medium",

        theory: `
Instead of exposing a variable directly, a class can expose
specific operations.

For example, a bank account should not allow arbitrary changes
to its balance.

Better methods are:

deposit()

withdraw()

getBalance()

This gives the class complete control over valid operations.
`,

        example: `
class BankAccount {

    private double balance;

    public void deposit(
        double amount
    ) {

        if (amount > 0) {

            balance += amount;

        }

    }

    public void withdraw(
        double amount
    ) {

        if (
            amount > 0
            && amount <= balance
        ) {

            balance -= amount;

        }

    }

    public double getBalance() {

        return balance;

    }
}

public class Main {

    public static void main(String[] args) {

        BankAccount account =
            new BankAccount();

        account.deposit(5000);

        account.withdraw(1000);

        System.out.println(
            account.getBalance()
        );

    }
}
`,

        output: `
4000.0
`
    },


    // ============================================================
    // 10. READ-ONLY PROPERTIES
    // ============================================================

    {
        id: 10,
        module: "encapsulation",
        title: "Read-Only Properties",
        concept: "A read-only property exposes a getter but does not provide a public setter.",
        difficulty: "Easy",

        theory: `
A read-only property can be viewed from outside the class
but cannot be changed directly through a public setter.

Example:

private String id;

public String getId()

No public setId() method exists.

The value can be assigned through a constructor.
`,

        example: `
class User {

    private String id;

    public User(
        String id
    ) {

        this.id = id;

    }

    public String getId() {

        return id;

    }
}

public class Main {

    public static void main(String[] args) {

        User user =
            new User("USER101");

        System.out.println(
            user.getId()
        );

    }
}
`,

        output: `
USER101
`
    },


    // ============================================================
    // 11. WRITE-ONLY CONCEPT
    // ============================================================

    {
        id: 11,
        module: "encapsulation",
        title: "Write-Only Concept",
        concept: "A write-only property accepts a value through a method but does not expose the value through a public getter.",
        difficulty: "Medium",

        theory: `
A write-only concept means external code can provide
a value but cannot retrieve it directly.

Example use case:

Password

A class may provide:

setPassword()

But should not provide:

getPassword()

In real applications, passwords should be securely processed
and stored using appropriate hashing mechanisms rather than
stored as plain text.
`,

        example: `
class User {

    private String password;

    public void setPassword(
        String password
    ) {

        this.password = password;

    }
}

public class Main {

    public static void main(String[] args) {

        User user =
            new User();

        user.setPassword("secret123");

        System.out.println(
            "Password updated"
        );

    }
}
`,

        output: `
Password updated
`
    },


    // ============================================================
    // 12. IMMUTABLE OBJECTS
    // ============================================================

    {
        id: 12,
        module: "encapsulation",
        title: "Immutable Objects",
        concept: "An immutable object cannot change its state after it is created.",
        difficulty: "Medium",

        theory: `
An immutable object generally has:

- Private fields
- No setters
- Values initialized through the constructor
- Often final fields

Once the object is created, its state does not change.

Immutable objects are useful because they are easier to reason
about and can be safely shared when their internal state is
properly protected.
`,

        example: `
class User {

    private final String name;

    public User(
        String name
    ) {

        this.name = name;

    }

    public String getName() {

        return name;

    }
}

public class Main {

    public static void main(String[] args) {

        User user =
            new User("Saurabh");

        System.out.println(
            user.getName()
        );

    }
}
`,

        output: `
Saurabh
`
    },


    // ============================================================
    // 13. ENCAPSULATION VS DATA HIDING
    // ============================================================

    {
        id: 13,
        module: "encapsulation",
        title: "Encapsulation vs Data Hiding",
        concept: "Encapsulation organizes data and behavior together, while data hiding focuses on restricting direct access to implementation details.",
        difficulty: "Medium",

        theory: `
Encapsulation:

Combines data and methods inside a class and defines how
the object's state can be accessed or modified.

Data hiding:

Restricts direct access to internal implementation details.

Example:

private int age;

Data hiding protects age from direct external access.

Methods such as:

getAge()

setAge()

are part of an encapsulated interface for interacting
with that state.
`
    },


    // ============================================================
    // 14. ENCAPSULATION VS ABSTRACTION
    // ============================================================

    {
        id: 14,
        module: "encapsulation",
        title: "Encapsulation vs Abstraction",
        concept: "Encapsulation controls access to internal state, while abstraction focuses on exposing essential behavior and hiding unnecessary implementation details.",
        difficulty: "Medium",

        theory: `
Encapsulation answers:

How should object data be protected and accessed?

Example:

private balance

deposit()

withdraw()


Abstraction answers:

What operations are available without requiring users to know
the complete implementation?

Example:

interface Payment {

    void pay();

}

The caller knows that pay() is available but does not need
to know how each implementation processes the payment.
`
    },


    // ============================================================
    // 15. BENEFIT - SECURITY
    // ============================================================

    {
        id: 15,
        module: "encapsulation",
        title: "Benefit: Security",
        concept: "Encapsulation reduces unnecessary direct access to internal state.",
        difficulty: "Easy",

        theory: `
Private fields prevent arbitrary external code from directly
changing internal state.

Instead of:

account.balance = -1000;

the class can provide controlled operations.

This helps maintain valid object state and protects internal
implementation details.
`,

        example: `
class Account {

    private double balance;

    public double getBalance() {

        return balance;

    }

    public void deposit(
        double amount
    ) {

        if (amount > 0) {

            balance += amount;

        }

    }
}

public class Main {

    public static void main(String[] args) {

        Account account =
            new Account();

        account.deposit(1000);

        System.out.println(
            account.getBalance()
        );

    }
}
`,

        output: `
1000.0
`
    },


    // ============================================================
    // 16. BENEFIT - VALIDATION
    // ============================================================

    {
        id: 16,
        module: "encapsulation",
        title: "Benefit: Validation",
        concept: "Encapsulation provides a central place to validate data before changing object state.",
        difficulty: "Easy",

        theory: `
Validation can be placed inside methods such as setters
or domain-specific operations.

Example:

setAge()

The class can reject:

- Negative age
- Invalid values
- Values outside allowed ranges

This prevents invalid state from spreading through the application.
`,

        example: `
class Product {

    private double price;

    public void setPrice(
        double price
    ) {

        if (price >= 0) {

            this.price = price;

        }

    }

    public double getPrice() {

        return price;

    }
}

public class Main {

    public static void main(String[] args) {

        Product product =
            new Product();

        product.setPrice(999.99);

        System.out.println(
            product.getPrice()
        );

    }
}
`,

        output: `
999.99
`
    },


    // ============================================================
    // 17. BENEFIT - MAINTAINABILITY
    // ============================================================

    {
        id: 17,
        module: "encapsulation",
        title: "Benefit: Maintainability",
        concept: "Encapsulation allows internal implementation changes while keeping a stable public API.",
        difficulty: "Medium",

        theory: `
Suppose external code directly accesses:

public String name;

Changing the internal representation may require changes
throughout the application.

With encapsulation, external code uses methods such as:

getName()

setName()

The internal implementation can often change without requiring
all calling code to change.
`
    },


    // ============================================================
    // 18. BENEFIT - FLEXIBILITY
    // ============================================================

    {
        id: 18,
        module: "encapsulation",
        title: "Benefit: Flexibility",
        concept: "Encapsulation allows the implementation behind a public method to change without changing how clients call it.",
        difficulty: "Medium",

        theory: `
A setter may initially perform a simple assignment.

Later, validation or additional logic can be added.

External code can continue using:

setPrice(value)

The internal implementation remains flexible.
`,

        example: `
class Product {

    private double price;

    public void setPrice(
        double price
    ) {

        if (price >= 0) {

            this.price = price;

        }

    }

    public double getPrice() {

        return price;

    }
}

public class Main {

    public static void main(String[] args) {

        Product product =
            new Product();

        product.setPrice(500);

        System.out.println(
            product.getPrice()
        );

    }
}
`,

        output: `
500.0
`
    },


    // ============================================================
    // 19. REAL-WORLD EXAMPLE
    // ============================================================

    {
        id: 19,
        module: "encapsulation",
        title: "Real-World Example: Bank Account",
        concept: "A bank account exposes valid operations such as deposit and withdraw instead of allowing direct modification of the balance.",
        difficulty: "Medium",

        theory: `
A BankAccount should control its own state.

External code should not directly modify the balance.

Instead, the class provides:

deposit()

withdraw()

getBalance()

The class validates operations before updating the internal state.
`,

        example: `
class BankAccount {

    private double balance;

    public void deposit(
        double amount
    ) {

        if (amount > 0) {

            balance += amount;

        }

    }

    public void withdraw(
        double amount
    ) {

        if (
            amount > 0
            && amount <= balance
        ) {

            balance -= amount;

        }

    }

    public double getBalance() {

        return balance;

    }
}

public class Main {

    public static void main(String[] args) {

        BankAccount account =
            new BankAccount();

        account.deposit(10000);

        account.withdraw(2500);

        System.out.println(
            account.getBalance()
        );

    }
}
`,

        output: `
7500.0
`
    },


    // ============================================================
    // 20. REAL-WORLD EXAMPLE - EMPLOYEE
    // ============================================================

    {
        id: 20,
        module: "encapsulation",
        title: "Real-World Example: Employee Salary",
        concept: "Employee salary can be protected and modified only through validated operations.",
        difficulty: "Medium",

        theory: `
An employee's salary should not accept invalid values.

The salary field can be private.

A public method can validate salary updates.

This ensures the object remains in a valid state.
`,

        example: `
class Employee {

    private String name;

    private double salary;

    public Employee(
        String name
    ) {

        this.name = name;

    }

    public void setSalary(
        double salary
    ) {

        if (salary >= 0) {

            this.salary = salary;

        }

    }

    public String getName() {

        return name;

    }

    public double getSalary() {

        return salary;

    }
}

public class Main {

    public static void main(String[] args) {

        Employee employee =
            new Employee("Saurabh");

        employee.setSalary(50000);

        System.out.println(
            employee.getName()
        );

        System.out.println(
            employee.getSalary()
        );

    }
}
`,

        output: `
Saurabh
50000.0
`
    },


    // ============================================================
    // 21. COMMON MISTAKES
    // ============================================================

    {
        id: 21,
        module: "encapsulation",
        title: "Common Encapsulation Mistakes",
        concept: "Common mistakes include exposing fields unnecessarily, creating meaningless setters, and returning mutable internal objects directly.",
        difficulty: "Medium",

        theory: `
Common mistakes:

1. Making all fields public.

This allows uncontrolled modification.


2. Adding getters and setters automatically for every field.

Not every property should necessarily be writable.


3. Skipping validation.

A setter should enforce important invariants when required.


4. Exposing mutable internal objects directly.

For example, returning a mutable collection can allow callers
to modify internal state unexpectedly.


5. Thinking encapsulation only means getters and setters.

Encapsulation is about controlled access and maintaining
object invariants, not merely generating accessor methods.
`
    },


    // ============================================================
    // 22. INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 22,
        module: "encapsulation",
        title: "Encapsulation Interview Questions",
        concept: "Important interview questions cover private fields, controlled access, validation, immutability, and differences from abstraction.",
        difficulty: "Medium",

        theory: `
1. What is encapsulation?

Encapsulation bundles data and behavior together and controls
access to an object's internal state.


2. How is encapsulation implemented in Java?

Commonly using:

- Private fields
- Controlled public methods


3. What is data hiding?

Restricting direct access to internal implementation details.


4. What is a getter?

A method used to read a property.


5. What is a setter?

A method used to modify a property.


6. Why use validation inside setters?

To prevent invalid object state.


7. What is a read-only property?

A property exposed through a getter without a public setter.


8. What is a write-only concept?

A property that can be assigned through a method but is not
exposed through a public getter.


9. What is an immutable object?

An object whose state does not change after creation.


10. What is the difference between encapsulation and abstraction?

Encapsulation focuses on controlled access to state and behavior.

Abstraction focuses on exposing essential behavior while hiding
unnecessary implementation details.


11. Is encapsulation only about getters and setters?

No.

It is about defining a controlled public interface and protecting
object invariants.
`
    },


    // ============================================================
    // 23. CODING PROBLEM - STUDENT
    // ============================================================

    {
        id: 23,
        module: "encapsulation",
        title: "Coding Problem: Student Validation",
        concept: "Create an encapsulated Student class and validate the age before storing it.",
        difficulty: "Easy",

        theory: `
Problem:

Create a Student class.

Fields:

name
age

Requirements:

- Fields must be private.
- Create getters.
- Create setters.
- Do not allow negative age.
`,

        example: `
class Student {

    private String name;

    private int age;

    public void setName(
        String name
    ) {

        this.name = name;

    }

    public void setAge(
        int age
    ) {

        if (age >= 0) {

            this.age = age;

        }

    }

    public String getName() {

        return name;

    }

    public int getAge() {

        return age;

    }
}

public class Main {

    public static void main(String[] args) {

        Student student =
            new Student();

        student.setName("Saurabh");

        student.setAge(25);

        System.out.println(
            student.getName()
        );

        System.out.println(
            student.getAge()
        );

    }
}
`,

        output: `
Saurabh
25
`
    },


    // ============================================================
    // 24. CODING PROBLEM - BANK ACCOUNT
    // ============================================================

    {
        id: 24,
        module: "encapsulation",
        title: "Coding Problem: Bank Account",
        concept: "Protect the balance using a private field and expose only valid deposit and withdrawal operations.",
        difficulty: "Medium",

        theory: `
Problem:

Create a BankAccount class.

Requirements:

- balance must be private.
- Create deposit().
- Create withdraw().
- Do not allow negative amounts.
- Do not allow withdrawal greater than balance.
- Create getBalance().
`,

        example: `
class BankAccount {

    private double balance;

    public void deposit(
        double amount
    ) {

        if (amount > 0) {

            balance += amount;

        }

    }

    public void withdraw(
        double amount
    ) {

        if (
            amount > 0
            && amount <= balance
        ) {

            balance -= amount;

        }

    }

    public double getBalance() {

        return balance;

    }
}

public class Main {

    public static void main(String[] args) {

        BankAccount account =
            new BankAccount();

        account.deposit(5000);

        account.withdraw(1500);

        System.out.println(
            account.getBalance()
        );

    }
}
`,

        output: `
3500.0
`
    },


    // ============================================================
    // 25. CODING PROBLEM - READ ONLY
    // ============================================================

    {
        id: 25,
        module: "encapsulation",
        title: "Coding Problem: Read-Only Property",
        concept: "Create a class with a property that can be read but cannot be changed through a public setter.",
        difficulty: "Easy",

        theory: `
Problem:

Create a User class.

Requirements:

- id should be private.
- Initialize id through constructor.
- Provide getId().
- Do not create setId().
`,

        example: `
class User {

    private String id;

    public User(
        String id
    ) {

        this.id = id;

    }

    public String getId() {

        return id;

    }
}

public class Main {

    public static void main(String[] args) {

        User user =
            new User("USER101");

        System.out.println(
            user.getId()
        );

    }
}
`,

        output: `
USER101
`
    },


    // ============================================================
    // 26. CODING PROBLEM - IMMUTABLE OBJECT
    // ============================================================

    {
        id: 26,
        module: "encapsulation",
        title: "Coding Problem: Immutable User",
        concept: "Create an immutable User object whose state is initialized once and cannot be modified afterward.",
        difficulty: "Medium",

        theory: `
Problem:

Create an immutable User class.

Requirements:

- Class should not expose setters.
- Fields should be private.
- Initialize fields using constructor.
- Use final fields.
- Provide getters.
`,

        example: `
final class User {

    private final String name;

    private final int age;

    public User(
        String name,
        int age
    ) {

        this.name = name;

        this.age = age;

    }

    public String getName() {

        return name;

    }

    public int getAge() {

        return age;

    }
}

public class Main {

    public static void main(String[] args) {

        User user =
            new User(
                "Saurabh",
                25
            );

        System.out.println(
            user.getName()
        );

        System.out.println(
            user.getAge()
        );

    }
}
`,

        output: `
Saurabh
25
`
    }

];