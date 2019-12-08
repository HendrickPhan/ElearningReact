import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default function TeacherRegisterStep1(props) {
    console.log(props);
    return (
            <Card className="register-content">
                <Card.Body>
                    <Card.Title>Thông tin tài khoản</Card.Title>
                    <Form onSubmit={props.handleSubmit} >
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="abc@mail.com" />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>

                        <Form.Group controlId="rePassword">
                            <Form.Label>Nhập lại Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        
                        <Button type="submit" className="register-nextBtn btn btn-1">
                            Tiếp tục
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
    )
}