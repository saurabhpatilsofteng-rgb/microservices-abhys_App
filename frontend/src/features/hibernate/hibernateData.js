export const hibernateModules = [

    {
        id: 1,
        slug: "jpa-introduction",
        title: "JPA Introduction",

        description:
            "Understand JPA, ORM and how Java objects are mapped to relational database tables.",

        topics: [

            {
                id: 1,
                title: "What is JPA?",

                explanation:
                    "JPA, or Jakarta Persistence API, is a specification that defines how Java objects can be persisted to relational databases.",

                importance:
                    "JPA provides a standard persistence API. Hibernate is one of the most popular implementations of JPA.",

                code: `JPA

Specification
     ↓
Defines Persistence API


Hibernate

Implementation
     ↓
Implements JPA`
            },

            {
                id: 2,
                title: "What is ORM?",

                explanation:
                    "ORM stands for Object Relational Mapping. It maps Java objects to database tables.",

                importance:
                    "ORM reduces the amount of SQL and JDBC boilerplate required for database operations.",

                code: `Java Object

User
 |
 | ORM
 ↓
Database Table

users

id
name
email`
            },

            {
                id: 3,
                title: "JPA vs Hibernate",

                explanation:
                    "JPA is a specification while Hibernate is an implementation of the JPA specification.",

                importance:
                    "This distinction is frequently asked in Java and Spring interviews.",

                code: `JPA
↓
Specification


Hibernate
↓
Implementation


Spring Data JPA
↓
Simplifies JPA usage`
            }

        ]
    },


    {
        id: 2,
        slug: "entity-mapping",
        title: "Entity Mapping",

        description:
            "Learn how Java classes and fields are mapped to database tables and columns.",

        topics: [

            {
                id: 1,
                title: "@Entity",

                explanation:
                    "The @Entity annotation marks a Java class as a JPA entity that can be persisted in a database.",

                importance:
                    "Every JPA entity that represents a database table is normally annotated with @Entity.",

                code: `@Entity
public class User {

    private Long id;

    private String name;

    private String email;

}`
            },

            {
                id: 2,
                title: "@Table",

                explanation:
                    "@Table specifies the database table associated with an entity.",

                importance:
                    "It allows the Java class name and database table name to be different.",

                code: `@Entity
@Table(name = "users")
public class User {

}`
            },

            {
                id: 3,
                title: "@Column",

                explanation:
                    "@Column is used to customize the mapping between a Java field and a database column.",

                importance:
                    "It allows constraints and column names to be specified.",

                code: `@Column(
    name = "email",
    nullable = false,
    unique = true
)
private String email;`
            }

        ]
    },


    {
        id: 3,
        slug: "primary-key",
        title: "Primary Key",

        description:
            "Learn how JPA identifies entities using primary keys.",

        topics: [

            {
                id: 1,
                title: "@Id",

                explanation:
                    "The @Id annotation identifies the primary key of an entity.",

                importance:
                    "Every JPA entity must have an identifier.",

                code: `@Entity
public class User {

    @Id
    private Long id;

}`
            },

            {
                id: 2,
                title: "@GeneratedValue",

                explanation:
                    "@GeneratedValue specifies how the primary key value should be generated.",

                importance:
                    "It avoids manually generating database identifiers.",

                code: `@Id

@GeneratedValue(
    strategy = GenerationType.IDENTITY
)

private Long id;`
            },

            {
                id: 3,
                title: "Generation Strategies",

                explanation:
                    "JPA supports strategies such as AUTO, IDENTITY, SEQUENCE and TABLE.",

                importance:
                    "Choosing the appropriate strategy depends on the database and application requirements.",

                code: `GenerationType.AUTO

GenerationType.IDENTITY

GenerationType.SEQUENCE

GenerationType.TABLE`
            }

        ]
    },


    {
        id: 4,
        slug: "relationships",
        title: "Entity Relationships",

        description:
            "Learn how entities are related to each other in JPA.",

        topics: [

            {
                id: 1,
                title: "@OneToOne",

                explanation:
                    "One entity is associated with exactly one instance of another entity.",

                importance:
                    "Used for relationships such as User and UserProfile.",

                code: `User
 |
 | 1 : 1
 |
UserProfile


@OneToOne
private UserProfile profile;`
            },

            {
                id: 2,
                title: "@OneToMany",

                explanation:
                    "One entity is associated with multiple instances of another entity.",

                importance:
                    "Common examples include Customer and Orders.",

                code: `Customer

    |
    | 1 : N
    ↓

Orders


@OneToMany
private List<Order> orders;`
            },

            {
                id: 3,
                title: "@ManyToOne",

                explanation:
                    "Multiple entities are associated with one entity.",

                importance:
                    "It is one of the most commonly used relationships in database applications.",

                code: `Orders

  N
  |
  |
  1
  ↓

Customer


@ManyToOne
private Customer customer;`
            },

            {
                id: 4,
                title: "@ManyToMany",

                explanation:
                    "Multiple entities can be associated with multiple entities.",

                importance:
                    "Common examples include Students and Courses.",

                code: `Students

    N
    |
    |
    N
    ↓

Courses


@ManyToMany
private Set<Course> courses;`
            }

        ]
    },


    {
        id: 5,
        slug: "fetch-types",
        title: "Fetch Types",

        description:
            "Understand LAZY and EAGER loading in JPA.",

        topics: [

            {
                id: 1,
                title: "Lazy Loading",

                explanation:
                    "Lazy loading delays loading an associated entity or collection until it is actually accessed.",

                importance:
                    "Lazy loading can reduce unnecessary database queries and improve performance.",

                code: `@OneToMany(
    fetch = FetchType.LAZY
)
private List<Order> orders;`
            },

            {
                id: 2,
                title: "Eager Loading",

                explanation:
                    "Eager loading loads the associated data immediately along with the owning entity.",

                importance:
                    "Eager loading should be used carefully because it can load unnecessary data.",

                code: `@ManyToOne(
    fetch = FetchType.EAGER
)
private Department department;`
            },

            {
                id: 3,
                title: "Lazy vs Eager",

                explanation:
                    "Lazy loading loads data when required, while eager loading loads it immediately.",

                importance:
                    "Incorrect fetch strategies can cause serious performance problems.",

                code: `LAZY

User
 ↓
Only User loaded

Orders loaded
when accessed


EAGER

User
 ↓
User + Orders
loaded immediately`
            }

        ]
    },


    {
        id: 6,
        slug: "cascade",
        title: "Cascade Types",

        description:
            "Learn how persistence operations are propagated between related entities.",

        topics: [

            {
                id: 1,
                title: "CascadeType.PERSIST",

                explanation:
                    "PERSIST propagates the persist operation from the parent entity to its related entities.",

                importance:
                    "Useful when child entities should be persisted together with the parent.",

                code: `@OneToMany(
    cascade = CascadeType.PERSIST
)
private List<Order> orders;`
            },

            {
                id: 2,
                title: "CascadeType.ALL",

                explanation:
                    "CascadeType.ALL enables all cascade operations.",

                importance:
                    "It should be used carefully because delete operations can also propagate.",

                code: `@OneToMany(
    cascade = CascadeType.ALL
)
private List<Order> orders;`
            },

            {
                id: 3,
                title: "orphanRemoval",

                explanation:
                    "orphanRemoval removes child entities that are removed from the parent's collection.",

                importance:
                    "It is useful for tightly owned child entities.",

                code: `@OneToMany(
    cascade = CascadeType.ALL,
    orphanRemoval = true
)
private List<Order> orders;`
            }

        ]
    },


    {
        id: 7,
        slug: "entity-lifecycle",
        title: "Entity Lifecycle",

        description:
            "Understand the different states of a JPA entity.",

        topics: [

            {
                id: 1,
                title: "Entity States",

                explanation:
                    "JPA entities move through transient, managed, detached and removed states.",

                importance:
                    "Understanding entity states is important for debugging persistence problems.",

                code: `Transient
   ↓
Persist
   ↓
Managed
   ↓
Detach
   ↓
Detached


Managed
   ↓
Remove
   ↓
Removed`
            },

            {
                id: 2,
                title: "Persistence Context",

                explanation:
                    "The persistence context is a set of managed entity instances tracked by the EntityManager.",

                importance:
                    "It is responsible for dirty checking and identity management.",

                code: `EntityManager

      ↓

Persistence Context

      ↓

Managed Entities`
            }

        ]
    },


    {
        id: 8,
        slug: "jpql",
        title: "JPQL",

        description:
            "Learn Java Persistence Query Language for querying entities.",

        topics: [

            {
                id: 1,
                title: "What is JPQL?",

                explanation:
                    "JPQL is an object-oriented query language used to query JPA entities rather than database tables directly.",

                importance:
                    "JPQL allows database-independent queries based on the entity model.",

                code: `SELECT u
FROM User u
WHERE u.email = :email`
            },

            {
                id: 2,
                title: "@Query",

                explanation:
                    "Spring Data JPA allows custom JPQL queries using the @Query annotation.",

                importance:
                    "It is useful when derived query methods are not sufficient.",

                code: `@Query("""
    SELECT u
    FROM User u
    WHERE u.email = :email
""")
Optional<User> findByEmail(
    @Param("email")
    String email
);`
            }

        ]
    },


    {
        id: 9,
        slug: "native-query",
        title: "Native SQL Queries",

        description:
            "Learn how to execute database-specific SQL queries from JPA.",

        topics: [

            {
                id: 1,
                title: "Native Query",

                explanation:
                    "A native query executes SQL directly against the database instead of using JPQL.",

                importance:
                    "Native queries are useful when database-specific features or complex SQL are required.",

                code: `@Query(
    value = """
        SELECT *
        FROM users
        WHERE email = :email
    """,
    nativeQuery = true
)
Optional<User> findUser(
    @Param("email")
    String email
);`
            }

        ]
    },


    {
        id: 10,
        slug: "pagination-sorting",
        title: "Pagination and Sorting",

        description:
            "Learn how to efficiently retrieve large datasets using pagination and sorting.",

        topics: [

            {
                id: 1,
                title: "Pagination",

                explanation:
                    "Pagination retrieves a limited number of records instead of loading the entire table.",

                importance:
                    "It is essential for APIs that work with large datasets.",

                code: `Pageable pageable =
    PageRequest.of(
        0,
        10
    );

Page<User> users =
    repository.findAll(pageable);`
            },

            {
                id: 2,
                title: "Sorting",

                explanation:
                    "Spring Data JPA provides sorting support through the Sort class.",

                importance:
                    "Sorting is commonly required by REST APIs.",

                code: `Sort sort =
    Sort.by("name")
        .ascending();

List<User> users =
    repository.findAll(sort);`
            }

        ]
    },


    {
        id: 11,
        slug: "transactions",
        title: "Transactions",

        description:
            "Understand transaction management in JPA and Spring.",

        topics: [

            {
                id: 1,
                title: "@Transactional",

                explanation:
                    "@Transactional defines a transactional boundary around a method or class.",

                importance:
                    "Transactions ensure that a group of database operations behaves consistently.",

                code: `@Transactional

public void transferMoney(
        Long from,
        Long to,
        BigDecimal amount) {

    debit(from, amount);

    credit(to, amount);

}`
            },

            {
                id: 2,
                title: "Transaction Rollback",

                explanation:
                    "If a transaction fails, changes can be rolled back according to the transaction configuration.",

                importance:
                    "Rollback protects database consistency.",

                code: `BEGIN

Debit Account
      ↓
Credit Account
      ↓
Success

COMMIT


Failure

      ↓

ROLLBACK`
            }

        ]
    },


    {
        id: 12,
        slug: "first-level-cache",
        title: "First-Level Cache",

        description:
            "Understand the persistence-context cache maintained by EntityManager.",

        topics: [

            {
                id: 1,
                title: "What is First-Level Cache?",

                explanation:
                    "The first-level cache is associated with the persistence context and is enabled by default.",

                importance:
                    "It prevents repeated database queries for the same entity within the same persistence context.",

                code: `find(User.class, 1)

       ↓

Database


find(User.class, 1)

       ↓

Persistence Context

       ↓

Cached Entity`
            },

            {
                id: 2,
                title: "Dirty Checking",

                explanation:
                    "Hibernate automatically detects changes to managed entities and synchronizes those changes with the database during flush.",

                importance:
                    "It reduces the need to explicitly write update SQL.",

                code: `User user =
    repository.findById(1L);

user.setName("Saurabh");


// No explicit update required

transaction commit

        ↓

Hibernate detects change

        ↓

UPDATE users ...`
            }

        ]
    },


    {
        id: 13,
        slug: "n-plus-one",
        title: "N+1 Query Problem",

        description:
            "Understand one of the most common Hibernate performance problems.",

        topics: [

            {
                id: 1,
                title: "What is N+1?",

                explanation:
                    "The N+1 problem occurs when one query loads parent records and then additional queries are executed for each parent to load related data.",

                importance:
                    "It can cause severe performance problems when processing large datasets.",

                code: `1 query

SELECT * FROM users;


Then:

SELECT * FROM orders
WHERE user_id = 1;

SELECT * FROM orders
WHERE user_id = 2;

SELECT * FROM orders
WHERE user_id = 3;

...

Total:

1 + N queries`
            },

            {
                id: 2,
                title: "Solving N+1",

                explanation:
                    "Fetch joins, entity graphs and carefully designed queries can be used to avoid unnecessary queries.",

                importance:
                    "Understanding query performance is essential in production Hibernate applications.",

                code: `@Query("""
    SELECT u
    FROM User u
    JOIN FETCH u.orders
""")
List<User> findUsersWithOrders();`
            }

        ]
    },


    {
        id: 14,
        slug: "best-practices",
        title: "Hibernate/JPA Best Practices",

        description:
            "Learn professional Hibernate and JPA practices for production applications.",

        topics: [

            {
                id: 1,
                title: "Prefer LAZY Relationships",

                explanation:
                    "Use lazy loading for relationships unless there is a clear reason to load related data immediately.",

                importance:
                    "It helps avoid loading unnecessary data and reduces performance problems.",

                code: `@OneToMany(
    fetch = FetchType.LAZY
)
private List<Order> orders;`
            },

            {
                id: 2,
                title: "Use DTOs",

                explanation:
                    "DTOs should normally be used for API boundaries rather than exposing entities directly.",

                importance:
                    "This improves security, serialization behavior and API design.",

                code: `Controller
    ↓
DTO
    ↓
Service
    ↓
Entity
    ↓
Repository`
            },

            {
                id: 3,
                title: "Avoid Excessive Cascade",

                explanation:
                    "Cascade should only be used when the lifecycle of the child entity is genuinely controlled by the parent.",

                importance:
                    "Incorrect cascading can accidentally update or delete large amounts of data.",

                code: `Use carefully:

cascade = CascadeType.ALL

Especially with:

orphanRemoval = true`
            },

            {
                id: 4,
                title: "Monitor SQL Queries",

                explanation:
                    "SQL logging and query analysis should be used to identify unnecessary queries and performance problems.",

                importance:
                    "Hibernate abstracts SQL but developers still need to understand what SQL is actually executed.",

                code: `spring.jpa.show-sql=true

spring.jpa.properties
.hibernate.format_sql=true`
            }

        ]
    }

];