import React from 'react';
import './animations.css';
import './main.css';
import './index.css';

function Interface() {
  return (
    <div className="full-height">
      <center>
        <table border="0">
          <tbody>
            <tr>
              <td width="80%">
                <span className="edoc-logo">Docere </span>
                <span className="edoc-logo-sub">| companion</span>
              </td>
              <td width="10%">
                <a href="Login" className="non-style-link"><p className="nav-item">LOGIN</p></a>
              </td>
              <td width="10%">
                <a href="signup.php" className="non-style-link"><p className="nav-item" style={{ paddingRight: '10px' }}>REGISTER</p></a>
              </td>
            </tr>

            <tr>
              <td colSpan="3">
                <p className="heading-text">Your health is our commitment!</p>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <p className="sub-text2">Connect today and experience healthcare made easy. Whether you need medications, medical advice, or simply want to stay informed about healthcare options in your area, 
                <br/>we're here to serve you. Your health is our commitment!.</p>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <center>
                  <a href="login.php">
                    <input type="button" value="Make Appointment" className="login-btn btn-primary btn" style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px' }} />
                  </a>
                </center>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
              </td>
            </tr>
          </tbody>
        </table>
        <p className="sub-text2 footer-hashen">Athul&jibin</p>
      </center>
    </div>
  );
}

export default Interface;
