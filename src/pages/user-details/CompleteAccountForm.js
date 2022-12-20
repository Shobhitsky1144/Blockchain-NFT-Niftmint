import React, { useEffect, useState } from "react";
import "../../styles/users style/CompleteAccount.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import { toast } from "react-toastify";
import Axios from "axios";
import HomeHeader from "../../components/headers/HomeHeader";

const CompleteAccountForm = () => {
  const navigate = useNavigate();
  const { username } = JSON.parse(localStorage.getItem("auth_user"));
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [usernames, setUserNames] = useState("");

  useEffect(() => {
    const { first_name, username } = JSON.parse(
      localStorage.getItem("auth_user")
    );
    if (first_name !== null || username !== null) {
      navigate("/");
    }
  }, []);

  const validateForm = (e) => {
    e.preventDefault();

    if (!first_name || !last_name) {
      toast.error("Please fill all the fields.");
      return false;
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    var uname;
    if (usernames) {
      uname = usernames;
    } else {
      uname = username;
    }
    try {
      const { email } = JSON.parse(localStorage.getItem("auth_user"));
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.USER.COMPLETE_ACCOUNT}`,
        {
          email,
          first_name,
          last_name,
          username: uname,
        }
      );

      // console.log("complete account", res);
      // setEmail("");
      setUserNames("");
      setFirst_name("");
      setLast_name("");

      if (res.status === 200) {
        toast.success("User details submitted successfully.");
        localStorage.setItem("auth_user", JSON.stringify(res.data));
        // navigate("/user-bio");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      {/* <HomeHeader />{" "} */}
      <div className="container d-flex justify-content-center align-items-center mt-3 mb-3 complete-container">
        <div className="row justify-content-center ">
          <div className="col-11 col-sm-10  col-md-10 col-lg-8 complete-account-section p-5 complete-account-row">
            <div className="header">
              <h2 className="title font-weight-bold text-dark">
                Complete your Account
              </h2>
              <p className="text">
                Answer the questions below to complete your account and be able
                to acquire your first NFT with Niftmint.
              </p>
            </div>
            <div className="form">
              <form onSubmit={validateForm}>
                <div class="form-group">
                  <div class="form-group">
                    <label for="pwd" className="forms-labelss ">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      id="pwd"
                      value={first_name}
                      onChange={(e) => setFirst_name(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="pwd" className="forms-labelss">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      id="pwd"
                      value={last_name}
                      onChange={(e) => setLast_name(e.target.value)}
                    />
                  </div>
                  <label className="forms-labelss ">User Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="@username"
                    defaultValue={username}
                    onChange={(e) => setUserNames(e.target.value)}
                  />
                </div>

                <div className="d-flex justify-content-between mt-4 divide-row">
                  <div className=" complete-account-section">
                    <Link to="/">
                      <button
                        // type="submit"
                        className="complete-account-btn  text-white"
                        style={{
                          background: "#999999",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Complete Later
                      </button>
                    </Link>
                  </div>
                  <div className=" complete-account-section">
                    <button
                      type="submit"
                      className="complete-account-btn text-white "
                      style={{ borderRadius: "5px", cursor: "pointer" }}
                    >
                      {" "}
                      Continue
                    </button>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-5 mb-4">
                  <span className="slidez"></span>
                  <span className="slidey"></span>
                  <span className="slides"></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteAccountForm;
