import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


function Java8Module() {

    const modules = useSelector(
        (state) => state.java8.modules
    );


    return (

        <div>

            <h1>
                Java 8 Features
            </h1>

            <p>
                Learn modern Java programming including
                Lambda, Stream API, Optional and Functional Interfaces.
            </p>


            <div className="module-grid">

                {
                    modules.map((module) => (

                        <Link

                            key={module.id}

                            to={`/java8/${module.slug}`}

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


export default Java8Module;