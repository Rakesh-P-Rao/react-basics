import React from "react";   // imr : for react
import ReactDOM from "react-dom";  //imrd : virtual dom
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper.js";
import "faker/locale/en_IND";

ReactDOM.render(<App></App>, document.getElementById("root"));



/*
// to render html on webpage, use ReactDOM.render(html element , connect with root html)
ReactDOM.render(<h1>hello react</h1>, document.getElementById("root"));   

// using render, destructuring :-
import { render } from "react-dom";
render(<h1>i am learning reactjs </h1>, document.getElementById("root"));

*/



