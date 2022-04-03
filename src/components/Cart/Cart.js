import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Items Added : {cart.length}</h1>
      {cart.map(cart => (
        <div className="flex h-10 items-center mt-3 content-between">
          <img
            className="mr-3 rounded-full h-10 p-1 w-auto"
            src={cart.picture}
            alt=""
          />
          <p className="mr-5">{cart.name}</p>
          <button
            onClick={() => removeFromCart(cart)}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
