import { actionTypes } from "../../Constants/action-types";
// import { toast } from "react-toastify";
import { REACT_APP_BASE_URL } from "../../../../config";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const Signup = (data) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: data,
      });
      console.log("====================================");
      console.log("HERE IS THE ISSUE>>>", response);
      console.log("====================================");
      const result = await response.json();
      const authToken = response.headers.get("Authorization");
      if (response.status >= 200 && response.status < 400) {
        AsyncStorage.setItem("register", JSON.stringify(true));
        AsyncStorage.setItem("authToken", authToken);
        AsyncStorage.setItem("userId", JSON.stringify(result.id));
        //   toast.success("user registered successfly!")
        dispatch({ type: actionTypes.SIGNUP, payload: result });
      } else {
        if (result?.message) {
          console.log(result?.message[0], "result?.message[0]");
          AsyncStorage.setItem("register", JSON.stringify(result?.message[0]));

          // toast.error(result?.message[0])
        } else {
          console.log("error registered user!");
        }
        dispatch({ type: actionTypes.SIGNUP_ERR });
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const editUser = (data) => {
  return async function (dispatch) {
    const tokenData = AsyncStorage.getItem("authToken");
    const userId = AsyncStorage.getItem("userId");
    return new Promise(async (resolve) => {
      try {
        const response = await fetch(
          `${REACT_APP_BASE_URL}/packages/create_charge?title=${data.title}&price=${data.price}&description=${data.description}&user_id=${userId}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `${tokenData}`,
            },
          }
        );
        const result = await response.json();
        if (response.status >= 200 && response.status < 400) {
          window.location.href = result?.url;
          // toast.success(result?.message)
          resolve(response.status);
        } else {
          // toast.error(result?.message)
          resolve(response.status);
        }
      } catch (err) {
        console.log("result is", err);
        resolve(err);
      }
    });
  };
};
