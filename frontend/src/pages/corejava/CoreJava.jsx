import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CoreJava() {

    const modules = useSelector(
        state => state.coreJava?.modules || []
    );

  


    return (

        <div style={{ padding: "30px" }}>

            <h1>Core Java</h1>

            <p>
                Learn Core Java from basics to advanced concepts.
            </p>


            {modules.map(module => (

                <div
                    key={module.id}
                    style={{
                        border: "1px solid black",
                        padding: "20px",
                        marginBottom: "15px"
                    }}
                >

                    <h2>
                        {module.title}
                    </h2>

                    <p>
                        {module.description}
                    </p>

                    <p>
                        Difficulty: {module.difficulty}
                    </p>

                    <Link
                        to={`/core-java/${module.slug}`}
                    >
                        Open Module →
                    </Link>

                </div>

            ))}

        </div>

    );
}

export default CoreJava;