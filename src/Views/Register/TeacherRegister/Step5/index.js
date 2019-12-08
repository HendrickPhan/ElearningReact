import React from 'react';
import './index.css';

import Card from 'react-bootstrap/Card'
import {
    Link
} from "react-router-dom";


export default function TeacherRegisterStep5() {
    return (
        <Card className="register-contentAlignCenter register-content">
            <Card.Body>
                <Card.Text>
                    Cảm ơn bạn đã đăng ký dạy học tại xxx. Hệ thống của chúng tôi đang tiến hành phê duyệt
                và sẽ thông báo đến bạn một cách sơm nhât (tối đa 24 tiếng). Hãy theo dõi sms và email để
                nhận được thông báo từ chúng tôi nhé 
                --heart--				
                </Card.Text>
                <Link to="/" className="register-nextBtn btn btn-1">
                    Trang chủ
                </Link>
            </Card.Body>
        </Card>
    )
}