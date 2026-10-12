export const queueQuestions = [

    // =========================================================
    // 91. Implement Queue using Array
    // =========================================================

    {
        id: 91,
        module: "queue",
        title: "Implement Queue using Array",
        difficulty: "Easy",

        description:
            "Implement a queue using an array with enqueue, dequeue, peek, and isEmpty operations.",

        inputArray: [10, 20, 30],
        example: {
            input: "Enqueue 10, 20, 30, then peek and dequeue",
            output: "Peek: 10, Dequeue: 10"
        },

        explanation:
            "A queue follows the FIFO (First In, First Out) principle. The front points to the first element and rear points to the last element. Enqueue adds an element at the rear, while dequeue removes an element from the front.",

        javaCode: `
static class ArrayQueue {

    int[] queue;
    int front = 0;
    int rear = -1;

    ArrayQueue(int size) {
        queue = new int[size];
    }

    void enqueue(int value) {

        if (rear == queue.length - 1) {
            System.out.println("Queue Overflow");
            return;
        }

        queue[++rear] = value;
    }

    int dequeue() {

        if (front > rear) {
            System.out.println("Queue Underflow");
            return -1;
        }

        return queue[front++];
    }

    int peek() {

        if (front > rear) {
            return -1;
        }

        return queue[front];
    }

    boolean isEmpty() {
        return front > rear;
    }
}
`,

        pseudoCode: `
START

Create array queue
Set front = 0
Set rear = -1

ENQUEUE(value):

    IF rear is last index
        Print "Queue Overflow"
        RETURN
    END IF

    Increment rear
    queue[rear] = value

DEQUEUE():

    IF front > rear
        Print "Queue Underflow"
        RETURN -1
    END IF

    value = queue[front]
    Increment front
    RETURN value

PEEK():

    IF front > rear
        RETURN -1
    END IF

    RETURN queue[front]

isEmpty():

    RETURN front > rear

END
`,

        timeComplexity: "Enqueue: O(1), Dequeue: O(1), Peek: O(1)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 92. Implement Queue using Linked List
    // =========================================================

    {
        id: 92,
        module: "queue",
        title: "Implement Queue using Linked List",
        difficulty: "Easy",

        description:
            "Implement a queue using a linked list with enqueue, dequeue, and peek operations.",

        inputArray: [100, 200, 300],
        example: {
            input: "Enqueue 100, 200, 300, then peek and dequeue",
            output: "Peek: 100, Dequeue: 100"
        },

        explanation:
            "Maintain two references: front and rear. New nodes are inserted at the rear, while nodes are removed from the front. This maintains FIFO ordering.",

        javaCode: `
static class QueueNode {

    int data;
    QueueNode next;

    QueueNode(int data) {
        this.data = data;
    }
}

static class LinkedListQueue {

    QueueNode front;
    QueueNode rear;

    void enqueue(int value) {

        QueueNode newNode =
                new QueueNode(value);

        if (rear == null) {

            front = rear = newNode;

        } else {

            rear.next = newNode;
            rear = newNode;
        }
    }

    int dequeue() {

        if (front == null) {
            return -1;
        }

        int value = front.data;

        front = front.next;

        if (front == null) {
            rear = null;
        }

        return value;
    }

    int peek() {

        if (front == null) {
            return -1;
        }

        return front.data;
    }
}
`,

        pseudoCode: `
START

Set front = null
Set rear = null

ENQUEUE(value):

    Create new node

    IF rear is null
        front = new node
        rear = new node
    ELSE
        rear.next = new node
        rear = new node
    END IF

DEQUEUE():

    IF front is null
        RETURN -1
    END IF

    value = front.data
    front = front.next

    IF front is null
        rear = null
    END IF

    RETURN value

PEEK():

    IF front is null
        RETURN -1
    END IF

    RETURN front.data

END
`,

        timeComplexity: "Enqueue: O(1), Dequeue: O(1), Peek: O(1)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 93. Implement Circular Queue
    // =========================================================

    {
        id: 93,
        module: "queue",
        title: "Implement Circular Queue",
        difficulty: "Medium",

        description:
            "Implement a circular queue using an array where the rear wraps around to the beginning when space becomes available.",

        inputArray: [10, 20, 30],
        example: {
            input: "Queue size 3: enqueue 10, 20, 30, dequeue, enqueue 40",
            output: "Peek: 20"
        },

        explanation:
            "A circular queue reuses empty positions created by dequeue operations. The modulo operator is used to move front and rear circularly through the array.",

        javaCode: `
static class CircularQueue {

    int[] queue;
    int front = -1;
    int rear = -1;
    int size;

    CircularQueue(int size) {
        this.size = size;
        queue = new int[size];
    }

    boolean isFull() {
        return (rear + 1) % size == front;
    }

    boolean isEmpty() {
        return front == -1;
    }

    void enqueue(int value) {

        if (isFull()) {
            System.out.println("Circular Queue Full");
            return;
        }

        if (isEmpty()) {
            front = 0;
        }

        rear = (rear + 1) % size;

        queue[rear] = value;
    }

    int dequeue() {

        if (isEmpty()) {
            return -1;
        }

        int value = queue[front];

        if (front == rear) {

            front = -1;
            rear = -1;

        } else {

            front = (front + 1) % size;
        }

        return value;
    }

    int peek() {

        if (isEmpty()) {
            return -1;
        }

        return queue[front];
    }
}
`,

        pseudoCode: `
START

Create array of given size
Set front = -1
Set rear = -1

isFull():
    RETURN (rear + 1) % size = front

isEmpty():
    RETURN front = -1

ENQUEUE(value):

    IF queue is full
        RETURN
    END IF

    IF queue is empty
        front = 0
    END IF

    rear = (rear + 1) % size
    queue[rear] = value

DEQUEUE():

    IF queue is empty
        RETURN -1
    END IF

    value = queue[front]

    IF front = rear
        front = -1
        rear = -1
    ELSE
        front = (front + 1) % size
    END IF

    RETURN value

PEEK():
    RETURN queue[front]

END
`,

        timeComplexity: "Enqueue: O(1), Dequeue: O(1), Peek: O(1)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 94. Implement Queue using Two Stacks
    // =========================================================

    {
        id: 94,
        module: "queue",
        title: "Implement Queue using Two Stacks",
        difficulty: "Medium",

        description:
            "Implement FIFO queue operations using two stacks.",

        inputArray: [10, 20, 30],
        example: {
            input: "Enqueue 10, 20, 30, then dequeue",
            output: "10"
        },

        explanation:
            "Use stack1 for enqueue operations and stack2 for dequeue operations. When stack2 is empty, move all elements from stack1 to stack2. This reverses their order and produces FIFO behavior.",

        javaCode: `
static class QueueUsingTwoStacks {

    Stack<Integer> stack1 =
            new Stack<>();

    Stack<Integer> stack2 =
            new Stack<>();

    void enqueue(int value) {
        stack1.push(value);
    }

    int dequeue() {

        if (stack2.isEmpty()) {

            while (!stack1.isEmpty()) {

                stack2.push(
                        stack1.pop()
                );
            }
        }

        if (stack2.isEmpty()) {
            return -1;
        }

        return stack2.pop();
    }

    int peek() {

        if (stack2.isEmpty()) {

            while (!stack1.isEmpty()) {

                stack2.push(
                        stack1.pop()
                );
            }
        }

        if (stack2.isEmpty()) {
            return -1;
        }

        return stack2.peek();
    }
}
`,

        pseudoCode: `
START

Create stack1
Create stack2

ENQUEUE(value):
    Push value into stack1

DEQUEUE():

    IF stack2 is empty

        WHILE stack1 is not empty
            Move top of stack1 to stack2
        END WHILE

    END IF

    IF stack2 is empty
        RETURN -1
    END IF

    RETURN Pop stack2

PEEK():

    IF stack2 is empty
        Move all elements from stack1 to stack2
    END IF

    IF stack2 is empty
        RETURN -1
    END IF

    RETURN stack2.top

END
`,

        timeComplexity: "Enqueue: O(1), Dequeue: Amortized O(1), Peek: Amortized O(1)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 95. Implement Stack using Two Queues
    // =========================================================

    {
        id: 95,
        module: "queue",
        title: "Implement Stack using Two Queues",
        difficulty: "Medium",

        description:
            "Implement LIFO stack operations using two queues.",

        inputArray: [10, 20, 30],
        example: {
            input: "Push 10, 20, 30, then pop",
            output: "30"
        },

        explanation:
            "During push, insert the new element into queue2 and move all elements from queue1 behind it. Then swap the queues. This keeps the newest element at the front, allowing pop to behave like a stack.",

        javaCode: `
static class StackUsingTwoQueues {

    Queue<Integer> queue1 =
            new LinkedList<>();

    Queue<Integer> queue2 =
            new LinkedList<>();

    void push(int value) {

        queue2.add(value);

        while (!queue1.isEmpty()) {

            queue2.add(
                    queue1.remove()
            );
        }

        Queue<Integer> temp =
                queue1;

        queue1 = queue2;
        queue2 = temp;
    }

    int pop() {

        if (queue1.isEmpty()) {
            return -1;
        }

        return queue1.remove();
    }

    int peek() {

        if (queue1.isEmpty()) {
            return -1;
        }

        return queue1.peek();
    }
}
`,

        pseudoCode: `
START

Create queue1
Create queue2

PUSH(value):

    Add value to queue2

    WHILE queue1 is not empty
        Remove from queue1
        Add to queue2
    END WHILE

    Swap queue1 and queue2

POP():

    IF queue1 is empty
        RETURN -1
    END IF

    RETURN Remove queue1

PEEK():

    IF queue1 is empty
        RETURN -1
    END IF

    RETURN queue1.front

END
`,

        timeComplexity: "Push: O(n), Pop: O(1), Peek: O(1)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 96. Reverse a Queue
    // =========================================================

    {
        id: 96,
        module: "queue",
        title: "Reverse a Queue",
        difficulty: "Easy",

        description:
            "Reverse the elements of a queue using a stack.",

        inputArray: [10, 20, 30, 40, 50],
        example: {
            input: "10 -> 20 -> 30 -> 40 -> 50",
            output: "50 -> 40 -> 30 -> 20 -> 10"
        },

        explanation:
            "Remove every element from the queue and push it onto a stack. Because the stack reverses the order, popping the stack and adding the elements back to the queue produces the reversed queue.",

        javaCode: `
static void reverseQueue(
        Queue<Integer> queue) {

    Stack<Integer> stack =
            new Stack<>();

    while (!queue.isEmpty()) {

        stack.push(queue.remove());
    }

    while (!stack.isEmpty()) {

        queue.add(stack.pop());
    }
}
`,

        pseudoCode: `
START

Create empty stack

WHILE queue is not empty
    Remove element from queue
    Push element into stack
END WHILE

WHILE stack is not empty
    Pop element from stack
    Add element to queue
END WHILE

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 97. Generate Binary Numbers using Queue
    // =========================================================

    {
        id: 97,
        module: "queue",
        title: "Generate Binary Numbers using Queue",
        difficulty: "Medium",

        description:
            "Generate the first N binary numbers using a queue.",

        inputArray: [10],
        example: {
            input: "N = 10",
            output: "1 10 11 100 101 110 111 1000 1001 1010"
        },

        explanation:
            "Start with binary number 1 in the queue. Remove a number, print it, and add its two children by appending 0 and 1. This generates binary numbers level by level.",

        javaCode: `
static void generateBinaryNumbers(int n) {

    Queue<String> queue =
            new LinkedList<>();

    queue.add("1");

    for (int i = 0; i < n; i++) {

        String current =
                queue.remove();

        System.out.print(
                current + " "
        );

        queue.add(current + "0");
        queue.add(current + "1");
    }
}
`,

        pseudoCode: `
START

Create empty queue
Add "1" to queue

FOR i = 0 to n - 1

    current = Remove queue

    Print current

    Add current + "0" to queue
    Add current + "1" to queue

END FOR

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 98. First Non-Repeating Character using Queue
    // =========================================================

    {
        id: 98,
        module: "queue",
        title: "First Non-Repeating Character using Queue",
        difficulty: "Medium",

        description:
            "For every character in a string, find the first character that has not repeated so far using a queue.",

        inputArray: ["a", "a", "b", "c"],
        example: {
            input: "aabc",
            output: "a -1 b b"
        },

        explanation:
            "Maintain a frequency array and a queue of characters. After processing each character, remove characters from the front while their frequency is greater than one. The remaining front character is the first non-repeating character.",

        javaCode: `
static void firstNonRepeatingCharacter(
        String str) {

    int[] frequency =
            new int[256];

    Queue<Character> queue =
            new LinkedList<>();

    for (char ch :
            str.toCharArray()) {

        frequency[ch]++;

        queue.add(ch);

        while (!queue.isEmpty() &&
               frequency[queue.peek()] > 1) {

            queue.remove();
        }

        if (queue.isEmpty()) {

            System.out.print("-1 ");

        } else {

            System.out.print(
                    queue.peek() + " "
            );
        }
    }
}
`,

        pseudoCode: `
START

Create frequency array
Create empty queue

FOR each character ch

    Increase frequency[ch]
    Add ch to queue

    WHILE queue is not empty
          AND frequency[queue.front] > 1

        Remove front character

    END WHILE

    IF queue is empty
        Print -1
    ELSE
        Print queue.front
    END IF

END FOR

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 99. Sliding Window Maximum using Deque
    // =========================================================

    {
        id: 99,
        module: "queue",
        title: "Sliding Window Maximum using Deque",
        difficulty: "Hard",

        description:
            "Find the maximum element in every contiguous subarray of size K using a deque.",

        inputArray: [1, 3, -1, -3, 5, 3, 6, 7],
        example: {
            input: "Array = [1,3,-1,-3,5,3,6,7], K = 3",
            output: "[3, 3, 5, 5, 6, 7]"
        },

        explanation:
            "Maintain a deque containing indices of elements in decreasing order of their values. Remove indices that are outside the current window and remove smaller elements from the back. The front always contains the index of the maximum element.",

        javaCode: `
static void slidingWindowMaximum(
        int[] arr,
        int k) {

    Deque<Integer> deque =
            new ArrayDeque<>();

    for (int i = 0;
         i < arr.length;
         i++) {

        while (!deque.isEmpty() &&
               deque.peekFirst() <= i - k) {

            deque.removeFirst();
        }

        while (!deque.isEmpty() &&
               arr[deque.peekLast()] <= arr[i]) {

            deque.removeLast();
        }

        deque.addLast(i);

        if (i >= k - 1) {

            System.out.print(
                    arr[deque.peekFirst()] + " "
            );
        }
    }
}
`,

        pseudoCode: `
START

Create empty deque

FOR i = 0 to n - 1

    Remove indexes outside current window

    WHILE deque is not empty
          AND arr[deque.back] <= arr[i]

        Remove back index

    END WHILE

    Add i to back of deque

    IF i >= k - 1
        Maximum = arr[deque.front]
        Print Maximum
    END IF

END FOR

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(k)"
    },


    // =========================================================
    // 100. Priority Queue
    // =========================================================

    {
        id: 100,
        module: "queue",
        title: "Implement Priority Queue",
        difficulty: "Easy",

        description:
            "Use Java's PriorityQueue to store elements and remove them according to priority rather than insertion order.",

        inputArray: [30, 10, 50, 20, 5],
        example: {
            input: "Add 30, 10, 50, 20, 5",
            output: "5 10 20 30 50"
        },

        explanation:
            "Java's PriorityQueue is a min-heap by default. The smallest element has the highest priority and is returned first when poll() is called.",

        javaCode: `
static void priorityQueueExample() {

    PriorityQueue<Integer> queue =
            new PriorityQueue<>();

    queue.add(30);
    queue.add(10);
    queue.add(50);
    queue.add(20);
    queue.add(5);

    while (!queue.isEmpty()) {

        System.out.print(
                queue.poll() + " "
        );
    }
}
`,

        pseudoCode: `
START

Create empty Priority Queue

Add 30
Add 10
Add 50
Add 20
Add 5

WHILE priority queue is not empty

    Remove highest-priority element
    Print element

END WHILE

END
`,

        timeComplexity: "Insertion: O(log n), Peek: O(1), Poll: O(log n)",
        spaceComplexity: "O(n)"
    }

];