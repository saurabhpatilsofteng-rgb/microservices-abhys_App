export const jdbcModules = [

    {
        id: 1,
        slug: "jdbc-introduction",
        title: "JDBC Introduction",
        description:
            "Learn what JDBC is and how Java applications communicate with relational databases.",

        topics: [

            {
                id: 1,

                title: "What is JDBC?",

                explanation:
                    "JDBC stands for Java Database Connectivity. It is a Java API used to connect Java applications with relational databases such as PostgreSQL, MySQL and Oracle.",

                importance:
                    "JDBC is the foundation for database communication in Java. Frameworks such as Hibernate and Spring JDBC are built on top of JDBC concepts.",

                code: `import java.sql.Connection;
import java.sql.DriverManager;

public class Main {

    public static void main(String[] args) {

        System.out.println(
            "JDBC Application"
        );

    }

}`
            },

            {
                id: 2,

                title: "JDBC Workflow",

                explanation:
                    "The typical JDBC workflow is: load driver, create connection, create statement, execute SQL, process ResultSet and close resources.",

                importance:
                    "Understanding this flow is essential before using Spring JDBC or JPA.",

                code: `Java Application

        ↓

JDBC Driver

        ↓

Database Connection

        ↓

SQL Query

        ↓

Database

        ↓

ResultSet`
            }

        ]
    },


    {
        id: 2,
        slug: "jdbc-architecture",
        title: "JDBC Architecture",
        description:
            "Understand how Java, JDBC API, JDBC Driver and Database work together.",

        topics: [

            {
                id: 1,

                title: "JDBC Architecture",

                explanation:
                    "JDBC architecture consists of a Java application, JDBC API, JDBC DriverManager, JDBC Driver and Database.",

                importance:
                    "This architecture explains how SQL requests travel from a Java application to the database.",

                code: `Java Application

        ↓

JDBC API

        ↓

DriverManager

        ↓

JDBC Driver

        ↓

Database`
            },

            {
                id: 2,

                title: "DriverManager",

                explanation:
                    "DriverManager is responsible for managing JDBC drivers and creating database connections.",

                importance:
                    "It is commonly used in basic JDBC applications to establish connections.",

                code: `Connection connection =

    DriverManager.getConnection(

        "jdbc:postgresql://localhost:5432/test_db",

        "postgres",

        "postgres"

    );`
            }

        ]
    },


    {
        id: 3,
        slug: "jdbc-driver",
        title: "JDBC Driver",
        description:
            "Learn about JDBC drivers and how Java communicates with different database systems.",

        topics: [

            {
                id: 1,

                title: "What is JDBC Driver?",

                explanation:
                    "A JDBC driver is a software component that allows a Java application to communicate with a specific database.",

                importance:
                    "Every database system requires an appropriate JDBC driver.",

                code: `PostgreSQL:

org.postgresql.Driver


MySQL:

com.mysql.cj.jdbc.Driver`
            },

            {
                id: 2,

                title: "Loading JDBC Driver",

                explanation:
                    "Older JDBC applications explicitly loaded the JDBC driver using Class.forName(). Modern JDBC drivers are usually loaded automatically.",

                importance:
                    "You may still encounter Class.forName() in legacy Java applications.",

                code: `Class.forName(

    "org.postgresql.Driver"

);`
            }

        ]
    },


    {
        id: 4,
        slug: "database-connection",
        title: "Database Connection",
        description:
            "Learn how to establish and manage database connections using JDBC.",

        topics: [

            {
                id: 1,

                title: "Creating Connection",

                explanation:
                    "A Connection object represents an active connection between a Java application and a database.",

                importance:
                    "All database operations begin with a valid Connection.",

                code: `import java.sql.Connection;
import java.sql.DriverManager;

public class Main {

    public static void main(String[] args)
            throws Exception {

        Connection connection =

            DriverManager.getConnection(

                "jdbc:postgresql://localhost:5432/auth_db",

                "postgres",

                "postgres"

            );


        System.out.println(

            "Database Connected"

        );


        connection.close();

    }

}`
            },

            {
                id: 2,

                title: "Try-With-Resources",

                explanation:
                    "Try-with-resources automatically closes database resources after execution.",

                importance:
                    "It prevents resource leaks and is the recommended approach.",

                code: `try (

    Connection connection =

        DriverManager.getConnection(
            url,
            username,
            password
        )

) {

    System.out.println(
        "Connected"
    );

}`
            }

        ]
    },


    {
        id: 5,
        slug: "statement",
        title: "Statement",
        description:
            "Learn how to execute SQL queries using the JDBC Statement interface.",

        topics: [

            {
                id: 1,

                title: "What is Statement?",

                explanation:
                    "Statement is used to execute static SQL queries against a database.",

                importance:
                    "It is useful for simple fixed SQL statements, but PreparedStatement is generally preferred for user input.",

                code: `Statement statement =

    connection.createStatement();


ResultSet resultSet =

    statement.executeQuery(

        "SELECT * FROM users"

    );`
            },

            {
                id: 2,

                title: "executeQuery()",

                explanation:
                    "executeQuery() is used for SQL SELECT operations and returns a ResultSet.",

                importance:
                    "Use this method when retrieving data from the database.",

                code: `ResultSet resultSet =

    statement.executeQuery(

        "SELECT * FROM users"

    );`
            },

            {
                id: 3,

                title: "executeUpdate()",

                explanation:
                    "executeUpdate() is used for INSERT, UPDATE and DELETE operations.",

                importance:
                    "It returns the number of rows affected.",

                code: `int rows =

    statement.executeUpdate(

        "DELETE FROM users WHERE id = 10"

    );


System.out.println(

    "Rows affected: " + rows

);`
            }

        ]
    },


    {
        id: 6,
        slug: "prepared-statement",
        title: "PreparedStatement",
        description:
            "Learn parameterized SQL queries and protection against SQL injection.",

        topics: [

            {
                id: 1,

                title: "What is PreparedStatement?",

                explanation:
                    "PreparedStatement represents a precompiled SQL statement that can accept parameters.",

                importance:
                    "It is safer and generally preferred over Statement because it helps prevent SQL injection.",

                code: `String sql =

    "SELECT * FROM users WHERE email = ?";


PreparedStatement statement =

    connection.prepareStatement(sql);


statement.setString(

    1,

    "test@gmail.com"

);


ResultSet resultSet =

    statement.executeQuery();`
            },

            {
                id: 2,

                title: "Insert Using PreparedStatement",

                explanation:
                    "PreparedStatement allows values to be safely passed into INSERT queries.",

                importance:
                    "This is the standard JDBC approach for inserting user-provided data.",

                code: `String sql =

    "INSERT INTO users(name, email) VALUES (?, ?)";


PreparedStatement statement =

    connection.prepareStatement(sql);


statement.setString(

    1,

    "Saurabh"

);


statement.setString(

    2,

    "saurabh@gmail.com"

);


int rows =

    statement.executeUpdate();`
            },

            {
                id: 3,

                title: "Why PreparedStatement?",

                explanation:
                    "PreparedStatement separates SQL code from parameter values.",

                importance:
                    "It improves security, readability and often allows the database to reuse execution plans.",

                code: `// Avoid this

String sql =

    "SELECT * FROM users WHERE email = '"

    + email +

    "'";


// Better approach

String sql =

    "SELECT * FROM users WHERE email = ?";`
            }

        ]
    },


    {
        id: 7,
        slug: "callable-statement",
        title: "CallableStatement",
        description:
            "Learn how to call database stored procedures and functions from Java.",

        topics: [

            {
                id: 1,

                title: "What is CallableStatement?",

                explanation:
                    "CallableStatement is used to execute stored procedures and database functions.",

                importance:
                    "It is useful in enterprise applications where business logic is implemented inside the database.",

                code: `CallableStatement statement =

    connection.prepareCall(

        "{ call get_users() }"

    );


ResultSet resultSet =

    statement.executeQuery();`
            }

        ]
    },


    {
        id: 8,
        slug: "result-set",
        title: "ResultSet",
        description:
            "Learn how to read data returned from SELECT queries.",

        topics: [

            {
                id: 1,

                title: "What is ResultSet?",

                explanation:
                    "ResultSet stores the rows returned by a SQL SELECT query.",

                importance:
                    "It is the main JDBC mechanism for reading database records.",

                code: `ResultSet resultSet =

    statement.executeQuery(

        "SELECT * FROM users"

    );


while (resultSet.next()) {

    System.out.println(

        resultSet.getInt("id")

    );

    System.out.println(

        resultSet.getString("name")

    );

}`
            },

            {
                id: 2,

                title: "ResultSet Navigation",

                explanation:
                    "The next() method moves the ResultSet cursor to the next row.",

                importance:
                    "You must call next() before reading column values.",

                code: `while (resultSet.next()) {

    int id =

        resultSet.getInt("id");


    String name =

        resultSet.getString("name");


    System.out.println(

        id + " " + name

    );

}`
            }

        ]
    },


    {
        id: 9,
        slug: "crud-operations",
        title: "CRUD Operations",
        description:
            "Learn Create, Read, Update and Delete operations using JDBC.",

        topics: [

            {
                id: 1,

                title: "CREATE - INSERT",

                explanation:
                    "INSERT adds a new record to a database table.",

                importance:
                    "This operation is used when creating new application data.",

                code: `String sql =

    "INSERT INTO users(name, email) VALUES (?, ?)";


PreparedStatement ps =

    connection.prepareStatement(sql);


ps.setString(1, "John");

ps.setString(2, "john@gmail.com");


ps.executeUpdate();`
            },

            {
                id: 2,

                title: "READ - SELECT",

                explanation:
                    "SELECT retrieves records from a database.",

                importance:
                    "This is one of the most frequently used database operations.",

                code: `String sql =

    "SELECT * FROM users";


PreparedStatement ps =

    connection.prepareStatement(sql);


ResultSet rs =

    ps.executeQuery();


while (rs.next()) {

    System.out.println(

        rs.getString("name")

    );

}`
            },

            {
                id: 3,

                title: "UPDATE",

                explanation:
                    "UPDATE modifies existing database records.",

                importance:
                    "Used when application data needs to be changed.",

                code: `String sql =

    "UPDATE users SET name = ? WHERE id = ?";


PreparedStatement ps =

    connection.prepareStatement(sql);


ps.setString(1, "Updated User");

ps.setInt(2, 1);


ps.executeUpdate();`
            },

            {
                id: 4,

                title: "DELETE",

                explanation:
                    "DELETE removes records from a database.",

                importance:
                    "Always use WHERE carefully to avoid deleting unintended records.",

                code: `String sql =

    "DELETE FROM users WHERE id = ?";


PreparedStatement ps =

    connection.prepareStatement(sql);


ps.setInt(1, 1);


ps.executeUpdate();`
            }

        ]
    },


    {
        id: 10,
        slug: "transaction-management",
        title: "Transaction Management",
        description:
            "Learn commit, rollback and database transaction handling.",

        topics: [

            {
                id: 1,

                title: "What is Transaction?",

                explanation:
                    "A transaction is a group of database operations treated as a single unit of work.",

                importance:
                    "Transactions maintain data consistency when multiple database operations must either all succeed or all fail.",

                code: `connection.setAutoCommit(false);


try {

    // Database operation 1

    // Database operation 2


    connection.commit();

}

catch (Exception e) {

    connection.rollback();

}`
            },

            {
                id: 2,

                title: "Commit",

                explanation:
                    "commit permanently saves the transaction changes to the database.",

                importance:
                    "It should be called only after all required operations complete successfully.",

                code: `connection.setAutoCommit(false);


// Perform database operations


connection.commit();`
            },

            {
                id: 3,

                title: "Rollback",

                explanation:
                    "rollback cancels changes made during the current transaction.",

                importance:
                    "It prevents partial or inconsistent database updates.",

                code: `try {

    // Execute SQL operations

    connection.commit();

}

catch (Exception e) {

    connection.rollback();

}`
            }

        ]
    },


    {
        id: 11,
        slug: "batch-processing",
        title: "Batch Processing",
        description:
            "Learn how to execute multiple SQL operations efficiently.",

        topics: [

            {
                id: 1,

                title: "Batch Insert",

                explanation:
                    "Batch processing groups multiple SQL operations and sends them to the database together.",

                importance:
                    "It improves performance when inserting or updating large amounts of data.",

                code: `String sql =

    "INSERT INTO users(name) VALUES (?)";


PreparedStatement ps =

    connection.prepareStatement(sql);


for (int i = 1; i <= 100; i++) {

    ps.setString(

        1,

        "User " + i

    );


    ps.addBatch();

}


ps.executeBatch();`
            }

        ]
    },


    {
        id: 12,
        slug: "connection-pooling",
        title: "Connection Pooling",
        description:
            "Understand why enterprise applications reuse database connections.",

        topics: [

            {
                id: 1,

                title: "What is Connection Pooling?",

                explanation:
                    "Connection pooling maintains a pool of reusable database connections instead of creating a new connection for every request.",

                importance:
                    "Connection pooling significantly improves performance and is commonly used in Spring Boot applications.",

                code: `Application

    ↓

Connection Pool

    ↓

Available Connections

    ↓

PostgreSQL Database`
            },

            {
                id: 2,

                title: "Spring Boot and HikariCP",

                explanation:
                    "Spring Boot commonly uses HikariCP as its database connection pool implementation.",

                importance:
                    "In real Spring Boot microservices, you normally configure a DataSource and let the connection pool manage connections.",

                code: `spring.datasource.url=

jdbc:postgresql://localhost:5432/auth_db


spring.datasource.username=postgres

spring.datasource.password=postgres


spring.datasource.hikari.maximum-pool-size=10`
            }

        ]
    }

];