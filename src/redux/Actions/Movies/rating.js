import { actionTypes } from "../../Constants/action-types";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { toast } from "react-toastify";
import { REACT_APP_BASE_URL } from "../../../../config";

export const addRatings = (data) => {
  return async function (dispatch) {
    let tokenData;
    const myToken = AsyncStorage.getItem("authToken");
    if (myToken) {
      tokenData = myToken;
    } else {
      tokenData = "";
    }
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/ratings`, {
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
        // toast.success('Thanks for your ratings')
      } else {
        // toast.error('You need to Signup or login to give reviews')
      }
    } catch (err) {
      // toast.error('Error While Adding ratings')
    }
  };
};
