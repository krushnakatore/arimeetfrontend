import React, { useEffect, useState } from "react";
import "./home.css";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [checked, setChecked] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    await fetch("http://localhost:3456/product")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        setChecked(res);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const handleDelete = (ele) => {
    let arr = checked.filter((e) => {
      return e._id !== ele._id;
    });
    setChecked(arr);
  };

  const handleAdd = () => {};

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="homeAllList">
          {checked.map((ele, ind) => {
            return (
              <div className="homeList" key={ele._id}>
                <input type="checkbox" value={ele} />
                <div>{ele.title}</div>
                <div>
                  <img src={ele.img} />
                </div>
                <button
                  onClick={() => {
                    handleDelete(ele);
                  }}
                >
                  Delete
                </button>
                <button onClick={handleAdd}>Add to Wishlist</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
