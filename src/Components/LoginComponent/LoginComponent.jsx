import React, { Component, Fragment } from "react";

/*
//basic
const LoginComponent = () => {
    return (
        <div>
            <h1>I am Login component</h1>
        </div>
    );
};

export default LoginComponent;

*/





/*
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            username: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value }); // important
    }

    handelSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.setState({ username: "", password: "" });
    }

    render() {
        return (
            <Fragment>
                <h1 className="display-5 text-danger fon-weight-bold text-uppercase my-2 text-center">
                    Login
            </h1>
                <div className="card d-flex col-md-4 mx-auto">
                    <form onSubmit={this.handelSubmit}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-dark btn-block my-2">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}


export default LoginComponent;
*/





/*
///logincomponent for flipkart app (it has a login form)
import React, { Component, Fragment } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <h1 className="display-4 font-weight-bold text-uppercase text-primary text-center">
          Login
        </h1>
        <div className="card col-md-4 mx-auto">
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block my-4">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;

*/