import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import TeacherRegisterStep1 from './Step1'
import TeacherRegisterStep2 from './Step2'
import TeacherRegisterStep3 from './Step3'
import TeacherRegisterStep4 from './Step4'
import TeacherRegisterStep5 from './Step5'


export default class TeacherRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            step: this.state.step + 1 
        });
    }
    

    render() {
        let StepComponent;
        switch(this.state.step) {
            case 1:
                StepComponent = TeacherRegisterStep1;
                break;
            case 2:
                StepComponent = TeacherRegisterStep2;
                break;
            case 3:
                StepComponent = TeacherRegisterStep3;
                break;
            case 4:
                StepComponent = TeacherRegisterStep4;
                break;
            case 5:
                StepComponent = TeacherRegisterStep5;
                break;
        }
        return (
            <StepComponent 
                handleSubmit={(e) => this.handleSubmit(e)}
            />
        )
    }
}