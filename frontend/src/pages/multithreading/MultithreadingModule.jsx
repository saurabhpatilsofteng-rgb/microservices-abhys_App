import { Link } from "react-router-dom";

import { useSelector } from "react-redux";


function MultithreadingModule() {

    const modules = useSelector(
        (state) =>
            state.multithreading.modules
    );


    return (

        <div>

            <h1>
                Java Multithreading
            </h1>

            <p>
                Learn threads, synchronization, concurrency,
                thread pools and asynchronous programming.
            </p>


            <div className="module-grid">

                {
                    modules.map((module) => (

                        <Link
                            key={module.id}

                            to={
                                `/multithreading/${module.slug}`
                            }

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


export default MultithreadingModule;