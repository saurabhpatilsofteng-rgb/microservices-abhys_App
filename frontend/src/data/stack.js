const stackQuestions = [

    // =========================================================
    // 81. Implement Stack using Array
    // =========================================================

    {
        id: 81,
        module: "stack",
        title: "Implement Stack using Array",
        difficulty: "Easy",

        description:
            "Implement a stack using an array with push, pop, peek, and isEmpty operations.",

        inputArray: [10, 20, 30],
        example: {
            input: "Push 10, 20, 30, then peek and pop",
            output: "Peek: 30, Pop: 30"
        },

        explanation:
            "A stack follows the LIFO (Last In, First Out) principle. Maintain a top variable representing the index of the top element. Push increments top and stores the value, while pop returns the top value and decrements top.",

        javaCode: `
static class ArrayStack {

    int[] stack;
    int top = -1;

    ArrayStack(int size) {
        stack = new int[size];
    }

    void push(int value) {

        if (top == stack.length - 1) {
            System.out.println("Stack Overflow");
            return;
        }

        stack[++top] = value;
    }

    int pop() {

        if (top == -1) {
            System.out.println("Stack Underflow");
            return -1;
        }

        return stack[top--];
    }

    int peek() {

        if (top == -1) {
            return -1;
        }

        return stack[top];
    }

    boolean isEmpty() {
        return top == -1;
    }
}
`,

        pseudoCode: `
START

Create an array for stack
Set top = -1

PUSH(value):
    IF top is last index
        Print "Stack Overflow"
        RETURN
    END IF

    Increment top
    stack[top] = value

POP():
    IF top = -1
        Print "Stack Underflow"
        RETURN
    END IF

    value = stack[top]
    Decrement top
    RETURN value

PEEK():
    IF top = -1
        RETURN
    END IF

    RETURN stack[top]

isEmpty():
    RETURN top = -1

END
`,

        timeComplexity: "Push: O(1), Pop: O(1), Peek: O(1)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 82. Implement Stack using Linked List
    // =========================================================

    {
        id: 82,
        module: "stack",
        title: "Implement Stack using Linked List",
        difficulty: "Easy",

        description:
            "Implement a stack using a singly linked list with push, pop, peek, and isEmpty operations.",

        inputArray: [100, 200, 300],
        example: {
            input: "Push 100, 200, 300, then peek and pop",
            output: "Peek: 300, Pop: 300"
        },

        explanation:
            "Use the head of the linked list as the stack top. Inserting a node at the beginning performs push, and removing the first node performs pop. Both operations take constant time.",

        javaCode: `
static class StackNode {

    int data;
    StackNode next;

    StackNode(int data) {
        this.data = data;
    }
}

static class LinkedListStack {

    StackNode top;

    void push(int value) {

        StackNode newNode =
                new StackNode(value);

        newNode.next = top;
        top = newNode;
    }

    int pop() {

        if (top == null) {
            System.out.println("Stack Underflow");
            return -1;
        }

        int value = top.data;
        top = top.next;

        return value;
    }

    int peek() {

        if (top == null) {
            return -1;
        }

        return top.data;
    }

    boolean isEmpty() {
        return top == null;
    }
}
`,

        pseudoCode: `
START

Set top = null

PUSH(value):
    Create new node
    newNode.data = value
    newNode.next = top
    top = newNode

POP():
    IF top is null
        Print "Stack Underflow"
        RETURN
    END IF

    value = top.data
    top = top.next
    RETURN value

PEEK():
    IF top is null
        RETURN
    END IF

    RETURN top.data

isEmpty():
    RETURN top is null

END
`,

        timeComplexity: "Push: O(1), Pop: O(1), Peek: O(1)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 83. Reverse String using Stack
    // =========================================================

    {
        id: 83,
        module: "stack",
        title: "Reverse String using Stack",
        difficulty: "Easy",

        description:
            "Reverse a string using a stack data structure.",

        inputArray: ["H", "E", "L", "L", "O"],
        example: {
            input: "HELLO",
            output: "OLLEH"
        },

        explanation:
            "Push every character of the string onto the stack. Since a stack follows LIFO order, popping the characters produces the string in reverse order.",

        javaCode: `
static String reverseString(String str) {

    Stack<Character> stack =
            new Stack<>();

    for (char ch : str.toCharArray()) {
        stack.push(ch);
    }

    StringBuilder result =
            new StringBuilder();

    while (!stack.isEmpty()) {
        result.append(stack.pop());
    }

    return result.toString();
}
`,

        pseudoCode: `
START

Create empty stack

FOR each character in string
    Push character into stack
END FOR

Create empty result

WHILE stack is not empty
    Pop character
    Append character to result
END WHILE

Return result

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 84. Check Balanced Parentheses
    // =========================================================

    {
        id: 84,
        module: "stack",
        title: "Check Balanced Parentheses",
        difficulty: "Easy",

        description:
            "Check whether all parentheses, curly braces, and square brackets in a string are properly balanced.",

        inputArray: ["{", "[", "(", ")", "]", "}"],
        example: {
            input: "{[()]}",
            output: "true"
        },

        explanation:
            "Push every opening bracket onto the stack. When a closing bracket appears, compare it with the top opening bracket. If they do not match, the expression is unbalanced. At the end, the stack must be empty.",

        javaCode: `
static boolean isBalanced(String str) {

    Stack<Character> stack =
            new Stack<>();

    for (char ch : str.toCharArray()) {

        if (ch == '(' ||
            ch == '{' ||
            ch == '[') {

            stack.push(ch);
        }

        else if (ch == ')' ||
                 ch == '}' ||
                 ch == ']') {

            if (stack.isEmpty()) {
                return false;
            }

            char top = stack.pop();

            if (ch == ')' && top != '(') {
                return false;
            }

            if (ch == '}' && top != '{') {
                return false;
            }

            if (ch == ']' && top != '[') {
                return false;
            }
        }
    }

    return stack.isEmpty();
}
`,

        pseudoCode: `
START

Create empty stack

FOR each character ch

    IF ch is opening bracket
        Push ch into stack

    ELSE IF ch is closing bracket

        IF stack is empty
            RETURN false
        END IF

        top = Pop stack

        IF brackets do not match
            RETURN false
        END IF

    END IF

END FOR

IF stack is empty
    RETURN true
ELSE
    RETURN false
END IF

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 85. Next Greater Element
    // =========================================================

    {
        id: 85,
        module: "stack",
        title: "Next Greater Element",
        difficulty: "Medium",

        description:
            "For every element in an array, find the first greater element appearing to its right. Return -1 if no greater element exists.",

        inputArray: [4, 5, 2, 10, 8],
        example: {
            input: "[4, 5, 2, 10, 8]",
            output: "[5, 10, 10, -1, -1]"
        },

        explanation:
            "Traverse the array from right to left while maintaining a monotonic decreasing stack. Remove elements that are smaller than or equal to the current element. The remaining stack top is the next greater element.",

        javaCode: `
static int[] nextGreaterElement(int[] arr) {

    int[] result =
            new int[arr.length];

    Arrays.fill(result, -1);

    Stack<Integer> stack =
            new Stack<>();

    for (int i = arr.length - 1;
         i >= 0;
         i--) {

        while (!stack.isEmpty() &&
               stack.peek() <= arr[i]) {

            stack.pop();
        }

        if (!stack.isEmpty()) {
            result[i] = stack.peek();
        }

        stack.push(arr[i]);
    }

    return result;
}
`,

        pseudoCode: `
START

Create result array
Fill result with -1

Create empty stack

FOR i from n - 1 down to 0

    WHILE stack is not empty
          AND stack.top <= arr[i]

        Pop stack

    END WHILE

    IF stack is not empty
        result[i] = stack.top
    END IF

    Push arr[i] into stack

END FOR

Return result

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 86. Next Smaller Element
    // =========================================================

    {
        id: 86,
        module: "stack",
        title: "Next Smaller Element",
        difficulty: "Medium",

        description:
            "For every element in an array, find the first smaller element appearing to its right. Return -1 if no smaller element exists.",

        inputArray: [4, 8, 5, 2, 25],
        example: {
            input: "[4, 8, 5, 2, 25]",
            output: "[2, 5, 2, -1, -1]"
        },

        explanation:
            "Traverse the array from right to left. Maintain a monotonic increasing stack. Remove elements greater than or equal to the current element. The remaining top is the next smaller element.",

        javaCode: `
static int[] nextSmallerElement(int[] arr) {

    int[] result =
            new int[arr.length];

    Arrays.fill(result, -1);

    Stack<Integer> stack =
            new Stack<>();

    for (int i = arr.length - 1;
         i >= 0;
         i--) {

        while (!stack.isEmpty() &&
               stack.peek() >= arr[i]) {

            stack.pop();
        }

        if (!stack.isEmpty()) {
            result[i] = stack.peek();
        }

        stack.push(arr[i]);
    }

    return result;
}
`,

        pseudoCode: `
START

Create result array
Fill result with -1

Create empty stack

FOR i from n - 1 down to 0

    WHILE stack is not empty
          AND stack.top >= arr[i]

        Pop stack

    END WHILE

    IF stack is not empty
        result[i] = stack.top
    END IF

    Push arr[i] into stack

END FOR

Return result

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 87. Implement Min Stack
    // =========================================================

    {
        id: 87,
        module: "stack",
        title: "Implement Min Stack",
        difficulty: "Medium",

        description:
            "Implement a stack that supports push, pop, top, and retrieving the minimum element in O(1) time.",

        inputArray: [5, 3, 7, 2],
        example: {
            input: "Push 5, 3, 7, 2; getMin; pop",
            output: "Minimum: 2, Minimum after pop: 3"
        },

        explanation:
            "Use two stacks. The normal stack stores all values, while the minStack stores the minimum value at each required level. Therefore, the minimum can always be obtained from minStack.peek().",

        javaCode: `
static class MinStack {

    Stack<Integer> stack =
            new Stack<>();

    Stack<Integer> minStack =
            new Stack<>();

    void push(int value) {

        stack.push(value);

        if (minStack.isEmpty() ||
            value <= minStack.peek()) {

            minStack.push(value);
        }
    }

    int pop() {

        if (stack.isEmpty()) {
            return -1;
        }

        int value = stack.pop();

        if (value == minStack.peek()) {
            minStack.pop();
        }

        return value;
    }

    int top() {

        if (stack.isEmpty()) {
            return -1;
        }

        return stack.peek();
    }

    int getMin() {

        if (minStack.isEmpty()) {
            return -1;
        }

        return minStack.peek();
    }
}
`,

        pseudoCode: `
START

Create stack
Create minStack

PUSH(value):

    Push value into stack

    IF minStack is empty
       OR value <= minStack.top

        Push value into minStack

    END IF

POP():

    value = Pop stack

    IF value = minStack.top
        Pop minStack
    END IF

    Return value

TOP():
    Return stack.top

GET_MIN():
    Return minStack.top

END
`,

        timeComplexity: "Push: O(1), Pop: O(1), Top: O(1), GetMin: O(1)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 88. Evaluate Postfix Expression
    // =========================================================

    {
        id: 88,
        module: "stack",
        title: "Evaluate Postfix Expression",
        difficulty: "Medium",

        description:
            "Evaluate a postfix expression containing integers and the operators +, -, *, and / using a stack.",

        inputArray: ["2", "3", "1", "*", "+", "9", "-"],
        example: {
            input: "2 3 1 * + 9 -",
            output: "-4"
        },

        explanation:
            "Push every number onto the stack. When an operator is encountered, pop the second operand first and then the first operand. Apply the operator and push the result back onto the stack.",

        javaCode: `
static int evaluatePostfix(String expression) {

    Stack<Integer> stack =
            new Stack<>();

    String[] tokens =
            expression.split(" ");

    for (String token : tokens) {

        if (isNumber(token)) {

            stack.push(
                    Integer.parseInt(token)
            );

        } else {

            int second = stack.pop();
            int first = stack.pop();

            int result = 0;

            switch (token) {

                case "+":
                    result = first + second;
                    break;

                case "-":
                    result = first - second;
                    break;

                case "*":
                    result = first * second;
                    break;

                case "/":
                    result = first / second;
                    break;
            }

            stack.push(result);
        }
    }

    return stack.pop();
}

static boolean isNumber(String str) {

    try {
        Integer.parseInt(str);
        return true;

    } catch (NumberFormatException e) {
        return false;
    }
}
`,

        pseudoCode: `
START

Create empty stack

FOR each token

    IF token is a number
        Push token into stack

    ELSE
        second = Pop stack
        first = Pop stack

        result = first operator second

        Push result into stack
    END IF

END FOR

Return Pop stack

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 89. Infix to Postfix
    // =========================================================

    {
        id: 89,
        module: "stack",
        title: "Convert Infix Expression to Postfix",
        difficulty: "Medium",

        description:
            "Convert an infix arithmetic expression into postfix notation using a stack and operator precedence.",

        inputArray: ["A", "+", "B", "*", "(", "C", "-", "D", ")"],
        example: {
            input: "A+B*(C-D)",
            output: "ABCD-*+"
        },

        explanation:
            "Operands are directly added to the result. Operators are pushed onto the stack according to precedence. Opening brackets are pushed directly, while closing brackets cause operators to be popped until the matching opening bracket is found.",

        javaCode: `
static String infixToPostfix(String expression) {

    Stack<Character> stack =
            new Stack<>();

    StringBuilder result =
            new StringBuilder();

    for (char ch : expression.toCharArray()) {

        if (Character.isLetterOrDigit(ch)) {

            result.append(ch);
        }

        else if (ch == '(') {

            stack.push(ch);
        }

        else if (ch == ')') {

            while (!stack.isEmpty() &&
                   stack.peek() != '(') {

                result.append(stack.pop());
            }

            if (!stack.isEmpty()) {
                stack.pop();
            }
        }

        else {

            while (!stack.isEmpty() &&
                   stack.peek() != '(' &&
                   precedence(stack.peek())
                   >= precedence(ch)) {

                result.append(stack.pop());
            }

            stack.push(ch);
        }
    }

    while (!stack.isEmpty()) {
        result.append(stack.pop());
    }

    return result.toString();
}

static int precedence(char operator) {

    switch (operator) {

        case '+':
        case '-':
            return 1;

        case '*':
        case '/':
            return 2;

        case '^':
            return 3;
    }

    return -1;
}
`,

        pseudoCode: `
START

Create empty operator stack
Create empty result

FOR each character ch

    IF ch is operand
        Add ch to result

    ELSE IF ch = '('
        Push ch into stack

    ELSE IF ch = ')'

        WHILE stack.top != '('
            Pop operator
            Add operator to result
        END WHILE

        Pop '('

    ELSE
        WHILE stack is not empty
              AND top is not '('
              AND precedence(top) >= precedence(ch)

            Pop operator
            Add operator to result

        END WHILE

        Push ch into stack

END FOR

WHILE stack is not empty
    Pop operator
    Add operator to result
END WHILE

Return result

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 90. Largest Rectangle in Histogram
    // =========================================================

    {
        id: 90,
        module: "stack",
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",

        description:
            "Find the largest rectangular area that can be formed in a histogram using a stack.",

        inputArray: [2, 1, 5, 6, 2, 3],
        example: {
            input: "[2, 1, 5, 6, 2, 3]",
            output: "10"
        },

        explanation:
            "Maintain a stack of indices representing increasing bar heights. When a smaller height is encountered, calculate the area of rectangles using the popped bars as the limiting height. The width is determined by the current index and the new stack top.",

        javaCode: `
static int largestRectangle(int[] heights) {

    Stack<Integer> stack =
            new Stack<>();

    int maxArea = 0;

    for (int i = 0;
         i <= heights.length;
         i++) {

        int currentHeight;

        if (i == heights.length) {
            currentHeight = 0;
        } else {
            currentHeight = heights[i];
        }

        while (!stack.isEmpty() &&
               currentHeight <
               heights[stack.peek()]) {

            int height =
                    heights[stack.pop()];

            int width;

            if (stack.isEmpty()) {
                width = i;
            } else {
                width =
                    i - stack.peek() - 1;
            }

            int area =
                    height * width;

            maxArea =
                    Math.max(maxArea, area);
        }

        stack.push(i);
    }

    return maxArea;
}
`,

        pseudoCode: `
START

Create empty stack
Set maxArea = 0

FOR i from 0 to n

    IF i = n
        currentHeight = 0
    ELSE
        currentHeight = heights[i]
    END IF

    WHILE stack is not empty
          AND currentHeight <
              heights[stack.top]

        height = Pop stack

        IF stack is empty
            width = i
        ELSE
            width = i - stack.top - 1
        END IF

        area = height * width

        maxArea = maximum(maxArea, area)

    END WHILE

    Push i into stack

END FOR

Return maxArea

END
`,

        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    }

];