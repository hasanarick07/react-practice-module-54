import React, { useState } from "react";
import useShirts from "../../hooks/useShirts";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {
  const [tshirts, setTshirts] = useShirts();
  const [cart, setCart] = useState([]);
  const addToCart = add => {
    const exist = cart.find(cart => cart._id === add._id);
    if (!exist) {
      const newCart = [...cart, add];
      setCart(newCart);
    } else {
      alert("Can not add a product twice");
    }
  };
  const removeFromCart = add => {
    const remain = cart.filter(cart => cart._id !== add._id);
    setCart(remain);
  };
  return (
    <div className="flex flex-row">
      <div className="basis-4/5 grid grid-cols-3 gap-4">
        {tshirts.map(shirt => (
          <Card key={tshirts._id} addToCart={addToCart} shirt={shirt}></Card>
        ))}
      </div>
      <div className="basis-1/5">
        <Cart cart={cart} key={cart._id} removeFromCart={removeFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
