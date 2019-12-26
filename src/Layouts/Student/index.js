import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import NavBar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

import StudentLinks from '../../Components/Navbar/Links/StudentLinks'


export default function Student({children}) {
    return (
        <React.Fragment>
            <NavBar links={StudentLinks} loggedIn/>
            <hr />
            <Container>
                {children}
            </Container>
            <hr />
            <Footer/>
        </React.Fragment>
    )
}