import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// do not have to have state in class based component,
// can just use it to organize helper functions
class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Log In with Google</a></li>
                );
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }

    render() {
        return (
          <nav>
              <div className="nav-wrapper">
                  <Link
                      to={this.props.auth ? '/surveys' : '/'}
                      className="left brand-logo"
                  >
                      Emaily-Stripe
                  </Link>
                  <ul className="right">
                      {this.renderContent()}
                  </ul>
              </div>
          </nav>
        );
    }
}

// entire state is passed to this function
function mapStateToProps(state) {
    // return and object that will be passed to Header as props
    return { auth: state.auth };
}

// condensed version of mapStateToProps:
// function mapStateToProps({ auth }) {
//     return { auth };
// }

export default connect(mapStateToProps)(Header);