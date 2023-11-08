import { actionTypes } from "../../Constants/action-types";
// import { toast } from "react-toastify";
import { REACT_APP_BASE_URL } from "../../../../config";

export const getAllChannels = () => {
  return async function (dispatch) {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/posters`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await response.json();
      if (response.status >= 200 && response.status < 400) {
        console.log(result.data);
        dispatch({ type: actionTypes.ALL_CHANNELS, payload: result.data });
      } else {
        dispatch({ type: actionTypes.ALL_CHANNELS_ERR });
      }
    } catch (err) {
      console.log("error");
    }
  };
};

export const addChannel = (data) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/posters`, {
        method: "POST",
        body: data,
        // headers: {
        //     'Content-type': 'application/json',
        //     'Accept': 'application/json',
        // },
      });
      const result = await response.json();
      if (response.status >= 200 && response.status < 400) {
        // toast.success("Channel Added successfly!")
        console.log(result.data);
        dispatch({ type: actionTypes.ADD_CHANNEL, payload: result.data });
      } else {
        dispatch({ type: actionTypes.ADD_CHANNEL_ERR });
      }
    } catch (err) {
      console.log("error");
    }
  };
};

export const deleteChannel = (id) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/posters/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (response.status >= 200 && response.status < 400) {
        // toast.success("Record Deleted successfly!")
        console.log(result.data);
        dispatch({ type: actionTypes.DELETE_CHANNEL, payload: result.data });
      } else {
        dispatch({ type: actionTypes.DELETE_CHANNEL_ERR });
      }
    } catch (err) {
      console.log("error");
    }
  };
};
