import React from "react";
import "./Orders.css";
import useProducts from "../../hooks/useProduct";
import useCart from "../../hooks/useCart";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const handleRemoveProduct = (product) => {
        const rest = cart.filter((p) => p.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    };
    return (
        <div className="shop-container">
            <div className="review-item-container">
                {cart.map((product) => (
                    <ReviewItem
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                        key={product.id}
                    ></ReviewItem>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} setCart={setCart}>
                    <button
                        onClick={() => {
                            navigate("/shipment");
                        }}
                    >
                        Proceed shopping
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
