import React from 'react';
import './index.css';

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Select from 'react-select';
import DatePicker from "react-datepicker";

import {
    Link
} from "react-router-dom";


function handleChange(e) {
    console.log(e);
}

export default function LessonSelectModal(props) {

    const [start_at, setStart] = React.useState(null);
    const [end_at, setEnd] = React.useState(null);

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Form onSubmit={props.handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Bài học đã có</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form.Label>Bài học</Form.Label>

                        <Select
                            className=""
                            onChange={handleChange}
                            options={props.options || []}
                            required
                            name="id"
                        />

                    <Form.Row className="mt-3">
                        <Form.Group as={Col} controlId="name" md={12}>
                            <Form.Label
                                className="d-block"
                            >
                                Thời gian bắt đầu
                            </Form.Label>
                            <DatePicker
                                className="form-control"
                                showTimeSelect={true}
                                dateFormat="yyyy-MM-dd HH:mm:ss"
                                selected={start_at}
                                onChange={setStart}
                                name="start_at"
                                minDate={new Date()}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="image" md={12}>
                            <Form.Label
                                className="d-block"
                            >
                                Thời gian kết thúc
                            </Form.Label>
                            <DatePicker
                                className="form-control"
                                showTimeSelect={true}
                                dateFormat="yyyy-MM-dd HH:mm:ss"
                                selected={end_at}
                                onChange={setEnd}
                                name="end_at"
                                minDate={new Date()}
                                required
                            />
                        </Form.Group>
                    </Form.Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose} type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}