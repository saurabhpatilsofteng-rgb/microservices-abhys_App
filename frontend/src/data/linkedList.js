
 export const linkedListQuestions = [

    // =========================================================
    // 71. Traverse a Linked List
    // =========================================================

    {
        id: 71,
        module: "linked-list",
        title: "Traverse a Linked List",
        difficulty: "Easy",

        description:
            "Traverse a singly linked list from the head node to the last node and print every element.",

        inputArray: [10, 20, 30, 40, 50],

        example: {
            input: "10 -> 20 -> 30 -> 40 -> 50",
            output: "10 20 30 40 50"
        },

        explanation:
            "Start from the head node and follow the next reference until the current node becomes null. " +
            "Each node's data is printed during traversal.",

        javaCode: `
static void traverse(Node head) {

    Node current = head;

    while (current != null) {

        System.out.print(
            current.data + " "
        );

        current = current.next;
    }
}
`,

        pseudoCode: `
current = head

WHILE current != null

    PRINT current.data

    current = current.next
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 72. Reverse a Linked List
    // =========================================================

    {
        id: 72,
        module: "linked-list",
        title: "Reverse a Linked List",
        difficulty: "Easy",

        description:
            "Reverse a singly linked list using three pointers.",

        inputArray: [10, 20, 30, 40, 50],

        example: {
            input: "10 -> 20 -> 30 -> 40 -> 50",
            output: "50 -> 40 -> 30 -> 20 -> 10"
        },

        explanation:
            "Use previous, current, and next pointers. Store the next node, reverse the current node's next pointer, " +
            "then move previous and current forward.",

        javaCode: `
static Node reverse(Node head) {

    Node previous = null;
    Node current = head;

    while (current != null) {

        Node next = current.next;

        current.next = previous;

        previous = current;
        current = next;
    }

    return previous;
}
`,

        pseudoCode: `
previous = null
current = head

WHILE current != null

    next = current.next

    current.next = previous

    previous = current
    current = next

RETURN previous
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 73. Find Middle of Linked List
    // =========================================================

    {
        id: 73,
        module: "linked-list",
        title: "Find Middle of Linked List",
        difficulty: "Easy",

        description:
            "Find the middle node of a singly linked list using the slow and fast pointer technique.",

        inputArray: [10, 20, 30, 40, 50],

        example: {
            input: "10 -> 20 -> 30 -> 40 -> 50",
            output: "30"
        },

        explanation:
            "The slow pointer moves one node at a time while the fast pointer moves two nodes at a time. " +
            "When fast reaches the end, slow will be pointing to the middle node.",

        javaCode: `
static void findMiddle(Node head) {

    Node slow = head;
    Node fast = head;

    while (fast != null &&
           fast.next != null) {

        slow = slow.next;
        fast = fast.next.next;
    }

    System.out.println(
        "Middle Element: " + slow.data
    );
}
`,

        pseudoCode: `
slow = head
fast = head

WHILE fast != null
AND fast.next != null

    slow = slow.next
    fast = fast.next.next

PRINT slow.data
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 74. Detect Cycle
    // =========================================================

    {
        id: 74,
        module: "linked-list",
        title: "Detect Cycle in Linked List",
        difficulty: "Medium",

        description:
            "Determine whether a linked list contains a cycle using Floyd's Cycle Detection Algorithm.",

        inputArray: [10, 20, 30, 40, 50],

        example: {
            input: "50 -> 30 (cycle)",
            output: "true"
        },

        explanation:
            "Use two pointers: slow moves one step and fast moves two steps. " +
            "If a cycle exists, the two pointers will eventually meet. If fast reaches null, there is no cycle.",

        javaCode: `
static boolean detectCycle(Node head) {

    Node slow = head;
    Node fast = head;

    while (fast != null &&
           fast.next != null) {

        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            return true;
        }
    }

    return false;
}
`,

        pseudoCode: `
slow = head
fast = head

WHILE fast != null
AND fast.next != null

    slow = slow.next
    fast = fast.next.next

    IF slow == fast
        RETURN true

RETURN false
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 75. Find Starting Node of Cycle
    // =========================================================

    {
        id: 75,
        module: "linked-list",
        title: "Find Starting Node of a Cycle",
        difficulty: "Medium",

        description:
            "Find the node where a cycle begins in a linked list using Floyd's algorithm.",

        inputArray: [10, 20, 30, 40, 50],

        example: {
            input: "50 -> 30",
            output: "Cycle starts at 30"
        },

        explanation:
            "First use slow and fast pointers to detect the cycle. After they meet, reset slow to the head. " +
            "Move both pointers one step at a time. The node where they meet again is the starting node of the cycle.",

        javaCode: `
static Node findCycleStart(Node head) {

    Node slow = head;
    Node fast = head;

    // Detect cycle
    while (fast != null &&
           fast.next != null) {

        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            break;
        }
    }

    // No cycle
    if (fast == null ||
        fast.next == null) {

        return null;
    }

    // Find cycle start
    slow = head;

    while (slow != fast) {

        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}
`,

        pseudoCode: `
slow = head
fast = head

WHILE fast != null
AND fast.next != null

    slow = slow.next
    fast = fast.next.next

    IF slow == fast
        BREAK

IF no cycle
    RETURN null

slow = head

WHILE slow != fast

    slow = slow.next
    fast = fast.next

RETURN slow
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 76. Remove Nth Node From End
    // =========================================================

    {
        id: 76,
        module: "linked-list",
        title: "Remove Nth Node From End",
        difficulty: "Medium",

        description:
            "Remove the nth node from the end of a singly linked list using two pointers.",

        inputArray: [10, 20, 30, 40, 50],

        example: {
            input: "n = 2",
            output: "10 -> 20 -> 30 -> 50"
        },

        explanation:
            "Use two pointers separated by n positions. Move both pointers together until the first pointer reaches the end. " +
            "The second pointer will be positioned before the node that must be removed.",

        javaCode: `
static Node removeNthFromEnd(
        Node head,
        int n) {

    Node dummy = new Node(0);
    dummy.next = head;

    Node first = dummy;
    Node second = dummy;

    // Create gap of n nodes
    for (int i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers
    while (first != null) {

        first = first.next;
        second = second.next;
    }

    // Remove node
    second.next = second.next.next;

    return dummy.next;
}
`,

        pseudoCode: `
CREATE dummy node

first = dummy
second = dummy

MOVE first n+1 positions

WHILE first != null

    first = first.next
    second = second.next

REMOVE second.next

RETURN dummy.next
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 77. Merge Two Sorted Linked Lists
    // =========================================================

    {
        id: 77,
        module: "linked-list",
        title: "Merge Two Sorted Linked Lists",
        difficulty: "Easy",

        description:
            "Merge two sorted singly linked lists into one sorted linked list.",

        inputArray: [
            [1, 3, 5, 7],
            [2, 4, 6, 8]
        ],

        example: {
            input: "1 -> 3 -> 5 -> 7 and 2 -> 4 -> 6 -> 8",
            output: "1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8"
        },

        explanation:
            "Compare the current nodes of both lists. Attach the smaller node to the result and move that list pointer forward. " +
            "Continue until one list is empty, then attach the remaining nodes.",

        javaCode: `
static Node mergeSortedLists(
        Node head1,
        Node head2) {

    Node dummy = new Node(0);
    Node current = dummy;

    while (head1 != null &&
           head2 != null) {

        if (head1.data <= head2.data) {

            current.next = head1;
            head1 = head1.next;

        } else {

            current.next = head2;
            head2 = head2.next;
        }

        current = current.next;
    }

    if (head1 != null) {
        current.next = head1;
    }

    if (head2 != null) {
        current.next = head2;
    }

    return dummy.next;
}
`,

        pseudoCode: `
CREATE dummy node

WHILE list1 and list2 are not empty

    IF list1.data <= list2.data

        ADD list1 node
        MOVE list1

    ELSE

        ADD list2 node
        MOVE list2

    MOVE result pointer

ATTACH remaining nodes

RETURN result
`,

        timeComplexity: "O(n + m)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 78. Intersection Point
    // =========================================================

    {
        id: 78,
        module: "linked-list",
        title: "Find Intersection Point of Two Linked Lists",
        difficulty: "Medium",

        description:
            "Find the node where two singly linked lists intersect.",

        inputArray: [
            [10, 20, 30, 40, 50],
            [15, 30, 40, 50]
        ],

        example: {
            input: "List A and List B share nodes 30 -> 40 -> 50",
            output: "Intersection Point = 30"
        },

        explanation:
            "Use two pointers. When pointer p1 reaches the end of list A, move it to head B. " +
            "When p2 reaches the end of list B, move it to head A. " +
            "Both pointers will meet at the intersection node or null.",

        javaCode: `
static Node findIntersection(
        Node head1,
        Node head2) {

    Node p1 = head1;
    Node p2 = head2;

    while (p1 != p2) {

        if (p1 == null) {
            p1 = head2;
        } else {
            p1 = p1.next;
        }

        if (p2 == null) {
            p2 = head1;
        } else {
            p2 = p2.next;
        }
    }

    return p1;
}
`,

        pseudoCode: `
p1 = head1
p2 = head2

WHILE p1 != p2

    IF p1 == null
        p1 = head2
    ELSE
        p1 = p1.next

    IF p2 == null
        p2 = head1
    ELSE
        p2 = p2.next

RETURN p1
`,

        timeComplexity: "O(n + m)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 79. Check Palindrome
    // =========================================================

    {
        id: 79,
        module: "linked-list",
        title: "Check Whether Linked List Is Palindrome",
        difficulty: "Medium",

        description:
            "Check whether the values of a linked list read the same forward and backward.",

        inputArray: [1, 2, 3, 2, 1],

        example: {
            input: "1 -> 2 -> 3 -> 2 -> 1",
            output: "true"
        },

        explanation:
            "First find the middle using slow and fast pointers. Reverse the second half of the linked list. " +
            "Then compare the first half and reversed second half node by node.",

        javaCode: `
static boolean isPalindrome(Node head) {

    if (head == null ||
        head.next == null) {

        return true;
    }

    // Find middle
    Node slow = head;
    Node fast = head;

    while (fast != null &&
           fast.next != null) {

        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse second half
    Node secondHalf = reverse(slow);

    Node firstHalf = head;

    // Compare
    while (secondHalf != null) {

        if (firstHalf.data !=
            secondHalf.data) {

            return false;
        }

        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true;
}
`,

        pseudoCode: `
IF list has 0 or 1 node
    RETURN true

FIND middle using slow/fast

REVERSE second half

first = head

WHILE second half exists

    IF first.data != second.data
        RETURN false

    MOVE both pointers

RETURN true
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 80. Sort Linked List
    // =========================================================

    {
        id: 80,
        module: "linked-list",
        title: "Sort a Linked List Using Merge Sort",
        difficulty: "Medium",

        description:
            "Sort a singly linked list using the Merge Sort algorithm.",

        inputArray: [40, 10, 30, 20, 50],

        example: {
            input: "40 -> 10 -> 30 -> 20 -> 50",
            output: "10 -> 20 -> 30 -> 40 -> 50"
        },

        explanation:
            "Merge Sort divides the linked list into two halves using slow and fast pointers. " +
            "Each half is recursively sorted and then merged using the mergeSortedLists method.",

        javaCode: `
static Node sortList(Node head) {

    if (head == null ||
        head.next == null) {

        return head;
    }

    // Find middle
    Node slow = head;
    Node fast = head.next;

    while (fast != null &&
           fast.next != null) {

        slow = slow.next;
        fast = fast.next.next;
    }

    // Split list
    Node second = slow.next;
    slow.next = null;

    // Sort both halves
    Node left = sortList(head);
    Node right = sortList(second);

    // Merge
    return mergeSortedLists(left, right);
}
`,

        pseudoCode: `
IF list has 0 or 1 node
    RETURN head

FIND middle

SPLIT list into two halves

left = sort(left)
right = sort(right)

MERGE left and right

RETURN merged list
`,

        timeComplexity: "O(n log n)",
        spaceComplexity: "O(log n) recursive stack"
    }

];



