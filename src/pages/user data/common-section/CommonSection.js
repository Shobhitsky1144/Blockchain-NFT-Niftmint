import React, { useState, useEffect } from "react";
import "../../../styles/user data/userdata.css";

const CommonSection = () => {
  // const [user, setUser] = useState("");
  // useEffect(() => {
  const { username } = JSON.parse(localStorage.getItem("auth_user"));

  //   setUser(username);
  // }, [user]);

  return (
    <div className="">
      <div className=" d-flex align-items-center">
        <div className="">
          <img
            src="/assets/images/rock.jpg"
            alt="user-profile"
            className="bio-img"
          />
        </div>
        <div className="pl-3">
          <h1 className="username-title  font-weight-bold">
            {" "}
            @{username ? username : "username"}
          </h1>

          <h5 className="username-desc font-weight-bold">Joined Nov 2022</h5>
        </div>
      </div>
    </div>
  );
};

export default CommonSection;
