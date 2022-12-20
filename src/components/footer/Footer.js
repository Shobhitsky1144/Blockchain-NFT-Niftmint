import React from "react";
import "../../styles/header footer styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className=" parent">
        <div className="container">
          <div className="row parent-sections ">
            <div className=" col-12 col-sm-12 col-md-4 col-lg-4 first-section ">
              <h3 className="footer-text ">Niftmint</h3>
              <h1 className="text-white footer-content foot">
                NFTs from the <br />
                Brands you LOVE!
              </h1>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 second-section">
              <div className="upper-section d-flex  justify-content-end text-white">
                <div className="common-div ">
                  <a
                    // href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@example.com"
                    // https://mail.google.com/mail/mu/mp/514/#co
                    // href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@niftmint.com&su=Question for niftmint"
                    // href="mailto:kkc1144@xyz.com"
                    href="mailto:info@niftmint.com?&subject=Question for niftmint"
                    target="_blank"
                    className="footer-link text-white"
                  >
                    CUSTOMER SUPPORT
                  </a>{" "}
                </div>
                <div className="common-div ">
                  <a
                    // href="/assets/niftmint-Privacy-Policy.html"
                    href="/privacy-policy"
                    target="_blank"
                    className="footer-link text-white"
                  >
                    PRIVACY POLICY
                  </a>{" "}
                </div>
                <div className="term">
                  {" "}
                  <a
                    // href="/assets/niftmintTerms-and-Conditions.html"
                    href="/terms-condition"
                    target="_blank"
                    className="footer-link text-white"
                  >
                    TERMS & CONDITIONS
                  </a>{" "}
                </div>
                {/* <div className="">ABOUT US</div>
                <div className="">FAQ</div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 mb-1">
              <div className="d-flex justify-content-end social-container">
                <div className="mb-3  social-row">
                  <span className="social-img">
                    <img
                      src="/assets/images/facebook.png"
                      width="30"
                      height="30"
                      className="mr-4"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </span>
                  <span className="social-img">
                    <img
                      src="/assets/images/youtube.png"
                      width="30"
                      height="30"
                      className="mr-4"
                      style={{
                        position: "relative",
                        top: "5px",
                        cursor: "pointer",
                      }}
                      alt=""
                    />
                  </span>
                  <span className="social-img">
                    <img
                      src="/assets/images/instagram.png"
                      width="30"
                      height="30"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                  </span>
                </div>
              </div>
              <div className=" text-white footer-logo ">
                <div className="img-row d-flex justify-content-end">
                  <span
                    className="d-flex align-items-center"
                    style={{ fontSize: "18px" }}
                  >
                    Powered by
                  </span>
                  <a
                    href="https://www.niftmint.com"
                    target="_blank"
                    style={{ position: "relative", left: "9px" }}
                  >
                    <img
                      src="/assets/images/footerLogo.png"
                      alt="footer pic"
                      className="footer-img"
                    />
                  </a>
                </div>
              </div>
              <div className=" text-white pt-4 bottom-text">
                <span>© 2022 Niftmint Inc. All Rights Reserved</span>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-12 col-lg-12 ">
              <div className="d-flex justify-content-end text-white footer-logo ">
                <span
                  className="d-flex align-items-center"
                  style={{ fontSize: "18px" }}
                >
                  Powered by
                </span>
                <a href="https://www.niftmint.com" target="_blank">
                  <img
                    src="/assets/images/footerLogo.png"
                    alt="footer pic"
                    className="footer-img"
                  />
                </a>
              </div>
              <div className=" text-white pt-4 bottom-text">
                <span>© 2022 Niftmint Inc. All Rights Reserved</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
