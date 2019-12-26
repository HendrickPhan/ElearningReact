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

const questionList = [
    {
        question: '1 + 1 =',
        point: 1,
    },
    {
        question: '2 + 3 =',
    },
    {
        question: '1 + 1 =',
    },
];


const QuestionComponent = (props) => {
    return (
        <React.Fragment>
            <Form.Row>
                <Form.Group controlId="" as={Col} md={8}>
                    <Form.Label>Câu hỏi {props.questionNo}</Form.Label>
                    <Form.Control
                        placeholder="Câu hỏi"
                        questionNo={props.questionNo}
                        value={props.question ? props.question : ''}
                    />
                </Form.Group>
                <Form.Group controlId="" as={Col} md={4}>
                    <Form.Label>Điểm</Form.Label>
                    <Form.Control
                        placeholder="Điểm"
                        type="number"
                        questionNo={props.questionNo}
                        value={props.point ? props.point : ''}
                    />
                </Form.Group>

            </Form.Row>
        </React.Fragment>
    )
}

export default function CreateEssayForm(props) {
    return (
        <Form>

            <Form.Group controlId="name">
                <Form.Label>Tên bài Tập</Form.Label>
                <Form.Control placeholder="Tên bài tập" />
            </Form.Group>

            {
                questionList.map((question, key) => {
                    return (
                        <QuestionComponent
                            question={question.question}
                            point={question.point}
                            questionNo={key}
                            answers={question.answers}
                        />
                    )
                })}
            <QuestionComponent />

            <Button className="btn btn-4 btn-block mb-5" type="button" onClick={props.handleBackBtnClick} questionNo={props.questionNo}>
                <small>Thêm câu hỏi</small>
            </Button>

            <Button className="btn btn-1 btn-block float-left" type="button" onClick={props.handleBackBtnClick}>
                Quay lại
                </Button>
            <Link to="/register" className="btn btn-2 btn-block float-right">
                Tạo
            </Link>
        </Form>
    )
}