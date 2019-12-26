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


class CourseDetail extends React.Component {

    constructor(props) {
        super(props);

        let localState = JSON.parse(window.localStorage.getItem('state'));
        let token = localState.login.userInfo.token;

        this.state = {
            token: 'Bearer ' + token,
            courseId: props.match.params.id,
            course: {
                teacher: {},
                lessons: [],
                comments: []
            },
        };
    }

    componentDidMount() {
        console.log(this.state.courseId)
        this.fetchCourse();
    }

    fetchCourse() {
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            method: "GET"
        };

        return fetch(process.env.REACT_APP_API_URL + '/course/' + this.state.courseId, requestOptions)
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
                    course: data,
                    enrolled: data.enrolled_student.length > 0 ? true : false
                }, () => { console.log(this.state) });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    enrollCourseHandleBtnClick() {
        console.log(this.state);
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            method: "POST"
        };

        return fetch(process.env.REACT_APP_API_URL + `/course/${this.state.courseId}/enroll`, requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = data;
                        return Promise.reject(error);
                    }
                    return data;
                })
            })
            .then(data => {
                this.setState({
                    enrolled: true
                }, () => { console.log(this.state) });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    submitComment(e) {
        const formData = new FormData(e.target);
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            method: "POST",
            body: formData
        };

        return fetch(process.env.REACT_APP_API_URL + '/course/' + this.state.courseId + '/comment', requestOptions)
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
                this.fetchCourse()
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
                <Container style={{ position: 'relative' }} className="course-content-container shadow p-1 mb-3">
                    <Image
                        className="course-banner"
                        src={
                            this.state.course.avatar ?
                            process.env.REACT_APP_STORAGE_URL + this.state.course.avatar:
                            ''
                        }
                        fluid
                    />

                    {(this.state.enrolled === undefined || !this.state.enrolled) ? (
                        <Button
                            className="btn-2 btn-block enroll-btn shadow"
                            onClick={() => this.enrollCourseHandleBtnClick()}
                        >
                            Tham gia ({this.state.course.tuition_fee !== undefined && this.state.course.tuition_fee
                                ? new Intl.NumberFormat('en-US').format(this.state.course.tuition_fee) + ' Vnđ'
                                : 'Miễn phí'})
                            </Button>
                    ) : (<Button
                        className="btn-3 btn-block enroll-btn shadow"
                        disabled
                    >
                        Đã tham gia ({this.state.course.tuition_fee !== undefined && this.state.course.tuition_fee
                            ? new Intl.NumberFormat('en-US').format(this.state.course.tuition_fee) + ' Vnđ'
                            : 'Miễn phí'})
                            </Button>)
                    }

                </Container>
                <Container className="course-content-container shadow p-3">
                    <ErrorDisplay err={this.state.err} />
                    <h2 className="text-center">{this.state.course.name || ''}</h2>
                    <Row>
                        <Image
                            src={
                                this.state.course.teacher.avatar ?
                                process.env.REACT_APP_STORAGE_URL + this.state.course.teacher.avatar:
                                ''
                            }
                            className="teacher-avatar"
                            roundedCircle
                        />&nbsp;
                        <span style={{ 
                            lineHeight: '50px',
                            color: '#001f3f',
                            fontWeight: 700
                        }}>{this.state.course.teacher.name}</span>
                    </Row>
                    <Row className="mt-3">
                        <Rating
                            ratingStars={5}
                            ratingNumber={242}
                        />
                    </Row>

                    <Row className="mt-3">
                        <span><b>Từ ngày:</b> {this.state.course.start_at ? this.state.course.start_at.substr(0, 10) : ''} &nbsp;</span>
                        <span><b>đến ngày:</b> {this.state.course.end_at ? this.state.course.end_at.substr(0, 10) : ''}</span>
                    </Row>

                    <Row className="mt-3">
                        <span><b>Mô tả:</b> {this.state.course.description}</span>
                    </Row>
                    <Row className="mt-3">
                        <span className="block-title">Bài học:</span>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Tên bài học</th>
                                    <th >Mô tả</th>
                                    <th>Thời gian bắt đầu</th>
                                    <th>Thời gian kết thúc</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.course.lessons.map((lesson, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i}</td>
                                            <td><b>{lesson.name}</b></td>
                                            <td className='descriptionCell'>{lesson.description}</td>
                                            <td>{lesson.start_at}</td>
                                            <td>{lesson.end_at}</td>
                                            <td>{
                                                (this.state.enrolled
                                                    && new Date(lesson.start_at) <= new Date()
                                                    && new Date(lesson.end_at) >= new Date()
                                                ) ? (
                                                        <Link
                                                            className="btn btn-2 btn-block shadow"
                                                            to={`/course/${this.state.courseId}/${lesson.lesson_id}`}
                                                        >Học ngay
                                                        </Link>
                                                    ) : ''
                                            }</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Row>

                    <React.Fragment>
                        <Row className="mt-3">
                        <span className="block-title">Bình luận:</span>
                        </Row>
                        {this.state.course.comments.map((comment, i) => {
                            return (
                                <Row className="mt-1" key={comment.id}>
                                    <Image
                                        src={process.env.REACT_APP_STORAGE_URL + comment.user.avatar}
                                        className="teacher-avatar"
                                        roundedCircle
                                    />&nbsp;
                                    <div 
                                        style={{ lineHeight: '50px' }}
                                    >
                                        <span style={{
                                            color: '#001f3f',
                                            fontWeight: 700    
                                        }}>{comment.user.name}</span>
                                        <small> ({comment.created_at.substr(0,10)})</small>: {comment.content}
                                    </div>

                                </Row>  
                            )  
                        })}

                        {(this.state.enrolled === undefined || !this.state.enrolled) ? '' : (
                            <Row className="mt-3">
                                <Form style={{ width: '100%' }} onSubmit={ e=> {this.submitComment(e)}} >
                                    <Form.Group controlId="comment">
                                        <span className="block-title">Thêm bình luận:</span>
                                        <Form.Control name="content" as="textarea" placeholder="Bình luận" required />
                                    </Form.Group>
                                    <Button type="submit" className="register-nextBtn btn btn-1">
                                        Thêm
                                    </Button>
                                </Form>
                            </Row>
                        )}
                    </React.Fragment>
                </Container>
            </Student >
        )
    }
}

export default withRouter(CourseDetail);