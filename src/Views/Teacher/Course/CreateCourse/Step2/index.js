import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import FontAwesome from 'react-fontawesome'


import {
    Link
} from "react-router-dom";

import Teacher from '../../../../../Layouts/Teacher';
import LessonSelectModal from '../../../../../Components/LessonSelectModal';


export default function CreateCourseStep2(props) {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Teacher>
            {/*             
            <Alert variant='primary'>
                Tạo khóa học thành công
            </Alert> */}

            <h2 className="mt-3 text-center">Tạo Khóa học</h2>
            <Card className="p-3">
                <Card.Body>
                    <Form onSubmit={props.handleSubmit}>
                        <h3 className="mb-3">Bài học</h3>
                        <Row>
                            <Col md={6}>
                                <Button 
                                    className="createCourse-selectLessonBtn" 
                                    variant="primary" 
                                    onClick={handleShow}
                                >
                                    Thêm bài học đã có
                                </Button>
                            </Col>

                            <Col md={6}>
                                <Button 
                                    className="createCourse-createLessonBtn" 
                                    variant="success"
                                    type="button"
                                    onClick={props.handleNewLessonBtnClick}
                                >
                                    Thêm bài học mới
                                </Button>
                            </Col>
                        </Row>

                        <h3 className="mt-3">Bài học đã thêm</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Tên bài học</th>
                                    <th>Ngày bắt đầu</th>
                                    <th>Ngày kết thúc</th>
                                    <th>Chi tiết / Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ma trận vô hướng</td>
                                    <td>2019-12-11</td>
                                    <td>2019-12-30</td>
                                    <td>
                                        <FontAwesome
                                            name="edit"
                                            className="mx-2 blue action-icon"
                                        /> 
                                        <FontAwesome
                                            name="trash"
                                            className="mx-2 red action-icon"
                                        />

                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Tích hai ma trận</td>
                                    <td>2019-12-11</td>
                                    <td>2019-12-30</td>
                                    <td>
                                        <FontAwesome
                                            name="edit"
                                            className="mx-2 blue action-icon"
                                        /> 
                                        <FontAwesome
                                            name="trash"
                                            className="mx-2 red action-icon"
                                        />

                                    </td>
                                </tr>
                                
                            </tbody>
                        </Table>

                        <Button className="btn btn-block btn-1" type="submit">
                            Tiếp tục
                    </Button>
                    </Form>
                </Card.Body>
            </Card>

            <LessonSelectModal
                show={show}
                handleClose={() => handleClose()}
            />
        </Teacher>
    )
} 