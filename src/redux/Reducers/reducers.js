import { actionTypes } from "../Constants/action-types"

const initialState ={
  loading: true,
  user: null,
  users:[],
  videos:[],
  moviesVideos: {},
  showsVideos: {},
  kidsVideos: {},
  mostWatched: {},
  channels: [],
}

export const user_data = (state = initialState, { type, payload }) => {
  switch (type) {
        case actionTypes.SIGNUP:
          return {
              ...state, user: payload, loading: false
          };
         case actionTypes.LOGIN:
            return {
                ...state, user: payload, loading: false
         };
         case actionTypes.LOGINERR:
            return {
                ...state, loading: false
         };
        case actionTypes.SIGNUP_ERR:
          return {
              ...state, loading: false
          }
        case actionTypes.ALL_USERS:
          return {
            ...state, users: payload, loading: false
          }
        default:
          return { ...state }
  }
}

export const videos = (state = initialState, { type, payload }) => {
  switch (type) {
        case actionTypes.HOME_VIDEOS:
          return {
              ...state, video: payload, loading: false
          };
        case actionTypes.HOME_VIDEOS_ERR:
          return {
              ...state, loading: false
          }
        case actionTypes.MOVIES_VIDEOS:
          return {
              ...state, moviesVideos: payload, loading: false
          };
        case actionTypes.MOVIES_VIDEOS_ERR:
          return {
              ...state, loading: false
          }
        case actionTypes.SHOWS_VIDEOS:
          return {
              ...state, showsVideos: payload, loading: false
          };
        case actionTypes.SHOWS_VIDEOS_ERR:
          return {
              ...state, loading: false
          }
        case actionTypes.KIDS_VIDEOS:
          return {
              ...state, kidsVideos: payload, loading: false
          };
        case actionTypes.KIDS_VIDEOS_ERR:
          return {
              ...state, loading: false
          }
        case actionTypes.MOST_WATCHED:
          return {
              ...state, mostWatched: payload, loading: false
          };
        case actionTypes.MOST_WATCHED_ERR:
          return {
              ...state, loading: false
          }
        case actionTypes.ALL_VIDEOS:
            return {
                ...state, videos: payload, loading: false
            }
        case actionTypes.DELETE_VIDEO:
          return {
            ...state,
            videos: state.videos.filter(video => video.id !== payload),
            loading: false
          }
        case actionTypes.DELETE_VIDEO_ERR:
          return {
            ...state,
            loading: false
          }
        case actionTypes.ADD_VIDEO:
          console.log(state.videos)
          state.videos.push(payload)
          return{
            ...state,
          }
        default:
          return { ...state }
  }
}


export const channels = (state = initialState, { type, payload }) => {
  switch (type) {
        case actionTypes.ALL_CHANNELS:
          return {
              ...state, channels: payload, loading: false
          };
          case actionTypes.Add_CHANNEL:
            return {
                ...state, channels: state.channels.push(payload), loading: false
            };
        default:
          return { ...state }
  }
}
