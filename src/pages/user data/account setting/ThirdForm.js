import React, { useState } from "react";
import { toast } from "react-toastify";
import Axios from "axios";
import { API_BASE_URL, API_ROUTES } from "../../../constants/ApiBaseUrl";
// import Spinner from "../../../components/spinner/Spinner";

const ThirdForm = () => {
  // const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [phone_number, setPhone_Number] = useState("");
  const [authApp, setAuthApp] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = (e) => {
    e.preventDefault();

    if (!phone_number) {
      toast.error("Please fill all the fields.");
      return false;
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const { id } = JSON.parse(localStorage.getItem("auth_user"));
    try {
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.USER.ACCOUNT_SETTING_THIRD_FORM}`,
        {
          id,
          phone_number,
        }
      );

      // console.log("third form", res);

      if (res.status === 200) {
        toast.success(
          res.data.message ? res.data.message : "Submitted successfully."
        );
        setPhone_Number("");
        localStorage.setItem("auth_user", JSON.stringify(res.data));
        // navigate("/user-bio");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="">
          <h5 className="font-weight-bold">Authentication Preferences</h5>
          <h6 className="account-desc ">
            {" "}
            Select your preferred authentication method
          </h6>
          <form className="mt-5" onSubmit={validateForm}>
            <div class="form-group">
              <label className=" forms-labelss userinfo-labels">
                Phone Number
              </label>
              <input
                type="text"
                // placeholder="******"
                class="form-control"
                value={phone_number}
                onChange={(e) => setPhone_Number(e.target.value)}
              />
            </div>
            <div
              class="form-group mb-5 second-msg"
              style={{ visibility: "hidden" }}
            >
              <label className=" forms-labelss userinfo-labels">
                Authentication App
              </label>
              <input
                type="text"
                // placeholder="******"
                class="form-control"
                value={authApp}
                onChange={(e) => setAuthApp(e.target.value)}
              />
            </div>

            <button
              type="submit"
              class="common-btn text-dark font-weight-bold third-btn"
              // 10.1rem
              style={{ background: "#7bd7ab", marginTop: "10.1rem" }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ThirdForm;
