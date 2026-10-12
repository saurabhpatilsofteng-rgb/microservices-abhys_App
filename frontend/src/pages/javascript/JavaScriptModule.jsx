import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function JavaScriptModule() {

    const modules = useSelector(
        (state) => state.javascript?.modules || []
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
                    WEB DEVELOPMENT
                </span>

                <h1>
                    JavaScript
                </h1>

                <p>
                    Master JavaScript from fundamentals
                    to asynchronous programming,
                    ES6+, DOM, closures and interview concepts.
                </p>

            </div>


            <div className="module-grid">

                {modules.map((module) => (

                    <Link
                        key={module.id}
                        to={`/javascript/${module.slug}`}
                        className="module-card"
                    >

                        <div className="module-number">
                            {String(module.id).padStart(2, "0")}
                        </div>


                        <div className="module-category">
                            {module.category}
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


export default JavaScriptModule;