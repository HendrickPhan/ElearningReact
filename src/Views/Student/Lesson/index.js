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

import Student from '../../../Layouts/Student';
import CourseCard from '../../../Components/CourseCard';
import StudentCard from '../../../Components/StudentCard';
import Rating from '../../../Components/Rating'
import ErrorDisplay from '../../../Components/ErrorDisplay'


class Lesson extends React.Component {

    constructor(props) {
        super(props);

        let localState = JSON.parse(window.localStorage.getItem('state'));
        let token = localState.login.userInfo.token;

        this.state = {
            token: 'Bearer ' + token,
            lessonId: props.match.params.lesson_id,
            courseId: props.match.params.course_id,
            lesson: {
                quiz_attempt: []
            },
        };
    }

    componentDidMount() {
        this.fetchLesson();
    }

    fetchLesson() {
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            method: "GET"
        };

        return fetch(process.env.REACT_APP_API_URL + `/course/${this.state.courseId}/${this.state.lessonId}/learn`, requestOptions)
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
                    lesson: data,
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
                <h2 className="text-center">{this.state.lesson.name || ''}</h2>
                <Container className="shadow p-1">
                    <iframe
                        style={{
                            width: '100%',
                            height: 500
                        }}
                        // width="560" 
                        // height="315" 
                        src={
                            this.state.lesson.video ?
                                this.state.lesson.video.replace('youtube.com/watch?v=', 'youtube.com/embed/') :
                                ''
                        }
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </Container>
                <Container className="shadow p-3 mt-3" fluid>
                    <Row className="mx-0">
                        <span className="block-title">Bài tập:</span>
                    </Row>
                    <Row className="mx-0">
                        {this.state.lesson.quiz_attempt.length ? (
                            <React.Fragment>
                                <div style={{flex: 1}}>Điểm trắc nghiệm: {`${this.state.lesson.quiz_attempt[0].point} / ${this.state.lesson.quiz_attempt[0].total_point}`}</div>
                                <Link to={`/quiz/${this.state.courseId}/${this.state.lessonId}`} className='btn btn-2'>
                                    Xem lại bài trắc nghiệm
                                </Link>
                            </React.Fragment>

                            ) : (
                            <Link to={`/quiz/${this.state.courseId}/${this.state.lessonId}`} className='btn btn-2'>
                                Làm bài trắc nghiệm
                            </Link>
                        )}
                        <Link to={`essay/${this.state.courseId}/${this.state.lessonId}`} className='btn btn-2'>
                            Làm bài tự luận
                        </Link>
                    </Row>
                
                </Container>
                <Container className="shadow p-3 mt-3" fluid>
                    <Row className="mx-0">
                        <span className="block-title">Bình luận:</span>
                    </Row>
                    <Row className="m-1">
                        <Image
                            src="http://127.0.0.1:8000/storage/uploads/images/avatars/157595010188507b1827c7c19998d6.jpg"
                            className="teacher-avatar"
                            roundedCircle
                        />&nbsp;
                            <span style={{ lineHeight: '50px' }}>Hải Nguyễn: Phần 1 vẫn chưa hiểu lắm</span>

                    </Row>
                    <Row className="m-1">
                        <Image
                            src="http://127.0.0.1:8000/storage/uploads/images/avatars/157595010188507b1827c7c19998d6.jpg"
                            className="teacher-avatar"
                            roundedCircle
                        />&nbsp;
                            <span style={{ lineHeight: '50px' }}>Hải Nguyễn: Thú vị, 5 sao</span>
                    </Row>
                    <Row className="mt-3 mx-0">
                        <Form style={{ width: '100%' }}>
                            <Form.Group controlId="comment">
                                <span className="block-title">Thêm bình luận:</span>
                                <Form.Control name="comment" as="textarea" placeholder="Bình luận" required />
                            </Form.Group>
                            <Button type="submit" className="register-nextBtn btn btn-1">
                                Thêm
                                </Button>
                        </Form>
                    </Row>
                </Container>

            </Student>
        )
    }
}

export default withRouter(Lesson);