import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MicroservicesModule() {

    const modules = useSelector(
        (state) => state.microservices?.modules || []
    );

    return (
        <div className="learning-page">

            <div className="page-header">

                <span className="page-label">
                    SPRING CLOUD
                </span>

                <h1>
                    Microservices
                </h1>

                <p>
                    Learn Spring Cloud microservices,
                    service discovery, API Gateway,
                    Feign, Docker, Kafka, Redis,
                    resilience and distributed systems.
                </p>

            </div>


            <div className="module-grid">

                {modules.map((module) => (

                    <Link
                        key={module.id}
                        to={`/microservices/${module.slug}`}
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

export default MicroservicesModule;