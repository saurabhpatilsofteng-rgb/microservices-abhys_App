export const kafkaModules = [

    {
        id: 1,
        slug: "kafka-introduction",
        title: "Kafka Introduction",

        description:
            "Understand Apache Kafka, event streaming and why modern applications use Kafka.",

        topics: [

            {
                id: 1,
                title: "What is Apache Kafka?",

                explanation:
                    "Apache Kafka is a distributed event streaming platform used to publish, store and process streams of records.",

                importance:
                    "Kafka is widely used in microservices architectures for asynchronous communication and event-driven systems.",

                code: `Producer
    |
    ↓
  Kafka
    |
    ↓
Consumer`
            },

            {
                id: 2,
                title: "Why Kafka?",

                explanation:
                    "Kafka allows services to communicate asynchronously through durable event streams.",

                importance:
                    "It helps decouple microservices and can handle large volumes of events.",

                code: `Without Kafka

Service A ─────→ Service B


With Kafka

Service A
    |
    ↓
 Kafka
    |
    +──→ Service B
    |
    +──→ Service C
    |
    └──→ Service D`
            },

            {
                id: 3,
                title: "Event Streaming",

                explanation:
                    "Event streaming means continuously capturing, storing and processing events as they occur.",

                importance:
                    "Event streaming is a core concept behind real-time and event-driven architectures.",

                code: `Order Created
     ↓
Payment Completed
     ↓
Order Shipped
     ↓
Order Delivered

All events
     ↓
Kafka`
            }

        ]
    },


    {
        id: 2,
        slug: "kafka-architecture",
        title: "Kafka Architecture",

        description:
            "Learn brokers, clusters, topics, partitions and the basic Kafka architecture.",

        topics: [

            {
                id: 1,
                title: "Kafka Broker",

                explanation:
                    "A Kafka broker is a server that stores and serves Kafka records.",

                importance:
                    "Multiple brokers form a Kafka cluster and provide scalability and fault tolerance.",

                code: `Kafka Cluster

Broker 1
Broker 2
Broker 3

      ↓
 Distributed Data`
            },

            {
                id: 2,
                title: "Kafka Cluster",

                explanation:
                    "A Kafka cluster consists of multiple Kafka brokers working together.",

                importance:
                    "Clusters allow Kafka to distribute data and workload across multiple servers.",

                code: `        Kafka Cluster

   ┌───────────────┐
   │ Broker 1      │
   ├───────────────┤
   │ Broker 2      │
   ├───────────────┤
   │ Broker 3      │
   └───────────────┘`
            },

            {
                id: 3,
                title: "Kafka Topic",

                explanation:
                    "A topic is a logical name used to organize Kafka records.",

                importance:
                    "Producers publish records to topics and consumers read records from topics.",

                code: `Producer
    |
    ↓
Topic: orders
    |
    ↓
Consumer`
            }

        ]
    },


    {
        id: 3,
        slug: "kafka-topics-partitions",
        title: "Topics and Partitions",

        description:
            "Understand Kafka topics, partitions and message ordering.",

        topics: [

            {
                id: 1,
                title: "Topic",

                explanation:
                    "A Kafka topic represents a named stream of records.",

                importance:
                    "Topics provide the logical organization of events.",

                code: `orders
payments
users
notifications`
            },

            {
                id: 2,
                title: "Partition",

                explanation:
                    "A Kafka topic can be divided into multiple partitions. Each partition is an ordered sequence of records.",

                importance:
                    "Partitions provide scalability and parallel processing.",

                code: `Topic: orders

Partition 0
[0] [1] [2] [3]

Partition 1
[0] [1] [2] [3]

Partition 2
[0] [1] [2] [3]`
            },

            {
                id: 3,
                title: "Message Ordering",

                explanation:
                    "Kafka guarantees ordering within an individual partition.",

                importance:
                    "Understanding partition-level ordering is important when designing event-driven systems.",

                code: `Partition 0

Event A
   ↓
Event B
   ↓
Event C

Order is preserved`
            }

        ]
    },


    {
        id: 4,
        slug: "kafka-producer",
        title: "Kafka Producer",

        description:
            "Learn how applications publish records to Kafka.",

        topics: [

            {
                id: 1,
                title: "What is Producer?",

                explanation:
                    "A Kafka producer is an application that publishes records to Kafka topics.",

                importance:
                    "Producers are the entry point for events entering a Kafka system.",

                code: `Order Service

    |
    | publish
    ↓
Kafka Topic`
            },

            {
                id: 2,
                title: "Producer Record",

                explanation:
                    "A Kafka record can contain a key, value, timestamp and other metadata.",

                importance:
                    "The record is the fundamental unit sent by producers.",

                code: `Record

Key
 ↓
"user-101"

Value
 ↓
"Order Created"`
            },

            {
                id: 3,
                title: "Producer Key",

                explanation:
                    "A record key can influence which partition receives the record.",

                importance:
                    "Keys can be used to keep related events in the same partition.",

                code: `Key: user-101

      ↓

Partition selection

      ↓

Partition 2`
            }

        ]
    },


    {
        id: 5,
        slug: "kafka-consumer",
        title: "Kafka Consumer",

        description:
            "Learn how applications consume records from Kafka.",

        topics: [

            {
                id: 1,
                title: "What is Consumer?",

                explanation:
                    "A Kafka consumer is an application that reads records from Kafka topics.",

                importance:
                    "Consumers process events published by producers.",

                code: `Kafka Topic
     |
     ↓
Consumer
     |
     ↓
Business Logic`
            },

            {
                id: 2,
                title: "Consumer Polling",

                explanation:
                    "Kafka consumers retrieve records from brokers by polling for available records.",

                importance:
                    "Understanding polling helps explain how Kafka consumers process events.",

                code: `Consumer

poll()
  ↓
Records
  ↓
Process
  ↓
poll()
  ↓
Records`
            },

            {
                id: 3,
                title: "Consumer Offset",

                explanation:
                    "A consumer offset identifies a position in a partition that represents progress through records.",

                importance:
                    "Offsets allow consumers to track which records they have processed.",

                code: `Partition

0
1
2
3
4
5
6

      ↑
    Offset
      4`
            }

        ]
    },


    {
        id: 6,
        slug: "consumer-groups",
        title: "Consumer Groups",

        description:
            "Understand consumer groups and parallel Kafka message processing.",

        topics: [

            {
                id: 1,
                title: "What is Consumer Group?",

                explanation:
                    "A consumer group is a set of consumers that cooperate to consume records from Kafka topics.",

                importance:
                    "Consumer groups allow Kafka workloads to be processed in parallel.",

                code: `Topic

Partition 0 ──→ Consumer 1

Partition 1 ──→ Consumer 2

Partition 2 ──→ Consumer 3`
            },

            {
                id: 2,
                title: "Consumer Group ID",

                explanation:
                    "Consumers belonging to the same group use the same group identifier.",

                importance:
                    "Kafka uses the group identity to coordinate partition assignments.",

                code: `group.id = order-service

Consumer 1
Consumer 2
Consumer 3

       ↓

order-service group`
            },

            {
                id: 3,
                title: "Partition Assignment",

                explanation:
                    "Partitions are assigned among consumers within a consumer group.",

                importance:
                    "This allows multiple consumers to process different partitions concurrently.",

                code: `3 Partitions
3 Consumers

P0 → C1
P1 → C2
P2 → C3`
            }

        ]
    },


    {
        id: 7,
        slug: "kafka-offsets",
        title: "Kafka Offsets",

        description:
            "Learn offsets, commits and consumer progress.",

        topics: [

            {
                id: 1,
                title: "What is Offset?",

                explanation:
                    "An offset identifies the position of a record within a Kafka partition.",

                importance:
                    "Offsets allow consumers to resume processing from a known position.",

                code: `Partition

Offset
  ↓

0 → Event A
1 → Event B
2 → Event C
3 → Event D`
            },

            {
                id: 2,
                title: "Offset Commit",

                explanation:
                    "Consumers can commit offsets to record their processing progress.",

                importance:
                    "Offset commits are important for controlling how consumers resume after failures.",

                code: `Process Event
      ↓
Successful
      ↓
Commit Offset
      ↓
Next Event`
            }

        ]
    },


    {
        id: 8,
        slug: "kafka-replication",
        title: "Replication and Fault Tolerance",

        description:
            "Understand Kafka replication and how Kafka handles broker failures.",

        topics: [

            {
                id: 1,
                title: "Replication",

                explanation:
                    "Kafka can maintain multiple copies of partition data across brokers.",

                importance:
                    "Replication provides fault tolerance when brokers fail.",

                code: `Partition 0

Broker 1 → Leader

Broker 2 → Replica

Broker 3 → Replica`
            },

            {
                id: 2,
                title: "Leader and Followers",

                explanation:
                    "A partition has a leader replica that handles normal client operations while follower replicas replicate the data.",

                importance:
                    "Leader-follower replication is fundamental to Kafka availability.",

                code: `Partition

Leader
  |
  +──→ Follower
  |
  └──→ Follower`
            }

        ]
    },


    {
        id: 9,
        slug: "kafka-cli",
        title: "Kafka CLI Commands",

        description:
            "Learn useful Kafka command-line operations.",

        topics: [

            {
                id: 1,
                title: "Create Topic",

                explanation:
                    "Kafka command-line tools can be used to create topics.",

                importance:
                    "CLI commands are useful for development, testing and debugging.",

                code: `kafka-topics.sh
--create
--topic orders
--bootstrap-server localhost:9092
--partitions 3`
            },

            {
                id: 2,
                title: "List Topics",

                explanation:
                    "You can list topics available on a Kafka cluster.",

                importance:
                    "Topic inspection is useful when troubleshooting Kafka environments.",

                code: `kafka-topics.sh
--list
--bootstrap-server localhost:9092`
            },

            {
                id: 3,
                title: "Console Producer",

                explanation:
                    "The console producer allows you to publish test messages from the command line.",

                importance:
                    "It is useful for testing consumers without writing an application.",

                code: `kafka-console-producer.sh
--topic orders
--bootstrap-server localhost:9092`
            },

            {
                id: 4,
                title: "Console Consumer",

                explanation:
                    "The console consumer reads messages from a Kafka topic.",

                importance:
                    "It is useful for testing whether events are reaching Kafka.",

                code: `kafka-console-consumer.sh
--topic orders
--bootstrap-server localhost:9092
--from-beginning`
            }

        ]
    },


    {
        id: 10,
        slug: "spring-boot-kafka",
        title: "Spring Boot + Kafka",

        description:
            "Learn how to integrate Kafka with Spring Boot applications.",

        topics: [

            {
                id: 1,
                title: "Spring Kafka Dependency",

                explanation:
                    "Spring Kafka provides Spring-based abstractions for Kafka producers and consumers.",

                importance:
                    "It simplifies Kafka integration in Spring Boot applications.",

                code: `<dependency>

    <groupId>
        org.springframework.kafka
    </groupId>

    <artifactId>
        spring-kafka
    </artifactId>

</dependency>`
            },

            {
                id: 2,
                title: "Kafka Producer",

                explanation:
                    "KafkaTemplate is commonly used by Spring applications to publish records.",

                importance:
                    "It provides a convenient abstraction for sending Kafka messages.",

                code: `@Autowired
private KafkaTemplate<String, String>
    kafkaTemplate;

kafkaTemplate.send(
    "orders",
    "Order Created"
);`
            },

            {
                id: 3,
                title: "@KafkaListener",

                explanation:
                    "@KafkaListener marks a method as a Kafka message listener.",

                importance:
                    "It provides a simple way for Spring Boot applications to consume Kafka records.",

                code: `@KafkaListener(
    topics = "orders",
    groupId = "order-service"
)
public void consume(String message) {

    System.out.println(message);
}`
            },

            {
                id: 4,
                title: "Kafka Configuration",

                explanation:
                    "Spring Boot requires Kafka broker and consumer or producer configuration.",

                importance:
                    "Correct configuration is required for successful Kafka communication.",

                code: `spring:

  kafka:

    bootstrap-servers:
      localhost:9092

    consumer:

      group-id:
        order-service

      auto-offset-reset:
        earliest`
            }

        ]
    },


    {
        id: 11,
        slug: "kafka-producer-consumer-project",
        title: "Producer Consumer Project",

        description:
            "Build a practical Spring Boot producer and consumer example.",

        topics: [

            {
                id: 1,
                title: "Order Producer",

                explanation:
                    "An Order Service publishes an OrderCreated event to Kafka.",

                importance:
                    "This demonstrates asynchronous communication between microservices.",

                code: `Order Service

POST /orders

      ↓

Create Order

      ↓

KafkaTemplate

      ↓

orders topic`
            },

            {
                id: 2,
                title: "Order Consumer",

                explanation:
                    "Another service consumes the OrderCreated event and performs its business logic.",

                importance:
                    "This demonstrates service decoupling.",

                code: `orders topic
     |
     ↓
Notification Service
     |
     ↓
Send Notification`
            },

            {
                id: 3,
                title: "Event Driven Flow",

                explanation:
                    "The producer does not need to directly call every downstream service.",

                importance:
                    "This architecture reduces tight coupling between microservices.",

                code: `Order Service
     |
     ↓
Kafka
     |
     +──→ Payment Service
     |
     +──→ Notification Service
     |
     └──→ Analytics Service`
            }

        ]
    },


    {
        id: 12,
        slug: "kafka-error-handling",
        title: "Kafka Error Handling",

        description:
            "Learn retry, failures, dead-letter topics and reliable message processing.",

        topics: [

            {
                id: 1,
                title: "Consumer Failure",

                explanation:
                    "A consumer may fail while processing an event because of application, database or network problems.",

                importance:
                    "Reliable event processing requires a strategy for handling failures.",

                code: `Kafka
  |
  ↓
Consumer
  |
  ↓
Processing
  |
  X
Error
  |
  ↓
Retry`
            },

            {
                id: 2,
                title: "Retry",

                explanation:
                    "A failed message can be retried depending on the application's error handling strategy.",

                importance:
                    "Retries can recover from temporary failures.",

                code: `Message
   |
   ↓
Process
   |
   X
Failure
   |
   ↓
Retry
   |
   ↓
Process`
            },

            {
                id: 3,
                title: "Dead Letter Topic",

                explanation:
                    "A dead-letter topic can hold messages that cannot be successfully processed after configured retries.",

                importance:
                    "It prevents permanently failing records from repeatedly blocking normal processing.",

                code: `Main Topic
    |
    ↓
Consumer
    |
    X
Retries Failed
    |
    ↓
Dead Letter Topic`
            }

        ]
    },


    {
        id: 13,
        slug: "kafka-microservices",
        title: "Kafka + Microservices",

        description:
            "Understand Kafka in a Spring Boot microservices architecture.",

        topics: [

            {
                id: 1,
                title: "Synchronous vs Asynchronous",

                explanation:
                    "Synchronous communication requires the caller to wait for a response, while asynchronous communication allows an event to be published and processed later.",

                importance:
                    "Choosing between synchronous and asynchronous communication is an important microservices design decision.",

                code: `Synchronous

Service A
   |
   ↓
Service B
   |
   ↓
Response


Asynchronous

Service A
   |
   ↓
Kafka
   |
   ↓
Service B`
            },

            {
                id: 2,
                title: "Kafka Event Driven Architecture",

                explanation:
                    "Services communicate by publishing and consuming events instead of directly depending on every downstream service.",

                importance:
                    "This reduces coupling and supports scalable event-driven systems.",

                code: `                    Kafka

Order Service ───────→ orders
                         |
             ┌───────────┼───────────┐
             ↓           ↓           ↓
         Payment     Notification  Analytics`
            },

            {
                id: 3,
                title: "Kafka with API Gateway",

                explanation:
                    "An API Gateway can accept client requests while backend services publish events to Kafka for asynchronous processing.",

                importance:
                    "This is a common architecture for responsive APIs and event-driven backend workflows.",

                code: `React
  |
  ↓
API Gateway
  |
  ↓
Order Service
  |
  ↓
Kafka
  |
  +──→ Payment
  |
  +──→ Notification`
            }

        ]
    },


    {
        id: 14,
        slug: "kafka-interview",
        title: "Kafka Interview Concepts",

        description:
            "Important Kafka concepts frequently asked in Java and microservices interviews.",

        topics: [

            {
                id: 1,
                title: "Kafka vs RabbitMQ",

                explanation:
                    "Kafka is designed primarily around distributed event streaming and durable logs, while RabbitMQ is a traditional message broker with routing and queue-oriented messaging capabilities.",

                importance:
                    "Interviewers often ask when to choose Kafka versus another messaging technology.",

                code: `Kafka

Event Streaming
Partitions
Consumer Groups
High Throughput


RabbitMQ

Queues
Exchanges
Routing
Messaging`
            },

            {
                id: 2,
                title: "Kafka vs REST",

                explanation:
                    "REST typically uses synchronous request-response communication, while Kafka enables asynchronous event-based communication.",

                importance:
                    "Knowing the difference helps you choose the right communication mechanism in microservices.",

                code: `REST

Service A
   |
   ↓
Service B
   |
   ↓
Response


Kafka

Service A
   |
   ↓
Event
   |
   ↓
Kafka
   |
   ↓
Service B`
            },

            {
                id: 3,
                title: "At Least Once Delivery",

                explanation:
                    "At-least-once processing means a record may be delivered more than once, so consumers should be designed to tolerate duplicates when necessary.",

                importance:
                    "Delivery semantics are critical when building reliable event-driven applications.",

                code: `Event
  |
  ↓
Consumer
  |
  X
Failure before commit
  |
  ↓
Event processed again`
            },

            {
                id: 4,
                title: "Idempotent Consumer",

                explanation:
                    "An idempotent consumer is designed so that processing the same event multiple times does not produce an incorrect final result.",

                importance:
                    "Idempotency is an important technique for handling duplicate event delivery.",

                code: `Event ID: 1001

First processing
      ↓
SUCCESS

Duplicate event
      ↓
Already processed
      ↓
Ignore`
            }

        ]
    }

];