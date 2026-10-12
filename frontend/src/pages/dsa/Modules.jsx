
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Modules() {

    const modules = useSelector(
        state => state.modules.modules
    );

    return (

        <div
            style={{
                padding: "20px",
                maxWidth: "1200px",
                margin: "0 auto"
            }}
        >

            {/* =========================================
                PAGE TITLE
            ========================================= */}

            <h1>
                DSA Modules
            </h1>

            <p>
                Select a module and start learning.
            </p>


            {/* =========================================
                MODULE LIST
            ========================================= */}

            <div>

                {modules.map(module => (

                    <div
                        key={module.id}
                        style={{
                            border: "1px solid black",
                            padding: "20px",
                            margin: "15px 0"
                        }}
                    >

                        {/* ICON */}

                        <div
                            style={{
                                fontSize: "40px"
                            }}
                        >
                            {module.icon}
                        </div>


                        {/* MODULE NAME */}

                        <h2>
                            {module.name}
                        </h2>


                        {/* DESCRIPTION */}

                        <p>
                            {module.description}
                        </p>


                        {/* DIFFICULTY */}

                        <p>
                            <strong>
                                Difficulty:
                            </strong>{" "}
                            {module.difficulty}
                        </p>


                        {/* QUESTIONS */}

                        <p>
                            <strong>
                                Questions:
                            </strong>{" "}
                            {module.totalQuestions}
                        </p>


                        {/* START BUTTON */}

                        <Link
                            to={`/modules/${module.slug}`}
                        >
                            Start Learning →
                        </Link>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Modules;

