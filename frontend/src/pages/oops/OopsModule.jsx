import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OopsModule() {

    const { moduleSlug } = useParams();

    const modules = useSelector(
        (state) => state.oops.modules
    );

    console.log("MODULE SLUG:", moduleSlug);
    console.log("ALL MODULES:", modules);

    const selectedModule = modules.find(
        (module) => module.id === moduleSlug
    );

    console.log("SELECTED MODULE:", selectedModule);

    if (!selectedModule) {

        return (
            <div style={{ padding: "30px" }}>

                <h2>Module not found</h2>

                <p>
                    Module URL: {moduleSlug}
                </p>

                <Link to="/oops">
                    ← Back to OOP
                </Link>

            </div>
        );
    }

    return (

        <div style={{ padding: "30px" }}>

            <Link to="/oops">
                ← Back to OOP
            </Link>

            <h1>{selectedModule.title}</h1>

            <p>{selectedModule.description}</p>

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

                        <h3>{topic.title}</h3>

                        <p>{topic.concept}</p>

                        <Link
                            to={`/oops/${moduleSlug}/${topic.id}`}
                        >
                            Learn Topic →
                        </Link>

                    </div>

                ))

            )}

        </div>
    );
}

export default OopsModule;