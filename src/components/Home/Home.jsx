import React, { useEffect, useState } from "react";
import { List } from "../List/List";
import { Navbar } from "../navbar/Navbar";
import "./home.css";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    await fetch("https://airmeetbackendforapp.herokuapp.com/product")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        setChecked(res);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <div style={{ fontSize: "20px", color: "white", marginTop: "60px" }}>
          Loading...
        </div>
      ) : isError ? (
        <div style={{ fontSize: "20px" }}>Error in Loading...</div>
      ) : (
        <div>
          <div className="homeAllList">
            {checked.map((ele, ind) => {
              return (
                <div className="homeList" key={ele._id}>
                  <List ele={ele} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
