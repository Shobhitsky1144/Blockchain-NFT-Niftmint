// import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";
// import TransferSuccessfullDialog from "./TransferSucessfullDialog";
// import { Navigate, useNavigate } from "react-router-dom";

// import { API_BASE_URL, API_ROUTES  } from "../../constants/ApiBaseUrl";
// import { toast } from "react-toastify";
// import Axios from "axios";

// export default function TransferFormDialog({ transferFormPopup, nftId }) {
//   const [open, setOpen] = React.useState(false);
//   const [transferSuccessfull, setTransferSuccessfull] = useState(false);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [first_name, setFirst_name] = useState("");
//   const [last_name, setLast_name] = useState("");
//   const [token_id, setToken_id] = useState("123");
//   const [wallet_address, setWallet_address] = useState("");
//   const [confirm_wallet_address, setConfirm_Wallet_address] = useState("");

//   var first_nameRef = useRef(null);
//   var last_nameRef = useRef(null);
//   var wallet_addressRef = useRef();
//   var confirm_wallet_addressRef = useRef(null);
//   var emailRef = useRef(null);

//   const validateForm = (e) => {
//     e.preventDefault();

//     if (
//       !emailRef.current.value ||
//       !first_nameRef.current.value ||
//       !last_nameRef.current.value ||
//       !wallet_addressRef.current.value ||
//       !confirm_wallet_addressRef.current.value
//     ) {
//       toast.error("Please fill all the fields.");
//       return false;
//     } else if (
//       wallet_addressRef.current.value !==
//       confirm_wallet_addressRef.current.value
//     ) {
//       toast.error("Wallet addresses do not match");
//       return false;
//     } else {
//       handleSubmit();
//     }
//   };

//   const handleSubmit = async () => {
//     const { id } = JSON.parse(localStorage.getItem("auth_user"));

//     try {
//       const res = await Axios.post(`${API_BASE_URL}/nft/transferNFT`, {
//         user_id: id,
//         nft_id: nftId,
//         email: emailRef.current.value,
//         first_name: first_nameRef.current.value,
//         last_name: last_nameRef.current.value,
//         wallet_address: wallet_addressRef.current.value,
//         token_id,
//       });

//       console.log("transfer-nft form", res);

//       if (res.status === 200) {
//         toast.success("Submitted successfully.");
//         setTransferSuccessfull(true);
//         localStorage.setItem("auth_user", JSON.stringify(res.data));
//         setOpen(false);
//         setEmail("");
//         setFirst_name("");
//         setLast_name("");
//         setWallet_address("");
//         setConfirm_Wallet_address("");

//         // navigate("/home");
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   React.useEffect(() => {
//     if (transferFormPopup) {
//       handleClickOpen();
//     }
//   }, [transferFormPopup]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//     window.location.href = "view-nft";
//     // navigate("/user-info");
//     // window.location.reload();
//   };

//   const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//     "& .MuiDialogContent-root": {
//       padding: theme.spacing(2),
//     },
//     "& .MuiDialogActions-root": {
//       padding: theme.spacing(1),
//     },
//   }));

//   const BootstrapDialogTitle = (props) => {
//     const { children, onClose, ...other } = props;

//     return (
//       <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//         {children}
//         {onClose ? (
//           <IconButton
//             aria-label="close"
//             onClick={onClose}
//             sx={{
//               position: "absolute",
//               right: 8,
//               top: 8,
//               color: (theme) => theme.palette.grey[500],
//             }}
//           >
//             {/* <a href="/home"> */}
//             <span className="closeicon">
//               <CloseIcon
//                 style={{
//                   backgroundColor: "#101010",
//                   color: "white",
//                   borderRadius: "25px",
//                   padding: "4px 4px",
//                 }}
//               />
//             </span>
//             {/* </a> */}
//           </IconButton>
//         ) : null}
//       </DialogTitle>
//     );
//   };

//   BootstrapDialogTitle.propTypes = {
//     children: PropTypes.node,
//     onClose: PropTypes.func.isRequired,
//   };

//   return (
//     <div>
//       {console.log("f", transferSuccessfull)}
//       <TransferSuccessfullDialog transferSuccessfull={transferSuccessfull} />
//       {/* <Button variant="outlined" onClick={handleClickOpen}>
//         Open dialog
//       </Button> */}
//       {/* <TransferSuccessfullDialog transferSuccessfull={transferSuccessfull} /> */}
//       <BootstrapDialog
//         // onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <BootstrapDialogTitle
//           id="customized-dialog-title"
//           onClose={handleClose}
//         >
//           <img src="/assets/images/newlogo.png" alt="" />
//         </BootstrapDialogTitle>
//         <DialogContent dividers>
//           <h3 className="transfer-heading">Transfer</h3>
//           <Typography gutterBottom style={{ fontSize: "14px" }}>
//             For this NFT your wallet must be Polygon compatible and configured
//             to receive NFTs.
//           </Typography>
//           <div className="form mt-3">
//             <form onSubmit={validateForm}>
//               <div class="form-group">
//                 <div class="form-group">
//                   <label className="forms-labelss">First Name</label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="First name"
//                     // value={first_name}
//                     ref={first_nameRef}
//                     // value={myRef.current.value}
//                   />
//                   {/* {console.log("kk", myRef.current.value)} */}
//                 </div>
//                 <div class="form-group">
//                   <label className="forms-labelss">Last Name</label>
//                   <input
//                     type="text"
//                     class="form-control"
//                     placeholder="Last Name"
//                     ref={last_nameRef}
//                     // value={last_name}

//                     // onChange={(e) => setLast_name(e.target.value)}
//                   />
//                 </div>
//                 <label className="forms-labelss">Email</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   autoFocus
//                   placeholder="your@email.com"
//                   id="email"
//                   ref={emailRef}
//                   // onChange={handleChange}
//                   // value={email}
//                   // onChange={handleChange}
//                 />
//               </div>
//               <div class="form-group">
//                 <label className="forms-labelss">Wallet Address</label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="wallet_address"
//                   ref={wallet_addressRef}
//                   // value={wallet_address}

//                   // onChange={(e) => setWallet_address(e.target.value)}
//                 />
//               </div>
//               <div class="form-group">
//                 <label className="forms-labelss">Re-enter Wallet Address</label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Re-enter wallet address"
//                   ref={confirm_wallet_addressRef}
//                   // value={confirm_wallet_address}

//                   // onChange={(e) => setConfirm_Wallet_address(e.target.value)}
//                 />
//               </div>

//               <div className="text-white text-right mb-3">
//                 <button type="submit" className="dialog-btn ">
//                   Transfer
//                 </button>
//               </div>
//             </form>
//           </div>
//         </DialogContent>
//         {/* <DialogActions>
//           <button
//             className="dialog-btn"
//             onClick={() => {
//               setOpen(false);
//               setTransferSuccessfull(true);
//             }}
//           >
//             Transfer
//           </button>
//         </DialogActions> */}
//       </BootstrapDialog>
//     </div>
//   );
// }
