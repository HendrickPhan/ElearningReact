import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FontAwesome from 'react-fontawesome'

export default function RatingStars(props) {
    let rating =
        props.rating !== undefined
            ? props.rating
            : 0;
    let canRate = 
        props.canRate !== undefined
            ? true
            : false; 
            
            
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <FontAwesome 
                name="star"
                value={i+1}
                key={i}
                className={`rating-star ${(i < rating) ? 'rated' : ''}`}
                />
        ) 
    }


    return (
        <React.Fragment>
            {stars.map(start => start)}            
        </React.Fragment>
    )
}