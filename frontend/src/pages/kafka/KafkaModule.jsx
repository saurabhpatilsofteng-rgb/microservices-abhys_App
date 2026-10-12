import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function KafkaModule() {

    const modules = useSelector(
        (state) => state.kafka?.modules || []
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
                    EVENT STREAMING
                </span>

                <h1>
                    Apache Kafka
                </h1>

                <p>
                    Learn Kafka from fundamentals to
                    Spring Boot integration and
                    microservices architecture.
                </p>

            </div>


            <div className="module-grid">

                {modules.map((module) => (

                    <Link
                        key={module.id}
                        to={`/kafka/${module.slug}`}
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


export default KafkaModule;