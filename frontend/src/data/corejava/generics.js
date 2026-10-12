export const genericsTopics = [

    {
        id: 1,

        module: "generics",

        title: "What are Generics?",

        difficulty: "Intermediate",

        concept:
            "Generics allow classes, interfaces and methods to work with different data types while providing compile-time type safety.",

        explanation: `
Generics were introduced to allow reusable and type-safe code.

Instead of creating separate classes or methods for Integer, String
and other data types, generics allow one implementation to work with
multiple types.

Generics use type parameters such as:

<T>
<E>
<K>
<V>
        `,

        whyImportant: `
Generics reduce duplicate code and help detect type-related errors
at compile time.

They are heavily used in the Java Collections Framework.
        `,

        syntax: `
ClassName<Type> object = new ClassName<Type>();
        `,

        code: `
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Saurabh");

        System.out.println(names.get(0));

    }
}
        `,

        output: `
Saurabh
        `,

        lineByLine: [
            {
                line: "List<String> names",
                explanation:
                    "Creates a List that can store only String values."
            },

            {
                line: "names.add(\"Saurabh\");",
                explanation:
                    "Adds a String value to the list."
            },

            {
                line: "names.get(0)",
                explanation:
                    "Returns the String value at index 0."
            }
        ],

        realWorldUse: `
Generics are used extensively with List, Set, Map, repositories,
DTO processing and reusable utility classes.
        `,

        interviewQuestions: [
            "What are generics in Java?",
            "Why do we use generics?",
            "What are the advantages of generics?",
            "What is type safety?"
        ],

        commonMistakes: [
            "Using raw types instead of parameterized types.",
            "Confusing generics with inheritance.",
            "Assuming primitive types can be directly used as generic type parameters."
        ]
    },


    {
        id: 2,

        module: "generics",

        title: "Generic Type Parameters",

        difficulty: "Intermediate",

        concept:
            "A generic type parameter is a placeholder that represents a data type.",

        explanation: `
The most common generic type parameter is T.

Other commonly used conventions are:

T - Type
E - Element
K - Key
V - Value
N - Number

These are naming conventions and not Java keywords.
        `,

        whyImportant: `
Type parameters make classes and methods reusable for different
reference data types.
        `,

        syntax: `
class ClassName<T> {

    T value;

}
        `,

        code: `
public class Box<T> {

    T value;

    void setValue(T value) {

        this.value = value;

    }

    T getValue() {

        return value;

    }
}
        `,

        output: `
Box can store different types depending on T.
        `,

        lineByLine: [
            {
                line: "class Box<T>",
                explanation:
                    "Declares a generic class using T as a type parameter."
            },

            {
                line: "T value;",
                explanation:
                    "The variable type depends on the type supplied when creating the object."
            },

            {
                line: "T getValue()",
                explanation:
                    "Returns a value of the generic type."
            }
        ],

        realWorldUse: `
Generic type parameters are used in collections, repository patterns
and reusable data structures.
        `,

        interviewQuestions: [
            "What is a type parameter?",
            "What does T represent in generics?",
            "Are T, E, K and V Java keywords?"
        ],

        commonMistakes: [
            "Using primitive types such as int directly as generic types.",
            "Assuming T always means a specific class."
        ]
    },


    {
        id: 3,

        module: "generics",

        title: "Generic Classes",

        difficulty: "Intermediate",

        concept:
            "A generic class is a class that can operate with different data types using a type parameter.",

        explanation: `
A generic class defines its type parameter after the class name.

For example:

class Box<T>

When an object is created, the actual type is specified:

Box<String>
Box<Integer>
        `,

        whyImportant: `
Generic classes allow reusable code without sacrificing type safety.
        `,

        syntax: `
class ClassName<T> {

    T data;

}
        `,

        code: `
public class Box<T> {

    private T data;

    public Box(T data) {

        this.data = data;

    }

    public T getData() {

        return data;

    }

}
        `,

        output: `
The Box class can work with String, Integer and other reference types.
        `,

        lineByLine: [
            {
                line: "public class Box<T>",
                explanation:
                    "Creates a generic class."
            },

            {
                line: "private T data;",
                explanation:
                    "Stores data of the specified generic type."
            },

            {
                line: "public T getData()",
                explanation:
                    "Returns data using the same generic type."
            }
        ],

        realWorldUse: `
Generic classes are useful for wrappers, containers, reusable response
objects and data structures.
        `,

        interviewQuestions: [
            "What is a generic class?",
            "How do you create an object of a generic class?",
            "Can a generic class have multiple type parameters?"
        ],

        commonMistakes: [
            "Using raw generic classes.",
            "Using incompatible types when creating generic objects."
        ]
    },


    {
        id: 4,

        module: "generics",

        title: "Generic Methods",

        difficulty: "Intermediate",

        concept:
            "A generic method defines its own type parameter and can work with different data types independently of the class.",

        explanation: `
A generic method declares its type parameter before its return type.

For example:

public static <T> void display(T value)

The method can then accept different reference types.
        `,

        whyImportant: `
Generic methods provide reusable functionality without requiring
multiple overloaded methods for every data type.
        `,

        syntax: `
public static <T> T methodName(T value) {

    return value;

}
        `,

        code: `
public class Main {

    public static <T> void display(T value) {

        System.out.println(value);

    }

    public static void main(String[] args) {

        display("Hello");

        display(100);

        display(10.5);

    }
}
        `,

        output: `
Hello
100
10.5
        `,

        lineByLine: [
            {
                line: "public static <T> void display(T value)",
                explanation:
                    "Declares a generic method with type parameter T."
            },

            {
                line: "display(\"Hello\");",
                explanation:
                    "Calls the method using String."
            },

            {
                line: "display(100);",
                explanation:
                    "Calls the same method using Integer through autoboxing."
            }
        ],

        realWorldUse: `
Generic methods are useful for reusable utility functions, converters,
validators and processing operations.
        `,

        interviewQuestions: [
            "What is a generic method?",
            "Where is the type parameter declared in a generic method?",
            "Can a non-generic class contain a generic method?"
        ],

        commonMistakes: [
            "Placing the type parameter in the wrong position.",
            "Confusing generic methods with generic classes."
        ]
    },


    {
        id: 5,

        module: "generics",

        title: "Multiple Type Parameters",

        difficulty: "Intermediate",

        concept:
            "A generic class or method can use multiple type parameters to represent different data types.",

        explanation: `
Multiple type parameters are commonly used when an object works with
more than one type.

For example:

<K, V>

is commonly used for key-value structures such as Map.
        `,

        whyImportant: `
Multiple type parameters are useful for designing flexible reusable
classes that work with related but different data types.
        `,

        syntax: `
class ClassName<K, V> {

    K key;

    V value;

}
        `,

        code: `
public class Pair<K, V> {

    private K key;

    private V value;

    public Pair(K key, V value) {

        this.key = key;

        this.value = value;

    }

    public void display() {

        System.out.println(key);

        System.out.println(value);

    }
}
        `,

        output: `
Example:
101
Java
        `,

        lineByLine: [
            {
                line: "class Pair<K, V>",
                explanation:
                    "Declares a generic class with two type parameters."
            },

            {
                line: "K key;",
                explanation:
                    "Stores the key using the K type."
            },

            {
                line: "V value;",
                explanation:
                    "Stores the value using the V type."
            }
        ],

        realWorldUse: `
Multiple generic parameters are used in Map<K, V>, key-value pairs,
cache structures and reusable response objects.
        `,

        interviewQuestions: [
            "Can a generic class have multiple type parameters?",
            "What do K and V commonly represent?",
            "Give an example of a Java class using multiple type parameters."
        ],

        commonMistakes: [
            "Using the same type parameter when different types are required.",
            "Passing generic types in the wrong order."
        ]
    },


    {
        id: 6,

        module: "generics",

        title: "Bounded Type Parameters",

        difficulty: "Intermediate",

        concept:
            "Bounded type parameters restrict the types that can be used with a generic class or method.",

        explanation: `
The extends keyword can restrict a generic type.

For example:

<T extends Number>

This means T can be Number or one of its subclasses such as:

Integer
Double
Float
Long
        `,

        whyImportant: `
Bounds allow generic code to use methods or behavior available from
a specific superclass or interface.
        `,

        syntax: `
class ClassName<T extends ParentClass> {

}
        `,

        code: `
public class Calculator<T extends Number> {

    public double getDoubleValue(T value) {

        return value.doubleValue();

    }
}
        `,

        output: `
The Calculator can accept numeric wrapper types.
        `,

        lineByLine: [
            {
                line: "T extends Number",
                explanation:
                    "Restricts T to Number or its subclasses."
            },

            {
                line: "value.doubleValue()",
                explanation:
                    "Can be called because T is guaranteed to extend Number."
            }
        ],

        realWorldUse: `
Bounded generics are useful when reusable code requires certain
methods or behavior from the supplied type.
        `,

        interviewQuestions: [
            "What is a bounded type parameter?",
            "What does T extends Number mean?",
            "Can bounded type parameters use interfaces?"
        ],

        commonMistakes: [
            "Trying to pass an incompatible type.",
            "Confusing extends in generics with class inheritance only."
        ]
    },


    {
        id: 7,

        module: "generics",

        title: "Upper Bounded Wildcards",

        difficulty: "Intermediate",

        concept:
            "An upper bounded wildcard uses ? extends Type to accept objects of a specified type or its subclasses.",

        explanation: `
The wildcard ? represents an unknown type.

An upper bounded wildcard restricts that unknown type.

Example:

List<? extends Number>

This can reference lists containing Integer, Double or other
Number subclasses.
        `,

        whyImportant: `
Upper bounded wildcards are useful when a method mainly reads data
from a generic structure.
        `,

        syntax: `
List<? extends Number>
        `,

        code: `
import java.util.List;

public class Main {

    static void printNumbers(List<? extends Number> numbers) {

        for (Number number : numbers) {

            System.out.println(number);

        }

    }

}
        `,

        output: `
Can print Integer, Double and other Number values.
        `,

        lineByLine: [
            {
                line: "List<? extends Number>",
                explanation:
                    "Accepts a list whose element type is Number or a subclass of Number."
            },

            {
                line: "for (Number number : numbers)",
                explanation:
                    "Reads each value as a Number."
            }
        ],

        realWorldUse: `
Used in APIs and utility methods that need to process related numeric
or inherited types without modifying the collection.
        `,

        interviewQuestions: [
            "What is an upper bounded wildcard?",
            "What does ? extends Number mean?",
            "When should upper bounded wildcards be used?"
        ],

        commonMistakes: [
            "Trying to freely add values to a collection declared with an upper bounded wildcard.",
            "Confusing ? extends with ? super."
        ]
    },


    {
        id: 8,

        module: "generics",

        title: "Lower Bounded Wildcards",

        difficulty: "Advanced",

        concept:
            "A lower bounded wildcard uses ? super Type to accept a specified type or its parent types.",

        explanation: `
For example:

List<? super Integer>

can accept:

List<Integer>
List<Number>
List<Object>

Lower bounded wildcards are commonly useful when values are being
written into a collection.
        `,

        whyImportant: `
Lower bounded wildcards improve flexibility when a method needs to
add values to generic structures.
        `,

        syntax: `
List<? super Integer>
        `,

        code: `
import java.util.List;

public class Main {

    static void addNumbers(List<? super Integer> numbers) {

        numbers.add(10);

        numbers.add(20);

    }

}
        `,

        output: `
10 and 20 can be added to compatible lists.
        `,

        lineByLine: [
            {
                line: "List<? super Integer>",
                explanation:
                    "Accepts Integer or a superclass of Integer as the list element type."
            },

            {
                line: "numbers.add(10);",
                explanation:
                    "An Integer can safely be added."
            }
        ],

        realWorldUse: `
Useful in APIs where a method produces or adds values into a generic
collection.
        `,

        interviewQuestions: [
            "What is a lower bounded wildcard?",
            "What does ? super Integer mean?",
            "What is the difference between extends and super?"
        ],

        commonMistakes: [
            "Confusing lower bounded and upper bounded wildcards.",
            "Assuming elements can always be read as Integer from ? super Integer."
        ]
    },


    {
        id: 9,

        module: "generics",

        title: "Wildcard <?>",

        difficulty: "Intermediate",

        concept:
            "An unbounded wildcard <?> represents an unknown generic type.",

        explanation: `
The wildcard can be used when a method does not need to know the
specific element type.

For example:

List<?>

can reference a List of String, Integer or another reference type.

It is useful when the method only needs to treat elements generally.
        `,

        whyImportant: `
Unbounded wildcards allow methods to work with generic collections
without requiring a specific element type.
        `,

        syntax: `
List<?>
        `,

        code: `
import java.util.List;

public class Main {

    static void printList(List<?> list) {

        for (Object item : list) {

            System.out.println(item);

        }

    }

}
        `,

        output: `
Can print elements from lists containing different reference types.
        `,

        lineByLine: [
            {
                line: "List<?> list",
                explanation:
                    "Accepts a list with an unknown element type."
            },

            {
                line: "Object item",
                explanation:
                    "Elements can be safely read as Object."
            }
        ],

        realWorldUse: `
Useful for generic display, logging and inspection utilities.
        `,

        interviewQuestions: [
            "What is an unbounded wildcard?",
            "What does <?> mean?",
            "What is the difference between <?> and <Object>?"
        ],

        commonMistakes: [
            "Assuming List<?> is the same as List<Object>.",
            "Trying to add arbitrary values to List<?>."
        ]
    },


    {
        id: 10,

        module: "generics",

        title: "Type Erasure",

        difficulty: "Advanced",

        concept:
            "Type erasure is the process by which Java removes most generic type information during compilation.",

        explanation: `
Generics provide compile-time type safety.

However, Java generics are primarily implemented using type erasure.

For example:

List<String>

and:

List<Integer>

are represented without their specific type arguments at runtime.

The compiler inserts required type checks and casts where appropriate.
        `,

        whyImportant: `
Understanding type erasure explains important generic limitations and
common interview concepts.

For example, Java cannot create:

new T()

directly without additional techniques, and generic type information
is not generally available in the same way at runtime.
        `,

        syntax: `
List<String>

↓

List
        `,

        code: `
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Java");

        String name = names.get(0);

        System.out.println(name);

    }
}
        `,

        output: `
Java
        `,

        lineByLine: [
            {
                line: "List<String>",
                explanation:
                    "Provides compile-time type safety."
            },

            {
                line: "String name = names.get(0);",
                explanation:
                    "The compiler ensures the returned value is treated as a String."
            }
        ],

        realWorldUse: `
Type erasure is important when working with reflection, frameworks,
generic APIs and understanding Java runtime behavior.
        `,

        interviewQuestions: [
            "What is type erasure?",
            "Why does Java use type erasure?",
            "Are generic type parameters available at runtime?",
            "What limitations are caused by type erasure?"
        ],

        commonMistakes: [
            "Assuming generic type information is always available at runtime.",
            "Trying to instantiate a generic type directly using new T().",
            "Creating generic arrays without understanding type erasure limitations."
        ]
    }

];