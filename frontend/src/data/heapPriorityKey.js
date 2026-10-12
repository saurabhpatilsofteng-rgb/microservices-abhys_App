
export const heapPriorityQueueQuestions = [

    // =========================================================
    // 61. Implement Min Heap
    // =========================================================

    {
        id: 61,
        module: "heap-priority-queue",
        title: "Implement Min Heap",
        difficulty: "Easy",

        description:
            "Implement or use a Min Heap where the smallest element is always at the root.",

        inputArray: [30, 10, 20, 5],

        example: {
            input: "Insert 30, 10, 20, 5",
            output: "Minimum element = 5"
        },

        explanation:
            "A Min Heap is a complete binary tree where every parent is smaller than or equal to its children. " +
            "In Java, PriorityQueue implements a Min Heap by default. The peek() method returns the smallest element.",

        javaCode: `
import java.util.PriorityQueue;

public class Main {

    public static void main(String[] args) {

        PriorityQueue<Integer> minHeap =
                new PriorityQueue<>();

        minHeap.add(30);
        minHeap.add(10);
        minHeap.add(20);
        minHeap.add(5);

        System.out.println("Min Heap: " + minHeap);

        System.out.println(
            "Minimum Element: " + minHeap.peek()
        );
    }
}
`,

        pseudoCode: `
CREATE empty Min Heap

INSERT 30
INSERT 10
INSERT 20
INSERT 5

PRINT minimum element
`,

        timeComplexity: "Insert: O(log n), Peek: O(1)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 62. Implement Max Heap
    // =========================================================

    {
        id: 62,
        module: "heap-priority-queue",
        title: "Implement Max Heap",
        difficulty: "Easy",

        description:
            "Implement a Max Heap where the largest element is always available at the root.",

        inputArray: [30, 10, 20, 5],

        example: {
            input: "Insert 30, 10, 20, 5",
            output: "Maximum element = 30"
        },

        explanation:
            "A Max Heap keeps the largest element at the root. Java PriorityQueue is a Min Heap by default, " +
            "so Collections.reverseOrder() can be used to create Max Heap behavior.",

        javaCode: `
import java.util.*;

public class Main {

    public static void main(String[] args) {

        PriorityQueue<Integer> maxHeap =
                new PriorityQueue<>(
                    Collections.reverseOrder()
                );

        maxHeap.add(30);
        maxHeap.add(10);
        maxHeap.add(20);
        maxHeap.add(5);

        System.out.println("Max Heap: " + maxHeap);

        System.out.println(
            "Maximum Element: " + maxHeap.peek()
        );
    }
}
`,

        pseudoCode: `
CREATE Max Heap

INSERT elements

Maximum element is at root

PRINT root element
`,

        timeComplexity: "Insert: O(log n), Peek: O(1)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 63. Insert into Min Heap
    // =========================================================

    {
        id: 63,
        module: "heap-priority-queue",
        title: "Insert into Min Heap",
        difficulty: "Medium",

        description:
            "Insert an element into a custom Min Heap while maintaining the Min Heap property.",

        inputArray: [40, 20, 10, 30, 5],

        example: {
            input: "Insert 40, 20, 10, 30, 5",
            output: "5 becomes the root"
        },

        explanation:
            "When an element is inserted, it is first placed at the end of the heap. " +
            "Then it is moved upward using the parent index (index - 1) / 2 until the Min Heap property is restored.",

        javaCode: `
static class MinHeap {

    private int[] heap;
    private int size;

    MinHeap(int capacity) {
        heap = new int[capacity];
        size = 0;
    }

    void insert(int value) {

        if (size == heap.length) {
            System.out.println("Heap is full");
            return;
        }

        heap[size] = value;

        int index = size;
        size++;

        while (index > 0) {

            int parent = (index - 1) / 2;

            if (heap[parent] <= heap[index]) {
                break;
            }

            int temp = heap[parent];
            heap[parent] = heap[index];
            heap[index] = temp;

            index = parent;
        }
    }
}
`,

        pseudoCode: `
INSERT value at end

INCREASE heap size

WHILE current node has parent

    FIND parent

    IF parent <= current
        STOP

    SWAP parent and current

    MOVE current to parent
`,

        timeComplexity: "O(log n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 64. Delete from Min Heap
    // =========================================================

    {
        id: 64,
        module: "heap-priority-queue",
        title: "Delete from Min Heap",
        difficulty: "Medium",

        description:
            "Delete the minimum element from a Min Heap and restore the heap property.",

        inputArray: [5, 10, 20, 30, 40],

        example: {
            input: "Delete from Min Heap",
            output: "Deleted element = 5"
        },

        explanation:
            "The root element is removed first. The last element is moved to the root and then heapifyDown() " +
            "is performed to restore the Min Heap property.",

        javaCode: `
int delete() {

    if (size == 0) {
        throw new RuntimeException(
            "Heap is empty"
        );
    }

    int result = heap[0];

    heap[0] = heap[size - 1];

    size--;

    heapifyDown(0);

    return result;
}
`,

        pseudoCode: `
IF heap is empty
    THROW exception

STORE root element

MOVE last element to root

DECREASE heap size

CALL heapifyDown

RETURN deleted element
`,

        timeComplexity: "O(log n)",
        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 65. Heapify an Array
    // =========================================================

    {
        id: 65,
        module: "heap-priority-queue",
        title: "Heapify an Array",
        difficulty: "Medium",

        description:
            "Convert an unsorted array into a Min Heap using the heapify operation.",

        inputArray: [10, 5, 20, 2, 15, 30],

        example: {
            input: "[10, 5, 20, 2, 15, 30]",
            output: "Min Heap representation"
        },

        explanation:
            "To build a heap efficiently, start from the last non-leaf node and perform heapifyDown on every node. " +
            "The last non-leaf node is at index n / 2 - 1.",

        javaCode: `
static void heapifyArray(int[] arr) {

    int n = arr.length;

    for (int i = n / 2 - 1;
         i >= 0;
         i--) {

        heapify(arr, n, i);
    }
}

static void heapify(
        int[] arr,
        int n,
        int index) {

    int smallest = index;

    int left = 2 * index + 1;
    int right = 2 * index + 2;

    if (left < n &&
        arr[left] < arr[smallest]) {

        smallest = left;
    }

    if (right < n &&
        arr[right] < arr[smallest]) {

        smallest = right;
    }

    if (smallest != index) {

        int temp = arr[index];
        arr[index] = arr[smallest];
        arr[smallest] = temp;

        heapify(
            arr,
            n,
            smallest
        );
    }
}
`,

        pseudoCode: `
n = array length

FOR i = n/2 - 1 DOWNTO 0

    heapify(array, i)

heapify:
    FIND smallest among
    parent, left child, right child

    IF smallest is not parent
        SWAP
        heapify child
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(log n) recursive stack"
    },


    // =========================================================
    // 66. Heap Sort
    // =========================================================

    {
        id: 66,
        module: "heap-priority-queue",
        title: "Heap Sort",
        difficulty: "Medium",

        description:
            "Sort an array using Heap Sort by first building a Max Heap and then repeatedly moving the maximum element to the end.",

        inputArray: [5, 3, 8, 4, 2, 7],

        example: {
            input: "[5, 3, 8, 4, 2, 7]",
            output: "[2, 3, 4, 5, 7, 8]"
        },

        explanation:
            "Heap Sort first builds a Max Heap. The largest element is then swapped with the last element. " +
            "The heap size is reduced and maxHeapify is applied again. This process continues until the array is sorted.",

        javaCode: `
static void heapSort(int[] arr) {

    int n = arr.length;

    // Build Max Heap
    for (int i = n / 2 - 1;
         i >= 0;
         i--) {

        maxHeapify(arr, n, i);
    }

    // Move maximum to end
    for (int i = n - 1;
         i > 0;
         i--) {

        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        maxHeapify(arr, i, 0);
    }
}

static void maxHeapify(
        int[] arr,
        int n,
        int index) {

    int largest = index;

    int left = 2 * index + 1;
    int right = 2 * index + 2;

    if (left < n &&
        arr[left] > arr[largest]) {

        largest = left;
    }

    if (right < n &&
        arr[right] > arr[largest]) {

        largest = right;
    }

    if (largest != index) {

        int temp = arr[index];
        arr[index] = arr[largest];
        arr[largest] = temp;

        maxHeapify(
            arr,
            n,
            largest
        );
    }
}
`,

        pseudoCode: `
BUILD Max Heap

FOR i from n-1 DOWNTO 1

    SWAP root with arr[i]

    REDUCE heap size

    CALL maxHeapify

RETURN sorted array
`,

        timeComplexity: "O(n log n)",
        spaceComplexity: "O(log n) recursive stack"
    },


    // =========================================================
    // 67. Kth Largest Element
    // =========================================================

    {
        id: 67,
        module: "heap-priority-queue",
        title: "Find Kth Largest Element",
        difficulty: "Medium",

        description:
            "Find the kth largest element in an array using a Min Heap.",

        inputArray: [3, 2, 1, 5, 6, 4],

        example: {
            input: "k = 2",
            output: "5"
        },

        explanation:
            "Maintain a Min Heap containing only the k largest elements. Whenever the heap size becomes greater than k, " +
            "remove the smallest element. At the end, the root is the kth largest element.",

        javaCode: `
static int kthLargest(
        int[] arr,
        int k) {

    PriorityQueue<Integer> minHeap =
            new PriorityQueue<>();

    for (int num : arr) {

        minHeap.add(num);

        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }

    return minHeap.peek();
}
`,

        pseudoCode: `
CREATE Min Heap

FOR every element

    ADD element to heap

    IF heap size > k
        REMOVE smallest element

RETURN heap root
`,

        timeComplexity: "O(n log k)",
        spaceComplexity: "O(k)"
    },


    // =========================================================
    // 68. Kth Smallest Element
    // =========================================================

    {
        id: 68,
        module: "heap-priority-queue",
        title: "Find Kth Smallest Element",
        difficulty: "Medium",

        description:
            "Find the kth smallest element in an array using a Max Heap.",

        inputArray: [7, 10, 4, 3, 20, 15],

        example: {
            input: "k = 3",
            output: "7"
        },

        explanation:
            "Maintain a Max Heap containing the k smallest elements. If the heap contains more than k elements, " +
            "remove the largest element. The root finally contains the kth smallest element.",

        javaCode: `
static int kthSmallest(
        int[] arr,
        int k) {

    PriorityQueue<Integer> maxHeap =
            new PriorityQueue<>(
                Collections.reverseOrder()
            );

    for (int num : arr) {

        maxHeap.add(num);

        if (maxHeap.size() > k) {
            maxHeap.poll();
        }
    }

    return maxHeap.peek();
}
`,

        pseudoCode: `
CREATE Max Heap

FOR every element

    ADD element

    IF heap size > k
        REMOVE largest element

RETURN heap root
`,

        timeComplexity: "O(n log k)",
        spaceComplexity: "O(k)"
    },


    // =========================================================
    // 69. Top K Frequent Elements
    // =========================================================

    {
        id: 69,
        module: "heap-priority-queue",
        title: "Top K Frequent Elements",
        difficulty: "Medium",

        description:
            "Find the k elements that occur most frequently in an array using HashMap and Min Heap.",

        inputArray: [1, 1, 1, 2, 2, 3, 3, 4],

        example: {
            input: "k = 2",
            output: "[1, 2]"
        },

        explanation:
            "First count the frequency of every element using HashMap. Then maintain a Min Heap ordered by frequency. " +
            "Keep only k elements in the heap. The resulting elements are the top k frequent elements.",

        javaCode: `
static List<Integer> topKFrequent(
        int[] arr,
        int k) {

    Map<Integer, Integer> frequency =
            new HashMap<>();

    // Count frequency
    for (int num : arr) {

        frequency.put(
            num,
            frequency.getOrDefault(
                num, 0
            ) + 1
        );
    }

    // Min Heap based on frequency
    PriorityQueue<Integer> minHeap =
            new PriorityQueue<>(
                (a, b) ->
                    frequency.get(a)
                    - frequency.get(b)
            );

    for (int num : frequency.keySet()) {

        minHeap.add(num);

        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }

    List<Integer> result =
            new ArrayList<>();

    while (!minHeap.isEmpty()) {
        result.add(minHeap.poll());
    }

    Collections.reverse(result);

    return result;
}
`,

        pseudoCode: `
CREATE frequency map

FOR every element
    COUNT frequency

CREATE Min Heap based on frequency

FOR every unique element

    ADD element

    IF heap size > k
        REMOVE lowest frequency element

CREATE result

REMOVE elements from heap

RETURN result
`,

        timeComplexity: "O(n log k)",
        spaceComplexity: "O(n + k)"
    },


    // =========================================================
    // 70. Merge K Sorted Arrays
    // =========================================================

    {
        id: 70,
        module: "heap-priority-queue",
        title: "Merge K Sorted Arrays",
        difficulty: "Hard",

        description:
            "Merge multiple sorted arrays into one sorted array using a Min Heap.",

        inputArray: [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ],

        example: {
            input: "[[1,4,7], [2,5,8], [3,6,9]]",
            output: "[1,2,3,4,5,6,7,8,9]"
        },

        explanation:
            "Insert the first element from every sorted array into a Min Heap. " +
            "Remove the smallest element and add the next element from the same array. " +
            "Continue until the heap becomes empty.",

        javaCode: `
static class Element {

    int value;
    int arrayIndex;
    int elementIndex;

    Element(
            int value,
            int arrayIndex,
            int elementIndex) {

        this.value = value;
        this.arrayIndex = arrayIndex;
        this.elementIndex = elementIndex;
    }
}

static int[] mergeKSortedArrays(
        int[][] arrays) {

    PriorityQueue<Element> minHeap =
            new PriorityQueue<>(
                (a, b) ->
                    a.value - b.value
            );

    int totalSize = 0;

    // Add first element
    // from every array
    for (int i = 0;
         i < arrays.length;
         i++) {

        totalSize += arrays[i].length;

        if (arrays[i].length > 0) {

            minHeap.add(
                new Element(
                    arrays[i][0],
                    i,
                    0
                )
            );
        }
    }

    int[] result =
            new int[totalSize];

    int index = 0;

    while (!minHeap.isEmpty()) {

        Element current =
                minHeap.poll();

        result[index++] =
                current.value;

        int nextIndex =
                current.elementIndex + 1;

        if (nextIndex <
            arrays[
                current.arrayIndex
            ].length) {

            minHeap.add(
                new Element(
                    arrays[
                        current.arrayIndex
                    ][nextIndex],

                    current.arrayIndex,
                    nextIndex
                )
            );
        }
    }

    return result;
}
`,

        pseudoCode: `
CREATE Min Heap

FOR every sorted array
    ADD its first element to heap

CREATE result array

WHILE heap is not empty

    REMOVE smallest element

    ADD it to result

    FIND next element
    from the same array

    IF next element exists
        ADD it to heap

RETURN result
`,

        timeComplexity: "O(N log K)",
        spaceComplexity: "O(K)"
    }

];



