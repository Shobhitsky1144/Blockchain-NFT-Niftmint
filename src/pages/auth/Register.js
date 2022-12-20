import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import LoginButtonHeader from "../../components/headers/LoginButtonHeader";
import "../../styles/auth style/auth.css";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import { CAPTCHA_SITE_KEY } from "../../config/config";
import { toast } from "react-toastify";
import Axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");
  const [role, setRole] = useState(["user"]);
  const [isVerifiedCaptcha, setIsVerifiedCaptcha] = useState(false);

  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();

    if (!email || !password || !confirm_password) {
      toast.error("Please fill all the fields.");
      return false;
    }
    // else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //   toast.error("invalid email");
    //   return false;
    // }
    else if (password.length < 6) {
      toast.error("Password length must be greater than 6 characters.");
      return false;
    } else if (password !== confirm_password) {
      toast.error("Passwords do not match.");
      return false;
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.AUTH_USER.SIGNUP}`,
        {
          email,
          password,
          role,
        }
      );
      // const id = await res.data.id;
      // console.log("register form", id);

      if (res.status === 200) {
        toast.success("Registered successfully. Please check your e-mail.");
        localStorage.setItem("signup_id", JSON.stringify(res.data.id));

        setEmail("");
        setPassword("");
        setConfirm_Password("");
        navigate("/verify-otp");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleCaptcha = (value) => {
    if (value) {
      setIsVerifiedCaptcha(true);
    }
  };
  return (
    <>
      <LoginButtonHeader />
      <div className="container  register-container ">
        <div className="row  mt-3 mb-3 common-row d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-9 col-lg-6">
            {/* <video loop autoPlay={true} muted className="w-100">
              <source
                src="/assets/videos/ligonier_2022_national_conference.mp4"
                type="video/mp4"
              />
              Browser not supported
            </video> */}
            <img
              src="/assets/images/commongif.gif"
              className=" register-img gif"
              alt=""
            />
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-6 register-section-second">
            <div className="header">
              <h2 className="title">Get your Free ‘Future of Retail’ NFT!</h2>
              <p className="text">
                Enter your information to claim your Future of Retail NFT
              </p>
            </div>
            <div className="form">
              <form onSubmit={validateForm}>
                <div className="form-group">
                  <label className="forms-labels" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="your@email.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="pwd" className="forms-labels">
                    Password
                  </label>
                  <input
                    type="Password"
                    className="form-control"
                    placeholder="Password"
                    id="pwd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="pwd" className="forms-labels">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    id="cpwd"
                    value={confirm_password}
                    onChange={(e) => setConfirm_Password(e.target.value)}
                  />
                </div>

                <div className="form-check register-text">
                  <label className="form-check-label" for="exampleCheck1">
                    By proceeding, I agree to Niftmint’s
                    <span className="">
                      {" "}
                      <a
                        href="/terms-condition"
                        target="_blank"
                        className="terms-text "
                      >
                        Terms & Conditions
                      </a>
                    </span>{" "}
                    and acknowledge that I have read the
                    <span className="">
                      {" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        className="terms-text "
                      >
                        Privacy Policy.
                      </a>
                    </span>
                  </label>
                </div>

                <div className="mt-3 d-flex justify-content-end">
                  <ReCAPTCHA
                    sitekey={CAPTCHA_SITE_KEY}
                    onChange={handleCaptcha}
                  />
                </div>

                <div className="d-flex justify-content-between mt-3 divide-row">
                  <div
                    className="w-90 d-flex   align-items-center"
                    // style={{ flex: "1" }}
                  >
                    <p>
                      Already have an account?{" "}
                      <Link to="/login">
                        <span className="terms-text"> Login</span>
                      </Link>
                    </p>
                  </div>
                  <div className="w-10 register-btn-section">
                    <button
                      type="submit"
                      // className="btn btn-primary  register-btn"
                      className={` ${
                        isVerifiedCaptcha === true
                          ? "btn btn-primary  register-btn"
                          : "btn btn-primary  register-btndisable"
                      }`}
                      disabled={!isVerifiedCaptcha}
                    >
                      Register
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

export default Register;
