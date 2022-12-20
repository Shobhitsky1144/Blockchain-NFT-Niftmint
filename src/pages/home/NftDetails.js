// import React, { useState, useContext } from "react";
// import HomeHeader from "../../components/headers/HomeHeader";
// import CompleteWalletDialog from "../../pagesdialog modal/CompleteWalletDialog";
// import HomeTransferDialog, {
//   First,
// } from "../../pagesdialog modal/HomeTransferDialog";
// import Button from "@mui/material/Button";

// const NftDetails = () => {
//   const [transferPopup, setTransferPopup] = useState(false);

//   const [completeWallet, setCompleteWallet] = useState(false);
//   // const first = useContext(First);
//   // console.log("gg", first._currentValue2);

//   const checkWallet = () => {
//     const { wallet_address } = JSON.parse(localStorage.getItem("auth_user"));
//     if (wallet_address) {
//       setCompleteWallet(true);
//     }
//     setTransferPopup(true);
//   };

//   return (
//     <>
//       {/* <HomeHeader /> */}
//       {completeWallet ? (
//         <CompleteWalletDialog completeWallet={completeWallet} />
//       ) : (
//         <HomeTransferDialog transferPopup={transferPopup} />
//       )}
//       <div className="container home-container ">
//         <div className="row  mt-3 mb-3 common-row">
//           {" "}
//           <div className="col-12 col-md-6 col-lg-6 video-section">
//             <h1 className="font-weight-bold nft-heading">Future of Retail</h1>

//             <img
//               src="/assets/images/commongif.gif"
//               className="w-100 gif"
//               alt=""
//             />

//             <div className="afternftBox">
//               <h4 className="font-weight-bold">Item Information</h4>
//               <h6 className="font-weight-bold">Description</h6>

//               <p>Future of Retail NFT - Las Vegas 2022</p>
//             </div>
//           </div>
//           <div className="col-12 col-md-6 col-lg-6 home-section-second ">
//             <div className="header">
//               <p className="text">
//                 Want to transfer your NFT to your own NFT wallet?
//               </p>

//               <button
//                 className="header-btn"
//                 // onClick={() => setTransferPopup(true)}
//                 onClick={checkWallet}
//               >
//                 Transfer
//               </button>
//             </div>
//             <div className="form mt-4">
//               <div
//                 class="form-group"
//                 style={{ borderBottom: "1px solid lightGray" }}
//               >
//                 <label for="pwd" className="forms-labelss">
//                   Contract Address
//                 </label>
//                 <div className="home-data">
//                   {/* <a href="#" target="_blank " className="anchr-link">
//                         0x5c0A1D988E532F099ce2ab2e7749d460D8D81a6a
//                       </a> */}
//                   Pending...
//                 </div>
//               </div>

//               <div
//                 class="form-group"
//                 style={{ borderBottom: "1px solid lightGray" }}
//               >
//                 <label for="pwd" className="forms-labelss">
//                   Blockchain
//                 </label>
//                 <div className="home-data">Polygon</div>
//               </div>

//               <div
//                 class="form-group"
//                 style={{ borderBottom: "1px solid lightGray" }}
//               >
//                 <label for="pwd" className="forms-labelss">
//                   Token Standard
//                 </label>
//                 <div className="home-data">ERC721</div>
//               </div>

//               <div
//                 class="form-group"
//                 style={{ borderBottom: "1px solid lightGray" }}
//               >
//                 <label for="pwd" className="forms-labelss">
//                   Metadata
//                 </label>
//                 <div className="home-data">
//                   {/* <a href="#" target="_blank" className="anchr-link">
//                         IPFS Link
//                       </a> */}
//                   Pending...
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NftDetails;
