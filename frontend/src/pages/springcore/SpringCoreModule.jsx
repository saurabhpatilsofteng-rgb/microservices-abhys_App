import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


function SpringCoreModule() {

    const modules = useSelector(
        (state) => state.springCore.modules
    );


    return (

        <div>

            <h1>
                Spring Core
            </h1>

            <p>
                Learn Spring Framework fundamentals including
                IoC, Dependency Injection, Beans, Bean Lifecycle,
                Scopes, Autowiring and Configuration.
            </p>


            <div className="module-grid">

                {
                    modules.map((module) => (

                        <Link

                            key={module.id}

                            to={`/spring-core/${module.slug}`}

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


export default SpringCoreModule;