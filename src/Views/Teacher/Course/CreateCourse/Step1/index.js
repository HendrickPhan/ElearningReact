import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import {
    Link
} from "react-router-dom";

import Teacher from '../../../../../Layouts/Teacher';


export default function CreateCourseStep1(props) {


    return (
        <Teacher>
            <Alert variant='primary'>
                Tạo khóa học thành công
            </Alert>

            <h2 className="mt-3 text-center">Tạo Khóa học</h2>
            <Card className="p-3">
                <Card.Body>
                    <Form onSubmit={props.handleSubmit}>
                        <h3 className="mb-3">Thông tin khóa học</h3>
                        <Form.Row>
                            <Form.Group as={Col} controlId="name">
                                <Form.Label>Tên khóa học</Form.Label>
                                <Form.Control placeholder="Tên khóa học" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="image">
                                <Form.Label>Hình đại diện</Form.Label>
                                <Form.Control type="file"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="sortDescription">
                            <Form.Label>Mô tả ngắn (tối đa 50 ký tự)</Form.Label>
                            <Form.Control as='textarea' placeholder="Mô tả ngắn" />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Mô tả chi tiết(tối thiểu 200 ký tự)</Form.Label>
                            <Form.Control as='textarea' placeholder="Mô tả" />
                        </Form.Group>

                        <Form.Group controlId="tuition_fee">
                            <Form.Label>Học phí</Form.Label>
                            <Form.Control value={0} type="number" />
                        </Form.Group>

                        <Form.Row controlId="description">
                            <Form.Group as={Col} controlId="subject">
                                <Form.Label>Môn</Form.Label>
                                <Form.Control as="select" type="number">
                                    <option>Chọn...</option>
                                    <option>Toán</option>
                                    <option>Lý</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="grade">
                                <Form.Label>Lớp</Form.Label>
                                <Form.Control as="select" type="number">
                                    <option>Chọn...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="minStudent">
                            <Form.Label>Số lượng học viên tối thiểu</Form.Label>
                            <Form.Control min="3" type="number" value={3} type="number" />
                            <Form.Text className="text-muted">
                                Khóa học sẽ bị hủy nếu không đạt số lượng học viên trước ngày bắt đầu.
                            </Form.Text>
                        </Form.Group>


                        <Form.Row controlId="description">
                            <Form.Group as={Col} controlId="subject">
                                <Form.Label>Ngày bắt đầu</Form.Label>
                                <Form.Control type="date" min={new Date().toISOString().split("T")[0]}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="grade">
                                <Form.Label>Ngày kết thúc</Form.Label>
                                <Form.Control type="date" min={new Date().toISOString().split("T")[0]}/>
                            </Form.Group>
                        </Form.Row>

                        <Button className="btn btn-block btn-1" type="submit">
                            Tiếp tục
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Teacher>
    )
}