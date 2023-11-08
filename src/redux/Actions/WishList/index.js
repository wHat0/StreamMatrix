import AsyncStorage from "@react-native-async-storage/async-storage";
import { actionTypes } from "../../Constants/action-types";
// import { toast } from "react-toastify";
import { REACT_APP_BASE_URL } from "../../../../config";

export const addToWishList = (data) => {
  return async function (dispatch) {
    let tokenData;
    const myToken = AsyncStorage.getItem("authToken");
    if (myToken) {
      tokenData = myToken;
    } else {
      tokenData = "";
    }
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/wish_lists`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `${tokenData}`,
        },
        body: data,
      });
      const result = await response.json();
      if (response.status >= 200 && response.status < 400) {
        // toast.success('Add to wish list successfully')
      } else {
        // toast.error(result?.error)
      }
    } catch (err) {
      // toast.error('Error whole adding to WishList')
    }
  };
};
