import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Counter from './counter/Counter';
import CounterIncrease from './counter/CounterIncrease';
import CounterDecrease from './counter/CounterDecrease';
import IncreaseByTen from './counter/IncreaseByTen';
import DecreaseByTen from './counter/DecreaseByTen';

export default class LinkPage extends Component {
    render() {
        return (
           
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Counter />
                            </Col>
                            <Col>
                                <CounterIncrease />
                            </Col>
                            <Col>
                                <CounterDecrease />
                            </Col>

                            <Col>
                                <IncreaseByTen />
                            </Col>
                            <Col>
                                <DecreaseByTen />
                            </Col>
                        </Row>
                    </Container>

                <Link to="/">Back to Home</Link>
            </div>
        )
    }
}
