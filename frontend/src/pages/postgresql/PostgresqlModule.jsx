import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


function PostgresqlModule() {

    const modules = useSelector(
        (state) => state.postgresql.modules
    );


    return (

        <div>

            <h1>
                PostgreSQL
            </h1>

            <p>
                Learn PostgreSQL from database basics
                to JSONB, functions, transactions and
                performance optimization.
            </p>


            <div className="module-grid">

                {
                    modules.map((module) => (

                        <Link

                            key={module.id}

                            to={`/postgresql/${module.slug}`}

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


export default PostgresqlModule;