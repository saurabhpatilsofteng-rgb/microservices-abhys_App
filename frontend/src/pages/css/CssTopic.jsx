import {
    Link,
    useParams
} from "react-router-dom";

import { useSelector } from "react-redux";


function CssTopic() {

    const {
        moduleSlug,
        topicId
    } = useParams();


    const modules = useSelector(
        (state) => state.css?.modules || []
    );


    const module = modules.find(
        item => item.slug === moduleSlug
    );


    if (!module) {

        return (

            <div className="learning-page">

                <h2>
                    CSS module not found
                </h2>

                <Link to="/css">
                    ← Back to CSS
                </Link>

            </div>

        );

    }


    /*
     * SHOW TOPICS
     */

    if (!topicId) {

        return (

            <div className="learning-page">

                <Link
                    to="/css"
                    className="back-link"
                >
                    ← Back to CSS
                </Link>


                <div className="page-header">

                    <span className="page-label">
                        {module.category}
                    </span>

                    <h1>
                        {module.title}
                    </h1>

                    <p>
                        {module.description}
                    </p>

                </div>


                <div className="topic-list">

                    {module.topics.map((topic) => (

                        <Link
                            key={topic.id}
                            to={
                                `/css/${moduleSlug}/${topic.id}`
                            }
                            className="topic-card"
                        >

                            <span className="topic-number">
                                {String(topic.id).padStart(2, "0")}
                            </span>


                            <div>

                                <h3>
                                    {topic.title}
                                </h3>

                                <p>
                                    Open topic →
                                </p>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        );

    }


    /*
     * SHOW TOPIC
     */

    const topic = module.topics.find(
        item => item.id === Number(topicId)
    );


    if (!topic) {

        return (

            <div className="learning-page">

                <h2>
                    Topic not found
                </h2>

                <Link
                    to={`/css/${moduleSlug}`}
                >
                    ← Back
                </Link>

            </div>

        );

    }


    return (

        <div className="learning-page topic-page">

            <Link
                to={`/css/${moduleSlug}`}
                className="back-link"
            >
                ← Back to {module.title}
            </Link>


            <div className="topic-header">

                <span className="page-label">
                    {module.category}
                </span>

                <h1>
                    {topic.title}
                </h1>

            </div>


            <section className="learning-section">

                <h2>
                    📖 Explanation
                </h2>

                <p>
                    {topic.explanation}
                </p>

            </section>


            <section className="learning-section">

                <h2>
                    ⭐ Why is it important?
                </h2>

                <p>
                    {topic.importance}
                </p>

            </section>


            <section className="learning-section">

                <h2>
                    💻 Example
                </h2>

                <pre className="code-block">

                    <code>
                        {topic.code}
                    </code>

                </pre>

            </section>


            <div className="topic-navigation">

                {Number(topicId) > 1 && (

                    <Link
                        to={
                            `/css/${moduleSlug}/${Number(topicId) - 1}`
                        }
                    >
                        ← Previous
                    </Link>

                )}


                {Number(topicId) < module.topics.length && (

                    <Link
                        to={
                            `/css/${moduleSlug}/${Number(topicId) + 1}`
                        }
                    >
                        Next →
                    </Link>

                )}

            </div>

        </div>

    );

}


export default CssTopic;