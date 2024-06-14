import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const [cart, setCart] = useState([
    { name: "Apple", price: 1 },
    { name: "Banana", price: 0.5 },
    { name: "Cherry", price: 2 },
  ]);

  return (
    <div>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Cart;
