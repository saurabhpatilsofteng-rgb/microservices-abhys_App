import {
    Link,
    useParams
} from "react-router-dom";

import { useSelector } from "react-redux";


function SpringBootTopic() {

    const {
        moduleSlug,
        topicId
    } = useParams();


    const modules = useSelector(
        (state) => state.springBoot?.modules || []
    );


    const module = modules.find(
        (item) =>
            item.slug === moduleSlug
    );


    if (!module) {

        return (

            <div className="learning-page">

                <h2>
                    Spring Boot module not found
                </h2>

                <Link to="/spring-boot">
                    ← Back to Spring Boot
                </Link>

            </div>

        );

    }


    // ============================
    // MODULE TOPIC LIST
    // ============================

    if (!topicId) {

        return (

            <div className="learning-page">

                <Link to="/spring-boot">

                    ← Back to Spring Boot

                </Link>


                <div className="page-header">

                    <span className="page-label">
                        SPRING BOOT
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
                                `/spring-boot/${moduleSlug}/${topic.id}`
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


    // ============================
    // SINGLE TOPIC
    // ============================

    const topic = module.topics.find(
        (item) =>
            item.id === Number(topicId)
    );


    if (!topic) {

        return (

            <div className="learning-page">

                <h2>
                    Topic not found
                </h2>

                <Link
                    to={`/spring-boot/${moduleSlug}`}
                >
                    ← Back
                </Link>

            </div>

        );

    }


    return (

        <div className="learning-page topic-page">

            <Link
                to={`/spring-boot/${moduleSlug}`}
                className="back-link"
            >

                ← Back to {module.title}

            </Link>


            <div className="topic-header">

                <span className="page-label">
                    SPRING BOOT
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
                            `/spring-boot/${moduleSlug}/${Number(topicId) - 1}`
                        }
                    >
                        ← Previous
                    </Link>

                )}


                {Number(topicId) < module.topics.length && (

                    <Link
                        to={
                            `/spring-boot/${moduleSlug}/${Number(topicId) + 1}`
                        }
                    >
                        Next →
                    </Link>

                )}

            </div>

        </div>

    );

}


export default SpringBootTopic;