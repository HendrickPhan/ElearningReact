import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import ErrorDisplay from '../../../../Components/ErrorDisplay' 

export default function TeacherRegisterStep2(props) {
    return (
            <Card  className="register-content">
                <Card.Body>
                    <Card.Title>Thông tin cá nhân</Card.Title>
                    <Form onSubmit={props.stepProps.handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Họ và tên</Form.Label>
                            <Form.Control 
                                name="name" 
                                id="name" 
                                type="name" 
                                placeholder="Họ và tên" 
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="avatar">
                            <Form.Label>Hình đại diện</Form.Label>
                            <Form.Control 
                                id="avatar" 
                                type="file" 
                                name="avatar"
                                accept="image/*"
                                required/>
                        </Form.Group>

                        <Form.Group controlId="gender">
                            <Form.Label>Giới tính</Form.Label>
                            <Form.Control 
                                id="gender" 
                                as="select"
                                name="gender"
                                required
                            >
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="dateOfBirth">
                            <Form.Label>Ngày tháng năm sinh</Form.Label>
                            <Form.Control 
                                id="dateOfBirth" 
                                name="date_of_birth" 
                                type="date" 
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control 
                                id="phoneNumber" 
                                name="phone_number"
                                minLength={8}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control 
                                id="address" 
                                name="address"
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Mô tả ngắn về bản thân</Form.Label>
                            <Form.Control 
                                id="description" 
                                name="description" 
                                as="textarea" 
                                rows="3" 
                                required
                            />
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