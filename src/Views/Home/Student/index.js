import React from 'react';
import './index.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import { withRouter } from 'react-router-dom';


import {
    Link
} from "react-router-dom";

import Student from '../../../Layouts/Student';
import CourseCard from '../../../Components/CourseCard';
import StudentCard from '../../../Components/StudentCard';

import StudentBackground from '../../../Statics/Images/student.jpg'

class HomeStudent extends React.Component {

    constructor(props) {
        super(props);

        let localState = JSON.parse(window.localStorage.getItem('state'));
        let token = localState.login.userInfo.token;

        this.state = {
            recommendCourses: [],
            myCourses: [],
            token: 'Bearer ' + token
        };
    }

    componentDidMount() {
        this.fetchRecommendCourses();
        this.fetchMyCourses();

    }

    fetchRecommendCourses() {
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            method: "GET"
        };

        return fetch(process.env.REACT_APP_API_URL + '/course/recommend', requestOptions)
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
                    recommendCourses: data.data || []
                }, () => { console.log(this.state) });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    fetchMyCourses() {
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            method: "GET"
        };

        return fetch(process.env.REACT_APP_API_URL + '/course/student-my-courses', requestOptions)
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
                    myCourses: data.data || []
                }, () => { console.log(this.state) });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    onClickCardHandle(e) {

        console.log(e.target.getAttribute('cid'));
    }


    render() {
        const testCourseList = [
            {
                image: StudentBackground,
                name: 'Toán cao cấp',
                rating: {
                    ratingStars: 4,
                    ratingNumber: 133,
                    canRate: false
                },
                subject: 'Toán',
                grade: 'Đại học'
            },
            {
                image: StudentBackground,
                name: 'Lập trình Pascal',
                rating: {
                    ratingStars: 4,
                    ratingNumber: 232,
                    canRate: false
                },
                subject: 'Tin',
                grade: '11'
            },
            {
                image: StudentBackground,
                name: 'Sóng (Xuân Quỳnh)',
                rating: {
                    ratingStars: 5,
                    ratingNumber: 55,
                    canRate: false
                },
                subject: 'Văn',
                grade: '12'
            },
        ];
        const testStudentList = [
            {
                image: StudentBackground,
                name: 'Nguyễn Văn A',
                ages: 13,
                gpa: 8.6,
                totalCourses: 12,
            },
            {
                image: StudentBackground,
                name: 'Nguyễn Văn B',
                ages: 12,
                gpa: 9.1,
                totalCourses: 11,

            },
            {
                image: StudentBackground,
                name: 'Nguyễn Văn C',
                ages: 17,
                gpa: 8.9,
                totalCourses: 4,
            },
            {
                image: StudentBackground,
                name: 'Nguyễn Văn D',
                ages: 13,
                gpa: 8.2,
                totalCourses: 20,

            },
        ]

        return (
            <Student>
                <Alert variant='primary'>
                    <Link to="/">Bạn có 2 thông báo mới.</Link>

                </Alert>

                {this.state.myCourses.length ? (
                <React.Fragment>
                    <h2 className="mt-3">Khóa học của tôi</h2>
                    <Row>
                        {this.state.myCourses.map((course, index) => {
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
                ) : '' }

                <React.Fragment>
                    <h2 className="mt-3">Khóa học đề xuất</h2>
                    <Row>
                        {this.state.recommendCourses.map((course, index) => {
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

                <React.Fragment>
                    <h2 className="mt-3">Giáo viên đề xuất</h2>
                    <Row>
                        {testStudentList.map((student, index) => {
                            return (
                                <Col md={3} key={index}>
                                    <StudentCard
                                        image={student.image}
                                        name={student.name}
                                        ages={student.ages}
                                        gpa={student.gpa}
                                        totalCourses={student.totalCourses}
                                    />
                                </Col>
                            )
                        })}
                    </Row>

                </React.Fragment>


            </Student>
        )
    }
}

export default withRouter(HomeStudent);