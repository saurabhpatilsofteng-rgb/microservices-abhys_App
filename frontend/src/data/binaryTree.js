const binaryTreeQuestions = [

    // =========================================================
    // 141. Create a Binary Tree
    // =========================================================

    {
        id: 141,
        module: "binary-tree",
        title: "Create a Binary Tree",
        difficulty: "Easy",

        description:
            "Create a sample binary tree manually using TreeNode objects and connect the left and right child nodes.",

        inputArray: [1, 2, 3, 4, 5],

        example:
            "Input: [1,2,3,4,5]\nOutput:\n        1\n       / \\\n      2   3\n     / \\\n    4   5",

        explanation:
            "Create TreeNode objects and connect them using the left and right references. The root node contains 1, its children contain 2 and 3, and node 2 has children 4 and 5.",

        javaCode: `static class TreeNode {

    int data;
    TreeNode left;
    TreeNode right;

    TreeNode(int data) {

        this.data = data;
        this.left = null;
        this.right = null;
    }
}

public static TreeNode createSampleTree() {

    TreeNode root =
            new TreeNode(1);

    root.left =
            new TreeNode(2);

    root.right =
            new TreeNode(3);

    root.left.left =
            new TreeNode(4);

    root.left.right =
            new TreeNode(5);

    return root;
}`,

        pseudoCode: `CREATE_SAMPLE_TREE()

create root with value 1

create left child with value 2
create right child with value 3

create left child of 2 with value 4
create right child of 2 with value 5

return root`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 142. Find Height of Binary Tree
    // =========================================================

    {
        id: 142,
        module: "binary-tree",
        title: "Find Height of Binary Tree",
        difficulty: "Easy",

        description:
            "Calculate the height of a binary tree using recursion. The height is the number of nodes on the longest path from the root to a leaf.",

        inputArray: [1, 2, 3, 4, 5],

        example:
            "Input Tree:\n        1\n       / \\\n      2   3\n     / \\\n    4   5\n\nOutput: 3",

        explanation:
            "Recursively calculate the height of the left and right subtrees. The height of the current node is 1 plus the maximum height of its two subtrees. An empty tree has height 0.",

        javaCode: `static int height(TreeNode root) {

    if (root == null) {
        return 0;
    }

    int leftHeight =
            height(root.left);

    int rightHeight =
            height(root.right);

    return 1 +
            Math.max(
                    leftHeight,
                    rightHeight
            );
}`,

        pseudoCode: `HEIGHT(root)

if root is null
    return 0

leftHeight = HEIGHT(root.left)
rightHeight = HEIGHT(root.right)

return 1 + max(
    leftHeight,
    rightHeight
)`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(h)"
    },


    // =========================================================
    // 143. Preorder Traversal
    // =========================================================

    {
        id: 143,
        module: "binary-tree",
        title: "Preorder Traversal",
        difficulty: "Easy",

        description:
            "Traverse a binary tree in preorder using the order Root → Left → Right.",

        inputArray: [1, 2, 3, 4, 5],

        example:
            "Input Tree:\n        1\n       / \\\n      2   3\n     / \\\n    4   5\n\nPreorder: 1 2 4 5 3",

        explanation:
            "In preorder traversal, process the current node first, then recursively traverse the left subtree followed by the right subtree.",

        javaCode: `static void preorder(TreeNode root) {

    if (root == null) {
        return;
    }

    System.out.print(
            root.data + " "
    );

    preorder(root.left);

    preorder(root.right);
}`,

        pseudoCode: `PREORDER(root)

if root is null
    return

print root.data

PREORDER(root.left)

PREORDER(root.right)`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(h)"
    },


    // =========================================================
    // 144. Inorder Traversal
    // =========================================================

    {
        id: 144,
        module: "binary-tree",
        title: "Inorder Traversal",
        difficulty: "Easy",

        description:
            "Traverse a binary tree in inorder using the order Left → Root → Right.",

        inputArray: [1, 2, 3, 4, 5],

        example:
            "Input Tree:\n        1\n       / \\\n      2   3\n     / \\\n    4   5\n\nInorder: 4 2 5 1 3",

        explanation:
            "In inorder traversal, first visit the left subtree, then process the current node, and finally visit the right subtree.",

        javaCode: `static void inorder(TreeNode root) {

    if (root == null) {
        return;
    }

    inorder(root.left);

    System.out.print(
            root.data + " "
    );

    inorder(root.right);
}`,

        pseudoCode: `INORDER(root)

if root is null
    return

INORDER(root.left)

print root.data

INORDER(root.right)`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(h)"
    },


    // =========================================================
    // 145. Postorder Traversal
    // =========================================================

    {
        id: 145,
        module: "binary-tree",
        title: "Postorder Traversal",
        difficulty: "Easy",

        description:
            "Traverse a binary tree in postorder using the order Left → Right → Root.",

        inputArray: [1, 2, 3, 4, 5],

        example:
            "Input Tree:\n        1\n       / \\\n      2   3\n     / \\\n    4   5\n\nPostorder: 4 5 2 3 1",

        explanation:
            "In postorder traversal, recursively visit the left subtree, then the right subtree, and process the current node at the end.",

        javaCode: `static void postorder(TreeNode root) {

    if (root == null) {
        return;
    }

    postorder(root.left);

    postorder(root.right);

    System.out.print(
            root.data + " "
    );
}`,

        pseudoCode: `POSTORDER(root)

if root is null
    return

POSTORDER(root.left)

POSTORDER(root.right)

print root.data`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(h)"
    },


    // =========================================================
    // 146. Level Order Traversal
    // =========================================================

    {
        id: 146,
        module: "binary-tree",
        title: "Level Order Traversal",
        difficulty: "Medium",

        description:
            "Traverse a binary tree level by level from left to right using a Queue.",

        inputArray: [1, 2, 3, 4, 5],

        example:
            "Input Tree:\n        1\n       / \\\n      2   3\n     / \\\n    4   5\n\nLevel Order: 1 2 3 4 5",

        explanation:
            "Use a queue to process nodes in breadth-first order. Add the root first, remove one node at a time, and add its children to the queue.",

        javaCode: `static void levelOrder(TreeNode root) {

    if (root == null) {
        return;
    }

    Queue<TreeNode> queue =
            new LinkedList<>();

    queue.offer(root);

    while (!queue.isEmpty()) {

        TreeNode current =
                queue.poll();

        System.out.print(
                current.data + " "
        );

        if (current.left != null) {

            queue.offer(
                    current.left
            );
        }

        if (current.right != null) {

            queue.offer(
                    current.right
            );
        }
    }
}`,

        pseudoCode: `LEVEL_ORDER(root)

if root is null
    return

create empty queue

add root to queue

while queue is not empty

    current = remove from queue

    print current.data

    if current.left exists
        add current.left

    if current.right exists
        add current.right`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(w)"
    },


    // =========================================================
    // 147. Count Nodes in Binary Tree
    // =========================================================

    {
        id: 147,
        module: "binary-tree",
        title: "Count Nodes in Binary Tree",
        difficulty: "Easy",

        description:
            "Count the total number of nodes present in a binary tree using recursion.",

        inputArray: [1, 2, 3, 4, 5],

        example:
            "Input Tree:\n        1\n       / \\\n      2   3\n     / \\\n    4   5\n\nOutput: 5",

        explanation:
            "For every node, count the current node as 1 and recursively count the nodes in the left and right subtrees.",

        javaCode: `static int countNodes(TreeNode root) {

    if (root == null) {
        return 0;
    }

    return 1
            + countNodes(root.left)
            + countNodes(root.right);
}`,

        pseudoCode: `COUNT_NODES(root)

if root is null
    return 0

leftCount =
    COUNT_NODES(root.left)

rightCount =
    COUNT_NODES(root.right)

return 1 + leftCount + rightCount`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(h)"
    },


    // =========================================================
    // 148. Find Sum of All Nodes
    // =========================================================

    {
        id: 148,
        module: "binary-tree",
        title: "Find Sum of All Nodes",
        difficulty: "Easy",

        description:
            "Calculate the sum of all node values in a binary tree.",

        inputArray: [1, 2, 3, 4, 5],

        example:
            "Input Tree:\n        1\n       / \\\n      2   3\n     / \\\n    4   5\n\nOutput: 15",

        explanation:
            "The sum of a tree is the current node's value plus the sum of the left subtree and the sum of the right subtree.",

        javaCode: `static int sumNodes(TreeNode root) {

    if (root == null) {
        return 0;
    }

    return root.data
            + sumNodes(root.left)
            + sumNodes(root.right);
}`,

        pseudoCode: `SUM_NODES(root)

if root is null
    return 0

leftSum =
    SUM_NODES(root.left)

rightSum =
    SUM_NODES(root.right)

return root.data + leftSum + rightSum`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(h)"
    },


    // =========================================================
    // 149. Find Maximum Value in Binary Tree
    // =========================================================

    {
        id: 149,
        module: "binary-tree",
        title: "Find Maximum Value in Binary Tree",
        difficulty: "Easy",

        description:
            "Find the maximum value stored in any node of a binary tree.",

        inputArray: [1, 2, 3, 4, 5],

        example:
            "Input Tree:\n        1\n       / \\\n      2   3\n     / \\\n    4   5\n\nOutput: 5",

        explanation:
            "Recursively find the maximum value in the left subtree and right subtree, then compare both values with the current node value.",

        javaCode: `static int findMaximum(TreeNode root) {

    if (root == null) {
        return Integer.MIN_VALUE;
    }

    int leftMax =
            findMaximum(root.left);

    int rightMax =
            findMaximum(root.right);

    return Math.max(
            root.data,
            Math.max(
                    leftMax,
                    rightMax
            )
    );
}`,

        pseudoCode: `FIND_MAXIMUM(root)

if root is null
    return MIN_VALUE

leftMax =
    FIND_MAXIMUM(root.left)

rightMax =
    FIND_MAXIMUM(root.right)

return max(
    root.data,
    leftMax,
    rightMax
)`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(h)"
    },


    // =========================================================
    // 150. Search Element in Binary Tree
    // =========================================================

    {
        id: 150,
        module: "binary-tree",
        title: "Search Element in Binary Tree",
        difficulty: "Easy",

        description:
            "Search for a given value in a binary tree and determine whether the value exists.",

        inputArray: {
            tree: [1, 2, 3, 4, 5],
            target: 5
        },

        example:
            "Input Tree:\n        1\n       / \\\n      2   3\n     / \\\n    4   5\n\nTarget: 5\nOutput: true",

        explanation:
            "Since a normal binary tree is not necessarily sorted, search both the left and right subtrees. Return true when the current node contains the target value.",

        javaCode: `static boolean search(
        TreeNode root,
        int target) {

    if (root == null) {
        return false;
    }

    if (root.data == target) {
        return true;
    }

    return search(
            root.left,
            target
    )
    ||
    search(
            root.right,
            target
    );
}`,

        pseudoCode: `SEARCH(root, target)

if root is null
    return false

if root.data == target
    return true

if SEARCH(root.left, target)
    return true

return SEARCH(root.right, target)`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(h)"
    }
];