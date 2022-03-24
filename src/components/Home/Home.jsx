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
        setIsError(true);
      });
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error in Loading...</div>
      ) : (
        <div>
          <Navbar />
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
