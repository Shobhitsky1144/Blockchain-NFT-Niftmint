import React from "react";
import CommonSection from "../common-section/CommonSection";

const Payment = () => {
  return (
    <div>
      {" "}
      <div className="container">
        <div className="row">
          <CommonSection />
        </div>
        <h1 className="font-weight-bold mt-5 mb-5">Payment Setting</h1>
        <div className="row mt-3 mb-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-5">
            <div className="">
              <div className="">
                <img src="/assets/images/card-images.png" alt="" />s
                <h5 className="font-weight-bold pt-2">Payment Information</h5>
                <h6 className="account-desc">
                  All transactions are secured and encrypted
                </h6>
                <form className="mt-5">
                  <div class="form-group">
                    <label className=" forms-labelss userinfo-labels">
                      Card Ending in
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="****5555"
                    />
                    <button
                      // type="submit"
                      class="common-btn text-dark font-weight-bold mt-4 payment-btn "
                      style={{ background: "#7bd7ab" }}
                    >
                      Update
                    </button>
                  </div>
                  <div class="form-group">
                    <label className=" forms-labelss userinfo-labels">
                      Add Additional Card
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="****"
                    />
                    <button
                      // type="submit"
                      style={{ background: "#7bd7ab" }}
                      class="common-btn text-dark font-weight-bold mt-4 payment-btn"
                    >
                      Add Card
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
