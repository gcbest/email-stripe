import { FETCH_USER } from "../actions/types";

// setting initial state to null will let the reducer know the api request is still pending
export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            // it will return either the user object or false once it receives the response
            return action.payload || false;
        default:
            return state;
    }
}