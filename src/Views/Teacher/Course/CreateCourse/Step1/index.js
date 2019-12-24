import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import ErrorDisplay from '../../../../../Components/ErrorDisplay' 



import {
    Link
} from "react-router-dom";

import Teacher from '../../../../../Layouts/Teacher';


export default function CreateCourseStep1(props) {
    return (
        <Teacher>
            <Alert variant='primary'>
                Tạo khóa học thành công
            </Alert>

            <h2 className="mt-3 text-center">Tạo Khóa học</h2>
            <Card className="p-3">
                <Card.Body>
                    <Form onSubmit={props.stepProps.handleSubmit}>
                        <h3 className="mb-3">Thông tin khóa học</h3>
                        <Form.Row>
                            <Form.Group as={Col} controlId="name">
                                <Form.Label>Tên khóa học</Form.Label>
                                <Form.Control 
                                    name="name" 
                                    placeholder="Tên khóa học" 
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="image">
                                <Form.Label>Hình đại diện</Form.Label>
                                <Form.Control 
                                    name="avatar" 
                                    type="file" 
                                    required
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="sortDescription">
                            <Form.Label>Mô tả ngắn (tối đa 50 ký tự)</Form.Label>
                            <Form.Control 
                                as='textarea' 
                                name="short_description" 
                                placeholder="Mô tả ngắn" 
                                maxLength={50}
                                required    
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Mô tả chi tiết(tối thiểu 200 ký tự)</Form.Label>
                            <Form.Control 
                                as='textarea' 
                                name="description" 
                                placeholder="Mô tả" 
                                minLength={200}
                                required    
                            />
                        </Form.Group>

                        <Form.Group controlId="tuition_fee">
                            <Form.Label>Học phí</Form.Label>
                            <Form.Control 
                                defaultValue={0} 
                                type="number" 
                                name="tuition_fee" 
                                min={0}
                                required
                            />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="subject" >
                                <Form.Label>Môn</Form.Label>
                                <Form.Control as="select" type="number" name="subject_id" required>
                                    <option>Chọn...</option>
                                    {props.stepProps.subjectSelectList.map((v, i) => {
                                        return(
                                            <option value={v.id} key={i}>{v.name}</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="grade" name="grade_id">
                                <Form.Label>Lớp</Form.Label>
                                <Form.Control as="select" type="number" name="grade_id" required>
                                    <option>Chọn...</option>
                                    {props.stepProps.gradeSelectList.map((v, i) => {
                                        return(
                                            <option value={v.id} key={i}>{v.name}</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="minStudent">
                            <Form.Label>Số lượng học viên tối thiểu</Form.Label>
                            <Form.Control 
                                min="3" 
                                type="number" 
                                defaultValue={3} 
                                type="number" 
                                name="min_student"
                                required
                            />
                            <Form.Text className="text-muted">
                                Khóa học sẽ bị hủy nếu không đạt số lượng học viên trước ngày bắt đầu.
                            </Form.Text>
                        </Form.Group>


                        <Form.Row>
                            <Form.Group as={Col} controlId="subject">
                                <Form.Label>Ngày bắt đầu</Form.Label>
                                <Form.Control 
                                    type="date" 
                                    min={new Date().toISOString().split("T")[0]} 
                                    name="start_at"
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="grade">
                                <Form.Label>Ngày kết thúc</Form.Label>
                                <Form.Control 
                                    type="date" 
                                    min={new Date().toISOString().split("T")[0]}
                                    name="end_at"
                                    required
                                />
                            </Form.Group>
                        </Form.Row>
                        <ErrorDisplay err={props.err}/>
                        <Button className="btn btn-block btn-1" type="submit">
                            Tiếp tục
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Teacher>
    )
}