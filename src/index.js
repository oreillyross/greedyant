import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import * as dotenv from 'dotenv'
import App from './App';

dotenv.config({path: `${__dirname}/.env`});

console.log(process.env.REACT_APP_TEST)

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
