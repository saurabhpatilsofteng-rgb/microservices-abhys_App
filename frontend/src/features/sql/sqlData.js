export const sqlModules = [

    {
        id: 1,
        slug: "sql-introduction",
        title: "SQL Introduction",
        description:
            "Learn what SQL is and how databases store and manage data.",

        topics: [

            {
                id: 1,

                title: "What is SQL?",

                explanation:
                    "SQL stands for Structured Query Language. It is used to create, read, update and delete data in relational databases.",

                importance:
                    "SQL is one of the most important skills for Java, Spring Boot and backend developers because applications constantly interact with databases.",

                code: `SELECT * FROM users;`
            },

            {
                id: 2,

                title: "What is a Database?",

                explanation:
                    "A database is an organized collection of data. Relational databases store data in tables consisting of rows and columns.",

                importance:
                    "Understanding databases is essential before learning JDBC, Hibernate, JPA and Spring Data JPA.",

                code: `Database
    ↓
Tables
    ↓
Rows + Columns`
            }

        ]
    },


    {
        id: 2,
        slug: "database-basics",
        title: "Database Basics",
        description:
            "Understand databases, tables, rows, columns, schemas and relationships.",

        topics: [

            {
                id: 1,

                title: "Table, Row and Column",

                explanation:
                    "A table stores related data. A row represents one record and a column represents one attribute of that record.",

                importance:
                    "This is the foundation of relational database design.",

                code: `users

+----+---------+-------------------+
| id | name    | email             |
+----+---------+-------------------+
| 1  | Saurabh | saurabh@email.com |
| 2  | Rahul   | rahul@email.com   |
+----+---------+-------------------+`
            },

            {
                id: 2,

                title: "Schema",

                explanation:
                    "A schema is a logical container used to organize database objects such as tables, views and functions.",

                importance:
                    "Schemas help organize large applications and separate different database objects.",

                code: `CREATE SCHEMA company;

CREATE TABLE company.employees (

    id INT,

    name VARCHAR(100)

);`
            }

        ]
    },


    {
        id: 3,
        slug: "ddl",
        title: "DDL Commands",
        description:
            "Learn CREATE, ALTER, DROP and TRUNCATE commands.",

        topics: [

            {
                id: 1,

                title: "CREATE TABLE",

                explanation:
                    "CREATE is used to create database objects such as tables.",

                importance:
                    "Every relational database application requires properly designed tables.",

                code: `CREATE TABLE users (

    id SERIAL PRIMARY KEY,

    name VARCHAR(100),

    email VARCHAR(150)

);`
            },

            {
                id: 2,

                title: "ALTER TABLE",

                explanation:
                    "ALTER is used to modify an existing table structure.",

                importance:
                    "It is useful when application requirements change.",

                code: `ALTER TABLE users

ADD COLUMN age INT;`
            },

            {
                id: 3,

                title: "DROP TABLE",

                explanation:
                    "DROP permanently removes a table and its structure.",

                importance:
                    "Use carefully because data can be permanently removed.",

                code: `DROP TABLE users;`
            },

            {
                id: 4,

                title: "TRUNCATE TABLE",

                explanation:
                    "TRUNCATE removes all rows from a table while keeping the table structure.",

                importance:
                    "It is useful when you want to quickly clear table data.",

                code: `TRUNCATE TABLE users;`
            }

        ]
    },


    {
        id: 4,
        slug: "dml",
        title: "DML Commands",
        description:
            "Learn INSERT, UPDATE and DELETE operations.",

        topics: [

            {
                id: 1,

                title: "INSERT",

                explanation:
                    "INSERT is used to add new records into a table.",

                importance:
                    "This is the Create operation in CRUD.",

                code: `INSERT INTO users (

    name,

    email

)

VALUES (

    'Saurabh',

    'saurabh@gmail.com'

);`
            },

            {
                id: 2,

                title: "UPDATE",

                explanation:
                    "UPDATE modifies existing records.",

                importance:
                    "Always use a WHERE clause when updating specific records.",

                code: `UPDATE users

SET name = 'Saurabh Patil'

WHERE id = 1;`
            },

            {
                id: 3,

                title: "DELETE",

                explanation:
                    "DELETE removes records from a table.",

                importance:
                    "Without a WHERE clause, all records can be deleted.",

                code: `DELETE FROM users

WHERE id = 1;`
            }

        ]
    },


    {
        id: 5,
        slug: "select-queries",
        title: "SELECT Queries",
        description:
            "Learn how to retrieve and filter data from database tables.",

        topics: [

            {
                id: 1,

                title: "SELECT",

                explanation:
                    "SELECT retrieves data from one or more database tables.",

                importance:
                    "SELECT is one of the most frequently used SQL commands.",

                code: `SELECT *

FROM users;`
            },

            {
                id: 2,

                title: "WHERE",

                explanation:
                    "WHERE filters records based on a condition.",

                importance:
                    "Filtering data efficiently is essential in real applications.",

                code: `SELECT *

FROM users

WHERE age >= 18;`
            },

            {
                id: 3,

                title: "ORDER BY",

                explanation:
                    "ORDER BY sorts query results.",

                importance:
                    "It is commonly used for reports, dashboards and APIs.",

                code: `SELECT *

FROM users

ORDER BY name ASC;`
            },

            {
                id: 4,

                title: "LIMIT",

                explanation:
                    "LIMIT restricts the number of rows returned.",

                importance:
                    "It is commonly used for pagination and improving query performance.",

                code: `SELECT *

FROM users

LIMIT 10;`
            }

        ]
    },


    {
        id: 6,
        slug: "constraints",
        title: "SQL Constraints",
        description:
            "Learn PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL and CHECK constraints.",

        topics: [

            {
                id: 1,

                title: "PRIMARY KEY",

                explanation:
                    "A PRIMARY KEY uniquely identifies each row in a table.",

                importance:
                    "Primary keys are fundamental for relational database design.",

                code: `CREATE TABLE users (

    id SERIAL PRIMARY KEY,

    name VARCHAR(100)

);`
            },

            {
                id: 2,

                title: "FOREIGN KEY",

                explanation:
                    "A FOREIGN KEY creates a relationship between two tables.",

                importance:
                    "Foreign keys maintain referential integrity.",

                code: `CREATE TABLE orders (

    id SERIAL PRIMARY KEY,

    user_id INT,

    FOREIGN KEY (user_id)

    REFERENCES users(id)

);`
            },

            {
                id: 3,

                title: "UNIQUE",

                explanation:
                    "UNIQUE ensures that duplicate values are not allowed.",

                importance:
                    "It is commonly used for email, username and other unique business values.",

                code: `CREATE TABLE users (

    id SERIAL PRIMARY KEY,

    email VARCHAR(150) UNIQUE

);`
            },

            {
                id: 4,

                title: "NOT NULL",

                explanation:
                    "NOT NULL prevents a column from storing NULL values.",

                importance:
                    "Use it for mandatory data.",

                code: `name VARCHAR(100) NOT NULL`
            }

        ]
    },


    {
        id: 7,
        slug: "joins",
        title: "SQL Joins",
        description:
            "Learn INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL JOIN.",

        topics: [

            {
                id: 1,

                title: "INNER JOIN",

                explanation:
                    "INNER JOIN returns records that have matching values in both tables.",

                importance:
                    "Joins are heavily used in enterprise applications and reporting systems.",

                code: `SELECT

    users.name,

    orders.id

FROM users

INNER JOIN orders

ON users.id = orders.user_id;`
            },

            {
                id: 2,

                title: "LEFT JOIN",

                explanation:
                    "LEFT JOIN returns all records from the left table and matching records from the right table.",

                importance:
                    "Useful when you want records even if related data does not exist.",

                code: `SELECT

    users.name,

    orders.id

FROM users

LEFT JOIN orders

ON users.id = orders.user_id;`
            },

            {
                id: 3,

                title: "RIGHT JOIN",

                explanation:
                    "RIGHT JOIN returns all records from the right table and matching records from the left table.",

                importance:
                    "It can be useful depending on which table should preserve all rows.",

                code: `SELECT *

FROM users

RIGHT JOIN orders

ON users.id = orders.user_id;`
            },

            {
                id: 4,

                title: "FULL JOIN",

                explanation:
                    "FULL JOIN returns matching records and non-matching records from both tables.",

                importance:
                    "Useful when analyzing complete data relationships.",

                code: `SELECT *

FROM users

FULL JOIN orders

ON users.id = orders.user_id;`
            }

        ]
    },


    {
        id: 8,
        slug: "aggregate-functions",
        title: "Aggregate Functions",
        description:
            "Learn COUNT, SUM, AVG, MIN and MAX functions.",

        topics: [

            {
                id: 1,

                title: "COUNT",

                explanation:
                    "COUNT returns the number of rows.",

                importance:
                    "Frequently used in reports and dashboards.",

                code: `SELECT COUNT(*)

FROM users;`
            },

            {
                id: 2,

                title: "SUM",

                explanation:
                    "SUM calculates the total of numeric values.",

                importance:
                    "Commonly used in financial and reporting applications.",

                code: `SELECT SUM(amount)

FROM orders;`
            },

            {
                id: 3,

                title: "AVG",

                explanation:
                    "AVG calculates the average value.",

                importance:
                    "Useful for analytics and statistics.",

                code: `SELECT AVG(salary)

FROM employees;`
            },

            {
                id: 4,

                title: "MIN and MAX",

                explanation:
                    "MIN returns the smallest value and MAX returns the largest value.",

                importance:
                    "Useful for finding boundaries and extreme values.",

                code: `SELECT

    MIN(salary),

    MAX(salary)

FROM employees;`
            }

        ]
    },


    {
        id: 9,
        slug: "group-by",
        title: "GROUP BY and HAVING",
        description:
            "Learn how to group and filter aggregated data.",

        topics: [

            {
                id: 1,

                title: "GROUP BY",

                explanation:
                    "GROUP BY groups rows that have the same values.",

                importance:
                    "It is essential for generating grouped reports.",

                code: `SELECT

    department,

    COUNT(*)

FROM employees

GROUP BY department;`
            },

            {
                id: 2,

                title: "HAVING",

                explanation:
                    "HAVING filters grouped results after aggregation.",

                importance:
                    "WHERE filters rows, while HAVING filters groups.",

                code: `SELECT

    department,

    COUNT(*)

FROM employees

GROUP BY department

HAVING COUNT(*) > 5;`
            }

        ]
    },


    {
        id: 10,
        slug: "subqueries",
        title: "Subqueries",
        description:
            "Learn nested SQL queries and correlated subqueries.",

        topics: [

            {
                id: 1,

                title: "What is a Subquery?",

                explanation:
                    "A subquery is a query written inside another SQL query.",

                importance:
                    "Subqueries help solve complex data retrieval problems.",

                code: `SELECT *

FROM employees

WHERE salary >

(

    SELECT AVG(salary)

    FROM employees

);`
            },

            {
                id: 2,

                title: "IN Subquery",

                explanation:
                    "IN checks whether a value exists in the result of a subquery.",

                importance:
                    "It is useful for filtering records based on related data.",

                code: `SELECT *

FROM users

WHERE id IN

(

    SELECT user_id

    FROM orders

);`
            }

        ]
    },


    {
        id: 11,
        slug: "indexes",
        title: "SQL Indexes",
        description:
            "Learn how indexes improve database query performance.",

        topics: [

            {
                id: 1,

                title: "What is an Index?",

                explanation:
                    "An index is a database structure that helps the database locate records faster.",

                importance:
                    "Indexes are important for performance optimization, especially with large tables.",

                code: `CREATE INDEX idx_users_email

ON users(email);`
            },

            {
                id: 2,

                title: "When to Use Indexes?",

                explanation:
                    "Indexes are useful for columns frequently used in WHERE, JOIN and ORDER BY operations.",

                importance:
                    "Too many indexes can slow INSERT and UPDATE operations, so indexes should be used carefully.",

                code: `CREATE INDEX idx_orders_user_id

ON orders(user_id);`
            }

        ]
    },


    {
        id: 12,
        slug: "transactions",
        title: "SQL Transactions",
        description:
            "Learn COMMIT, ROLLBACK, SAVEPOINT and ACID properties.",

        topics: [

            {
                id: 1,

                title: "Transaction",

                explanation:
                    "A transaction is a group of SQL operations treated as a single unit of work.",

                importance:
                    "Transactions prevent partial database updates.",

                code: `BEGIN;

UPDATE accounts

SET balance = balance - 100

WHERE id = 1;


UPDATE accounts

SET balance = balance + 100

WHERE id = 2;


COMMIT;`
            },

            {
                id: 2,

                title: "ROLLBACK",

                explanation:
                    "ROLLBACK cancels changes made during a transaction.",

                importance:
                    "It protects data consistency when an error occurs.",

                code: `BEGIN;


UPDATE users

SET salary = 50000

WHERE id = 1;


ROLLBACK;`
            },

            {
                id: 3,

                title: "ACID Properties",

                explanation:
                    "ACID stands for Atomicity, Consistency, Isolation and Durability.",

                importance:
                    "ACID properties are fundamental for reliable database transactions.",

                code: `A - Atomicity

C - Consistency

I - Isolation

D - Durability`
            }

        ]
    },


    {
        id: 13,
        slug: "views",
        title: "SQL Views",
        description:
            "Learn how to create reusable virtual tables using views.",

        topics: [

            {
                id: 1,

                title: "CREATE VIEW",

                explanation:
                    "A view is a virtual table based on a SQL query.",

                importance:
                    "Views simplify complex queries and can provide an abstraction layer for applications.",

                code: `CREATE VIEW active_users AS

SELECT

    id,

    name,

    email

FROM users

WHERE active = true;`
            },

            {
                id: 2,

                title: "Using a View",

                explanation:
                    "A view can be queried similarly to a table.",

                importance:
                    "It allows complex SQL logic to be reused.",

                code: `SELECT *

FROM active_users;`
            }

        ]
    },


    {
        id: 14,
        slug: "advanced-sql",
        title: "Advanced SQL",
        description:
            "Learn CTEs, window functions and advanced SQL concepts.",

        topics: [

            {
                id: 1,

                title: "Common Table Expression (CTE)",

                explanation:
                    "A CTE creates a temporary named result set that can be used within a SQL query.",

                importance:
                    "CTEs improve readability for complex SQL queries.",

                code: `WITH high_salary AS (

    SELECT *

    FROM employees

    WHERE salary > 50000

)

SELECT *

FROM high_salary;`
            },

            {
                id: 2,

                title: "ROW_NUMBER Window Function",

                explanation:
                    "ROW_NUMBER assigns a sequential number to rows based on a specified order.",

                importance:
                    "Window functions are extremely useful for reporting, ranking and analytics.",

                code: `SELECT

    name,

    salary,

    ROW_NUMBER() OVER (

        ORDER BY salary DESC

    ) AS rank

FROM employees;`
            },

            {
                id: 3,

                title: "RANK Function",

                explanation:
                    "RANK assigns ranking values to rows and handles duplicate values by skipping subsequent ranks.",

                importance:
                    "Frequently used in reporting and interview questions.",

                code: `SELECT

    name,

    salary,

    RANK() OVER (

        ORDER BY salary DESC

    ) AS salary_rank

FROM employees;`
            }

        ]
    }

];