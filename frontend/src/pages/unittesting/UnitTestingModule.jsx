import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function UnitTestingModule() {

    const modules = useSelector(
        (state) => state.unitTesting?.modules || []
    );


    return (

        <div className="learning-page">

            <Link
                to="/dashboard"
                className="back-link"
            >
                ← Back to Dashboard
            </Link>


            <div className="page-header">

                <span className="page-label">
                    JAVA TESTING
                </span>

                <h1>
                    Unit Testing
                </h1>

                <p>
                    Learn JUnit 5, Mockito and Spring Boot
                    testing from fundamentals to
                    real-world testing practices.
                </p>

            </div>


            <div className="module-grid">

                {modules.map((module) => (

                    <Link
                        key={module.id}
                        to={`/unit-testing/${module.slug}`}
                        className="module-card"
                    >

                        <div className="module-number">
                            {String(module.id).padStart(2, "0")}
                        </div>


                        <h2>
                            {module.title}
                        </h2>


                        <p>
                            {module.description}
                        </p>


                        <div className="module-footer">

                            <span>
                                {module.topics.length} Topics
                            </span>

                            <span>
                                →
                            </span>

                        </div>

                    </Link>

                ))}

            </div>

        </div>

    );

}


export default UnitTestingModule;