import axios from 'axios';
import { FETCH_USER } from "./types"

// redux-thunk is what passes dispatch function,
// into any returned functions in actions

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user');

        dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleStripeToken = (token) => async dispatch => {
        // token we got back from stripe
        const res = await axios.post('/api/stripe', token);

        dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
        const res = await axios.post('/api/surveys', values);

        history.push('/surveys');
        dispatch({ type: FETCH_USER, payload: res.data });

};