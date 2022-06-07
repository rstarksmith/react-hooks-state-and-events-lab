import React, { useState } from "react";

function Item({ name, category }) {
  const [ isInCart, setIsInCart] = useState(false)
  const addToCart = isInCart ? "in-cart" : ""

  function handleClickCart(){
    setIsInCart((isInCart) => !isInCart)
  }

  return (
    <li className={addToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClickCart}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
