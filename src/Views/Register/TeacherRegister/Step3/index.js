import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default function TeacherRegisterStep3(props) {
    return (
            <Card className="register-content">
                <Card.Body>
                    <Card.Title>Trình độ</Card.Title>
                    <Card.Text>
                    * Bằng cách cug cấp cho chúng tôi thông tin về bằng cấp, bạn có thể nhận được sự đánh giá
                    cao bởi phụ huynh và học sinh. Từ đó các khóa học của bạn sẽ được nhiều người tham gia hơn
                    </Card.Text>
                    <Form onSubmit={props.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="certificates" >
                                <Form.Label>Bằng cấp</Form.Label>
                                <Form.Control id="certificates" as="select">
                                    <option value="0">Đại học</option>
                                    <option value="1">Cao đẳng</option>
                                    <option value="1">Chứng chỉ tin học</option>
                                    <option value="1">Chứng chỉ anh văn</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="dateOfIssue">
                                <Form.Label>Ngày cấp</Form.Label>
                                <Form.Control id="dateOfIssue" name="date_of_issue" type="date" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="image">
                                <Form.Label>Hình ảnh</Form.Label>
                                <Form.Control id="image" type="file"/>
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="button" className="register-addBtn btn btn-2">
                            Thêm
                        </Button>
                       
                        <Button type="submit" className="register-nextBtn btn btn-1">
                            Tiếp tục
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
    )
}