import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    // const navigate = useNavigate();

    const handleNameInput = (event) => {
        setName(event.target.value);
    };
    const handleAddressInput = (event) => {
        setAddress(event.target.value);
    };
    const handlePhoneInput = (event) => {
        setPhone(event.target.value);
    };

    const handleShipping = (event) => {
        event.preventDefault();
    };
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Shipping Information</h2>
                <form onSubmit={handleShipping}>
                    <div className="input-group">
                        <label htmlFor="name">Your name</label>
                        <input
                            onBlur={handleNameInput}
                            required
                            type="text"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            value={user?.email}
                            readOnly
                            required
                            type="email"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input
                            onBlur={handleAddressInput}
                            required
                            type="text"
                            placeholder="Enter Address"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">Phone No</label>
                        <input
                            onBlur={handlePhoneInput}
                            required
                            type="phone"
                            placeholder="Enter Phone"
                        />
                    </div>

                    <p className="form-error">{error}</p>
                    <input
                        className="form-submit-btn"
                        type="submit"
                        value="Add shipping"
                    />
                </form>
            </div>
        </div>
    );
};

export default Shipment;
