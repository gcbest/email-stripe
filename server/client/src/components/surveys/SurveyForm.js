// Shows form for user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    // any custom props add to Field component will be passed as props to our component
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
           return (
               <Field key={name} component={SurveyField} type="text" label={label} name={name} />
           );
        });
    }
    // this.props.handleSubmit is automatically added to the Component by connecting reduxForm
    render() {
        // <form onSubmit={this.props.handleSubmit((values) => console.log(values))}>  how to see the values passed into it
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button className="teal btn-flat right white-text" type="submit">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

// values passed to the function from reduxForm
function validate(values) {
    // if reduxForm gets this errors object back empty it knows the form is ready to be submitted
    const errors = {};

    // validation runs when the component is first loaded,
    // so to provide it with an initial value we passed ''
    errors.recipients = validateEmails(values.recipients || '');

    // property name on error must match property name on values
    _.each(formFields, ({name}) => {
       if (!values[name]) {
           errors[name] = 'You must provide a value'
       }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);