import React,{Component} from 'react';
import ReactDom from 'react-dom';

import './Styles/styling.css';  
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux'
import rootReducer from './Redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'
const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



//ReactDom.render(Title,document.getElementById("root"));
ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById("root"));


