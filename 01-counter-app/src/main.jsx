import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
// import {FirstApp} from "./FirstApp.jsx";
import { CounterApp } from './CounterApp';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);

root.render(
  <React.StrictMode>
    {/* <FirstApp title={"Hola, Soy Vegeta"}/> */}
    <CounterApp value={ 0 } />
  </React.StrictMode>,
);
