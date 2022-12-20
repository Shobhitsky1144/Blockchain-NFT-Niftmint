import React, { createContext, useState, useRef, useEffect } from "react";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Footer from "../components/footer/Footer";
// import Header from "../pagesLoginButtonHeader";
import GoToTop from "../components/GoToTop";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "../styles/common css/commonstyle.css";
import VerifyOtp from "../pages/auth/VerifyOtp";
import Home from "../pages/home/Home";
import CompleteAccountForm from "../pages/user-details/CompleteAccountForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NftDetails from "../pages/home/NftDetails";
import ErrorPage from "../components/error page/ErrorPage";
import ProtectedRoutes from "./ProtectedRoutes";
import UserBio from "../pages/user-details/UserBio";
import ForgetFirstScreen from "../pages/forget password/ForgetFirstScreen";
import ForgetSecondScreen from "../pages/forget password/ForgetSecondScreen";
import ForgetThirdScreen from "../pages/forget password/ForgetThirdScreen";
import Collection from "../pages/user data/collection/Collection";
import Account from "../pages/user data/account setting/Account";
import Payment from "../pages/user data/payment setting/Payment";
import ToggleTab from "../pages/user data/Tabs/ToggleTab";
// import EditUsername from "../pages/user data/edit user name/EditUsername";
import AllNft from "../pages/find all nft/AllNft";
import NftInfo from "../pages/find all nft/NftInfo";
import PurchaseNft from "../pages/find all nft/PurchaseNft";
import ViewNft from "../pages/user data/collection/ViewNft";
import Spinner from "../components/spinner/Spinner";
// import Demo from "../pages/find all nft/Demo";
import AdminRoutes from "./AdminRoutes";
import ResponsiveDrawer from "../components/drawer/ResponsiveDrawer";

import Cart from "../pages/find all nft/Cart";
import TermsCondition from "../components/footer/TermsCondition";
import PrivacyPolicy from "../components/footer/PrivacyPolicy";
import CreateNft from "../pages/admin/CreateNft";

import Layout from "../layout/Layout";

const AppRoutes = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <ToastContainer />
        <GoToTop />
        {/* <ResponsiveDrawer /> */}
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/verify-otp" element={<VerifyOtp />}></Route>
          <Route
            path="/create-nft"
            element={
              <ProtectedRoutes>
                <Layout children={<CreateNft />} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route path="/terms-condition" element={<TermsCondition />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Layout children={<AllNft />} />
                {/* <AllNft /> */}
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/complete-account"
            element={
              <ProtectedRoutes>
                <Layout children={<CompleteAccountForm />} />
              </ProtectedRoutes>
            }
          ></Route>{" "}
          {/* <Route
            path="/nft-details"
            element={
              <ProtectedRoutes>
                <Layout children={
                <NftDetails />
              </ProtectedRoutes>
            }
          ></Route> */}
          {/* <Route
            path="/user-bio"
            element={
              <ProtectedRoutes>
                <Layout children={
                <UserBio />
              </ProtectedRoutes>
            }
          ></Route> */}
          <Route
            path="/forget-password-verifyemail"
            element={<ForgetFirstScreen />}
          ></Route>
          <Route
            path="/forget-password-verifyotp"
            element={<ForgetSecondScreen />}
          ></Route>
          <Route
            path="/forget-password-createpassword"
            element={<ForgetThirdScreen />}
          ></Route>
          <Route
            path="/user-info"
            element={
              <ProtectedRoutes>
                <Layout children={<ToggleTab />} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/collection"
            element={
              <ProtectedRoutes>
                <Layout children={<Collection />} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/view-nft"
            element={
              <ProtectedRoutes>
                <Layout children={<ViewNft />} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/account-setting"
            element={
              <ProtectedRoutes>
                <Layout children={<Account />} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <ProtectedRoutes>
                <Layout children={<Payment />} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/nft-info"
            element={
              <ProtectedRoutes>
                <Layout children={<NftInfo />} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/purchase-nft"
            element={
              <ProtectedRoutes>
                <Layout children={<PurchaseNft />} />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <ProtectedRoutes>
                <Layout children={<Cart />} />
              </ProtectedRoutes>
            }
          ></Route>
          {/* wrong route  */}
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppRoutes;
