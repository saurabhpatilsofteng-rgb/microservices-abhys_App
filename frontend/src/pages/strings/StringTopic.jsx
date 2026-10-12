import { useParams, Link } from "react-router-dom";

import {
    stringTopics
} from "../../data/strings/stringTopics";


function StringTopic() {

    const {
        moduleSlug,
        topicId
    } = useParams();


    const topic = stringTopics.find(

        item =>

            item.module === moduleSlug &&

            item.id === Number(topicId)

    );


    if (!topic) {

        return (
            <h1>
                String Topic Not Found
            </h1>
        );

    }


    return (

        <div style={{ padding: "30px" }}>

            <Link to="/dashboard">
                ← Dashboard
            </Link>


            <h1>
                {topic.title}
            </h1>


            <p>
                Difficulty: {topic.difficulty}
            </p>


            <hr />


            <h2>
                Concept
            </h2>

            <p>
                {topic.concept}
            </p>


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


            <h2>
                Java Code
            </h2>

            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "20px",
                    border: "1px solid black",
                    overflowX: "auto"
                }}
            >
                <code>
                    {topic.code}
                </code>
            </pre>


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


            <h2>
                Interview Questions
            </h2>

            <ol>

                {topic.interviewQuestions?.map(
                    (question, index) => (

                        <li key={index}>
                            {question}
                        </li>

                    )
                )}

            </ol>

        </div>

    );

}


export default StringTopic;