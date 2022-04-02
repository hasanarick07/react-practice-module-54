import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="text-orange-400 text-3xl">Welcome to T-Shirt World</h1>
      <nav className="no-underline  my-3">
        <Link className="mx-2 hover:text-red-400" to="/home">
          Home
        </Link>
        <Link className="hover:text-red-400" to="/orderReview">
          Order Review
        </Link>
      </nav>
    </div>
  );
};

export default Header;
