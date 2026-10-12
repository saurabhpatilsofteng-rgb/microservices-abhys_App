export const servletModules = [

    {
        id: 1,
        slug: "servlet-introduction",
        title: "Servlet Introduction",

        description:
            "Learn what Java Servlet is and how it works in web applications.",

        topics: [

            {
                id: 1,

                title: "What is a Servlet?",

                explanation:
                    "A Servlet is a Java class that runs on a web server and handles client requests and server responses.",

                importance:
                    "Servlet is a fundamental Java web technology and helps you understand how Java web applications work.",

                code: `Browser

   ↓ HTTP Request

Servlet Container

   ↓

Servlet

   ↓

Business Logic / Database

   ↓

HTTP Response

   ↓

Browser`
            },

            {
                id: 2,

                title: "Why Use Servlet?",

                explanation:
                    "Servlets allow Java applications to process HTTP requests, generate responses and communicate with databases.",

                importance:
                    "Servlet concepts are the foundation for understanding JSP, Spring MVC and many Java web technologies.",

                code: `Client Request
      ↓
Servlet
      ↓
Service Layer
      ↓
Database
      ↓
Response`
            }

        ]
    },


    {
        id: 2,
        slug: "servlet-architecture",
        title: "Servlet Architecture",

        description:
            "Understand the Servlet Container, request-response lifecycle and application architecture.",

        topics: [

            {
                id: 1,

                title: "Servlet Container",

                explanation:
                    "A Servlet Container manages Servlet lifecycle, HTTP requests, responses, sessions and security.",

                importance:
                    "Apache Tomcat is a common Servlet Container used for Java web applications.",

                code: `Client
   ↓
Tomcat Server
   ↓
Servlet Container
   ↓
Servlet`
            },

            {
                id: 2,

                title: "Request and Response",

                explanation:
                    "The browser sends an HTTP request to the server. The Servlet processes it and sends an HTTP response.",

                importance:
                    "Understanding HttpServletRequest and HttpServletResponse is essential for Servlet development.",

                code: `HTTP Request
      ↓
HttpServletRequest
      ↓
Servlet Processing
      ↓
HttpServletResponse
      ↓
HTTP Response`
            }

        ]
    },


    {
        id: 3,
        slug: "servlet-lifecycle",
        title: "Servlet Lifecycle",

        description:
            "Learn init(), service() and destroy() methods.",

        topics: [

            {
                id: 1,

                title: "Servlet Lifecycle",

                explanation:
                    "A Servlet normally goes through initialization, request processing and destruction phases.",

                importance:
                    "Lifecycle understanding is important for managing resources correctly.",

                code: `Servlet Loaded

      ↓

init()

      ↓

service()

      ↓

service()

      ↓

service()

      ↓

destroy()`
            },

            {
                id: 2,

                title: "init() Method",

                explanation:
                    "The init method is called once when the Servlet is initialized.",

                importance:
                    "It can be used for one-time initialization tasks.",

                code: `public void init() {

    System.out.println(
        "Servlet Initialized"
    );

}`
            },

            {
                id: 3,

                title: "service() Method",

                explanation:
                    "The service method processes incoming client requests.",

                importance:
                    "It is the central request processing mechanism in the Servlet lifecycle.",

                code: `protected void service(

    HttpServletRequest request,

    HttpServletResponse response

) {

    // Process request

}`
            },

            {
                id: 4,

                title: "destroy() Method",

                explanation:
                    "The destroy method is called before the Servlet is removed from service.",

                importance:
                    "It can be used to release resources such as database connections or other application resources.",

                code: `public void destroy() {

    System.out.println(
        "Servlet Destroyed"
    );

}`
            }

        ]
    },


    {
        id: 4,
        slug: "http-servlet",
        title: "HttpServlet",

        description:
            "Learn how to create HTTP-based Servlets using HttpServlet.",

        topics: [

            {
                id: 1,

                title: "Creating HttpServlet",

                explanation:
                    "HttpServlet is a class used to handle HTTP requests such as GET and POST.",

                importance:
                    "Most Java web applications use HttpServlet or frameworks built on similar HTTP concepts.",

                code: `import jakarta.servlet.http.HttpServlet;

public class UserServlet
        extends HttpServlet {

}`
            },

            {
                id: 2,

                title: "Servlet Mapping",

                explanation:
                    "Servlet mapping connects a URL with a Servlet class.",

                importance:
                    "The mapping determines which Servlet handles a specific request.",

                code: `@WebServlet("/users")

public class UserServlet
        extends HttpServlet {

}`
            }

        ]
    },


    {
        id: 5,
        slug: "get-request",
        title: "GET Request",

        description:
            "Learn doGet() and how GET requests work.",

        topics: [

            {
                id: 1,

                title: "doGet() Method",

                explanation:
                    "The doGet method handles HTTP GET requests.",

                importance:
                    "GET is commonly used to retrieve data from the server.",

                code: `@WebServlet("/users")

public class UserServlet
        extends HttpServlet {

    @Override

    protected void doGet(

        HttpServletRequest request,

        HttpServletResponse response

    ) throws IOException {

        response.getWriter()
                .println("User Data");

    }

}`
            },

            {
                id: 2,

                title: "Request Parameters",

                explanation:
                    "GET requests can send parameters through the URL.",

                importance:
                    "Request parameters are commonly used for search, filtering and resource identification.",

                code: `URL:

/users?id=10


Java:

String id =

request.getParameter("id");`
            }

        ]
    },


    {
        id: 6,
        slug: "post-request",
        title: "POST Request",

        description:
            "Learn doPost() and how to send form data to a Servlet.",

        topics: [

            {
                id: 1,

                title: "doPost() Method",

                explanation:
                    "The doPost method handles HTTP POST requests.",

                importance:
                    "POST is commonly used for login forms, registration and creating new data.",

                code: `@Override

protected void doPost(

    HttpServletRequest request,

    HttpServletResponse response

) throws IOException {

    String name =

        request.getParameter("name");

    response.getWriter()

        .println(name);

}`
            },

            {
                id: 2,

                title: "HTML Form to Servlet",

                explanation:
                    "An HTML form can send data to a Servlet using the POST method.",

                importance:
                    "This demonstrates how frontend applications communicate with Java backend code.",

                code: `<form

    action="register"

    method="post"

>

    <input
        type="text"
        name="username"
    />

    <button>
        Register
    </button>

</form>`
            }

        ]
    },


    {
        id: 7,
        slug: "request-response",
        title: "Request and Response",

        description:
            "Understand HttpServletRequest and HttpServletResponse.",

        topics: [

            {
                id: 1,

                title: "HttpServletRequest",

                explanation:
                    "HttpServletRequest contains information sent by the client.",

                importance:
                    "It is used to access parameters, headers, cookies and session information.",

                code: `String username =

request.getParameter(
    "username"
);`
            },

            {
                id: 2,

                title: "HttpServletResponse",

                explanation:
                    "HttpServletResponse is used to send data back to the client.",

                importance:
                    "It controls the response body, status code, headers and redirects.",

                code: `response.setContentType(

    "text/html"

);

response.getWriter()

    .println(

        "<h1>Hello</h1>"

    );`
            },

            {
                id: 3,

                title: "HTTP Status Code",

                explanation:
                    "HTTP status codes describe the result of a request.",

                importance:
                    "Status codes are important when building APIs and web applications.",

                code: `200 → OK

201 → Created

400 → Bad Request

401 → Unauthorized

403 → Forbidden

404 → Not Found

500 → Internal Server Error`
            }

        ]
    },


    {
        id: 8,
        slug: "request-dispatcher",
        title: "RequestDispatcher",

        description:
            "Learn forward() and include() in Servlets.",

        topics: [

            {
                id: 1,

                title: "forward()",

                explanation:
                    "forward sends the request from one server-side resource to another.",

                importance:
                    "It is commonly used to forward a request from a Servlet to a JSP page.",

                code: `RequestDispatcher rd =

request.getRequestDispatcher(

    "dashboard.jsp"

);


rd.forward(

    request,

    response

);`
            },

            {
                id: 2,

                title: "include()",

                explanation:
                    "include includes the output of another resource in the current response.",

                importance:
                    "It can be used to reuse common response content.",

                code: `RequestDispatcher rd =

request.getRequestDispatcher(

    "header.jsp"

);


rd.include(

    request,

    response

);`
            }

        ]
    },


    {
        id: 9,
        slug: "session-management",
        title: "Session Management",

        description:
            "Learn HttpSession, cookies and URL rewriting.",

        topics: [

            {
                id: 1,

                title: "HttpSession",

                explanation:
                    "HttpSession stores user-specific data between multiple HTTP requests.",

                importance:
                    "Sessions are commonly used for login authentication and user information.",

                code: `HttpSession session =

request.getSession();


session.setAttribute(

    "username",

    "Saurabh"

);`
            },

            {
                id: 2,

                title: "Get Session Data",

                explanation:
                    "Session attributes can be retrieved in another request.",

                importance:
                    "This allows user information to persist while navigating the application.",

                code: `String username =

(String)

session.getAttribute(

    "username"

);`
            },

            {
                id: 3,

                title: "Invalidate Session",

                explanation:
                    "invalidate removes the current session.",

                importance:
                    "This is commonly performed during logout.",

                code: `session.invalidate();`
            }

        ]
    },


    {
        id: 10,
        slug: "cookies",
        title: "Cookies",

        description:
            "Learn how cookies store small pieces of client-side data.",

        topics: [

            {
                id: 1,

                title: "Create Cookie",

                explanation:
                    "A Cookie stores small pieces of data in the browser.",

                importance:
                    "Cookies can be used for preferences, identifiers and session-related information.",

                code: `Cookie cookie =

new Cookie(

    "username",

    "Saurabh"

);


response.addCookie(

    cookie

);`
            },

            {
                id: 2,

                title: "Read Cookie",

                explanation:
                    "Cookies sent by the browser can be accessed from the request.",

                importance:
                    "This helps maintain state between requests.",

                code: `Cookie[] cookies =

request.getCookies();


for (Cookie cookie : cookies) {

    System.out.println(

        cookie.getName()

    );

}`
            }

        ]
    },


    {
        id: 11,
        slug: "filters",
        title: "Servlet Filters",

        description:
            "Learn how Filters intercept requests and responses.",

        topics: [

            {
                id: 1,

                title: "What is a Filter?",

                explanation:
                    "A Filter intercepts requests before they reach a Servlet and can also process responses.",

                importance:
                    "Filters are commonly used for authentication, logging and CORS handling.",

                code: `Client Request

      ↓

Filter

      ↓

Servlet

      ↓

Response`
            },

            {
                id: 2,

                title: "Create Filter",

                explanation:
                    "A class implementing Filter can intercept application requests.",

                importance:
                    "Filters centralize common functionality instead of repeating it in every Servlet.",

                code: `@WebFilter("/*")

public class AuthFilter

        implements Filter {


    @Override

    public void doFilter(

        ServletRequest request,

        ServletResponse response,

        FilterChain chain

    ) {

        chain.doFilter(

            request,

            response

        );

    }

}`
            }

        ]
    },


    {
        id: 12,
        slug: "listeners",
        title: "Servlet Listeners",

        description:
            "Learn how Listeners react to application and session events.",

        topics: [

            {
                id: 1,

                title: "ServletContextListener",

                explanation:
                    "A ServletContextListener can execute code when the web application starts or stops.",

                importance:
                    "Useful for application initialization and cleanup.",

                code: `@WebListener

public class AppListener

        implements ServletContextListener {


    @Override

    public void contextInitialized(

        ServletContextEvent event

    ) {

        System.out.println(

            "Application Started"

        );

    }

}`
            }

        ]
    },


    {
        id: 13,
        slug: "servlet-jdbc",
        title: "Servlet with JDBC",

        description:
            "Learn how a Servlet communicates with a database using JDBC.",

        topics: [

            {
                id: 1,

                title: "Servlet Database Flow",

                explanation:
                    "A Servlet can call a service or DAO layer which communicates with the database using JDBC.",

                importance:
                    "This architecture demonstrates the connection between web applications and databases.",

                code: `Browser

   ↓

Servlet

   ↓

Service

   ↓

DAO

   ↓

JDBC

   ↓

PostgreSQL`
            },

            {
                id: 2,

                title: "Simple Database Example",

                explanation:
                    "The Servlet can call database code to retrieve records.",

                importance:
                    "In real applications, database code should normally be separated into DAO or Repository classes.",

                code: `protected void doGet(

    HttpServletRequest request,

    HttpServletResponse response

) throws IOException {


    UserDao userDao =

        new UserDao();


    List<User> users =

        userDao.getAllUsers();


}`
            }

        ]
    }


];