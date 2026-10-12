import {
    useParams,
    Link
} from "react-router-dom";

import { useSelector } from "react-redux";


function CollectionTopic() {

    const {
        moduleSlug,
        topicId
    } = useParams();


    const modules = useSelector(
        (state) => state.collections.modules
    );


    const module = modules.find(

        (item) =>
            item.slug === moduleSlug

    );


    if (!module) {

        return (
            <h2>
                Module not found
            </h2>
        );

    }


    /* If topic is not selected */

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

                            to={`/collections/${moduleSlug}/${topic.id}`}

                            style={{
                                display: "block",
                                padding: "15px",
                                marginBottom: "10px",
                                border: "1px solid #ddd"
                            }}

                        >

                            {topic.id}. {topic.title}

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
                Topic not found
            </h2>
        );

    }


    return (

        <div>

            <Link
                to={`/collections/${moduleSlug}`}
            >

                ← Back to {module.title}

            </Link>


            <h1>
                {topic.title}
            </h1>


            <section>

                <h2>
                    What is {topic.title}?
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


            {
                topic.complexity && (

                    <section>

                        <h2>
                            Time Complexity
                        </h2>

                        <p>
                            {topic.complexity}
                        </p>

                    </section>

                )
            }


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


export default CollectionTopic;