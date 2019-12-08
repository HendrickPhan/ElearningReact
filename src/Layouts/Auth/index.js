import React from 'react';
import './index.css';
import Background from '../../Statics/Images/bg.jpg'
import Container from 'react-bootstrap/Container'
import '../../Utility/ButtonStyle.css';

export default function AuthLayout({children}) {
  let style = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <Container className="auth-container d-flex justify-content-center align-items-center m-0" style={style}>
        {children}
    </Container>

  );
}
