import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-4">
          <div className="container">
            <a href="#" className="navbar-brand">Foodie</a>
            <button className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
              <ul className="navbar-nav">
                <li className="nav-item pr-2">
                  <a href="#" className="nav-link"><i className="fa fa-user"></i> Hello User</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Logout</a>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
