import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


function CollectionsModule() {

    const modules = useSelector(
        (state) => state.collections.modules
    );


    return (

        <div>

            <h1>
                Java Collections
            </h1>

            <p>
                Learn the Java Collection Framework and
                important data structures.
            </p>


            <div className="module-grid">

                {
                    modules.map((module) => (

                        <Link
                            key={module.id}

                            to={`/collections/${module.slug}`}

                            className="module-card"
                        >

                            <h2>
                                {module.title}
                            </h2>

                            <p>
                                {module.description}
                            </p>

                            <p>

                                <strong>
                                    {module.topics.length}
                                </strong>

                                {" "} Topics

                            </p>

                        </Link>

                    ))
                }

            </div>

        </div>

    );

}


export default CollectionsModule;