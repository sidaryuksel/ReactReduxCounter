import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {increase, decrease}  from '../../redux/actions/counterActions';
import { connect } from 'react-redux';


class CounterIncrease extends Component {
    render() {
        return (
            <div>
                <button onClick={e => this.props.dispatch(increase())}>Artır</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions:bindActionCreators(decrease, dispatch)
    };
}

export default connect(mapDispatchToProps)(CounterIncrease);