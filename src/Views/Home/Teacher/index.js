import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'


import {
    Link
} from "react-router-dom";

import Teacher from '../../../Layouts/Teacher';
import CourseCard from '../../../Components/CourseCard';
import StudentCard from '../../../Components/StudentCard';

import StudentBackground from '../../../Statics/Images/student.jpg'


export default function HomeTeacherPage() {
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
        <Teacher>
            <Alert variant='primary'>
                <Link to="/">Bạn có 2 câu hỏi mới.</Link>

            </Alert>

            <React.Fragment>
                <h2 className="mt-3">Khóa học sắp diễn ra</h2>
                <Row>
                    {testCourseList.map((course, index) => {
                        return (
                            <Col md={4} key={index}>
                                <CourseCard
                                    image={course.image}
                                    subject={course.subject}
                                    grade={course.grade}
                                    name={course.name}
                                    rating={course.rating}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </React.Fragment>

            <React.Fragment>
                <h2 className="mt-3">Khóa học nổi bật</h2>
                <Row>
                    {testCourseList.map((course, index) => {
                        return (
                            <Col md={4} key={index}>
                                <CourseCard
                                    image={course.image}
                                    subject={course.subject}
                                    grade={course.grade}
                                    name={course.name}
                                    rating={course.rating}
                                />
                            </Col>
                        )
                    })}
                </Row>
            </React.Fragment>

            <React.Fragment>
                <h2 className="mt-3">Học viên xuất sắc</h2>
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


        </Teacher>
    )
}