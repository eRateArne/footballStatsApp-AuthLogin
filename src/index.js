import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './auth/Auth';
import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import translationEN from './locales/en/translation'
import translationNO from './locales/no/translation'


const auth = new Auth();

ReactDOM.render(
  <BrowserRouter>
    <App auth={auth} />
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
