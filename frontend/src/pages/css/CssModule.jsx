import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function CssModule() {

    const modules = useSelector(
        (state) => state.css?.modules || []
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
                    CSS
                </h1>

                <p>
                    Learn CSS from fundamentals and selectors
                    to Flexbox, Grid, responsive design,
                    animations and interview preparation.
                </p>

            </div>


            <div className="module-grid">

                {modules.map((module) => (

                    <Link
                        key={module.id}
                        to={`/css/${module.slug}`}
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


export default CssModule;