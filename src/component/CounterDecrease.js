import React, { Component } from 'react';
import {Button} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { decrease } from '../redux/actions/counterActions';
import {connect} from 'react-redux'

class CounterDecrease extends Component {
    render() {
        return (
            <div>
                <Button color="primary" onClick= {e=> this.props.dispatch(decrease())}>
                Eksilt
                </Button>
            </div>
        )
    }
}

function mapPropsToDispatch(dispatch){
    return {
        action:bindActionCreators(decrease,dispatch)
    }
}

export default connect (mapPropsToDispatch)(CounterDecrease);