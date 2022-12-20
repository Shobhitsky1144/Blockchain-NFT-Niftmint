import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import PaypalDialog from "../../components/dialog modal/PaypalDialog";
import CancelPaypalDialog from "../../components/dialog modal/CancelPaypalDialog";
import { API_BASE_URL, API_ROUTES } from "../../constants/ApiBaseUrl";
import Axios from "axios";
import { PAYPAL_CLIENT_ID } from "../../config/config";

// This values are the props in the UI
const amount = "";
const currency = "USD";
const style = {
  layout: "vertical",
  color: "blue",
};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, price, nftid }) => {
  // const [paymentSource, setPaymentSource] = useState("");
  const [orderDetails, setOrderDetails] = useState("");
  const [cancel, setCancel] = useState(false);
  const [error, setError] = useState("");
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner, price]);

  const SuccessfullPayment = async (details, source) => {
    // console.log("o", source);
    const { id } = JSON.parse(localStorage.getItem("auth_user"));
    const res = await Axios.post(
      `${API_BASE_URL}${API_ROUTES.PAYMENT.PAYMENT_RECORD}`,
      {
        nftid,
        userid: id,
        orders: details,
        paymentSource: source,
        // error,
      }
    );
    // console.log("successfull payment", res.data);

    // toast(res.data);
  };

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: price,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          // console.log("approve", data, "action", actions);
          // setPaymentSource(data.paymentSource);
          var source = data.paymentSource;
          return actions.order.capture().then((details) => {
            // console.log("detail", details);
            setOrderDetails((prevState) => details);

            // const name = details.payer.name.given_name;
            // alert(`Transaction completed by ${name}`);
            // toast(`Transaction completed by ${name}`);
            SuccessfullPayment(details, source);
          });
        }}
        onCancel={function (data, action) {
          // console.log("cancel", data, action);
          setCancel(data);
        }}
        onError={function (err) {
          console.log("err", err);
          // setError(err);
        }}
        // onShippingChange={function (data, action) {
        //   console.log("shipp", data, action);
        //   // setCancel(data);
        // }}
        // createBillingAgreement={function (data, action) {
        //   console.log("bill", data, action);
        //   // setCancel(data);
        // }}
        // createSubscription={function (data, action) {
        //   console.log("subs", data, action);
        //   // setCancel(data);
        // }}
      />
      {orderDetails ? <PaypalDialog orderDetails={orderDetails} /> : ""}
      {cancel ? <CancelPaypalDialog cancel={cancel} price={price} /> : ""}
    </>
  );
};
export default function Paypal({ price, nftid }) {
  // console.log(price, id);
  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          "client-id": PAYPAL_CLIENT_ID,
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper
          currency={currency}
          showSpinner={false}
          price={price}
          nftid={nftid}
        />
      </PayPalScriptProvider>
    </div>
  );
}
