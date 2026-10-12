export const springCoreModules = [

    {
        id: 1,
        slug: "spring-introduction",
        title: "Spring Introduction",

        description:
            "Learn what the Spring Framework is and why it is used in Java applications.",

        topics: [

            {
                id: 1,

                title: "What is Spring?",

                explanation:
                    "Spring is a Java framework used to build enterprise applications. It provides infrastructure for dependency management, web applications, database access, security and more.",

                importance:
                    "Spring is one of the most widely used Java frameworks. Understanding Spring Core is essential before learning Spring MVC and Spring Boot.",

                code: `Traditional Java Application

Object creates Object

        ↓

Tight Coupling


Spring Application

Spring Container

        ↓

Creates Objects

        ↓

Manages Dependencies`
            },

            {
                id: 2,

                title: "Why Use Spring?",

                explanation:
                    "Spring reduces boilerplate code and helps manage object creation and dependencies.",

                importance:
                    "It helps build loosely coupled, maintainable and testable applications.",

                code: `Without Spring

UserService

    ↓ creates

UserRepository


With Spring

Spring Container

    ↓ injects

UserRepository

    ↓

UserService`
            }

        ]
    },


    {
        id: 2,
        slug: "ioc",
        title: "Inversion of Control (IoC)",

        description:
            "Understand how Spring manages object creation using Inversion of Control.",

        topics: [

            {
                id: 1,

                title: "What is IoC?",

                explanation:
                    "Inversion of Control means the responsibility of creating and managing objects is transferred from application code to the Spring container.",

                importance:
                    "IoC is one of the fundamental concepts of Spring.",

                code: `Without IoC

UserService service =
    new UserService();


With IoC

Spring Container

    ↓

Creates UserService

    ↓

Provides Object`
            },

            {
                id: 2,

                title: "IoC Container",

                explanation:
                    "The IoC Container creates, configures and manages Spring Beans.",

                importance:
                    "The container is responsible for dependency injection and bean lifecycle management.",

                code: `Application

    ↓

Spring IoC Container

    ↓

Creates Beans

    ↓

Injects Dependencies

    ↓

Manages Lifecycle`
            },

            {
                id: 3,

                title: "BeanFactory vs ApplicationContext",

                explanation:
                    "BeanFactory provides basic dependency injection, while ApplicationContext provides additional enterprise features.",

                importance:
                    "In modern Spring applications, ApplicationContext is commonly used.",

                code: `BeanFactory

Basic IoC Container


ApplicationContext

IoC
+
Events
+
Resource Loading
+
Internationalization`
            }

        ]
    },


    {
        id: 3,
        slug: "dependency-injection",
        title: "Dependency Injection",

        description:
            "Learn constructor, setter and field dependency injection.",

        topics: [

            {
                id: 1,

                title: "What is Dependency Injection?",

                explanation:
                    "Dependency Injection means an object receives its dependencies from an external source instead of creating them itself.",

                importance:
                    "Dependency Injection reduces tight coupling and makes applications easier to test.",

                code: `UserService

needs

UserRepository


Spring Container

    ↓ injects

UserRepository

    ↓

UserService`
            },

            {
                id: 2,

                title: "Constructor Injection",

                explanation:
                    "Dependencies are provided through the constructor.",

                importance:
                    "Constructor injection is generally preferred because dependencies can be immutable and required dependencies are explicit.",

                code: `@Service

public class UserService {


    private final UserRepository
        userRepository;


    public UserService(

        UserRepository userRepository

    ) {

        this.userRepository =
            userRepository;

    }

}`
            },

            {
                id: 3,

                title: "Setter Injection",

                explanation:
                    "Dependencies are provided using setter methods.",

                importance:
                    "Setter injection can be useful for optional dependencies.",

                code: `@Service

public class UserService {


    private UserRepository
        userRepository;


    @Autowired

    public void setUserRepository(

        UserRepository userRepository

    ) {

        this.userRepository =
            userRepository;

    }

}`
            },

            {
                id: 4,

                title: "Field Injection",

                explanation:
                    "Dependencies are injected directly into class fields.",

                importance:
                    "It is simple but constructor injection is generally preferred for clearer dependencies and easier testing.",

                code: `@Service

public class UserService {


    @Autowired

    private UserRepository
        userRepository;

}`
            }

        ]
    },


    {
        id: 4,
        slug: "spring-beans",
        title: "Spring Beans",

        description:
            "Learn what Spring Beans are and how they are managed.",

        topics: [

            {
                id: 1,

                title: "What is a Spring Bean?",

                explanation:
                    "A Spring Bean is an object that is created and managed by the Spring IoC Container.",

                importance:
                    "Beans are the fundamental building blocks of a Spring application.",

                code: `Java Object

        ↓

Managed by Spring

        ↓

Spring Bean`
            },

            {
                id: 2,

                title: "@Component",

                explanation:
                    "The @Component annotation tells Spring to create and manage an object as a Bean.",

                importance:
                    "It is the base stereotype annotation used for component scanning.",

                code: `@Component

public class EmailService {


}`
            },

            {
                id: 3,

                title: "@Service",

                explanation:
                    "The @Service annotation identifies a class that contains business logic.",

                importance:
                    "It improves application architecture by separating business logic.",

                code: `@Service

public class UserService {


    public void createUser() {

        // Business Logic

    }

}`
            },

            {
                id: 4,

                title: "@Repository",

                explanation:
                    "The @Repository annotation identifies a class responsible for database operations.",

                importance:
                    "It is commonly used in the persistence layer.",

                code: `@Repository

public class UserRepository {


    public User findById(
        Long id
    ) {

        return null;

    }

}`
            }

        ]
    },


    {
        id: 5,
        slug: "bean-lifecycle",
        title: "Bean Lifecycle",

        description:
            "Understand how Spring creates, initializes and destroys Beans.",

        topics: [

            {
                id: 1,

                title: "Bean Lifecycle Flow",

                explanation:
                    "A Spring Bean goes through creation, dependency injection, initialization and destruction.",

                importance:
                    "Understanding the lifecycle helps manage resources correctly.",

                code: `Bean Created

      ↓

Dependencies Injected

      ↓

@PostConstruct

      ↓

Bean Ready

      ↓

Application Stops

      ↓

@PreDestroy`
            },

            {
                id: 2,

                title: "@PostConstruct",

                explanation:
                    "A method annotated with @PostConstruct runs after dependency injection.",

                importance:
                    "It is useful for initialization logic.",

                code: `@Component

public class AppService {


    @PostConstruct

    public void init() {

        System.out.println(
            "Application Started"
        );

    }

}`
            },

            {
                id: 3,

                title: "@PreDestroy",

                explanation:
                    "A method annotated with @PreDestroy runs before the Bean is destroyed.",

                importance:
                    "It can be used to release resources.",

                code: `@PreDestroy

public void destroy() {

    System.out.println(
        "Cleaning Resources"
    );

}`
            }

        ]
    },


    {
        id: 6,
        slug: "bean-scopes",
        title: "Bean Scopes",

        description:
            "Learn Singleton, Prototype and web-related Bean scopes.",

        topics: [

            {
                id: 1,

                title: "Singleton Scope",

                explanation:
                    "Singleton is the default Spring Bean scope. One Bean instance is created per Spring container.",

                importance:
                    "Most Spring services and repositories use Singleton scope.",

                code: `@Component

@Scope("singleton")

public class UserService {


}`
            },

            {
                id: 2,

                title: "Prototype Scope",

                explanation:
                    "Prototype scope creates a new Bean instance whenever it is requested.",

                importance:
                    "It can be useful when each consumer requires a separate instance.",

                code: `@Component

@Scope("prototype")

public class ReportGenerator {


}`
            },

            {
                id: 3,

                title: "Request Scope",

                explanation:
                    "A request-scoped Bean is created for each HTTP request.",

                importance:
                    "It is useful for web-specific request data.",

                code: `@Component

@Scope("request")

public class RequestData {


}`
            }

        ]
    },


    {
        id: 7,
        slug: "component-scanning",
        title: "Component Scanning",

        description:
            "Learn how Spring automatically discovers and registers Beans.",

        topics: [

            {
                id: 1,

                title: "What is Component Scanning?",

                explanation:
                    "Component scanning allows Spring to automatically detect classes annotated with @Component, @Service, @Repository and similar annotations.",

                importance:
                    "It eliminates the need to manually create every Bean.",

                code: `com.example

│

├── controller

├── service

├── repository

└── config


Spring scans

    ↓

@Component

@Service

@Repository`
            },

            {
                id: 2,

                title: "@ComponentScan",

                explanation:
                    "The @ComponentScan annotation specifies packages that Spring should scan.",

                importance:
                    "It controls where Spring searches for components.",

                code: `@Configuration

@ComponentScan(

    "com.example"

)

public class AppConfig {


}`
            }

        ]
    },


    {
        id: 8,
        slug: "autowiring",
        title: "Autowiring",

        description:
            "Learn how Spring automatically injects dependencies.",

        topics: [

            {
                id: 1,

                title: "@Autowired",

                explanation:
                    "The @Autowired annotation tells Spring to automatically inject a matching dependency.",

                importance:
                    "It simplifies dependency injection.",

                code: `@Service

public class OrderService {


    private final PaymentService
        paymentService;


    @Autowired

    public OrderService(

        PaymentService paymentService

    ) {

        this.paymentService =
            paymentService;

    }

}`
            },

            {
                id: 2,

                title: "@Qualifier",

                explanation:
                    "The @Qualifier annotation selects a specific Bean when multiple Beans of the same type exist.",

                importance:
                    "It resolves ambiguity between multiple implementations.",

                code: `@Service("upiPayment")

public class UpiPaymentService
        implements PaymentService {


}


@Autowired

public OrderService(

    @Qualifier("upiPayment")

    PaymentService paymentService

) {

}`
            },

            {
                id: 3,

                title: "@Primary",

                explanation:
                    "The @Primary annotation marks one Bean as the default choice when multiple Beans have the same type.",

                importance:
                    "It reduces the need to use @Qualifier everywhere.",

                code: `@Service

@Primary

public class DefaultPaymentService
        implements PaymentService {


}`
            }

        ]
    },


    {
        id: 9,
        slug: "java-configuration",
        title: "Java Configuration",

        description:
            "Learn how to configure Spring using Java classes and @Bean.",

        topics: [

            {
                id: 1,

                title: "@Configuration",

                explanation:
                    "The @Configuration annotation identifies a Java class containing Spring Bean configuration.",

                importance:
                    "Java configuration is commonly used instead of XML configuration.",

                code: `@Configuration

public class AppConfig {


}`
            },

            {
                id: 2,

                title: "@Bean",

                explanation:
                    "The @Bean annotation explicitly registers an object as a Spring Bean.",

                importance:
                    "It is useful when configuring third-party classes or custom Bean creation.",

                code: `@Configuration

public class AppConfig {


    @Bean

    public UserService
        userService() {

        return new UserService();

    }

}`
            }

        ]
    },


    {
        id: 10,
        slug: "properties-configuration",
        title: "Properties Configuration",

        description:
            "Learn how Spring applications use properties for configuration.",

        topics: [

            {
                id: 1,

                title: "@Value",

                explanation:
                    "The @Value annotation injects values from configuration properties.",

                importance:
                    "It allows configuration values to be externalized from Java code.",

                code: `@Value(

    "\${app.name}"

)

private String appName;`
            },

            {
                id: 2,

                title: "application.properties",

                explanation:
                    "application.properties stores external configuration values.",

                importance:
                    "It allows different configurations for development, testing and production.",

                code: `app.name=Learning Platform

app.version=1.0`
            }

        ]
    },


    {
        id: 11,
        slug: "spring-core-architecture",
        title: "Spring Core Architecture",

        description:
            "Understand how components interact inside a typical Spring application.",

        topics: [

            {
                id: 1,

                title: "Layered Architecture",

                explanation:
                    "Spring applications commonly separate responsibilities into Controller, Service and Repository layers.",

                importance:
                    "Layer separation improves maintainability, testing and scalability.",

                code: `Client

   ↓

Controller

   ↓

Service

   ↓

Repository

   ↓

Database`
            },

            {
                id: 2,

                title: "Dependency Flow",

                explanation:
                    "Spring manages the dependencies between layers through dependency injection.",

                importance:
                    "Classes do not need to manually create their dependencies using new.",

                code: `Spring Container

      ↓

Creates Controller

      ↓

Injects Service

      ↓

Injects Repository

      ↓

Application Ready`
            }

        ]
    },


    {
        id: 12,
        slug: "spring-core-best-practices",
        title: "Spring Core Best Practices",

        description:
            "Learn recommended practices for writing professional Spring applications.",

        topics: [

            {
                id: 1,

                title: "Prefer Constructor Injection",

                explanation:
                    "Use constructor injection for required dependencies.",

                importance:
                    "It creates immutable dependencies and improves unit testing.",

                code: `@Service

public class UserService {


    private final UserRepository
        userRepository;


    public UserService(

        UserRepository userRepository

    ) {

        this.userRepository =
            userRepository;

    }

}`
            },

            {
                id: 2,

                title: "Keep Layers Separate",

                explanation:
                    "Controllers should handle requests, Services should contain business logic and Repositories should handle persistence.",

                importance:
                    "Clear separation of concerns makes the application easier to maintain.",

                code: `Controller

    ↓ HTTP

Service

    ↓ Business Logic

Repository

    ↓ Database`
            },

            {
                id: 3,

                title: "Avoid Manual Object Creation",

                explanation:
                    "Do not manually create Spring-managed dependencies using new when they should be injected.",

                importance:
                    "Dependency injection keeps the application loosely coupled.",

                code: `❌ Avoid

UserRepository repository =
    new UserRepository();


✅ Prefer

@Service

public class UserService {

    private final UserRepository
        repository;

}`
            }

        ]
    }

];