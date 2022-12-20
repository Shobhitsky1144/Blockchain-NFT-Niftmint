import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LoginButtonHeader = () => {
  const auth = JSON.parse(localStorage.getItem("auth_user"));
  return (
    <>
      <div className="container">
        <div className="row pt-3">
          <div className="xs-4 col-4 col-sm-4 col-md-4 col-lg-4 d-flex">
            <div className="logo d-flex align-items-center">
              {/* <Link to="/"> */}
              <img
                src="/assets/images/newlogo.png"
                alt=""
                className="mobile-logo"
              />
            </div>
            {/* </Link> */}
          </div>
          <div className="xs-8 col-8 col-sm-8 col-md-8 col-lg-8">
            <div className="text-right">
              {auth ? (
                ""
              ) : (
                <>
                  <span className="join-telegram-parent">
                    {" "}
                    <a
                      href="https://t.me/+QcSzM9stbZc1NzZh"
                      target="_blank"
                      className="join-telegram"
                    >
                      Join Telegram
                    </a>
                  </span>

                  <Link to="/login">
                    <button className="btn  my-2 my-sm-0 header-btn">
                      Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginButtonHeader;
