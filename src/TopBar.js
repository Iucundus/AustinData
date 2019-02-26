import React, { Component } from 'react';
import CategorySwitch from "./CategorySwitch";
import BasicControls from "./BasicControls";
import './BasicControls.css';
import './CategorySwitch.css';
import './TopBar.css';


class TopBar extends Component {

    render() {
        return(
            <div>
                <nav className="navbar navbar-inverse navbar-static-top">
                    <div className="container-fluid">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">AAA</a>
                        </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <CategorySwitch />
                            <BasicControls />
                        </div>{/* /.navbar-collapse */}
                    </div>{/* /.container-fluid */}
                </nav>
            </div>
        )
    }
}
export default TopBar;

