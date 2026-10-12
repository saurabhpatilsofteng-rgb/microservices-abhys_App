import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";


function OopsTopic() {

    const { moduleSlug, topicId } = useParams();


    const modules = useSelector(
        (state) => state.oops.modules
    );


    const selectedModule = modules.find(
        (module) => module.id === moduleSlug
    );


    if (!selectedModule) {

        return <h2>Module not found</h2>;

    }


    const topic = selectedModule.topics.find(
        (topic) => topic.id === Number(topicId)
    );


    if (!topic) {

        return <h2>Topic not found</h2>;

    }


    return (

        <div style={{ padding: "30px" }}>

            <Link to={`/oops/${moduleSlug}`}>
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


export default OopsTopic;