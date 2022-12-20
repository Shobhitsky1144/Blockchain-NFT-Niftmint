import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";
import { API_BASE_URL, API_ROUTES } from "../../../constants/ApiBaseUrl";
// import CompleteWalletDialog from "../../../components/dialog modal/CompleteWalletDialog";
// import HomeTransferDialog from "../../../components/dialog modal/HomeTransferDialog";
import Spinner from "../../../components/spinner/Spinner";
import { toast } from "react-toastify";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
// import TransferFormDialog from "./TransferFormDialog";
import { Navigate, useNavigate } from "react-router-dom";
import "../../../styles/home style/Home.css";
// import TransferSuccessfullDialog from "../../../components/dialog modal/TransferSucessfullDialog";

const ViewNft = () => {
  const [transferSuccessfull, setTransferSuccessfull] = useState(false);
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [token_id, setToken_id] = useState("123");
  const [wallet_address, setWallet_address] = useState("");
  const [confirm_wallet_address, setConfirm_Wallet_address] = useState("");

  var first_nameRef = useRef(null);
  var last_nameRef = useRef(null);
  var wallet_addressRef = useRef();
  var confirm_wallet_addressRef = useRef(null);
  var emailRef = useRef(null);

  const handleClick = () => {
    setOpen(false);
    setTransferSuccessfull(false);
  };

  const validateForm = (e) => {
    e.preventDefault();

    if (
      !emailRef.current.value ||
      !first_nameRef.current.value ||
      !last_nameRef.current.value ||
      !wallet_addressRef.current.value ||
      !confirm_wallet_addressRef.current.value
    ) {
      toast.error("Please fill all the fields.");
      return false;
    } else if (
      wallet_addressRef.current.value !==
      confirm_wallet_addressRef.current.value
    ) {
      toast.error("Wallet addresses do not match");
      return false;
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const { id } = JSON.parse(localStorage.getItem("auth_user"));

    try {
      const res = await Axios.post(
        `${API_BASE_URL}${API_ROUTES.NFT.VIEW_NFT}`,
        {
          user_id: id,
          nft_id: nftId,
          email: emailRef.current.value,
          first_name: first_nameRef.current.value,
          last_name: last_nameRef.current.value,
          wallet_address: wallet_addressRef.current.value,
          token_id,
        }
      );

      // console.log("transfer-nft form", res);

      if (res.status === 200) {
        toast.success("Submitted successfully.");
        setTransferSuccessfull(true);
        localStorage.setItem("auth_user", JSON.stringify(res.data));
        // setOpen(false);
        setEmail("");
        setFirst_name("");
        setLast_name("");
        setWallet_address("");
        setConfirm_Wallet_address("");

        // navigate("/home");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //
  const [open, setOpen] = React.useState(false);
  const [op, setOp] = React.useState(false);
  const navigate = useNavigate();
  const [transferFormPopup, setTransferFormPopup] = useState(false);

  const location = useLocation();
  //  const [id, setId] = useState("");
  const [getNft, setGetNft] = useState("");
  const [loading, setLoading] = useState(false);

  const [checkTransfer, setCheckTransfer] = useState("");

  const [nftId, setNftId] = useState("");

  const [transferPopup, setTransferPopup] = useState(false);

  const [completeWallet, setCompleteWallet] = useState(false);

  // React.useEffect(() => {
  //   if (nftId) {
  //     handleClickOpen();
  //   }
  // }, [nftId]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTransferFormPopup(false);
    // navigate("/user-info");
    // window.location.href = "/view-nft";
  };
  useEffect(() => {
    getFullDetails();
    setNftId(location.state.id);
  }, [location.state.id]);

  //

  // const checkWallet = () => {
  //   setTransferPopup(true);
  // };

  const checkWallet = async () => {
    try {
      const res = await Axios.post(`${API_BASE_URL}/nft/transfer`, {
        nft_id: location.state.id,
      });
      // console.log("transfer ", res.data.transfer_status);
      if (res.status === 200) {
        setCheckTransfer(res.data.transfer_status);
        if (res.data.transfer_status === "requested") {
          setCompleteWallet(true);
          handleClickOpen();
        }
        handleClickOpen();
        setTransferPopup(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(location);

  const getFullDetails = async () => {
    try {
      setLoading(true);
      const res = await Axios.post(`${API_BASE_URL}/nft/getNft`, {
        id: location.state.id,
      });
      // console.log("view collection nft", res.data);
      setGetNft(res.data);
      setTimeout(function () {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon
              style={{
                backgroundColor: "#101010",
                color: "white",
                borderRadius: "25px",
                padding: "4px 4px",
              }}
            />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  return (
    <>
      {/* {console.log(checkTransfer)} */}
      <Spinner loading={loading} />

      {/* {checkTransfer != null ? (
        <CompleteWalletDialog completeWallet={completeWallet} />
      ) : (
        <HomeTransferDialog transferPopup={transferPopup} nftId={nftId} />
      )} */}
      <div className="container home-container ">
        <div className="row  mt-3 mb-3 common-row">
          {" "}
          <div className="col-12 col-md-6 col-lg-6 video-section">
            <span className="">
              {" "}
              <Link to="/user-info">
                <img src="/assets/images/Arrow.png" alt="" className="" />
              </Link>
            </span>
            <h1 className="font-weight-bold nft-heading pt-4">NFT Details</h1>

            <div className="">
              <img
                // src="/assets/images/wave-v1.png"
                src={getNft.nft_url}
                className="w-100 "
                style={{
                  borderRadius: "20px",
                  height: "360px",
                  objectFit: "cover",
                }}
                alt=""

                // height={600}
              />
            </div>

            <div className="afternftBox">
              <h4 className="font-weight-bold">Item Information</h4>
              <h6 className="font-weight-bold">Description</h6>

              <p>Future of Retail NFT - Las Vegas 2022</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 home-section-second ">
            <div className="header">
              <p
                className="view-nft-title font-weight-bold pt-3 text-dark"
                style={{ fontSize: "38px" }}
              >
                You transferred this NFT
              </p>

              {/* <button className="header-btn" onClick={checkWallet}>
                Transfer
              </button> */}
              <div>
                {/* <TransferFormDialog
                  transferFormPopup={transferFormPopup}
                  nftId={nftId}
                /> */}

                <button className="header-btn" onClick={checkWallet}>
                  Transfer
                </button>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                  >
                    <img src="/assets/images/newlogo.png" alt="" />
                  </BootstrapDialogTitle>

                  {transferFormPopup === true ? (
                    <>
                      {transferSuccessfull ? (
                        <>
                          <DialogContent dividers>
                            <h3 className="font-weight-bold">Transfer</h3>
                            <Typography
                              gutterBottom
                              style={{ fontSize: "14px" }}
                              className=""
                            >
                              Your NFT transfer has been initiated. Your NFT
                              will be transferred to your account within 72
                              hours.
                            </Typography>
                          </DialogContent>
                          <DialogActions>
                            <button
                              className="dialog-btn"
                              onClick={handleClose}
                            >
                              Close
                            </button>
                          </DialogActions>
                        </>
                      ) : (
                        <>
                          <DialogContent dividers>
                            <h3 className="transfer-heading">Transfer</h3>
                            <Typography
                              gutterBottom
                              style={{ fontSize: "14px" }}
                            >
                              For this NFT your wallet must be Polygon
                              compatible and configured to receive NFTs.
                            </Typography>
                            <div className="form mt-3">
                              <form onSubmit={validateForm}>
                                <div class="form-group">
                                  <div class="form-group">
                                    <label className="forms-labelss">
                                      First Name
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="First name"
                                      // value={first_name}
                                      ref={first_nameRef}
                                      // value={myRef.current.value}
                                    />
                                    {/* {console.log("kk", myRef.current.value)} */}
                                  </div>
                                  <div class="form-group">
                                    <label className="forms-labelss">
                                      Last Name
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Last Name"
                                      ref={last_nameRef}
                                      // value={last_name}

                                      // onChange={(e) => setLast_name(e.target.value)}
                                    />
                                  </div>
                                  <label className="forms-labelss">Email</label>
                                  <input
                                    type="email"
                                    class="form-control"
                                    autoFocus
                                    placeholder="your@email.com"
                                    id="email"
                                    ref={emailRef}
                                    // onChange={handleChange}
                                    // value={email}
                                    // onChange={handleChange}
                                  />
                                </div>
                                <div class="form-group">
                                  <label className="forms-labelss">
                                    Wallet Address
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="wallet_address"
                                    ref={wallet_addressRef}
                                    // value={wallet_address}

                                    // onChange={(e) => setWallet_address(e.target.value)}
                                  />
                                </div>
                                <div class="form-group">
                                  <label className="forms-labelss">
                                    Re-enter Wallet Address
                                  </label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Re-enter wallet address"
                                    ref={confirm_wallet_addressRef}
                                    // value={confirm_wallet_address}

                                    // onChange={(e) => setConfirm_Wallet_address(e.target.value)}
                                  />
                                </div>

                                <div className="text-white text-right mb-3">
                                  <button type="submit" className="dialog-btn ">
                                    Transfer
                                  </button>
                                </div>
                              </form>
                            </div>
                          </DialogContent>
                        </>
                      )}
                      {/* ) */}
                    </>
                  ) : checkTransfer != null && transferFormPopup === false ? (
                    <>
                      <DialogContent dividers>
                        <h3 className="font-weight-bold">Transfer</h3>
                        <Typography
                          gutterBottom
                          style={{ fontSize: "14px" }}
                          className="pb-3"
                        >
                          You have already initiated the transfer of this NFT.
                          You will see your NFT in the wallet address you
                          provided with in 72 hours.
                        </Typography>
                      </DialogContent>
                      <DialogActions>
                        <button className="dialog-btn" onClick={handleClose}>
                          Close
                        </button>
                      </DialogActions>
                    </>
                  ) : (
                    <>
                      {" "}
                      <DialogContent dividers>
                        <h3 className="transfer-heading">Transfer</h3>
                        <Typography className="para pt-2">
                          To transfer your NFT, you must first have a crypto
                          wallet and provide your public wallet address. Please
                          make sure you provide the exact wallet address as
                          Niftmint will not be responsibe if you provide an
                          incorrect address. You will not have the ability to
                          change the wallet address once the NFT is sent.
                        </Typography>
                        <Typography gutterBottom className="pt-2 para">
                          Transfering your NFT means it is no longer in
                          Niftmint’s custody and custody will move to address
                          provided.
                        </Typography>
                        <h5 className="transfer-head text-right pt-4">
                          Are you sure you want to transfer your NFT?
                        </h5>
                      </DialogContent>
                      <DialogActions>
                        <button
                          className="dialog-btn"
                          onClick={() => {
                            // setOpen(false);
                            setTransferFormPopup(true);
                          }}
                        >
                          Transfer
                        </button>
                      </DialogActions>
                    </>
                  )}
                </BootstrapDialog>
              </div>
            </div>
            <div className="form mt-4">
              <div
                class="form-group"
                style={{ borderBottom: "1px solid lightGray" }}
              >
                <label for="pwd" className="forms-labelss">
                  Contract Address
                </label>
                <div className="home-data pb-2">
                  <a
                    href="#"
                    target="_blank "
                    className="anchr-link "
                    style={{ overflowWrap: "break-word" }}
                  >
                    {getNft.contract_address}
                  </a>
                </div>
              </div>

              <div
                class="form-group"
                style={{ borderBottom: "1px solid lightGray" }}
              >
                <label for="pwd" className="forms-labelss">
                  Blockchain
                </label>
                <div className="home-data"> {getNft.blockchain}</div>
              </div>

              <div
                class="form-group"
                style={{ borderBottom: "1px solid lightGray" }}
              >
                <label for="pwd" className="forms-labelss">
                  Token Standard
                </label>
                <div className="home-data"> {getNft.token_standard}</div>
              </div>

              <div
                class="form-group"
                style={{ borderBottom: "1px solid lightGray" }}
              >
                <label for="pwd" className="forms-labelss">
                  Token ID
                </label>
                <div className="home-data pb-2">
                  {/* <a
                    href="https://polygonscan.com/token/0xda82f77c9942b022c215b1c9784fff440b222958"
                    target="_blank"
                    className="anchr-link"
                  > */}
                  {getNft.token_id}
                  {/* </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewNft;
