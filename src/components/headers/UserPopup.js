import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { RiUserShared2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function UserPopup() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [style, setStyle] = useState({ display: "none" });
  const [user, setUser] = useState("");
  // const [username, setUsername] = useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.clear();
    navigate("/login");
  };
  const [findUser, setFindUser] = useState("");

  // useEffect =
  //   (() => {
  //     const { username } = JSON.parse(localStorage.getItem("auth_user"));
  //     setFindUser({ username });
  //   },
  //   [findUser]);
  // useEffect(() => {
  const { username } = JSON.parse(localStorage.getItem("auth_user"));
  //   setUsername(username);
  // }, [username]);

  return (
    <div>
      {/* {console.log(username)} */}
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // onMouseEnter={
        //   // setStyle({ display: "block" });
        //   handleClick
        // }

        // onMouseLeave={handleClose}
      >
        {/* <RiUserShared2Fill size={25} style={{ color: "#3bb777" }} /> */}
        <img
          src="/assets/images/rock.jpg"
          alt=""
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <span
          className="font-weight-bold pl-1 popup-username"
          style={{
            textTransform: "none",
            color: "#3bb777",
            fontSize: "17px",
          }}
        >
          @{username ? username : "add username"}
        </span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        // style={style}
        // onMouseover={handleClose}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
        <Link to="/user-info" className="common-link">
          {" "}
          <MenuItem onClick={handleClose} className="menu-text  ">
            My account
          </MenuItem>
        </Link>

        <Link to="/cart" className="common-link">
          {" "}
          <MenuItem onClick={handleClose} className="menu-text  ">
            My cart
          </MenuItem>
        </Link>
        {/* <Link to="/edit-profile" className="common-link">
          {" "}
          <MenuItem onClick={handleClose} className="menu-text ">
            {username ? "Edit Profile" : "Add Profile"}
          </MenuItem>
        </Link> */}
        <MenuItem onClick={logoutUser} className="menu-text ">
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
