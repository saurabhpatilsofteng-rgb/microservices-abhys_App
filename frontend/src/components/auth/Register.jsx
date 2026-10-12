import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../../features/auth/authThunks";

function Register() {

    const dispatch = useDispatch();

    const {
        loading,
        error
    } = useSelector((state) => state.auth);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            const response = await dispatch(
                registerUser({
                    name,
                    email,
                    password
                })
            );

            console.log(
                "Registration successful",
                response
            );

        } catch (error) {

            console.error(
                "Registration failed"
            );
        }
    };


    return (
        <div>

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name</label>

                    <input
                        type="text"
                        value={name}
                        onChange={(event) =>
                            setName(event.target.value)
                        }
                    />
                </div>


                <div>
                    <label>Email</label>

                    <input
                        type="email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                    />
                </div>


                <div>
                    <label>Password</label>

                    <input
                        type="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                    />
                </div>


                {error && (
                    <p>{error}</p>
                )}


                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Creating account..."
                        : "Register"
                    }
                </button>

            </form>

        </div>
    );
}

export default Register;