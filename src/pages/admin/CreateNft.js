import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import "../../styles/admin/createnft.css";
import CustomizedSwitches from "./Switch";
import { ImUpload } from "react-icons/im";

import { RiDeleteBin6Line } from "react-icons/ri";

const CreateNft = () => {
  const [fop, setFop] = useState("");
  const [check, setCheck] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    // console.log("a", acceptedFiles[0]);
    setCheck(acceptedFiles[0].type);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFop(reader.result);
      }
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // useEffect(() => {
  //   if (check) {
  //     onDrop();
  //   }
  // }, [check]);

  return (
    <div className="container mt-5 mb-5">
      {/* {console.log("fop", fop)} */}
      <div className="row ">
        <div className="col-12 col-sm-12 col-md-6 col-lg-8 ">
          <div className="pr-lg-5">
            {/* <Link to="/home">
              <img
                src="/assets/images/Arrow.png"
                alt="nft pic"
                className=""
                style={{ cursor: "pointer" }}
              />
            </Link> */}
            <div className="heading pt-4">
              <h1 className="font-weight-bold nft-titles">Create Your NFT!</h1>
            </div>
            <div className="nft-pic  ">
              <div className="d-flex justify-content-between pt-3 pb-2 ">
                <div className="">
                  <span>
                    <h5 className="font-weight-bold">Upload file</h5>

                    <p className="nft-head ">
                      Drag or choose your file to upload
                    </p>
                  </span>
                </div>
              </div>
              {/* <img
                src="/assets/images/wave-h.png"
                alt="nft pic"
                className="w-100"
              /> */}

              <div
                {...getRootProps()}
                className="drag-parent form-control d-flex justify-content-center align-items-center"
              >
                <input
                  {...getInputProps()}
                  // type="file"
                  // disabled
                  // accept="image/png, image/gif,"
                />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  // fop ? (
                  //   <div style={{ wordBreak: "break-word" }}> {fop}</div>
                  // ) :
                  <div>
                    <div className="d-flex justify-content-center">
                      <ImUpload size={30} />
                    </div>
                    <div className="pt-3">
                      <p style={{ color: "#999999" }}>PNG, GIF, WEBP or MP4</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="details-section pt-5 ">
              <div className="">
                <h4 className="font-weight-bold">Items Information</h4>

                <div className="form mt-4">
                  <div class="form-group">
                    <label for="pwd" className="forms-labelss">
                      Item Name
                    </label>
                    <div className="home-data nft-desc">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Item Name"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="pwd" className="forms-labelss">
                      Description
                    </label>
                    <div className="home-data nft-desc">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Ex : After purchasing you will able to recived the logo"
                      />
                    </div>
                  </div>

                  <div class="form-group mt-4">
                    <div className="d-flex justify-content-between">
                      <div>
                        <label for="pwd" className="forms-labelss">
                          Fixed Price
                        </label>
                      </div>

                      <div>
                        <CustomizedSwitches />
                      </div>
                    </div>
                    <div className="home-data nft-desc">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="This product will have a fixed price"
                      />
                    </div>
                  </div>

                  <div class="form-group  ">
                    <div className="d-flex justify-content-between">
                      <div className="home-data nft-desc select-parent">
                        <label for="pwd" className="forms-labelss">
                          Type of NFT
                        </label>

                        <select name="" className="create-nft-select-tag">
                          <option value="" selected disabled hidden>
                            Choose
                          </option>
                          <option value="Asc">Low To High</option>
                          <option value="Desc">High To Low</option>
                        </select>
                      </div>
                      <div className="home-data nft-desc select-parent">
                        <label for="pwd" className="forms-labelss">
                          Collection
                        </label>
                        <select name="" className="create-nft-select-tag">
                          <option value="" selected disabled hidden>
                            Choose
                          </option>
                          <option value="Asc">Low To High</option>
                          <option value="Desc">High To Low</option>
                        </select>
                      </div>

                      <div className="home-data nft-desc ">
                        <label for="pwd" className="forms-labelss">
                          Enter price
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="$"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group mt-4">
                    <div className="d-flex justify-content-between">
                      <div>
                        <label for="pwd" className="forms-labelss">
                          Private Content for Holders
                        </label>
                      </div>

                      <div>
                        <CustomizedSwitches />
                      </div>
                    </div>
                    <div className="home-data nft-desc">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Have unlockable content
                      striclty for your NFT holders"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="pwd" className="forms-labelss">
                      Enter Private Content
                    </label>
                    <div className="home-data nft-desc">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Add content details only for those who hold your NFT, for example: private events, access to deals or experiences, priority for your future NFT drops."
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="pwd" className="forms-labelss">
                      NFT Supply
                    </label>
                    <div className="home-data nft-desc">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="How many NFTs do you want to create."
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="pwd" className="forms-labelss">
                      Selcet Blockchain
                    </label>
                    <div className="home-data nft-desc">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Ethereum "
                      />
                    </div>
                  </div>

                  <div class="form-group mt-4">
                    <div className="d-flex justify-content-between">
                      <div>
                        <label for="pwd" className="forms-labelss">
                          Put on sale
                        </label>
                      </div>

                      <div>
                        <CustomizedSwitches />
                      </div>
                    </div>
                    <div className="home-data nft-desc">
                      <input
                        className="form-control"
                        type="text"
                        placeholder=" You’ll receive bids on this item
"
                      />
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
            <div className="d-flex justify-content-between align-items-center my-1">
              <div className="">
                <h5 className="font-weight-bold pb-2 m-auto">Preview Item</h5>
              </div>
              <div>
                {/* {fop ? (
                  <RiDeleteBin6Line
                    size={22}
                    onClick={() => setFop("")}
                    className="delete-icon"
                  />
                ) : (
                  ""
                )} */}
              </div>
            </div>
            <div className="">
              {/* {console.log(check)} */}
              {fop ? (
                <>
                  {/* {fop && check === "video/mp4" ? (
                    <video
                      className="w-100"
                      controls="controls"
                      style={{ cursor: "pointer" }}
                    >
                      <source src={fop} type="video/mp4" />
                    </video>
                  ) : ( */}
                  <img
                    src={fop}
                    className="w-100"
                    style={{ borderRadius: "20px" }}
                  />
                  {/* )} */}
                </>
              ) : (
                <img
                  src="/assets/images/wave-v.png"
                  className="w-100"
                  style={{ borderRadius: "20px" }}
                />
              )}
            </div>

            {/* box  */}

            <div className="box  buy-now-box p-3 " style={{ top: "-2rem" }}>
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
                    (Fixed Price)
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
                    <h6 style={{ margin: "auto" }}>@niftmint</h6>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-100"
              style={{ marginTop: "-1rem", marginBottom: "47px" }}
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
              >
                Create Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNft;
