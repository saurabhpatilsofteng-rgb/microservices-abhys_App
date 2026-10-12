export const redisModules = [

    {
        id: 1,
        slug: "redis-introduction",
        title: "Redis Introduction",

        description:
            "Understand Redis, its architecture, features and common use cases.",

        topics: [

            {
                id: 1,
                title: "What is Redis?",

                explanation:
                    "Redis is an in-memory data structure store commonly used as a cache, database, message broker and for other high-performance data access use cases.",

                importance:
                    "Redis is widely used in modern applications because it provides very fast data access.",

                code: `Application
     |
     ↓
   Redis
     |
     ↓
 Fast Data Access`
            },

            {
                id: 2,
                title: "Why Redis is Fast?",

                explanation:
                    "Redis primarily keeps frequently accessed data in memory, avoiding the disk-based access patterns commonly associated with traditional relational databases.",

                importance:
                    "Understanding Redis performance helps you decide when caching is appropriate.",

                code: `PostgreSQL

Application
     ↓
Database
     ↓
Disk


Redis

Application
     ↓
Memory
     ↓
Fast Response`
            },

            {
                id: 3,
                title: "Redis Use Cases",

                explanation:
                    "Redis can be used for caching, sessions, counters, rate limiting, queues, leaderboards and other low-latency workloads.",

                importance:
                    "Knowing Redis use cases helps you choose the correct architecture.",

                code: `Redis

 ├── Cache
 ├── Session
 ├── Counter
 ├── Rate Limiting
 ├── Queue
 ├── Pub/Sub
 └── Leaderboard`
            }

        ]
    },


    {
        id: 2,
        slug: "redis-data-types",
        title: "Redis Data Types",

        description:
            "Learn Redis strings, lists, sets, hashes and sorted sets.",

        topics: [

            {
                id: 1,
                title: "Redis String",

                explanation:
                    "A Redis string stores a sequence of bytes and is commonly used for simple values, counters and cached data.",

                importance:
                    "Strings are the simplest and most commonly used Redis data type.",

                code: `SET username "Saurabh"

GET username

Result:

Saurabh`
            },

            {
                id: 2,
                title: "Redis Hash",

                explanation:
                    "A Redis hash stores field-value pairs and is useful for representing objects.",

                importance:
                    "Hashes are useful when you want to store multiple related properties under one Redis key.",

                code: `HSET user:101
     name "Saurabh"
     age "28"
     role "Developer"

HGET user:101 name`
            },

            {
                id: 3,
                title: "Redis List",

                explanation:
                    "A Redis list is an ordered collection of strings that supports operations from both ends.",

                importance:
                    "Lists can be useful for queues and ordered collections.",

                code: `LPUSH tasks "Task 1"

LPUSH tasks "Task 2"

LRANGE tasks 0 -1`
            },

            {
                id: 4,
                title: "Redis Set",

                explanation:
                    "A Redis set is an unordered collection containing unique values.",

                importance:
                    "Sets are useful when duplicate values should not be stored.",

                code: `SADD skills "Java"

SADD skills "Spring"

SADD skills "Java"

SMEMBERS skills`
            },

            {
                id: 5,
                title: "Redis Sorted Set",

                explanation:
                    "A sorted set stores unique members associated with scores and keeps them ordered by score.",

                importance:
                    "Sorted sets are useful for rankings and leaderboards.",

                code: `ZADD leaderboard 100 "User1"

ZADD leaderboard 200 "User2"

ZRANGE leaderboard 0 -1`
            }

        ]
    },


    {
        id: 3,
        slug: "redis-cli",
        title: "Redis CLI Commands",

        description:
            "Learn the most important Redis commands using redis-cli.",

        topics: [

            {
                id: 1,
                title: "SET and GET",

                explanation:
                    "SET stores a value and GET retrieves the value associated with a key.",

                importance:
                    "These are the basic commands for Redis string operations.",

                code: `SET name "Saurabh"

GET name

DEL name`
            },

            {
                id: 2,
                title: "EXPIRE",

                explanation:
                    "EXPIRE sets a time-to-live for a Redis key.",

                importance:
                    "Expiration is extremely important for caching because cached data should often not live forever.",

                code: `SET otp "123456"

EXPIRE otp 60

TTL otp`
            },

            {
                id: 3,
                title: "KEYS and SCAN",

                explanation:
                    "Redis provides commands to inspect keys. SCAN is preferred for iterating through large keyspaces because it avoids the blocking behavior associated with KEYS.",

                importance:
                    "Using the appropriate key inspection command is important in production environments.",

                code: `SCAN 0

KEYS user:*`
            },

            {
                id: 4,
                title: "DEL",

                explanation:
                    "DEL removes one or more keys from Redis.",

                importance:
                    "It is commonly used for cache invalidation.",

                code: `SET user:101 "Saurabh"

DEL user:101

GET user:101`
            }

        ]
    },


    {
        id: 4,
        slug: "redis-expiration-ttl",
        title: "Expiration and TTL",

        description:
            "Learn Redis key expiration and time-to-live concepts.",

        topics: [

            {
                id: 1,
                title: "TTL",

                explanation:
                    "TTL returns the remaining time-to-live of a key.",

                importance:
                    "TTL allows applications to determine how long cached data remains available.",

                code: `SET token "abc123"

EXPIRE token 300

TTL token`
            },

            {
                id: 2,
                title: "Cache Expiration",

                explanation:
                    "Cached data can be configured to expire automatically after a specified period.",

                importance:
                    "Expiration prevents stale cache entries from remaining indefinitely.",

                code: `User Request
     |
     ↓
Redis Cache
     |
     ↓
Cache Hit
     |
     ↓
Return Data

After TTL expires:

Redis Entry
     ↓
Removed`
            }

        ]
    },


    {
        id: 5,
        slug: "redis-caching",
        title: "Redis Caching",

        description:
            "Learn how Redis is used to improve application performance.",

        topics: [

            {
                id: 1,
                title: "What is Caching?",

                explanation:
                    "Caching stores frequently accessed data in a faster storage layer so that future requests can avoid expensive operations.",

                importance:
                    "Caching can reduce database load and improve application response time.",

                code: `Request
   |
   ↓
Redis
   |
   ├── HIT
   |    ↓
   |  Response
   |
   └── MISS
        ↓
     Database
        ↓
      Redis
        ↓
     Response`
            },

            {
                id: 2,
                title: "Cache Hit",

                explanation:
                    "A cache hit occurs when requested data already exists in Redis.",

                importance:
                    "Cache hits avoid unnecessary database queries.",

                code: `Request
   |
   ↓
Redis
   |
   ↓
Cache HIT
   |
   ↓
Return Data`
            },

            {
                id: 3,
                title: "Cache Miss",

                explanation:
                    "A cache miss occurs when requested data is not available in Redis.",

                importance:
                    "The application normally retrieves the data from the primary database and may then populate the cache.",

                code: `Request
   |
   ↓
Redis
   |
   ↓
MISS
   |
   ↓
PostgreSQL
   |
   ↓
Save in Redis
   |
   ↓
Response`
            },

            {
                id: 4,
                title: "Cache Invalidation",

                explanation:
                    "Cache invalidation means removing or updating cached data when the underlying data changes.",

                importance:
                    "Incorrect cache invalidation can cause applications to return stale data.",

                code: `Update User
     |
     ↓
PostgreSQL
     |
     ↓
Delete Redis Cache
     |
     ↓
Next Request
     |
     ↓
Fetch Fresh Data`
            }

        ]
    },


    {
        id: 6,
        slug: "spring-boot-redis",
        title: "Spring Boot + Redis",

        description:
            "Learn how to integrate Redis with Spring Boot.",

        topics: [

            {
                id: 1,
                title: "Redis Dependency",

                explanation:
                    "Spring Data Redis provides Spring-based abstractions for working with Redis.",

                importance:
                    "It simplifies Redis integration in Spring Boot applications.",

                code: `<dependency>

    <groupId>
        org.springframework.boot
    </groupId>

    <artifactId>
        spring-boot-starter-data-redis
    </artifactId>

</dependency>`
            },

            {
                id: 2,
                title: "Redis Configuration",

                explanation:
                    "Spring Boot needs the Redis server connection information such as host and port.",

                importance:
                    "Correct configuration is required for the application to communicate with Redis.",

                code: `spring:

  data:

    redis:

      host: localhost

      port: 6379`
            },

            {
                id: 3,
                title: "Redis in Docker",

                explanation:
                    "When Redis runs in Docker and Spring Boot runs on the host machine, localhost:6379 can be used when the Redis container publishes port 6379.",

                importance:
                    "This matches the Docker setup you are currently using.",

                code: `Docker

redis-server
     |
     | Port 6379
     ↓
Host

Spring Boot
     |
     ↓
localhost:6379`
            },

            {
                id: 4,
                title: "RedisTemplate",

                explanation:
                    "RedisTemplate provides a high-level abstraction for Redis operations.",

                importance:
                    "It gives you programmatic control over Redis data structures.",

                code: `RedisTemplate<String, Object>

redisTemplate
      |
      +── opsForValue()
      |
      +── opsForHash()
      |
      +── opsForList()
      |
      +── delete()`
            }

        ]
    },


    {
        id: 7,
        slug: "redis-template",
        title: "RedisTemplate",

        description:
            "Learn common RedisTemplate operations in Spring Boot.",

        topics: [

            {
                id: 1,
                title: "Save Data",

                explanation:
                    "RedisTemplate can store values in Redis using its value operations API.",

                importance:
                    "This is one of the fundamental operations when using Redis programmatically.",

                code: `redisTemplate
    .opsForValue()
    .set(
        "user:101",
        "Saurabh"
    );`
            },

            {
                id: 2,
                title: "Read Data",

                explanation:
                    "Stored values can be retrieved using the value operations API.",

                importance:
                    "Reading cached data avoids repeated database access.",

                code: `Object value =
    redisTemplate
        .opsForValue()
        .get("user:101");`
            },

            {
                id: 3,
                title: "Delete Data",

                explanation:
                    "RedisTemplate can remove a key from Redis.",

                importance:
                    "Deleting cached values is a common cache invalidation operation.",

                code: `redisTemplate
    .delete("user:101");`
            },

            {
                id: 4,
                title: "Set Expiration",

                explanation:
                    "RedisTemplate can set an expiration time for a key.",

                importance:
                    "Expiration helps control the lifetime of cached data.",

                code: `redisTemplate
    .opsForValue()
    .set(
        "otp:101",
        "123456",
        Duration.ofMinutes(5)
    );`
            }

        ]
    },


    {
        id: 8,
        slug: "spring-cache-redis",
        title: "Spring Cache + Redis",

        description:
            "Learn annotation-based caching using Spring Boot and Redis.",

        topics: [

            {
                id: 1,
                title: "@EnableCaching",

                explanation:
                    "The @EnableCaching annotation enables Spring's cache abstraction.",

                importance:
                    "It allows services to use annotations such as @Cacheable.",

                code: `@SpringBootApplication
@EnableCaching
public class Application {

    public static void main(
        String[] args
    ) {

        SpringApplication.run(
            Application.class,
            args
        );
    }
}`
            },

            {
                id: 2,
                title: "@Cacheable",

                explanation:
                    "@Cacheable stores a method result in the configured cache and can return the cached result on subsequent calls.",

                importance:
                    "It provides a simple way to add caching without manually calling RedisTemplate everywhere.",

                code: `@Cacheable("users")
public User getUser(Long id) {

    return userRepository
        .findById(id)
        .orElseThrow();
}`
            },

            {
                id: 3,
                title: "@CacheEvict",

                explanation:
                    "@CacheEvict removes entries from a cache.",

                importance:
                    "It is useful when cached data becomes invalid after an update or delete.",

                code: `@CacheEvict(
    value = "users",
    key = "#id"
)
public void deleteUser(Long id) {

    userRepository.deleteById(id);
}`
            },

            {
                id: 4,
                title: "@CachePut",

                explanation:
                    "@CachePut executes the method and updates the corresponding cache entry with the returned value.",

                importance:
                    "It is useful when you want the cache to be refreshed after an update.",

                code: `@CachePut(
    value = "users",
    key = "#user.id"
)
public User updateUser(User user) {

    return userRepository.save(user);
}`
            }

        ]
    },


    {
        id: 9,
        slug: "redis-session",
        title: "Redis Session",

        description:
            "Understand how Redis can be used for distributed session storage.",

        topics: [

            {
                id: 1,
                title: "Session Storage",

                explanation:
                    "In a distributed application, session information can be stored in Redis so that multiple application instances can access the same session data.",

                importance:
                    "This helps avoid keeping session state only inside one application instance.",

                code: `Client
  |
  ↓
Load Balancer
  |
  +──→ App 1
  |
  +──→ App 2
  |
  ↓
Redis Session`
            },

            {
                id: 2,
                title: "Distributed Session",

                explanation:
                    "Multiple application instances can share session information through a centralized Redis store.",

                importance:
                    "This is useful when applications scale horizontally.",

                code: `App 1 ──┐
         |
App 2 ──┼──→ Redis
         |
App 3 ──┘`
            }

        ]
    },


    {
        id: 10,
        slug: "redis-rate-limiting",
        title: "Redis Rate Limiting",

        description:
            "Learn how Redis can help control request frequency.",

        topics: [

            {
                id: 1,
                title: "What is Rate Limiting?",

                explanation:
                    "Rate limiting restricts how many requests a client can make within a defined time period.",

                importance:
                    "It protects APIs from excessive traffic and abuse.",

                code: `Client

    ↓

API Gateway

    ↓

Redis Counter

    ↓

Allowed?

 YES → API

 NO  → 429`
            },

            {
                id: 2,
                title: "Redis Counter",

                explanation:
                    "Redis atomic increment operations can be used to maintain request counters.",

                importance:
                    "Atomic counters make Redis useful for high-throughput rate-limiting implementations.",

                code: `INCR requests:user:101

EXPIRE requests:user:101 60

If count > limit

→ Reject Request`
            }

        ]
    },


    {
        id: 11,
        slug: "redis-pub-sub",
        title: "Redis Pub/Sub",

        description:
            "Learn Redis publish and subscribe messaging.",

        topics: [

            {
                id: 1,
                title: "Publisher and Subscriber",

                explanation:
                    "Redis Pub/Sub allows publishers to send messages to channels and subscribers to receive messages from subscribed channels.",

                importance:
                    "It can be useful for lightweight real-time messaging and event notifications.",

                code: `Publisher
    |
    | PUBLISH
    ↓
Redis Channel
    |
    +──→ Subscriber 1
    |
    └──→ Subscriber 2`
            },

            {
                id: 2,
                title: "Pub/Sub Example",

                explanation:
                    "A publisher can publish an event to a channel while multiple subscribers receive the message.",

                importance:
                    "It provides a simple messaging mechanism for some real-time use cases.",

                code: `PUBLISH notifications
"User logged in"

SUBSCRIBE notifications`
            }

        ]
    },


    {
        id: 12,
        slug: "redis-docker",
        title: "Redis with Docker",

        description:
            "Run and manage Redis using Docker.",

        topics: [

            {
                id: 1,
                title: "Run Redis Container",

                explanation:
                    "Redis can be started as a Docker container using the official Redis image.",

                importance:
                    "Docker makes it easy to run Redis locally without installing Redis directly on Windows.",

                code: `docker run -d ^
  --name redis-server ^
  -p 6379:6379 ^
  redis`
            },

            {
                id: 2,
                title: "Check Redis Container",

                explanation:
                    "Docker commands can be used to verify whether the Redis container is running.",

                importance:
                    "Container status is the first thing to check when your application cannot connect to Redis.",

                code: `docker ps

docker logs redis-server`
            },

            {
                id: 3,
                title: "Connect to Redis CLI",

                explanation:
                    "redis-cli can be executed inside the Redis container to test Redis directly.",

                importance:
                    "This is useful for debugging connection and data problems.",

                code: `docker exec -it redis-server redis-cli

PING

PONG`
            },

            {
                id: 4,
                title: "Docker Compose Redis",

                explanation:
                    "Redis can be defined as a service in Docker Compose and connected to other application containers through the Compose network.",

                importance:
                    "This is the preferred approach when Redis is part of your complete microservices environment.",

                code: `services:

  redis:
    image: redis:latest

    container_name:
      redis-server

    ports:
      - "6379:6379"`
            }

        ]
    },


    {
        id: 13,
        slug: "redis-microservices",
        title: "Redis in Microservices",

        description:
            "Learn how Redis fits into a Spring Boot microservices architecture.",

        topics: [

            {
                id: 1,
                title: "Redis with API Gateway",

                explanation:
                    "Redis can be used alongside an API Gateway for rate limiting, caching and other distributed concerns.",

                importance:
                    "It can help protect and improve gateway performance.",

                code: `React
  |
  ↓
API Gateway
  |
  +──→ Redis
  |      |
  |      └── Rate Limit
  |
  ↓
Services`
            },

            {
                id: 2,
                title: "Redis with Auth Service",

                explanation:
                    "Redis can support temporary authentication-related data such as token metadata, OTPs, blacklists or short-lived state, depending on the security design.",

                importance:
                    "Temporary data often benefits from automatic expiration.",

                code: `Auth Service
     |
     +──→ PostgreSQL
     |
     └──→ Redis

Redis:

OTP
Token State
Temporary Data`
            },

            {
                id: 3,
                title: "Redis + PostgreSQL",

                explanation:
                    "A common architecture uses PostgreSQL as the durable source of truth and Redis as a fast caching layer.",

                importance:
                    "This combination gives you persistent storage together with low-latency reads.",

                code: `Application
     |
     ↓
   Redis
     |
     ├── HIT → Response
     |
     └── MISS
          ↓
      PostgreSQL
          ↓
        Redis`
            }

        ]
    },


    {
        id: 14,
        slug: "redis-interview",
        title: "Redis Interview Concepts",

        description:
            "Important Redis concepts frequently discussed in interviews.",

        topics: [

            {
                id: 1,
                title: "Redis vs PostgreSQL",

                explanation:
                    "Redis is primarily an in-memory data store optimized for low-latency operations, while PostgreSQL is a relational database designed for durable structured data and complex queries.",

                importance:
                    "You should know when Redis is appropriate and when a relational database should remain the source of truth.",

                code: `Redis

Fast
In-memory
Cache
Key-Value


PostgreSQL

Persistent
Relational
SQL
Transactions`
            },

            {
                id: 2,
                title: "Cache Aside Pattern",

                explanation:
                    "In the cache-aside pattern, the application first checks the cache. On a miss, it loads data from the database and places the result into the cache.",

                importance:
                    "This is one of the most common caching patterns.",

                code: `Read

   ↓

Check Redis

   ↓

Hit?
 /   \\
YES   NO
 |     |
 ↓     ↓
Data  DB
       |
       ↓
     Redis`
            },

            {
                id: 3,
                title: "Redis Persistence",

                explanation:
                    "Redis supports persistence mechanisms that can write in-memory data to disk, including RDB snapshots and AOF logging.",

                importance:
                    "Persistence choices matter when Redis is used for more than disposable caching.",

                code: `Redis Memory
     |
     +──→ RDB
     |
     └──→ AOF`
            }

        ]
    }

];