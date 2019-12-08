import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {
    Link
} from "react-router-dom";

export default function RegisterPage() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Bạn muốn trở thành</Card.Title>
                <div className="buttonGroup">
                    <Link className="btn btn-3" to="/register/student">
                        Học viên
                    </Link>
                    <Link className="btn btn-2" to="/register/teacher">
                        Giáo viên
                    </Link>
                    <Link className="btn btn-4">
                        Phụ huynh
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}