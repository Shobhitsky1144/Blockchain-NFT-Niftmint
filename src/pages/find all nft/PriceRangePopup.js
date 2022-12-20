import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../../styles/find all nft/nft.css";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import { toast } from "react-toastify";
import Axios from "axios";

export default function PriceRangePopup({ handleRange, allNft }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const validateForm = (e) => {
    e.preventDefault();

    if (!min || !max) {
      toast.error("Please fill all the fields.");
      return false;
    } else {
      handlePrice();
    }
  };

  const handlePrice = async () => {
    const { id } = JSON.parse(localStorage.getItem("auth_user"));
    try {
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.NFT.GET_ALL_NFT_BY_PRICE_RANGE}`,
        {
          id,
          min,
          max,
          nfts: allNft,
        }
      );

      if (res.status === 200) {
        // console.log("price", res.data);

        setMin("");
        setMax("");
        handleRange(res.data);
        handleClose();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ padding: "6px 0px" }}
      >
        <span className="mr-2 d-flex Font-weight-bold ">
          <img src="/assets/images/range.png" alt="" height={15} />
        </span>
        <span
          className="text-dark font-weight-bold"
          style={{
            textTransform: "none",
            fontFamily: "Urbanist",
            fontSize: "16px",
          }}
        >
          {" "}
          Price Range
        </span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="d-flex align-items-center min-max-price-parent">
          <input
            className="mr-3 range-input ml-1"
            type="number"
            placeholder="$Min"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
          <input
            className="mr-3 range-input "
            type="number"
            placeholder="$Max"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
          <button className="go-btn" onClick={validateForm}>
            Go
          </button>
        </div>
      </Menu>
    </div>
  );
}
