import { REACT_APP_BASE_URL } from "../../../../config";
import { actionTypes } from "../../Constants/action-types";
// import { toast } from "react-toastify";

export const getHomeMovies = () => {
  console.log("====================================");
  console.log("CALLED ME MOVIES>>", REACT_APP_BASE_URL);
  console.log("====================================");
  return async function (dispatch) {
    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/videos/get_home_page_data`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const result = await response.json();

      if (response.status >= 200 && response.status < 400) {
        dispatch({ type: actionTypes.HOME_VIDEOS, payload: result });
      } else {
        dispatch({ type: actionTypes.HOME_VIDEOS_ERR });
      }
    } catch (err) {
      console.log(err, "error");
    }
  };
};
export const getAllVideos = () => {
  return async function (dispatch) {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/videos`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await response.json();
      if (response.status >= 200 && response.status < 400) {
        console.log(result);
        dispatch({ type: actionTypes.ALL_VIDEOS, payload: result });
      } else {
        dispatch({ type: actionTypes.ALL_VIDEOS_ERR });
      }
    } catch (err) {
      console.log("error");
    }
  };
};

export const deleteVideos = (id) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/videos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await response.json();
      if (response.status >= 200 && response.status < 400) {
        console.log(result.data.data.id);
        // toast.success("Record Deleted successfly!")
        dispatch({
          type: actionTypes.DELETE_VIDEO,
          payload: result.data.data.id,
        });
      } else {
        dispatch({ type: actionTypes.DELETE_VIDEO_ERR });
      }
    } catch (err) {
      console.log("error");
    }
  };
};

export const addVideo = (data) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/videos`, {
        method: "POST",
        body: data,
        // headers: {
        //     'Content-type': 'application/json',
        //     'Accept': 'application/json',
        // },
      });
      const result = await response.json();
      if (response.status >= 200 && response.status < 400) {
        //   toast.success("Video Added successfly!")
        dispatch({ type: actionTypes.ADD_VIDEO, payload: result.data });
      } else {
        dispatch({ type: actionTypes.ADD_VIDEO_ERR });
      }
    } catch (err) {
      console.log("error");
    }
  };
};
