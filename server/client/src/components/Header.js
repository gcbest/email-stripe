import React, { Component } from 'react';

// do not have to have state in class based component,
// can just use it to organize helper functions
class Header extends Component {
    render() {
        return (
          <nav>
              <div className="nav-wrapper">
                  <a href="" className="left brand-logo">
                      Emaily-Stripe
                  </a>
                  <ul className="right">
                      <li>
                          <a href="">Login with Google</a>
                      </li>
                  </ul>
              </div>
          </nav>
        );
    }
}

export default Header;