"use strict";
import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { bindActionCreators  } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {
    render() {
        return (
           
            <div className="container">
                <Link to={"/Hero"}>Hero</Link>
                <Link to={"/Hello"}>Hello</Link>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
