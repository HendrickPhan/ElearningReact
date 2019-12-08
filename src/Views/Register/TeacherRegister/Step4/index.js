import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default function TeacherRegisterStep4(props) {
    return (
            <Card className="register-content">
                <Card.Body>
                    <Card.Title>Môn học giảng dạy</Card.Title>
                    <Card.Text>
                    * Thông tin này giúp cho học sinh có thể dễ dàng tìm thấy bạn cũng như các khóa học của bạn
                    </Card.Text>
                    <Form onSubmit={props.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="certificates" >
                                <Form.Label>Môn học</Form.Label>
                                <Form.Control id="certificates" as="select">
                                    <option value="0">Toán</option>
                                    <option value="1">Văn</option>
                                    <option value="1">Anh</option>
                                    <option value="1">Lý</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="certificates" >
                                <Form.Label>Lớp <small>(Nhấn giữ ctrl để chọn nhiều giá trị)</small></Form.Label>
                                <Form.Control id="certificates" as="select" multiple>
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="1">3</option>
                                    <option value="1">Cao đẳng</option>
                                    <option value="1">Đại học</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="button" className="register-addBtn btn btn-2">
                            Thêm
                        </Button>

                        <Button variant="primary" type="submit" className="register-nextBtn btn btn-1">
                            Hoàn tất
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
    )
}