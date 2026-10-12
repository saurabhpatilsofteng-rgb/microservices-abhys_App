import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


function ServletModule() {

    const modules = useSelector(
        (state) => state.servlet.modules
    );


    return (

        <div>

            <h1>
                Java Servlet
            </h1>

            <p>
                Learn Java Servlet from basics to
                lifecycle, HTTP requests, sessions,
                cookies, filters and JDBC integration.
            </p>


            <div className="module-grid">

                {
                    modules.map((module) => (

                        <Link

                            key={module.id}

                            to={`/servlet/${module.slug}`}

                            className="module-card"
                        >

                            <h2>
                                {module.title}
                            </h2>

                            <p>
                                {module.description}
                            </p>

                            <strong>
                                {module.topics.length} Topics
                            </strong>

                        </Link>

                    ))
                }

            </div>

        </div>

    );

}


export default ServletModule;