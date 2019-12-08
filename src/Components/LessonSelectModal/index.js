import React from 'react';
import './index.css';

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Select from 'react-select';

import {
    Link
} from "react-router-dom";

const options = [
    { value: 'Hello word C++', label: 'Hello word C++' },
    { value: 'Nodejs for begin', label: 'Nodejs for begin' },
    { value: 'Sóng', label: 'Sóng' },
];

function handleChange(e) {
    console.log(e);
}

export default function LessonSelectModal(props) {
    console.log(props)

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Bài học đã có</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Label>Bài học</Form.Label>

                        <Select
                            className=""
                            onChange={handleChange}
                            options={options}
                        />

                    <Form.Row className="mt-3">
                        <Form.Group as={Col} controlId="name">
                            <Form.Label>Ngày bắt đầu</Form.Label>
                            <Form.Control type="datetime-local" placeholder="Tên khóa học" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="image">
                            <Form.Label>Ngày Kết thúc</Form.Label>
                            <Form.Control type="datetime-local" />
                        </Form.Group>
                    </Form.Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}