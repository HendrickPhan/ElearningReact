import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import NavBar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

import TeacherLinks from '../../Components/Navbar/Links/TeacherLinks'


export default function Teacher({children}) {
    return (
        <React.Fragment>
            <NavBar links={TeacherLinks} loggedIn/>
            <hr />
            <Container>
                {children}
            </Container>
            <hr />
            <Footer/>
        </React.Fragment>
    )
}