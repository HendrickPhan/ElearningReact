import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Select from 'react-select';

import {
    Link
} from "react-router-dom";


function handleChange(e) {
    console.log(e);
}
const optionsQuiz = [
    { value: 'Trắc nghiệm Hello word C++', label: 'Trắc nghiệm  Hello word C++' },
    { value: 'Trắc nghiệm Nodejs for begin', label: 'Trắc nghiệm  Nodejs for begin' },
    { value: 'Trắc nghiệm Sóng', label: 'Trắc nghiệm Sóng' },
];

const optionsEssay = [
    { value: 'Bài tập Hello word C++', label: 'Bài tập Hello word C++' },
    { value: 'Bài tập Nodejs for begin', label: 'Bài tập Nodejs for begin' },
    { value: 'Bài tập Sóng', label: 'Bài tập Sóng' },
];


export default function CreateLessonForm(props) {
    return (
        <Form>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tên bài học</Form.Label>
                <Form.Control placeholder="Tên bài học" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Mô tả</Form.Label>
                <Form.Control as="textarea" placeholder="Mô tả" />
            </Form.Group>


            <Form.Group controlId="formBasicPassword">
                <Form.Label>Video bài giảng</Form.Label>
                <Form.Control placeholder="https://youtube.com/assc" />
                <Form.Text className="text-muted">
                    Sẽ hỗ trợ upload video sau
                </Form.Text>
            </Form.Group>

            <Row>
                <Col>
                    <Form.Label>Bài tập trắc nghiệm</Form.Label>
                    <Select
                        className=""
                        onChange={handleChange}
                        options={optionsQuiz}
                    />
                    <Button 
                        className="btn-block btn-3"
                        variant="primary"
                        type="button"
                        onClick={props.handleNewLessonBtnClick}
                    >
                        Thêm bài tập mới
                    </Button>
                </Col>
                <Col>
                    <Form.Label>Bài tập tự luận</Form.Label>
                    <Select
                        className=""
                        onChange={handleChange}
                        options={optionsEssay}
                    />
                    <Button 
                        className="btn-block btn-3"
                        variant="primary"
                        type="button"
                        onClick={props.handleNewLessonBtnClick}
                    >
                        Thêm bài tập mới
                    </Button>
                </Col>
            </Row>


            <Form.Row className="mt-3">
                <Form.Group as={Col} controlId="subject" className="pr-3">
                    <Form.Label>Ngày bắt đầu</Form.Label>
                    <Form.Control type="date" min={new Date().toISOString().split("T")[0]}/>
                    <Form.Text className="text-muted">
                        Học viên sẽ thấy được bài này vào ngày bắt đầu
                    </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="grade" className="pl-3">
                    <Form.Label>Ngày kết thúc</Form.Label>
                    <Form.Control type="date" min={new Date().toISOString().split("T")[0]}/>
                    <Form.Text className="text-muted">
                        Học viên sẽ không còn thấy được bài này vào ngày kết thúc
                    </Form.Text>
                </Form.Group>
            </Form.Row>

            <Button className="btn btn-1 btn-block float-left" type="button" onClick={props.handleBackBtnClick}>
                Quay lại
                </Button>
            <Link to="/register" className="btn btn-2 btn-block float-right">
                Tạo
                </Link>
        </Form>
    )
}