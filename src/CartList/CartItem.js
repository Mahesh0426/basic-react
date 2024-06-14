import React from "react";

const CartItem = (props) => {
  const { item } = props;
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default CartItem;
