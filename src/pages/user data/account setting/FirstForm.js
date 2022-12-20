import React, { useState } from "react";
import { toast } from "react-toastify";
import Axios from "axios";
import { API_BASE_URL, API_ROUTES } from "../../../constants/ApiBaseUrl";
import { useNavigate } from "react-router-dom";

const FirstForm = () => {
  const navigate = useNavigate();
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const [usernames, setUserNames] = useState("");
  const [discordUser, setDiscordUser] = useState("");
  const [twitterUser, setTwitterUser] = useState("");

  const { username } = JSON.parse(localStorage.getItem("auth_user"));

  const { email } = JSON.parse(localStorage.getItem("auth_user"));

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
    const { id, email } = JSON.parse(localStorage.getItem("auth_user"));
    var uname;
    if (usernames) {
      uname = usernames;
    } else {
      uname = username;
    }
    try {
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.USER.ACCOUNT_SETTING_FIRST_FORM}`,
        {
          id,
          email,
          password,
          username: uname,

          discord_username: discordUser,
          twitter_handle: twitterUser,
        }
      );

      // console.log("first form", res);

      if (res.status === 200) {
        toast.success(res.data.message);
        localStorage.setItem("auth_user", JSON.stringify(res.data));
        // window.location.reload();
        setEmails("");
        setUserNames("");
        setPassword("");

        setDiscordUser("");
        setTwitterUser("");
        window.location.href = "/user-info";
        // navigate("/user-info");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="">
      <div className="">
        <h5 className="font-weight-bold">Change Account Information</h5>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label className=" forms-labelss userinfo-labels">User Name*</label>
            <input
              type="text"
              class="form-control"
              placeholder="user name"
              defaultValue={username}
              onChange={(e) => setUserNames(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label className=" forms-labelss userinfo-labels">Email*</label>
            <input
              type="email"
              class="form-control"
              placeholder="email"
              defaultValue={email}
              onChange={(e) => setEmails(e.target.value)}
            />
          </div>

          <div className="d-flex">
            <div class="form-group mr-4">
              <label className=" forms-labelss userinfo-labels">
                Discord Username
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="@"
                value={discordUser}
                onChange={(e) => setDiscordUser(e.target.value)}
              />
            </div>

            <div class="form-group">
              <label className=" forms-labelss userinfo-labels">
                Twitter Handle
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="@"
                value={twitterUser}
                onChange={(e) => setTwitterUser(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            class="common-btn text-dark font-weight-bold mt-4 first-btn "
            style={{ background: "#7bd7ab" }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirstForm;
