import React, { useState } from "react";

export const List = ({ ele }) => {
  const [css, setCss] = useState("");

  const isChecked = () => {
    if (css) {
      setCss("");
    } else {
      setCss("background");
    }
  };

  const handleAdd = (data) => {
    if (localStorage.getItem("shopcart") === null) {
      localStorage.setItem("shopcart", JSON.stringify([]));
    }
    let cart = JSON.parse(localStorage.getItem("shopcart"));
    let flag = true;
    for (let i = 0; i < cart.length; i++) {
      console.log(cart._id, data._id);
      if (cart[i]._id === data._id) {
        flag = false;
      }
    }

    if (flag === true) {
      cart.push(data);
    }

    localStorage.setItem("shopcart", JSON.stringify(cart));
  };

  return (
    <div
      className={css}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "70%",
        backgroundColor: "grey",
        borderRadius: "10px",
      }}
    >
      <div>{ele.id}</div>
      <input
        type="checkbox"
        value={ele}
        onClick={(e) => {
          handleAdd(ele);
          isChecked();
        }}
      />
      <div>{ele.first_name}</div>
      <div>
        <img src={ele.images} />
      </div>
    </div>
  );
};
