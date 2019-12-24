import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Select from 'react-select';
import DatePicker from "react-datepicker";

import {
    Link
} from "react-router-dom";


function handleChange(e) {
    console.log(e);
}


export default function CreateLessonForm(props) {
    const [start_at, setStart] = React.useState(null);
    const [end_at, setEnd] = React.useState(null);
    console.log(props);

    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tên bài học</Form.Label>
                <Form.Control
                    placeholder="Tên bài học"
                    name="name"
                    required
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Mô tả</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Mô tả"
                    name="description"
                    required
                />
            </Form.Group>


            <Form.Group controlId="formBasicPassword">
                <Form.Label>Video bài giảng</Form.Label>
                <Form.Control 
                    name="video"
                    placeholder="https://youtube.com/assc" 
                />
                <Form.Text
                    className="text-muted"
                    required
                >
                    Sẽ hỗ trợ upload video sau
                </Form.Text>
            </Form.Group>

            <Row>
                <Col>
                    <Form.Label>Bài tập trắc nghiệm</Form.Label>
                    <Select
                        options={props.quizSelectList}
                        name="quiz_id"
                        defaultValue={props.quiz_id}
                        required
                    />
                    <Button
                        className="btn-block btn-3"
                        variant="primary"
                        type="button"
                        onClick={props.handleNewQuizBtnClick}
                    >
                        Thêm bài tập mới
                    </Button>
                </Col>
                <Col>
                    <Form.Label>Bài tập tự luận</Form.Label>
                    <Select
                        className=""
                        onChange={handleChange}
                        options={props.essaySelectList}
                        name="essay_id"
                        required
                    />
                    <Button
                        className="btn-block btn-3"
                        variant="primary"
                        type="button"
                        onClick={props.handleNewEssayBtnClick}
                    >
                        Thêm bài tập mới
                    </Button>
                </Col>
            </Row>


            <Row className="mt-3">
                <Form.Group as={Col} controlId="name" 
                >
                    <Form.Label
                        className="d-block"
                    >
                        Thời gian bắt đầu
                            </Form.Label>
                    <DatePicker
                        className="form-control"
                        showTimeSelect={true}
                        dateFormat="yyyy-MM-dd HH:mm:ss"
                        selected={start_at}
                        onChange={setStart}
                        name="start_at"
                        minDate={new Date()}
                        required
                    />
                    <Form.Text className="text-muted">
                        Học viên sẽ thấy được bài này vào ngày bắt đầu
                    </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="image">
                    <Form.Label
                        className="d-block"
                    >
                        Thời gian kết thúc
                            </Form.Label>
                    <DatePicker
                        className="form-control"
                        showTimeSelect={true}
                        dateFormat="yyyy-MM-dd HH:mm:ss"
                        selected={end_at}
                        onChange={setEnd}
                        name="end_at"
                        minDate={new Date()}
                        required
                    />
                    <Form.Text className="text-muted">
                        Học viên sẽ không còn thấy được bài này vào ngày kết thúc
                    </Form.Text>
                </Form.Group>
            </Row>

            <Button className="btn btn-1 btn-block float-left" type="button" onClick={props.handleBackBtnClick}>
                Quay lại
                </Button>
            <Button className="btn btn-2 btn-block float-right" type="submit">
                Tạo
            </Button>
        </Form>
    )
}