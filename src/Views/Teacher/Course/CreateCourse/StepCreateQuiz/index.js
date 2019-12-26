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
import CreateQuizForm from '../../../../../Components/CreateQuizForm';


export default function CreateCourseStepCreateQuiz(props) {

    return (
        <Teacher>
            <h2 className="mt-3 text-center">Tạo Bài Tập Trắc Nghiệm</h2>

            <Card className="p-3">
                <Card.Body>
                    {/*             
            <Alert variant='primary'>
                Tạo khóa học thành công
            </Alert> */}
                    <CreateQuizForm 
                        handleSubmit={(e) => props.stepProps.handleSubmit(e)}
                        handleBackBtnClick={(e) => props.handleBackBtnClick(e)}
                        quizCreateList={props.stepProps.quizCreateList}
                        handleQuizQuestionInputChange={(e) => props.stepProps.handleQuizQuestionInputChange(e)}
                        handleQuizAnswerInputChange={(e) => props.stepProps.handleQuizAnswerInputChange(e)}
                        handleNewQuizQuestionBtnClick={(e) => props.stepProps.handleNewQuizQuestionBtnClick(e)}
                        handleNewQuizAnswerBtnClick={(e) => props.stepProps.handleNewQuizAnswerBtnClick(e)}
                        handleDeleteQuizQuestionBtnClick={(e) => props.stepProps.handleDeleteQuizQuestionBtnClick(e)}
                        handleDeleteQuizAnswerBtnClick={(e) => props.stepProps.handleDeleteQuizAnswerBtnClick(e)}
                    />
                </Card.Body>
            </Card>
        </Teacher>
    )
} 