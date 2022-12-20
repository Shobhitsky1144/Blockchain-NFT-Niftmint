import React from "react";
import LoginButtonHeader from "../headers/LoginButtonHeader";
import "../../styles/error page style/ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const auth = JSON.parse(localStorage.getItem("auth_user"));
  return (
    <>
      <LoginButtonHeader />
      <div className="container d-flex justify-content-center align-items-center mb-5">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 text-center">
            <div className="error-text">
              <span className="mr-3">4</span>
              <span className="zero mr-3">0</span>
              <span>4</span>
            </div>
            <span className="page-not-found ">Oops! Page Not Found</span>
            <div className="error-content my-3">
              The page you are looking for might have been removed had its{" "}
              <br /> name changed or is temporarily unavailable.
            </div>

            <div className="">
              {auth ? (
                <Link to="/">
                  <button className="return-btn">Return To Home Page</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="return-btn">Return To Login Page</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
