import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginButtonHeader from "../../components/headers/LoginButtonHeader";
import "../../styles/auth style/auth.css";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import { toast } from "react-toastify";
import Axios from "axios";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error("Please fill all the fields.");
      return false;
    } else {
      handleSubmit();
    }
  };

  const id = JSON.parse(localStorage.getItem("signup_id"));

  const handleSubmit = async () => {
    try {
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.AUTH_USER.VERIFY_OTP}`,
        {
          id,
          otp,
        }
      );

      setOtp("");

      if (res.status === 200) {
        // console.log(res.data);
        // localStorage.clear();
        localStorage.setItem("auth_user", JSON.stringify(res.data));
        // localStorage.clear("signup_id");
        toast.success("Verified successfully.");
        navigate("/complete-account");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const resendOtp = async () => {
    try {
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.AUTH_USER.RESEND_OTP}`,
        {
          id,
        }
      );

      if (res.status === 200) {
        toast.success("OTP sent.");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <LoginButtonHeader />
      <div className="container verifyemail-container ">
        <div className="row mt-3 mb-3 common-row ">
          <div className="col-12 col-md-6 col-lg-6">
            <img
              src="/assets/images/commongif.gif"
              className="w-100 gif"
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 verifyemail-section-second ">
            <div className="header">
              <h2 className="title">Please verify your email</h2>
              <p className="text">
                Please check your email for a one-time-password and add below.
                Didn’t receive it?{" "}
                <span
                  className="terms-text"
                  style={{ cursor: "pointer", fontSize: "17px" }}
                  onClick={resendOtp}
                >
                  Resend
                </span>
              </p>
            </div>
            <div className="form">
              <form onSubmit={validateForm}>
                <div class="form-group">
                  <label for="pwd" className="forms-labels">
                    One Time Password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="One Time Password"
                    id="pwd"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-cente mt-3 divide-row">
                  <div className="w-90 d-flex align-items-center">
                    <p>
                      Have an account?
                      <Link to="/login">
                        <span
                          className="terms-text"
                          style={{ fontSize: "18px" }}
                        >
                          {" "}
                          Login
                        </span>
                      </Link>
                    </p>
                  </div>
                  <div className=" verifybtn-section">
                    <button type="submit" class="btn btn-primary login-btn">
                      Verify OTP
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
