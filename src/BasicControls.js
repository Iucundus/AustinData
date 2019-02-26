import React, { Component } from 'react';
import GoogleLogin from "react-google-login";
import './BasicControls.css';

const responseGoogle = (response) => {
    console.log(response);
}

class BasicControls extends Component {
    render() {
        return(
            <ul className="nav navbar-nav navbar-right">
                <li><a href="https://www.wikipedia.org">About</a></li>
                <li><a href="https://facebook.com">Profile </a></li>
                <li><a href="">Login</a></li>
                {/* <li><GoogleLogin onSuccess={responseGoogle} onFailure={responseGoogle} clientId={"280689795193-ubapinqcg16ah7vlskd1oimoisf82bsm.apps.googleusercontent.com"}/></li> */}
            </ul>
        )
    }
}
export default BasicControls;