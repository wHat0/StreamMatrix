import AsyncStorage from "@react-native-async-storage/async-storage";
import { actionTypes } from "../../Constants/action-types";
import { REACT_APP_BASE_URL } from "../../../../config";

// import { toast } from "react-toastify";

export const userLogin = (data, loginData) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/users/sign_in`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: data,
      });
      const result = await response.json();
      const authToken = response.headers.get("Authorization");
      if (response.status >= 200 && response.status < 400) {
        // toast.success("Login successfly!", result);

        console.log(loginData, "email", loginData?.email);
        await AsyncStorage.setItem("email", loginData.email);
        await AsyncStorage.setItem("authToken", authToken);
        await AsyncStorage.setItem("token", authToken);
        // AsyncStorage.setItem("username", result.first_name);
        // AsyncStorage.setItem("status", result.status);
        // AsyncStorage.setItem("role", result.role);
        // await AsyncStorage.setItem("email", email);
        if (result.status === "unpaid") {
          // toast.error("Please Upgrade your account to get full content")
        }

        dispatch({ type: actionTypes.LOGIN, payload: result });
      } else {
        // toast.error("Email or password is wrong!")
        dispatch({ type: actionTypes.LOGIN_ERR });
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
