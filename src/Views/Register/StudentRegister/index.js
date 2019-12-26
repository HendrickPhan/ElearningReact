import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import StudentRegisterStep1 from './Step1'
import StudentRegisterStep2 from './Step2'
import AuthLayout from '../../../Layouts/Auth';
import { withRouter } from 'react-router-dom';

class StudentRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
        };
    }

    handleSubmitStep1(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.forEach((value, key) => {
            this.setState({
                [key]: value
            });
        });

        if (formData.get('password') !== formData.get('rePassword')) {
            this.setState({
                err: "Mật khẩu không khớp"
            });
        } else {
            this.setState({
                err: null,
                step: this.state.step + 1
            });
        }
    }

    handleSubmitStep2(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let postFormData = new FormData();

        const {
            email,
            password,
        } = this.state;

        formData.forEach((value, key) => {
            postFormData.append([key], value);
            this.setState({
                [key]: value
            });
        });

        postFormData.append("email", email);
        postFormData.append("password", password);

        const requestOptions = {
            headers: {
                'Accept': 'application/json',
            },
            body: postFormData,
            method: "POST"
        };

        return fetch(process.env.REACT_APP_API_URL + '/student/register', requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = (data && data.message) || res.statusText;
                        return Promise.reject(error);
                    }
                    return data;
                })
            })
            .then(data => {
                localStorage.setItem('token', 'Bearer ' + data.token);
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    render() {
        let StepComponent;
        let stepProps = new Object();
        switch (this.state.step) {
            case 1:
                StepComponent = StudentRegisterStep1;
                stepProps.handleSubmit = (e) => this.handleSubmitStep1(e);
                break;
            case 2:
                StepComponent = StudentRegisterStep2;
                stepProps.handleSubmit = (e) => this.handleSubmitStep2(e);
                break;
        }
        return (
            <AuthLayout>
                <StepComponent
                    err={this.state.err}
                    stepProps={stepProps}
                />
            </AuthLayout>

        )
    }
}

export default withRouter(StudentRegister);