export const postgresqlModules = [

    {
        id: 1,
        slug: "postgresql-introduction",
        title: "PostgreSQL Introduction",
        description:
            "Learn what PostgreSQL is and why it is widely used in enterprise applications.",

        topics: [

            {
                id: 1,

                title: "What is PostgreSQL?",

                explanation:
                    "PostgreSQL is a powerful open-source relational database management system. It stores structured data and supports SQL, transactions, indexes, functions, views and advanced database features.",

                importance:
                    "PostgreSQL is widely used with Java, Spring Boot, microservices and enterprise applications.",

                code: `PostgreSQL

        ↓

Database

        ↓

Schema

        ↓

Tables

        ↓

Rows and Columns`
            },

            {
                id: 2,

                title: "PostgreSQL vs MySQL",

                explanation:
                    "Both PostgreSQL and MySQL are relational databases. PostgreSQL is known for advanced SQL features, extensibility and strong support for complex queries.",

                importance:
                    "Understanding database differences helps you choose the correct database for an application.",

                code: `PostgreSQL
    ↓
Advanced SQL
Transactions
JSONB
Functions
Extensions


MySQL
    ↓
Popular Web Database
Simple Setup
High Performance`
            }

        ]
    },


    {
        id: 2,
        slug: "database-management",
        title: "Database Management",
        description:
            "Learn how to create, view and delete PostgreSQL databases.",

        topics: [

            {
                id: 1,

                title: "Create Database",

                explanation:
                    "CREATE DATABASE creates a new PostgreSQL database.",

                importance:
                    "Every application needs a database to store its application data.",

                code: `CREATE DATABASE auth_db;`
            },

            {
                id: 2,

                title: "List Databases",

                explanation:
                    "PostgreSQL provides commands to view available databases.",

                importance:
                    "Useful when managing multiple databases in development and production.",

                code: `\\l`
            },

            {
                id: 3,

                title: "Connect to Database",

                explanation:
                    "The psql command-line tool allows you to connect to a PostgreSQL database.",

                importance:
                    "Connecting through psql is useful for executing SQL commands and debugging.",

                code: `\\c auth_db`
            },

            {
                id: 4,

                title: "Drop Database",

                explanation:
                    "DROP DATABASE permanently deletes a database.",

                importance:
                    "Use carefully because all tables and data inside the database can be removed.",

                code: `DROP DATABASE auth_db;`
            }

        ]
    },


    {
        id: 3,
        slug: "schemas",
        title: "Schemas",
        description:
            "Learn how PostgreSQL schemas organize database objects.",

        topics: [

            {
                id: 1,

                title: "What is a Schema?",

                explanation:
                    "A schema is a logical namespace used to organize tables, views, functions and other database objects.",

                importance:
                    "Schemas are useful in large applications with multiple modules.",

                code: `CREATE SCHEMA company;`
            },

            {
                id: 2,

                title: "Create Table Inside Schema",

                explanation:
                    "Tables can be created inside a specific schema.",

                importance:
                    "This helps separate modules such as authentication, accounts and HR.",

                code: `CREATE TABLE company.employees (

    id SERIAL PRIMARY KEY,

    name VARCHAR(100)

);`
            },

            {
                id: 3,

                title: "Public Schema",

                explanation:
                    "PostgreSQL databases normally contain a default schema named public.",

                importance:
                    "If no schema is specified, tables are commonly created in the public schema.",

                code: `CREATE TABLE users (

    id SERIAL PRIMARY KEY,

    name VARCHAR(100)

);`
            }

        ]
    },


    {
        id: 4,
        slug: "data-types",
        title: "PostgreSQL Data Types",
        description:
            "Learn numeric, text, boolean, date, UUID and JSON data types.",

        topics: [

            {
                id: 1,

                title: "Numeric Types",

                explanation:
                    "PostgreSQL supports integer and decimal data types such as SMALLINT, INTEGER, BIGINT and NUMERIC.",

                importance:
                    "Choosing the correct data type improves data integrity and storage efficiency.",

                code: `CREATE TABLE products (

    id SERIAL PRIMARY KEY,

    quantity INTEGER,

    price NUMERIC(10,2)

);`
            },

            {
                id: 2,

                title: "Text Types",

                explanation:
                    "VARCHAR and TEXT are commonly used for storing string values.",

                importance:
                    "These are frequently used for names, emails, descriptions and application data.",

                code: `CREATE TABLE users (

    name VARCHAR(100),

    email VARCHAR(150),

    description TEXT

);`
            },

            {
                id: 3,

                title: "Boolean",

                explanation:
                    "BOOLEAN stores true or false values.",

                importance:
                    "Useful for flags such as active, enabled and deleted.",

                code: `CREATE TABLE users (

    id SERIAL PRIMARY KEY,

    active BOOLEAN DEFAULT true

);`
            },

            {
                id: 4,

                title: "UUID",

                explanation:
                    "UUID is commonly used as a globally unique identifier.",

                importance:
                    "UUID is useful in distributed systems and microservices where generating unique IDs independently is important.",

                code: `CREATE TABLE users (

    id UUID PRIMARY KEY,

    name VARCHAR(100)

);`
            },

            {
                id: 5,

                title: "JSONB",

                explanation:
                    "JSONB stores JSON data in a binary format optimized for querying.",

                importance:
                    "JSONB is one of PostgreSQL's powerful features for semi-structured data.",

                code: `CREATE TABLE products (

    id SERIAL PRIMARY KEY,

    metadata JSONB

);`
            }

        ]
    },


    {
        id: 5,
        slug: "tables",
        title: "Tables and Constraints",
        description:
            "Learn table creation, primary keys, foreign keys and constraints.",

        topics: [

            {
                id: 1,

                title: "Create Table",

                explanation:
                    "CREATE TABLE creates a new table with columns and data types.",

                importance:
                    "Tables are the primary structure used to store relational data.",

                code: `CREATE TABLE users (

    id SERIAL PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(150) UNIQUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);`
            },

            {
                id: 2,

                title: "Primary Key",

                explanation:
                    "A primary key uniquely identifies each row.",

                importance:
                    "Primary keys are essential for relationships and data integrity.",

                code: `id SERIAL PRIMARY KEY`
            },

            {
                id: 3,

                title: "Foreign Key",

                explanation:
                    "A foreign key creates a relationship between two tables.",

                importance:
                    "It maintains referential integrity between related records.",

                code: `CREATE TABLE orders (

    id SERIAL PRIMARY KEY,

    user_id INT,

    FOREIGN KEY (user_id)

    REFERENCES users(id)

);`
            },

            {
                id: 4,

                title: "Unique and Not Null",

                explanation:
                    "UNIQUE prevents duplicate values and NOT NULL prevents empty values.",

                importance:
                    "Constraints protect the database from invalid data.",

                code: `email VARCHAR(150)

UNIQUE

NOT NULL`
            }

        ]
    },


    {
        id: 6,
        slug: "crud-operations",
        title: "CRUD Operations",
        description:
            "Learn INSERT, SELECT, UPDATE and DELETE in PostgreSQL.",

        topics: [

            {
                id: 1,

                title: "INSERT",

                explanation:
                    "INSERT adds new records to a PostgreSQL table.",

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

                title: "SELECT",

                explanation:
                    "SELECT retrieves records from a database table.",

                importance:
                    "This is the Read operation and one of the most frequently used SQL commands.",

                code: `SELECT *

FROM users;`
            },

            {
                id: 3,

                title: "UPDATE",

                explanation:
                    "UPDATE modifies existing records.",

                importance:
                    "Always use WHERE when updating specific records.",

                code: `UPDATE users

SET name = 'Saurabh Patil'

WHERE id = 1;`
            },

            {
                id: 4,

                title: "DELETE",

                explanation:
                    "DELETE removes records from a table.",

                importance:
                    "Use WHERE carefully to avoid deleting all records.",

                code: `DELETE FROM users

WHERE id = 1;`
            }

        ]
    },


    {
        id: 7,
        slug: "postgresql-joins",
        title: "Joins",
        description:
            "Learn INNER JOIN, LEFT JOIN, RIGHT JOIN and FULL JOIN.",

        topics: [

            {
                id: 1,

                title: "INNER JOIN",

                explanation:
                    "INNER JOIN returns only rows with matching values in both tables.",

                importance:
                    "Joins are heavily used in enterprise applications and reporting.",

                code: `SELECT

    u.name,

    o.id

FROM users u

INNER JOIN orders o

ON u.id = o.user_id;`
            },

            {
                id: 2,

                title: "LEFT JOIN",

                explanation:
                    "LEFT JOIN returns all records from the left table and matching records from the right table.",

                importance:
                    "Useful when you need parent records even if related records do not exist.",

                code: `SELECT

    u.name,

    o.id

FROM users u

LEFT JOIN orders o

ON u.id = o.user_id;`
            },

            {
                id: 3,

                title: "FULL OUTER JOIN",

                explanation:
                    "FULL OUTER JOIN returns matching and non-matching records from both tables.",

                importance:
                    "Useful for comparing complete datasets.",

                code: `SELECT *

FROM users u

FULL OUTER JOIN orders o

ON u.id = o.user_id;`
            }

        ]
    },


    {
        id: 8,
        slug: "postgresql-indexes",
        title: "Indexes",
        description:
            "Learn how PostgreSQL indexes improve query performance.",

        topics: [

            {
                id: 1,

                title: "Create Index",

                explanation:
                    "An index helps PostgreSQL locate records faster.",

                importance:
                    "Indexes are important for large tables and frequently searched columns.",

                code: `CREATE INDEX idx_users_email

ON users(email);`
            },

            {
                id: 2,

                title: "Composite Index",

                explanation:
                    "A composite index contains multiple columns.",

                importance:
                    "Useful when queries frequently filter using the same combination of columns.",

                code: `CREATE INDEX idx_users_name_email

ON users(name, email);`
            },

            {
                id: 3,

                title: "EXPLAIN",

                explanation:
                    "EXPLAIN shows the query execution plan chosen by PostgreSQL.",

                importance:
                    "It is essential for analyzing and optimizing slow SQL queries.",

                code: `EXPLAIN

SELECT *

FROM users

WHERE email = 'test@gmail.com';`
            }

        ]
    },


    {
        id: 9,
        slug: "transactions",
        title: "Transactions",
        description:
            "Learn BEGIN, COMMIT, ROLLBACK and SAVEPOINT.",

        topics: [

            {
                id: 1,

                title: "BEGIN and COMMIT",

                explanation:
                    "BEGIN starts a transaction and COMMIT permanently saves all successful changes.",

                importance:
                    "Transactions are critical when multiple operations must succeed together.",

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
                    "ROLLBACK cancels changes made during the transaction.",

                importance:
                    "It prevents inconsistent data when an error occurs.",

                code: `BEGIN;


UPDATE users

SET salary = 50000

WHERE id = 1;


ROLLBACK;`
            },

            {
                id: 3,

                title: "SAVEPOINT",

                explanation:
                    "A SAVEPOINT creates a point inside a transaction that you can roll back to.",

                importance:
                    "Useful for complex transactions where only part of the work should be reverted.",

                code: `BEGIN;

SAVEPOINT update_user;


UPDATE users

SET name = 'New Name'

WHERE id = 1;


ROLLBACK TO update_user;


COMMIT;`
            }

        ]
    },


    {
        id: 10,
        slug: "functions",
        title: "Functions",
        description:
            "Learn how to create reusable PostgreSQL functions.",

        topics: [

            {
                id: 1,

                title: "Create Function",

                explanation:
                    "A PostgreSQL function contains reusable database logic and can return a value.",

                importance:
                    "Functions are useful when database logic needs to be reused by multiple queries or applications.",

                code: `CREATE OR REPLACE FUNCTION

get_total_users()

RETURNS INTEGER

LANGUAGE SQL

AS $$

    SELECT COUNT(*)

    FROM users;

$$;`
            },

            {
                id: 2,

                title: "Call Function",

                explanation:
                    "A PostgreSQL function can be called using SELECT.",

                importance:
                    "This allows reusable database logic to be executed easily.",

                code: `SELECT

get_total_users();`
            }

        ]
    },


    {
        id: 11,
        slug: "stored-procedures",
        title: "Stored Procedures",
        description:
            "Learn how PostgreSQL procedures execute database operations.",

        topics: [

            {
                id: 1,

                title: "Create Procedure",

                explanation:
                    "A stored procedure contains SQL logic that can be executed using CALL.",

                importance:
                    "Procedures are useful for complex database operations.",

                code: `CREATE PROCEDURE

delete_inactive_users()

LANGUAGE SQL

AS $$

    DELETE FROM users

    WHERE active = false;

$$;`
            },

            {
                id: 2,

                title: "Call Procedure",

                explanation:
                    "CALL executes a stored procedure.",

                importance:
                    "This allows applications to execute reusable database operations.",

                code: `CALL

delete_inactive_users();`
            }

        ]
    },


    {
        id: 12,
        slug: "views",
        title: "Views and Materialized Views",
        description:
            "Learn reusable virtual tables and materialized query results.",

        topics: [

            {
                id: 1,

                title: "View",

                explanation:
                    "A view is a virtual table created from a SQL query.",

                importance:
                    "Views simplify complex queries and provide abstraction.",

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

                title: "Materialized View",

                explanation:
                    "A materialized view stores the result of a query physically.",

                importance:
                    "Materialized views can improve performance for expensive reporting queries.",

                code: `CREATE MATERIALIZED VIEW

user_summary AS

SELECT

    COUNT(*) AS total_users

FROM users;`
            },

            {
                id: 3,

                title: "Refresh Materialized View",

                explanation:
                    "A materialized view must be refreshed to update its stored data.",

                importance:
                    "This is important when the underlying table data changes.",

                code: `REFRESH MATERIALIZED VIEW

user_summary;`
            }

        ]
    },


    {
        id: 13,
        slug: "jsonb",
        title: "JSON and JSONB",
        description:
            "Learn how PostgreSQL stores and queries JSON data.",

        topics: [

            {
                id: 1,

                title: "JSONB Data",

                explanation:
                    "JSONB stores structured JSON data and supports indexing and querying.",

                importance:
                    "JSONB is useful when some application data is semi-structured.",

                code: `CREATE TABLE products (

    id SERIAL PRIMARY KEY,

    details JSONB

);`
            },

            {
                id: 2,

                title: "Insert JSONB",

                explanation:
                    "JSON values can be inserted into JSONB columns.",

                importance:
                    "Useful when storing flexible metadata.",

                code: `INSERT INTO products (

    details

)

VALUES (

    '{
        "name": "Laptop",
        "price": 50000
    }'

);`
            },

            {
                id: 3,

                title: "Query JSONB",

                explanation:
                    "PostgreSQL provides operators to extract values from JSONB.",

                importance:
                    "You can query JSON data without manually parsing it in the application.",

                code: `SELECT

details->>'name'

FROM products;`
            }

        ]
    },


    {
        id: 14,
        slug: "performance",
        title: "Performance Optimization",
        description:
            "Learn query optimization, EXPLAIN ANALYZE and database performance concepts.",

        topics: [

            {
                id: 1,

                title: "EXPLAIN ANALYZE",

                explanation:
                    "EXPLAIN ANALYZE executes a query and shows actual execution information.",

                importance:
                    "It helps identify slow queries, expensive operations and inefficient query plans.",

                code: `EXPLAIN ANALYZE

SELECT *

FROM users

WHERE email = 'test@gmail.com';`
            },

            {
                id: 2,

                title: "Avoid SELECT *",

                explanation:
                    "Selecting only required columns reduces unnecessary data processing.",

                importance:
                    "This improves readability and can reduce network and database workload.",

                code: `-- Avoid

SELECT *

FROM users;


-- Better

SELECT

    id,

    name,

    email

FROM users;`
            },

            {
                id: 3,

                title: "Use Proper Indexes",

                explanation:
                    "Indexes can improve filtering and join performance when used appropriately.",

                importance:
                    "Index design is an important PostgreSQL performance skill.",

                code: `CREATE INDEX

idx_orders_user_id

ON orders(user_id);`
            }

        ]
    }


];