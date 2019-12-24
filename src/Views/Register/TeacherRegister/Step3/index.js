import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import FontAwesome from 'react-fontawesome'


const CertificateRow = (props) => {
    return (
        <Form.Row>
            <Form.Group as={Col} controlId="certificates" md={3}>
                <Form.Label>Bằng cấp</Form.Label>
                <Form.Control
                    name="certificate"
                    as="select"
                    onChange={props.handleInputChangeStep3}
                    value={props.certificate}
                    position={props.position}
                    required
                >
                    <option>Chọn...</option>
                    {props.certificateSelectList.map((v, i) => {
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

            <Form.Group as={Col} controlId="dateOfIssue" md={3}>
                <Form.Label>Ngày cấp</Form.Label>
                <Form.Control
                    name="date_of_issue"
                    type="date"
                    onChange={props.handleInputChangeStep3}
                    value={props.date_of_issue ? props.date_of_issue : ''}
                    position={props.position}
                    required
                />
            </Form.Group>

            <Form.Group as={Col} controlId="image" md={4}>
                <Form.Label>Hình ảnh</Form.Label>
                <Form.Control
                    name="image"
                    type="file"
                    onChange={props.handleOnfileChangeStep3}
                    position={props.position}
                    required
                />
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
                    onClick={props.handleDeleteBtnStep3}
                />
            </Form.Group>

        </Form.Row>
    )
}

const CertificateSelectedRow = (props) => {
    return (
        <React.Fragment>
            {props.certificateSelected.map((v, i) => {
                return (
                    <CertificateRow
                        certificateSelectList={props.certificateSelectList}
                        certificate={v.certificate}
                        date_of_issue={v.date_of_issue}
                        handleInputChangeStep3={props.handleInputChangeStep3}
                        handleDeleteBtnStep3={props.handleDeleteBtnStep3}
                        handleOnfileChangeStep3={props.handleOnfileChangeStep3}
                        image={v.image}
                        position={v.position}
                        key={i}
                    />
                )
            })}
        </React.Fragment>
    )

}

export default function TeacherRegisterStep3(props) {
    return (
        <Card className="register-content">
            <Card.Body>
                <Card.Title>Trình độ</Card.Title>
                <Card.Text>
                    * Bằng cách cug cấp cho chúng tôi thông tin về bằng cấp, bạn có thể nhận được sự đánh giá
                    cao bởi phụ huynh và học sinh. Từ đó các khóa học của bạn sẽ được nhiều người tham gia hơn
                    </Card.Text>
                <Form onSubmit={props.stepProps.handleSubmit}>

                    <CertificateSelectedRow
                        certificateSelected={props.stepProps.certificateSelected}
                        certificateSelectList={props.stepProps.certificateSelectList}
                        handleInputChangeStep3={props.stepProps.handleInputChangeStep3}
                        handleDeleteBtnStep3={props.stepProps.handleDeleteBtnStep3}
                        handleOnfileChangeStep3={props.stepProps.handleOnfileChangeStep3}
                    />

                    <Button
                        variant="primary"
                        type="button"
                        className="register-addBtn btn btn-2"
                        onClick={props.stepProps.handleAddCertificateBtnStep3}
                    >
                        Thêm
                    </Button>

                    <Button type="submit" className="register-nextBtn btn btn-1">
                        Tiếp tục
                        </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}