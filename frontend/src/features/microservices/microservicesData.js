export const microservicesModules = [

    {
        id: 1,
        slug: "microservices-introduction",
        title: "Microservices Introduction",

        description:
            "Understand microservices architecture, characteristics, benefits and challenges.",

        topics: [

            {
                id: 1,
                title: "What are Microservices?",

                explanation:
                    "Microservices is an architectural style where an application is divided into small, independently deployable services. Each service focuses on a specific business capability.",

                importance:
                    "Microservices are widely used for large-scale applications where independent development, deployment and scaling are important.",

                code: `Client
   |
   ↓
API Gateway
   |
   ├── Auth Service
   |
   ├── User Service
   |
   ├── Order Service
   |
   └── Payment Service`
            },

            {
                id: 2,
                title: "Characteristics of Microservices",

                explanation:
                    "A microservice should generally have a focused business responsibility, independent deployment capability and controlled communication with other services.",

                importance:
                    "These characteristics distinguish microservices from simply splitting code into multiple packages.",

                code: `Microservice

        ↓

Small Business Responsibility

        ↓

Independent Deployment

        ↓

Independent Scaling

        ↓

Service Ownership`
            },

            {
                id: 3,
                title: "Advantages and Disadvantages",

                explanation:
                    "Microservices provide independent deployment and scaling but introduce distributed-system complexity.",

                importance:
                    "You should understand both benefits and trade-offs before choosing microservices.",

                code: `Advantages
---------
Independent Deployment
Independent Scaling
Technology Flexibility
Fault Isolation
Team Independence


Challenges
----------
Network Failures
Distributed Transactions
Monitoring
Security
Data Consistency
Deployment Complexity`
            }

        ]
    },


    {
        id: 2,
        slug: "monolith-vs-microservices",
        title: "Monolithic vs Microservices",

        description:
            "Compare traditional monolithic architecture with microservices architecture.",

        topics: [

            {
                id: 1,
                title: "Monolithic Architecture",

                explanation:
                    "A monolithic application contains multiple business functionalities within a single deployable application.",

                importance:
                    "Understanding monoliths helps you understand why and when organizations move toward microservices.",

                code: `                Application
                     |
        +------------+------------+
        |            |            |
       Auth         User        Order
        |            |            |
        +------------+------------+
                     |
                  Database`
            },

            {
                id: 2,
                title: "Microservices Architecture",

                explanation:
                    "In microservices, business capabilities are deployed as separate services that communicate over the network.",

                importance:
                    "This architecture enables services to be developed and deployed independently.",

                code: `Auth Service ─── Auth DB

User Service ─── User DB

Order Service ─── Order DB

Payment Service ─── Payment DB`
            },

            {
                id: 3,
                title: "Monolith vs Microservices",

                explanation:
                    "Monoliths are simpler to develop and operate initially, while microservices provide stronger service-level independence at the cost of distributed-system complexity.",

                importance:
                    "This is a common system-design and interview question.",

                code: `Monolith

1 Application
1 Deployment
Usually shared database


Microservices

Multiple Applications
Multiple Deployments
Services communicate over network`
            }

        ]
    },


    {
        id: 3,
        slug: "microservice-architecture",
        title: "Microservice Architecture",

        description:
            "Learn the major components of a production-style Spring Cloud architecture.",

        topics: [

            {
                id: 1,
                title: "Architecture Components",

                explanation:
                    "A typical Spring Cloud architecture can contain an API Gateway, service discovery server, authentication service and business services.",

                importance:
                    "These components form the foundation of your current microservices project.",

                code: `                    React
                      |
                      ↓
                API Gateway
                   :8080
                      |
             +--------+--------+
             |        |        |
             ↓        ↓        ↓
           Auth     User     Order
          :8081    :8082    :8083
             |
             ↓
          Eureka
           :8761`
            },

            {
                id: 2,
                title: "Independent Services",

                explanation:
                    "Each microservice should own a focused business capability and be independently deployable.",

                importance:
                    "Independent deployment is one of the key reasons for using microservices.",

                code: `AUTH-SERVICE
      |
      └── Authentication


USER-SERVICE
      |
      └── User Management


ORDER-SERVICE
      |
      └── Orders`
            }

        ]
    },


    {
        id: 4,
        slug: "service-discovery",
        title: "Service Discovery",

        description:
            "Learn how services discover each other dynamically using service discovery.",

        topics: [

            {
                id: 1,
                title: "Why Service Discovery?",

                explanation:
                    "In a distributed system, service instances may change IP addresses or ports. Service discovery provides a mechanism for locating available service instances.",

                importance:
                    "It prevents services from depending on hard-coded network locations.",

                code: `Without Discovery

Gateway
   |
   ↓
http://192.168.1.20:8081


With Discovery

Gateway
   |
   ↓
Eureka
   |
   ↓
AUTH-SERVICE`
            },

            {
                id: 2,
                title: "Eureka Server",

                explanation:
                    "Eureka is a service registry used by Spring Cloud applications for service registration and discovery.",

                importance:
                    "Your current architecture uses a discovery-server for this purpose.",

                code: `EUREKA SERVER
    :8761

       ↑
       |
AUTH-SERVICE
       |
USER-SERVICE
       |
API-GATEWAY`
            },

            {
                id: 3,
                title: "Service Registration",

                explanation:
                    "A service registers itself with Eureka so that other services can discover it.",

                importance:
                    "This is the first step in dynamic service discovery.",

                code: `AUTH-SERVICE starts

        ↓

Registers with Eureka

        ↓

AUTH-SERVICE :8081

        ↓

Eureka Registry`
            }

        ]
    },


    {
        id: 5,
        slug: "eureka-server",
        title: "Eureka Server",

        description:
            "Learn how to configure and use Netflix Eureka with Spring Cloud.",

        topics: [

            {
                id: 1,
                title: "Enable Eureka Server",

                explanation:
                    "A Spring Boot application can act as an Eureka server using the appropriate Spring Cloud annotation and dependency.",

                importance:
                    "It creates the service registry used by client services.",

                code: `@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerApplication {

    public static void main(String[] args) {

        SpringApplication.run(
            DiscoveryServerApplication.class,
            args
        );
    }
}`
            },

            {
                id: 2,
                title: "Eureka Client",

                explanation:
                    "A service configured as an Eureka client registers with the discovery server and can discover other registered services.",

                importance:
                    "API Gateway and business services commonly act as Eureka clients.",

                code: `spring:
  application:
    name: auth-service

eureka:
  client:
    service-url:
      defaultZone:
        http://discovery-server:8761/eureka/`
            }

        ]
    },


    {
        id: 6,
        slug: "api-gateway",
        title: "API Gateway",

        description:
            "Learn routing, security and cross-cutting concerns using Spring Cloud Gateway.",

        topics: [

            {
                id: 1,
                title: "What is API Gateway?",

                explanation:
                    "An API Gateway provides a single entry point for clients and routes requests to backend services.",

                importance:
                    "It can centralize routing, authentication, rate limiting, logging and other cross-cutting concerns.",

                code: `React
  |
  ↓
API Gateway :8080
  |
  +── /auth/**  → Auth Service
  |
  +── /users/** → User Service
  |
  └── /orders/** → Order Service`
            },

            {
                id: 2,
                title: "Gateway Routing",

                explanation:
                    "Gateway routes map incoming paths to downstream service destinations.",

                importance:
                    "Correct routing is essential for communication between the frontend and microservices.",

                code: `Request:

POST /auth/login

        ↓

API Gateway

        ↓

AUTH-SERVICE

        ↓

POST /auth/login`
            },

            {
                id: 3,
                title: "Gateway + Eureka",

                explanation:
                    "Spring Cloud Gateway can discover services from Eureka and route requests using logical service names.",

                importance:
                    "This avoids hard-coding every backend host and port.",

                code: `uri:

lb://AUTH-SERVICE


Gateway
   |
   ↓
Eureka
   |
   ↓
AUTH-SERVICE`
            }

        ]
    },


    {
        id: 7,
        slug: "inter-service-communication",
        title: "Inter-Service Communication",

        description:
            "Learn how microservices communicate synchronously and asynchronously.",

        topics: [

            {
                id: 1,
                title: "Synchronous Communication",

                explanation:
                    "In synchronous communication, one service sends a request and waits for a response.",

                importance:
                    "REST and OpenFeign are common synchronous communication mechanisms.",

                code: `Order Service
      |
      | HTTP Request
      ↓
Payment Service
      |
      | Response
      ↓
Order Service`
            },

            {
                id: 2,
                title: "Asynchronous Communication",

                explanation:
                    "Asynchronous communication allows services to communicate through messages or events without requiring an immediate response.",

                importance:
                    "It can reduce coupling and improve resilience for event-driven workflows.",

                code: `Order Service
      |
      | Event
      ↓
Message Broker
      |
      +──→ Notification Service
      |
      └──→ Analytics Service`
            }

        ]
    },


    {
        id: 8,
        slug: "openfeign",
        title: "OpenFeign",

        description:
            "Learn declarative REST communication between Spring Boot services.",

        topics: [

            {
                id: 1,
                title: "What is OpenFeign?",

                explanation:
                    "OpenFeign allows developers to define HTTP clients declaratively using Java interfaces.",

                importance:
                    "It significantly simplifies synchronous service-to-service communication.",

                code: `@FeignClient(
    name = "USER-SERVICE"
)
public interface UserClient {

    @GetMapping("/users/{id}")
    UserDto getUser(
        @PathVariable Long id
    );
}`
            },

            {
                id: 2,
                title: "Feign Communication Flow",

                explanation:
                    "The Feign client translates an interface method call into an HTTP request to the target service.",

                importance:
                    "It removes much of the repetitive REST client code.",

                code: `Order Service
      |
      ↓
UserClient
      |
      ↓
Service Discovery
      |
      ↓
USER-SERVICE`
            }

        ]
    },


    {
        id: 9,
        slug: "configuration-management",
        title: "Configuration Management",

        description:
            "Learn how configuration is managed across multiple services and environments.",

        topics: [

            {
                id: 1,
                title: "Externalized Configuration",

                explanation:
                    "Configuration should be separated from application code so that environments can use different settings.",

                importance:
                    "Development, testing and production environments generally require different configuration values.",

                code: `Application

      |
      ↓

application.yml

      |

Environment Variables

      |

Secrets`
            },

            {
                id: 2,
                title: "Spring Cloud Config",

                explanation:
                    "Spring Cloud Config provides centralized configuration management for distributed applications.",

                importance:
                    "Centralized configuration reduces duplication across services.",

                code: `Config Server
     |
     +── Auth Config
     |
     +── User Config
     |
     └── Gateway Config`
            }

        ]
    },


    {
        id: 10,
        slug: "load-balancing",
        title: "Load Balancing",

        description:
            "Understand how requests can be distributed across multiple service instances.",

        topics: [

            {
                id: 1,
                title: "Why Load Balancing?",

                explanation:
                    "Load balancing distributes requests across multiple instances of a service.",

                importance:
                    "It improves scalability and availability.",

                code: `Gateway
   |
   +------+
   |      |
   ↓      ↓
User-1  User-2
:8082   :8083`
            },

            {
                id: 2,
                title: "Client-Side Load Balancing",

                explanation:
                    "The client or gateway can select an available service instance from discovered instances.",

                importance:
                    "Spring Cloud LoadBalancer can work with service discovery to distribute requests.",

                code: `USER-SERVICE

Instance 1
Instance 2
Instance 3

       ↑
       |
Load Balancer
       ↑
       |
Gateway`
            }

        ]
    },


    {
        id: 11,
        slug: "circuit-breaker",
        title: "Circuit Breaker",

        description:
            "Learn fault tolerance and preventing cascading failures.",

        topics: [

            {
                id: 1,
                title: "What is Circuit Breaker?",

                explanation:
                    "A circuit breaker prevents repeated calls to a failing dependency and allows the system to recover gracefully.",

                importance:
                    "Without fault isolation, one failing service can cause cascading failures across the system.",

                code: `Service A
   |
   ↓
Service B

B DOWN

   ↓

Circuit OPEN

   ↓

Fallback`
            },

            {
                id: 2,
                title: "Resilience4j",

                explanation:
                    "Resilience4j provides fault-tolerance patterns such as circuit breaker, retry, rate limiter and bulkhead.",

                importance:
                    "It is commonly used in Spring Boot microservices.",

                code: `@CircuitBreaker(
    name = "userService",
    fallbackMethod = "fallback"
)
public User getUser() {

    return userClient.getUser();

}`
            }

        ]
    },


    {
        id: 12,
        slug: "distributed-tracing",
        title: "Distributed Tracing",

        description:
            "Learn how to trace requests across multiple microservices.",

        topics: [

            {
                id: 1,
                title: "Why Distributed Tracing?",

                explanation:
                    "A single user request can travel through multiple services, making traditional logs difficult to correlate.",

                importance:
                    "Tracing helps identify where latency or failures occur.",

                code: `React
  |
  ↓
Gateway
  |
  ↓
Auth Service
  |
  ↓
User Service
  |
  ↓
Database

Trace ID:
ABC-123`
            },

            {
                id: 2,
                title: "Correlation ID",

                explanation:
                    "A correlation or trace identifier allows logs from different services to be associated with the same request.",

                importance:
                    "It makes debugging distributed requests much easier.",

                code: `Request

X-Correlation-ID:
ABC-123

Gateway
   ↓
Auth
   ↓
User

All logs:
ABC-123`
            }

        ]
    },


    {
        id: 13,
        slug: "database-per-service",
        title: "Database per Service",

        description:
            "Understand data ownership and database isolation in microservices.",

        topics: [

            {
                id: 1,
                title: "Database per Service",

                explanation:
                    "Each microservice owns its data and exposes access through its API or events rather than directly sharing its database tables.",

                importance:
                    "Database ownership reduces tight coupling between services.",

                code: `AUTH-SERVICE
    |
    ↓
Auth DB


USER-SERVICE
    |
    ↓
User DB


ORDER-SERVICE
    |
    ↓
Order DB`
            },

            {
                id: 2,
                title: "Why Shared Database is Risky",

                explanation:
                    "A shared database can tightly couple services to the same schema and make independent evolution difficult.",

                importance:
                    "This is a major architectural consideration when migrating from monoliths.",

                code: `Bad

Auth ─┐
User ─┼──→ Same DB
Order ┘


Preferred

Auth  → Auth DB
User  → User DB
Order → Order DB`
            }

        ]
    },


    {
        id: 14,
        slug: "docker-microservices",
        title: "Docker & Microservices",

        description:
            "Learn how Docker packages and runs microservices consistently.",

        topics: [

            {
                id: 1,
                title: "Containerizing a Spring Boot Service",

                explanation:
                    "A Docker image packages the application and its runtime dependencies so it can run consistently across environments.",

                importance:
                    "Containers simplify deployment and environment consistency.",

                code: `FROM eclipse-temurin:21-jre

COPY target/app.jar app.jar

ENTRYPOINT [
    "java",
    "-jar",
    "app.jar"
]`
            },

            {
                id: 2,
                title: "Docker Compose",

                explanation:
                    "Docker Compose allows multiple containers to be defined and started as one application stack.",

                importance:
                    "It is especially useful for local microservices development.",

                code: `services:

  postgres:
    image: postgres:17

  redis:
    image: redis

  discovery-server:
    build: ./discovery-server

  api-gateway:
    build: ./api-gateway

  auth-service:
    build: ./auth-service`
            },

            {
                id: 3,
                title: "Docker Networking",

                explanation:
                    "Containers connected to the same Docker network can communicate using service/container DNS names.",

                importance:
                    "This is critical when moving your Spring services from localhost to Docker.",

                code: `Docker Network

discovery-server
       ↑
       |
api-gateway
       |
       ↓
auth-service

Use:

http://discovery-server:8761

NOT:

http://localhost:8761`
            }

        ]
    },


    {
        id: 15,
        slug: "redis-microservices",
        title: "Redis",

        description:
            "Learn how Redis can be used for caching and distributed application use cases.",

        topics: [

            {
                id: 1,
                title: "What is Redis?",

                explanation:
                    "Redis is an in-memory data store commonly used for caching, session-related use cases, counters and messaging patterns.",

                importance:
                    "Caching can reduce database load and improve response time.",

                code: `Application
     |
     ↓
Redis Cache
     |
     ├── HIT → Return Data
     |
     └── MISS
           ↓
       PostgreSQL`
            },

            {
                id: 2,
                title: "Caching",

                explanation:
                    "Frequently accessed data can be stored temporarily in Redis to avoid repeated database queries.",

                importance:
                    "Caching is useful for high-read workloads.",

                code: `Request
   |
   ↓
Redis
   |
   ├── HIT → Response
   |
   └── MISS
         ↓
      Database
         ↓
      Redis
         ↓
      Response`
            }

        ]
    },


    {
        id: 16,
        slug: "kafka-event-driven",
        title: "Kafka & Event-Driven Architecture",

        description:
            "Learn asynchronous communication and event-driven microservices.",

        topics: [

            {
                id: 1,
                title: "Event-Driven Architecture",

                explanation:
                    "Services communicate by publishing and consuming events rather than directly calling each other for every operation.",

                importance:
                    "Event-driven architecture can reduce coupling and support scalable asynchronous workflows.",

                code: `Order Service
      |
      | OrderCreated
      ↓
Kafka
      |
      +──→ Notification
      |
      +──→ Inventory
      |
      └──→ Analytics`
            },

            {
                id: 2,
                title: "Kafka Producer and Consumer",

                explanation:
                    "A producer publishes records to Kafka topics and consumers read records from those topics.",

                importance:
                    "This is the foundation of Kafka-based event communication.",

                code: `Producer
   |
   ↓
Kafka Topic
   |
   ↓
Consumer`
            }

        ]
    },


    {
        id: 17,
        slug: "saga-pattern",
        title: "Saga Pattern",

        description:
            "Learn distributed transaction management using the Saga pattern.",

        topics: [

            {
                id: 1,
                title: "Distributed Transactions",

                explanation:
                    "A business transaction may involve multiple microservices, each with its own database.",

                importance:
                    "Traditional single-database ACID transactions do not directly span independently owned service databases.",

                code: `Order Service
     |
     ↓
Payment Service
     |
     ↓
Inventory Service

Multiple databases`
            },

            {
                id: 2,
                title: "Saga Pattern",

                explanation:
                    "A Saga breaks a distributed business transaction into a sequence of local transactions with compensating actions when necessary.",

                importance:
                    "It is a major microservices pattern for handling business consistency across services.",

                code: `Create Order
     ↓
Reserve Payment
     ↓
Reserve Inventory
     ↓
Order Confirmed


Failure:

Inventory Failed
     ↓
Compensate Payment
     ↓
Cancel Order`
            }

        ]
    },


    {
        id: 18,
        slug: "microservices-best-practices",
        title: "Microservices Best Practices",

        description:
            "Learn production-oriented design principles for microservices.",

        topics: [

            {
                id: 1,
                title: "Single Responsibility",

                explanation:
                    "Each service should focus on a well-defined business capability.",

                importance:
                    "Overly large services become distributed monoliths.",

                code: `GOOD

Auth Service
User Service
Order Service
Payment Service


BAD

Everything Service`
            },

            {
                id: 2,
                title: "Health Checks",

                explanation:
                    "Services should expose health information so platforms and monitoring systems can determine whether they are functioning correctly.",

                importance:
                    "Health checks are important for Docker, orchestration and production monitoring.",

                code: `GET

/actuator/health

Response:

{
    "status": "UP"
}`
            },

            {
                id: 3,
                title: "Centralized Logging",

                explanation:
                    "Logs from multiple services should be collected and correlated so distributed failures can be diagnosed.",

                importance:
                    "Debugging a distributed system without centralized observability becomes difficult.",

                code: `Auth Logs
    |
User Logs
    |
Gateway Logs
    |
    ↓
Centralized Logging`
            }

        ]
    }

];