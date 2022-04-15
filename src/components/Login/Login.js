import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Log In</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onBlur={handleEmailInput}
                            required
                            type="text"
                            name="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onBlur={handlePasswordInput}
                            required
                            type="password"
                            name="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <p className="form-error">{error?.message}</p>
                    {loading && <p>Loading....</p>}
                    <input
                        className="form-submit-btn"
                        type="submit"
                        value="Log In"
                    />
                </form>
                <p>
                    New to Ema John?{" "}
                    <Link className="form-link" to="/signup">
                        Create an Account
                    </Link>
                </p>

                <div className="alternative-login">
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <button className="google-login-btn">
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
