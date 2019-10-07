import React, { Component } from 'react';
import { decreaseByTen } from '../../redux/actions/counterActions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class DecreaseByTen extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>this.props.dispatch(decreaseByTen())}>
                    10ar eksilt
                </button>
            </div>
        )
    }
}

function mapPropsToDispatch(dispatch){
    return {action:bindActionCreators(decreaseByTen,dispatch)};
}

export default connect(mapPropsToDispatch) (DecreaseByTen);
