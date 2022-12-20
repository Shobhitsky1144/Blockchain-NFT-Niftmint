// import React, { useContext, useEffect, useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import NoteContext from "../../context/NoteContext";
// import HomeHeader from "../../components/headers/HomeHeader";
// import "../../styles/home style/Home.css";
// import HomeDialog from "../../pagesdialog modal/HomeDialog";

// const Home = () => {
//   const a = useContext(NoteContext);
//   console.log("a", a);
//   const navigate = useNavigate();
//   const [visited, setVisited] = useState(false);

//   useEffect(() => {
//     const { isVisited } = JSON.parse(localStorage.getItem("auth_user"));
//     if (isVisited === true) {
//       setVisited(true);
//     }
//   }, []);

//   return (
//     <>
//       {/* <HomeHeader /> */}
//       <HomeDialog visited={visited} />
//       <div className="container home-container ">
//         <div className="row  mt-3 mb-5 common-row">
//           {" "}
//           <div className="col-12 col-md-6 col-lg-6 video-section">
//             <h1 className="font-weight-bold nft-heading">
//               Check out your NFTs!
//             </h1>

//             <img src="/assets/images/commongif.gif" className="w-100 " alt="" />

//             <div className="nftBox">
//               <h3 style={{ fontSize: "20px" }} className="font-weight-bold">
//                 Future of Retail NFT - Las Vegas 2022
//               </h3>
//               <div className="text-right">
//                 <button
//                   className="header-btn "
//                   onClick={() => navigate("/nft-details")}
//                 >
//                   View NFT
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
