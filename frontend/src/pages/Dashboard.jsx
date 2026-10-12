import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Dashboard() {

    const [dsaOpen, setDsaOpen] = useState(false);
    const [javaOpen, setJavaOpen] = useState(false);
    const [oopsOpen, setOopsOpen] = useState(false);
    const [stringsOpen, setStringsOpen] = useState(false);
    const [arraysOpen, setArraysOpen] = useState(false);

    // =========================
    // REDUX MODULES
    // =========================

    const javaModules = useSelector(
        state => state.coreJava?.modules || []
    );

    const oopsModules = useSelector(
        state => state.oops?.modules || []
    );

    const stringModules = useSelector(
        state => state.strings?.modules || []
    );

    const arrayModules = useSelector(
        state => state.arrays?.modules || []
    );


    // =========================
    // COMMON STYLES
    // =========================

    const containerStyle = {
        border: "1px solid black",
        marginTop: "15px"
    };

    const headerStyle = {
        padding: "15px",
        cursor: "pointer",
        fontWeight: "bold"
    };

    const contentStyle = {
        borderTop: "1px solid black",
        padding: "15px"
    };

    const linkStyle = {
        display: "block",
        marginBottom: "10px"
    };


    return (

        <div style={{ padding: "30px" }}>

            {/* =========================
                PAGE HEADER
            ========================= */}

            <h1>
                Learning Dashboard
            </h1>

            <p>
                Welcome to your learning application.
            </p>


            {/* =========================
                DSA
            ========================= */}

            <div style={containerStyle}>

                <div
                    onClick={() => setDsaOpen(!dsaOpen)}
                    style={headerStyle}
                >

                    DSA

                    <span style={{ float: "right" }}>
                        {dsaOpen ? "▲" : "▼"}
                    </span>

                </div>


                {dsaOpen && (

                    <div style={contentStyle}>

                        <Link
                            to="/modules/arrays"
                            style={linkStyle}
                        >
                            Arrays
                        </Link>


                        <Link
                            to="/modules/strings"
                            style={linkStyle}
                        >
                            Strings
                        </Link>


                        <Link
                            to="/modules/searching"
                            style={linkStyle}
                        >
                            Searching
                        </Link>


                        <Link
                            to="/modules/sorting"
                            style={linkStyle}
                        >
                            Sorting
                        </Link>


                        <Link
                            to="/modules/linked-list"
                            style={linkStyle}
                        >
                            Linked List
                        </Link>


                        <Link
                            to="/modules/stack"
                            style={linkStyle}
                        >
                            Stack
                        </Link>


                        <Link
                            to="/modules/queue"
                            style={{ display: "block" }}
                        >
                            Queue
                        </Link>

                    </div>

                )}

            </div>


            {/* =========================
                CORE JAVA
            ========================= */}

            <div style={containerStyle}>

                <div
                    onClick={() => setJavaOpen(!javaOpen)}
                    style={headerStyle}
                >

                    Core Java

                    <span style={{ float: "right" }}>
                        {javaOpen ? "▲" : "▼"}
                    </span>

                </div>


                {javaOpen && (

                    <div style={contentStyle}>

                        {javaModules.length > 0 ? (

                            javaModules.map(module => (

                                <Link
                                    key={module.id}
                                    to={`/core-java/${module.slug}`}
                                    style={linkStyle}
                                >
                                    {module.title}
                                </Link>

                            ))

                        ) : (

                            <p>
                                No Core Java modules available.
                            </p>

                        )}

                    </div>

                )}

            </div>

{/* =========================
    OOP
========================= */}

<div style={containerStyle}>

    <div
        onClick={() => setOopsOpen(!oopsOpen)}
        style={headerStyle}
    >
        OOP

        <span style={{ float: "right" }}>
            {oopsOpen ? "▲" : "▼"}
        </span>
    </div>

    {oopsOpen && (
        <div style={contentStyle}>

            {oopsModules.length > 0 ? (

                oopsModules.map((module) => (

                    <Link
                        key={module.id}
                        to={`/oops/${module.id}`}
                        style={linkStyle}
                    >
                        {module.title}
                    </Link>

                ))

            ) : (

                <p>
                    No OOP modules available.
                </p>

            )}

        </div>
    )}

</div>
            {/* =========================
                STRINGS
            ========================= */}

            <div style={containerStyle}>

                <div
                    onClick={() =>
                        setStringsOpen(!stringsOpen)
                    }
                    style={headerStyle}
                >

                    Strings

                    <span style={{ float: "right" }}>
                        {stringsOpen ? "▲" : "▼"}
                    </span>

                </div>


                {stringsOpen && (

                    <div style={contentStyle}>

                        {stringModules.length > 0 ? (

                            stringModules.map(module => (

                                <Link
                                    key={module.id}
                                    to={`/strings/${module.slug}`}
                                    style={linkStyle}
                                >
                                    {module.title}
                                </Link>

                            ))

                        ) : (

                            <p>
                                No String modules available.
                            </p>

                        )}

                    </div>

                )}

            </div>


            {/* =========================
                ARRAYS
            ========================= */}

            <div style={containerStyle}>

                <div
                    onClick={() =>
                        setArraysOpen(!arraysOpen)
                    }
                    style={headerStyle}
                >

                    Arrays

                    <span style={{ float: "right" }}>
                        {arraysOpen ? "▲" : "▼"}
                    </span>

                </div>


                {arraysOpen && (

                    <div style={contentStyle}>

                        {arrayModules.length > 0 ? (

                            arrayModules.map(module => (

                                <Link
                                    key={module.id}
                                    to={`/arrays/${module.slug}`}
                                    style={linkStyle}
                                >
                                    {module.title}
                                </Link>

                            ))

                        ) : (

                            <p>
                                No Array modules available.
                            </p>

                        )}

                    </div>

                )}

            </div>


            {/* =========================
                JAVA TECHNOLOGIES
            ========================= */}

            <h2 style={{ marginTop: "30px" }}>
                Java Technologies
            </h2>


            <Link
                to="/collections"
                className="learning-card"
            >

                <h2>
                    Collections
                </h2>

                <p>
                    Learn List, Set, Map, Queue,
                    HashMap, HashSet, ArrayList,
                    LinkedList and more.
                </p>

            </Link>


            <Link
                to="/exception-handling"
                className="learning-card"
            >

                <h2>
                    Exception Handling
                </h2>

                <p>
                    Learn try, catch, finally,
                    throw, throws, custom exceptions
                    and exception hierarchy.
                </p>

            </Link>


            <Link
                to="/multithreading"
                className="learning-card"
            >

                <h2>
                    Multithreading
                </h2>

                <p>
                    Learn threads, Runnable,
                    synchronization, locks,
                    ExecutorService and concurrency.
                </p>

            </Link>


            <Link
                to="/java8"
                className="learning-card"
            >

                <h2>
                    Java 8 Features
                </h2>

                <p>
                    Learn Lambda expressions,
                    Stream API, Optional,
                    Functional Interfaces and Date-Time API.
                </p>

            </Link>


            <Link
                to="/jdbc"
                className="learning-card"
            >

                <h2>
                    JDBC
                </h2>

                <p>
                    Learn Java Database Connectivity,
                    CRUD operations, PreparedStatement,
                    transactions and connection pooling.
                </p>

            </Link>


            <Link
                to="/sql"
                className="learning-card"
            >

                <h2>
                    SQL
                </h2>

                <p>
                    Learn SQL, CRUD operations,
                    joins, subqueries, indexes,
                    transactions and advanced queries.
                </p>

            </Link>


            <Link
                to="/postgresql"
                className="learning-card"
            >

                <h2>
                    PostgreSQL
                </h2>

                <p>
                    Learn PostgreSQL, schemas, tables,
                    JSONB, functions, transactions,
                    indexes and performance optimization.
                </p>

            </Link>


            {/* =========================
                JAVA WEB
            ========================= */}

            <h2 style={{ marginTop: "30px" }}>
                Java Web
            </h2>


            <Link
                to="/servlet"
                className="learning-card"
            >

                <h2>
                    Java Servlet
                </h2>

                <p>
                    Learn Servlet lifecycle,
                    request and response,
                    sessions, cookies, filters
                    and MVC architecture.
                </p>

            </Link>


            <Link
                to="/jsp"
                className="learning-card"
            >

                <h2>
                    JSP
                </h2>

                <p>
                    Learn JSP lifecycle, EL,
                    JSTL, directives, implicit objects,
                    forms and MVC architecture.
                </p>

            </Link>


            {/* =========================
                SPRING
            ========================= */}

            <h2 style={{ marginTop: "30px" }}>
                Spring Framework
            </h2>


            <Link
                to="/spring-core"
                className="learning-card"
            >

                <h2>
                    Spring Core
                </h2>

                <p>
                    Learn IoC, Dependency Injection,
                    Beans, ApplicationContext,
                    configuration and AOP basics.
                </p>

            </Link>


            <Link
                to="/spring-boot"
                className="learning-card"
            >

                <h2>
                    Spring Boot
                </h2>

                <p>
                    Learn Spring Boot,
                    REST APIs, configuration,
                    JPA, validation, security
                    and production-ready applications.
                </p>

            </Link>

        </div>
    );
}

export default Dashboard;