import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Select from 'react-select';
import FontAwesome from 'react-fontawesome'


import {
    Link
} from "react-router-dom";


const AnswerComponent = (props) => {
    return (
        <Form.Row>
            <Form.Group as={Col} md={8} className="pl-5">
                <Form.Control
                    placeholder="Câu trả lời"
                    value={props.answer.answer}
                    name="answer"
                    position={props.position}
                    qposition={props.questionPosition}
                    onChange={props.handleQuizAnswerInputChange}
                    required
                />
            </Form.Group>
            <Form.Group as={Col} md={2} >
                <Form.Check
                    inline
                    label="Đúng"
                    type="checkbox"
                    name="isCorrect"
                    position={props.position}
                    qposition={props.questionPosition}
                    onChange={props.handleQuizAnswerInputChange}
                    checked={props.isCorrect}
                />
            </Form.Group>
            <Form.Group as={Col} md={2} >
                <FontAwesome
                    name="trash"
                    className="mx-2 red action-icon pointer"
                    position={props.position}
                    qposition={props.questionPosition}
                    onClick={props.handleDeleteQuizAnswerBtnClick}
                />
            </Form.Group>

        </Form.Row>
    )
}

const QuestionComponent = (props) => {
    return (
        <React.Fragment>
            <Form.Row>
                <Form.Group controlId="" as={Col} md={8}>
                    <Form.Label>Câu hỏi {props.questionPosition + 1}</Form.Label>
                    <Form.Control
                        placeholder="Câu hỏi"
                        name="question"
                        position={props.questionPosition}
                        value={props.question ? props.question : ''}
                        onChange={props.handleQuizQuestionInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="" as={Col} md={2}>
                    <Form.Label>Điểm</Form.Label>
                    <Form.Control
                        placeholder="Điểm"
                        type="number"
                        name="point"
                        position={props.questionPosition}
                        value={props.point ? props.point : ''}
                        onChange={props.handleQuizQuestionInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group as={Col} md={2} className="d-flex flex-column justify-content-center">
                    <FontAwesome
                        onClick={props.handleDeleteQuizQuestionBtnClick}
                        position={props.questionPosition}
                        name="trash"
                        className="mx-2 red action-icon align-bottom pointer"
                    />
                </Form.Group>

            </Form.Row>

            {
                props.answers
                    ? props.answers.map((answer, key) => {
                        return (
                            <AnswerComponent
                                answer={answer}
                                questionPosition={props.questionPosition}
                                position={key}
                                key={key}
                                handleQuizAnswerInputChange={e => props.handleQuizAnswerInputChange(e)}
                                handleDeleteQuizAnswerBtnClick={e => props.handleDeleteQuizAnswerBtnClick(e)}
                                isCorrect={answer.isCorrect}
                            />
                        )
                    }) : ''
            }
            <Button
                className="btn btn-3 btn-block"
                type="button"
                onClick={props.handleNewQuizAnswerBtnClick}
                qposition={props.questionPosition}
            >
                <small>Thêm câu trả lời</small>
            </Button>
        </React.Fragment>
    )
}

export default function CreateQuizForm(props) {
    return (
        <Form onSubmit={props.handleSubmit}>

            <Form.Group controlId="name">
                <Form.Label>Tên bài Tập</Form.Label>
                <Form.Control 
                    placeholder="Tên bài tập" 
                    name="name"
                    required
                />

            </Form.Group>

            {
                props.quizCreateList.map((question, key) => {
                    return (
                        <QuestionComponent
                            key={key}
                            question={question.question}
                            point={question.point}
                            questionPosition={key}
                            answers={question.answers}
                            handleNewQuizAnswerBtnClick={e => props.handleNewQuizAnswerBtnClick(e)}
                            handleQuizAnswerInputChange={e => props.handleQuizAnswerInputChange(e)}
                            handleQuizQuestionInputChange={e => props.handleQuizQuestionInputChange(e)}
                            handleDeleteQuizQuestionBtnClick={e => props.handleDeleteQuizQuestionBtnClick(e)}
                            handleDeleteQuizAnswerBtnClick={e => props.handleDeleteQuizAnswerBtnClick(e)}
                        />
                    )
                })}

            <Button
                className="btn btn-4 btn-block mt-5"
                type="button"
                onClick={props.handleNewQuizQuestionBtnClick}
            >
                <small>Thêm câu hỏi</small>
            </Button>

            <Button
                className="btn btn-1 btn-block float-left"
                type="button"
                onClick={props.handleBackBtnClick}
            >
                Quay lại
                </Button>
            <Button 
                className="btn btn-2 btn-block float-right"
                type="submit"
            >
                Tạo
            </Button>
        </Form>
    )
}