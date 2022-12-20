// prod api
// export const API_BASE_URL = "https://api.app.niftmint.com/api";

// dev api
// export const API_BASE_URL = "https://api.dev.niftmint.com/api";

export const API_BASE_URL = "https://api.dev.niftmint.com/api/";

export const API_ROUTES = {
  AUTH_USER: {
    LOGIN: "auth/signin",
    SIGNUP: "auth/signup",
    VERIFY_OTP: "auth/verify",
    RESEND_OTP: "auth/generateOtp",
    FORGET_PASSWORD_STEP1: "auth/OtpSentViaEmail",
    FORGET_PASSWORD_STEP2: "auth/fpotpVerify",
    FORGET_PASSWORD_STEP3: "auth/resetPassword",
  },
  NFT: {
    MARKET_NFT_INFO: "nft/getNft",
    VIEW_NFT: "nft/transferNFT",
    GET_ALL_NFT: "nft/getAllNft",
    GET_ALL_NFT_BY_PRICE_RANGE: "nft/getAllNftsByPriceRange",
  },
  CART: {
    CART_ITEM: "cart/",
    ADD_TO_CART: "cart/addCart",
    DELETE_CART_ITEM: "cart/deleteCartItem",
  },
  USER: {
    WELCOME_USER: "user/welcome",
    COMPLETE_ACCOUNT: "user/setUserProfileData",
    COMPLETE_BIO: "user/setBio",
    USER_COLLECTION: "user/userCollection",
    ACCOUNT_SETTING_FIRST_FORM: "user/changeAccountSettings",
    ACCOUNT_SETTING_SECOND_FORM: "user/changePassword",
    ACCOUNT_SETTING_THIRD_FORM: "user/setMobileNumber",
  },
  PAYMENT: {
    PAYMENT_RECORD: "nft/setNftPaymentRecord",
  },
};
