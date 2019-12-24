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

import AuthLayout from '../../../Layouts/Auth';

export default class TeacherRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            certificateSelectList: [],
            gradeSelectList: [],
            subjectSelectList: [],
            certificateSelected: [
                {
                    position: 0
                }
            ],
            gradeSubjectSelected: [
                {
                    position: 0
                }
            ],
            curentCertificatePosition: 1,
            curentGradeSubjectPosition: 1,
        };
    }

    componentDidMount() {
        this.fetchCertificate();
        this.fetchGrade();
        this.fetchSubject();
    }

    fetchCertificate() {
        const requestOptions = {
            headers: {
                'Accept': 'application/json',
            },
            method: "GET"
        };

        return fetch(process.env.REACT_APP_API_URL + '/certificate', requestOptions)
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
                    certificateSelectList: data
                });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
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

    handleSubmitStep1(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.forEach((value, key) => {
            this.setState({
                [key]: value
            });
        });

        if (formData.get('password') !== formData.get('rePassword')) {
            this.setState({
                err: "Mật khẩu không khớp"
            });
        } else {
            this.setState({
                err: null,
                step: this.state.step + 1
            });
        }
    }

    handleSubmitStep2(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let postFormData = new FormData();

        const {
            email,
            password,
        } = this.state;

        formData.forEach((value, key) => {
            postFormData.append([key], value);
            this.setState({
                [key]: value
            });
        });

        postFormData.append("email", email);
        postFormData.append("password", password);

        const requestOptions = {
            headers: {
                'Accept': 'application/json',
            },
            body: postFormData,
            method: "POST"
        };

        return fetch(process.env.REACT_APP_API_URL + '/teacher/register', requestOptions)
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
                    token: 'Bearer ' + data.token
                });
                localStorage.setItem('token', 'Bearer ' + data.token);
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    handleAddCertificateBtnStep3() {
        let newCertificateSelected = this.state.certificateSelected;
        newCertificateSelected.push({ position: this.state.curentCertificatePosition });
        this.setState({
            certificateSelected: newCertificateSelected,
            curentCertificatePosition: this.state.curentCertificatePosition + 1
        })
    }

    handleInputChangeStep3(e) {
        let { name, value } = e.currentTarget;
        let position = parseInt(e.currentTarget.getAttribute('position'));

        let newCertificateSelected = this.state.certificateSelected;

        newCertificateSelected.map((v, i) => {
            if (v.position === position) {
                v[name] = value;
            }
        })

        this.setState({
            certificateSelected: newCertificateSelected
        })
    }

    handleOnfileChangeStep3(e) {
        let file = e.target.files[0];
        let position = parseInt(e.currentTarget.getAttribute('position'));
        let newCertificateSelected = this.state.certificateSelected;
        newCertificateSelected.map((v, i) => {
            if (v.position === position) {
                v.image = file;
            }
        })

        this.setState({
            certificateSelected: newCertificateSelected
        })
    }

    handleDeleteBtnStep3(e) {
        let position = parseInt(e.currentTarget.getAttribute('position'));
        let newCertificateSelected = this.state.certificateSelected;

        newCertificateSelected.map((v, i) => {
            if (v.position === position) {
                newCertificateSelected.splice(i, 1);
            }
        })

        this.setState({
            certificateSelected: newCertificateSelected
        })

    }

    handleSubmitStep3(e) {
        e.preventDefault();
        let postFormData = new FormData();
        this.state.certificateSelected.map((v, i) => {
            postFormData.append(`certificates[${i}][id]`, v.certificate);
            postFormData.append(`certificates[${i}][date_of_issue]`, v.date_of_issue);
            postFormData.append(`certificate-${v.certificate}`, v.image)
        })

        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            body: postFormData,
            method: "POST"
        };

        return fetch(process.env.REACT_APP_API_URL + '/teacher/attach-certificates', requestOptions)
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
                });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    handleAddGradeSubjectBtnStep4() {
        let newGradeSubjectSelected = this.state.gradeSubjectSelected;
        newGradeSubjectSelected.push({ position: this.state.curentGradeSubjectPosition });
        this.setState({
            gradeSubjectSelected: newGradeSubjectSelected,
            curentGradeSubjectPosition: this.state.curentGradeSubjectPosition + 1
        })
    }

    handleDeleteBtnStep4(e) {
        let position = parseInt(e.currentTarget.getAttribute('position'));
        let newGradeSubjectSelected = this.state.gradeSubjectSelected;

        newGradeSubjectSelected.map((v, i) => {
            if (v.position === position) {
                newGradeSubjectSelected.splice(i, 1);
            }
        })

        this.setState({
            gradeSubjectSelected: newGradeSubjectSelected
        })

    }

    handleInputChangeStep4(e) {
        let { name, value } = e.currentTarget;
        let position = parseInt(e.currentTarget.getAttribute('position'));

        let newGradeSubjectSelected = this.state.gradeSubjectSelected;

        newGradeSubjectSelected.map((v, i) => {
            if (v.position === position) {
                v[name] = value;
            }
        })

        this.setState({
            gradeSubjectSelected: newGradeSubjectSelected
        })
    }

    handleMultipleInputChangeStep4(e) {
        let { name, options } = e.currentTarget;
        let value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        let position = parseInt(e.currentTarget.getAttribute('position'));

        let newGradeSubjectSelected = this.state.gradeSubjectSelected;

        newGradeSubjectSelected.map((v, i) => {
            if (v.position === position) {
                v[name] = value;
            }
        })

        this.setState({
            gradeSubjectSelected: newGradeSubjectSelected
        })
    }

    handleSubmitStep4(e) {
        e.preventDefault();
        let postFormData = new FormData();
        this.state.gradeSubjectSelected.map((v, i) => {
            postFormData.append(`grade_subjects[${i}][subject_id]`, v.subject);
            v.grades.map((gv, gi) => {
                postFormData.append(`grade_subjects[${i}][grade_ids][${gi}]`, gv);
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

        return fetch(process.env.REACT_APP_API_URL + '/teacher/attach-grade-subjects', requestOptions)
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
                });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }

    render() {
        let StepComponent;
        let stepProps = new Object();
        switch (this.state.step) {
            case 1:
                StepComponent = TeacherRegisterStep1;
                stepProps.handleSubmit = (e) => this.handleSubmitStep1(e);
                break;
            case 2:
                StepComponent = TeacherRegisterStep2;
                stepProps.handleSubmit = (e) => this.handleSubmitStep2(e);
                break;
            case 3:
                StepComponent = TeacherRegisterStep3;
                stepProps.certificateSelectList = this.state.certificateSelectList;
                stepProps.certificateSelected = this.state.certificateSelected;
                stepProps.handleAddCertificateBtnStep3 = (e) => this.handleAddCertificateBtnStep3(e);
                stepProps.handleInputChangeStep3 = (e) => this.handleInputChangeStep3(e);
                stepProps.handleOnfileChangeStep3 = (e) => this.handleOnfileChangeStep3(e);
                stepProps.handleDeleteBtnStep3 = (e) => this.handleDeleteBtnStep3(e);
                stepProps.handleSubmit = (e) => this.handleSubmitStep3(e);
                break;
            case 4:
                StepComponent = TeacherRegisterStep4;
                stepProps.gradeSelectList = this.state.gradeSelectList;
                stepProps.subjectSelectList = this.state.subjectSelectList;
                stepProps.gradeSubjectSelected = this.state.gradeSubjectSelected;
                stepProps.handleAddGradeSubjectBtnStep4 = (e) => this.handleAddGradeSubjectBtnStep4(e);
                stepProps.handleDeleteBtnStep4 = (e) => this.handleDeleteBtnStep4(e);
                stepProps.handleInputChangeStep4 = (e) => this.handleInputChangeStep4(e);
                stepProps.handleMultipleInputChangeStep4 = (e) => this.handleMultipleInputChangeStep4(e);
                stepProps.handleSubmit = (e) => this.handleSubmitStep4(e);
                break;
            case 5:
                StepComponent = TeacherRegisterStep5;
                break;
        }
        return (
            <AuthLayout>
                <StepComponent
                    err={this.state.err}
                    stepProps={stepProps}
                />
            </AuthLayout>
        )
    }
}