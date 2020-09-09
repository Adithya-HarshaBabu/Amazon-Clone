import React from "react";
import "../css/Product.css";
import { useStateValue } from "../context/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    console.log("this is the basket ...", cart);
    // Add item to basket
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, title, price, rating, image },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
