import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../features/auth/authThunks";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        loading,
        error
    } = useSelector((state) => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            await dispatch(
                loginUser({
                    email,
                    password
                })
            );

            console.log("Login successful");

            // Go to dashboard after successful login
            navigate("/dashboard");

        } catch (error) {

            console.error("Login failed");
        }
    };


    return (
        <div>

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <div>

                    <label>
                        Email
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                        required
                    />

                </div>


                <div>

                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                        required
                    />

                </div>


                {error && (
                    <p>
                        {error}
                    </p>
                )}


                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Logging in..."
                        : "Login"
                    }
                </button>

            </form>

        </div>
    );
}

export default Login;