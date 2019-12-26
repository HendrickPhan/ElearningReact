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
import CreateEssayForm from '../../../../../Components/CreateEssayForm';


export default function CreateCourseStepCreateEssay(props) {

    return (
        <Teacher>
            <h2 className="mt-3 text-center">Tạo Bài Tập</h2>

            <Card className="p-3">
                <Card.Body>
                    {/*             
            <Alert variant='primary'>
                Tạo khóa học thành công
            </Alert> */}
                    <CreateEssayForm 
                        handleBackBtnClick={(e) => props.handleBackBtnClick(e)}
                    />
                </Card.Body>
            </Card>
        </Teacher>
    )
} 