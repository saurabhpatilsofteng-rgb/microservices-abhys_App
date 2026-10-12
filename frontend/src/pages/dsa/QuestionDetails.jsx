
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import ArrayVisualizer
    from "../../visualizations/ArrayVisualizer";

import StringVisualizer
    from "../../visualizations/StringVisualizer";


    
import TwoPointerVisualizer
    from "../../visualizations/twoPointerVisualizer";

      
import SlidingWindowVisualizer
    from "../../visualizations/SlidingWindowVisualizer";


function QuestionDetails() {

    const { questionId } = useParams();


    // =========================================
    // GET QUESTIONS
    // =========================================

    const questions = useSelector(
        state => state.questions.questions
    );


    // =========================================
    // FIND QUESTION
    // =========================================

    const question = questions.find(
        q => q.id === Number(questionId)
    );


    // =========================================
    // QUESTION NOT FOUND
    // =========================================

    if (!question) {

        return (

            <div
                style={{
                    padding: "20px"
                }}
            >

                <h1>
                    Question Not Found
                </h1>

                <Link to="/modules">

                    ← Back to Modules

                </Link>

            </div>

        );
    }


    // =========================================
    // VISUALIZER
    // =========================================

    const renderVisualizer = () => {

        switch (question.module) {

            case "arrays":

                return (
                    <ArrayVisualizer
                        question={question}
                    />
                );


            case "strings":

                return (
                    <StringVisualizer
                        question={question}
                    />
                );

                
            case "twoPointer":

                return (
                    <TwoPointerVisualizer
                        question={question}
                    />
                );



case "sliding-window":

                return (
                    <SlidingWindowVisualizer
                        question={question}
                    />
                );

                case "hashing":

                return (
                    <SlidingWindowVisualizer
                        question={question}
                    />
                );
                case "hashmap-hashset":

                return (
                    <SlidingWindowVisualizer
                        question={question}
                    />
                );
                case "heap-priority-queue":

                return (
                    <SlidingWindowVisualizer
                        question={question}
                    />
                );
                case "linked-list":

                return (
                    <SlidingWindowVisualizer
                        question={question}
                    />
                );

                
                 case "queue":

                return (
                    <SlidingWindowVisualizer
                        question={question}
                    />
                );


            default:

                return (

                    <div
                        style={{
                            border: "1px solid black",
                            padding: "20px"
                        }}
                    >

                        <p>
                            Visualization is not available
                            for this module yet.
                        </p>

                    </div>

                );
        }
    };


    // =========================================
    // PAGE
    // =========================================

    return (

        <div
            style={{
                padding: "20px",
                maxWidth: "1200px",
                margin: "0 auto"
            }}
        >

            {/* =====================================
                BACK
            ===================================== */}

            <Link
                to={`/modules/${question.module}`}
                style={{
                    textDecoration: "none"
                }}
            >

                ← Back to Questions

            </Link>


            {/* =====================================
                TITLE
            ===================================== */}

            <h1>
                {question.title}
            </h1>


            {/* =====================================
                DESCRIPTION
            ===================================== */}

            <p>
                {question.description}
            </p>


            {/* =====================================
                DIFFICULTY
            ===================================== */}

            <h2>
                Difficulty
            </h2>

            <p>
                {question.difficulty}
            </p>


            {/* =====================================
                EXAMPLE
            ===================================== */}

            <h2>
                Example
            </h2>

            <div
                style={{
                    border: "1px solid black",
                    padding: "15px"
                }}
            >

                <p>

                    <strong>
                        Input:
                    </strong>{" "}

                    {question.example?.input}

                </p>


                <p>

                    <strong>
                        Output:
                    </strong>{" "}

                    {question.example?.output}

                </p>

            </div>


            {/* =====================================
                EXPLANATION
            ===================================== */}

            <h2>
                Explanation
            </h2>

            <pre
                style={{
                    whiteSpace: "pre-wrap",
                    border: "1px solid black",
                    padding: "15px"
                }}
            >

                {question.explanation}

            </pre>


            {/* =====================================
                JAVA CODE
            ===================================== */}

            <h2>
                Java Solution
            </h2>

            <pre
                style={{
                    overflowX: "auto",
                    border: "1px solid black",
                    padding: "15px"
                }}
            >

                <code>
                    {question.javaCode}
                </code>

            </pre>


            {/* =====================================
                PSEUDOCODE
            ===================================== */}

            <h2>
                Pseudocode
            </h2>

            <pre
                style={{
                    whiteSpace: "pre-wrap",
                    border: "1px solid black",
                    padding: "15px"
                }}
            >

                {question.pseudoCode}

            </pre>


            {/* =====================================
                COMPLEXITY
            ===================================== */}

            <h2>
                Complexity
            </h2>

            <div
                style={{
                    border: "1px solid black",
                    padding: "15px"
                }}
            >

                <p>

                    <strong>
                        Time Complexity:
                    </strong>{" "}

                    {question.timeComplexity}

                </p>


                <p>

                    <strong>
                        Space Complexity:
                    </strong>{" "}

                    {question.spaceComplexity}

                </p>

            </div>


            {/* =====================================
                VISUALIZATION
            ===================================== */}

            <h2>
                Visualization
            </h2>


            {renderVisualizer()}

        </div>

    );
}

export default QuestionDetails;

