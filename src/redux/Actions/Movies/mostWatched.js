import { actionTypes } from "../../Constants/action-types";
import { REACT_APP_BASE_URL } from "../../../../config";

export const getMostWatchedMovies = () => {
  return async function (dispatch) {
    try {
      const response = await fetch(
        `${REACT_APP_BASE_URL}/videos/most_viewed_videos`,
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
        dispatch({ type: actionTypes.MOST_WATCHED, payload: result });
      } else {
        dispatch({ type: actionTypes.MOST_WATCHED_ERR });
      }
    } catch (err) {
      console.log("error");
    }
  };
};
