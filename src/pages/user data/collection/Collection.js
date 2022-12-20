import React, { useState, useEffect } from "react";
import "../../../styles/user data/userdata.css";
import CommonSection from "../common-section/CommonSection";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Axios from "axios";
import { API_BASE_URL, API_ROUTES } from "../../../constants/ApiBaseUrl";
import Spinner from "../../../components/spinner/Spinner";

const Collection = () => {
  const [allNft, setAllNft] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [custody, setCustody] = useState("");

  useEffect(() => {
    getAllNft();
  }, []);

  const { id } = JSON.parse(localStorage.getItem("auth_user"));
  const getAllNft = async () => {
    try {
      setLoading(true);
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.USER.USER_COLLECTION}`,
        {
          id,
        }
      );
      // console.log("get all nft", res.data);
      setAllNft(res.data);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Spinner loading={loading} />
      <div className="container">
        <div className="row">
          <CommonSection />
        </div>
        <h1 className="font-weight-bold mt-5 mb-5">Your Collection</h1>
        <div className="row">
          {allNft.length > 0 ? (
            allNft.map((nft) => {
              return (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                  <div className="buy-nft-parent">
                    <div className="">
                      <img src={nft.nft_url} alt="" className="buy-nft-img" />
                    </div>
                    <div className="collection-box  p-3 ">
                      <h4 className="font-weight-bold buy-title">{nft.name}</h4>

                      <div className="buy-now-footer pt-3">
                        <div className="d-flex justify-content-end">
                          <div className="d-flex align-items-center">
                            <button
                              className="header-btn text-dark font-weight-bold"
                              style={{ background: "#7bd7ab" }}
                              onClick={(e) =>
                                navigate("/view-nft", {
                                  state: {
                                    id: nft.id,
                                  },
                                })
                              }
                            >
                              View NFT
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <div className="w-100">
                <h5 className="" style={{ color: "red" }}>
                  <marquee>
                    {" "}
                    No NFTs are currently available in the collection.
                  </marquee>
                </h5>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Collection;
