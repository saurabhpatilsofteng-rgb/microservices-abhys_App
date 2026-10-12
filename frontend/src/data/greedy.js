const greedyQuestions = [

    // =========================================================
    // 171. Activity Selection
    // =========================================================

    {
        id: 171,
        module: "greedy",
        title: "Activity Selection",
        difficulty: "Medium",

        description:
            "Select the maximum number of non-overlapping activities when each activity has a start time and finish time. Use the greedy strategy of selecting the activity that finishes earliest.",

        inputArray: {
            start: [1, 3, 0, 5, 8, 5],
            finish: [2, 4, 6, 7, 9, 9]
        },

        example:
            "Input: start = [1,3,0,5,8,5], finish = [2,4,6,7,9,9]\nOutput: 4",

        explanation:
            "Sort all activities by finish time. Select the first activity and then select every activity whose start time is greater than or equal to the finish time of the previously selected activity.",

        javaCode: `static int activitySelection(
        int[] start,
        int[] finish) {

    int n = start.length;

    int[][] activities =
            new int[n][2];

    for (int i = 0; i < n; i++) {

        activities[i][0] = start[i];
        activities[i][1] = finish[i];
    }

    Arrays.sort(
            activities,
            (a, b) ->
                    Integer.compare(
                            a[1],
                            b[1]
                    )
    );

    int count = 1;

    int lastFinish =
            activities[0][1];

    for (int i = 1; i < n; i++) {

        if (activities[i][0]
                >= lastFinish) {

            count++;

            lastFinish =
                    activities[i][1];
        }
    }

    return count;
}`,

        pseudoCode: `ACTIVITY_SELECTION(start, finish)

create activities using start and finish

sort activities by finish time

count = 1
lastFinish = finish time of first activity

for each remaining activity

    if start time >= lastFinish

        count++
        lastFinish = current finish time

return count`,

        timeComplexity: "O(n log n)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 172. Fractional Knapsack
    // =========================================================

    {
        id: 172,
        module: "greedy",
        title: "Fractional Knapsack",
        difficulty: "Medium",

        description:
            "Maximize the total value placed into a knapsack when fractions of items are allowed. Select items according to the highest value-to-weight ratio.",

        inputArray: {
            weights: [10, 20, 30],
            values: [60, 100, 120],
            capacity: 50
        },

        example:
            "Input: weights = [10,20,30], values = [60,100,120], capacity = 50\nOutput: 240.0",

        explanation:
            "Calculate value/weight for every item and sort items by decreasing ratio. Take the complete item when possible. If the remaining capacity cannot hold the complete item, take the required fraction.",

        javaCode: `static double fractionalKnapsack(
        int[] weights,
        int[] values,
        int capacity) {

    int n = weights.length;

    double[][] items =
            new double[n][3];

    for (int i = 0; i < n; i++) {

        items[i][0] = weights[i];
        items[i][1] = values[i];

        items[i][2] =
                (double) values[i]
                / weights[i];
    }

    Arrays.sort(
            items,
            (a, b) ->
                    Double.compare(
                            b[2],
                            a[2]
                    )
    );

    double totalValue = 0;

    for (int i = 0; i < n; i++) {

        int weight =
                (int) items[i][0];

        int value =
                (int) items[i][1];

        double ratio =
                items[i][2];

        if (capacity >= weight) {

            capacity -= weight;

            totalValue += value;

        } else {

            totalValue +=
                    ratio * capacity;

            break;
        }
    }

    return totalValue;
}`,

        pseudoCode: `FRACTIONAL_KNAPSACK(weights, values, capacity)

calculate value/weight ratio for every item

sort items by decreasing ratio

totalValue = 0

for each item

    if capacity >= item weight

        take complete item
        reduce capacity
        add item value

    else

        take fraction of item
        add ratio × remaining capacity
        break

return totalValue`,

        timeComplexity: "O(n log n)",

        spaceComplexity: "O(n)"
    },


    // =========================================================
    // 173. Job Sequencing Problem
    // =========================================================

    {
        id: 173,
        module: "greedy",
        title: "Job Sequencing Problem",
        difficulty: "Medium",

        description:
            "Schedule jobs with deadlines and profits so that the total profit is maximized. Each job takes one unit of time and must be completed before or on its deadline.",

        inputArray: [
            { id: "J1", deadline: 2, profit: 100 },
            { id: "J2", deadline: 1, profit: 19 },
            { id: "J3", deadline: 2, profit: 27 },
            { id: "J4", deadline: 1, profit: 25 },
            { id: "J5", deadline: 3, profit: 15 }
        ],

        example:
            "Jobs: J1(2,100), J2(1,19), J3(2,27), J4(1,25), J5(3,15)\nMaximum Profit: 142",

        explanation:
            "Sort jobs by decreasing profit. For every job, try to place it in the latest available slot before its deadline. This leaves earlier slots available for jobs with tighter deadlines.",

        javaCode: `static class Job {

    String id;
    int deadline;
    int profit;

    Job(
            String id,
            int deadline,
            int profit) {

        this.id = id;
        this.deadline = deadline;
        this.profit = profit;
    }
}

static int jobSequencing(Job[] jobs) {

    Arrays.sort(
            jobs,
            (a, b) ->
                    Integer.compare(
                            b.profit,
                            a.profit
                    )
    );

    int maxDeadline = 0;

    for (Job job : jobs) {

        maxDeadline =
                Math.max(
                        maxDeadline,
                        job.deadline
                );
    }

    boolean[] slots =
            new boolean[maxDeadline + 1];

    int totalProfit = 0;

    for (Job job : jobs) {

        for (int slot = job.deadline;
             slot >= 1;
             slot--) {

            if (!slots[slot]) {

                slots[slot] = true;

                totalProfit +=
                        job.profit;

                break;
            }
        }
    }

    return totalProfit;
}`,

        pseudoCode: `JOB_SEQUENCING(jobs)

sort jobs by decreasing profit

find maximum deadline

create empty time slots

totalProfit = 0

for each job

    for slot from deadline down to 1

        if slot is empty

            schedule job
            mark slot occupied
            totalProfit += profit
            break

return totalProfit`,

        timeComplexity: "O(n log n + n × d)",

        spaceComplexity: "O(d)"
    },


    // =========================================================
    // 174. Minimum Number of Coins
    // =========================================================

    {
        id: 174,
        module: "greedy",
        title: "Minimum Number of Coins",
        difficulty: "Easy",

        description:
            "Find the minimum number of coins required to make a given amount using a greedy approach by selecting the largest available denomination first.",

        inputArray: {
            coins: [1, 2, 5, 10],
            amount: 18
        },

        example:
            "Input: coins = [1,2,5,10], amount = 18\nOutput: 5\nCoins: 10 + 5 + 2 + 1",

        explanation:
            "Sort the coin denominations and repeatedly select the largest coin that does not exceed the remaining amount. This greedy method works for standard coin systems such as Indian/US-style denominations, but not for every arbitrary coin system.",

        javaCode: `static int minimumCoins(
        int[] coins,
        int amount) {

    Arrays.sort(coins);

    int count = 0;

    for (int i = coins.length - 1;
         i >= 0;
         i--) {

        while (amount >= coins[i]) {

            amount -= coins[i];

            count++;
        }
    }

    if (amount != 0) {
        return -1;
    }

    return count;
}`,

        pseudoCode: `MINIMUM_COINS(coins, amount)

sort coins

count = 0

for coins from largest to smallest

    while amount >= coin

        amount = amount - coin
        count++

if amount != 0

    return -1

return count`,

        timeComplexity: "O(n log n + amount / minCoin)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 175. Assign Cookies
    // =========================================================

    {
        id: 175,
        module: "greedy",
        title: "Assign Cookies",
        difficulty: "Easy",

        description:
            "Maximize the number of children who can be satisfied by assigning each child at most one cookie. Each child has a minimum cookie size requirement.",

        inputArray: {
            children: [1, 2, 3],
            cookies: [1, 1]
        },

        example:
            "Input: children = [1,2,3], cookies = [1,1]\nOutput: 1",

        explanation:
            "Sort both arrays. Use the smallest available cookie to satisfy the least demanding child whenever possible. Move to the next cookie after every attempt.",

        javaCode: `static int assignCookies(
        int[] children,
        int[] cookies) {

    Arrays.sort(children);
    Arrays.sort(cookies);

    int child = 0;
    int cookie = 0;

    while (child < children.length
            && cookie < cookies.length) {

        if (cookies[cookie]
                >= children[child]) {

            child++;
        }

        cookie++;
    }

    return child;
}`,

        pseudoCode: `ASSIGN_COOKIES(children, cookies)

sort children
sort cookies

child = 0
cookie = 0

while child < number of children
      AND cookie < number of cookies

    if cookie size >= child requirement

        child++

    cookie++

return child`,

        timeComplexity: "O(n log n + m log m)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 176. Jump Game
    // =========================================================

    {
        id: 176,
        module: "greedy",
        title: "Jump Game",
        difficulty: "Medium",

        description:
            "Determine whether the last index of an array can be reached when each element represents the maximum jump length from that position.",

        inputArray: [2, 3, 1, 1, 4],

        example:
            "Input: [2,3,1,1,4]\nOutput: true",

        explanation:
            "Maintain the farthest index that can currently be reached. If the current index is greater than this value, it cannot be reached. Otherwise update the farthest reachable index.",

        javaCode: `static boolean canJump(int[] nums) {

    int farthest = 0;

    for (int i = 0;
         i < nums.length;
         i++) {

        if (i > farthest) {
            return false;
        }

        farthest =
                Math.max(
                        farthest,
                        i + nums[i]
                );

        if (farthest
                >= nums.length - 1) {

            return true;
        }
    }

    return true;
}`,

        pseudoCode: `CAN_JUMP(nums)

farthest = 0

for each index i

    if i > farthest

        return false

    farthest =
        max(farthest, i + nums[i])

    if farthest >= last index

        return true

return true`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 177. Gas Station
    // =========================================================

    {
        id: 177,
        module: "greedy",
        title: "Gas Station",
        difficulty: "Medium",

        description:
            "Find the starting gas station from which a car can complete a circular route. Return -1 if the total available gas is less than the total cost.",

        inputArray: {
            gas: [1, 2, 3, 4, 5],
            cost: [3, 4, 5, 1, 2]
        },

        example:
            "Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]\nOutput: 3",

        explanation:
            "If the current starting point causes the running gas balance to become negative at station i, no station between the current start and i can be a valid start. Therefore set the next station as the new candidate start.",

        javaCode: `static int gasStation(
        int[] gas,
        int[] cost) {

    int totalGas = 0;
    int totalCost = 0;

    int currentGas = 0;

    int start = 0;

    for (int i = 0;
         i < gas.length;
         i++) {

        totalGas += gas[i];

        totalCost += cost[i];

        currentGas +=
                gas[i] - cost[i];

        if (currentGas < 0) {

            start = i + 1;

            currentGas = 0;
        }
    }

    if (totalGas < totalCost) {
        return -1;
    }

    return start;
}`,

        pseudoCode: `GAS_STATION(gas, cost)

totalGas = 0
totalCost = 0
currentGas = 0
start = 0

for each station i

    totalGas += gas[i]
    totalCost += cost[i]

    currentGas += gas[i] - cost[i]

    if currentGas < 0

        start = i + 1
        currentGas = 0

if totalGas < totalCost

    return -1

return start`,

        timeComplexity: "O(n)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 178. Meeting Rooms
    // =========================================================

    {
        id: 178,
        module: "greedy",
        title: "Meeting Rooms",
        difficulty: "Easy",

        description:
            "Determine whether a person can attend all meetings without any time overlap.",

        inputArray: [
            [0, 30],
            [5, 10],
            [15, 20]
        ],

        example:
            "Input: [[0,30],[5,10],[15,20]]\nOutput: false",

        explanation:
            "Sort meetings by their start time. If the start time of a meeting is less than the finish time of the previous meeting, the two meetings overlap.",

        javaCode: `static boolean canAttendAllMeetings(
        int[][] meetings) {

    Arrays.sort(
            meetings,
            (a, b) ->
                    Integer.compare(
                            a[0],
                            b[0]
                    )
    );

    for (int i = 1;
         i < meetings.length;
         i++) {

        if (meetings[i][0]
                < meetings[i - 1][1]) {

            return false;
        }
    }

    return true;
}`,

        pseudoCode: `CAN_ATTEND_ALL_MEETINGS(meetings)

sort meetings by start time

for i from 1 to meetings.length - 1

    if current start <
       previous finish

        return false

return true`,

        timeComplexity: "O(n log n)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 179. Minimum Platforms
    // =========================================================

    {
        id: 179,
        module: "greedy",
        title: "Minimum Platforms",
        difficulty: "Medium",

        description:
            "Find the minimum number of railway platforms required so that no train has to wait. Use sorted arrival and departure times with a two-pointer technique.",

        inputArray: {
            arrival: [
                900, 940, 950, 1100,
                1500, 1800
            ],
            departure: [
                910, 1200, 1120, 1130,
                1900, 2000
            ]
        },

        example:
            "Input: arrival = [900,940,950,1100,1500,1800], departure = [910,1200,1120,1130,1900,2000]\nOutput: 3",

        explanation:
            "Sort arrival and departure times separately. If the next train arrives before or at the next departure, another platform is needed. Otherwise a platform becomes free.",

        javaCode: `static int minimumPlatforms(
        int[] arrival,
        int[] departure) {

    Arrays.sort(arrival);
    Arrays.sort(departure);

    int i = 0;
    int j = 0;

    int platforms = 0;
    int maxPlatforms = 0;

    while (i < arrival.length
            && j < departure.length) {

        if (arrival[i]
                <= departure[j]) {

            platforms++;

            maxPlatforms =
                    Math.max(
                            maxPlatforms,
                            platforms
                    );

            i++;

        } else {

            platforms--;

            j++;
        }
    }

    return maxPlatforms;
}`,

        pseudoCode: `MINIMUM_PLATFORMS(arrival, departure)

sort arrival times
sort departure times

i = 0
j = 0
platforms = 0
maxPlatforms = 0

while i < arrivals
      AND j < departures

    if arrival[i] <= departure[j]

        platforms++
        maxPlatforms =
            max(maxPlatforms, platforms)

        i++

    else

        platforms--
        j++

return maxPlatforms`,

        timeComplexity: "O(n log n)",

        spaceComplexity: "O(1)"
    },


    // =========================================================
    // 180. Huffman Coding
    // =========================================================

    {
        id: 180,
        module: "greedy",
        title: "Huffman Coding",
        difficulty: "Medium",

        description:
            "Build a Huffman tree for characters based on their frequencies and generate prefix-free binary codes. Repeatedly combine the two nodes with the smallest frequencies.",

        inputArray: {
            characters: ["a", "b", "c", "d", "e", "f"],
            frequencies: [5, 9, 12, 13, 16, 45]
        },

        example:
            "Input: characters = [a,b,c,d,e,f], frequencies = [5,9,12,13,16,45]\nOne valid set of Huffman codes:\nf = 0, c = 100, d = 101, a = 1100, b = 1101, e = 111",

        explanation:
            "Insert every character into a min-priority queue ordered by frequency. Repeatedly remove the two lowest-frequency nodes, combine them into a parent node, and insert the parent back. Traverse the final tree using 0 for the left edge and 1 for the right edge.",

        javaCode: `static class HuffmanNode {

    char character;
    int frequency;

    HuffmanNode left;
    HuffmanNode right;

    HuffmanNode(
            char character,
            int frequency) {

        this.character = character;
        this.frequency = frequency;
    }

    HuffmanNode(
            int frequency,
            HuffmanNode left,
            HuffmanNode right) {

        this.frequency = frequency;
        this.left = left;
        this.right = right;
    }
}

static void huffmanCoding(
        char[] characters,
        int[] frequencies) {

    PriorityQueue<HuffmanNode> pq =
            new PriorityQueue<>(
                    (a, b) ->
                            Integer.compare(
                                    a.frequency,
                                    b.frequency
                            )
            );

    for (int i = 0;
         i < characters.length;
         i++) {

        pq.add(
                new HuffmanNode(
                        characters[i],
                        frequencies[i]
                )
        );
    }

    while (pq.size() > 1) {

        HuffmanNode left =
                pq.poll();

        HuffmanNode right =
                pq.poll();

        HuffmanNode parent =
                new HuffmanNode(
                        left.frequency
                                + right.frequency,
                        left,
                        right
                );

        pq.add(parent);
    }

    HuffmanNode root =
            pq.poll();

    generateCodes(
            root,
            ""
    );
}

static void generateCodes(
        HuffmanNode node,
        String code) {

    if (node == null) {
        return;
    }

    if (node.left == null
            && node.right == null) {

        System.out.println(
                node.character
                        + " = "
                        + code
        );

        return;
    }

    generateCodes(
            node.left,
            code + "0"
    );

    generateCodes(
            node.right,
            code + "1"
    );
}`,

        pseudoCode: `HUFFMAN_CODING(characters, frequencies)

create min priority queue

for each character

    create node
    add node to priority queue

while queue contains more than one node

    left = remove minimum
    right = remove minimum

    parent.frequency =
        left.frequency + right.frequency

    parent.left = left
    parent.right = right

    add parent to queue

root = remaining node

GENERATE_CODES(root, "")


GENERATE_CODES(node, code)

if node is null
    return

if node is leaf

    print character and code
    return

GENERATE_CODES(left, code + "0")
GENERATE_CODES(right, code + "1")`,

        timeComplexity: "O(n log n)",

        spaceComplexity: "O(n)"
    }
];