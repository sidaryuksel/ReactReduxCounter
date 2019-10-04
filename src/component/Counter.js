import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
              <h1><b>{this.props.counter}</b></h1> 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { counter: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);