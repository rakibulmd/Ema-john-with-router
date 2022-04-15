import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] =
        useCreateUserWithEmailAndPassword(auth);

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordInput = (event) => {
        setConfirmPassword(event.target.value);
    };

    if (user) {
        navigate("/");
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password doesn't matched");
            return;
        }
        if (password.length < 6) {
            setError("password at least 6 character");
            return;
        }
        console.log("email pass", email, password);
        createUserWithEmailAndPassword(email, password);

        if (user) {
            setError("sign up successful");
        }
    };
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onBlur={handleEmailInput}
                            required
                            type="text"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onBlur={handlePasswordInput}
                            required
                            type="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            onBlur={handleConfirmPasswordInput}
                            required
                            type="password"
                            name="confirm-password"
                            placeholder="Confirm password"
                        />
                    </div>
                    <p className="form-error">{error}</p>
                    <input
                        className="form-submit-btn"
                        type="submit"
                        value="Sign Up"
                    />
                </form>
                <p>
                    Already have an account?{" "}
                    <Link className="form-link" to="/login">
                        Log in
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

export default SignUp;
