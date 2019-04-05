import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class BasicFilters extends Component {

    OnFilterChange = () => {
        // this.props.OnFilterChange();
    }


    renderRatingRatioOptions = (name) => {
        return (
            <div>
                <label>
                    <Field name={name} value="8" component="input" type="radio"/>
                    > 8
                </label>
                <label>
                    <Field name={name} value="5" component="input" type="radio"/>
                    >5
                </label>
                <label>
                    <Field name={name} value="2" component="input" type="radio"/>
                    >2
                </label>
            </div>
        )
    }


    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props
        return(
            <form onSubmit={(e) => handleSubmit(e)}>
                Need Styling! in one row and modify the text
                <div>
                    <label>Food Score</label>
                    {this.renderRatingRatioOptions("foodGt")}
                    <label>Traffic Score</label>
                    {this.renderRatingRatioOptions("trafficGt")}
                    <label>Education Score</label>
                    {this.renderRatingRatioOptions("educationGt")}
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>

        )
    }
}
export default reduxForm({
    form: 'ZipcodesBasicFilter' // a unique identifier for this form
  })(BasicFilters)

