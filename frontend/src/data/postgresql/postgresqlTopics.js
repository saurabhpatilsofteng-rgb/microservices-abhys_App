export const postgresqlTopics = [

    {
        id: 1,

        module: "postgresql-basics",

        title: "What is PostgreSQL?",

        difficulty: "Beginner",

        concept:
            "PostgreSQL is an open-source object-relational database management system.",

        explanation: `
PostgreSQL is a powerful open-source relational database.

It supports SQL as well as advanced features such as
transactions, indexes, constraints, views, functions and JSON.

It is widely used for backend applications and enterprise systems.
`,

        whyImportant: `
PostgreSQL is commonly used with Java, Spring Boot,
Hibernate, JPA and microservices applications.

Understanding PostgreSQL is important for backend development.
`,

        syntax: `
CREATE DATABASE database_name;
`,

        code: `
CREATE DATABASE company_db;
`,

        output: `
CREATE DATABASE
`,

        realWorldUse: `
PostgreSQL can be used as the primary database
for Spring Boot applications and microservices.
`,

        interviewQuestions: [
            "What is PostgreSQL?",
            "What are the advantages of PostgreSQL?",
            "What is the difference between PostgreSQL and MySQL?",
            "What is a relational database?",
            "What is SQL?"
        ],

        commonMistakes: [
            "Confusing PostgreSQL with SQL.",
            "Forgetting that PostgreSQL is a database management system.",
            "Using incorrect database connection properties."
        ]
    }

];