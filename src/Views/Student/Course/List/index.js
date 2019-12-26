import React from 'react';
import './index.css';

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { withRouter } from 'react-router-dom';


import {
    Link
} from "react-router-dom";

import Student from '../../../../Layouts/Student';
import CourseCard from '../../../../Components/CourseCard';
import StudentCard from '../../../../Components/StudentCard';
import Rating from '../../../../Components/Rating'
import ErrorDisplay from '../../../../Components/ErrorDisplay'


class CourseList extends React.Component {

    constructor(props) {
        super(props);

        let localState = JSON.parse(window.localStorage.getItem('state'));
        let token = localState.login.userInfo.token;

        this.state = {
            token: 'Bearer ' + token,
            courses: [],
        };
    }

    componentDidMount() {
        this.fetchCourses();
    }

    fetchCourses() {
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            method: "GET"
        };

        return fetch(process.env.REACT_APP_API_URL + '/course/student-index', requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = (data && data.message) || res.statusText;
                        return Promise.reject(error);
                    }
                    return data;
                })
            })
            .then(data => {
                this.setState({
                    courses: data,
                }, () => { console.log(this.state) });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    render() {
        return (
            <Student >
                {this.state.courses.map((subject, i) => {
                    return subject.courses.length ? (
                        <React.Fragment key={subject.id} >
                            <h2 className="mt-3">{subject.name}</h2>
                            <Row>
                                {subject.courses.map((course, index) => {
                                    return (
                                        <Col md={4} key={index}>
                                            <Link to={`/course/${course.id}`} className="nostyle-link">
                                                <CourseCard
                                                    image={process.env.REACT_APP_STORAGE_URL + course.avatar}
                                                    subject={course.subject.name}
                                                    fee={course.tuition_fee}
                                                    grade={course.grade.name}
                                                    name={course.name}
                                                    totalStudent={course.joined_students}
                                                    rating={5}
                                                />
                                            </Link>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </React.Fragment>
                    ) : ''
                })}
                
            </Student >
        )
    }
}

export default withRouter(CourseList);