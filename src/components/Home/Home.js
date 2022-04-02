import React from "react";
import useShirts from "../../hooks/useShirts";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {
  const [tshirts, setTshirts] = useShirts();
  return (
    <div className="flex flex-row">
      <div className="basis-4/5 grid grid-cols-3 gap-4">
        {tshirts.map(shirt => (
          <Card key={tshirts._id} shirt={shirt}></Card>
        ))}
      </div>
      <div className="basis-1/5">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
