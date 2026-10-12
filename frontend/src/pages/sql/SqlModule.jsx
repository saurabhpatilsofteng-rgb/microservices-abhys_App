import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


function SqlModule() {

    const modules = useSelector(
        (state) => state.sql.modules
    );


    return (

        <div>

            <h1>
                SQL
            </h1>

            <p>
                Learn SQL from basic database concepts
                to joins, transactions, indexes and
                advanced SQL.
            </p>


            <div className="module-grid">

                {
                    modules.map((module) => (

                        <Link

                            key={module.id}

                            to={`/sql/${module.slug}`}

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


export default SqlModule;