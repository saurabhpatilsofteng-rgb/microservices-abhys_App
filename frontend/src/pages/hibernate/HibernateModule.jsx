import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


function HibernateModule() {

    const modules = useSelector(
        (state) => state.hibernate?.modules || []
    );


    return (

        <div className="learning-page">

            <div className="page-header">

                <span className="page-label">
                    JAVA PERSISTENCE
                </span>

                <h1>
                    Hibernate / JPA
                </h1>

                <p>
                    Learn ORM, JPA, Hibernate mappings,
                    relationships, transactions, caching
                    and database performance.
                </p>

            </div>


            <div className="module-grid">

                {modules.map((module) => (

                    <Link

                        key={module.id}

                        to={`/hibernate/${module.slug}`}

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


export default HibernateModule;