import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


function SecurityModule() {

    const modules = useSelector(
        (state) => state.security?.modules || []
    );


    return (

        <div className="learning-page">

            <div className="page-header">

                <span className="page-label">
                    SECURITY
                </span>

                <h1>
                    Spring Security + JWT
                </h1>

                <p>
                    Master authentication, authorization,
                    JWT, security filters, roles, CORS
                    and microservice security.
                </p>

            </div>


            <div className="module-grid">

                {modules.map((module) => (

                    <Link
                        key={module.id}
                        to={`/security/${module.slug}`}
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


export default SecurityModule;