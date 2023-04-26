import React, { Component } from "react";



export default class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state ={
            UserDetails: "",
        }
    }
  componentDidMount() { 
    fetch("http://localhost:8000/userDetails", {
    method: "POST",
    crossDomain:true,
    headers:{
      "Content-Type": "application/json",
      Accept:"application/json",
      "Access-Control-Allow-Orgin":"*",
    },
    body: JSON.stringify({
    token: window.localStorage.getItem("token"),
    }),  
  })
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data,"user details");
    this.setState({UserDetails:data.data});
    if(data.data=='token expired'){
        alert("Token expired login again");
        window.localStorage.clear();
        window.location.href="./sign-in";

    }
  });
}
  logOut=()=>{
    window.localStorage.clear();
    window.location.href="./sign-in";
  }
  

  render(){
    return(
        <div>
            Name<h1>{this.state.UserDetails.fname}</h1>
            Email  <h1>{this.state.UserDetails.email}</h1><br/>
            <button onClick={this.logOut} className="btn-primary">Log out</button>
        </div>
    );
  }
}