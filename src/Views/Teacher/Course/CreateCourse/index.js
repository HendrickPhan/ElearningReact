import React from 'react';
import './index.css';

import { withRouter } from 'react-router-dom';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import CreateCourseStep1 from './Step1'
import CreateCourseStep2 from './Step2'
import CreateCourseStep3 from './Step3'
import CreateCourseStepCreateLesson from './StepCreateLesson'
import CreateCourseStepCreateQuiz from './StepCreateQuiz'
import CreateCourseStepCreateEssay from './StepCreateEssay'
// import TeacherRegisterStep3 from './Step3'
// import TeacherRegisterStep4 from './Step4'
// import TeacherRegisterStep5 from './Step5'

class CreateCourse extends React.Component {

    constructor(props) {
        super(props);

        let localState = JSON.parse(window.localStorage.getItem('state'));
        let token = localState.login.userInfo.token;

        this.state = {
            lastStep: [],
            step: 1,
            subjectSelectList: [],
            gradeSelectList: [],
            lessonSelectList: [],
            lessonSelectedList: [],
            quizSelectList: [],
            quiz_id: null,
            essaySelectList: [],
            quizCreateList: [],
            essayCreateList: [],
            course: null,
            token: 'Bearer ' + token
        };
    }

    componentDidMount() {
        this.fetchGrade();
        this.fetchSubject();
        this.fetchLesson();
        this.fetchQuiz();
        this.fetchEssay();
        
    }

    fetchGrade() {
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
            },
            method: "GET"
        };

        return fetch(process.env.REACT_APP_API_URL + '/grade', requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = (data && data.message) || res.statusText;
                        return Promise.reject(error);
                    }
                    return data;
                })
            })
            .then(data => {
                this.setState({
                    gradeSelectList: data
                });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    fetchSubject() {
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
            },
            method: "GET"
        };

        return fetch(process.env.REACT_APP_API_URL + '/subject', requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = (data && data.message) || res.statusText;
                        return Promise.reject(error);
                    }
                    return data;
                })
            })
            .then(data => {
                this.setState({
                    subjectSelectList: data
                });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    fetchLesson() {
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            method: "GET"
        };

        return fetch(process.env.REACT_APP_API_URL + '/lesson/my-select-list', requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = (data && data.message) || res.statusText;
                        return Promise.reject(error);
                    }
                    return data;
                })
            })
            .then(data => {
                let lessonSelectList = [];
                data.map((v, i) => {
                    lessonSelectList.push({
                        value: v.id,
                        label: v.name
                    });
                })
                this.setState({
                    lessonSelectList: lessonSelectList
                });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    fetchQuiz() {
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            method: "GET"
        };

        return fetch(process.env.REACT_APP_API_URL + '/quiz/my-select-list', requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = (data && data.message) || res.statusText;
                        return Promise.reject(error);
                    }
                    return data;
                })
            })
            .then(data => {
                let quizSelectList = [];
                data.map((v, i) => {
                    quizSelectList.push({
                        value: v.id,
                        label: v.name
                    });
                })
                this.setState({
                    quizSelectList: quizSelectList
                });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    fetchEssay() {
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            method: "GET"
        };

        return fetch(process.env.REACT_APP_API_URL + '/essay/my-select-list', requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = (data && data.message) || res.statusText;
                        return Promise.reject(error);
                    }
                    return data;
                })
            })
            .then(data => {
                let essaySelectList = [];
                data.map((v, i) => {
                    essaySelectList.push({
                        value: v.id,
                        label: v.name
                    });
                })
                this.setState({
                    essaySelectList: essaySelectList
                });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
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

    handleSubmitStep1(e) {
        e.preventDefault();
        let newLastStep = this.state.lastStep;
        newLastStep.push(this.state.step);

        const formData = new FormData(e.target);
        this.setState({
            postFormData: formData,
            lastStep: newLastStep,
            step: this.state.step + 1
        })

    }

    handleSubmitStep2(e) {
        e.preventDefault();
        let newLastStep = this.state.lastStep;
        newLastStep.push(this.state.step);

        let postFormData = this.state.postFormData;
        this.state.lessonSelectedList.map((v, i) => {
            postFormData.append(`lessons[${i}][id]`, v.id);
            postFormData.append(`lessons[${i}][start_at]`, v.start_at);
            postFormData.append(`lessons[${i}][end_at]`, v.end_at);
        })

        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            body: postFormData,
            method: "POST"
        };

        return fetch(process.env.REACT_APP_API_URL + '/course', requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = (data && data.message) || res.statusText;
                        return Promise.reject(error);
                    }
                    return data;
                })
            })
            .then(data => {
                this.setState({
                    err: null,
                    step: this.state.step + 1,
                    course: data,
                });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });

    }

    handleSubmitNewLesson(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let start_at = formData.get('start_at');
        let end_at = formData.get('end_at');
        
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            body: formData,
            method: "POST"
        };

        return fetch(process.env.REACT_APP_API_URL + '/lesson', requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = (data && data.message) || res.statusText;
                        return Promise.reject(error);
                    }
                    return data;
                })
            })
            .then(data => {
                //here
                let newLessonSelectedList = this.state.lessonSelectedList;
                let lessonSelected = {
                    'start_at': start_at,
                    'end_at': end_at,
                    'id': data.id 
                };
                newLessonSelectedList.push(lessonSelected);
                let lastStepArr = this.state.lastStep;
                let step = lastStepArr.pop();

                const refetchLesson = async () =>{
                    await this.fetchLesson(); 
                    await this.setState({
                        err: null,
                        lastStep: lastStepArr,
                        step: step,
                        lessonSelectedList: newLessonSelectedList
                    }, ()=>{
                        console.log("STATE", this.state)
                    });
                }
                
                refetchLesson();
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }
//
    handleSubmitNewQuiz(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const postFormData = new FormData(e.target);
        postFormData.append('name', formData.get('name'));
        this.state.quizCreateList.map((v, i) => {
            postFormData.append(`questions[${i}][question]`, v.question);
            postFormData.append(`questions[${i}][point]`, v.point);
            v.answers.map((av, ai) => {
                postFormData.append(`questions[${i}][answers][${ai}][answer]`, av.answer);
                postFormData.append(`questions[${i}][answers][${ai}][is_right]`, av.isCorrect);
            })
        })

        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            body: postFormData,
            method: "POST"
        };

        return fetch(process.env.REACT_APP_API_URL + '/quiz', requestOptions)
            .then(res => {
                return res.text().then(text => {
                    const data = text && JSON.parse(text);
                    if (!res.ok) {
                        const error = (data && data.message) || res.statusText;
                        return Promise.reject(error);
                    }
                    return data;
                })
            })
            .then(data => {
                let lastStepArr = this.state.lastStep;
                let step = lastStepArr.pop();
                const refetchQuiz = async () =>{
                    await this.fetchQuiz(); 
                    await this.setState({
                        err: null,
                        lastStep: lastStepArr,
                        step: step,
                        quiz_id: {value: data.id, label: data.name}
                    }, ()=>{
                        console.log("STATE", this.state)
                    });
                }
                
                refetchQuiz();
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    handleQuizQuestionInputChange(e){
        let { name, value } = e.currentTarget;
        let position = parseInt(e.currentTarget.getAttribute('position'));
        let newQuizCreateList = this.state.quizCreateList;

        newQuizCreateList.map((v, i) => {
            if (i === position) {
                v[name] = value;
            }
        })

        this.setState({
            quizCreateList: newQuizCreateList,
        })

    }

    handleQuizAnswerInputChange(e) {
        let { name, value } = e.target;
        let questionPosition = parseInt(e.target.getAttribute('qposition'));
        let position = parseInt(e.target.getAttribute('position'));
        console.log('HERE',questionPosition, position, name, value)
        let newQuizCreateList = this.state.quizCreateList;
        newQuizCreateList.map((v, i) => {
            if (i === questionPosition) {
                v.answers.map((av, ai) => {
                    if (ai === position) {
                        //handle radio change
                        if(name==="isCorrect") {
                            av.isCorrect = e.target.checked ? 1 : 0
                        } else {
                            av[name] = value;
                        }
                    }
                })
            }
        })
        this.setState({
            quizCreateList: newQuizCreateList,
        }, ()=>{console.log(this.state)})
    }

    handleNewQuizQuestionBtnClick(e) {
        e.preventDefault();
        let newQuizCreateList = this.state.quizCreateList;
        let newQuestion = { 
            question: '',
            point: 0,
            answers: []
        };
        newQuizCreateList.push(newQuestion);
        this.setState({
            quizCreateList: newQuizCreateList,
        })
    }

    handleNewQuizAnswerBtnClick(e) {
        e.preventDefault();
        let newQuizCreateList = this.state.quizCreateList;
        let questionPosition = parseInt(e.currentTarget.getAttribute('qposition'));
        let newAnswer = {
            answer: '',
            isCorrect: 0
        };
        newQuizCreateList.map((v, i) => {
            if (i === questionPosition) {
                v.answers.push(newAnswer)
            }
        })
        this.setState({
            quizCreateList: newQuizCreateList,
        })
    }

    handleDeleteQuizQuestionBtnClick(e) {
        e.preventDefault();
        let position = parseInt(e.currentTarget.getAttribute('position'));
        let newQuizCreateList = this.state.quizCreateList;
        newQuizCreateList.splice(position, 1);
        this.setState({
            quizCreateList: newQuizCreateList,
        })
    }

    handleDeleteQuizAnswerBtnClick(e) {
        e.preventDefault();
        let newQuizCreateList = this.state.quizCreateList;
        let questionPosition = parseInt(e.currentTarget.getAttribute('qposition'));
        let position = parseInt(e.currentTarget.getAttribute('position'));

        newQuizCreateList.map((v, i) => {
            if (i === questionPosition) {
                v.answers.splice(position, 1);
            }
        })
        this.setState({
            quizCreateList: newQuizCreateList,
        })
    }

//
    handleBackBtnClick(e) {
        e.preventDefault();
        let lastStepArr = this.state.lastStep;
        let step = lastStepArr.pop();
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

    handleLessonSelectSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let newLessonSelectedList = this.state.lessonSelectedList;
        let lessonSelected = new Object();
        formData.forEach((value, key) => {
            lessonSelected[key] = value;
        });
        newLessonSelectedList.push(lessonSelected);
        this.setState({
            lessonSelectedList: newLessonSelectedList
        });
    }

    handleNewQuizBtnClick(e) {
        e.preventDefault();
        let newLastStep = this.state.lastStep;
        newLastStep.push(this.state.step);
        this.setState({
            lastStep: newLastStep,
            step: 23 // special step for create lesson
        });
    }

    handleNewEssayBtnClick(e) {
        e.preventDefault();
        let newLastStep = this.state.lastStep;
        newLastStep.push(this.state.step);
        this.setState({
            lastStep: newLastStep,
            step: 24 // special step for create lesson
        });
    }

    handleCreateLessonInputChange(e){
        console.log(e.target)
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        let StepComponent;
        let stepProps = new Object();

        switch (this.state.step) {
            case 1:
                StepComponent = CreateCourseStep1;
                stepProps.handleSubmit = (e) => this.handleSubmitStep1(e);
                stepProps.subjectSelectList = this.state.subjectSelectList;
                stepProps.gradeSelectList = this.state.gradeSelectList;
                break;
            case 2:
                StepComponent = CreateCourseStep2;
                stepProps.handleSubmit = (e) => this.handleSubmitStep2(e);
                stepProps.lessonSelectList = this.state.lessonSelectList;
                stepProps.lessonSelectedList = this.state.lessonSelectedList;
                stepProps.handleLessonSelectSubmit = (e) => this.handleLessonSelectSubmit(e);
                stepProps.handleNewLessonBtnClick = (e) => this.handleNewLessonBtnClick(e);
                break;
            case 22:
                StepComponent = CreateCourseStepCreateLesson;
                stepProps.quizSelectList = this.state.quizSelectList;
                stepProps.essaySelectList = this.state.essaySelectList;
                stepProps.handleSubmit = (e) => this.handleSubmitNewLesson(e);
                stepProps.handleNewQuizBtnClick=(e) => this.handleNewQuizBtnClick(e);
                stepProps.handleNewEssayBtnClick=(e) => this.handleNewEssayBtnClick(e);
                stepProps.quiz_id = this.state.quiz_id 
                break;
            case 23:
                StepComponent = CreateCourseStepCreateQuiz;
                stepProps.handleSubmit = (e) => this.handleSubmitNewQuiz(e);
                stepProps.quizCreateList = this.state.quizCreateList;
                stepProps.handleQuizQuestionInputChange = (e) => this.handleQuizQuestionInputChange(e);
                stepProps.handleQuizAnswerInputChange = (e) => this.handleQuizAnswerInputChange(e);
                stepProps.handleNewQuizQuestionBtnClick = (e) => this.handleNewQuizQuestionBtnClick(e);
                stepProps.handleNewQuizAnswerBtnClick = (e) => this.handleNewQuizAnswerBtnClick(e);
                stepProps.handleDeleteQuizQuestionBtnClick = (e) => this.handleDeleteQuizQuestionBtnClick(e);
                stepProps.handleDeleteQuizAnswerBtnClick = (e) => this.handleDeleteQuizAnswerBtnClick(e);
                break;
            case 24:
                StepComponent = CreateCourseStepCreateEssay;
                break;
            case 3:
                StepComponent = CreateCourseStep3;
                break;
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
                stepProps={stepProps}
                err={this.state.err}
                handleBackBtnClick={(e) => this.handleBackBtnClick(e)}
            />
        )
    }
}

export default withRouter(CreateCourse);