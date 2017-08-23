// when you import any folder it will automatically give us the index.js file
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm
});