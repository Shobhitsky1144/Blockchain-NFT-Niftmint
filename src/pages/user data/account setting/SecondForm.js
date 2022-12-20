import React, { useState } from "react";
import { toast } from "react-toastify";
import Axios from "axios";
import { API_BASE_URL, API_ROUTES } from "../../../constants/ApiBaseUrl";

const SecondForm = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const validateForm = (e) => {
    e.preventDefault();

    if (!password || !newPassword || !confirmNewPassword) {
      toast.error("Please fill all the fields.");
      return false;
    } else if (password.length < 6) {
      toast.error("Password length must be greater than 6 characters.");
      return false;
    } else if (newPassword !== confirmNewPassword) {
      toast.error("Passwords do not match.");
      return false;
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const { id } = JSON.parse(localStorage.getItem("auth_user"));
    try {
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.USER.ACCOUNT_SETTING_SECOND_FORM}`,
        {
          id,
          password,
          newPassword,
        }
      );

      // console.log("second form", res);

      if (res.status === 200) {
        toast.success(res.data.message);

        setPassword("");
        setConfirmNewPassword("");
        setNewPassword("");

        // localStorage.setItem("auth_user", JSON.stringify(res.data));
        // navigate("/user-bio");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="second-container">
      <div className="">
        <h5 className="font-weight-bold">Change Password</h5>
        <h6 className="account-desc">Update User Name, Email, Discord</h6>
        <form className="mt-5" onSubmit={validateForm}>
          <div class="form-group">
            <label className=" forms-labelss userinfo-labels">
              Current Password*
            </label>
            <input
              type="password"
              placeholder="******"
              class="form-control"
              // placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label className=" forms-labelss userinfo-labels">
              New Password*
            </label>
            <input
              type="password"
              placeholder="******"
              class="form-control"
              // placeholder="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label className=" forms-labelss userinfo-labels">
              Confirm New Password*
            </label>
            <input
              type="password"
              placeholder="******"
              class="form-control"
              // placeholder="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>

          <div class="form-group mb-5 second-msg">
            <h6 className="font-weight-bold userinfo-labels">
              You will receive a message confirming your request.
            </h6>
          </div>

          <button
            type="submit"
            class="common-btn text-dark font-weight-bold  second-btn"
            style={{ background: "#7bd7ab", marginTop: "45px" }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default SecondForm;
