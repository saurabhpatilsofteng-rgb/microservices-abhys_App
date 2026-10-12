import { useSelector } from "react-redux";

import {
    useParams,
    Link
} from "react-router-dom";


function StringsModule() {

    const { moduleSlug } = useParams();


    const modules = useSelector(
        state => state.strings?.modules || []
    );


    const module = modules.find(
        item => item.slug === moduleSlug
    );


    if (!module) {

        return (
            <h1>
                String Module Not Found
            </h1>
        );

    }


    return (

        <div style={{ padding: "30px" }}>

            <Link to="/dashboard">
                ← Back to Dashboard
            </Link>


            <h1>
                {module.title}
            </h1>


            <p>
                {module.description}
            </p>


            <p>
                Difficulty: {module.difficulty}
            </p>


            <Link
                to={`/strings/${module.slug}/1`}
            >
                Start Learning →
            </Link>

        </div>

    );

}


export default StringsModule;