import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Counter from './counter/Counter';
import CounterIncrease from './counter/CounterIncrease';
import CounterDecrease from './counter/CounterDecrease';
import IncreaseByTen from './counter/IncreaseByTen';
import DecreaseByTen from './counter/DecreaseByTen';

export default class LinkPage extends Component {
    render() {
        return (
            <div>
                <div className="col-md-3">
                    <Counter /><br />
                    <CounterIncrease /><br />
                    <CounterDecrease /><br />
                    <IncreaseByTen /><br />
                    <DecreaseByTen /><br/>
                </div>
                <Link to="/">Back to Home</Link>
            </div>
        )
    }
}
