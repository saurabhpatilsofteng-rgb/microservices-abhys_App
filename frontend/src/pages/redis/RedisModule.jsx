import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function RedisModule() {

    const modules = useSelector(
        (state) => state.redis?.modules || []
    );

    return (
        <div className="learning-page">

            <Link
                to="/dashboard"
                className="back-link"
            >
                ← Back to Dashboard
            </Link>

            <div className="page-header">

                <span className="page-label">
                    DATABASE & CACHING
                </span>

                <h1>
                    Redis
                </h1>

                <p>
                    Learn Redis from fundamentals to
                    Spring Boot integration, caching,
                    Docker and microservices.
                </p>

            </div>


            <div className="module-grid">

                {modules.map((module) => (

                    <Link
                        key={module.id}
                        to={`/redis/${module.slug}`}
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

export default RedisModule;