import { useParams, Link } from "react-router-dom";

import { postgresqlTopics }
    from "../../data/postgresql/postgresqlTopics";


function PostgresqlTopic() {

    const {
        moduleSlug,
        topicId
    } = useParams();


    // ==========================================
    // FIND TOPIC
    // ==========================================

    const topic = postgresqlTopics.find(

        item =>
            item.module === moduleSlug &&
            item.id === Number(topicId)

    );


    // ==========================================
    // TOPIC NOT FOUND
    // ==========================================

    if (!topic) {

        return (

            <div style={{ padding: "30px" }}>

                <Link to="/dashboard">
                    ← Dashboard
                </Link>

                <h1>
                    PostgreSQL Topic Not Found
                </h1>

                <p>
                    Module: {moduleSlug}
                </p>

                <p>
                    Topic ID: {topicId}
                </p>

            </div>

        );

    }


    return (

        <div style={{ padding: "30px" }}>


            {/* ==================================
                BACK
            ================================== */}

            <Link
                to={`/postgresql/${moduleSlug}`}
            >
                ← Back to Topics
            </Link>


            {/* ==================================
                TITLE
            ================================== */}

            <h1>
                {topic.title}
            </h1>


            <p>
                <strong>
                    Difficulty:
                </strong>{" "}

                {topic.difficulty}
            </p>


            <hr />


            {/* ==================================
                CONCEPT
            ================================== */}

            {topic.concept && (

                <>

                    <h2>
                        Concept
                    </h2>

                    <p>
                        {topic.concept}
                    </p>

                </>

            )}


            {/* ==================================
                EXPLANATION
            ================================== */}

            {topic.explanation && (

                <>

                    <h2>
                        Explanation
                    </h2>

                    <pre
                        style={{
                            whiteSpace: "pre-wrap",
                            fontFamily: "inherit"
                        }}
                    >
                        {topic.explanation}
                    </pre>

                </>

            )}


            {/* ==================================
                WHY IMPORTANT
            ================================== */}

            {topic.whyImportant && (

                <>

                    <h2>
                        Why is this important?
                    </h2>

                    <pre
                        style={{
                            whiteSpace: "pre-wrap",
                            fontFamily: "inherit"
                        }}
                    >
                        {topic.whyImportant}
                    </pre>

                </>

            )}


            {/* ==================================
                SYNTAX
            ================================== */}

            {topic.syntax && (

                <>

                    <h2>
                        Syntax
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
                            {topic.syntax}
                        </code>
                    </pre>

                </>

            )}


            {/* ==================================
                SQL / POSTGRESQL CODE
            ================================== */}

            {topic.code && (

                <>

                    <h2>
                        PostgreSQL Code
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

                </>

            )}


            {/* ==================================
                OUTPUT
            ================================== */}

            {topic.output && (

                <>

                    <h2>
                        Output
                    </h2>

                    <pre
                        style={{
                            background: "#f5f5f5",
                            padding: "15px",
                            border: "1px solid black",
                            overflowX: "auto"
                        }}
                    >
                        {topic.output}
                    </pre>

                </>

            )}


            {/* ==================================
                LINE BY LINE
            ================================== */}

            {topic.lineByLine?.length > 0 && (

                <>

                    <h2>
                        Line-by-Line Explanation
                    </h2>


                    {topic.lineByLine.map(

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

                </>

            )}


            {/* ==================================
                REAL WORLD USE
            ================================== */}

            {topic.realWorldUse && (

                <>

                    <h2>
                        Real World Use
                    </h2>

                    <pre
                        style={{
                            whiteSpace: "pre-wrap",
                            fontFamily: "inherit"
                        }}
                    >
                        {topic.realWorldUse}
                    </pre>

                </>

            )}


            {/* ==================================
                IMPORTANT POINTS
            ================================== */}

            {topic.keyPoints?.length > 0 && (

                <>

                    <h2>
                        Key Points
                    </h2>

                    <ul>

                        {topic.keyPoints.map(

                            (point, index) => (

                                <li
                                    key={index}
                                    style={{
                                        marginBottom: "8px"
                                    }}
                                >
                                    {point}
                                </li>

                            )

                        )}

                    </ul>

                </>

            )}


            {/* ==================================
                INTERVIEW QUESTIONS
            ================================== */}

            {topic.interviewQuestions?.length > 0 && (

                <>

                    <h2>
                        Interview Questions
                    </h2>

                    <ol>

                        {topic.interviewQuestions.map(

                            (question, index) => (

                                <li
                                    key={index}
                                    style={{
                                        marginBottom: "8px"
                                    }}
                                >
                                    {question}
                                </li>

                            )

                        )}

                    </ol>

                </>

            )}


            {/* ==================================
                COMMON MISTAKES
            ================================== */}

            {topic.commonMistakes?.length > 0 && (

                <>

                    <h2>
                        Common Mistakes
                    </h2>

                    <ul>

                        {topic.commonMistakes.map(

                            (mistake, index) => (

                                <li
                                    key={index}
                                    style={{
                                        marginBottom: "8px"
                                    }}
                                >
                                    {mistake}
                                </li>

                            )

                        )}

                    </ul>

                </>

            )}

        </div>

    );

}


export default PostgresqlTopic;