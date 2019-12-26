import React from 'react';
import Alert from 'react-bootstrap/Alert'

export default function ErrorDisplay (props) {
    return props.err ? (
        <Alert variant='primary' className="mx-3" variant="danger">
        {props.err}
        </Alert> 
    ) : null;
}