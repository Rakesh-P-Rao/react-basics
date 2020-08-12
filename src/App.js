import React, { Component, Fragment } from 'react';
import HeaderComponent from "./Components/Header/Header.component";
import CoursesComponent from "./Components/Courses/Course.component";
import PlayersComponent from './Components/Users/Users.component';
import StudentComponent from "./Components/Student.component";
import faker from "faker/locale/en_IND";
import FormComponent from "./Components/FormsComponent";
import LoginComponent from "./Components/LoginComponent";

import { BrowserRouter, Route } from "react-router-dom";
import HomePageComponent from "./Components/HomePageComponent/HomePageComponent";
import Login from "./Components/AuthComponent/LoginComponent";
import Register from "./Components/AuthComponent/RegisterComponent";







// This is main or index javascript file for all other js files 
/*

//named module 
import { Login,Register} from "./fullstack.js";
console.log(Login("shashi", "123"));
console.log(Register("shashi", 1234, "name@email.com", 123456789));

// module default way(only one function can be exported and called without curly braces)
import testRakesh from "./fullstack.js";
console.log(testRakesh("spring"));

// calling both named and default together 
import anyNameCanBeGivenForDefaultModule, { Component } from "./fullstack.js"; //for default no need of brackets and for named brackets needed 

let Shashi = new anyNameCanBeGivenForDefaultModule("shashi", 30);  // { this is for default module,
console.log(Shashi);                                               //   only one can be set or given as default }
console.log(Component("shashi")); // this is for named module



////destructuring
let fullstack_Students = ["sdf", "wef", "wrg", "uyk", "jhm"];

// let sdf = fullstack_Students[1];
// let wef = fullstack_Students[0];
// console.log(sdf);
// console.log(wef);

let [sdg,fuh,ascji,qwerio] = fullstack_Students;
console.log(qwerio);



//example 2 
let languages = ["Java", "python", "Nodejs", "React", "Angular", "Expressjs","RestFull web services"];

let [x,y,z,...rest] = languages;
console.log(x);
console.log(y);
console.log(z);
// console.log(rest);
rest.map((x) => console.log(x));



////destructuring with default value
let languages = ["Java", "python"];

let [java, python, defaultValue = "j2ee"] = languages;
console.log(defaultValue);


////object destructuring
let employee = {
    emp_name: "fede",
    emp_age: 20,
    emp_salary: 3000000,
    emp_designation: "nodejs developer",
};

let { emp_name, emp_age, emp_salary, emp_designation } = employee;
console.log(emp_name, emp_age);


////// reactjs

let Test = React.createElement("h1", null, "i am reactjs");
//                            ("tag","attribue","content")
ReactDOM.render(Test,document.querySelector("root"));


let Image = React.createElement("img", { src: "https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722__340.jpg"});

ReactDOM.render(Image, document.querySelector("#root"));

*/













/*import React, { Component } from 'react'; 
import Navbar from "./Components/Navbar";
import LoginComponent from "./Components/Login/Login.component";
import HeaderComponent from "./Components/Header/Header.component";
   
//// functional component or dump component    (means no state present here because this is functional component)
let App = function () {
    return <h1>I am Jsx and a functional component</h1>;
};


//Navbar example
let App = function () {
    return (
        <div>
            <Navbar />
        </div>
    );
};



//// class based component
class App extends React.Component {
    render() {
        return <h1>I am class based component</h1>
    }
}

//also 
class App extends Component {
    render() {
    return <h1>Hello I am statefull component</h1>;
    }
}


class App extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <LoginComponent />
            </div>
        );
    }
}




// I am making App.js is the root component 

import React, { Component } from 'react';
import HeaderComponent from "./Components/Header/Header.component";
import CoursesComponent from './Components/Courses/Courses.component';


class App extends Component {
    state = {};
    render() { 
        return (
          <div>
            <header>
              <HeaderComponent />
                </header>
                <main className="container">
                    <CoursesComponent />
                </main>
          </div>
        );
    };
};
 
export default App;


*/









/*
//// props component (only read)
class App extends Component {
    state = {};
    render() {
            return (
              <div>
                <header>
                  <HeaderComponent></HeaderComponent>
                </header>

                <main className="container">
                        <CoursesComponent course="java" trainer="shishira"></CoursesComponent>
                        <CoursesComponent course="fullstack" trainer="shashi"></CoursesComponent>
                </main>
              </div>
            );
    };
};



//// props example 2 
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <header>
          <HeaderComponent/>
        </header>
        <CoursesComponent name="asdf" age={20} company="testyantra" salary={20000}/>
      </div>
     );
  }
}
 
 
 



//// class component
class App extends Component {
  state = {
    img:
      "https://cdn.pixabay.com/photo/2020/06/11/13/56/lighthouse-5286823__340.jpg",
  }; //simple state Object it can hold private data/value
  render() {
    return (
      <div>
        <CoursesComponent img={this.state.img} />
      </div>
    );
  }
}





//exaple 2 for class component 
class App extends Component {
  state = {
  "Players": [{
      "name": "Sachin Ramesh Tendulkar",
      "id": "1",
      "photo": "http://p.imgci.com/db/PICTURES/CMS/128400/128483.1.jpg",
      "runs": "34347"
    },

    {
      "name": "Rahul Sharad Dravid",
      "id": "2",
      "photo": "http://p.imgci.com/db/PICTURES/CMS/108400/108439.1.jpg",
      "runs": "24177"
    },

    {
      "name": "Sourav Chandidas Ganguly",
      "id": "3",
      "photo": "http://p.imgci.com/db/PICTURES/CMS/92300/92389.1.jpg",
      "runs": "18575"
    },

    {
      "name": "Brian Charles Lara",
      "id": "4",
      "photo": "http://p.imgci.com/db/PICTURES/CMS/66100/66199.1.jpg",
      "runs": "22358"
    },

    {
      "name": "Yuvraj Singh",
      "id": "5",
      "photo": "http://p.imgci.com/db/PICTURES/CMS/202600/202671.1.jpg",
      "runs": "10601"
    },

    {
      "name": "Virat Kohli",
      "id": "6",
      "photo": "http://p.imgci.com/db/PICTURES/CMS/263600/263697.20.jpg",
      "runs": "14503"
    },

    {
      "name": "Ricky Thomas Ponting",
      "id": "7",
      "photo": "http://p.imgci.com/db/PICTURES/CMS/202600/202613.1.jpg",
      "runs": "27082"
    },

    {
      "name": "Jacques Henry Kallis",
      "id": "8",
      "photo": "http://p.imgci.com/db/PICTURES/CMS/203100/203133.1.jpg",
      "runs": "24868"
    },

    {
      "name": "Mahendra Singh Dhoni",
      "id": "9",
      "photo": "http://p.imgci.com/db/PICTURES/CMS/263700/263705.20.jpg",
      "runs": "15583"
    },

    {
      "name": "Vangipurappu Venkata Sai Laxman",
      "id": "10",
      "photo": "http://p.imgci.com/db/PICTURES/CMS/92300/92394.1.jpg",
      "runs": "11119"
    }

  ]

}
  render() {
    return (
      <div>
        <header>
          <HeaderComponent />
        </header>
        <main className="container my-4">
          <PlayersComponent players={this.state.Players}/>
        </main>
      </div>
    );
  }
}




*/


















/*
// urban-clap app.js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      time: new Date().toDateString(),
    };
    this.updateTime();
  }

  updateTime() {
    setInterval(() => {
      let time = new Date().toLocaleTimeString();
      this.setState({ time: time });
    }, 1000);
  }

  updateName = () => {
    this.setState({ name: "adfac" ,age:20});
  };

  render() {
    return (
      <Fragment>
        <h1>Time:{this.state.time}</h1>
        <h1>Name: {this.state.name}</h1>
        <h1>Age: {this.state.age}</h1>
        <button className="btn btn-danger" onClick={this.updateName}>Update Name</button>
        <h1>hello root component</h1>
        <h4>Age: {this.state.students.age}</h4>
        <h4>Company: {this.state.students.company}</h4>
        <h4>Salary: {this.state.students.salary}</h4> 
      </Fragment>
    );
  }
}



////setstate example 2 
class App extends Component {
  state = { 
    randomNumber:0,
  };
  

  getRandomNumber = () => {
    let random = Math.floor(Math.random() * 100);
    this.setState({ randomNumber: random });
  }


  render() { 
    return ( 
      <Fragment>
        <div className="conainer">
          <h1>welcome reactJs</h1>
          <span className="badge badge-danger">{this.state.randomNumber}</span>
          <button className="btn btn-danger ml-2 mr-2" onClick={this.getRandomNumber}>Click</button>
        </div>
      </Fragment>
     );
  }
}



////   faker app  (*********doesnt work as it is incomplete**********)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: faker.image.avatar(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
    };
  }
  render() { 
    let { ...fakedata } = this.state;
    return ( 
      <Fragment>
        <div className="container display-flex">
          <StudentComponent students={fakedata}/>
        </div>
      </Fragment>
     );
  };
};
 



//// events
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "asd",
      company: "hjf",
    };
  }
  render() {
    return (
      <Fragment>
        <StudentComponent name={this.state.name} company={this.state.company}/>
        <FormComponent />
        <LoginComponent></LoginComponent>
      </Fragment>
    );
  }
}



export default App;


*/








/*
//flipkart app.js

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <header>
            <HeaderComponent />
          </header>


          <main className="container">
            <Route path="/" exact component={HomePageComponent} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </main>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;



*/