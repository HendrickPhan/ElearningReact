import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default function StudentRegisterStep2() {
    return (
            <Card className="register-content">
                <Card.Body>
                    <Card.Title>Thông tin cá nhân</Card.Title>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Họ và tên</Form.Label>
                            <Form.Control id="name" type="name" placeholder="abc@mail.com" />
                        </Form.Group>

                        <Form.Group controlId="avatar">
                            <Form.Label>Hình đại diện</Form.Label>
                            <Form.Control id="avatar" type="file"/>
                        </Form.Group>

                        <Form.Group controlId="gender">
                            <Form.Label>Giới tính</Form.Label>
                            <Form.Control id="gender" as="select">
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="dateOfBirth">
                            <Form.Label>Ngày tháng năm sinh</Form.Label>
                            <Form.Control id="dateOfBirth" name="date_of_birth" type="date" />
                        </Form.Group>
                        

                        <Form.Group controlId="phone">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control id="phone" name="phone"/>
                        </Form.Group>


                        <Form.Group controlId="address">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control id="address" name="address" />
                        </Form.Group>


                        <Form.Group controlId="description">
                            <Form.Label>Mô tả ngắn về bản thân</Form.Label>
                            <Form.Control id="description" name="description" as="textarea" rows="3" />
                        </Form.Group>

                        <Button variant="primary" type="button" className="nextBtn">
                            Tiếp tục
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
    )
}