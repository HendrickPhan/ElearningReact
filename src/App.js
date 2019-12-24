import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import store from './store';
import { Provider } from 'react-redux';

import IndexPage from './Views/Index';
import LoginPage from './Views/Login';
import RegisterPage from './Views/Register';
import TeacherRegister from './Views/Register/TeacherRegister';
import StudentRegister from './Views/Register/StudentRegister';

import HomeTeacherPage from './Views/Home/Teacher';
import CreateCourse from './Views/Teacher/Course/CreateCourse';

import SwitchRoutes from './Components/SwitchRoutes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ScrollTop from './Components/ScrollTop'

function App() {
  return (
    <Provider store={store()}>
        <Router>
          <ScrollTop>
              <SwitchRoutes />
          </ScrollTop>
        </Router>
    </Provider>

  );
}

export default App;
