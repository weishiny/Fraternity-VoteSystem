import React from 'react'
import { render } from 'react-dom'
import { bindActionCreators  } from 'redux'
import { connect } from 'react-redux'

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hero : ""
        }
    }

    _handleChange() {
        this.setState({
            hero: this.refs.txtHero.value
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, This is My new Hero. {this.state.hero}</h1>
                <input type="text" ref="txtHero" value={this.state.hero} onChange={this._handleChange.bind(this)} />
            </div>  
        );
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
)(Hero)
