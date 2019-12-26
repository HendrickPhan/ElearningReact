
import React from "react";
// @material-ui/core components
// react-redux components
import { connect } from 'react-redux';
// react-router-doom components
import { Router, Route, Switch, Redirect } from "react-router-dom";
// core components

import IndexPage from '../../Views/Index';
import LoginPage from '../../Views/Login';
import RegisterPage from '../../Views/Register';
import TeacherRegister from '../../Views/Register/TeacherRegister';
import StudentRegister from '../../Views/Register/StudentRegister';

import HomeTeacherPage from '../../Views/Home/Teacher';
import CreateCourse from '../../Views/Teacher/Course/CreateCourse'


import HomeStudent from '../../Views/Home/Student';
import CourseDetail from '../../Views/Student/Course/Detail';
import Lesson from '../../Views/Student/Lesson';
import Quiz from '../../Views/Student/Quiz';
import CourseList from '../../Views/Student/Course/List';


class SwitchRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: props.userInfo,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      userInfo: nextProps.userInfo,
    });
  }
  render() {
    if (!this.state.userInfo || this.state.userInfo === 'undefined') {
      return (
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/register" exact>
            <RegisterPage />
          </Route>

          <Route path="/register/teacher" exact>
            <TeacherRegister />
          </Route>

          <Route path="/register/student" exact>
            <StudentRegister />
          </Route>

          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      )
    } else {
      switch (parseInt(this.state.userInfo.user.role)) {
        case 1: //teacher
          return (
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>

              <Route path="/register" exact>
                <RegisterPage />
              </Route>

              <Route path="/register/teacher" exact>
                <TeacherRegister />
              </Route>

              <Route path="/register/student" exact>
                <StudentRegister />
              </Route>

              <Route path="/home" exact>
                <HomeTeacherPage />
              </Route>

              <Route path="/course/create" exact>
                <CreateCourse />
              </Route>

              <Redirect from="/" to="/home" />
            </Switch>
          )
          break;
        case 2:
          return (
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>

              <Route path="/register" exact>
                <RegisterPage />
              </Route>

              <Route path="/register/teacher" exact>
                <TeacherRegister />
              </Route>

              <Route path="/register/student" exact>
                <StudentRegister />
              </Route>

              <Route path="/home" exact>
                <HomeStudent />
              </Route>
              <Route path="/courses" exact>
                <CourseList />
              </Route>
              <Route path="/course/:id" exact>
                <CourseDetail />
              </Route>
              <Route path="/course/:course_id/:lesson_id" exact>
                <Lesson />
              </Route>
              <Route path="/quiz/:course_id/:lesson_id" exact>
                <Quiz />
              </Route>
              
              <Redirect from="/" to="/home" exact/>
            </Switch>
          )
          break;
      }

    }
  }
}

const mapState = state => ({
  userInfo: state.login.userInfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

export default connect(mapState, mapDispatchToProps)(SwitchRoutes);
