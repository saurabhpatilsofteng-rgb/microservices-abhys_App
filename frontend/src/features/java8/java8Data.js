export const java8Modules = [

    {
        id: 1,

        slug: "lambda-expressions",

        title: "Lambda Expressions",

        description:
            "Learn how Java 8 introduced functional programming using lambda expressions.",

        topics: [

            {
                id: 1,

                title: "What is Lambda Expression?",

                explanation:
                    "A lambda expression is a short way to implement a functional interface using an anonymous function.",

                importance:
                    "Lambda expressions reduce boilerplate code and are heavily used with Stream API, Collections and functional interfaces.",

                code: `public class Main {

    public static void main(String[] args) {

        Runnable task = () -> {

            System.out.println(
                "Hello from Lambda"
            );

        };

        task.run();

    }

}`
            },

            {
                id: 2,

                title: "Lambda Syntax",

                explanation:
                    "A lambda expression generally contains parameters, an arrow operator and a body.",

                importance:
                    "Understanding lambda syntax is required before learning Stream API.",

                code: `// Syntax

(parameters) -> expression


// Example

(a, b) -> a + b`
            },

            {
                id: 3,

                title: "Lambda with Parameters",

                explanation:
                    "Lambda expressions can accept one or multiple parameters.",

                importance:
                    "This makes functional programming concise and reusable.",

                code: `interface Calculator {

    int add(int a, int b);

}


public class Main {

    public static void main(String[] args) {

        Calculator calculator =
            (a, b) -> a + b;

        System.out.println(
            calculator.add(10, 20)
        );

    }

}`
            }

        ]

    },


    {
        id: 2,

        slug: "functional-interfaces",

        title: "Functional Interfaces",

        description:
            "Understand interfaces that contain exactly one abstract method.",

        topics: [

            {
                id: 1,

                title: "What is Functional Interface?",

                explanation:
                    "A functional interface contains exactly one abstract method and can be implemented using a lambda expression.",

                importance:
                    "Functional interfaces are the foundation of Java 8 functional programming.",

                code: `@FunctionalInterface
interface Greeting {

    void sayHello();

}


public class Main {

    public static void main(String[] args) {

        Greeting greeting =
            () -> System.out.println(
                "Hello Java"
            );

        greeting.sayHello();

    }

}`
            },

            {
                id: 2,

                title: "Predicate",

                explanation:
                    "Predicate is a functional interface that accepts one argument and returns a boolean value.",

                importance:
                    "It is commonly used for filtering data.",

                code: `import java.util.function.Predicate;

public class Main {

    public static void main(String[] args) {

        Predicate<Integer> isEven =
            number -> number % 2 == 0;

        System.out.println(
            isEven.test(10)
        );

    }

}`
            },

            {
                id: 3,

                title: "Function",

                explanation:
                    "Function accepts one input and produces one output.",

                importance:
                    "It is useful for transforming data.",

                code: `import java.util.function.Function;

public class Main {

    public static void main(String[] args) {

        Function<Integer, Integer> square =
            number -> number * number;

        System.out.println(
            square.apply(5)
        );

    }

}`
            },

            {
                id: 4,

                title: "Consumer",

                explanation:
                    "Consumer accepts an input but does not return a value.",

                importance:
                    "It is commonly used for printing, logging and processing elements.",

                code: `import java.util.function.Consumer;

public class Main {

    public static void main(String[] args) {

        Consumer<String> print =
            name -> System.out.println(name);

        print.accept("Saurabh");

    }

}`
            },

            {
                id: 5,

                title: "Supplier",

                explanation:
                    "Supplier does not accept input but returns a value.",

                importance:
                    "It is useful for lazy data generation and object creation.",

                code: `import java.util.function.Supplier;

public class Main {

    public static void main(String[] args) {

        Supplier<String> message =
            () -> "Hello Java";

        System.out.println(
            message.get()
        );

    }

}`
            }

        ]

    },


    {
        id: 3,

        slug: "method-references",

        title: "Method References",

        description:
            "Learn how existing methods can be referenced using the double colon operator.",

        topics: [

            {
                id: 1,

                title: "What is Method Reference?",

                explanation:
                    "Method references provide a shorter syntax for calling an existing method using the double colon operator.",

                importance:
                    "They improve readability when a lambda expression only calls an existing method.",

                code: `import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<String> names =
            Arrays.asList(
                "Java",
                "Spring",
                "React"
            );

        names.forEach(
            System.out::println
        );

    }

}`
            },

            {
                id: 2,

                title: "Static Method Reference",

                explanation:
                    "A static method can be referenced using ClassName::methodName.",

                importance:
                    "It provides cleaner functional code.",

                code: `class Calculator {

    public static int square(int number) {

        return number * number;

    }

}


Function<Integer, Integer> function =
    Calculator::square;`
            },

            {
                id: 3,

                title: "Constructor Reference",

                explanation:
                    "Constructor references allow constructors to be used as functional expressions.",

                importance:
                    "Useful when creating objects using Supplier or Function.",

                code: `import java.util.function.Supplier;

class User {

    User() {

        System.out.println(
            "User created"
        );

    }

}


Supplier<User> supplier =
    User::new;`
            }

        ]

    },


    {
        id: 4,

        slug: "stream-api",

        title: "Stream API",

        description:
            "Learn how to process collections using functional operations such as filter, map and collect.",

        topics: [

            {
                id: 1,

                title: "What is Stream API?",

                explanation:
                    "Stream API provides a functional approach for processing collections of data.",

                importance:
                    "Streams are widely used in modern Java and Spring Boot applications.",

                code: `import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Integer> numbers =
            List.of(1, 2, 3, 4, 5);

        numbers.stream()
            .forEach(
                System.out::println
            );

    }

}`
            },

            {
                id: 2,

                title: "filter()",

                explanation:
                    "filter selects elements that match a specified condition.",

                importance:
                    "It is commonly used for searching and filtering collections.",

                code: `List<Integer> numbers =
    List.of(1, 2, 3, 4, 5, 6);


numbers.stream()

    .filter(
        number -> number % 2 == 0
    )

    .forEach(
        System.out::println
    );`
            },

            {
                id: 3,

                title: "map()",

                explanation:
                    "map transforms each element into another value.",

                importance:
                    "It is used when converting or transforming data.",

                code: `List<Integer> numbers =
    List.of(1, 2, 3, 4);


numbers.stream()

    .map(
        number -> number * number
    )

    .forEach(
        System.out::println
    );`
            },

            {
                id: 4,

                title: "sorted()",

                explanation:
                    "sorted sorts stream elements.",

                importance:
                    "It provides a simple way to sort data without modifying the original collection.",

                code: `List<Integer> numbers =
    List.of(5, 2, 8, 1);


numbers.stream()

    .sorted()

    .forEach(
        System.out::println
    );`
            },

            {
                id: 5,

                title: "collect()",

                explanation:
                    "collect converts stream results into a collection or another result type.",

                importance:
                    "It is commonly used after filter and map operations.",

                code: `import java.util.List;
import java.util.stream.Collectors;

List<Integer> numbers =
    List.of(1, 2, 3, 4, 5);


List<Integer> evenNumbers =

    numbers.stream()

        .filter(
            number -> number % 2 == 0
        )

        .collect(
            Collectors.toList()
        );`
            },

            {
                id: 6,

                title: "reduce()",

                explanation:
                    "reduce combines stream elements into a single result.",

                importance:
                    "Useful for sum, multiplication, minimum and aggregation operations.",

                code: `List<Integer> numbers =
    List.of(1, 2, 3, 4, 5);


int sum =

    numbers.stream()

        .reduce(
            0,
            (a, b) -> a + b
        );


System.out.println(sum);`
            }

        ]

    },


    {
        id: 5,

        slug: "optional",

        title: "Optional",

        description:
            "Learn how Optional helps reduce NullPointerException problems.",

        topics: [

            {
                id: 1,

                title: "What is Optional?",

                explanation:
                    "Optional is a container object that may or may not contain a value.",

                importance:
                    "It helps represent the possibility of missing values more explicitly.",

                code: `import java.util.Optional;

public class Main {

    public static void main(String[] args) {

        Optional<String> name =
            Optional.of("Java");

        System.out.println(
            name.get()
        );

    }

}`
            },

            {
                id: 2,

                title: "of(), ofNullable() and empty()",

                explanation:
                    "Optional.of is used for non-null values, ofNullable handles possible null values, and empty creates an empty Optional.",

                importance:
                    "These methods are essential for safely creating Optional objects.",

                code: `Optional<String> value1 =
    Optional.of("Java");


Optional<String> value2 =
    Optional.ofNullable(null);


Optional<String> value3 =
    Optional.empty();`
            },

            {
                id: 3,

                title: "orElse()",

                explanation:
                    "orElse provides a default value when Optional is empty.",

                importance:
                    "It prevents null checking boilerplate.",

                code: `Optional<String> name =
    Optional.ofNullable(null);


String result =
    name.orElse("Default Name");


System.out.println(result);`
            },

            {
                id: 4,

                title: "orElseThrow()",

                explanation:
                    "orElseThrow throws an exception when the Optional does not contain a value.",

                importance:
                    "This is commonly used in Spring Boot service layers.",

                code: `User user =
    repository.findById(id)

        .orElseThrow(
            () -> new RuntimeException(
                "User not found"
            )
        );`
            }

        ]

    },


    {
        id: 6,

        slug: "interface-enhancements",

        title: "Interface Enhancements",

        description:
            "Learn default and static methods introduced in Java 8 interfaces.",

        topics: [

            {
                id: 1,

                title: "Default Methods",

                explanation:
                    "Default methods allow interfaces to contain method implementations.",

                importance:
                    "They allow new methods to be added to interfaces without breaking existing implementations.",

                code: `interface Vehicle {

    default void start() {

        System.out.println(
            "Vehicle started"
        );

    }

}


class Car implements Vehicle {

}


public class Main {

    public static void main(String[] args) {

        Car car = new Car();

        car.start();

    }

}`
            },

            {
                id: 2,

                title: "Static Methods in Interface",

                explanation:
                    "Java 8 allows interfaces to define static utility methods.",

                importance:
                    "This keeps related utility methods inside the interface.",

                code: `interface Calculator {

    static int add(
            int a,
            int b
    ) {

        return a + b;

    }

}


public class Main {

    public static void main(String[] args) {

        System.out.println(
            Calculator.add(10, 20)
        );

    }

}`
            }

        ]

    },


    {
        id: 7,

        slug: "date-time-api",

        title: "Date and Time API",

        description:
            "Learn the modern Java date and time API introduced in Java 8.",

        topics: [

            {
                id: 1,

                title: "LocalDate",

                explanation:
                    "LocalDate represents a date without time or timezone information.",

                importance:
                    "It replaces many common use cases of the older Date and Calendar APIs.",

                code: `import java.time.LocalDate;

public class Main {

    public static void main(String[] args) {

        LocalDate today =
            LocalDate.now();

        System.out.println(today);

    }

}`
            },

            {
                id: 2,

                title: "LocalTime",

                explanation:
                    "LocalTime represents time without date or timezone information.",

                importance:
                    "Useful for representing local times such as office hours.",

                code: `import java.time.LocalTime;

LocalTime time =
    LocalTime.now();


System.out.println(time);`
            },

            {
                id: 3,

                title: "LocalDateTime",

                explanation:
                    "LocalDateTime represents both date and time without timezone information.",

                importance:
                    "Commonly used for timestamps in applications.",

                code: `import java.time.LocalDateTime;

LocalDateTime dateTime =
    LocalDateTime.now();


System.out.println(dateTime);`
            },

            {
                id: 4,

                title: "DateTimeFormatter",

                explanation:
                    "DateTimeFormatter is used to format and parse date and time values.",

                importance:
                    "It is useful when displaying dates in custom formats.",

                code: `import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

LocalDate date =
    LocalDate.now();


DateTimeFormatter formatter =
    DateTimeFormatter.ofPattern(
        "dd-MM-yyyy"
    );


System.out.println(
    date.format(formatter)
);`
            }

        ]

    },


    {
        id: 8,

        slug: "completablefuture",

        title: "CompletableFuture",

        description:
            "Learn asynchronous programming and task chaining using CompletableFuture.",

        topics: [

            {
                id: 1,

                title: "supplyAsync()",

                explanation:
                    "supplyAsync executes a task asynchronously and returns a result.",

                importance:
                    "It is useful when executing independent background operations.",

                code: `import java.util.concurrent.CompletableFuture;

public class Main {

    public static void main(String[] args) {

        CompletableFuture<String> future =

            CompletableFuture.supplyAsync(
                () -> "Hello Java"
            );


        future.thenAccept(
            System.out::println
        );

    }

}`
            },

            {
                id: 2,

                title: "thenApply()",

                explanation:
                    "thenApply transforms the result of a previous CompletableFuture.",

                importance:
                    "It allows asynchronous operations to be chained.",

                code: `CompletableFuture

    .supplyAsync(
        () -> 10
    )

    .thenApply(
        value -> value * 2
    )

    .thenAccept(
        System.out::println
    );`
            },

            {
                id: 3,

                title: "thenCombine()",

                explanation:
                    "thenCombine combines the results of two independent CompletableFuture operations.",

                importance:
                    "Useful when multiple asynchronous operations need to complete before producing a final result.",

                code: `CompletableFuture<Integer> future1 =
    CompletableFuture.supplyAsync(
        () -> 10
    );


CompletableFuture<Integer> future2 =
    CompletableFuture.supplyAsync(
        () -> 20
    );


future1.thenCombine(

    future2,

    (a, b) -> a + b

).thenAccept(
    System.out::println
);`
            },

            {
                id: 4,

                title: "exceptionally()",

                explanation:
                    "exceptionally handles errors that occur during asynchronous execution.",

                importance:
                    "Asynchronous applications must handle failures correctly.",

                code: `CompletableFuture

    .supplyAsync(() -> {

        throw new RuntimeException(
            "Something went wrong"
        );

    })

    .exceptionally(error -> {

        System.out.println(
            error.getMessage()
        );

        return "Default Value";

    });`
            }

        ]

    }

];