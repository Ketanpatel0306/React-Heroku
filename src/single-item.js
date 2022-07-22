import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Config } from "./config";

const SingleItem = () => {
  const [save, setSave] = useState([]);

  const DataFetch = async () => {
    const response = await fetch(`${Config.BaseUrl}/users`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    setSave(data.data);
  };

  useEffect(() => {
    DataFetch();
  }, []);
  return (
    <div>
      <div className="App">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            backgroundColor: "yellow",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {save.map((item, index) => {
            return (
              <NavLink
                to={`/find-item/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
                key={index + "mapKey"}
              >
                <div
                  style={{
                    backgroundColor: index % 2 === 0 ? "pink" : "greenyellow",
                    border: "1px solid black",
                    padding: "0px 30px",
                  }}
                >
                  <p>
                    <b> Address: </b>
                    {item.address}
                  </p>
                  <p>
                    <b>City:</b> {item.city}
                  </p>
                  <p>
                    <b>CreatedAt:</b> {item.createdAt}
                  </p>
                  <p>
                    <b>Email:</b> {item.email}
                  </p>
                  <p>
                    <b>First Name:</b> {item.first_name}
                  </p>
                  <p>
                    <b> Last Name:</b> {item.last_name}
                  </p>
                  <p>
                    <b> Password:</b> {item.password}
                  </p>
                  <p>
                    <b> Phone:</b> {item.phone}
                  </p>
                  <p>
                    <b> State:</b> {item.state}
                  </p>
                  <p>
                    <b>Status:</b> {item.status ? "true" : "false"}
                  </p>
                  <p>
                    <b>UId:</b> {item.u_id}
                  </p>
                  <p>
                    <b>UpdatedAt:</b> {item.updatedAt}
                  </p>
                  <p>
                    <b> Zip:</b> {item.zip}
                  </p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
