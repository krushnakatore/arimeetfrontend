import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
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
      <Navbar />
      <div>
        {cartProducts.length ? (
          <div>
            {cartProducts.map((e) => {
              return (
                <div className="homeList" key={e._id}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "70%",
                      backgroundColor: "grey",
                      borderRadius: "10px",
                    }}
                  >
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
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ marginTop: "60px", fontSize: "20px", color: "white" }}>
            Wishlist is Empty..
          </div>
        )}
      </div>
    </div>
  );
};
