import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'

const LoginPage = () => (
  <div className="login-page">
    <h1>This is Login Page</h1>
    <button onClick={startLogin}>Login</button>
  </div>
);
export default LoginPage;

// const mapDispatchToProps = (dispatch) => ({
//   startLogin: () => dispatch(startLogin())
// });

// export default connect(undefined, mapDispatchToProps)(LoginPage);
