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

// import TiTick from "react-icons/ti";

export default function PaypalDialog({ orderDetails }) {
  //   console.log("d", orderDetails, orderDetails.id);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (orderDetails) {
      handleClickOpen();
    }
  }, [orderDetails]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/user-info");
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
            <CloseIcon />
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
          <div className="w-100">
            <img
              src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png"
              className="w-100"
            />
            {/* <TiTick /> */}
          </div>
          <h3 className="font-weight-bold text-center ">
            You paid $ {orderDetails.purchase_units[0].amount.value}{" "}
            {orderDetails.purchase_units[0].amount.currency_code}
          </h3>

          <div>
            <h6 className="font-weight-bold text-center ">
              {orderDetails.purchase_units[0].shipping.name.full_name}
            </h6>
            <h6 className="font-weight-bold text-center ">
              {orderDetails.purchase_units[0].shipping.address.address_line_1},{" "}
              {orderDetails.purchase_units[0].shipping.address.admin_area__1}
              {
                orderDetails.purchase_units[0].shipping.address.admin_area_2
              }, {orderDetails.purchase_units[0].shipping.address.postal_code},{" "}
              {orderDetails.purchase_units[0].shipping.address.country_code}
            </h6>
          </div>
          <Typography
            gutterBottom
            style={{ fontSize: "14px" }}
            className="pt-3"
          >
            <div>
              {/* <div className="d-flex justify-content-between"> */}
              {/* <div>
                  <h6 className="font-weight-bold "> absract plain waves</h6>{" "}
                </div>
                <div>
                  <h6 className="font-weight-bold ">
                    $ {orderDetails.purchase_units[0].amount.value}{" "}
                    {/* {orderDetails.purchase_units[0].amount.currency_code} */}
              {/* </h6> */}
              {/* </div>  */}
              {/* </div> */}
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="font-weight-bold "> Order Time</h6>{" "}
                </div>
                <div>
                  <h6 className="font-weight-bold ">
                    {" "}
                    {orderDetails.create_time}
                  </h6>{" "}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="font-weight-bold ">SubTotal</h6>{" "}
                </div>
                <div>
                  <h6 className="font-weight-bold ">
                    $ {orderDetails.purchase_units[0].amount.value}{" "}
                    {/* {orderDetails.purchase_units[0].amount.currency_code} */}
                  </h6>{" "}
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="font-weight-bold "> Total</h6>{" "}
                </div>
                <div>
                  <h6 className="font-weight-bold ">
                    {" "}
                    $ {orderDetails.purchase_units[0].amount.value}{" "}
                    {/* {orderDetails.purchase_units[0].amount.currency_code} */}
                  </h6>{" "}
                </div>
              </div>
            </div>

            <div className="pt-3">
              <h6 className="font-weight-bold ">Purchase Details</h6>

              <h6>Transaction id</h6>
              <h6> {orderDetails.id}</h6>

              <h6>Transaction email</h6>
              <h6 style={{ wordBreak: "break-word" }}>
                {" "}
                {orderDetails.payer.email_address}
              </h6>
            </div>
            <div className="pt-3">
              <h6 className="font-weight-bold ">Merchant Details</h6>
              <h6>Transaction id</h6>
              <h6> {orderDetails.purchase_units[0].payee.merchant_id}</h6>

              <h6>Transaction email</h6>
              <h6 style={{ wordBreak: "break-word" }}>
                {" "}
                {orderDetails.purchase_units[0].payee.email_address}
              </h6>
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <button className="dialog-btn" onClick={handleClose}>
            Close
          </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
