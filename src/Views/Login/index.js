import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import AuthLayout from '../../Layouts/Auth';

import { loggedIn } from '../../Redux/Login'
import { connect } from 'react-redux';
import { compose } from 'redux';

import ErrorDisplay from '../../Components/ErrorDisplay' 

import {
    Link,
    withRouter
} from "react-router-dom";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            err: null
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
            },
            body: formData,
            method: "POST"
        };

        return fetch(process.env.REACT_APP_API_URL + '/auth/login', requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = (data && data.message) || res.statusText;
                        return Promise.reject("Sai email hoặc mật khẩu");
                    }
                    return data;
                })
            })
            .then(data => {
                let loginData = {userInfo: data}; 
                let localState = JSON.parse(localStorage.getItem('state')) || {};
                localState.login = loginData;
                localStorage.setItem('state', JSON.stringify(localState));
                this.props.dispatchLoggedIn(data);
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    render() {
        return (
            <AuthLayout>
                <Card>
                    <Card.Body>
                        <Form className="content" onSubmit={e => this.handleSubmit(e)}>
                            <h1>Đăng nhập</h1>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <ErrorDisplay 
                                err={this.state.err}
                            />
                            <ButtonGroup className="buttonGroup">
                                <Button className="btn btn-1" type="submit">
                                    Đăng nhập
                            </Button>
                                <Link to="/register" className="btn btn-2">
                                    Đăng ký
                            </Link>
                            </ButtonGroup>
                        </Form>
                    </Card.Body>
                </Card>
            </AuthLayout>
        )
    }
}

const mapState = state => ({
});

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLoggedIn: (userInfo) => dispatch(loggedIn(userInfo)),
    };
}
export default compose(
    withRouter,
    connect(mapState, mapDispatchToProps)
)(LoginPage);
