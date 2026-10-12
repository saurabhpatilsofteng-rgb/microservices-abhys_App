import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


function JdbcModule() {

    const modules = useSelector(
        (state) => state.jdbc.modules
    );


    return (

        <div>

            <h1>
                JDBC
            </h1>

            <p>
                Learn Java Database Connectivity from
                database connection to transactions and
                connection pooling.
            </p>


            <div className="module-grid">

                {
                    modules.map((module) => (

                        <Link

                            key={module.id}

                            to={`/jdbc/${module.slug}`}

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


export default JdbcModule;