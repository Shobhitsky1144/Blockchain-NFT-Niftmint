// import React, { useState, useEffect, createContext } from "react";
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
// import TransferFormDialog from "./TransferFormDialog";
// import { Navigate, useNavigate } from "react-router-dom";
// import CompleteWalletDialog from "./CompleteWalletDialog";

// function HomeTransferDialog({ transferPopup, nftId }) {
//   console.log("tr", transferPopup);
//   const [open, setOpen] = React.useState(false);
//   const [op, setOp] = React.useState(false);
//   const navigate = useNavigate();
//   const [transferFormPopup, setTransferFormPopup] = useState(false);

//   React.useEffect(() => {
//     if (nftId) {
//       handleClickOpen();
//     }
//   }, [nftId]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     // navigate("/user-info");
//     window.location.href = "/view-nft";
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
//             <CloseIcon
//               style={{
//                 backgroundColor: "#101010",
//                 color: "white",
//                 borderRadius: "25px",
//                 padding: "4px 4px",
//               }}
//             />
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
//       <TransferFormDialog transferFormPopup={transferFormPopup} nftId={nftId} />

//       {/* <Button variant="outlined" onClick={handleClickOpen}>
//         Open dialog
//       </Button> */}
//       <BootstrapDialog
//         onClose={handleClose}
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
//           <Typography className="para pt-2">
//             To transfer your NFT, you must first have a crypto wallet and
//             provide your public wallet address. Please make sure you provide the
//             exact wallet address as Niftmint will not be responsibe if you
//             provide an incorrect address. You will not have the ability to
//             change the wallet address once the NFT is sent.
//           </Typography>
//           <Typography gutterBottom className="pt-2 para">
//             Transfering your NFT means it is no longer in Niftmint’s custody and
//             custody will move to address provided.
//           </Typography>
//           <h5 className="transfer-head text-right pt-4">
//             Are you sure you want to transfer your NFT?
//           </h5>
//         </DialogContent>
//         <DialogActions>
//           <button
//             className="dialog-btn"
//             onClick={() => {
//               setOpen(false);
//               setTransferFormPopup(true);
//             }}
//           >
//             Transfer
//           </button>
//         </DialogActions>
//       </BootstrapDialog>
//     </div>
//   );
// }
// export default HomeTransferDialog;
