import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import FontAwesome from 'react-fontawesome'


const SubjectGradeRow = (props) => {
    return (
        <Form.Row>
            <Form.Group as={Col} controlId="subject" md={5}>
                <Form.Label>Môn học</Form.Label>
                <Form.Control 
                    name="subject" 
                    as="select"  
                    value={props.subject}
                    position={props.position}
                    onChange={props.handleInputChangeStep4}
                    required
                >
                    <option>Chọn...</option>
                    {props.subjectSelectList.map((v, i) => {
                        return (
                            <option
                                value={v.id}
                                key={v.id}
                            >
                                {v.name}
                            </option>
                        )
                    })}

                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="grade" md={5}>
                <Form.Label>Lớp <small>(Nhấn giữ ctrl để chọn nhiều giá trị)</small></Form.Label>
                <Form.Control
                    name="grades" 
                    as="select" 
                    value={props.grade}
                    position={props.position}
                    onChange={props.handleMultipleInputChangeStep4}
                    multiple
                    required
                    >
                    <option>Chọn...</option>
                    {props.gradeSelectList.map((v, i) => {
                        return (
                            <option
                                value={v.id}
                                key={v.id}
                            >
                                {v.name}
                            </option>
                        )
                    })}
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} md={2}>
                
                <FontAwesome
                    className="pt-3 mt-3"
                    style={{
                        fontSize: 24,
                        cursor: 'pointer'
                    }}
                    name="trash"
                    position={props.position}
                    onClick={props.handleDeleteBtnStep4}
                />
            </Form.Group>

        </Form.Row>
    )
}

const SubjectGradeSelectedRow = (props) => {
    return (
        <React.Fragment>
            {props.gradeSubjectSelected.map((v, i) => {
                return (
                    <SubjectGradeRow
                        subjectSelectList={props.subjectSelectList}
                        gradeSelectList={props.gradeSelectList}
                        subject={v.subject}
                        grade={v.grade}
                        handleInputChangeStep4={props.handleInputChangeStep4}
                        handleDeleteBtnStep4={props.handleDeleteBtnStep4}
                        handleMultipleInputChangeStep4={props.handleMultipleInputChangeStep4}
                        position={v.position}
                        key={i}
                    />
                )
            })}
        </React.Fragment>
    )

}

export default function TeacherRegisterStep4(props) {
    return (
        <Card className="register-content">
            <Card.Body>
                <Card.Title>Môn học giảng dạy</Card.Title>
                <Card.Text>
                    * Thông tin này giúp cho học sinh có thể dễ dàng tìm thấy bạn cũng như các khóa học của bạn
                    </Card.Text>
                <Form onSubmit={props.stepProps.handleSubmit}>
                    <SubjectGradeSelectedRow
                        gradeSubjectSelected={props.stepProps.gradeSubjectSelected}
                        subjectSelectList={props.stepProps.subjectSelectList}
                        gradeSelectList={props.stepProps.gradeSelectList}
                        gradeSubjectSelected={props.stepProps.gradeSubjectSelected}
                        handleInputChangeStep4={props.stepProps.handleInputChangeStep4}
                        handleDeleteBtnStep4={props.stepProps.handleDeleteBtnStep4}
                        handleMultipleInputChangeStep4={props.stepProps.handleMultipleInputChangeStep4}
                    />

                    <Button 
                        variant="primary" 
                        type="button" 
                        className="register-addBtn btn btn-2"
                        onClick={props.stepProps.handleAddGradeSubjectBtnStep4}
                    >
                        Thêm
                        </Button>

                    <Button variant="primary" type="submit" className="register-nextBtn btn btn-1">
                        Hoàn tất
                        </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}