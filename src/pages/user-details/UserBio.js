import React, { useState, useEffect } from "react";
import HomeHeader from "../../components/headers/HomeHeader";
import "../../styles/users style/userbio.css";
// import "../../styles/commonstyle.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "axios";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";

const UserBio = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState("");

  const [bio, setBio] = useState("");

  useEffect(() => {
    const { bio } = JSON.parse(localStorage.getItem("auth_user"));
    if (bio !== null) {
      navigate("/");
    }
  }, []);

  const validateForm = (e) => {
    e.preventDefault();

    if (!bio) {
      toast.error("Please fill all the fields.");
      return false;
    } else {
      handleSubmit();
    }
  };
  const { username } = JSON.parse(localStorage.getItem("auth_user"));
  const { email } = JSON.parse(localStorage.getItem("auth_user"));
  const handleSubmit = async () => {
    try {
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.USER.COMPLETE_BIO}`,
        {
          email,
          bio,
        }
      );

      // console.log("Bio", res);

      setBio("");

      if (res.status === 200) {
        toast.success("Submitted successfully.");
        localStorage.setItem("auth_user", JSON.stringify(res.data));
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const uploadImage = () => {
    document.getElementById("userimg").click();
  };

  const imageHandler = (e) => {
    // console.log("ff", e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
      {/* <HomeHeader /> */}

      <div className="container d-flex justify-content-center align-items-center mt-3 mb-3">
        <div className="row justify-content-center userbio-account-row">
          <div
            className="col-12 col-sm-10  col-md-10 col-lg-10 userbio-account-section py-5 "
            style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
          >
            <div className="header">
              <h2 className="title font-weight-bold text-dark">
                Add a Profile Picture
              </h2>
              <p className="text">
                Finish your profile by adding a profile picture and completing
                your Bio.
              </p>
            </div>
            <div className="form">
              {/* {console.log("img", image)} */}

              <form onSubmit={validateForm}>
                <div class="form-group hero-section">
                  {image ? (
                    <img
                      src={image}
                      alt="user-profile"
                      className="bio-img"
                      onClick={uploadImage}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <img
                      src="/assets/images/rock.jpg"
                      alt="user-profile"
                      className="bio-img"
                      onClick={uploadImage}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                  <span className="camera-div">
                    <img
                      src="/assets/images/camera.png"
                      alt="Upload Image..."
                      className="camera-img"
                      onClick={uploadImage}
                      style={{ width: "20px", height: "20px" }}
                    />
                  </span>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    name=""
                    id="userimg"
                    accept="image/*"
                    // value={image}
                    onChange={imageHandler}
                  />
                  <span className="user-heading">User Name</span>
                  {/* <br /> */}
                  <span className="username">@{username}</span>
                </div>
                <div class="form-group">
                  <label className="forms-labels " style={{ color: "#3bb777" }}>
                    Bio
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="form-control textarea"
                    cols="10"
                    rows="2"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell us something about yourself"
                  ></textarea>
                </div>

                <div className="d-flex justify-content-between mt-4 divide-row">
                  <div className=" userbio-account-section">
                    <Link to="/">
                      <button
                        // type="submit"
                        className="userbio-account-btn  text-white"
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
                  <div className=" userbio-account-section">
                    <button
                      type="submit"
                      className="userbio-account-btn text-white "
                      style={{ borderRadius: "5px", cursor: "pointer" }}
                    >
                      {" "}
                      Continue
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

export default UserBio;
