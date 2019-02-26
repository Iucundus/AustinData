import React, { Component } from 'react';
import './SurveyPrompt.css';

class SurveyPrompt extends Component {

    // Todo: high resolution pictures, stylize the text
    render(){
        return(
            <div>
                <div id="landing-header">
                    <h1>All About Austin!</h1>
                    <a href="#" className="btn btn-lg btn-success">Start</a>
                </div>
                <ul className="slideshow">
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>
            </div>
        )
    }
}
export default SurveyPrompt;