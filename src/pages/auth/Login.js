import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterButtonHeader from "../../components/headers/RegisterButtonHeader";
import "../../styles/auth style/auth.css";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import { toast } from "react-toastify";
import Axios from "axios";
import Spinner from "../../components/spinner/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all the fields.");
      return false;
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.AUTH_USER.LOGIN}`,
        {
          email,
          password,
        }
      );

      // console.log("login form", res);
      setEmail("");
      setPassword("");

      if (res.status === 200) {
        toast.success("Welcome back.");
        localStorage.setItem("auth_user", JSON.stringify(res.data));

        navigate("/complete-account");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <RegisterButtonHeader />
      <div className="container login-container ">
        <div className="row  mt-3 mb-3 common-row ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
            {/* <video loop autoPlay={true} muted className="w-100">
              <source src="/assets/commongif.gif" type="video/mp4" />
              Browser not supported
            </video> */}
            <img
              src="/assets/images/commongif.gif"
              className="w-100 gif"
              alt=""
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 login-section-second pt-5 ">
            <div className="header">
              <h2 className="title">Welcome Back NFT & Commerce</h2>
              <p className="text">
                Sign in with your User ID & Password to view your NFT & Commerce
                Collectible
              </p>
            </div>
            <div className="form">
              <form onSubmit={validateForm}>
                <div class="form-group">
                  <label for="email" className="forms-labels">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="your@email.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="pwd" className="forms-labels">
                    Password
                  </label>
                  <input
                    type="Password"
                    class="form-control"
                    placeholder="Password"
                    id="pwd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-left">
                  <div className="">
                    {" "}
                    <Link to="/forget-password-verifyemail">
                      <span className="terms-text"> Forgot Password?</span>
                    </Link>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-cente mt-2  divide-row">
                  <div className="w-90 d-flex align-items-center">
                    <p>
                      Don't have an account?
                      <Link to="/register">
                        <span className="terms-text"> Register</span>
                      </Link>
                    </p>
                  </div>
                  <div className="w-10 button-grp login-btn-section">
                    <button type="submit" class="btn btn-primary  login-btn">
                      Login
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

export default Login;
