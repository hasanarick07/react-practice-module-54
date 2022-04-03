import React from "react";

const Card = ({ shirt, addToCart }) => {
  const { name, picture, price } = shirt;
  return (
    <div className="w-72 m-auto rounded-lg hover:shadow-2xl shadow-inner shadow-slate-200 hover:shadow-gray-400 bg-purple-300">
      <img
        className="shadow-inner rounded-lg h-72 w-64 mx-auto mt-3"
        src={picture}
        alt=""
      />
      <h1>{name}</h1>
      <p>
        <small>price : ${price}</small>
      </p>
      <button
        onClick={() => addToCart(shirt)}
        className="text-black shadow-2xl hover:shadow-inner shadow-slate-200 hover:shadow-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-black dark:hover:text-white dark:hover:bg-gray-600 "
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
