import React, { Component } from 'react';

class CategorySwitch extends Component {
    render(){
        return(
            <ul className="nav navbar-nav">
                <li><a href="https://www.wikipedia.org">Food</a></li>
                <li><a href="https://facebook.com">Education</a></li>
                <li><a href="https://facebook.com">Traffic</a></li>
            </ul>
        )
    }
}

export default CategorySwitch;