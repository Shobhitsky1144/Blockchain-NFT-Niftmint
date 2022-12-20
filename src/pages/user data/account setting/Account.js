import React, { useState, useEffect } from "react";
import "../../../styles/user data/userdata.css";
import CommonSection from "../common-section/CommonSection";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";

const Account = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <CommonSection />
        </div>
        <h1 className="font-weight-bold mt-5 mb-5">Account Setting</h1>
        <div className="row mt-3 mb-5">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <FirstForm />
          </div>

          {/* second column  */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <SecondForm />
          </div>

          {/* third section */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <ThirdForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
