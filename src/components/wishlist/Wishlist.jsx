import React, { useEffect, useState } from "react";
import "./wishlist.css";

export const Wishlist = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("shopcart")));
  }, []);

  const handleDelete = (data) => {
    let cart = JSON.parse(localStorage.getItem("shopcart"));
    let newCart = cart.filter((e) => e._id !== data._id);
    localStorage.setItem("shopcart", JSON.stringify(newCart));
    setCartProducts(JSON.parse(localStorage.getItem("shopcart")));
  };

  return (
    <div>
      {cartProducts.map((e) => {
        return (
          <div className="homeList" key={e._id}>
            <div>{e.first_name}</div>
            <div>
              <img src={e.images} />
            </div>
            <button
              onClick={() => {
                handleDelete(e);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
