import { useParams, Link } from "react-router-dom";

import { javaBasicsTopics } from "../../data/corejava/javaBasics";
import { variablesDataTypesTopics } from "../../data/corejava/variablesDataTypes";

import { operatorsTopics } from "../../data/corejava/operators";
import { methodsTopics } from "../../data/corejava/methods";
import { controlStatementsTopics } from "../../data/corejava/controlStatements";
import { genericsTopics } from "../../data/corejava/generics";
import { jvmTopics } from "../../data/corejava/jvm";


function CoreJavaTopic() {

    const {
        moduleSlug,
        topicId
    } = useParams();


    let topics = [];


    if (moduleSlug === "java-basics") {

        topics = javaBasicsTopics;

    }

     if (moduleSlug === "variables-data-types") {

    topics = variablesDataTypesTopics;

}

if (moduleSlug === "operators") {

    topics = operatorsTopics;

}

if (moduleSlug === "methods") {

    topics = methodsTopics;

}

if (moduleSlug === "control-statements") {

    topics = controlStatementsTopics;

}

if (moduleSlug === "generics") {

    topics = genericsTopics;

}

if (moduleSlug === "jvm") {

    topics = jvmTopics;

}


    const topic = topics.find(
        item => item.id === Number(topicId)
    );


    if (!topic) {

        return (
            <h1>
                Topic Not Found
            </h1>
        );

    }


    return (

        <div style={{ padding: "30px" }}>

            <Link
                to={`/core-java/${moduleSlug}`}
            >
                ← Back to Topics
            </Link>


            <h1>
                {topic.title}
            </h1>


            <p>
                Difficulty: {topic.difficulty}
            </p>


            {/* CONCEPT */}

            <section>

                <h2>
                    Concept
                </h2>

                <p>
                    {topic.concept}
                </p>

            </section>


            {/* EXPLANATION */}

            <section>

                <h2>
                    Explanation
                </h2>

                <pre
                    style={{
                        whiteSpace: "pre-wrap"
                    }}
                >
                    {topic.explanation}
                </pre>

            </section>


            {/* WHY IMPORTANT */}

            <section>

                <h2>
                    Why is this important?
                </h2>

                <pre
                    style={{
                        whiteSpace: "pre-wrap"
                    }}
                >
                    {topic.whyImportant}
                </pre>

            </section>


            {/* CODE */}

            <section>

                <h2>
                    Java Code
                </h2>

                <pre
                    style={{
                        background: "#f5f5f5",
                        padding: "20px",
                        overflowX: "auto",
                        border: "1px solid black"
                    }}
                >
                    <code>
                        {topic.code}
                    </code>
                </pre>

            </section>


            {/* OUTPUT */}

            <section>

                <h2>
                    Output
                </h2>

                <pre
                    style={{
                        background: "#f5f5f5",
                        padding: "15px",
                        border: "1px solid black"
                    }}
                >
                    {topic.output}
                </pre>

            </section>


            {/* LINE BY LINE */}

            <section>

                <h2>
                    Line-by-Line Explanation
                </h2>

                {topic.lineByLine?.map(
                    (item, index) => (

                        <div
                            key={index}
                            style={{
                                border: "1px solid black",
                                padding: "15px",
                                marginBottom: "10px"
                            }}
                        >

                            <strong>
                                {item.line}
                            </strong>

                            <p>
                                {item.explanation}
                            </p>

                        </div>

                    )
                )}

            </section>


            {/* INTERVIEW */}

            <section>

                <h2>
                    Interview Questions
                </h2>

                <ul>

                    {topic.interviewQuestions?.map(
                        (question, index) => (

                            <li key={index}>
                                {question}
                            </li>

                        )
                    )}

                </ul>

            </section>

        </div>

    );
}

export default CoreJavaTopic;