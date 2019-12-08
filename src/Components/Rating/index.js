import React from 'react';

import Row from 'react-bootstrap/Row'
import RatingStars from './RatingStars'
import RatingNumber from './RatingNumber'

export default function Rating(props) {
    return (
        <Row className='m-1'>
            <RatingStars 
                rating={props.ratingStars}
                canRate={props.canRate}
            />
            <RatingNumber rating={props.ratingNumber}/>
        </Row>
    )
}