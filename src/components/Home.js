// import React from 'react';
// import { Jumbotron, Button } from 'reactstrap';

// const Home = ({props}) => (
//   <div>
//     <Jumbotron className="custom-jumbotron">
//       <h1 className="main-text">Hello, Radio Africa</h1>
//       <Button
//         color="secondary"
//         className="custom-button"
//         size="lg"
//         block
//         onClick={this.props.auth.login}
//       >
//         Sign In
//       </Button>
//     </Jumbotron>
//   </div>
// );
// export default Home;
import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
      <div>
        <Jumbotron className="custom-jumbotron">
          <h1 className="main-text">Hello, Radio Africa</h1>
          {isAuthenticated() ? (
            <>
              <Link className="custom-button" to="/profile">
                View Profile
              </Link>
              <Button
                color="secondary"
                className="custom-button"
                size="lg"
                block
                onClick={logout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              color="secondary"
              className="custom-button"
              size="lg"
              block
              onClick={login}
            >
              Sign In
            </Button>
          )}
        </Jumbotron>
      </div>
    );
  }
}
