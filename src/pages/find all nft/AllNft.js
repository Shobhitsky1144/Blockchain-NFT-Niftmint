import React, { useState, useEffect } from "react";
import "../../styles/find all nft/nft.css";
import { BiCategory, BiSort } from "react-icons/bi";
import { BsCollectionPlay } from "react-icons/bs";
import { RiSortAsc } from "react-icons/ri";
import { CgArrowsShrinkH } from "react-icons/cg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Axios from "axios";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import Spinner from "../../components/spinner/Spinner";
import HomeDialog from "../../components/dialog modal/HomeDialog";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import PriceRangePopup from "./PriceRangePopup";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AllNft = () => {
  const [allNft, setAllNft] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [custody, setCustody] = useState("");
  const [visited, setVisited] = useState(false);

  const [isVisit, setIsVisit] = useState(false);

  const [show, setShow] = useState(false);

  const [registerVisit, setReVisted] = useState(false);

  const [price, setPrice] = React.useState([200, 500]);

  const [sortValue, setSortValue] = useState("");

  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const handlePriceRange = (data) => {
    setAllNft(data);
  };

  // useEffect(() => {
  //   var { isVisited } = JSON.parse(localStorage.getItem("auth_user"));
  //   if (isVisited === true) {
  //     setVisited(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   // var { isVisited } = JSON.parse(localStorage.getItem("auth_user"));
  //   var vis = JSON.parse(localStorage.getItem("visted"));
  //   if (vis === false) {
  //     setVisited(true);
  //   } else {
  //     getAllNft();
  //   }
  // }, [visited]);

  // useEffect(() => {
  //   const vis = false;
  //   // var { isVisited } = JSON.parse(localStorage.getItem("auth_user"));
  //   // var ip = false;
  //   var ip = JSON.parse(localStorage.getItem("visted"));

  //   if (isVisit === false) {
  //     setVisited(true);
  //   } else {
  //     // setVisited(false);
  //     getAllNft();
  //   }
  // }, [isVisit]);

  const getAllNft = async () => {
    var { id } = JSON.parse(localStorage.getItem("auth_user"));
    try {
      setLoading(true);
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.USER.WELCOME_USER}`,
        { id }
      );
      // console.log("get all nft", res.data);
      localStorage.setItem("visted", JSON.stringify(res.data.visted));
      // setReVisited(res.data.visted);
      // localStorage.setItem();
      setIsVisit(res.data.visted);
      setAllNft(res.data.nfts);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);

    const res = await Axios.post(
      `${API_BASE_URL}${API_ROUTES.NFT.GET_ALL_NFT}${value}`,
      {
        nfts: allNft,
      }
    );
    // console.log("sorting res", res.data);
    setAllNft(res.data);
  };

  // Changing price when volume increases/decreases

  // const rangeSelector = (event, newValue) => {
  //   setPrice(newValue);
  // };

  // const handleChangeCommitted = (event, newValue) => {
  //   // Here will only be triggered once the user releases the slider.
  //   handlePriceRange();
  // };

  // const handlePriceRange = async () => {
  //   const res = await Axios.get(`${API_BASE_URL}/nft/getAllNft?query=${price}`);
  //   console.log("price range response", res.data);
  // };

  return (
    <>
      {/* {console.log("allNft", visited)} */}
      <Spinner loading={loading} />
      {/* {visited === true ? ( */}
      <HomeDialog handleCall={getAllNft} />
      {/* ) : (
        ""
      )} */}
      {/* {visited ? <Spinner loading={loading} /> : ""} */}
      <div className="container">
        <h1 className="font-weight-bold mt-5 mb-4">Find the NFT for you !</h1>
        <div className="row mb-5 font-weight-bold">
          <div className=" col-sm-12 col-md-12 col-lg-10 d-flex flex-wrap">
            <div className="div-func mr-4 d-flex align-items-center">
              <span className="mr-2 d-flex">
                <img src="/assets/images/category.png" alt="" height={15} />
              </span>
              <span>Category</span>
            </div>
            <div className="div-func mr-4 d-flex align-items-center">
              <span className="mr-2 d-flex">
                <BsCollectionPlay />
              </span>
              <span>Collection</span>
            </div>
            <div className="div-func mr-4 d-flex align-items-center">
              {" "}
              <span className="mr-2 d-flex">
                <CgArrowsShrinkH />
              </span>
              <span>Sale Type</span>
            </div>
            <div
              className="div-func d-flex align-items-center"
              // onClick={() => setShow(!show)}
            >
              {" "}
              <PriceRangePopup handleRange={handlePriceRange} allNft={allNft} />
            </div>

            {/* <div className="d-flex align-items-center min-max-price-parent">
                <input
                  className="mr-1 range-input ml-1"
                  type="number"
                  placeholder="$Min"
                />
                <input
                  className="mr-1 range-input"
                  type="number"
                  placeholder="$Max"
                />
                <button className="go-btn">Go</button>
              </div> */}
          </div>
          <div className=" col-sm-12 col-md-12 col-lg-2 d-flex justify-content-end second-section-sorting">
            <div className=" d-flex align-items-center" id="sortnft">
              <span className="mr-2 d-flex ">
                {/* <BiSort /> */}
                <img src="/assets/images/sort.png" alt="" height={15} />
              </span>
              <select
                name=""
                id="sortitem"
                onChange={handleSort}
                value={sortValue}
              >
                <span>Sort By</span>
                <option value="" selected disabled hidden>
                  Sort By
                </option>
                <option value="Asc">Low To High</option>
                <option value="Desc">High To Low</option>
                {/* <option value="newset">Newest</option>*{" "} */}
              </select>

              {/* <FormControl sx={{ m: 1, minWidth: 96 }}>
                <InputLabel
                  id="demo-simple-select-autowidth-label"
                  className="font-weight-bold"
                  style={{ fontFamily: "Urbanist" }}
                >
                  Sort By{" "}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  onChange={handleSort}
                  value={sortValue}
                  autoWidth
                  label=" Sort By"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Asc">Low To High</MenuItem>
                  <MenuItem value="Desc">High To Low</MenuItem>
                </Select>
              </FormControl> */}
            </div>
          </div>
        </div>
        <div className="row">
          {allNft.length > 0 ? (
            allNft.map((nft) => {
              return (
                <>
                  {/* {nft.custody === "niftmint" ? ( */}
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="buy-nft-parent">
                      <div className="">
                        <img src={nft.nft_url} alt="" className="buy-nft-img" />
                      </div>
                      <div className="buy-now-box  p-3 ">
                        <h4 className="font-weight-bold buy-title">
                          {nft.name}
                        </h4>
                        <div className="d-flex justify-content-between pt-2">
                          <div className="d-flex flex-column">
                            <span className="buy-heading">Price</span>
                            <span className="pt-1 buy-desc font-weight-bold">
                              ${nft.price}
                            </span>
                          </div>
                          {/* <div className="d-flex flex-column">
                            <span className="buy-heading">End in</span>
                            <span className="pt-1 buy-desc font-weight-bold">
                              30m 22s
                            </span>
                          </div> */}
                        </div>

                        <div className="buy-now-footer pt-3">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <div className="pr-1">
                                <img
                                  src="/assets/images/favicon.png"
                                  alt=""
                                  className="buy-user-img"
                                  style={{
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    height: "40px",
                                    width: "40px",
                                  }}
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <span className="buy-heading">
                                  Organization
                                </span>
                                <h6 className="niftmint-heading">
                                  @{nft.custody}
                                </h6>
                              </div>
                            </div>

                            <div className="d-flex align-items-center">
                              {/* {console.log(nft)} */}
                              <button
                                className="header-btn text-dark font-weight-bold"
                                style={{ background: "#7bd7ab" }}
                                onClick={(e) =>
                                  navigate("/nft-info", {
                                    state: {
                                      id: nft.id,
                                    },
                                  })
                                }
                              >
                                Buy
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ) : (
                    ""
                  )} */}
                </>
              );
            })
          ) : (
            <>
              <div className="w-100">
                <h5 className="" style={{ color: "red" }}>
                  <marquee> NFTs will be available soon.</marquee>
                </h5>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AllNft;
