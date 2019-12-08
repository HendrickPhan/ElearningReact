import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FontAwesome from 'react-fontawesome'

export default function RatingNumber(props) {
    let rating =
        props.rating !== undefined
            ? props.rating
            : 0;
    return (
        <span className="rating-number">
            ({rating})            
        </span>
    )
}