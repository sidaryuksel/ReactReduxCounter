import React, { Component } from 'react'
import { increaseByTen } from '../../redux/actions/counterActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class IncreaseByTen extends Component {
    render() {
        return (
            <div>
                <button onClick = {e=> this.props.dispatch(increaseByTen())}>
                    10ar artır

                </button>
            </div>
        )
    }
}

function mapPropsToDispatch(dispatch){
    return {
        action: bindActionCreators(increaseByTen,dispatch)
    }
}

export default connect(mapPropsToDispatch)(IncreaseByTen)