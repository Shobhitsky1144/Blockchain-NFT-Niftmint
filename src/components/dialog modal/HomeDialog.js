import * as React from "react";
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

import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import { toast } from "react-toastify";
import Axios from "axios";

export default function HomeDialog({ handleCall }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    var vist = JSON.parse(localStorage.getItem("visted"));
    var { isVisited } = JSON.parse(localStorage.getItem("auth_user"));
    if (vist !== true && isVisited !== true) {
      setOpen(true);
    } else {
      handleCall();
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // const handleClose = async () => {
  //   const { id } = JSON.parse(localStorage.getItem("auth_user"));

  //   try {
  //     const res = await Axios.post(`${API_BASE_URL}/nft/closeNft`, { id });
  //     localStorage.setItem("auth_user", JSON.stringify(res.data));

  //     setOpen(false);
  //     // window.location.href = "/nft-details";
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // };

  const handleClose = () => {
    handleCall();
    setOpen(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {/* {onClose ? (
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
            {/* <CloseIcon /> */}
        {/* </IconButton>
        ) : null} */}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <img src="/assets/images/newlogo.png" alt="" />
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <h4 className="font-weight-bold ">
            Welcome to The Future of Retail !
          </h4>
          <Typography
            gutterBottom
            style={{ fontSize: "14px" }}
            className="pt-3"
          >
            Congratulations on your first steps in claiming your Future of
            Retail NFT!
          </Typography>
          <Typography gutterBottom style={{ fontSize: "14px" }}>
            Now that you have completed your Niftmint profile, its time to view
            your Future of Retail NFT
          </Typography>
          <Typography gutterBottom style={{ fontSize: "14px" }}>
            Niftmint will custody your NFT for you until you would like to
            transfer it to your own NFT wallet. If you prefer Niftmint to
            custody your NFT for you, simply leave it in your Niftmint Wallet.
          </Typography>
        </DialogContent>
        <DialogActions>
          <button className="dialog-btn" onClick={handleClose}>
            Continue
          </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
