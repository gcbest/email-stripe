import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = { new: true };
    // }

    // this format is provided by create-react-app and is equivalent to setting state in the constructor
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false })}/>;
        }

        return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })}/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

// if this component is unmounted reduxForm's default behavior is to dump all of the form values
export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);