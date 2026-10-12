import { useParams, Link } from "react-router-dom";

import { javaBasicsTopics } from "../../data/corejava/javaBasics";
import { variablesDataTypesTopics } from "../../data/corejava/variablesDataTypes";
import { operatorsTopics } from "../../data/corejava/operators";
import { methodsTopics } from "../../data/corejava/methods";
import { controlStatementsTopics } from "../../data/corejava/controlStatements";
import { genericsTopics } from "../../data/corejava/generics";
import { jvmTopics } from "../../data/corejava/jvm";


function CoreJavaModule() {

    const { moduleSlug } = useParams();


    const modules = {

        "java-basics": javaBasicsTopics,

        "variables-data-types": variablesDataTypesTopics,

        "operators": operatorsTopics,

        "methods": methodsTopics,

        "control-statements": controlStatementsTopics,

        "generics": genericsTopics,

        "jvm": jvmTopics

    };


    const topics = modules[moduleSlug] || [];


    return (

        <div style={{ padding: "30px" }}>

            <Link to="/dashboard">
                ← Back to Dashboard
            </Link>


            <h1>
                {moduleSlug}
            </h1>


            <h2>
                Topics
            </h2>


            {topics.length === 0 && (

                <p>
                    No topics found for this module.
                </p>

            )}


            {topics.map((topic) => (

                <div
                    key={topic.id}
                    style={{
                        border: "1px solid black",
                        padding: "15px",
                        marginBottom: "10px"
                    }}
                >

                    <h3>
                        {topic.title}
                    </h3>


                    <p>
                        {topic.concept}
                    </p>


                    <Link
                        to={`/core-java/${moduleSlug}/${topic.id}`}
                    >
                        Learn Topic →
                    </Link>

                </div>

            ))}

        </div>

    );

}


export default CoreJavaModule;