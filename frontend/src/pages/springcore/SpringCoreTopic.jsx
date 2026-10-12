import {
    useParams,
    Link
} from "react-router-dom";

import { useSelector } from "react-redux";


function SpringCoreTopic() {

    const {
        moduleSlug,
        topicId
    } = useParams();


    const modules = useSelector(
        (state) => state.springCore.modules
    );


    const module = modules.find(
        (item) =>
            item.slug === moduleSlug
    );


    if (!module) {

        return (

            <h2>
                Spring Core module not found
            </h2>

        );

    }


    if (!topicId) {

        return (

            <div>

                <Link to="/spring-core">

                    ← Back to Spring Core

                </Link>


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

                            to={
                                `/spring-core/${moduleSlug}/${topic.id}`
                            }

                            className="topic-card"
                        >

                            <strong>
                                {topic.id}.
                            </strong>

                            {" "}

                            {topic.title}

                        </Link>

                    ))
                }

            </div>

        );

    }


    const topic = module.topics.find(
        (item) =>
            item.id === Number(topicId)
    );


    if (!topic) {

        return (

            <h2>
                Spring Core topic not found
            </h2>

        );

    }


    return (

        <div className="topic-page">

            <Link
                to={`/spring-core/${moduleSlug}`}
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
                    Example
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


export default SpringCoreTopic;