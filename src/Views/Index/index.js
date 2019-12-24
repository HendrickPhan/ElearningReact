import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import BannerBackground from '../../Statics/Images/banner.jpg'
import StudentBackground from '../../Statics/Images/student.jpg'
import TeacherBackground from '../../Statics/Images/teacher.jpg'
import ParentBackground from '../../Statics/Images/banner.jpg'

import NavBar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

import {
    Link
} from "react-router-dom";

import * as utils from '../../Utility/ShowOnScroll'
import '../../Utility/ButtonStyle.css';

export default function IndexPage(props) {
    let bannerStyle = {
        background: ` url(${BannerBackground})`
    }
    let studentBlockStyle = {
        minHeight: 400,
        background: ` url(${StudentBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    let teacherBlockStyle = {
        minHeight: 400,
        background: ` url(${TeacherBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <React.Fragment>
            <NavBar loggedIn={props.loggedIn}/>
            <Row className="index-banner" style={bannerStyle}>
                <Card className="index-bannerCard show-on-scroll">
                    <Card.Title className="index-bannerCardTitle">AiWan-Learning</Card.Title>
                    <Card.Body>
                        <Card.Text>
                            Website E-learning hàng đầu Việt Nam
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <hr />

            <Container fluid>

                <Row className="mx-0 mt-1 px-5 py-3 index-studentBlock">
                    <Col md={7} sm={12} className="show-on-scroll" style={studentBlockStyle}></Col>
                    <Col md={5} sm={12}>
                        <Container>
                            <h3 className="my-3 index-blockTitle">Quyền lợi của học sinh</h3>
                            <p className="index-blockDescription" >
                                Hệ thống bài học đa dạng từ tiểu học đến đại học,
                        đầy đủ tất cả các môn học. <br /><br />

                                Hệ thống bài tập trắc nghiệm cũng như tự luận theo từng bài học.<br /><br />

                                Được hàng trăm giáo viên hàng đầu cả nước giảng dạy. <br /><br />

                                Phần quà hấp dẫn mỗi ngày cho học viên đạt thành tích tốt.<br /><br />
                            </p>

                        </Container>
                    </Col>
                </Row>

                <hr />

                <Row className="mx-0 mt-1 px-5 py-3 index-teacherBlock">
                    <Col md={5} sm={12}>
                        <Container>
                            <h3 className="my-3  index-blockTitle" >Quyền lợi của giáo viên</h3>
                            <p className="index-blockDescription">
                                Tự do tạo các khóa học với học phí tùy ý.<br /><br />

                                Lượng học sinh dồi dào.<br /><br />

                                Giao diện thân thiện, dễ dàng quản lý các khóa học.<br /><br />

                                Giao diện thân thiện, dễ dàng quản lý các khóa học.<br /><br />
                            </p>

                        </Container>
                    </Col>
                    <Col md={7} sm={12} className="show-on-scroll" style={teacherBlockStyle}></Col>

                </Row>
                <hr />
                <Row>
                    <Link to="/register" className="btn btn-2" style={{ flex: 'unset', width: 'fit-content', margin: 'auto' }}>
                        Đăng ký ngay
                    </Link>
                </Row>
                <br />
                <br />    
            </Container>
                            {/* Footer */}
            <Footer/> 

        </React.Fragment>
    )
}