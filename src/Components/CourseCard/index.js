import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import {
    Link
} from "react-router-dom";

import Rating from '../Rating'

export default function CourseCard(props) {
    let image =
        props.image !== undefined && props.image
            ? props.image
            : 'static image';
    let name =
        props.name !== undefined
            ? props.name
            : '';

    let subject =
        props.subject !== undefined
            ? props.subject
            : '';

    let grade =
        props.grade !== undefined
            ? props.grade
            : '';

    let rating = props.rating !== undefined
        ? props.rating
        : {
            ratingStars: 0,
            ratingNumber: 0,
            canRate: false
        }

    let totalStudent = props.totalStudent !== undefined
        ? props.totalStudent
        : 0;

    let fromDate = props.fromDate !== undefined
        ? props.fromDate
        : '2019-01-01';

    let toDate = props.toDate !== undefined
        ? props.toDate
        : '2019-01-10';

    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className="courseCard-title" ><b>{name}</b></Card.Title>
                <Card.Text className="courseCard-text">
                    Môn: <b>{subject}</b><br/>
                    Lớp: <b>{grade}</b><br/>
                    Số lượng học viên: <b>{totalStudent}</b><br/>
                    Bắt đầu: <b>{fromDate}</b><br/>
                    Kết thúc: <b>{toDate}</b>
                </Card.Text>
                <Rating 
                    ratingStars={rating.ratingStars}
                    canRate={rating.canRate}
                    ratingNumber={rating.ratingNumber}
                />
            </Card.Body>
        </Card>
    )
}