import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main';
import './Styles/styling.css';  
import {BrowserRouter} from 'react-router-dom';


//ReactDom.render(Title,document.getElementById("root"));
ReactDom.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById("root"));


