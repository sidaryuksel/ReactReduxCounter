import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestJsonData } from '../redux/actions/dbActions';
import { ListGroup, ListGroupItem } from 'reactstrap';

class SagaPage extends Component {
    componentDidMount() {
        this.props.requestJsonData();
        console.log("action: ", this.props.requestJsonData());
    }

    usersList = (user) => (
        <div key={user.id}>
            <ListGroupItem>{user.firstName + ' ' + user.lastName + ' ' + user.age}</ListGroupItem>
        </div>
    )

    render() {
        const usersData = this.props.data;
        console.log("props:" ,this.props.data);
        console.log("usersData: ", usersData);
        return (
            <div>
                {usersData.length ? 
                <ListGroup>
                   {usersData.map(this.usersList)}
                </ListGroup>
                :
                <h1>loading...</h1>}

                <div>
                    <br />
                    <Link to="/">Back to Home</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ data: state.dataReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ requestJsonData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SagaPage);

