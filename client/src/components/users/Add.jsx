import axios from "axios";
import React, { Component } from "react";

class Adduser extends Component {
  state = {
    addUser: {
      name: "",
      email: "",
      password: "",
      role: "",
    },
  };

  handleOnChange = (e) => {
    const addUser = { ...this.state.addUser };
    addUser[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ addUser });
  };
  
  addUser = (e) => {
    e.preventDefault();
       axios
      .post("/api/register", this.state.addUser)
      .then((res) => {
        this.setState({name:'',email:'',password:'',role:''})
      })
      .then((res) => {
        console.log("second"+res)
        window.location = '/';;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { name, password, email, role } = this.state.addUser;


    return (
      <>
        <div className="container">
          <h1>Add New User</h1>
          <form>
            <label htmlFor="email">
              <b>Enter name</b>
            </label>

            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleOnChange}
              placeholder="Enter Email"
            />
            <br />
            <br />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              value={email}
              onChange={this.handleOnChange}
              placeholder="Enter Email"
              name="email"
            />
            <br />
            <br />
            <label htmlFor="pwd">
              <b>Password</b>
            </label>
            <input
              type="password"
              value={password}
              onChange={this.handleOnChange}
              placeholder="Enter Password"
              name="password"
            />
            <br />
            <br />
            <label htmlFor="confirm">
              <b>Instructor Role</b>
            </label>

            <select name="role" onChange={this.handleOnChange}>
              <option value="0">select</option>
              <option value="admin">admin</option>
              <option value="user">User</option>

              {role}
            </select>
            <br />
            <br />
            <button type="submit" onClick={this.addUser} className="addBTN">
              <strong>Add user</strong>
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Adduser;
