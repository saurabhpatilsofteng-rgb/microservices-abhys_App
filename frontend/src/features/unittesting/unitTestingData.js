export const unitTestingModules = [

    {
        id: 1,
        slug: "testing-fundamentals",
        title: "Testing Fundamentals",

        description:
            "Understand software testing, unit testing and the purpose of automated tests.",

        topics: [

            {
                id: 1,
                title: "What is Software Testing?",

                explanation:
                    "Software testing is the process of evaluating an application to verify that it behaves according to its requirements.",

                importance:
                    "Testing helps identify defects early and increases confidence when changing or extending an application.",

                code: `Application
     |
     ↓
   Testing
     |
     ├── Functional Testing
     ├── Unit Testing
     ├── Integration Testing
     └── System Testing`
            },

            {
                id: 2,
                title: "What is Unit Testing?",

                explanation:
                    "Unit testing tests a small, isolated piece of application logic, usually a method or class.",

                importance:
                    "Unit tests are fast and help developers verify business logic independently of external systems.",

                code: `Method
   |
   ↓
Unit Test
   |
   ├── Input
   ↓
Expected Result
   |
   ↓
Actual Result
   |
   ↓
PASS / FAIL`
            },

            {
                id: 3,
                title: "Unit Test Characteristics",

                explanation:
                    "A good unit test should be fast, isolated, deterministic and focused on one behavior.",

                importance:
                    "These characteristics make tests reliable and maintainable.",

                code: `Good Unit Test

Fast
  +
Isolated
  +
Repeatable
  +
Focused
  ↓
Reliable Test`
            }

        ]
    },


    {
        id: 2,
        slug: "junit-5",
        title: "JUnit 5",

        description:
            "Learn the JUnit 5 testing framework used for Java applications.",

        topics: [

            {
                id: 1,
                title: "What is JUnit?",

                explanation:
                    "JUnit is a testing framework for Java applications that provides annotations, assertions and test execution support.",

                importance:
                    "JUnit is one of the most commonly used frameworks for automated Java testing.",

                code: `@Test
void additionTest() {

    int result = 10 + 20;

    assertEquals(30, result);
}`
            },

            {
                id: 2,
                title: "@Test Annotation",

                explanation:
                    "The @Test annotation identifies a method as a test method.",

                importance:
                    "JUnit uses this annotation to discover and execute test cases.",

                code: `import org.junit.jupiter.api.Test;

@Test
void shouldAddNumbers() {

    int result = 10 + 20;

    assertEquals(30, result);
}`
            },

            {
                id: 3,
                title: "JUnit Test Class",

                explanation:
                    "A test class contains one or more test methods used to verify application behavior.",

                importance:
                    "Organizing tests into classes makes the test suite easier to understand and maintain.",

                code: `class CalculatorTest {

    @Test
    void additionTest() {

        Calculator calculator =
            new Calculator();

        assertEquals(
            30,
            calculator.add(10, 20)
        );
    }
}`
            }

        ]
    },


    {
        id: 3,
        slug: "assertions",
        title: "Assertions",

        description:
            "Learn JUnit assertions used to verify expected results.",

        topics: [

            {
                id: 1,
                title: "assertEquals",

                explanation:
                    "assertEquals verifies that the expected value and actual value are equal.",

                importance:
                    "It is one of the most commonly used assertions for checking method results.",

                code: `int result = calculator.add(10, 20);

assertEquals(
    30,
    result
);`
            },

            {
                id: 2,
                title: "assertTrue",

                explanation:
                    "assertTrue verifies that a condition evaluates to true.",

                importance:
                    "Useful when testing boolean conditions and business rules.",

                code: `boolean result = user.isActive();

assertTrue(result);`
            },

            {
                id: 3,
                title: "assertFalse",

                explanation:
                    "assertFalse verifies that a condition evaluates to false.",

                importance:
                    "Useful for validating negative conditions.",

                code: `boolean result = user.isBlocked();

assertFalse(result);`
            },

            {
                id: 4,
                title: "assertNull and assertNotNull",

                explanation:
                    "These assertions verify whether an object reference is null or non-null.",

                importance:
                    "They are useful when testing object creation and service responses.",

                code: `User user = service.findUser(1);

assertNotNull(user);

assertNull(
    service.findUser(999)
);`
            }

        ]
    },


    {
        id: 4,
        slug: "test-lifecycle",
        title: "Test Lifecycle",

        description:
            "Understand setup and cleanup methods in JUnit 5.",

        topics: [

            {
                id: 1,
                title: "@BeforeEach",

                explanation:
                    "@BeforeEach executes before every test method.",

                importance:
                    "It is useful for preparing test data and test objects.",

                code: `@BeforeEach
void setUp() {

    calculator =
        new Calculator();
}`
            },

            {
                id: 2,
                title: "@AfterEach",

                explanation:
                    "@AfterEach executes after every test method.",

                importance:
                    "It can be used to clean up resources created during a test.",

                code: `@AfterEach
void tearDown() {

    System.out.println(
        "Cleaning resources"
    );
}`
            },

            {
                id: 3,
                title: "@BeforeAll",

                explanation:
                    "@BeforeAll executes once before all tests in a test class.",

                importance:
                    "Useful for expensive initialization that can be shared across tests.",

                code: `@BeforeAll
static void setupAll() {

    System.out.println(
        "Run once"
    );
}`
            },

            {
                id: 4,
                title: "@AfterAll",

                explanation:
                    "@AfterAll executes once after all tests have completed.",

                importance:
                    "Useful for final cleanup after the entire test class finishes.",

                code: `@AfterAll
static void cleanupAll() {

    System.out.println(
        "Cleanup"
    );
}`
            }

        ]
    },


    {
        id: 5,
        slug: "mockito",
        title: "Mockito",

        description:
            "Learn Mockito for creating test doubles and isolating dependencies.",

        topics: [

            {
                id: 1,
                title: "What is Mockito?",

                explanation:
                    "Mockito is a Java mocking framework used to create mock objects for unit tests.",

                importance:
                    "Mockito allows developers to test a class without invoking real external dependencies.",

                code: `Service
   |
   ↓
Repository

Unit Test

Service
   |
   ↓
Mock Repository`
            },

            {
                id: 2,
                title: "Why Use Mockito?",

                explanation:
                    "Mockito allows dependencies such as repositories or external services to be replaced with controlled mock objects.",

                importance:
                    "This keeps unit tests isolated and fast.",

                code: `Real Repository
       X
       |
       ↓
     Mock
       |
       ↓
    Service Test`
            },

            {
                id: 3,
                title: "mock()",

                explanation:
                    "Mockito's mock() method creates a mock object of a specified type.",

                importance:
                    "Mock objects allow tests to control dependency behavior.",

                code: `UserRepository repository =
    mock(UserRepository.class);

UserService service =
    new UserService(repository);`
            }

        ]
    },


    {
        id: 6,
        slug: "mocking",
        title: "Mocking",

        description:
            "Understand stubbing, verification and controlled dependency behavior.",

        topics: [

            {
                id: 1,
                title: "Stubbing",

                explanation:
                    "Stubbing defines what a mock should return when a method is called.",

                importance:
                    "It allows tests to simulate different dependency responses.",

                code: `when(repository.findById(1L))
    .thenReturn(
        Optional.of(user)
    );`
            },

            {
                id: 2,
                title: "verify()",

                explanation:
                    "verify() checks whether a method on a mock was called.",

                importance:
                    "It helps verify interactions between the class under test and its dependencies.",

                code: `service.getUser(1L);

verify(repository)
    .findById(1L);`
            },

            {
                id: 3,
                title: "Argument Matching",

                explanation:
                    "Mockito provides argument matchers such as any(), eq() and anyLong().",

                importance:
                    "Matchers are useful when the exact argument value is not important.",

                code: `when(repository.findById(
    anyLong()
)).thenReturn(
    Optional.of(user)
);`
            }

        ]
    },


    {
        id: 7,
        slug: "mock-and-injectmocks",
        title: "@Mock and @InjectMocks",

        description:
            "Learn the common Mockito annotations used in Spring Boot unit tests.",

        topics: [

            {
                id: 1,
                title: "@Mock",

                explanation:
                    "@Mock creates a Mockito mock object.",

                importance:
                    "It replaces real dependencies during unit testing.",

                code: `@Mock
private UserRepository userRepository;`
            },

            {
                id: 2,
                title: "@InjectMocks",

                explanation:
                    "@InjectMocks creates the class under test and injects mock dependencies into it.",

                importance:
                    "It simplifies unit test setup for service classes.",

                code: `@Mock
UserRepository repository;

@InjectMocks
UserService service;`
            },

            {
                id: 3,
                title: "@ExtendWith(MockitoExtension.class)",

                explanation:
                    "MockitoExtension integrates Mockito with JUnit 5.",

                importance:
                    "It initializes Mockito annotations such as @Mock and @InjectMocks.",

                code: `@ExtendWith(
    MockitoExtension.class
)
class UserServiceTest {

    @Mock
    UserRepository repository;

    @InjectMocks
    UserService service;
}`
            }

        ]
    },


    {
        id: 8,
        slug: "service-layer-testing",
        title: "Service Layer Testing",

        description:
            "Learn how to unit test Spring Boot service classes.",

        topics: [

            {
                id: 1,
                title: "Testing Service Logic",

                explanation:
                    "Service unit tests verify business logic without requiring the actual database.",

                importance:
                    "Most application business rules are implemented in the service layer.",

                code: `@Mock
UserRepository repository;

@InjectMocks
UserService service;

@Test
void findUserTest() {

    User user =
        new User(1L, "Saurabh");

    when(repository.findById(1L))
        .thenReturn(
            Optional.of(user)
        );

    User result =
        service.findUser(1L);

    assertEquals(
        "Saurabh",
        result.getName()
    );
}`
            },

            {
                id: 2,
                title: "Testing Exception Cases",

                explanation:
                    "Unit tests should verify how a service behaves when invalid input or missing data is encountered.",

                importance:
                    "Testing failure paths prevents unexpected behavior in production.",

                code: `assertThrows(
    UserNotFoundException.class,
    () -> service.findUser(999L)
);`
            }

        ]
    },


    {
        id: 9,
        slug: "repository-testing",
        title: "Repository Testing",

        description:
            "Learn database repository testing with Spring Boot.",

        topics: [

            {
                id: 1,
                title: "Repository Test",

                explanation:
                    "Repository tests verify database interaction and persistence behavior.",

                importance:
                    "They help ensure that JPA queries and entity mappings work correctly.",

                code: `repository.save(user);

Optional<User> result =
    repository.findById(user.getId());

assertTrue(
    result.isPresent()
);`
            },

            {
                id: 2,
                title: "@DataJpaTest",

                explanation:
                    "@DataJpaTest configures a test environment focused on JPA repositories.",

                importance:
                    "It is useful for testing repository and entity behavior.",

                code: `@DataJpaTest
class UserRepositoryTest {

    @Autowired
    UserRepository repository;

    @Test
    void saveUser() {

        User user =
            new User();

        repository.save(user);

        assertNotNull(
            user.getId()
        );
    }
}`
            }

        ]
    },


    {
        id: 10,
        slug: "controller-testing",
        title: "Controller Testing",

        description:
            "Learn how to test Spring MVC REST controllers.",

        topics: [

            {
                id: 1,
                title: "Controller Unit Test",

                explanation:
                    "Controller tests verify HTTP endpoints, request handling and response behavior.",

                importance:
                    "They help ensure that the REST API contract behaves correctly.",

                code: `GET /users/1

       ↓

Controller

       ↓

Service

       ↓

Response`
            },

            {
                id: 2,
                title: "@WebMvcTest",

                explanation:
                    "@WebMvcTest loads the Spring MVC components required for controller testing without loading the entire application.",

                importance:
                    "It provides focused and relatively fast controller tests.",

                code: `@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

}`
            },

            {
                id: 3,
                title: "MockMvc",

                explanation:
                    "MockMvc allows Spring MVC endpoints to be tested without starting a real web server.",

                importance:
                    "It is commonly used for REST controller testing.",

                code: `mockMvc.perform(
    get("/users/1")
)
.andExpect(
    status().isOk()
);`
            }

        ]
    },


    {
        id: 11,
        slug: "spring-boot-testing",
        title: "Spring Boot Testing",

        description:
            "Learn Spring Boot testing annotations and test strategies.",

        topics: [

            {
                id: 1,
                title: "@SpringBootTest",

                explanation:
                    "@SpringBootTest loads the Spring application context for testing.",

                importance:
                    "It is useful for broader integration-style tests involving multiple Spring components.",

                code: `@SpringBootTest
class ApplicationTest {

    @Test
    void contextLoads() {

    }
}`
            },

            {
                id: 2,
                title: "Context Loading Test",

                explanation:
                    "A context loading test verifies that the Spring application context can start successfully.",

                importance:
                    "It can detect configuration and dependency injection problems.",

                code: `@SpringBootTest
class ContextTest {

    @Test
    void contextLoads() {
    }
}`
            }

        ]
    },


    {
        id: 12,
        slug: "integration-vs-unit",
        title: "Integration vs Unit Testing",

        description:
            "Understand the difference between unit and integration tests.",

        topics: [

            {
                id: 1,
                title: "Unit Testing vs Integration Testing",

                explanation:
                    "Unit testing isolates a small unit of logic, while integration testing verifies interactions between multiple components.",

                importance:
                    "Choosing the right test type helps maintain an efficient and reliable test suite.",

                code: `UNIT TEST

Service
   |
   ↓
Mock Repository


INTEGRATION TEST

Controller
   |
   ↓
Service
   |
   ↓
Repository
   |
   ↓
Database`
            },

            {
                id: 2,
                title: "Test Pyramid",

                explanation:
                    "The test pyramid recommends having many fast unit tests, fewer integration tests and a small number of end-to-end tests.",

                importance:
                    "It balances test coverage, execution speed and maintenance cost.",

                code: `        /\\
       /  \\
      / E2E\\
     /------\\
    /Integration\\
   /------------\\
  /  Unit Tests  \\
 /________________\\`
            }

        ]
    },


    {
        id: 13,
        slug: "testing-best-practices",
        title: "Testing Best Practices",

        description:
            "Learn practical principles for writing maintainable automated tests.",

        topics: [

            {
                id: 1,
                title: "AAA Pattern",

                explanation:
                    "AAA stands for Arrange, Act and Assert.",

                importance:
                    "It gives tests a consistent and readable structure.",

                code: `// Arrange
User user = new User();

// Act
User result =
    service.save(user);

// Assert
assertNotNull(result);`
            },

            {
                id: 2,
                title: "One Behavior Per Test",

                explanation:
                    "A test should focus on one logical behavior or scenario.",

                importance:
                    "Focused tests are easier to understand and diagnose when they fail.",

                code: `@Test
void shouldCalculateTotal() {

    // One behavior

    assertEquals(
        100,
        calculator.calculate(50, 50)
    );
}`
            },

            {
                id: 3,
                title: "Meaningful Test Names",

                explanation:
                    "Test method names should clearly describe the behavior being verified.",

                importance:
                    "Good names make test reports useful when diagnosing failures.",

                code: `@Test
void shouldReturnUserWhenIdExists() {
}

@Test
void shouldThrowExceptionWhenUserMissing() {
}`
            }

        ]
    },


    {
        id: 14,
        slug: "testing-interview",
        title: "Testing Interview Concepts",

        description:
            "Important unit testing and Mockito concepts for Java interviews.",

        topics: [

            {
                id: 1,
                title: "Mock vs Spy",

                explanation:
                    "A mock is a completely simulated object, while a spy wraps a real object and allows selected behavior to be stubbed.",

                importance:
                    "This is a common Mockito interview topic.",

                code: `Mock

@Mock
UserService service;


Spy

@Spy
UserService service;`
            },

            {
                id: 2,
                title: "Mock vs Stub",

                explanation:
                    "A stub provides predefined responses, while mocking can also verify interactions with dependencies.",

                importance:
                    "Understanding the distinction helps design focused unit tests.",

                code: `Stub

when(repo.findById(1L))
    .thenReturn(user);


Verify

verify(repo)
    .findById(1L);`
            },

            {
                id: 3,
                title: "What Should You Mock?",

                explanation:
                    "Mock dependencies that are external to the unit under test, such as repositories, HTTP clients or external services.",

                importance:
                    "Correct mocking keeps unit tests isolated.",

                code: `Service
   |
   +── Repository → Mock
   |
   +── Email API → Mock
   |
   +── Payment API → Mock`
            },

            {
                id: 4,
                title: "Unit Test Best Practices",

                explanation:
                    "Tests should be isolated, deterministic, readable, focused and fast.",

                importance:
                    "Good testing practices make a test suite useful as the application grows.",

                code: `Good Tests

Fast
 +
Independent
 +
Readable
 +
Deterministic
 +
Maintainable`
            }

        ]
    }

];