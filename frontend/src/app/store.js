import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";

import moduleReducer from "../features/modules/moduleSlice";
import questionReducer from "../features/questions/questionSlice";
import progressReducer from "../features/progress/progressSlice";
import favoriteReducer from "../features/favorites/favoriteSlice";

import coreJavaReducer from "../features/corejava/coreJavaSlice";

import stringsReducer
    from "../features/strings/stringsSlice";

//import oopsReducer
  //  from "../features/oops/oopsSlice";

    import arraysReducer
    from "../features/arrays/arraysSlice";

    import collectionsReducer
    from "../features/collections/collectionsSlice";

    import exceptionHandlingReducer
    from "../features/exceptionhandling/exceptionHandlingSlice";

    import multithreadingReducer
    from "../features/multithreading/multithreadingSlice";

    import java8Reducer
    from "../features/java8/java8Slice";

    import jdbcReducer
    from "../features/jdbc/jdbcSlice";

    import sqlReducer
    from "../features/sql/sqlSlice";

    import postgresqlReducer
    from "../features/postgresql/postgresqlSlice";

    import servletReducer
    from "../features/servlet/servletSlice";

    import jspReducer
    from "../features/jsp/jspSlice";

    import springCoreReducer
    from "../features/springcore/springCoreSlice";

    import springBootReducer
    from "../features/springboot/springBootSlice";

    import hibernateReducer
    from "../features/hibernate/hibernateSlice";

    import securityReducer
    from "../features/security/securitySlice";
    

    import microservicesReducer
    from "../features/microservices/microservicesSlice";

    import redisReducer
    from "../features/redis/redisSlice";

    import kafkaReducer
    from "../features/kafka/kafkaSlice";

    import unitTestingReducer
    from "../features/unittesting/unitTestingSlice";

    import gitMavenReducer
    from "../features/devtools/gitMavenSlice";

    import htmlReducer
    from "../features/html/htmlSlice";
    import cssReducer
    from "../features/css/cssSlice";

    import javascriptReducer
    from "../features/javascript/javascriptSlice";

    import reactReducer
    from "../features/react/reactSlice";

    import oopsReducer
    from "../features/oops/oopsSlice";

   


export const store = configureStore({

    reducer: {

      //    oops: oopsReducer,


        auth: authReducer,

        modules: moduleReducer,

        questions: questionReducer,

        progress: progressReducer,

        favorites: favoriteReducer,

        coreJava: coreJavaReducer,

        oops: oopsReducer,

        strings: stringsReducer,
        arrays: arraysReducer,
        collections: collectionsReducer,
        exceptionHandling: exceptionHandlingReducer,
        multithreading: multithreadingReducer,
        java8: java8Reducer,
        jdbc: jdbcReducer,
        sql: sqlReducer,
        postgresql: postgresqlReducer,
        servlet: servletReducer,
        jsp: jspReducer,
        springCore: springCoreReducer,
        springBoot: springBootReducer,
        hibernate: hibernateReducer,
        security: securityReducer,
        microservices: microservicesReducer,
        redis: redisReducer,
        kafka: kafkaReducer,
        unitTesting: unitTestingReducer,
        gitMaven: gitMavenReducer,
        html: htmlReducer,
        css: cssReducer,
        javascript: javascriptReducer,
        react: reactReducer

    }

});