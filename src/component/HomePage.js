import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <h1><font color="#4d6"><b>Merhaba!</b></font></h1>
                </div>
                <Link to="/page1">Got to Counter</Link>
                <br /><br/>
                <Link to="/saga">Got to Saga Page</Link>
            </div >
        )
    }
}
