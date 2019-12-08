import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import {
    Link
  } from "react-router-dom";
  
export default function LoginPage() {
    return (
            <Card>
                <Card.Body>
                    <Form className="content">
                        <h1>Đăng nhập</h1>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                       
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
    )
}