import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import axios from "axios";

class Dashboard extends Component {
  state = {
    addUser: {
      name: "",
      email: "",
      password: "",
      role: "",
    },
    users: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.getUser();
  }

  getUser() {
    return axios
      .get("http://localhost:5500/api/user")
      .then((res) => {
        const data = res.data;
        this.setState({ users: data });
      })
      .then((res) => {
        var users = [{ ...this.state.users }];
        this.setState({ movies: users });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteStudent(users) {
    // console.log(users)
    const data = [{ ...users }];
    for (let key in data) {
      const data = users[key];
      var id = data._id;
      console.log(id);
      return id;
    }
    // console.log(data._id)
    // const id = users._id;
    axios
      .get(`http://localhost:5500/api/deleteUser/${id}`)
      .then(() => {
        console.log("Employee Deleted !!!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  displayUser(users) {
    console.log(users);
    if (!users.length) return null;

    return users.map((user, index) => (
      <tr key={index} className="dataRow">
        <td className="tableDataItems">{user.name}</td>
        <td className="tableDataItems">{user.email}</td>
        <td className="tableDataItems">{user.password}</td>
        <td className="tableDataItems">{user.role}</td>

        <td onChange={this.deleteStudent(this.state.users)}>
          {" "}
          <span>
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </td>
      </tr>
    ));
  }

  render() {
    // const { users } = this.state.users.data
    // console.log(this.state.users)

    return (
      <>
        <div className="container">
          <div className="row">
            <NavBar />
            <div className="col">
              <NavLink className="addUser" to="/addUser">
                <i className="fa-regular fa-user"></i>
                {"      "}
                {"      "}Add User
              </NavLink>
              <p style={{ marginTop: 150, marginLeft: 20, marginRight: 45 }}>
                Question: Create an Admin portal which can create users, remove
                users and assigne instructor role to<br></br> new users and save
                it in the database using react and node js.
              </p>
              <h1 className="headingUser">User Info</h1>
              <div className="data">
                <table className="dataTable">
                  <tbody className="dataBody">
                    <tr className="dataRow">
                      <th className="tableHead">Name</th>
                      <th className="tableHead">Email</th>
                      <th className="tableHead">Password</th>
                      <th className="tableHead">Role</th>
                    </tr>
                    {this.displayUser(this.state.users)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
