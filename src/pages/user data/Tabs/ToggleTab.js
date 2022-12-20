import React, { useEffect } from "react";
import Account from "../account setting/Account";
import Collection from "../collection/Collection";
import Payment from "../payment setting/Payment";
import "../../../styles/Tabs/Tab.css";
import { Link } from "react-router-dom";
import CommonSection from "../common-section/CommonSection";
import BlockchainWallet from "../blockchain-wallet/BlockchainWallet";

const ToggleTab = () => {
  // useEffect(() => {
  //   if (props) {
  //     props.setProgress(100);
  //   }
  // }, [props]);

  return (
    <>
      <div className="container pt-5 toggle-container">
        {/* <div className="row"> */}
        {/* <h3>back</h3> */}

        <Link to="/">
          <img
            src="/assets/images/Arrow.png"
            alt=""
            className="pl-3"
            style={{ cursor: "pointer" }}
          />
        </Link>

        <ul class="nav nav-pills mb-3 pt-2" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link tab-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Your Collection
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link tab-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Account Setting
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link tab-link "
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Blockchain Wallet
            </a>
          </li>
          {/* <li class="nav-item">
            <a
              class="nav-link tab-link "
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Payment Setting
            </a>
          </li> */}
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <Collection />
            {/* hh */}
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <Account />
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            {/* <Payment /> */}
            <BlockchainWallet />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ToggleTab;
