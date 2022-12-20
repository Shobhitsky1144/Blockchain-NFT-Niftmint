import React from "react";
import CommonSection from "../common-section/CommonSection";

const BlockchainWallet = () => {
  var { wallet_address } = JSON.parse(localStorage.getItem("auth_user"));
  return (
    <div>
      {" "}
      <div className="container">
        <div className="row">
          <CommonSection />
        </div>
        <h1 className="font-weight-bold mt-5 mb-5">Blockchain Wallet</h1>
        <div className="row mt-3 mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="">
              <div class="form-group">
                <label className=" blockchain-labels text-dark font-weight-bold">
                  Wallet Address
                </label>
                <div className="wallet-address">
                  <h5>{wallet_address}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainWallet;
