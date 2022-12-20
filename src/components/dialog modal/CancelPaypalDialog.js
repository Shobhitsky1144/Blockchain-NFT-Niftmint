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
import { useNavigate } from "react-router-dom";
import "../../styles/dialog/dialog.css";
import { ImCross } from "react-icons/im";

export default function CancelPaypalDialog({ cancel, price }) {
  const navigate = useNavigate;
  // console.log("d", price);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (cancel) {
      handleClickOpen();
    }
  }, [cancel]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    // window.location.href = "/purchase-nft";
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
            <CloseIcon
              style={{ color: "black" }}
              className="font-weight-bold"
            />
          </IconButton>
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
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {/* <img src="/assets/images/newlogo.png" alt="" /> */}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div
            className="w-100 mt-3  d-flex align-items-center justify-content-center"
            // style={{ borderBottom: "2px solid lightGray" }}
          >
            {/* <img
              src="/assets/images/image_2022_05_10T09_37_49_703Z.png"
              className="w-100"
              height={260}
            /> */}
            <ImCross className="cancel-paypal p-5 m-3" />
          </div>
          <h4
            className="font-weight-bold text-center py-2"
            // style={{
            //   borderTop: "2px solid lightGray",
            //   // borderBottom: "2px solid lightGray",
            // }}
          >
            This transaction has been canceled
          </h4>

          <div
            className="d-flex justify-content-between py-1 font-weight-bold"
            style={{
              borderTop: "2px solid lightGray",
              // borderBottom: "2px solid lightGray",
            }}
          >
            <div className="">
              <h5 className="font-weight-bold">Amount</h5>
            </div>
            <div className=" ">
              <h5 className=" font-weight-bold">${price}</h5>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button className="w-100 dialog-btn" onClick={handleClose}>
            Close
          </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
