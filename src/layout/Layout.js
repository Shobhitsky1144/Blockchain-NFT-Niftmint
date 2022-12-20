import React from "react";
import HomeHeader from "../components/headers/HomeHeader";

const Layout = (prop) => {
  return (
    <>
      <HomeHeader />
      {prop.children}
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
