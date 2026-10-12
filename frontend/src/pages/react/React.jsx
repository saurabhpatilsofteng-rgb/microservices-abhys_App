import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function React() {

    const modules = useSelector(
        (state) => state.react.modules
    );

    console.log("REACT MODULES:", modules);

    return (

        <div style={{ padding: "30px" }}>

            <h1>React.js</h1>

            {modules.length === 0 && (
                <h2>No modules found</h2>
            )}

            {modules.map((module) => (

                <div
                    key={module.id}
                    style={{
                        border: "1px solid black",
                        padding: "15px",
                        marginBottom: "10px"
                    }}
                >

                    <h2>{module.title}</h2>

                    <p>{module.description}</p>

                    <Link to={`/react/${module.id}`}>
                        View Topics →
                    </Link>

                </div>

            ))}

        </div>

    );
}

export default React;