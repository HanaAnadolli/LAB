import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "../styles/login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "financa",
      password: "financa",
    },
    {
      username: "recepsionist",
      password: "recepsionist",
    },
    // {
    //   username: "c@prind.com",
    //   password: "Pass12345",
    // },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div>
    <img src="https://getlogo.net/wp-content/uploads/2020/11/parents-logo-vector.png" alt="Girl in a jacket" width="400" height="250"></img>

    <div className="form">

      <form onSubmit={handleSubmit}>
        <div className="grouppp">
        <input type="text" name="uname" required/>
          <label>Username </label>
          <span class="highlight"></span>
          <span class="bar"></span>
          {renderErrorMessage("uname")}
        </div>
        <div className="grouppp">
        <input type="password" name="pass" required />
        <span class="highlight"></span>
      <span class="bar"></span>
          <label>Password </label>
          
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
        
          <input type="submit" />
          <Link to="/signup" className="signu">Click to SignUp</Link>
        </div>
      </form>
    </div>
    </div>
  );

  return (
    <div className="applog">
      <div className="login-form">
      <br></br><br></br>
        <div className="title"></div>
        {isSubmitted ? (
          <div className="logged">
          <p>You are successfully logged in</p>
          <img src="          https://media.istockphoto.com/vectors/check-mark-valid-seal-icon-white-squared-tick-with-shadow-in-blue-vector-id1167940992?b=1&k=20&m=1167940992&s=170667a&w=0&h=sBtOAwd1z_pljg003VNErmJrJpS-1uVzFecCsVwnxkw=
          " alt="Girl in a jacket" width="400" height="400" className="im"></img>
            <Link to="/navbar">Click to proceed</Link>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;