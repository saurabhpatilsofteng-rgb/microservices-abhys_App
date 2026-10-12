import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function GitMavenModule() {

    const modules = useSelector(
        (state) => state.gitMaven?.modules || []
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
                    DEVELOPMENT TOOLS
                </span>

                <h1>
                    Git & Maven
                </h1>

                <p>
                    Master Git version control and Apache Maven
                    for professional Java development.
                </p>

            </div>


            <div className="module-grid">

                {modules.map((module) => (

                    <Link
                        key={module.id}
                        to={`/git-maven/${module.slug}`}
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


export default GitMavenModule;