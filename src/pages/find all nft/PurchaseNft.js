import React, { useState, useEffect } from "react";
import "../../styles/find all nft/nft.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import Paypal from "./Paypal";

import Spinner from "../../components/spinner/Spinner";

const PurchaseNft = () => {
  const location = useLocation();
  const [id, setId] = useState("");
  const [getNft, setGetNft] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // let fees = 2.49;

  useEffect(() => {
    // setId(location.state.id);

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
      }, 2000);
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
          <span
            className="mb-4 "
            onClick={(e) =>
              navigate("/nft-info", {
                state: {
                  id: getNft.id,
                },
              })
            }
          >
            {" "}
            {/* <Link to="/nft-info"> */}
            <img
              src="/assets/images/Arrow.png"
              alt=""
              className="pl-3"
              style={{ cursor: "pointer" }}
            />
            {/* </Link> */}
          </span>
        </div>
        <div className="row row-item">
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="pr-5 first-col">
              <div className="img">
                <img src="/assets/images/card-images.png" alt="" />
              </div>
              <div
                className="pt-3"
                style={{ borderBottom: "2px solid lightGrey" }}
              >
                <h3
                  className="font-weight-bold"

                  // style={{ background: "black", color: "white", padding: "6px" }}
                >
                  Select a payment method
                </h3>
                <h6 className="font-weight-bold">
                  {" "}
                  All transactions are secured and encrypted
                </h6>
              </div>
              <div className="mt-5 paypl" style={{ width: "60%" }}>
                <Paypal price={getNft.price} nftid={location.state.id} />
              </div>
            </div>
            <div>
              {/* <span className="ml-4">
              <img
                src="https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Powered-by-Stripe-Logo.wine.svg" //   width={200}
                height={39}
                width={254}
                //   height={76}
                //   width={254}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                alt=""
              />
            </span> */}
            </div>
          </div>
          <div className="col-lg-5  col-md-12 col-sm-12 col-12 second-col mb-3">
            {" "}
            <div className="purchase-parent ">
              <div className="d-flex justify-content-between ">
                <div className="">
                  <h3 className="font-weight-bold">Your NFT Purchase</h3>
                  <h5 className="font-weight-bold pt-3">{getNft.name}</h5>
                </div>

                <div className="">
                  <img
                    src={getNft.nft_url}
                    alt=""
                    height={80}
                    width={70}
                    style={{ borderRadius: "20px" }}
                  />
                </div>
              </div>

              <div
                className="d-flex justify-content-between nft-desc pt-5 mt-5 "
                style={{ borderTop: "2px solid #000000" }}
              >
                <span>Price</span>
                <span>${getNft.price}</span>
              </div>
              <div className="d-flex justify-content-between nft-desc">
                <span>Fees</span>
                <span>$0.00</span>
              </div>
              <div
                className="d-flex justify-content-between pt-3"
                style={{ borderTop: "2px solid #999999" }}
              >
                <span>
                  {" "}
                  <h5 className="font-weight-bold">Total</h5>
                </span>
                <span className="font-weight-bold">${getNft.price}</span>
              </div>
            </div>
          </div>
          {/* col end */}
        </div>
      </div>
    </>
  );
};

export default PurchaseNft;
