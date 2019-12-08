import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthLayout from './Layouts/Auth';
import IndexPage from './Views/Index';
import LoginPage from './Views/Login';
import RegisterPage from './Views/Register';
import TeacherRegister from './Views/Register/TeacherRegister';

import HomeTeacherPage from './Views/Home/Teacher';
import CreateCourse from './Views/Teacher/Course/CreateCourse'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <AuthLayout>
              <LoginPage/>
            </AuthLayout>
          </Route>

          <Route path="/register" exact>
            <AuthLayout>
              <RegisterPage/>
            </AuthLayout>
          </Route>

          <Route path="/register/teacher" exact>
            <AuthLayout>
              <TeacherRegister/>
            </AuthLayout>
          </Route>

          <Route path="/home" exact>
            <HomeTeacherPage/>
          </Route>

          <Route path="/course/create" exact>
            <CreateCourse/>
          </Route>

          <Route path="/">
            <IndexPage/>
          </Route>

   
        </Switch>
    </Router>

    // </div>
  );
}

export default App;
