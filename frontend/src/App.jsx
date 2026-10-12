import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";

import AppLayout from "./layouts/AppLayout";

import Dashboard from "./pages/Dashboard";


/* =========================
   DSA
========================= */

import Modules from "./pages/dsa/Modules";
import ModuleDetails from "./pages/dsa/ModuleDetails";
import QuestionDetails from "./pages/dsa/QuestionDetails";


/* =========================
   CORE JAVA
========================= */

import CoreJava from "./pages/corejava/CoreJava";
import CoreJavaModule from "./pages/corejava/CoreJavaModule";
import CoreJavaTopic from "./pages/corejava/CoreJavaTopic";


/* =========================
   OOPS
========================= */
import Oops from "./pages/oops/Oops";
import OopsModule from "./pages/oops/OopsModule";
import OopsTopic from "./pages/oops/OopsTopic";


/* =========================
   STRINGS
========================= */

import StringsModule from "./pages/strings/StringsModule";
import StringTopic from "./pages/strings/StringTopic";


/* =========================
   ARRAYS
========================= */

import ArraysModule from "./pages/arrays/ArraysModule";
import ArrayTopic from "./pages/arrays/ArrayTopic";


import CollectionsModule
    from "./pages/collections/CollectionsModule";

import CollectionTopic
    from "./pages/collections/CollectionTopic";


    import ExceptionHandlingModule
    from "./pages/exceptionhandling/ExceptionHandlingModule";

import ExceptionTopic
    from "./pages/exceptionhandling/ExceptionTopic";


    import MultithreadingModule
    from "./pages/multithreading/MultithreadingModule";

import MultithreadingTopic
    from "./pages/multithreading/MultithreadingTopic";


    import Java8Module
    from "./pages/java8/Java8Module";

import Java8Topic
    from "./pages/java8/Java8Topic";

    import JdbcModule
    from "./pages/jdbc/JdbcModule";

import JdbcTopic
    from "./pages/jdbc/JdbcTopic";


    import SqlModule
    from "./pages/sql/SqlModule";

import SqlTopic
    from "./pages/sql/SqlTopic";

    import PostgresqlModule
    from "./pages/postgresql/PostgresqlModule";

import PostgresqlTopic
    from "./pages/postgresql/PostgresqlTopic";

    import ServletModule
    from "./pages/servlet/ServletModule";

import ServletTopic
    from "./pages/servlet/ServletTopic";

    
import JspModule
    from "./pages/jsp/JspModule";

import JspTopic
    from "./pages/jsp/JspTopic";
    
    import SpringCoreModule
    from "./pages/springcore/SpringCoreModule";

import SpringCoreTopic
    from "./pages/springcore/SpringCoreTopic";

    import SpringBootModule
    from "./pages/springboot/SpringBootModule";

import SpringBootTopic
    from "./pages/springboot/SpringBootTopic";

    import HibernateModule
    from "./pages/hibernate/HibernateModule";

import HibernateTopic
    from "./pages/hibernate/HibernateTopic";

    import SecurityModule
    from "./pages/security/SecurityModule";

import SecurityTopic
    from "./pages/security/SecurityTopic";

    import MicroservicesModule
    from "./pages/microservices/MicroservicesModule";

import MicroservicesTopic
    from "./pages/microservices/MicroservicesTopic";

    import RedisModule
    from "./pages/redis/RedisModule";

import RedisTopic
    from "./pages/redis/RedisTopic";

    import KafkaModule
    from "./pages/kafka/KafkaModule";

import KafkaTopic
    from "./pages/kafka/KafkaTopic";


    import UnitTestingModule
    from "./pages/unittesting/UnitTestingModule";

import UnitTestingTopic
    from "./pages/unittesting/UnitTestingTopic";

    import GitMavenModule
    from "./pages/devtools/GitMavenModule";

import GitMavenTopic
    from "./pages/devtools/GitMavenTopic";

    import HtmlModule
    from "./pages/html/HtmlModule";

import HtmlTopic
    from "./pages/html/HtmlTopic";

    import CssModule
    from "./pages/css/CssModule";

import CssTopic
    from "./pages/css/CssTopic";

    import JavaScriptModule
    from "./pages/javascript/JavaScriptModule";

import JavaScriptTopic
    from "./pages/javascript/JavaScriptTopic";

    import React
    from "./pages/react/React";

import ReactModule
    from "./pages/react/ReactModule";

import ReactTopic
    from "./pages/react/ReactTopic";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* =========================
                    DEFAULT
                ========================= */}

                <Route
                    path="/"
                    element={
                        <Navigate
                            to="/login"
                            replace
                        />
                    }
                />


                {/* =========================
                    PUBLIC ROUTES
                ========================= */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* =========================
                    PROTECTED ROUTES
                ========================= */}

                <Route element={<ProtectedRoute />}>

                    {/* =========================
                        PROFESSIONAL APP LAYOUT
                    ========================= */}

                    <Route element={<AppLayout />}>


                        {/* =========================
                            DASHBOARD
                        ========================= */}

                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />


                        {/* =========================
                            DSA
                        ========================= */}

                        <Route
                            path="/modules"
                            element={<Modules />}
                        />

                        <Route
                            path="/modules/:moduleSlug"
                            element={<ModuleDetails />}
                        />

                        <Route
                            path="/questions/:questionId"
                            element={<QuestionDetails />}
                        />


                        {/* =========================
                            CORE JAVA
                        ========================= */}

                        <Route
                            path="/core-java"
                            element={<CoreJava />}
                        />

                        <Route
                            path="/core-java/:moduleSlug"
                            element={<CoreJavaModule />}
                        />

                        <Route
                            path="/core-java/:moduleSlug/:topicId"
                            element={<CoreJavaTopic />}
                        />


                        {/* =========================
                            OOPS
                        ========================= */}

                          <Route
                    path="/oops"
                    element={<Oops />}
                />

                <Route
                    path="/oops/:moduleSlug"
                    element={<OopsModule />}
                />

                <Route
                    path="/oops/:moduleSlug/:topicId"
                    element={<OopsTopic />}
                />


                        {/* =========================
                            STRINGS
                        ========================= */}

                        <Route
                            path="/strings/:moduleSlug"
                            element={<StringsModule />}
                        />

                        <Route
                            path="/strings/:moduleSlug/:topicId"
                            element={<StringTopic />}
                        />


                        {/* =========================
                            ARRAYS
                        ========================= */}

                        <Route
                            path="/arrays/:moduleSlug"
                            element={<ArraysModule />}
                        />

                        <Route
                            path="/arrays/:moduleSlug/:topicId"
                            element={<ArrayTopic />}
                        />

                    </Route>

                </Route>


                {/* =========================
    COLLECTIONS
========================= */}

<Route
    path="/collections"
    element={<CollectionsModule />}
/>

<Route
    path="/collections/:moduleSlug"
    element={<CollectionTopic />}
/>

<Route
    path="/collections/:moduleSlug/:topicId"
    element={<CollectionTopic />}
/>

{/* =========================
    EXCEPTION HANDLING
========================= */}

<Route
    path="/exception-handling"
    element={<ExceptionHandlingModule />}
/>

<Route
    path="/exception-handling/:moduleSlug"
    element={<ExceptionTopic />}
/>

<Route
    path="/exception-handling/:moduleSlug/:topicId"
    element={<ExceptionTopic />}
/>

{/* =========================
    MULTITHREADING
========================= */}

<Route
    path="/multithreading"
    element={<MultithreadingModule />}
/>

<Route
    path="/multithreading/:moduleSlug"
    element={<MultithreadingTopic />}
/>

<Route
    path="/multithreading/:moduleSlug/:topicId"
    element={<MultithreadingTopic />}
/>


{/* =========================
    JAVA 8 FEATURES
========================= */}

<Route
    path="/java8"
    element={<Java8Module />}
/>

<Route
    path="/java8/:moduleSlug"
    element={<Java8Topic />}
/>

<Route
    path="/java8/:moduleSlug/:topicId"
    element={<Java8Topic />}
/>

{/* =========================
    JDBC
========================= */}

<Route
    path="/jdbc"
    element={<JdbcModule />}
/>

<Route
    path="/jdbc/:moduleSlug"
    element={<JdbcTopic />}
/>

<Route
    path="/jdbc/:moduleSlug/:topicId"
    element={<JdbcTopic />}
/>


{/* =========================
    SQL
========================= */}

<Route
    path="/sql"
    element={<SqlModule />}
/>

<Route
    path="/sql/:moduleSlug"
    element={<SqlTopic />}
/>

<Route
    path="/sql/:moduleSlug/:topicId"
    element={<SqlTopic />}
/>

{/* =========================
    POSTGRESQL
========================= */}

<Route
    path="/postgresql"
    element={<PostgresqlModule />}
/>

<Route
    path="/postgresql/:moduleSlug"
    element={<PostgresqlTopic />}
/>

<Route
    path="/postgresql/:moduleSlug/:topicId"
    element={<PostgresqlTopic />}
/>

{/* SERVLET */}

<Route
    path="/servlet"
    element={<ServletModule />}
/>

<Route
    path="/servlet/:moduleSlug"
    element={<ServletTopic />}
/>

<Route
    path="/servlet/:moduleSlug/:topicId"
    element={<ServletTopic />}
/>

<Route
    path="/jsp"
    element={<JspModule />}
/>

<Route
    path="/jsp/:moduleSlug"
    element={<JspTopic />}
/>

<Route
    path="/jsp/:moduleSlug/:topicId"
    element={<JspTopic />}
/>

<Route
    path="/spring-core"
    element={<SpringCoreModule />}
/>

<Route
    path="/spring-core/:moduleSlug"
    element={<SpringCoreTopic />}
/>

<Route
    path="/spring-core/:moduleSlug/:topicId"
    element={<SpringCoreTopic />}
/>

<Route
    path="/spring-boot"
    element={<SpringBootModule />}
/>

<Route
    path="/spring-boot/:moduleSlug"
    element={<SpringBootTopic />}
/>

<Route
    path="/spring-boot/:moduleSlug/:topicId"
    element={<SpringBootTopic />}
/>

<Route
    path="/hibernate"
    element={<HibernateModule />}
/>

<Route
    path="/hibernate/:moduleSlug"
    element={<HibernateTopic />}
/>

<Route
    path="/hibernate/:moduleSlug/:topicId"
    element={<HibernateTopic />}
/>

<Route
    path="/security"
    element={<SecurityModule />}
/>

<Route
    path="/security/:moduleSlug"
    element={<SecurityTopic />}
/>

<Route
    path="/security/:moduleSlug/:topicId"
    element={<SecurityTopic />}
/>

<Route
    path="/microservices"
    element={<MicroservicesModule />}
/>

<Route
    path="/microservices/:moduleSlug"
    element={<MicroservicesTopic />}
/>

<Route
    path="/microservices/:moduleSlug/:topicId"
    element={<MicroservicesTopic />}
/>


<Route
    path="/redis"
    element={<RedisModule />}
/>

<Route
    path="/redis/:moduleSlug"
    element={<RedisTopic />}
/>

<Route
    path="/redis/:moduleSlug/:topicId"
    element={<RedisTopic />}
/>

<Route
    path="/kafka"
    element={<KafkaModule />}
/>

<Route
    path="/kafka/:moduleSlug"
    element={<KafkaTopic />}
/>

<Route
    path="/kafka/:moduleSlug/:topicId"
    element={<KafkaTopic />}
/>

<Route
    path="/unit-testing"
    element={<UnitTestingModule />}
/>

<Route
    path="/unit-testing/:moduleSlug"
    element={<UnitTestingTopic />}
/>

<Route
    path="/unit-testing/:moduleSlug/:topicId"
    element={<UnitTestingTopic />}
/>

<Route
    path="/git-maven"
    element={<GitMavenModule />}
/>

<Route
    path="/git-maven/:moduleSlug"
    element={<GitMavenTopic />}
/>

<Route
    path="/git-maven/:moduleSlug/:topicId"
    element={<GitMavenTopic />}
/>


<Route
    path="/html"
    element={<HtmlModule />}
/>

<Route
    path="/html/:moduleSlug"
    element={<HtmlTopic />}
/>

<Route
    path="/html/:moduleSlug/:topicId"
    element={<HtmlTopic />}
/>

<Route
    path="/css"
    element={<CssModule />}
/>

<Route
    path="/css/:moduleSlug"
    element={<CssTopic />}
/>

<Route
    path="/css/:moduleSlug/:topicId"
    element={<CssTopic />}
/>


<Route
    path="/javascript"
    element={<JavaScriptModule />}
/>

<Route
    path="/javascript/:moduleSlug"
    element={<JavaScriptTopic />}
/>

<Route
    path="/javascript/:moduleSlug/:topicId"
    element={<JavaScriptTopic />}
/>


<Route
    path="/react"
    element={<React />}
/>

<Route
    path="/react/:moduleSlug"
    element={<ReactModule />}
/>

<Route
    path="/react/:moduleSlug/:topicId"
    element={<ReactTopic />}
/>
                {/* =========================
                    UNKNOWN URL
                ========================= */}

                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/login"
                            replace
                        />
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;