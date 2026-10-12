export const collectionsModules = [

    {
        id: 1,
        slug: "collection-framework",

        title: "Collection Framework",

        description:
            "Learn the architecture and important interfaces of the Java Collection Framework.",

        topics: [

            {
                id: 1,

                title: "Introduction to Collections",

                explanation:
                    "The Java Collection Framework provides classes and interfaces to store, manage and manipulate groups of objects.",

                importance:
                    "Collections provide ready-made data structures such as List, Set, Queue and Map.",

                code: `import java.util.*;

public class Main {

    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Java");
        names.add("Spring Boot");

        System.out.println(names);

    }

}`,

                complexity:
                    "Depends on the collection implementation."
            },

            {
                id: 2,

                title: "Collection Hierarchy",

                explanation:
                    "The main Collection interfaces are List, Set and Queue. Map is part of the Collection Framework but does not extend the Collection interface.",

                importance:
                    "Understanding the hierarchy helps you choose the correct data structure.",

                code: `Collection
│
├── List
│   ├── ArrayList
│   ├── LinkedList
│   └── Vector
│
├── Set
│   ├── HashSet
│   ├── LinkedHashSet
│   └── TreeSet
│
└── Queue
    ├── PriorityQueue
    └── ArrayDeque

Map
├── HashMap
├── LinkedHashMap
└── TreeMap`
            }

        ]

    },


    {
        id: 2,

        slug: "list",

        title: "List",

        description:
            "Learn ordered collections that allow duplicate elements.",

        topics: [

            {
                id: 1,

                title: "ArrayList",

                explanation:
                    "ArrayList is a resizable array implementation of the List interface.",

                importance:
                    "ArrayList is commonly used when fast element access is required.",

                code: `import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<String> list =
                new ArrayList<>();

        list.add("Java");
        list.add("Spring");
        list.add("React");

        System.out.println(list.get(1));

    }

}`,

                complexity:
                    "Access: O(1), Insert/Delete: O(n)"
            },

            {
                id: 2,

                title: "LinkedList",

                explanation:
                    "LinkedList stores elements as nodes connected with links.",

                importance:
                    "It is useful when frequent insertion and deletion operations are required.",

                code: `import java.util.LinkedList;

public class Main {

    public static void main(String[] args) {

        LinkedList<Integer> list =
                new LinkedList<>();

        list.add(10);
        list.add(20);
        list.addFirst(5);

        System.out.println(list);

    }

}`,

                complexity:
                    "Access: O(n), Insert/Delete: O(1)"
            },

            {
                id: 3,

                title: "Vector",

                explanation:
                    "Vector is a synchronized implementation of a dynamic array.",

                importance:
                    "It is thread-safe but usually ArrayList is preferred in modern applications.",

                code: `import java.util.Vector;

public class Main {

    public static void main(String[] args) {

        Vector<Integer> vector =
                new Vector<>();

        vector.add(10);
        vector.add(20);

        System.out.println(vector);

    }

}`
            }

        ]

    },


    {
        id: 3,

        slug: "set",

        title: "Set",

        description:
            "Learn collections that do not allow duplicate elements.",

        topics: [

            {
                id: 1,

                title: "HashSet",

                explanation:
                    "HashSet stores unique elements using hashing.",

                importance:
                    "Useful when you need fast lookup and duplicate prevention.",

                code: `import java.util.HashSet;

public class Main {

    public static void main(String[] args) {

        HashSet<Integer> numbers =
                new HashSet<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(10);

        System.out.println(numbers);

    }

}`,

                complexity:
                    "Add/Search/Delete: O(1) average"
            },

            {
                id: 2,

                title: "LinkedHashSet",

                explanation:
                    "LinkedHashSet maintains insertion order while preventing duplicates.",

                importance:
                    "Use it when uniqueness and insertion order are both required.",

                code: `import java.util.LinkedHashSet;

public class Main {

    public static void main(String[] args) {

        LinkedHashSet<String> set =
                new LinkedHashSet<>();

        set.add("Java");
        set.add("Spring");
        set.add("React");

        System.out.println(set);

    }

}`
            },

            {
                id: 3,

                title: "TreeSet",

                explanation:
                    "TreeSet stores unique elements in sorted order.",

                importance:
                    "Useful when sorted unique data is required.",

                code: `import java.util.TreeSet;

public class Main {

    public static void main(String[] args) {

        TreeSet<Integer> numbers =
                new TreeSet<>();

        numbers.add(30);
        numbers.add(10);
        numbers.add(20);

        System.out.println(numbers);

    }

}`,

                complexity:
                    "Add/Search/Delete: O(log n)"
            }

        ]

    },


    {
        id: 4,

        slug: "queue",

        title: "Queue",

        description:
            "Learn FIFO data structures and priority-based processing.",

        topics: [

            {
                id: 1,

                title: "Queue",

                explanation:
                    "Queue follows the FIFO principle: First In First Out.",

                importance:
                    "Queues are used in task scheduling, messaging and request processing.",

                code: `import java.util.LinkedList;
import java.util.Queue;

public class Main {

    public static void main(String[] args) {

        Queue<Integer> queue =
                new LinkedList<>();

        queue.offer(10);
        queue.offer(20);

        System.out.println(queue.poll());

    }

}`
            },

            {
                id: 2,

                title: "PriorityQueue",

                explanation:
                    "PriorityQueue processes elements according to their priority.",

                importance:
                    "Used in algorithms, scheduling systems and heap-based operations.",

                code: `import java.util.PriorityQueue;

public class Main {

    public static void main(String[] args) {

        PriorityQueue<Integer> queue =
                new PriorityQueue<>();

        queue.add(30);
        queue.add(10);
        queue.add(20);

        System.out.println(queue.poll());

    }

}`,

                complexity:
                    "Insert/Delete: O(log n)"
            },

            {
                id: 3,

                title: "ArrayDeque",

                explanation:
                    "ArrayDeque implements a double-ended queue.",

                importance:
                    "It can efficiently work as both a Stack and Queue.",

                code: `import java.util.ArrayDeque;

public class Main {

    public static void main(String[] args) {

        ArrayDeque<Integer> deque =
                new ArrayDeque<>();

        deque.addFirst(10);
        deque.addLast(20);

        System.out.println(deque);

    }

}`
            }

        ]

    },


    {
        id: 5,

        slug: "map",

        title: "Map",

        description:
            "Learn key-value based data structures.",

        topics: [

            {
                id: 1,

                title: "HashMap",

                explanation:
                    "HashMap stores data as key-value pairs and allows fast lookup.",

                importance:
                    "HashMap is one of the most frequently used Java collections.",

                code: `import java.util.HashMap;

public class Main {

    public static void main(String[] args) {

        HashMap<Integer, String> map =
                new HashMap<>();

        map.put(1, "Java");
        map.put(2, "Spring");

        System.out.println(map.get(1));

    }

}`,

                complexity:
                    "Put/Get/Remove: O(1) average"
            },

            {
                id: 2,

                title: "LinkedHashMap",

                explanation:
                    "LinkedHashMap maintains insertion order.",

                importance:
                    "Useful when predictable iteration order is required.",

                code: `import java.util.LinkedHashMap;

public class Main {

    public static void main(String[] args) {

        LinkedHashMap<Integer, String> map =
                new LinkedHashMap<>();

        map.put(1, "Java");
        map.put(2, "Spring");

        System.out.println(map);

    }

}`
            },

            {
                id: 3,

                title: "TreeMap",

                explanation:
                    "TreeMap stores key-value pairs sorted by key.",

                importance:
                    "Useful when sorted keys are required.",

                code: `import java.util.TreeMap;

public class Main {

    public static void main(String[] args) {

        TreeMap<Integer, String> map =
                new TreeMap<>();

        map.put(3, "React");
        map.put(1, "Java");
        map.put(2, "Spring");

        System.out.println(map);

    }

}`,

                complexity:
                    "Put/Get/Remove: O(log n)"
            }

        ]

    }

];