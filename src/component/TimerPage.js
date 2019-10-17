import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startTimerUp, startTimerDown, startTimerStop } from '../redux/actions/timerActions';


var intervalId;

class TimerPage extends Component {
  componentDidMount() {
    console.log("componentdidmount");
  };

  startTimerUp() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    console.log("var:", intervalId);
    return intervalId = setInterval(() => {
      this.props.actions.timerUp();
    }, 1000);
  }

  startTimerDown() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    return intervalId = setInterval(() => {
      this.props.actions.timerDown();
    }, 1000);
  }

  //timer'ı durdur
  startTimerStop() {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  render() {
    let counter = this.props.timer;
    return (
      <div>
        <h4><Badge>TIMER</Badge>{' '}
          <span className="tab">

            {counter}
          </span>
        </h4>
        <div>

          <Button onClick={() => this.startTimerUp()}>Start Timer Up</Button>{' '}
          <Button onClick={() => this.startTimerStop()}>STOP</Button>{' '}
          <Button onClick={() => this.startTimerDown()}>Start Timer Down</Button>

        </div>
        <div>
          <br />
          <Link to="/">Back to Home</Link>
        </div>
      </div>);
  }
}

const mapStateToProps = state => ({ timer: state.timerReducer });
const mapDispatchToProps = dispatch => ({
  actions: {
    timerUp: bindActionCreators(startTimerUp, dispatch),
    timerDown: bindActionCreators(startTimerDown, dispatch),
    timerStop: bindActionCreators(startTimerStop, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);