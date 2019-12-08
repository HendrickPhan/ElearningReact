import React from 'react';
import './index.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import CreateCourseStep1 from './Step1'
import CreateCourseStep2 from './Step2'
import CreateCourseStepCreateLesson from './StepCreateLesson'
// import TeacherRegisterStep3 from './Step3'
// import TeacherRegisterStep4 from './Step4'
// import TeacherRegisterStep5 from './Step5'

export default class CreateCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastStep: [],
            step: 1,
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let newLastStep = this.state.lastStep;
        newLastStep.push(this.state.step); 
        this.setState({
            lastStep: newLastStep, 
            step: this.state.step + 1 
        });
    }
    
    handleBackBtnClick(e) {
        e.preventDefault();
        let lastStepArr = this.state.lastStep; 
        console.log("ARRAY", lastStepArr);
        let step = lastStepArr.pop();
        console.log("STEP", step);

        this.setState({
            lastStep: lastStepArr, 
            step: step 
        });

    }

    handleNewLessonBtnClick(e) {
        e.preventDefault();
        let newLastStep = this.state.lastStep;
        newLastStep.push(this.state.step); 
        this.setState({
            lastStep: newLastStep, 
            step: 22 // special step for create lesson
        });
    }

    render() {
        let StepComponent;
        switch(this.state.step) {
            case 1:
                StepComponent = CreateCourseStep1;
                break;
            case 2:
                StepComponent = CreateCourseStep2;
                break;
            case 22:
                StepComponent = CreateCourseStepCreateLesson;
                break;
            // case 3:
            //     StepComponent = TeacherRegisterStep3;
            //     break;
            // case 4:
            //     StepComponent = TeacherRegisterStep4;
            //     break;
            // case 5:
            //     StepComponent = TeacherRegisterStep5;
            //     break;
        }
        return (
            <StepComponent 
                handleSubmit={(e) => this.handleSubmit(e)}
                handleNewLessonBtnClick={(e) => this.handleNewLessonBtnClick(e)}
                handleBackBtnClick={(e) => this.handleBackBtnClick(e)}
            />
        )
    }
}