import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import UserPopup from "./UserPopup";

const HomeHeader = () => {
  const navigate = useNavigate();
  // const [findUser, setFindUser] = useState("");

  // useEffect =
  //   (() => {
  //     const { username } = JSON.parse(localStorage.getItem("auth_user"));
  //     setFindUser(username);
  //   },
  //   [findUser]);

  return (
    <>
      <div className="container">
        <div className="row pt-2">
          <div className="xs-4 col-4 col-sm-4 col-md-4 col-lg-4 d-flex">
            <div className="logo d-flex align-items-center">
              <Link to="/">
                <img
                  src="/assets/images/newlogo.png"
                  alt=""
                  className="mobile-logo"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
          </div>
          <div className="xs-8 col-8 col-sm-8 col-md-8 col-lg-8">
            <div className="text-right">
              {/* <span className="join-telegram-parent">
                {" "}
                <a
                  href="https://t.me/+QcSzM9stbZc1NzZh"
                  target="_blank"
                  className="join-telegram"
                >
                  Join Telegram
                </a>
              </span> */}
              {/* <button
                className="btn  my-2 my-sm-0 header-btn"
                onClick={logoutUser}
              >
                Logout
              </button> */}
              <span>
                {" "}
                {/* kkjjjjjjjjjjj */}
                <UserPopup />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
