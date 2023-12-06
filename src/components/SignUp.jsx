import React from 'react';
import './animations.css';
import './main.css';
import './signup.css';

function SignUp() {

  const handleSubmit = (event) => {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(event.target);

    // Process form data or perform necessary actions
    const personalData = {
      fname: formData.get('fname'),
      lname: formData.get('lname'),
      address: formData.get('address'),
      nic: formData.get('nic'),
      dob: formData.get('dob')
    };

    console.log(personalData); // Log the form data

    // Perform any necessary actions with the form data
    // Redirect or trigger other actions as needed
  };

  return (
    <center>
      <div className="container">
        <table border="0">
          <tbody>
            <tr>
              <td colSpan="2">
                <p className="header-text">Let's Get Started</p>
                <p className="sub-text">Add Your Personal Details to Continue</p>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="name" className="form-label">Name: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td">
                <input type="text" name="fname" className="input-text" placeholder="First Name" required />
              </td>
              <td className="label-td">
                <input type="text" name="lname" className="input-text" placeholder="Last Name" required />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="address" className="form-label">Address: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="text" name="address" className="input-text" placeholder="Address" required />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="nic" className="form-label">NIC: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="text" name="nic" className="input-text" placeholder="NIC Number" required />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="dob" className="form-label">Date of Birth: </label>
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2">
                <input type="date" name="dob" className="input-text" required />
              </td>
            </tr>
            <tr>
              <td className="label-td" colSpan="2"></td>
            </tr>
            <tr>
              <td>
                <input type="reset" value="Reset" className="login-btn btn-primary-soft btn" />
              </td>
              <td>
                <input type="submit" value="Next" className="login-btn btn-primary btn" onClick={handleSubmit} />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <br />
                <label htmlFor="" className="sub-text" style={{ fontWeight: '280' }}>Already have an account? </label>
                <a href="C:\project\prjt\dct\src\components\Login.jsx" className="hover-link1 non-style-link">Login</a>
                <br /><br /><br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  );
}

export default SignUp;
