import React from 'react';
import './index.css';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { withRouter, Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'

import Student from '../../../Layouts/Student';

class Quiz extends React.Component {

    constructor(props) {
        super(props);

        let localState = JSON.parse(window.localStorage.getItem('state'));
        let token = localState.login.userInfo.token;

        this.state = {
            token: 'Bearer ' + token,
            lessonId: props.match.params.lesson_id,
            courseId: props.match.params.course_id,
            quiz: {
                quiz_questions: []
            },
            selectedAnswer: [],
            finnished: false,
            point: 0,
            total_point: 0
        };
    }

    componentDidMount() {
        this.fetchLesson();
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const postFormData = new FormData();
        let answers = [];
        formData.forEach((value, key) => {
            if(key){
                let data = [];
                data['question_id'] = key;
                data['answer_id'] = value;
                answers.push(data);
            }
        });

        answers.map((v,i) => {
            postFormData.append(`answers[${i}][question_id]`, v.question_id);
            postFormData.append(`answers[${i}][answer_id]`, v.answer_id);
        })
        postFormData.append('quiz_id', this.state.quiz.id);

        const requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Authorization': this.state.token
            },
            method: "POST",
            body: postFormData
        };

        return fetch(process.env.REACT_APP_API_URL + `/course/${this.state.courseId}/${this.state.lessonId}/quiz`, requestOptions)
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
              console.log(data)
              this.setState({
                  finnished: true,
                  point: data.point,
                  total_point: data.total_point
              });
              window.scrollTo(0, 0)
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

        return fetch(process.env.REACT_APP_API_URL + `/course/${this.state.courseId}/${this.state.lessonId}/quiz`, requestOptions)
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
                    quiz: data,
                }, () => { console.log(this.state) });
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            });
    }


    render() {
        return (
            <Student >
                <h2 className="text-center">{this.state.quiz.name || ''}</h2>
                <Container className="shadow p-3">
                    {this.state.finnished ? (
                        <Alert variant='primary'>
                             Bạn đã đạt được&nbsp; 
                                <span className="green">
                                    {`${this.state.point}`}
                                </span> / 
                                <span className="red">
                                    {`${this.state.total_point}`}
                                </span>. 
                                <Link 
                                    className="btn btn-1 btn-inline-block"
                                    onClick={() => this.props.history.goBack()}
                                    to=''
                                >Quay về bài học.</Link>
                        </Alert>
                    ) : ''}
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        {this.state.quiz.quiz_questions.map((v, i) => {
                            return (
                                <div className="mb-3" key={i}>
                                    <Form.Row>
                                        <Form.Group controlId="" as={Col}>
                                            <Form.Label>
                                                <b>Câu {i + 1} ({parseInt(v.point)}đ):</b>
                                            </Form.Label>
                                            <Form.Control
                                                placeholder="Tên bài tập"
                                                readOnly
                                                value={v.question}
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                    {v.quiz_question_answers.map((av, ai) => {
                                        return (
                                            <Form.Row key={ai}>
                                                <Form.Group controlId="" as={Col}>
                                                    <Form.Check
                                                        label={av.answer}
                                                        type='radio'
                                                        name={v.id}
                                                        value={av.id}
                                                        required
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                        )
                                    })}
                                </div>
                            )
                        })}

                    {this.state.finnished ? '' :(
                        <Button
                            className="btn btn-2 btn-block"
                            type="submit"
                        >
                            Nộp bài
                        </Button>
                    )}
                    </Form>
                </Container>
            </Student>
        )
    }
}

export default withRouter(Quiz);