import React, { Component } from "react";



/*
const CoursesComponent = (props) => {
  console.log(props.courseName);
  return (
    <div>
      <h1>Java</h1>
      <p>Trainer : shishira</p>
      <p>Timings : 10am</p>
    </div>
  );
};

export default CoursesComponent;
*/




/*

//// first type 
// const CoursesComponent = (props) => {
//   return (
//     <div>
//         <h1>{props.course}</h1>
//         <p>{props.trainer}</p>
//         <p>Timings : 10am</p>
//     </div>
//   );
// };


////second type
class CoursesComponent extends Component {
    state = {  };
    render() { 
        return ( 
            <div>
                <h1>{this.props.course}</h1>
                <p>{this.props.trainer}</p>
            </div>
        );
    }
}
 


//// destructuring way of props 
const CoursesComponent = (props) => {
    let { name, age, company, salary } = props;
    return (
        <div>
            <h1>I am functional component i dont have state</h1>
            <h1>Name : {name}</h1>
            <p>Age : {age}</p>
            <p>Company : {company}</p>
            <p>Salary : {salary}</p>
        </div>
    );
};




//// class component
const CoursesComponent = (props) => {
    console.log(props);
    return (
        <div>
            <h1>I am functional component</h1>
            <img src={props.img} alt="i am an test" />
        </div>
    );
};



export default CoursesComponent;


*/