import React, { Fragment } from "react";

import { Link } from "react-router-dom";



////es6 modules
/*
// named Module
export function Login(username, password) {
    return { username, password };
}

export function Register(username, password, email, phonenumber) {
    return { username, password, email, phonenumber };
}

// default method 
export default function J2EE(courseName) {
    return courseName;
}

// calling both named and default module together
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
export default Person;

export let Component = (name) => {
    return name;
}

*/








// rfc :- create functional component
// imrc & cc :- create class based component 
/*
import React from 'react';
import "./Header.styles.css"; //import css

const HeaderComponent = () => {
    return (
        // React.createElement("h1",null,"hello withou jsx");
        //return <h1>I am single line jsx</h1>
        // multiline text or more than one element use (inside one parameter element)
        <div>
            <h1>I am Header component</h1>
        </div>
    );
};



////jsx expression
const HeaderComponent = () => {
    let username = "dfhsg";
    let email = "dfhsg@gmail.com";
    return (
        <div>
            <h1>My name is {username} my email is {email}</h1>
        </div>
    );
};


//example 2 
const HeaderComponent = () => {
    let users = {
        name: "jhd",
        age: 20,
        company: "testyantra",
        salary: 20000,
    };
    return (
        <div>
            <h1>my name is {users.name}</h1>
            <p>my age is {users.age} </p>
            <p>m salary is {users.salary}</p>
            <p>i work for {users.company} </p>
        </div>
    );
};



//*****************
import React from "react";

const HeaderComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};


export default HeaderComponent;

*/








/*
const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
*/






/*
//headercomponent of flipkart file


const HeaderComponent = () => {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">
            Flipkart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
}



export default HeaderComponent;






*/