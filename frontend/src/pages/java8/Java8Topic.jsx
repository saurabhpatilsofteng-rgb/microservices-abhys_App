import {
    useParams,
    Link
} from "react-router-dom";

import { useSelector } from "react-redux";


function Java8Topic() {

    const {
        moduleSlug,
        topicId
    } = useParams();


    const modules = useSelector(
        (state) => state.java8.modules
    );


    const module = modules.find(
        (item) =>
            item.slug === moduleSlug
    );


    if (!module) {

        return (
            <h2>
                Java 8 module not found
            </h2>
        );

    }


    /* SHOW TOPIC LIST */

    if (!topicId) {

        return (

            <div>

                <h1>
                    {module.title}
                </h1>

                <p>
                    {module.description}
                </p>


                <h2>
                    Topics
                </h2>


                {
                    module.topics.map((topic) => (

                        <Link

                            key={topic.id}

                            to={`/java8/${moduleSlug}/${topic.id}`}

                            className="topic-card"
                        >

                            {topic.id}. {topic.title}

                        </Link>

                    ))
                }

            </div>

        );

    }


    /* FIND SELECTED TOPIC */

    const topic = module.topics.find(
        (item) =>
            item.id === Number(topicId)
    );


    if (!topic) {

        return (
            <h2>
                Topic not found
            </h2>
        );

    }


    return (

        <div className="topic-page">

            <Link
                to={`/java8/${moduleSlug}`}
            >

                ← Back to {module.title}

            </Link>


            <h1>
                {topic.title}
            </h1>


            <section>

                <h2>
                    What is it?
                </h2>

                <p>
                    {topic.explanation}
                </p>

            </section>


            <section>

                <h2>
                    Why is it important?
                </h2>

                <p>
                    {topic.importance}
                </p>

            </section>


            <section>

                <h2>
                    Java Example
                </h2>

                <pre>

                    <code>
                        {topic.code}
                    </code>

                </pre>

            </section>

        </div>

    );

}


export default Java8Topic;