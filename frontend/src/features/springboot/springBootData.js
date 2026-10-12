export const springBootModules = [

    {
        id: 1,
        slug: "spring-boot-introduction",
        title: "Spring Boot Introduction",

        description:
            "Learn what Spring Boot is, why it is used and how it simplifies Spring application development.",

        topics: [

            {
                id: 1,
                title: "What is Spring Boot?",

                explanation:
                    "Spring Boot is a framework built on top of the Spring Framework that simplifies the development of production-ready Java applications.",

                importance:
                    "Spring Boot is widely used for developing REST APIs, web applications and microservices.",

                code: `@SpringBootApplication
public class Application {

    public static void main(String[] args) {

        SpringApplication.run(
            Application.class,
            args
        );

    }
}`
            },

            {
                id: 2,
                title: "Spring vs Spring Boot",

                explanation:
                    "Spring provides the core framework features while Spring Boot provides conventions, auto-configuration and embedded servers to simplify application development.",

                importance:
                    "Understanding the difference helps you understand why Spring Boot applications require much less configuration.",

                code: `Spring Framework

Configuration
+
Dependencies
+
Server Configuration


Spring Boot

Auto Configuration
+
Starter Dependencies
+
Embedded Server
+
Production Features`
            },

            {
                id: 3,
                title: "Why Spring Boot?",

                explanation:
                    "Spring Boot reduces configuration and provides an easy way to create production-ready applications.",

                importance:
                    "It significantly improves developer productivity.",

                code: `Spring Boot provides:

1. Auto Configuration
2. Starter Dependencies
3. Embedded Server
4. Production Features
5. Easy REST API Development`
            }

        ]
    },


    {
        id: 2,
        slug: "project-structure",
        title: "Spring Boot Project Structure",

        description:
            "Understand the standard structure of a professional Spring Boot project.",

        topics: [

            {
                id: 1,
                title: "Standard Project Structure",

                explanation:
                    "A Spring Boot project is commonly divided into controller, service, repository, entity, DTO and configuration layers.",

                importance:
                    "A proper structure keeps a large application maintainable.",

                code: `src
└── main
    ├── java
    │   └── com.example.app
    │       ├── controller
    │       ├── service
    │       ├── repository
    │       ├── entity
    │       ├── dto
    │       └── config
    │
    └── resources
        ├── application.properties
        └── static`
            },

            {
                id: 2,
                title: "Controller Layer",

                explanation:
                    "The Controller layer receives HTTP requests and sends responses.",

                importance:
                    "Controllers provide the API entry point for clients.",

                code: `@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public String getUsers() {

        return "Users";

    }
}`
            },

            {
                id: 3,
                title: "Service Layer",

                explanation:
                    "The Service layer contains business logic.",

                importance:
                    "Business logic should not be placed directly inside controllers.",

                code: `@Service
public class UserService {

    public String getUser() {

        return "User";

    }
}`
            },

            {
                id: 4,
                title: "Repository Layer",

                explanation:
                    "The Repository layer communicates with the database.",

                importance:
                    "It separates database operations from business logic.",

                code: `@Repository
public interface UserRepository
        extends JpaRepository<User, Long> {

}`
            }

        ]
    },


    {
        id: 3,
        slug: "spring-initializr",
        title: "Spring Initializr",

        description:
            "Learn how to create Spring Boot projects using Spring Initializr.",

        topics: [

            {
                id: 1,
                title: "What is Spring Initializr?",

                explanation:
                    "Spring Initializr is a web-based tool used to generate Spring Boot projects with the required dependencies and configuration.",

                importance:
                    "It is the fastest standard way to start a Spring Boot project.",

                code: `Project Settings

Project:
Maven

Language:
Java

Spring Boot:
3.x

Packaging:
Jar

Java:
21`
            },

            {
                id: 2,
                title: "Selecting Dependencies",

                explanation:
                    "Spring Initializr allows developers to select dependencies such as Spring Web, Spring Data JPA, PostgreSQL Driver and Spring Security.",

                importance:
                    "Selecting the correct dependencies creates the required project configuration automatically.",

                code: `Common Dependencies

Spring Web
Spring Data JPA
PostgreSQL Driver
Validation
Spring Security
Lombok
Actuator`
            }

        ]
    },


    {
        id: 4,
        slug: "starters",
        title: "Spring Boot Starters",

        description:
            "Learn how Spring Boot Starter dependencies simplify dependency management.",

        topics: [

            {
                id: 1,
                title: "What are Starters?",

                explanation:
                    "Spring Boot Starters are dependency descriptors that provide a convenient way to include a group of related dependencies.",

                importance:
                    "They reduce the need to manually configure many individual dependencies.",

                code: `<dependency>
    <groupId>
        org.springframework.boot
    </groupId>

    <artifactId>
        spring-boot-starter-web
    </artifactId>
</dependency>`
            },

            {
                id: 2,
                title: "spring-boot-starter-web",

                explanation:
                    "This starter is commonly used to build web applications and REST APIs.",

                importance:
                    "It provides the infrastructure needed for Spring MVC and embedded web applications.",

                code: `spring-boot-starter-web

        ↓

Spring MVC
+
Jackson
+
Embedded Tomcat`
            },

            {
                id: 3,
                title: "spring-boot-starter-data-jpa",

                explanation:
                    "This starter provides support for Spring Data JPA and database persistence.",

                importance:
                    "It simplifies database access using JPA repositories.",

                code: `spring-boot-starter-data-jpa

        ↓

Spring Data JPA

        ↓

Hibernate

        ↓

Database`
            }

        ]
    },


    {
        id: 5,
        slug: "application-properties",
        title: "Application Properties",

        description:
            "Learn how to configure Spring Boot applications using application.properties and YAML.",

        topics: [

            {
                id: 1,
                title: "application.properties",

                explanation:
                    "application.properties contains external configuration for a Spring Boot application.",

                importance:
                    "It allows configuration to be separated from Java source code.",

                code: `server.port=8081

spring.application.name=auth-service

spring.datasource.url=jdbc:postgresql://localhost:5432/auth_db

spring.datasource.username=postgres

spring.datasource.password=postgres`
            },

            {
                id: 2,
                title: "application.yml",

                explanation:
                    "YAML can be used as an alternative configuration format.",

                importance:
                    "YAML is useful for organizing hierarchical configuration.",

                code: `server:
  port: 8081

spring:
  application:
    name: auth-service

  datasource:
    url: jdbc:postgresql://localhost:5432/auth_db`
            }

        ]
    },


    {
        id: 6,
        slug: "embedded-server",
        title: "Embedded Server",

        description:
            "Understand embedded Tomcat and how Spring Boot applications run without external server installation.",

        topics: [

            {
                id: 1,
                title: "Embedded Tomcat",

                explanation:
                    "Spring Boot can package an embedded web server such as Tomcat inside the application.",

                importance:
                    "You can run the application directly using java -jar without deploying a WAR to an external server.",

                code: `mvn clean package

java -jar target/app.jar

        ↓

Embedded Tomcat

        ↓

Application Running`
            },

            {
                id: 2,
                title: "Changing Server Port",

                explanation:
                    "The default server port can be changed using application.properties.",

                importance:
                    "Different microservices commonly run on different ports.",

                code: `server.port=8081`
            }

        ]
    },


    {
        id: 7,
        slug: "rest-api",
        title: "REST API",

        description:
            "Learn how to build REST APIs using Spring Boot.",

        topics: [

            {
                id: 1,
                title: "GET API",

                explanation:
                    "GET is commonly used to retrieve resources.",

                importance:
                    "GET APIs are fundamental to REST-based applications.",

                code: `@GetMapping("/users")
public List<User> getUsers() {

    return userService.getUsers();

}`
            },

            {
                id: 2,
                title: "POST API",

                explanation:
                    "POST is commonly used to create a new resource.",

                importance:
                    "POST is one of the primary operations in CRUD APIs.",

                code: `@PostMapping("/users")
public User createUser(
        @RequestBody User user) {

    return userService.save(user);

}`
            },

            {
                id: 3,
                title: "PUT API",

                explanation:
                    "PUT is commonly used to update an existing resource.",

                importance:
                    "It is required for implementing update operations.",

                code: `@PutMapping("/users/{id}")
public User updateUser(
        @PathVariable Long id,
        @RequestBody User user) {

    return userService.update(id, user);

}`
            },

            {
                id: 4,
                title: "DELETE API",

                explanation:
                    "DELETE is used to remove a resource.",

                importance:
                    "It completes the standard CRUD operation set.",

                code: `@DeleteMapping("/users/{id}")
public void deleteUser(
        @PathVariable Long id) {

    userService.delete(id);

}`
            }

        ]
    },


    {
        id: 8,
        slug: "dto",
        title: "DTO",

        description:
            "Learn how Data Transfer Objects are used in Spring Boot applications.",

        topics: [

            {
                id: 1,
                title: "What is DTO?",

                explanation:
                    "A DTO is an object used to transfer selected data between application layers or between the client and server.",

                importance:
                    "DTOs prevent exposing internal entities directly through APIs.",

                code: `public class UserDTO {

    private String name;

    private String email;

}`
            },

            {
                id: 2,
                title: "Entity vs DTO",

                explanation:
                    "An Entity represents database data while a DTO represents data transferred through an API.",

                importance:
                    "Separating them improves security and API design.",

                code: `Entity

User
 ↓
Database


DTO

UserRequest
 ↓
API`
            }

        ]
    },


    {
        id: 9,
        slug: "validation",
        title: "Validation",

        description:
            "Learn how to validate incoming API requests.",

        topics: [

            {
                id: 1,
                title: "@Valid",

                explanation:
                    "@Valid triggers validation on an incoming request object.",

                importance:
                    "Validation prevents invalid data from entering the application.",

                code: `@PostMapping("/users")
public User createUser(
        @Valid
        @RequestBody
        UserRequest request) {

    return service.create(request);

}`
            },

            {
                id: 2,
                title: "Validation Annotations",

                explanation:
                    "Jakarta Validation provides annotations such as @NotNull, @NotBlank, @Email and @Size.",

                importance:
                    "These annotations provide declarative input validation.",

                code: `public class UserRequest {

    @NotBlank
    private String name;

    @Email
    private String email;

    @Size(min = 8)
    private String password;

}`
            }

        ]
    },


    {
        id: 10,
        slug: "exception-handling",
        title: "Exception Handling",

        description:
            "Learn professional exception handling for Spring Boot REST APIs.",

        topics: [

            {
                id: 1,
                title: "@ExceptionHandler",

                explanation:
                    "@ExceptionHandler handles specific exceptions inside a controller.",

                importance:
                    "It allows applications to return meaningful error responses.",

                code: `@ExceptionHandler(
    UserNotFoundException.class
)
public ResponseEntity<String>
handleUserNotFound(
        UserNotFoundException ex) {

    return ResponseEntity
        .status(HttpStatus.NOT_FOUND)
        .body(ex.getMessage());
}`
            },

            {
                id: 2,
                title: "@RestControllerAdvice",

                explanation:
                    "@RestControllerAdvice allows exception handling to be centralized across controllers.",

                importance:
                    "Centralized exception handling keeps controllers clean and provides consistent API responses.",

                code: `@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String>
    handleException(Exception ex) {

        return ResponseEntity
            .status(500)
            .body(ex.getMessage());

    }
}`
            }

        ]
    },


    {
        id: 11,
        slug: "profiles",
        title: "Spring Boot Profiles",

        description:
            "Learn how to maintain different configurations for development, testing and production.",

        topics: [

            {
                id: 1,
                title: "What are Profiles?",

                explanation:
                    "Spring Profiles allow different configurations to be activated for different environments.",

                importance:
                    "Profiles are essential when the same application runs in development, testing and production environments.",

                code: `application.properties

spring.profiles.active=dev


application-dev.properties

server.port=8081


application-prod.properties

server.port=8080`
            },

            {
                id: 2,
                title: "@Profile",

                explanation:
                    "@Profile controls whether a Bean is registered for a specific environment.",

                importance:
                    "It allows environment-specific Bean configuration.",

                code: `@Component
@Profile("dev")
public class DevService {

}`
            }

        ]
    },


    {
        id: 12,
        slug: "actuator",
        title: "Spring Boot Actuator",

        description:
            "Learn monitoring and management features provided by Spring Boot Actuator.",

        topics: [

            {
                id: 1,
                title: "What is Actuator?",

                explanation:
                    "Spring Boot Actuator provides production-ready endpoints for monitoring and managing applications.",

                importance:
                    "Actuator is especially useful in production and microservices environments.",

                code: `GET

/actuator/health

Response:

{
    "status": "UP"
}`
            },

            {
                id: 2,
                title: "Health Endpoint",

                explanation:
                    "The health endpoint shows whether the application and configured dependencies are healthy.",

                importance:
                    "Load balancers and monitoring systems can use health information.",

                code: `management.endpoints
    .web.exposure
    .include=health,info`
            }

        ]
    },


    {
        id: 13,
        slug: "spring-boot-best-practices",
        title: "Spring Boot Best Practices",

        description:
            "Learn professional practices for building maintainable Spring Boot applications.",

        topics: [

            {
                id: 1,
                title: "Layered Architecture",

                explanation:
                    "Separate Controller, Service, Repository, Entity and DTO responsibilities.",

                importance:
                    "This makes the application easier to maintain, test and scale.",

                code: `Controller
    ↓
Service
    ↓
Repository
    ↓
Database`
            },

            {
                id: 2,
                title: "Use Constructor Injection",

                explanation:
                    "Constructor injection makes required dependencies explicit.",

                importance:
                    "It improves testability and makes dependencies easier to understand.",

                code: `@Service
public class UserService {

    private final UserRepository repository;

    public UserService(
            UserRepository repository) {

        this.repository = repository;
    }
}`
            },

            {
                id: 3,
                title: "Do Not Expose Entities Directly",

                explanation:
                    "Use DTOs for API requests and responses instead of exposing database entities directly.",

                importance:
                    "This protects internal database structure and gives the API a stable contract.",

                code: `Controller
    ↓
Request DTO
    ↓
Service
    ↓
Entity
    ↓
Repository`
            }

        ]
    }

];