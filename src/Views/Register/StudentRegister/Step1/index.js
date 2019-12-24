import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import ErrorDisplay from '../../../../Components/ErrorDisplay' 

export default function StudentRegisterStep1(props) {
    return (
            <Card className="register-content">
                <Card.Body>
                    <Card.Title>Thông tin tài khoản</Card.Title>
                    <Form 
                        onSubmit={props.stepProps.handleSubmit}
                    >
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="abc@mail.com" required/>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" minLength={6} required/>
                        </Form.Group>

                        <Form.Group controlId="rePassword">
                            <Form.Label>Nhập lại Password</Form.Label>
                            <Form.Control name="rePassword" type="password" minLength={6} required/>
                        </Form.Group>
                        <ErrorDisplay err={props.err}/>
                        <Button type="submit" className="register-nextBtn btn btn-1">
                            Tiếp tục
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
    )
}