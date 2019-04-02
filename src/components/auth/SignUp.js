//class based cop, 

import React, { Component } from 'react'

export class SignUp extends Component {
  state = {
      email : '',
      password : '',
      firstName: '',
      lastName: ''

  }

  handleChange = (e) => {
    //console.log(e);
    this.setState({
        //updata the state with the value of the target element
        [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    //console.log(e);
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3 center">
                    Sign Up
                </h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={this.handleChange}/>
                </div>
                <div className="input-field center">
                    <button className="btn blue lighten-1 z-depth-0">Sign up</button>
                </div>
            </form>
            
        </div>
      </div>
    )
  }
}

export default SignUp;

