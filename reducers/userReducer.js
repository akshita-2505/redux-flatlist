import { SET_USER_LIST, SET_LOADER } from "../actions/types";

const INITIAL_STATE = {
    userList: [],

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_LIST:{
            return{
                ...state,
                userList: action.payload
            }
        }

        default:
            return state;
    }
}