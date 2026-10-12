const graphQuestions = [

    // =========================================================
    // 161. Represent Graph Using Adjacency Matrix
    // =========================================================

    {
        id: 161,
        module: "graph",
        title: "Represent Graph Using Adjacency Matrix",
        difficulty: "Easy",

        description:
            "Represent an undirected graph using an adjacency matrix. For every edge (u, v), mark both matrix[u][v] and matrix[v][u] as 1.",

        inputArray: {
            vertices: 6,
            edges: [
                [0, 1],
                [0, 2],
                [1, 3],
                [2, 4],
                [3, 4],
                [4, 5]
            ]
        },

        example:
            "Input: vertices = 6, edges = [[0,1],[0,2],[1,3],[2,4],[3,4],[4,5]]\nOutput:\n0 1 1 0 0 0\n1 0 0 1 0 0\n1 0 0 0 1 0\n0 1 0 0 1 0\n0 0 1 1 0 1\n0 0 0 0 1 0",

        explanation:
            "Create a V × V matrix initialized with 0. For each undirected edge (u, v), set matrix[u][v] and matrix[v][u] to 1.",

        javaCode: `static int[][] createAdjacencyMatrix(
        int vertices,
        int[][] edges) {

    int[][] matrix =
            new int[vertices][vertices];

    for (int[] edge : edges) {

        int u = edge[0];
        int v = edge[1];

        matrix[u][v] = 1;
        matrix[v][u] = 1;
    }

    return matrix;
}`,

        pseudoCode: `CREATE_ADJACENCY_MATRIX(vertices, edges)

create matrix of size vertices × vertices

for each edge (u, v)

    matrix[u][v] = 1
    matrix[v][u] = 1

return matrix`,

        timeComplexity: "O(V² + E)",

        spaceComplexity: "O(V²)"
    },


    // =========================================================
    // 162. Represent Graph Using Adjacency List
    // =========================================================

    {
        id: 162,
        module: "graph",
        title: "Represent Graph Using Adjacency List",
        difficulty: "Easy",

        description:
            "Represent an undirected graph using an adjacency list where each vertex stores a list of its neighboring vertices.",

        inputArray: {
            vertices: 6,
            edges: [
                [0, 1],
                [0, 2],
                [1, 3],
                [2, 4],
                [3, 4],
                [4, 5]
            ]
        },

        example:
            "Output:\n0 -> 1 2\n1 -> 0 3\n2 -> 0 4\n3 -> 1 4\n4 -> 2 3 5\n5 -> 4",

        explanation:
            "Create an empty list for every vertex. For an undirected edge (u, v), add v to u's list and u to v's list.",

        javaCode: `static class Graph {

    int vertices;
    List<List<Integer>> adj;

    Graph(int vertices) {

        this.vertices = vertices;

        adj = new ArrayList<>();

        for (int i = 0; i < vertices; i++) {
            adj.add(new ArrayList<>());
        }
    }

    void addEdge(int u, int v) {

        adj.get(u).add(v);
        adj.get(v).add(u);
    }
}

static Graph createAdjacencyList(
        int vertices,
        int[][] edges) {

    Graph graph =
            new Graph(vertices);

    for (int[] edge : edges) {

        graph.addEdge(
                edge[0],
                edge[1]
        );
    }

    return graph;
}`,

        pseudoCode: `CREATE_ADJACENCY_LIST(vertices, edges)

create empty adjacency list

for each vertex
    create empty list

for each edge (u, v)

    add v to adj[u]
    add u to adj[v]

return graph`,

        timeComplexity: "O(V + E)",

        spaceComplexity: "O(V + E)"
    },


    // =========================================================
    // 163. Breadth First Search (BFS)
    // =========================================================

    {
        id: 163,
        module: "graph",
        title: "Breadth First Search (BFS)",
        difficulty: "Easy",

        description:
            "Traverse a graph using Breadth First Search starting from a given vertex. BFS visits vertices level by level using a Queue.",

        inputArray: {
            vertices: 6,
            edges: [
                [0, 1],
                [0, 2],
                [1, 3],
                [2, 4],
                [3, 4],
                [4, 5]
            ],
            start: 0
        },

        example:
            "Graph starts from vertex 0.\nOutput: 0 1 2 3 4 5",

        explanation:
            "Mark the starting vertex as visited and add it to a queue. Repeatedly remove a vertex from the queue and add all unvisited neighbors.",

        javaCode: `static void BFS(
        Graph graph,
        int start) {

    boolean[] visited =
            new boolean[graph.vertices];

    Queue<Integer> queue =
            new LinkedList<>();

    visited[start] = true;

    queue.add(start);

    while (!queue.isEmpty()) {

        int current =
                queue.poll();

        System.out.print(
                current + " "
        );

        for (int neighbor :
                graph.adj.get(current)) {

            if (!visited[neighbor]) {

                visited[neighbor] = true;

                queue.add(neighbor);
            }
        }
    }
}`,

        pseudoCode: `BFS(graph, start)

create visited array
create queue

mark start as visited
add start to queue

while queue is not empty

    current = remove from queue

    print current

    for each neighbor of current

        if neighbor is not visited

            mark neighbor visited
            add neighbor to queue`,

        timeComplexity: "O(V + E)",

        spaceComplexity: "O(V)"
    },


    // =========================================================
    // 164. Depth First Search (DFS)
    // =========================================================

    {
        id: 164,
        module: "graph",
        title: "Depth First Search (DFS)",
        difficulty: "Easy",

        description:
            "Traverse a graph using Depth First Search starting from a given vertex. DFS explores as far as possible along each branch before backtracking.",

        inputArray: {
            vertices: 6,
            edges: [
                [0, 1],
                [0, 2],
                [1, 3],
                [2, 4],
                [3, 4],
                [4, 5]
            ],
            start: 0
        },

        example:
            "Starting vertex: 0\nOne valid DFS output: 0 1 3 4 2 5",

        explanation:
            "Use recursion and a visited array. Mark the current vertex visited, process it, and recursively visit every unvisited neighbor.",

        javaCode: `static void DFS(
        Graph graph,
        int start) {

    boolean[] visited =
            new boolean[graph.vertices];

    DFSRecursive(
            graph,
            start,
            visited
    );
}

static void DFSRecursive(
        Graph graph,
        int current,
        boolean[] visited) {

    visited[current] = true;

    System.out.print(
            current + " "
    );

    for (int neighbor :
            graph.adj.get(current)) {

        if (!visited[neighbor]) {

            DFSRecursive(
                    graph,
                    neighbor,
                    visited
            );
        }
    }
}`,

        pseudoCode: `DFS(graph, start)

create visited array

DFS_RECURSIVE(graph, start, visited)


DFS_RECURSIVE(graph, current, visited)

mark current as visited

print current

for each neighbor of current

    if neighbor is not visited

        DFS_RECURSIVE(
            graph,
            neighbor,
            visited
        )`,

        timeComplexity: "O(V + E)",

        spaceComplexity: "O(V)"
    },


    // =========================================================
    // 165. Detect Cycle in Undirected Graph
    // =========================================================

    {
        id: 165,
        module: "graph",
        title: "Detect Cycle in Undirected Graph",
        difficulty: "Medium",

        description:
            "Determine whether an undirected graph contains a cycle using DFS and parent tracking.",

        inputArray: {
            vertices: 6,
            edges: [
                [0, 1],
                [0, 2],
                [1, 3],
                [2, 4],
                [3, 4],
                [4, 5]
            ]
        },

        example:
            "The graph contains the cycle 1 → 3 → 4 → 2 → 0 → 1.\nOutput: true",

        explanation:
            "During DFS, if an already visited neighbor is found and that neighbor is not the current node's parent, a cycle exists.",

        javaCode: `static boolean hasCycleUndirected(
        Graph graph) {

    boolean[] visited =
            new boolean[graph.vertices];

    for (int i = 0;
         i < graph.vertices;
         i++) {

        if (!visited[i]) {

            if (dfsCycleUndirected(
                    graph,
                    i,
                    -1,
                    visited
            )) {

                return true;
            }
        }
    }

    return false;
}

static boolean dfsCycleUndirected(
        Graph graph,
        int current,
        int parent,
        boolean[] visited) {

    visited[current] = true;

    for (int neighbor :
            graph.adj.get(current)) {

        if (!visited[neighbor]) {

            if (dfsCycleUndirected(
                    graph,
                    neighbor,
                    current,
                    visited
            )) {

                return true;
            }

        } else if (neighbor != parent) {

            return true;
        }
    }

    return false;
}`,

        pseudoCode: `HAS_CYCLE_UNDIRECTED(graph)

create visited array

for every vertex

    if vertex is not visited

        if DFS_CYCLE(vertex, -1)
            return true

return false


DFS_CYCLE(current, parent)

mark current visited

for each neighbor

    if neighbor is not visited

        if DFS_CYCLE(
            neighbor,
            current
        )
            return true

    else if neighbor != parent

        return true

return false`,

        timeComplexity: "O(V + E)",

        spaceComplexity: "O(V)"
    },


    // =========================================================
    // 166. Detect Cycle in Directed Graph
    // =========================================================

    {
        id: 166,
        module: "graph",
        title: "Detect Cycle in Directed Graph",
        difficulty: "Medium",

        description:
            "Determine whether a directed graph contains a cycle using DFS and a recursion stack.",

        inputArray: {
            vertices: 4,
            directedEdges: [
                [0, 1],
                [1, 2],
                [2, 3]
            ]
        },

        example:
            "Input: 0 → 1 → 2 → 3\nOutput: false",

        explanation:
            "Maintain a visited array and recursion-stack array. If DFS reaches a vertex that is already present in the current recursion stack, a directed cycle exists.",

        javaCode: `static boolean hasCycleDirected(
        Graph graph) {

    boolean[] visited =
            new boolean[graph.vertices];

    boolean[] recursionStack =
            new boolean[graph.vertices];

    for (int i = 0;
         i < graph.vertices;
         i++) {

        if (!visited[i]) {

            if (dfsCycleDirected(
                    graph,
                    i,
                    visited,
                    recursionStack
            )) {

                return true;
            }
        }
    }

    return false;
}

static boolean dfsCycleDirected(
        Graph graph,
        int current,
        boolean[] visited,
        boolean[] recursionStack) {

    visited[current] = true;

    recursionStack[current] = true;

    for (int neighbor :
            graph.adj.get(current)) {

        if (!visited[neighbor]) {

            if (dfsCycleDirected(
                    graph,
                    neighbor,
                    visited,
                    recursionStack
            )) {

                return true;
            }

        } else if (recursionStack[neighbor]) {

            return true;
        }
    }

    recursionStack[current] = false;

    return false;
}`,

        pseudoCode: `HAS_CYCLE_DIRECTED(graph)

create visited array
create recursionStack array

for every vertex

    if not visited

        if DFS_CYCLE_DIRECTED(vertex)
            return true

return false


DFS_CYCLE_DIRECTED(current)

mark current visited
mark current in recursionStack

for each neighbor

    if neighbor is not visited

        if DFS_CYCLE_DIRECTED(neighbor)
            return true

    else if neighbor is in recursionStack

        return true

remove current from recursionStack

return false`,

        timeComplexity: "O(V + E)",

        spaceComplexity: "O(V)"
    },


    // =========================================================
    // 167. Find Connected Components
    // =========================================================

    {
        id: 167,
        module: "graph",
        title: "Find Connected Components",
        difficulty: "Medium",

        description:
            "Count the number of connected components in an undirected graph using DFS.",

        inputArray: {
            vertices: 7,
            edges: [
                [0, 1],
                [1, 2],
                [3, 4],
                [5, 6]
            ]
        },

        example:
            "Components:\n{0,1,2}\n{3,4}\n{5,6}\nOutput: 3",

        explanation:
            "Iterate through every vertex. Whenever an unvisited vertex is found, start DFS from it and increment the component count.",

        javaCode: `static int countConnectedComponents(
        Graph graph) {

    boolean[] visited =
            new boolean[graph.vertices];

    int count = 0;

    for (int i = 0;
         i < graph.vertices;
         i++) {

        if (!visited[i]) {

            count++;

            DFSComponent(
                    graph,
                    i,
                    visited
            );
        }
    }

    return count;
}

static void DFSComponent(
        Graph graph,
        int current,
        boolean[] visited) {

    visited[current] = true;

    for (int neighbor :
            graph.adj.get(current)) {

        if (!visited[neighbor]) {

            DFSComponent(
                    graph,
                    neighbor,
                    visited
            );
        }
    }
}`,

        pseudoCode: `COUNT_COMPONENTS(graph)

create visited array
count = 0

for every vertex

    if vertex is not visited

        count++

        DFS_COMPONENT(vertex)

return count


DFS_COMPONENT(current)

mark current visited

for each neighbor

    if neighbor is not visited

        DFS_COMPONENT(neighbor)`,

        timeComplexity: "O(V + E)",

        spaceComplexity: "O(V)"
    },


    // =========================================================
    // 168. Shortest Path in Unweighted Graph
    // =========================================================

    {
        id: 168,
        module: "graph",
        title: "Shortest Path in Unweighted Graph",
        difficulty: "Medium",

        description:
            "Find the shortest number of edges between a source and destination vertex in an unweighted graph using BFS.",

        inputArray: {
            vertices: 6,
            edges: [
                [0, 1],
                [0, 2],
                [1, 3],
                [2, 4],
                [3, 4],
                [4, 5]
            ],
            source: 0,
            destination: 5
        },

        example:
            "Input: source = 0, destination = 5\nShortest path: 0 → 2 → 4 → 5\nOutput: 3",

        explanation:
            "BFS explores vertices in increasing order of distance from the source. Store the distance of every vertex and assign an unvisited neighbor distance + 1.",

        javaCode: `static int shortestPath(
        Graph graph,
        int source,
        int destination) {

    int[] distance =
            new int[graph.vertices];

    Arrays.fill(
            distance,
            -1
    );

    Queue<Integer> queue =
            new LinkedList<>();

    distance[source] = 0;

    queue.add(source);

    while (!queue.isEmpty()) {

        int current =
                queue.poll();

        if (current == destination) {
            return distance[current];
        }

        for (int neighbor :
                graph.adj.get(current)) {

            if (distance[neighbor] == -1) {

                distance[neighbor] =
                        distance[current] + 1;

                queue.add(neighbor);
            }
        }
    }

    return -1;
}`,

        pseudoCode: `SHORTEST_PATH(graph, source, destination)

create distance array
fill distance with -1

distance[source] = 0

create queue
add source

while queue is not empty

    current = remove queue

    if current == destination
        return distance[current]

    for each neighbor

        if distance[neighbor] == -1

            distance[neighbor] =
                distance[current] + 1

            add neighbor to queue

return -1`,

        timeComplexity: "O(V + E)",

        spaceComplexity: "O(V)"
    },


    // =========================================================
    // 169. Topological Sorting
    // =========================================================

    {
        id: 169,
        module: "graph",
        title: "Topological Sorting Using Kahn's Algorithm",
        difficulty: "Medium",

        description:
            "Perform topological sorting of a Directed Acyclic Graph (DAG) using Kahn's BFS-based algorithm and indegree.",

        inputArray: {
            vertices: 6,
            directedEdges: [
                [5, 2],
                [5, 0],
                [4, 0],
                [4, 1],
                [2, 3],
                [3, 1]
            ]
        },

        example:
            "Input edges: 5→2, 5→0, 4→0, 4→1, 2→3, 3→1\nOne valid output: [4, 5, 2, 0, 3, 1]",

        explanation:
            "Calculate the indegree of every vertex. Add all vertices with indegree 0 to a queue. Remove them one by one and decrease the indegree of their neighbors. If all vertices are processed, the result is a valid topological ordering; otherwise a cycle exists.",

        javaCode: `static List<Integer> topologicalSort(
        Graph graph) {

    int[] indegree =
            new int[graph.vertices];

    for (int i = 0;
         i < graph.vertices;
         i++) {

        for (int neighbor :
                graph.adj.get(i)) {

            indegree[neighbor]++;
        }
    }

    Queue<Integer> queue =
            new LinkedList<>();

    for (int i = 0;
         i < graph.vertices;
         i++) {

        if (indegree[i] == 0) {

            queue.add(i);
        }
    }

    List<Integer> result =
            new ArrayList<>();

    while (!queue.isEmpty()) {

        int current =
                queue.poll();

        result.add(current);

        for (int neighbor :
                graph.adj.get(current)) {

            indegree[neighbor]--;

            if (indegree[neighbor] == 0) {

                queue.add(neighbor);
            }
        }
    }

    if (result.size()
            != graph.vertices) {

        return new ArrayList<>();
    }

    return result;
}`,

        pseudoCode: `TOPOLOGICAL_SORT(graph)

create indegree array

for every vertex

    for each neighbor

        indegree[neighbor]++

create queue

for every vertex

    if indegree[vertex] == 0
        add vertex to queue

create result list

while queue is not empty

    current = remove queue

    add current to result

    for each neighbor

        indegree[neighbor]--

        if indegree[neighbor] == 0
            add neighbor to queue

if result size != number of vertices

    return empty list

return result`,

        timeComplexity: "O(V + E)",

        spaceComplexity: "O(V)"
    },


    // =========================================================
    // 170. Number of Islands
    // =========================================================

    {
        id: 170,
        module: "graph",
        title: "Number of Islands",
        difficulty: "Medium",

        description:
            "Count the number of islands in a 2D grid where '1' represents land and '0' represents water. Connected land cells in four directions form one island.",

        inputArray: [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ],

        example:
            "Input:\n11000\n11000\n00100\n00011\n\nOutput: 3",

        explanation:
            "Scan every cell. When a land cell '1' is found, increment the island count and perform DFS to mark all connected land cells as visited by changing them to '0'.",

        javaCode: `static int numIslands(
        char[][] grid) {

    if (grid == null
            || grid.length == 0) {

        return 0;
    }

    int rows =
            grid.length;

    int columns =
            grid[0].length;

    int count = 0;

    for (int i = 0;
         i < rows;
         i++) {

        for (int j = 0;
             j < columns;
             j++) {

            if (grid[i][j] == '1') {

                count++;

                dfsIsland(
                        grid,
                        i,
                        j
                );
            }
        }
    }

    return count;
}

static void dfsIsland(
        char[][] grid,
        int row,
        int column) {

    int rows =
            grid.length;

    int columns =
            grid[0].length;

    if (row < 0
            || row >= rows
            || column < 0
            || column >= columns) {

        return;
    }

    if (grid[row][column] != '1') {
        return;
    }

    grid[row][column] = '0';

    dfsIsland(
            grid,
            row - 1,
            column
    );

    dfsIsland(
            grid,
            row + 1,
            column
    );

    dfsIsland(
            grid,
            row,
            column - 1
    );

    dfsIsland(
            grid,
            row,
            column + 1
    );
}`,

        pseudoCode: `NUM_ISLANDS(grid)

if grid is empty
    return 0

count = 0

for every cell

    if cell == '1'

        count++

        DFS_ISLAND(cell)

return count


DFS_ISLAND(row, column)

if outside grid
    return

if cell is not land
    return

mark cell as visited

DFS_ISLAND(up)
DFS_ISLAND(down)
DFS_ISLAND(left)
DFS_ISLAND(right)`,

        timeComplexity: "O(R × C)",

        spaceComplexity: "O(R × C)"
    }
];