export const jspModules = [

    {
        id: 1,
        slug: "jsp-introduction",
        title: "JSP Introduction",

        description:
            "Learn what JSP is and how it is used to create dynamic Java web pages.",

        topics: [

            {
                id: 1,

                title: "What is JSP?",

                explanation:
                    "JSP stands for JavaServer Pages. It is a server-side technology used to create dynamic web pages using HTML and Java.",

                importance:
                    "JSP helps separate the presentation layer from Java backend logic and was widely used with Servlets.",

                code: `<html>

<body>

    <h1>
        Welcome to JSP
    </h1>

</body>

</html>`
            },

            {
                id: 2,

                title: "JSP Architecture",

                explanation:
                    "A JSP page is processed by the server and translated into a Servlet before execution.",

                importance:
                    "Understanding this explains why JSP and Servlet concepts are closely connected.",

                code: `Browser

   ↓

JSP Request

   ↓

JSP Container

   ↓

JSP Converted to Servlet

   ↓

Servlet Execution

   ↓

HTML Response`
            }

        ]
    },


    {
        id: 2,
        slug: "jsp-lifecycle",
        title: "JSP Lifecycle",

        description:
            "Understand how a JSP page is translated, compiled and executed.",

        topics: [

            {
                id: 1,

                title: "JSP Lifecycle Flow",

                explanation:
                    "A JSP page is translated into a Servlet, compiled, initialized, used to process requests and finally destroyed.",

                importance:
                    "This helps understand how JSP works internally.",

                code: `JSP Page

   ↓

Translation

   ↓

Servlet

   ↓

Compilation

   ↓

jspInit()

   ↓

_jspService()

   ↓

jspDestroy()`
            },

            {
                id: 2,

                title: "jspInit()",

                explanation:
                    "jspInit is called once when the JSP is initialized.",

                importance:
                    "It can be used for initialization operations.",

                code: `<%!

public void jspInit() {

    System.out.println(
        "JSP Initialized"
    );

}

%>`
            },

            {
                id: 3,

                title: "_jspService()",

                explanation:
                    "The generated JSP Servlet processes requests through the _jspService method.",

                importance:
                    "This is the main request processing phase of a JSP.",

                code: `Browser Request

      ↓

_jspService()

      ↓

Generate HTML

      ↓

Browser Response`
            }

        ]
    },


    {
        id: 3,
        slug: "jsp-syntax",
        title: "JSP Syntax",

        description:
            "Learn JSP expressions, scriptlets and declarations.",

        topics: [

            {
                id: 1,

                title: "JSP Expression",

                explanation:
                    "A JSP expression displays the value of a Java expression in the HTML response.",

                importance:
                    "It is a basic JSP syntax concept.",

                code: `<h1>

    Current Year:

    <%= 2026 %>

</h1>`
            },

            {
                id: 2,

                title: "JSP Scriptlet",

                explanation:
                    "A JSP scriptlet allows Java code to be written inside a JSP page.",

                importance:
                    "Scriptlets are important for understanding legacy JSP applications, although modern applications generally avoid putting business logic directly in JSP.",

                code: `<%

    String name = "Saurabh";

    out.println(name);

%>`
            },

            {
                id: 3,

                title: "JSP Declaration",

                explanation:
                    "A JSP declaration is used to declare variables or methods that become part of the generated Servlet class.",

                importance:
                    "It helps demonstrate how JSP is converted internally into a Servlet.",

                code: `<%!

    int count = 0;


    public String greet() {

        return "Hello";

    }

%>`
            }

        ]
    },


    {
        id: 4,
        slug: "jsp-implicit-objects",
        title: "JSP Implicit Objects",

        description:
            "Learn built-in JSP objects such as request, response, session and application.",

        topics: [

            {
                id: 1,

                title: "request Object",

                explanation:
                    "The request object contains data sent from the client.",

                importance:
                    "It is used to read request parameters and attributes.",

                code: `<%

String username =

    request.getParameter(
        "username"
    );

%>`
            },

            {
                id: 2,

                title: "session Object",

                explanation:
                    "The session object stores user-specific data across multiple requests.",

                importance:
                    "It is commonly used for login sessions and user information.",

                code: `<%

session.setAttribute(

    "username",

    "Saurabh"

);

%>`
            },

            {
                id: 3,

                title: "application Object",

                explanation:
                    "The application object represents the ServletContext and can store application-wide data.",

                importance:
                    "It allows data to be shared across the entire web application.",

                code: `<%

application.setAttribute(

    "appName",

    "Learning Platform"

);

%>`
            },

            {
                id: 4,

                title: "out Object",

                explanation:
                    "The out object is used to write content to the HTTP response.",

                importance:
                    "It represents the JSP output stream.",

                code: `<%

out.println(

    "Hello JSP"

);

%>`
            }

        ]
    },


    {
        id: 5,
        slug: "jsp-directives",
        title: "JSP Directives",

        description:
            "Learn page, include and taglib directives.",

        topics: [

            {
                id: 1,

                title: "Page Directive",

                explanation:
                    "The page directive provides configuration information for a JSP page.",

                importance:
                    "It is commonly used to import Java classes and configure page properties.",

                code: `<%@ page

    language="java"

    contentType="text/html"

%>`
            },

            {
                id: 2,

                title: "Include Directive",

                explanation:
                    "The include directive includes another file during JSP translation.",

                importance:
                    "It helps reuse common files such as headers and navigation.",

                code: `<%@ include

    file="header.jsp"

%>`
            },

            {
                id: 3,

                title: "Taglib Directive",

                explanation:
                    "The taglib directive makes custom tag libraries such as JSTL available in JSP.",

                importance:
                    "JSTL provides cleaner alternatives to Java scriptlets.",

                code: `<%@ taglib

    prefix="c"

    uri="jakarta.tags.core"

%>`
            }

        ]
    },


    {
        id: 6,
        slug: "jsp-el",
        title: "Expression Language (EL)",

        description:
            "Learn how JSP Expression Language accesses data without Java scriptlets.",

        topics: [

            {
                id: 1,

                title: "What is EL?",

                explanation:
                    "Expression Language allows JSP pages to access Java objects, attributes and values using simple expressions.",

                importance:
                    "EL makes JSP pages cleaner and easier to read.",

                code: `\${username}`
            },

            {
                id: 2,

                title: "Access Request Attribute",

                explanation:
                    "Data stored as a request attribute can be accessed using EL.",

                importance:
                    "This is commonly used when a Servlet or Spring MVC controller sends data to a JSP page.",

                code: `Java:

request.setAttribute(

    "name",

    "Saurabh"

);


JSP:

\${name}`
            },

            {
                id: 3,

                title: "Access Object Property",

                explanation:
                    "EL can access properties of Java objects.",

                importance:
                    "It makes displaying model data simple in JSP pages.",

                code: `\${user.name}

\${user.email}`
            }

        ]
    },


    {
        id: 7,
        slug: "jstl",
        title: "JSTL",

        description:
            "Learn JSP Standard Tag Library for conditions, loops and data processing.",

        topics: [

            {
                id: 1,

                title: "JSTL if Condition",

                explanation:
                    "The c:if tag conditionally displays content.",

                importance:
                    "It replaces Java if statements inside JSP pages.",

                code: `<c:if test="\${user != null}">

    Welcome

    \${user.name}

</c:if>`
            },

            {
                id: 2,

                title: "JSTL Loop",

                explanation:
                    "The c:forEach tag loops through collections.",

                importance:
                    "It is commonly used to display database records in tables.",

                code: `<c:forEach

    var="user"

    items="\${users}"

>

    <p>

        \${user.name}

    </p>

</c:forEach>`
            },

            {
                id: 3,

                title: "JSTL Choose",

                explanation:
                    "JSTL provides choose, when and otherwise for multiple conditional paths.",

                importance:
                    "It provides cleaner conditional rendering in JSP.",

                code: `<c:choose>

    <c:when test="\${age >= 18}">

        Adult

    </c:when>

    <c:otherwise>

        Minor

    </c:otherwise>

</c:choose>`
            }

        ]
    },


    {
        id: 8,
        slug: "jsp-with-servlet",
        title: "JSP with Servlet",

        description:
            "Learn how Servlets handle business logic and JSP displays the UI.",

        topics: [

            {
                id: 1,

                title: "MVC Flow",

                explanation:
                    "A common Java web architecture uses a Servlet as the Controller and JSP as the View.",

                importance:
                    "This separation keeps business logic away from the presentation layer.",

                code: `Browser

   ↓

Servlet
Controller

   ↓

Service

   ↓

DAO

   ↓

Database

   ↓

Servlet

   ↓

JSP View

   ↓

HTML Response`
            },

            {
                id: 2,

                title: "Forward Data to JSP",

                explanation:
                    "A Servlet can store data in the request and forward the request to a JSP.",

                importance:
                    "This is one of the most common patterns in traditional Java web applications.",

                code: `request.setAttribute(

    "message",

    "Welcome"

);


RequestDispatcher rd =

    request.getRequestDispatcher(

        "home.jsp"

    );


rd.forward(

    request,

    response

);`
            },

            {
                id: 3,

                title: "Display Data in JSP",

                explanation:
                    "The JSP page can display data received from the Servlet.",

                importance:
                    "This demonstrates the Controller-to-View data flow.",

                code: `<h1>

    \${message}

</h1>`
            }

        ]
    },


    {
        id: 9,
        slug: "jsp-forms",
        title: "JSP Forms",

        description:
            "Learn how HTML forms send data to Servlets.",

        topics: [

            {
                id: 1,

                title: "Login Form",

                explanation:
                    "A JSP page can contain an HTML form that submits data to a Servlet.",

                importance:
                    "Forms are fundamental for login, registration and data entry.",

                code: `<form

    action="login"

    method="post"

>

    <input
        type="text"
        name="username"
    />

    <input
        type="password"
        name="password"
    />

    <button>
        Login
    </button>

</form>`
            },

            {
                id: 2,

                title: "Read Form Data",

                explanation:
                    "The Servlet reads submitted form data using request parameters.",

                importance:
                    "This connects the JSP frontend with the Java backend.",

                code: `String username =

request.getParameter(

    "username"

);


String password =

request.getParameter(

    "password"

);`
            }

        ]
    },


    {
        id: 10,
        slug: "jsp-best-practices",
        title: "JSP Best Practices",

        description:
            "Learn professional JSP architecture and recommended practices.",

        topics: [

            {
                id: 1,

                title: "Avoid Scriptlets",

                explanation:
                    "Business logic should not be written directly inside JSP pages.",

                importance:
                    "Use Servlets, services and Java classes for logic, and JSP primarily for presentation.",

                code: `❌ Avoid

<%

if(user != null) {

    // business logic

}

%>


✅ Prefer

<c:if test="\${user != null}">

    Welcome

</c:if>`
            },

            {
                id: 2,

                title: "Use MVC Architecture",

                explanation:
                    "Keep Controller, Service, DAO and View responsibilities separate.",

                importance:
                    "This creates maintainable and scalable Java web applications.",

                code: `Controller
    ↓
Service
    ↓
DAO
    ↓
Database


Controller
    ↓
JSP View`
            }

        ]
    }

];