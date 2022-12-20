import React, { useState, useEffect } from "react";
import "../../styles/cart/cart.css";
import { AiFillDelete } from "react-icons/ai";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import Axios from "axios";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import Spinner from "../../components/spinner/Spinner";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const [allNft, setAllNft] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [loading, setLoading] = useState(false);
  var { id } = JSON.parse(localStorage.getItem("auth_user"));

  var total = 0;
  var fees = 4;

  useEffect(() => {
    getAllNft();
  }, []);

  const getAllNft = async () => {
    try {
      setLoading(true);
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.CART.CART_ITEM}`,
        { user_id: id }
      );
      // console.log("cart page", res.data);
      setAllNft(res.data.nftList);
      setTotalPrice(res.data.totalPrice);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCartItem = async (nftid) => {
    try {
      // setLoading(true);
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.CART.DELETE_CART_ITEM}`,
        {
          user_id: id,
          nft_id: nftid,
        }
      );
      // console.log("delete item", res.data);
      setAllNft(res.data.nftList);
      setTotalPrice(res.data.price);
      // setTimeout(function () {
      //   setLoading(false);
      // }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Spinner loading={loading} />
      <div className="container mt-5 mb-5">
        <div className="row ">
          <div className="col-lg-7 col-md-122  col-sm-12 col-12">
            <div className="cart">
              <div>
                <h4 className="font-weight-bold p-3 ">
                  My Cart ({allNft.length})
                </h4>
              </div>
              {allNft && allNft.length != 0 ? (
                allNft.map((nft) => {
                  total += nft.price + fees;

                  return (
                    <>
                      {/* {console.log("t", total)} */}
                      <div className="cart-parent">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex ">
                            <div>
                              <img
                                src={nft.nft_url}
                                width={180}
                                height={180}
                                className="cart-img"
                              />
                            </div>

                            <div className=" ">
                              <div className="pl-3">
                                <h5 className="nft-name">{nft.name}</h5>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <img src="/assets/images/favicon.png" />
                                  </div>
                                  <div className="d-flex align-items-center">
                                    {/* <h5>Organization</h5> */}
                                    <h6 className="d-flex align-items-center cart-text-color m-auto">
                                      @niftmint
                                    </h6>
                                  </div>
                                </div>
                                <h6 className="font-weight-bold pt-4 pb-4 amount">
                                  ${nft.price}
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-end ">
                            <RiDeleteBin6Line
                              className="delete-icon "
                              size={20}
                              title="delete"
                              onClick={() => deleteCartItem(nft.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div className="d-flex align-items-center justify-content-center">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-center">
                      <MdOutlineRemoveShoppingCart size={60} />
                    </div>
                    <div className="">
                      <h2 className="font-weight-bold pt-4">
                        Your cart is empty!
                      </h2>
                    </div>
                  </div>
                  {/* <br />
                  <p>Add items to it now.</p>
                  <div className="mt-1 d-fle justify-content-end checkout">
                    <button
                      className="header-btn text-white d-flex justify-content-end cart-btn"
                      // style={{ background: "black" }}
                    >
                      Shop Now
                    </button>
                  </div> */}
                </div>
              )}
            </div>
          </div>

          {/* second  */}
          <div className="col-lg-5 col-md-12 mt-lg-0 mt-5 mt-md-5 mt-sm-5  col-sm-12 col-12">
            <div className="cart">
              <div>
                <h4 className="font-weight-bold p-3">Price Details</h4>
              </div>

              <div className="cart-parent">
                <div className="d-flex justify-content-between py-2 nft-desc">
                  <div>
                    <h5 className="cart-text">Price ({allNft.length} items)</h5>
                  </div>
                  <div>
                    <h5 className="cart-text">${totalPrice}</h5>
                  </div>
                </div>

                <div className="d-flex justify-content-between py-2  nft-desc">
                  <div>
                    <h5 className="cart-text">Fees</h5>
                  </div>
                  <div>
                    <h5 className="cart-text">$0.00</h5>
                  </div>
                </div>

                <div
                  className="d-flex justify-content-between my-3 py-3"
                  style={{
                    borderTop: "2px dotted lightGray",
                    borderBottom: "2px dotted lightGray",
                  }}
                >
                  <div>
                    <h6 className="font-weight-bold">Total Amount</h6>
                  </div>
                  <div>
                    <h6 className="font-weight-bold">${totalPrice}</h6>
                  </div>
                </div>
              </div>
              <div className="mt-1 d-flex justify-content-end checkout">
                <button
                  className={` ${
                    totalPrice === 0
                      ? " text-white d-flex justify-content-end cart-btn cart-btn-disable"
                      : "header-btn text-white d-flex justify-content-end cart-btn"
                  }`}
                  // style={{ background: "black" }}
                  disabled={totalPrice === 0}
                >
                  CheckOut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
