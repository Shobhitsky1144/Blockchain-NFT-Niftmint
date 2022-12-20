// import * as React from "react";
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
// import { Navigate, useNavigate } from "react-router-dom";

// export default function TransferSuccessfullDialog({
//   transferSuccessfull,
//   handle,
// }) {
//   console.log(transferSuccessfull);
//   const [open, setOpen] = React.useState(false);
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     const { wallet_address } = JSON.parse(localStorage.getItem("auth_user"));
//     if (transferSuccessfull) {
//       handleClickOpen();
//     }
//   }, [transferSuccessfull]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//     handle();
//     // navigate("/user-info");
//     // window.location.href = "/view-nft";
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
//         {/* {onClose ? (
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
//             {/* <CloseIcon
//               style={{
//                 backgroundColor: "#101010",
//                 color: "white",
//                 borderRadius: "25px",
//                 padding: "4px 4px",
//               }}
//             /> */}
//         {/* </IconButton>
//         ) : null} */}{" "}
//       </DialogTitle>
//     );
//   };

//   BootstrapDialogTitle.propTypes = {
//     children: PropTypes.node,
//     onClose: PropTypes.func.isRequired,
//   };

//   return (
//     <div>
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
//           <h4 className="font-weight-bold">Transfer Successful !</h4>
//           <Typography gutterBottom style={{ fontSize: "14px" }}>
//             Your NFT transfer has been initiated. Your NFT will be transferred
//             to your account within 72 hours.
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <button className="dialog-btn" onClick={handleClose}>
//             Close
//           </button>
//         </DialogActions>
//       </BootstrapDialog>
//     </div>
//   );
// }
