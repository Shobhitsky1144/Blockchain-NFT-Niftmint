import React, { useState, useEffect } from "react";
import "../../styles/find all nft/nft.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { GiDiamonds } from "react-icons/gi";
import Axios from "axios";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import Spinner from "../../components/spinner/Spinner";
import { toast } from "react-toastify";

const NftInfo = () => {
  const location = useLocation();
  const [id, setId] = useState("");
  const [getNft, setGetNft] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setId(location.state.id);

    getFullDetails();
  }, [location.state.id]);
  // console.log(location);
  const getFullDetails = async () => {
    try {
      setLoading(true);
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.NFT.MARKET_NFT_INFO}`,
        {
          id: location.state.id,
        }
      );
      // console.log("nft", res.data);
      setGetNft(res.data);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const addCart = async () => {
    var { id } = JSON.parse(localStorage.getItem("auth_user"));
    try {
      //  setLoading(true);
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.CART.ADD_TO_CART}`,
        {
          user_id: id,
          nft_id: location.state.id,
        }
      );
      // console.log("cart data", res.data);
      toast.success(res.data);

      //  setTimeout(function () {
      //    setLoading(false);
      //  }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <Spinner loading={loading} />
      <div className="container mt-5 mb-5">
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-8 ">
            <div className="pr-lg-5">
              <Link to="/">
                <img
                  src="/assets/images/Arrow.png"
                  alt="nft pic"
                  className=""
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <div className="heading pt-4">
                <h1 className="font-weight-bold nft-titles">{getNft.name}</h1>
              </div>
              <div className="nft-pic  ">
                <div className="d-flex justify-content-between pt-3 pb-2 ">
                  <div className="">
                    <span>
                      <h5 className="font-weight-bold">Organization Name</h5>
                    </span>
                  </div>
                  <div className="font-weight-bold">
                    <span className="pr-2">
                      <RiSendPlaneFill size={30} />
                    </span>
                    <span>
                      <AiOutlineHeart size={30} />
                    </span>
                  </div>
                </div>
                <img
                  src={getNft.nft_main_url}
                  alt="nft pic"
                  className="w-100 "
                  style={{ borderRadius: "20px" }}
                />
              </div>
              <div className="details-section pt-5 pr-5">
                <div className="">
                  <h4 className="font-weight-bold">Items Information</h4>

                  <div className="form mt-4">
                    <div
                      class="form-group"
                      style={{ borderBottom: "1px solid lightGray" }}
                    >
                      <label for="pwd" className="forms-labelss">
                        Description
                      </label>
                      <div className="home-data nft-desc">
                        {getNft.desc ? getNft.desc : "Description of Product"}
                      </div>
                    </div>

                    <div
                      class="form-group"
                      style={{ borderBottom: "1px solid lightGray" }}
                    >
                      <label for="pwd" className="forms-labelss">
                        Utility
                      </label>
                      <div className="home-data nft-desc">
                        {getNft.utility
                          ? getNft.utility
                          : "Description of Utility"}{" "}
                      </div>
                    </div>

                    <div
                      class="form-group"
                      style={{ borderBottom: "1px solid lightGray" }}
                    >
                      <label for="pwd" className="forms-labelss">
                        About (Organization)
                      </label>
                      <div className="home-data nft-desc">
                        {getNft.org
                          ? getNft.org
                          : "Description of Organization"}
                      </div>
                    </div>

                    <div
                      class="form-group"
                      style={{ borderBottom: "1px solid lightGray" }}
                    >
                      <label for="pwd" className="forms-labelss">
                        Properties
                      </label>
                      <div className="home-data nft-desc">
                        {getNft.properties
                          ? getNft.properties
                          : "Boxes of each Property if added by organization"}{" "}
                      </div>
                    </div>

                    <div
                      class="form-group"
                      style={{ borderBottom: "1px solid lightGray" }}
                    >
                      <label for="pwd" className="forms-labelss">
                        Levels
                      </label>
                      <div className="home-data nft-desc">
                        {getNft.levels
                          ? getNft.levels
                          : "Boxes of each Level if added by organization"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* second section  */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
            <div className="pt-5 mt-1">
              <div className="">
                <h5 className="font-weight-bold pb-2">
                  How your NFT will look in your Wallet
                </h5>
              </div>

              <div className="">
                <img
                  src={getNft.nft_url}
                  className="w-100"
                  style={{ borderRadius: "20px" }}
                />
              </div>

              {/* box  */}

              <div className="box  buy-now-box p-3 " style={{ top: "-8rem" }}>
                <div className="d-flex justify-content-between ">
                  <span>
                    <h5 className="font-weight-bold">Item Name</h5>
                  </span>
                  <span className="font-weight-bold">
                    <AiOutlineHeart size={30} />
                  </span>
                </div>
                <div className="d-flex pt-1 pb-1 ">
                  <div className="d-flex flex-column  mr-4">
                    <span className="nft-head ">Reserve Price</span>
                    <span className="font-weight-bold pt-1 d-flex align-items-center">
                      {/* <GiDiamonds className="mr-2" /> */}${getNft.price}
                    </span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="nft-head">Likes</span>
                    <span className="font-weight-bold pt-1 d-flex align-items-center">
                      <AiTwotoneHeart className="mr-2" /> 0
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between pt-3 pb-1">
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
                    <div className="d-flex align-items-center">
                      <h6 style={{ margin: "auto" }}>@{getNft.custody}</h6>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <GrGallery size={37} />
                  </div>
                </div>
              </div>
              <div
                className="w-100 "
                style={{ marginTop: "-7rem", marginBottom: "47px" }}
                // 90px
              >
                <button
                  type="submit"
                  className="w-100 p-1 font-weight-bold common-btn"
                  style={{
                    background: "#7BD7AB",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={(e) =>
                    navigate("/purchase-nft", {
                      state: {
                        id: getNft.id,
                      },
                    })
                  }
                >
                  Buy
                </button>

                <button
                  className="w-100 p-1 font-weight-bold common-btn mt-3"
                  style={{
                    background: "#7BD7AB",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={addCart}
                >
                  Add To Cart
                </button>
              </div>

              <div className="form">
                <div
                  class="form-group"
                  style={{ borderBottom: "1px solid lightGray" }}
                >
                  <label for="pwd" className="forms-labelss">
                    Contract Address
                  </label>
                  <div className="home-data nft-desc">
                    {getNft.contract_address}
                  </div>
                </div>

                {/* <div
                class="form-group"
                style={{ borderBottom: "1px solid lightGray" }}
              >
                <label for="pwd" className="forms-labelss">
                  Token ID
                </label>
                <div className="home-data nft-desc">{getNft.token_id}</div>
              </div> */}

                <div
                  class="form-group"
                  style={{ borderBottom: "1px solid lightGray" }}
                >
                  <label for="pwd" className="forms-labelss">
                    Blockchain
                  </label>
                  <div className="home-data nft-desc">{getNft.blockchain}</div>
                </div>

                <div
                  class="form-group"
                  style={{ borderBottom: "1px solid lightGray" }}
                >
                  <label for="pwd" className="forms-labelss">
                    Token Standard
                  </label>
                  <div className="home-data nft-desc">
                    {getNft.token_standard}
                  </div>
                </div>

                {/* <div
                class="form-group"
                style={{ borderBottom: "1px solid lightGray" }}
              >
                <label for="pwd" className="forms-labelss">
                  Metadata
                </label>
                <div className="home-data nft-desc">Centralized</div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftInfo;
