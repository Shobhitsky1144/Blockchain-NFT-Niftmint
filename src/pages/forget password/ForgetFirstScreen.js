import React, { useState } from "react";
import LoginButtonHeader from "../../components/headers/LoginButtonHeader";
import "../../styles/forget password/forgetpassword.css";

import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import { toast } from "react-toastify";
import Axios from "axios";

const ForgetFirstScreen = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please fill all the fields.");
      return false;
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.AUTH_USER.FORGET_PASSWORD_STEP1}`,
        {
          email,
        }
      );

      // console.log("forget first screen", res.data);

      if (res.status === 200) {
        toast.success(res.data.message);
        localStorage.setItem("signup_id", JSON.stringify(res.data));
        setEmail("");

        navigate("/forget-password-verifyotp");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <LoginButtonHeader />
      <div className="container  ">
        <div className="row d-flex justify-content-center align-items-center mt-5 mb-5 common-forget-row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-6 py-5 forget-common-parent px-5 ">
            <div className="text-left">
              <h2 className="title ">Forgot Password</h2>
              <p className="forgot-desc">
                {" "}
                Please enter the email address you'd like your password reset
                information sent to.
              </p>
            </div>
            <form className=" py-2" onSubmit={validateForm}>
              <div class="form-group">
                <label className="forms-labels">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary common-btn  ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetFirstScreen;
