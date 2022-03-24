import React, { useEffect, useState } from "react";
import "./home.css";

export const Home = () => {
  // const [checked, setChecked] = useState([]);
  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   await fetch("http://localhost:3456/product")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setChecked(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      {/* <div className="homeAllList">
        {checked.map((ele, ind) => {
          return (
            <div className="homeList" key={ele._id}>
              <input type="checkbox" value={ele} />
              <div>{ele.title}</div>
              <div>
                <img src={ele.img} />
              </div>
              <button onClick={() => {}}>Delete</button>
              <button>Add to Wishlist</button>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
