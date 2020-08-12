import React, { Component, Fragment } from "react";
//faker library
import faker from "faker/locale/en_IND";

/* 
// faker app (******doesnt work as it is incomplete)
class StudentComponent extends Component {
    constructor(props) {
        this.state = {
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            photo: faker.image.avatar(),
            company: faker.company.companyName(),
            email: faker.internet.email(),
            phonenumber: faker.phone.phoneNumber(),
            city: faker.address.city(),
            country: faker.address.country(),
        };
    }
    render() {
        return (
            <Fragment>
                <section id="studentsBlock">
                    <div className="card">
                        <img src={this.state.photo} alt={this.state.name} />
                        <div className="card-body">
                            <h4 className="card-title">
                                {this.state.firstname}
                                {this.state.lastname}
                            </h4>
                            <p className="card-text">Company: {this.state.company}</p>
                            <p className="card-text">Email: {this.state.email}</p>
                            <p className="card-text">Phone: {this.state.phonenumber}</p>
                            <p className="card-text">City: {this.state.city}</p>
                            <p className="card-text">Country: {this.state.country}</p>
                            <button className="btn btn-block btn-dark">Email me</button>

                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}
// faker app (******doesnt work as it is incomplete) 






//// events
class StudentComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {};
    }
  }

  clickMe() {
    alert("i am click method execute me");
  }
  render() {
    return (
      <Fragment>
        <button onClick={() => this.clickMe()}>Click me</button>
      </Fragment>
    );
}







//// call,apply,bind for this keyword 
class StudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0, //private data
        photo: faker.image.avatar(),
      };
      // react valid,best way for bind this keyword
      this.Increment = this.Increment.bind(this);
      this.Decrement = this.Decrement.bind(this);
      this.updatePhoto = this.updatePhoto.bind(this);
  }

  // (not recommended or shortcut method) use fat arrow instead of normal function to avoid "this" keyword error
  //ther are 4 ways to bind
//   Increment = () => {
//     this.setState({ count: this.state.count + 1 });
//     console.log("Increment");
//   };
//   Decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//     console.log("Decrement");
//   };

    Increment() {
        this.setState({ count: this.state.count + 1 });
        console.log("Increment");
    }
    
    Decrement() {
        this.setState({ count: this.state.count - 1 });
        console.log("Decrement");
    }
    
    updatePhoto() {
        this.setState({ photo: faker.image.avatar() });
    }


  render() {
    return (
      <Fragment>
        <div className="container my-4">
          <span className="badge badge-dark m-2">{this.state.count}</span>
          <img src={this.state.photo} alt="user_img" className="img-circle" width="100" height="100" onClick={this.updatePhoto} />
            <div className="btn-group">
            <button
              className="btn btn-danger"
              onClick={() => this.Increment(this)}
            >
              +
            </button>
            <button
              className="btn btn-dark"
              onClick={() => this.Decrement(this)}
            >
              -
            </button>
            <button
              className="btn btn-danger"
              onClick={this.Increment.bind(this)}
            >
              +
            </button>
            <button
              className="btn btn-dark"
              onClick={this.Decrement.bind(this)}
            >
              -
            </button> 
            <button
              className="btn btn-danger"
              onClick={this.Increment}  //copy new function as well it is binding
            >
              +
            </button>
            <button
              className="btn btn-dark"
              onClick={this.Decrement} 
            >
              -
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}







export default StudentComponent;
*/
