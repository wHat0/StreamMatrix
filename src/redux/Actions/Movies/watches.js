// import { actionTypes } from "../../Constants/action-types";
// import { toast } from "react-toastify";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REACT_APP_BASE_URL } from "../../../../config";

export const addVideoWatch = (id) => {
  return async function (dispatch) {
    let tokenData;
    const myToken = AsyncStorage.getItem("authToken");
    if (myToken) {
      tokenData = myToken;
    } else {
      tokenData = "";
    }
    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/videos/${id}/increase_video_view`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `${tokenData}`,
          },
        }
      );
      const result = await response.json();
      if (response.status >= 200 && response.status < 400) {
      } else {
        console.log(result?.error);
      }
    } catch (err) {
      console.log("watch not increased");
    }
  };
};
