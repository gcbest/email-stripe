import axios from 'axios';
import { FETCH_USER } from "./types"

export const fetchUser = () => {
    // redux-thunk is what passes dispatch function,
    // into any returned functions in actions
    return function(dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res}));
    }
};