import React from 'react';
import './index.css';

import Card from 'react-bootstrap/Card'

import {
    Link
} from "react-router-dom";


export default function StudentCard(props) {
    let image =
        props.image !== undefined && props.image
            ? props.image
            : 'static image';
    let name =
        props.name !== undefined
            ? props.name
            : '';

    let ages =
        props.ages !== undefined
            ? props.ages
            : '';

    let totalCourses =
        props.totalCourses !== undefined
            ? props.totalCourses
            : 0;
    
    let gpa =
        props.gpa !== undefined
            ? props.gpa
            : '';

    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className="studentCard-title" ><b>{name}</b></Card.Title>
                <Card.Text className="studentCard-text">
                    Tuổi: <b>{ages}</b><br />
                    Điểm trung bình: <b>{gpa}</b><br />
                    Số lượng khóa học: <b>{totalCourses}</b>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}