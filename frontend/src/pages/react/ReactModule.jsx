import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ReactModule() {

    const { moduleSlug } = useParams();

    const modules = useSelector(
        (state) => state.react.modules
    );

    console.log("REACT MODULE SLUG:", moduleSlug);
    console.log("ALL REACT MODULES:", modules);

    const selectedModule = modules.find(
        (module) => String(module.id) === String(moduleSlug)
    );

    console.log("SELECTED REACT MODULE:", selectedModule);

    if (!selectedModule) {

        return (

            <div style={{ padding: "30px" }}>

                <h2>Module not found</h2>

                <p>
                    Module URL: {moduleSlug}
                </p>

                <Link to="/react">
                    ← Back to React
                </Link>

            </div>

        );
    }

    return (

        <div style={{ padding: "30px" }}>

            <Link to="/react">
                ← Back to React
            </Link>

            <h1>
                {selectedModule.title}
            </h1>

            <p>
                {selectedModule.description}
            </p>

            <h2>Topics</h2>

            {!selectedModule.topics ||
            selectedModule.topics.length === 0 ? (

                <h3>No topics found</h3>

            ) : (

                selectedModule.topics.map((topic) => (

                    <div
                        key={topic.id}
                        style={{
                            border: "1px solid black",
                            padding: "15px",
                            marginBottom: "10px"
                        }}
                    >

                        <h3>
                            {topic.title}
                        </h3>

                        <p>
                            {topic.concept}
                        </p>

                        <Link
                            to={`/react/${moduleSlug}/${topic.id}`}
                        >
                            Learn Topic →
                        </Link>

                    </div>

                ))

            )}

        </div>

    );
}

export default ReactModule;