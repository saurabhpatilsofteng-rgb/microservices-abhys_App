export const multithreadingModules = [

    {
        id: 1,

        slug: "thread-basics",

        title: "Thread Basics",

        description:
            "Understand processes, threads and the fundamentals of multithreading in Java.",

        topics: [

            {
                id: 1,

                title: "What is a Thread?",

                explanation:
                    "A thread is a lightweight unit of execution inside a process. Multiple threads can execute concurrently within the same application.",

                importance:
                    "Threads allow applications to perform multiple tasks concurrently, such as processing requests, reading data and executing background tasks.",

                code: `public class Main {

    public static void main(String[] args) {

        Thread thread =
            new Thread();

        System.out.println(
            "Main thread is running"
        );

    }

}`
            },

            {
                id: 2,

                title: "Process vs Thread",

                explanation:
                    "A process is an independent running program, while a thread is a smaller execution unit inside a process.",

                importance:
                    "Understanding the difference is important when designing concurrent and scalable applications.",

                code: `Process
│
├── Thread 1
├── Thread 2
└── Thread 3


Example:

Java Application
│
├── Main Thread
├── Worker Thread
└── Background Thread`
            },

            {
                id: 3,

                title: "Main Thread",

                explanation:
                    "Every Java application starts with a main thread that executes the main method.",

                importance:
                    "The main thread is responsible for starting the application and can create additional threads.",

                code: `public class Main {

    public static void main(String[] args) {

        Thread currentThread =
            Thread.currentThread();

        System.out.println(
            currentThread.getName()
        );

    }

}`
            }

        ]

    },


    {
        id: 2,

        slug: "creating-threads",

        title: "Creating Threads",

        description:
            "Learn different ways to create and execute threads in Java.",

        topics: [

            {
                id: 1,

                title: "Extending Thread Class",

                explanation:
                    "You can create a thread by extending the Thread class and overriding the run method.",

                importance:
                    "This is one of the basic approaches for understanding how Java threads work.",

                code: `class MyThread extends Thread {

    @Override
    public void run() {

        System.out.println(
            "Thread is running"
        );

    }

}


public class Main {

    public static void main(String[] args) {

        MyThread thread =
            new MyThread();

        thread.start();

    }

}`
            },

            {
                id: 2,

                title: "Implementing Runnable",

                explanation:
                    "The Runnable interface separates the task from the Thread object.",

                importance:
                    "Runnable is generally preferred over extending Thread because Java supports single inheritance.",

                code: `class MyTask implements Runnable {

    @Override
    public void run() {

        System.out.println(
            "Task is running"
        );

    }

}


public class Main {

    public static void main(String[] args) {

        Thread thread =
            new Thread(
                new MyTask()
            );

        thread.start();

    }

}`
            },

            {
                id: 3,

                title: "Lambda with Runnable",

                explanation:
                    "Since Java 8, Runnable can be implemented using lambda expressions.",

                importance:
                    "This produces cleaner and shorter multithreading code.",

                code: `public class Main {

    public static void main(String[] args) {

        Thread thread =
            new Thread(() -> {

                System.out.println(
                    "Thread is running"
                );

            });

        thread.start();

    }

}`
            }

        ]

    },


    {
        id: 3,

        slug: "thread-lifecycle",

        title: "Thread Lifecycle",

        description:
            "Understand the different states through which a thread moves during execution.",

        topics: [

            {
                id: 1,

                title: "Thread States",

                explanation:
                    "A Java thread moves through states such as NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING and TERMINATED.",

                importance:
                    "Understanding thread states helps debug concurrency and performance problems.",

                code: `Thread Lifecycle

NEW
 │
 ▼
RUNNABLE
 │
 ├── BLOCKED
 │
 ├── WAITING
 │
 └── TIMED_WAITING
 │
 ▼
TERMINATED`
            },

            {
                id: 2,

                title: "start() vs run()",

                explanation:
                    "Calling start creates a new thread of execution, while calling run directly executes the method in the current thread.",

                importance:
                    "This is a very common Java interview question.",

                code: `class MyThread extends Thread {

    @Override
    public void run() {

        System.out.println(
            Thread.currentThread().getName()
        );

    }

}


public class Main {

    public static void main(String[] args) {

        MyThread thread =
            new MyThread();

        thread.start();

    }

}`
            },

            {
                id: 3,

                title: "sleep() Method",

                explanation:
                    "The sleep method pauses the currently executing thread for a specified duration.",

                importance:
                    "It is useful for delays, simulations and controlling execution timing.",

                code: `public class Main {

    public static void main(String[] args)
            throws InterruptedException {

        System.out.println("Start");

        Thread.sleep(2000);

        System.out.println("End");

    }

}`
            }

        ]

    },


    {
        id: 4,

        slug: "synchronization",

        title: "Synchronization",

        description:
            "Learn how to protect shared resources when multiple threads access them.",

        topics: [

            {
                id: 1,

                title: "Race Condition",

                explanation:
                    "A race condition occurs when multiple threads access and modify shared data without proper coordination.",

                importance:
                    "Race conditions can produce inconsistent and unpredictable application behavior.",

                code: `class Counter {

    int count = 0;

    public void increment() {

        count++;

    }

}`
            },

            {
                id: 2,

                title: "Synchronized Method",

                explanation:
                    "The synchronized keyword ensures that only one thread can execute a synchronized section for the same monitor at a time.",

                importance:
                    "Synchronization protects critical sections and shared resources.",

                code: `class Counter {

    int count = 0;

    public synchronized void increment() {

        count++;

    }

}


public class Main {

    public static void main(String[] args)
            throws InterruptedException {

        Counter counter =
            new Counter();

        Thread t1 =
            new Thread(() -> {

                for (int i = 0; i < 1000; i++) {

                    counter.increment();

                }

            });


        Thread t2 =
            new Thread(() -> {

                for (int i = 0; i < 1000; i++) {

                    counter.increment();

                }

            });


        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println(
            counter.count
        );

    }

}`
            },

            {
                id: 3,

                title: "Synchronized Block",

                explanation:
                    "A synchronized block locks only a specific section of code instead of the entire method.",

                importance:
                    "It gives more control and can reduce unnecessary synchronization.",

                code: `class Counter {

    int count = 0;

    public void increment() {

        synchronized (this) {

            count++;

        }

    }

}`
            }

        ]

    },


    {
        id: 5,

        slug: "thread-communication",

        title: "Thread Communication",

        description:
            "Learn how threads coordinate using wait, notify and notifyAll.",

        topics: [

            {
                id: 1,

                title: "wait()",

                explanation:
                    "The wait method causes the current thread to release the monitor and wait until another thread signals it.",

                importance:
                    "It is used when one thread must wait for a condition before continuing execution.",

                code: `class SharedResource {

    public synchronized void waitForData()
            throws InterruptedException {

        wait();

    }

}`
            },

            {
                id: 2,

                title: "notify()",

                explanation:
                    "The notify method wakes one thread waiting on the same object monitor.",

                importance:
                    "It allows threads to coordinate access to shared resources.",

                code: `class SharedResource {

    public synchronized void produce() {

        System.out.println(
            "Data produced"
        );

        notify();

    }

}`
            },

            {
                id: 3,

                title: "Producer Consumer",

                explanation:
                    "The producer-consumer pattern uses thread communication to coordinate data production and consumption.",

                importance:
                    "This pattern is common in messaging systems, queues and concurrent applications.",

                code: `class SharedData {

    private boolean available = false;


    public synchronized void produce()
            throws InterruptedException {

        while (available) {

            wait();

        }

        available = true;

        System.out.println(
            "Produced"
        );

        notifyAll();

    }


    public synchronized void consume()
            throws InterruptedException {

        while (!available) {

            wait();

        }

        available = false;

        System.out.println(
            "Consumed"
        );

        notifyAll();

    }

}`
            }

        ]

    },


    {
        id: 6,

        slug: "executor-service",

        title: "Executor Service",

        description:
            "Learn modern thread management using ExecutorService and thread pools.",

        topics: [

            {
                id: 1,

                title: "ExecutorService",

                explanation:
                    "ExecutorService manages and executes asynchronous tasks using a pool of threads.",

                importance:
                    "It is preferred over manually creating large numbers of Thread objects in enterprise applications.",

                code: `import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {

    public static void main(String[] args) {

        ExecutorService executor =
            Executors.newFixedThreadPool(2);

        executor.submit(() -> {

            System.out.println(
                "Task 1"
            );

        });

        executor.submit(() -> {

            System.out.println(
                "Task 2"
            );

        });

        executor.shutdown();

    }

}`
            },

            {
                id: 2,

                title: "Thread Pool",

                explanation:
                    "A thread pool maintains a group of reusable threads for executing tasks.",

                importance:
                    "Thread pools improve performance by avoiding the overhead of repeatedly creating and destroying threads.",

                code: `ExecutorService executor =
    Executors.newFixedThreadPool(5);


for (int i = 1; i <= 10; i++) {

    final int taskNumber = i;

    executor.submit(() -> {

        System.out.println(
            "Executing task " +
            taskNumber
        );

    });

}


executor.shutdown();`
            }

        ]

    },


    {
        id: 7,

        slug: "callable-future",

        title: "Callable and Future",

        description:
            "Learn how asynchronous tasks can return values.",

        topics: [

            {
                id: 1,

                title: "Callable",

                explanation:
                    "Callable is similar to Runnable but it can return a value and throw checked exceptions.",

                importance:
                    "It is useful when background tasks need to produce results.",

                code: `import java.util.concurrent.Callable;

public class Main {

    public static void main(String[] args) {

        Callable<Integer> task =
            () -> 10 + 20;

    }

}`
            },

            {
                id: 2,

                title: "Future",

                explanation:
                    "Future represents the result of an asynchronous computation.",

                importance:
                    "It allows applications to retrieve the result after a task completes.",

                code: `import java.util.concurrent.*;

public class Main {

    public static void main(String[] args)
            throws Exception {

        ExecutorService executor =
            Executors.newSingleThreadExecutor();


        Future<Integer> future =
            executor.submit(() -> {

                return 10 + 20;

            });


        System.out.println(
            future.get()
        );


        executor.shutdown();

    }

}`
            }

        ]

    },


    {
        id: 8,

        slug: "completable-future",

        title: "CompletableFuture",

        description:
            "Learn modern asynchronous programming using CompletableFuture.",

        topics: [

            {
                id: 1,

                title: "Introduction to CompletableFuture",

                explanation:
                    "CompletableFuture supports asynchronous and non-blocking programming with task chaining.",

                importance:
                    "It is widely used in modern Java applications and microservices.",

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

                title: "thenApply",

                explanation:
                    "thenApply transforms the result produced by a previous asynchronous operation.",

                importance:
                    "It allows asynchronous operations to be chained together.",

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

                title: "Exception Handling in CompletableFuture",

                explanation:
                    "CompletableFuture provides methods such as exceptionally and handle for managing asynchronous errors.",

                importance:
                    "Proper exception handling is essential when working with asynchronous services.",

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