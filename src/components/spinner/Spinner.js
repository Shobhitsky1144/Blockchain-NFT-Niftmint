import React from "react";
import { Audio, Oval } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = ({ loading }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center "
      // style={{ background: "lightGray" }}
    >
      {loading ? (
        <Oval height="100vh" width="130" color="black" ariaLabel="loading" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Spinner;
