const sortingQuestions = [

    // =========================================================
    // 111. Bubble Sort
    // =========================================================

    {
        id: 111,
        module: "sorting",
        title: "Bubble Sort",
        difficulty: "Easy",

        description:
            "Sort an array in ascending order using the Bubble Sort algorithm. Repeatedly compare adjacent elements and swap them if they are in the wrong order.",

        inputArray: [5, 3, 8, 4, 2],

        example:
            "Input: [5, 3, 8, 4, 2]\nOutput: [2, 3, 4, 5, 8]",

        explanation:
            "Bubble Sort repeatedly compares adjacent elements. If the left element is greater than the right element, they are swapped. After every pass, the largest unsorted element moves to the end. The swapped flag allows the algorithm to stop early when the array is already sorted.",

        javaCode: `static void bubbleSort(int[] arr) {

    for (int i = 0; i < arr.length - 1; i++) {

        boolean swapped = false;

        for (int j = 0;
             j < arr.length - i - 1;
             j++) {

            if (arr[j] > arr[j + 1]) {

                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}`,

        pseudoCode: `BUBBLE_SORT(arr)

for i = 0 to n - 2

    swapped = false

    for j = 0 to n - i - 2

        if arr[j] > arr[j + 1]

            swap arr[j] and arr[j + 1]

            swapped = true

    if swapped == false
        break`,

        timeComplexity: "Best: O(n), Average: O(n²), Worst: O(n²)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 112. Selection Sort
    // =========================================================

    {
        id: 112,
        module: "sorting",
        title: "Selection Sort",
        difficulty: "Easy",

        description:
            "Sort an array in ascending order using Selection Sort by repeatedly finding the minimum element from the unsorted portion and placing it at the beginning.",

        inputArray: [64, 25, 12, 22, 11],

        example:
            "Input: [64, 25, 12, 22, 11]\nOutput: [11, 12, 22, 25, 64]",

        explanation:
            "Selection Sort divides the array into sorted and unsorted portions. For every position, it finds the smallest element in the remaining unsorted portion and swaps it with the current element.",

        javaCode: `static void selectionSort(int[] arr) {

    for (int i = 0; i < arr.length - 1; i++) {

        int minIndex = i;

        for (int j = i + 1;
             j < arr.length;
             j++) {

            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}`,

        pseudoCode: `SELECTION_SORT(arr)

for i = 0 to n - 2

    minIndex = i

    for j = i + 1 to n - 1

        if arr[j] < arr[minIndex]

            minIndex = j

    swap arr[i] and arr[minIndex]`,

        timeComplexity: "Best: O(n²), Average: O(n²), Worst: O(n²)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 113. Insertion Sort
    // =========================================================

    {
        id: 113,
        module: "sorting",
        title: "Insertion Sort",
        difficulty: "Easy",

        description:
            "Sort an array using Insertion Sort by taking one element at a time and inserting it into its correct position in the already sorted portion.",

        inputArray: [12, 11, 13, 5, 6],

        example:
            "Input: [12, 11, 13, 5, 6]\nOutput: [5, 6, 11, 12, 13]",

        explanation:
            "Insertion Sort considers the first element sorted and processes the remaining elements one by one. Each selected element is shifted left while larger elements are moved to the right, then the element is inserted at its correct position.",

        javaCode: `static void insertionSort(int[] arr) {

    for (int i = 1; i < arr.length; i++) {

        int key = arr[i];

        int j = i - 1;

        while (j >= 0
                && arr[j] > key) {

            arr[j + 1] = arr[j];

            j--;
        }

        arr[j + 1] = key;
    }
}`,

        pseudoCode: `INSERTION_SORT(arr)

for i = 1 to n - 1

    key = arr[i]

    j = i - 1

    while j >= 0 AND arr[j] > key

        arr[j + 1] = arr[j]

        j--

    arr[j + 1] = key`,

        timeComplexity: "Best: O(n), Average: O(n²), Worst: O(n²)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 114. Merge Sort
    // =========================================================

    {
        id: 114,
        module: "sorting",
        title: "Merge Sort",
        difficulty: "Medium",

        description:
            "Sort an array using the Merge Sort divide-and-conquer algorithm. Recursively divide the array into smaller parts and merge the sorted parts.",

        inputArray: [38, 27, 43, 3, 9, 82, 10],

        example:
            "Input: [38, 27, 43, 3, 9, 82, 10]\nOutput: [3, 9, 10, 27, 38, 43, 82]",

        explanation:
            "Merge Sort divides the array into two halves until each part contains one element. It then merges the sorted halves while maintaining ascending order. The merge operation requires an auxiliary temporary array.",

        javaCode: `static void mergeSort(
        int[] arr,
        int left,
        int right) {

    if (left >= right) {
        return;
    }

    int mid =
            left + (right - left) / 2;

    mergeSort(arr, left, mid);

    mergeSort(arr, mid + 1, right);

    merge(arr, left, mid, right);
}


static void merge(
        int[] arr,
        int left,
        int mid,
        int right) {

    int[] temp =
            new int[right - left + 1];

    int i = left;
    int j = mid + 1;
    int k = 0;

    while (i <= mid
            && j <= right) {

        if (arr[i] <= arr[j]) {

            temp[k++] = arr[i++];

        } else {

            temp[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    while (j <= right) {
        temp[k++] = arr[j++];
    }

    for (int x = 0;
         x < temp.length;
         x++) {

        arr[left + x] = temp[x];
    }
}`,

        pseudoCode: `MERGE_SORT(arr, left, right)

if left >= right
    return

mid = left + (right - left) / 2

MERGE_SORT(arr, left, mid)

MERGE_SORT(arr, mid + 1, right)

MERGE(arr, left, mid, right)


MERGE(arr, left, mid, right)

create temporary array

compare elements from left and right halves

put smaller element into temporary array

copy remaining elements

copy temporary array back to arr`,

        timeComplexity: "Best: O(n log n), Average: O(n log n), Worst: O(n log n)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 115. Quick Sort
    // =========================================================

    {
        id: 115,
        module: "sorting",
        title: "Quick Sort",
        difficulty: "Medium",

        description:
            "Sort an array using Quick Sort by selecting a pivot, partitioning the array around the pivot, and recursively sorting the left and right partitions.",

        inputArray: [10, 7, 8, 9, 1, 5],

        example:
            "Input: [10, 7, 8, 9, 1, 5]\nOutput: [1, 5, 7, 8, 9, 10]",

        explanation:
            "Quick Sort selects the last element as the pivot in this implementation. Elements smaller than the pivot are moved to the left. The pivot is then placed at its correct position, and the two partitions are sorted recursively.",

        javaCode: `static void quickSort(
        int[] arr,
        int low,
        int high) {

    if (low < high) {

        int pivotIndex =
                partition(
                        arr,
                        low,
                        high
                );

        quickSort(
                arr,
                low,
                pivotIndex - 1
        );

        quickSort(
                arr,
                pivotIndex + 1,
                high
        );
    }
}


static int partition(
        int[] arr,
        int low,
        int high) {

    int pivot = arr[high];

    int i = low - 1;

    for (int j = low;
         j < high;
         j++) {

        if (arr[j] < pivot) {

            i++;

            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}`,

        pseudoCode: `QUICK_SORT(arr, low, high)

if low < high

    pivotIndex = PARTITION(arr, low, high)

    QUICK_SORT(arr, low, pivotIndex - 1)

    QUICK_SORT(arr, pivotIndex + 1, high)


PARTITION(arr, low, high)

pivot = arr[high]

i = low - 1

for j = low to high - 1

    if arr[j] < pivot

        i++

        swap arr[i] and arr[j]

swap arr[i + 1] and arr[high]

return i + 1`,

        timeComplexity: "Best: O(n log n), Average: O(n log n), Worst: O(n²)",

        spaceComplexity: "Average: O(log n), Worst: O(n)"
    },


    // =========================================================
    // 116. Sort Array of 0s, 1s and 2s
    // =========================================================

    {
        id: 116,
        module: "sorting",
        title: "Sort Array of 0s, 1s and 2s",
        difficulty: "Medium",

        description:
            "Sort an array containing only 0s, 1s and 2s in ascending order using the Dutch National Flag algorithm without using a general-purpose sorting algorithm.",

        inputArray: [2, 0, 2, 1, 1, 0],

        example:
            "Input: [2, 0, 2, 1, 1, 0]\nOutput: [0, 0, 1, 1, 2, 2]",

        explanation:
            "The Dutch National Flag algorithm maintains three regions: 0s on the left, 1s in the middle, and 2s on the right. The low, mid and high pointers determine which region the current element belongs to.",

        javaCode: `static void sort012(int[] arr) {

    int low = 0;
    int mid = 0;
    int high = arr.length - 1;

    while (mid <= high) {

        if (arr[mid] == 0) {

            swap(arr, low, mid);

            low++;
            mid++;

        } else if (arr[mid] == 1) {

            mid++;

        } else {

            swap(arr, mid, high);

            high--;
        }
    }
}`,

        pseudoCode: `SORT_012(arr)

low = 0
mid = 0
high = n - 1

while mid <= high

    if arr[mid] == 0

        swap arr[low] and arr[mid]

        low++
        mid++

    else if arr[mid] == 1

        mid++

    else

        swap arr[mid] and arr[high]

        high--`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 117. Sort a Nearly Sorted Array
    // =========================================================

    {
        id: 117,
        module: "sorting",
        title: "Sort a Nearly Sorted Array",
        difficulty: "Medium",

        description:
            "Sort a nearly sorted array where every element is at most k positions away from its correct position using a Min Heap.",

        inputArray: [6, 5, 3, 2, 8, 10, 9],

        example:
            "Input: [6, 5, 3, 2, 8, 10, 9], k = 3\nOutput: [2, 3, 5, 6, 8, 9, 10]",

        explanation:
            "Since every element is at most k positions away from its sorted position, the smallest next element must exist within the next k + 1 elements. A Min Heap stores these candidates and repeatedly extracts the minimum.",

        javaCode: `static void sortNearlySorted(
        int[] arr,
        int k) {

    PriorityQueue<Integer> minHeap =
            new PriorityQueue<>();

    int index = 0;

    for (int i = 0;
         i <= k && i < arr.length;
         i++) {

        minHeap.add(arr[i]);
    }

    for (int i = k + 1;
         i < arr.length;
         i++) {

        arr[index++] =
                minHeap.poll();

        minHeap.add(arr[i]);
    }

    while (!minHeap.isEmpty()) {

        arr[index++] =
                minHeap.poll();
    }
}`,

        pseudoCode: `SORT_NEARLY_SORTED(arr, k)

create Min Heap

add first k + 1 elements

index = 0

for each remaining element

    remove minimum from heap

    put minimum into arr[index]

    add current element to heap

while heap is not empty

    remove minimum

    put into array`,

        timeComplexity: "O(n log k)",

        spaceComplexity: "O(k)"
    },


    // =========================================================
    // 118. Kth Smallest Element
    // =========================================================

    {
        id: 118,
        module: "sorting",
        title: "Find Kth Smallest Element",
        difficulty: "Medium",

        description:
            "Find the kth smallest element in an unsorted array using a Max Heap of size k.",

        inputArray: [7, 10, 4, 3, 20, 15],

        example:
            "Input: [7, 10, 4, 3, 20, 15], k = 3\nOutput: 7",

        explanation:
            "A Max Heap of size k keeps the k smallest elements seen so far. If the heap size becomes greater than k, the largest element is removed. At the end, the root of the Max Heap is the kth smallest element.",

        javaCode: `static int kthSmallest(
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
}`,

        pseudoCode: `KTH_SMALLEST(arr, k)

create Max Heap

for each num in arr

    add num to heap

    if heap size > k

        remove maximum

return heap root`,

        timeComplexity: "O(n log k)",

        spaceComplexity: "O(k)"
    },


    // =========================================================
    // 119. Kth Largest Element
    // =========================================================

    {
        id: 119,
        module: "sorting",
        title: "Find Kth Largest Element",
        difficulty: "Medium",

        description:
            "Find the kth largest element in an unsorted array using a Min Heap of size k.",

        inputArray: [7, 10, 4, 3, 20, 15],

        example:
            "Input: [7, 10, 4, 3, 20, 15], k = 3\nOutput: 10",

        explanation:
            "A Min Heap of size k keeps the k largest elements seen so far. If the heap contains more than k elements, the smallest element is removed. The root of the heap is therefore the kth largest element.",

        javaCode: `static int kthLargest(
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
}`,

        pseudoCode: `KTH_LARGEST(arr, k)

create Min Heap

for each num in arr

    add num to heap

    if heap size > k

        remove minimum

return heap root`,

        timeComplexity: "O(n log k)",

        spaceComplexity: "O(k)"
    },


    // =========================================================
    // 120. Merge Two Sorted Arrays
    // =========================================================

    {
        id: 120,
        module: "sorting",
        title: "Merge Two Sorted Arrays",
        difficulty: "Easy",

        description:
            "Merge two already sorted arrays into a single sorted array using the two-pointer technique.",

        inputArray: [
            [1, 3, 5, 7],
            [2, 4, 6, 8]
        ],

        example:
            "Input: [1, 3, 5, 7] and [2, 4, 6, 8]\nOutput: [1, 2, 3, 4, 5, 6, 7, 8]",

        explanation:
            "Two pointers are used to track the current elements of both sorted arrays. The smaller element is placed into the result array. Once one array is exhausted, all remaining elements from the other array are copied.",

        javaCode: `static int[] mergeSortedArrays(
        int[] arr1,
        int[] arr2) {

    int[] result =
            new int[
                    arr1.length
                            + arr2.length
            ];

    int i = 0;
    int j = 0;
    int k = 0;

    while (i < arr1.length
            && j < arr2.length) {

        if (arr1[i] <= arr2[j]) {

            result[k++] =
                    arr1[i++];

        } else {

            result[k++] =
                    arr2[j++];
        }
    }

    while (i < arr1.length) {
        result[k++] = arr1[i++];
    }

    while (j < arr2.length) {
        result[k++] = arr2[j++];
    }

    return result;
}`,

        pseudoCode: `MERGE_SORTED_ARRAYS(arr1, arr2)

create result array

i = 0
j = 0
k = 0

while i < length(arr1)
AND j < length(arr2)

    if arr1[i] <= arr2[j]

        result[k] = arr1[i]

        i++

    else

        result[k] = arr2[j]

        j++

    k++

copy remaining elements of arr1

copy remaining elements of arr2

return result`,

        timeComplexity: "O(n + m)",

        spaceComplexity: "O(n + m)"
    }
];