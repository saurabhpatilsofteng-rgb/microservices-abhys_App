import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function JspModule() {

    const modules = useSelector(
        (state) => state.jsp.modules
    );


    return (

        <div>

            <h1>
                JSP
            </h1>

            <p>
                Learn JavaServer Pages from basics to
                JSP lifecycle, EL, JSTL, forms and MVC.
            </p>


            <div className="module-grid">

                {
                    modules.map((module) => (

                        <Link

                            key={module.id}

                            to={`/jsp/${module.slug}`}

                            className="module-card"
                        >

                            <h2>
                                {module.title}
                            </h2>

                            <p>
                                {module.description}
                            </p>

                            <strong>
                                {module.topics.length} Topics
                            </strong>

                        </Link>

                    ))
                }

            </div>

        </div>

    );

}


export default JspModule;