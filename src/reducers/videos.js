import { handleActions } from 'redux-actions';
import * as actions from '../actions/videos';

const initialState = {
    videoOpen: false,
    videoId: null
};

export default handleActions(
    {
        [actions.CLOSE_VIDEO]: (state, { payload }) => {
            return {
                ...state,
                videoOpen: false,
                videoId: null
            };
        },
        [actions.OPEN_VIDEO]: (state, { payload }) => {
            return {
                ...state,
                videoOpen: payload.videoOpen,
                videoId: payload.videoId
            };
        },
        [actions.VIDEO_ID]: (state, { payload }) => {
            return {
                ...state,
                videoId: payload
            };
        }
    },
    initialState
);