import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super (props);
    this.state={
      email:"",
      password:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {email,password} = this.state;
    console.log(email,password);
    
    fetch("http://localhost:8000/forgot-password",{
    method: "POST",
    crossDomain:true,
    headers:{
      "Content-Type": "application/json",
      Accept:"application/json",
      "Access-Control-Allow-Orgin":"*",
    },
    body:JSON.stringify({
      email,

    }),  
  })
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data,"forgotpassword");
    alert(data.status);
  });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Forgot password</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e=>this.setState({email:e.target.value})}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className = "forgot-password text-right">
            <a href ="/sign-up">Sign Up</a>
        </p>
      </form>
    )
  }
}


