import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ReactTopic() {

    const { moduleSlug, topicId } = useParams();

    const modules = useSelector(
        (state) => state.react.modules
    );

    const selectedModule = modules.find(
        (module) =>
            String(module.id) === String(moduleSlug)
    );

    if (!selectedModule) {

        return (

            <div style={{ padding: "30px" }}>

                <h2>Module not found</h2>

                <Link to="/react">
                    ← Back to React
                </Link>

            </div>

        );
    }

    const topic = selectedModule.topics.find(
        (topic) =>
            String(topic.id) === String(topicId)
    );

    if (!topic) {

        return (

            <div style={{ padding: "30px" }}>

                <h2>Topic not found</h2>

                <Link to={`/react/${moduleSlug}`}>
                    ← Back to Topics
                </Link>

            </div>

        );
    }

    return (

        <div style={{ padding: "30px" }}>

            <Link to={`/react/${moduleSlug}`}>
                ← Back to Topics
            </Link>

            <h1>
                {topic.title}
            </h1>

            <p>
                {topic.concept}
            </p>

            <h2>Theory</h2>

            <pre
                style={{
                    whiteSpace: "pre-wrap"
                }}
            >
                {topic.theory}
            </pre>

            <h2>Example</h2>

            <pre
                style={{
                    padding: "20px",
                    border: "1px solid black",
                    overflow: "auto"
                }}
            >
                <code>
                    {topic.example}
                </code>
            </pre>

            <h2>Output</h2>

            <pre>
                {topic.output}
            </pre>

        </div>

    );
}

export default ReactTopic;