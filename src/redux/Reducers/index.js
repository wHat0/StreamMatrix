import { combineReducers } from "redux";
import {user_data, videos, channels} from "./reducers";

export const reducers= combineReducers(
    {
        user_data: user_data,
        videos: videos,
        channels: channels
    }
)
