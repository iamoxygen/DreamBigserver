import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="col sideNav">
          <table className="sideNavBarTable">
            <tr className="sideNavRow">
              <td className="sideNavData">
                <span className="dot"></span>
              </td>
            </tr>
            <tr className="sideNavRow">
              <td className="sideNavDataLinks">
                <b style={{ fontSize: 26 }}>Admin Panel</b>
              </td>
            </tr>
            <tr className="sideNavRow">
              <td className="sideNavDataLinks">
                <i className="fa-solid fa-chart-line"></i>
                <NavLink className="dashboardLink" to="/">
                  Dashboard
                </NavLink>
              </td>
            </tr>
            <tr className="sideNavRow">
              <td className="sideNavDataLinks">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <NavLink className="dashboardLink" to="/">
                  Log out
                </NavLink>
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

export default NavBar;
