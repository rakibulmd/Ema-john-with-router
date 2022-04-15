import {
    faDeleteLeft,
    faRecycle,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveProduct }) => {
    const { name, price, shipping, quantity, img } = product;
    return (
        <div className="review-item">
            <img src={img} alt="" />
            <div>
                <h5 title={name}>
                    {name.length > 20 ? name.slice(0, 20) + "..." : name}
                </h5>
                <p>
                    Price <span>${price}</span>
                </p>
                <h4>
                    Quantity <span>{quantity}</span>
                </h4>
                <p>
                    Shipping charge <span>${shipping}</span>
                </p>
            </div>
            <button
                onClick={() => {
                    handleRemoveProduct(product);
                }}
            >
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItem;
