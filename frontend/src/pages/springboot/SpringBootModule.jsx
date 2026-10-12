import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function SpringBootModule() {

    const modules = useSelector(
        (state) => state.springBoot?.modules || []
    );


    return (

        <div className="learning-page">

            <div className="page-header">

                <span className="page-label">
                    SPRING FRAMEWORK
                </span>

                <h1>
                    Spring Boot
                </h1>

                <p>
                    Learn Spring Boot from fundamentals
                    to production-ready application development.
                </p>

            </div>


            <div className="module-grid">

                {modules.map((module) => (

                    <Link

                        key={module.id}

                        to={`/spring-boot/${module.slug}`}

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


export default SpringBootModule;