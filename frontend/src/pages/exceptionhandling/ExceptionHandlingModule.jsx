import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


function ExceptionHandlingModule() {

    const modules = useSelector(
        (state) =>
            state.exceptionHandling.modules
    );


    return (

        <div>

            <h1>
                Java Exception Handling
            </h1>

            <p>
                Learn how Java handles errors and exceptional situations.
            </p>


            <div className="module-grid">

                {
                    modules.map((module) => (

                        <Link
                            key={module.id}

                            to={`/exception-handling/${module.slug}`}

                            className="module-card"
                        >

                            <h2>
                                {module.title}
                            </h2>

                            <p>
                                {module.description}
                            </p>

                            <p>

                                <strong>
                                    {module.topics.length}
                                </strong>

                                {" "} Topics

                            </p>

                        </Link>

                    ))
                }

            </div>

        </div>

    );

}


export default ExceptionHandlingModule;