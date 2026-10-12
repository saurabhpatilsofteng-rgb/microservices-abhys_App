export const securityModules = [

    // =========================================================
    // 1. SPRING SECURITY INTRODUCTION
    // =========================================================

    {
        id: 1,
        slug: "spring-security-introduction",
        title: "Spring Security Introduction",

        description:
            "Understand Spring Security, authentication, authorization and the security filter chain.",

        topics: [

            {
                id: 1,
                title: "What is Spring Security?",

                explanation:
                    "Spring Security is a framework used to secure Spring applications by providing authentication, authorization, password management and protection against common security attacks.",

                importance:
                    "Spring Security is one of the most important technologies for securing Spring Boot REST APIs and enterprise applications.",

                code: `Spring Boot Application
        |
        ↓
Spring Security
        |
        ├── Authentication
        |
        ├── Authorization
        |
        ├── Password Security
        |
        └── Request Protection`
            },

            {
                id: 2,
                title: "Authentication vs Authorization",

                explanation:
                    "Authentication verifies who the user is. Authorization determines what an authenticated user is allowed to access.",

                importance:
                    "This is a fundamental security concept and is frequently asked in interviews.",

                code: `Authentication

"Who are you?"

User
 ↓
Username + Password
 ↓
Verify Identity


Authorization

"What are you allowed to access?"

USER
 ↓
ROLE_USER

ADMIN
 ↓
ROLE_ADMIN`
            },

            {
                id: 3,
                title: "Security Filter Chain",

                explanation:
                    "Spring Security processes HTTP requests through a chain of security filters before the request reaches the controller.",

                importance:
                    "Understanding the filter chain is essential when implementing JWT authentication.",

                code: `HTTP Request
      ↓
Security Filter Chain
      ↓
Authentication
      ↓
Authorization
      ↓
Controller
      ↓
Service
      ↓
Repository`
            }

        ]
    },


    // =========================================================
    // 2. SECURITY CONFIGURATION
    // =========================================================

    {
        id: 2,
        slug: "security-configuration",
        title: "Security Configuration",

        description:
            "Learn how to configure Spring Security in a Spring Boot application.",

        topics: [

            {
                id: 1,
                title: "SecurityFilterChain",

                explanation:
                    "SecurityFilterChain defines how incoming HTTP requests should be secured.",

                importance:
                    "Modern Spring Security applications generally configure security using SecurityFilterChain beans.",

                code: `@Bean
SecurityFilterChain securityFilterChain(
        HttpSecurity http) throws Exception {

    http
        .csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(auth -> auth
            .requestMatchers(
                "/auth/login",
                "/auth/register"
            ).permitAll()
            .anyRequest()
            .authenticated()
        );

    return http.build();
}`
            },

            {
                id: 2,
                title: "Public vs Protected Endpoints",

                explanation:
                    "Public endpoints can be accessed without authentication, while protected endpoints require a valid authentication mechanism.",

                importance:
                    "REST APIs commonly have public login/register endpoints and protected business endpoints.",

                code: `Public

POST /auth/login
POST /auth/register


Protected

GET /users
POST /users
DELETE /users/{id}`
            },

            {
                id: 3,
                title: "CSRF",

                explanation:
                    "Cross-Site Request Forgery is an attack where an attacker attempts to make a user's browser perform an unwanted authenticated action.",

                importance:
                    "CSRF configuration depends on the application's authentication architecture. Stateless APIs using bearer tokens often configure it differently from browser session applications.",

                code: `Traditional Web App

Browser
  ↓
Session Cookie
  ↓
CSRF Protection


Stateless REST API

Client
  ↓
Bearer Token
  ↓
API`
            }

        ]
    },


    // =========================================================
    // 3. PASSWORD SECURITY
    // =========================================================

    {
        id: 3,
        slug: "password-security",
        title: "Password Security",

        description:
            "Learn secure password storage using PasswordEncoder and BCrypt.",

        topics: [

            {
                id: 1,
                title: "PasswordEncoder",

                explanation:
                    "PasswordEncoder provides a secure abstraction for encoding and verifying passwords.",

                importance:
                    "Passwords should never be stored as plain text.",

                code: `@Bean
PasswordEncoder passwordEncoder() {

    return new BCryptPasswordEncoder();

}`
            },

            {
                id: 2,
                title: "BCrypt",

                explanation:
                    "BCrypt is a password hashing algorithm designed to make password cracking computationally expensive.",

                importance:
                    "It is commonly used for secure password storage in Spring applications.",

                code: `Raw Password

"admin123"

      ↓

BCrypt

      ↓

$2a$10$................

      ↓

Database`
            },

            {
                id: 3,
                title: "Password Verification",

                explanation:
                    "PasswordEncoder.matches() compares a raw password with the stored encoded password.",

                importance:
                    "During login, the application should verify the supplied password without decoding the stored hash.",

                code: `passwordEncoder.matches(
    rawPassword,
    storedPassword
);`
            }

        ]
    },


    // =========================================================
    // 4. USERDETAILS & AUTHENTICATION
    // =========================================================

    {
        id: 4,
        slug: "userdetails",
        title: "UserDetails & Authentication",

        description:
            "Understand how Spring Security loads and represents authenticated users.",

        topics: [

            {
                id: 1,
                title: "UserDetails",

                explanation:
                    "UserDetails represents the core information about an authenticated user, including username, password and authorities.",

                importance:
                    "It is a central abstraction used by Spring Security authentication providers.",

                code: `public class CustomUserDetails
        implements UserDetails {

    private String username;

    private String password;

    private Collection<
        GrantedAuthority
    > authorities;

}`
            },

            {
                id: 2,
                title: "UserDetailsService",

                explanation:
                    "UserDetailsService loads user-specific data, commonly from a database.",

                importance:
                    "It connects Spring Security authentication with your application's user repository.",

                code: `@Service
public class CustomUserDetailsService
        implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(
            String username) {

        return userRepository
            .findByUsername(username)
            .orElseThrow();

    }
}`
            },

            {
                id: 3,
                title: "AuthenticationManager",

                explanation:
                    "AuthenticationManager is responsible for processing authentication requests.",

                importance:
                    "JWT login implementations commonly use it to authenticate username and password before generating a token.",

                code: `Authentication authentication =
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            username,
            password
        )
    );`
            }

        ]
    },


    // =========================================================
    // 5. JWT INTRODUCTION
    // =========================================================

    {
        id: 5,
        slug: "jwt-introduction",
        title: "JWT Introduction",

        description:
            "Understand JSON Web Tokens and why they are used for stateless authentication.",

        topics: [

            {
                id: 1,
                title: "What is JWT?",

                explanation:
                    "JWT stands for JSON Web Token. It is a compact token format that can carry signed claims between parties.",

                importance:
                    "JWT bearer tokens are commonly used to authenticate REST API requests without maintaining a server-side login session.",

                code: `Client
   |
   | username + password
   ↓
Server
   |
   | JWT
   ↓
Client

Later:

Client
   |
   | Authorization: Bearer JWT
   ↓
Server`
            },

            {
                id: 2,
                title: "JWT Structure",

                explanation:
                    "A JWT commonly contains three Base64URL-encoded sections: header, payload and signature.",

                importance:
                    "Understanding these sections helps developers debug and design token-based authentication.",

                code: `JWT

HEADER
   .
PAYLOAD
   .
SIGNATURE


header.payload.signature`
            },

            {
                id: 3,
                title: "JWT Header",

                explanation:
                    "The header generally describes the token type and signing algorithm.",

                importance:
                    "The header tells the token consumer how the JWT was signed.",

                code: `{
    "alg": "HS256",
    "typ": "JWT"
}`
            },

            {
                id: 4,
                title: "JWT Payload",

                explanation:
                    "The payload contains claims such as subject, issued-at time, expiration time and application-specific information.",

                importance:
                    "Claims are used by the server when determining token identity and validity.",

                code: `{
    "sub": "saurabh",
    "role": "USER",
    "iat": 1720000000,
    "exp": 1720003600
}`
            },

            {
                id: 5,
                title: "JWT Signature",

                explanation:
                    "The signature allows the server to detect whether the signed token has been modified.",

                importance:
                    "A valid signature is essential for trusting the token contents.",

                code: `HMACSHA256(
    base64UrlEncode(header)
    + "."
    + base64UrlEncode(payload),
    secretKey
)`
            }

        ]
    },


    // =========================================================
    // 6. JWT LOGIN FLOW
    // =========================================================

    {
        id: 6,
        slug: "jwt-login-flow",
        title: "JWT Authentication Flow",

        description:
            "Learn the complete login and JWT request flow.",

        topics: [

            {
                id: 1,
                title: "Login Flow",

                explanation:
                    "The client submits credentials. The server authenticates the user and creates a signed JWT if authentication succeeds.",

                importance:
                    "This is the foundation of JWT-based authentication.",

                code: `React
  |
  | POST /auth/login
  | username + password
  ↓
Auth Service
  |
  ↓
AuthenticationManager
  |
  ↓
UserDetailsService
  |
  ↓
Database
  |
  ↓
JWT generated
  |
  ↓
React`
            },

            {
                id: 2,
                title: "Sending JWT",

                explanation:
                    "The client normally sends the JWT using the Authorization header with the Bearer scheme.",

                importance:
                    "This is the standard request pattern for bearer-token authentication.",

                code: `GET /users

Authorization:
Bearer eyJhbGciOiJIUzI1NiJ9...`
            },

            {
                id: 3,
                title: "JWT Validation",

                explanation:
                    "The server extracts the bearer token, validates its signature and claims, and establishes the authenticated principal.",

                importance:
                    "JWT validation protects protected endpoints from unauthenticated or invalid requests.",

                code: `Request
   ↓
Extract Authorization
   ↓
Bearer Token
   ↓
Validate JWT
   ↓
Check Expiration
   ↓
Create Authentication
   ↓
SecurityContext
   ↓
Controller`
            }

        ]
    },


    // =========================================================
    // 7. JWT AUTHENTICATION FILTER
    // =========================================================

    {
        id: 7,
        slug: "jwt-filter",
        title: "JWT Authentication Filter",

        description:
            "Learn how to implement a OncePerRequestFilter for JWT authentication.",

        topics: [

            {
                id: 1,
                title: "OncePerRequestFilter",

                explanation:
                    "OncePerRequestFilter provides a convenient base class for implementing a filter that executes once per request dispatch.",

                importance:
                    "It is commonly used to inspect the Authorization header and authenticate JWT requests.",

                code: `public class JwtAuthenticationFilter
        extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) {

        // JWT validation

        filterChain.doFilter(
            request,
            response
        );
    }
}`
            },

            {
                id: 2,
                title: "Extract Bearer Token",

                explanation:
                    "The filter reads the Authorization header and extracts the token after the Bearer prefix.",

                importance:
                    "Correct token extraction is the first step in JWT request authentication.",

                code: `String header =
    request.getHeader(
        "Authorization"
    );

if (header != null &&
    header.startsWith("Bearer ")) {

    String token =
        header.substring(7);
}`
            },

            {
                id: 3,
                title: "Set SecurityContext",

                explanation:
                    "After validating the token and identifying the user, the filter can place an Authentication object into the SecurityContext.",

                importance:
                    "Spring Security uses the SecurityContext to determine the authenticated principal for the current request.",

                code: `UsernamePasswordAuthenticationToken
authentication =

    new UsernamePasswordAuthenticationToken(
        username,
        null,
        authorities
    );

SecurityContextHolder
    .getContext()
    .setAuthentication(authentication);`
            }

        ]
    },


    // =========================================================
    // 8. ROLES & AUTHORITIES
    // =========================================================

    {
        id: 8,
        slug: "roles-authorities",
        title: "Roles & Authorities",

        description:
            "Learn role-based and authority-based access control.",

        topics: [

            {
                id: 1,
                title: "Roles",

                explanation:
                    "Roles represent broad groups of permissions such as USER, ADMIN or MANAGER.",

                importance:
                    "Roles are commonly used to protect groups of REST endpoints.",

                code: `USER
ADMIN
MANAGER


.requestMatchers("/admin/**")
.hasRole("ADMIN")`
            },

            {
                id: 2,
                title: "Authorities",

                explanation:
                    "Authorities represent specific permissions granted to an authenticated principal.",

                importance:
                    "Authorities allow more granular access control than broad roles.",

                code: `USER_READ
USER_CREATE
USER_UPDATE
USER_DELETE


.hasAuthority("USER_DELETE")`
            },

            {
                id: 3,
                title: "Method Security",

                explanation:
                    "Spring Security can protect service methods using annotations such as @PreAuthorize.",

                importance:
                    "Method-level security provides fine-grained authorization close to business logic.",

                code: `@PreAuthorize(
    "hasRole('ADMIN')"
)
public void deleteUser(
    Long id) {

    // delete user
}`
            }

        ]
    },


    // =========================================================
    // 9. JWT EXPIRATION & REFRESH
    // =========================================================

    {
        id: 9,
        slug: "jwt-expiration-refresh",
        title: "JWT Expiration & Refresh",

        description:
            "Understand access-token expiration and refresh-token architecture.",

        topics: [

            {
                id: 1,
                title: "JWT Expiration",

                explanation:
                    "JWTs can contain an expiration claim that limits how long the token should be accepted.",

                importance:
                    "Short-lived access tokens reduce the impact of token exposure.",

                code: `Access Token

Created
  ↓
Valid
  ↓
Expiration
  ↓
Rejected`
            },

            {
                id: 2,
                title: "Refresh Token",

                explanation:
                    "A refresh token can be used to obtain a new access token without requiring the user to enter credentials again.",

                importance:
                    "Refresh tokens allow short-lived access tokens while maintaining a longer user session.",

                code: `Login
  |
  ├── Access Token
  |
  └── Refresh Token


Access Token expires

        ↓

Refresh Token

        ↓

New Access Token`
            }

        ]
    },


    // =========================================================
    // 10. CORS & SPRING SECURITY
    // =========================================================

    {
        id: 10,
        slug: "cors-security",
        title: "CORS & Spring Security",

        description:
            "Understand Cross-Origin Resource Sharing and its configuration in Spring Security.",

        topics: [

            {
                id: 1,
                title: "What is CORS?",

                explanation:
                    "CORS is a browser security mechanism that controls whether a web page from one origin can access resources from another origin.",

                importance:
                    "It is especially important when a React frontend communicates with a Spring Boot API.",

                code: `React

http://localhost:5173

       ↓
       ↓ CORS
       ↓

Spring Boot

http://localhost:8080`
            },

            {
                id: 2,
                title: "CORS Configuration",

                explanation:
                    "Spring Security can be configured to use a CORS configuration that allows specific origins, methods and headers.",

                importance:
                    "Incorrect CORS configuration can prevent browsers from reaching your API even when the backend is running.",

                code: `http.cors(
    Customizer.withDefaults()
);`
            },

            {
                id: 3,
                title: "Authorization Header",

                explanation:
                    "When a frontend sends an Authorization header, the browser may perform a CORS preflight request depending on the request.",

                importance:
                    "This is important when debugging React + Spring Security JWT applications.",

                code: `OPTIONS /auth/login

Origin:
http://localhost:5173

Access-Control-Request-Method:
POST

Access-Control-Request-Headers:
content-type`
            }

        ]
    },


    // =========================================================
    // 11. SPRING SECURITY IN MICROSERVICES
    // =========================================================

    {
        id: 11,
        slug: "spring-security-microservices",
        title: "Spring Security in Microservices",

        description:
            "Understand JWT authentication with API Gateway and multiple Spring Boot services.",

        topics: [

            {
                id: 1,
                title: "Gateway Authentication",

                explanation:
                    "An API Gateway can validate JWTs before forwarding requests to downstream services.",

                importance:
                    "Centralized authentication can simplify security architecture in microservice systems.",

                code: `React
  |
  ↓
API Gateway
  |
  | Validate JWT
  ↓
User Service
  |
  ↓
Database`
            },

            {
                id: 2,
                title: "JWT + Eureka",

                explanation:
                    "In a service-discovery architecture, the gateway can discover services through Eureka while JWT authentication is handled at the gateway or services.",

                importance:
                    "This pattern is common in Spring Cloud microservice architectures.",

                code: `React
  ↓
API Gateway
  ↓
Eureka
  ↓
AUTH-SERVICE


or


API Gateway
  ↓
USER-SERVICE`
            },

            {
                id: 3,
                title: "Gateway Security Flow",

                explanation:
                    "The gateway receives the request, validates authentication information and routes authorized requests to the appropriate service.",

                importance:
                    "Understanding this flow helps debug authentication and routing issues in Dockerized microservices.",

                code: `Client
  |
  | Bearer JWT
  ↓
API Gateway :8080
  |
  | JWT Validation
  ↓
Service Discovery
  |
  ↓
AUTH-SERVICE :8081

USER-SERVICE :8082`
            }

        ]
    },


    // =========================================================
    // 12. SECURITY BEST PRACTICES
    // =========================================================

    {
        id: 12,
        slug: "security-best-practices",
        title: "Security Best Practices",

        description:
            "Learn production-oriented security practices for Spring Security and JWT.",

        topics: [

            {
                id: 1,
                title: "Never Store Plain Passwords",

                explanation:
                    "Passwords must be stored using a strong password hashing mechanism rather than plain text.",

                importance:
                    "A database leak should not expose users' original passwords.",

                code: `BAD

password = "admin123"


GOOD

password =
BCrypt(password)`
            },

            {
                id: 2,
                title: "Protect JWT Secret",

                explanation:
                    "JWT signing keys must not be hard-coded in source code or committed to public repositories.",

                importance:
                    "Anyone who obtains the signing secret may be able to forge tokens.",

                code: `application.properties

JWT_SECRET=
    \${JWT_SECRET}`
            },

            {
                id: 3,
                title: "Use HTTPS",

                explanation:
                    "Production authentication traffic should use HTTPS so credentials and tokens are protected in transit.",

                importance:
                    "TLS prevents attackers from easily observing or modifying network traffic.",

                code: `HTTP

Client
  ↓
Network
  ↓
Server


HTTPS

Client
  ↓
Encrypted TLS
  ↓
Server`
            },

            {
                id: 4,
                title: "Short-Lived Access Tokens",

                explanation:
                    "Access tokens should generally have an appropriate expiration time rather than remaining valid indefinitely.",

                importance:
                    "This limits the useful lifetime of a compromised access token.",

                code: `Access Token

exp = short duration

        ↓

Expired

        ↓

Refresh / Login`
            }

        ]
    }

];