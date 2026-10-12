
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

function ModuleDetails() {

    const { moduleSlug } = useParams();


    // =========================================
    // GET MODULES FROM REDUX
    // =========================================

    const modules = useSelector(
        state => state.modules.modules
    );


    // =========================================
    // GET QUESTIONS FROM REDUX
    // =========================================

    const questions = useSelector(
        state => state.questions.questions
    );


    // =========================================
    // FIND SELECTED MODULE
    // =========================================

    const selectedModule = modules.find(
        module => module.slug === moduleSlug
    );


    // =========================================
    // FILTER QUESTIONS
    // =========================================

    const filteredQuestions = questions.filter(
        question => question.module === moduleSlug
    );


    // =========================================
    // MODULE NOT FOUND
    // =========================================

    if (!selectedModule) {

        return (

            <div
                style={{
                    padding: "20px"
                }}
            >

                <h1>
                    Module Not Found
                </h1>

                <Link to="/modules">
                    ← Back to Modules
                </Link>

            </div>

        );
    }


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

            <Link to="/modules">

                ← Back to Modules

            </Link>


            {/* =====================================
                MODULE INFORMATION
            ===================================== */}

            <div
                style={{
                    marginTop: "20px",
                    border: "1px solid black",
                    padding: "20px"
                }}
            >

                <div
                    style={{
                        fontSize: "50px"
                    }}
                >
                    {selectedModule.icon}
                </div>


                <h1>
                    {selectedModule.name}
                </h1>


                <p>
                    {selectedModule.description}
                </p>


                <p>
                    <strong>
                        Difficulty:
                    </strong>{" "}
                    {selectedModule.difficulty}
                </p>


                <p>
                    <strong>
                        Total Questions:
                    </strong>{" "}
                    {filteredQuestions.length}
                </p>

            </div>


            {/* =====================================
                QUESTIONS
            ===================================== */}

            <h2
                style={{
                    marginTop: "30px"
                }}
            >
                Questions
            </h2>


            {/* =====================================
                NO QUESTIONS
            ===================================== */}

            {filteredQuestions.length === 0 && (

                <div
                    style={{
                        border: "1px solid black",
                        padding: "20px"
                    }}
                >

                    <p>
                        No questions available for this module.
                    </p>

                </div>

            )}


            {/* =====================================
                QUESTION LIST
            ===================================== */}

            {filteredQuestions.map(question => (

                <div
                    key={question.id}
                    style={{
                        border: "1px solid black",
                        padding: "20px",
                        margin: "15px 0"
                    }}
                >

                    {/* QUESTION TITLE */}

                    <h2>
                        {question.title}
                    </h2>


                    {/* DESCRIPTION */}

                    <p>
                        {question.description}
                    </p>


                    {/* DIFFICULTY */}

                    <p>
                        <strong>
                            Difficulty:
                        </strong>{" "}
                        {question.difficulty}
                    </p>


                    {/* COMPLEXITY */}

                    <p>
                        <strong>
                            Time:
                        </strong>{" "}
                        {question.timeComplexity}
                    </p>


                    <p>
                        <strong>
                            Space:
                        </strong>{" "}
                        {question.spaceComplexity}
                    </p>


                    {/* SOLVE */}

                    <Link
                        to={`/questions/${question.id}`}
                    >
                        Solve Question →
                    </Link>

                </div>

            ))}

        </div>

    );
}

export default ModuleDetails;

