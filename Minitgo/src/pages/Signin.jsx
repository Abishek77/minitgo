import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import Minitgo from '../components/images/minitgo.png';
 

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    width: '100%',
    padding: '30px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
    borderRadius: '20px',
    boxSizing: 'none',
    animation: 'fade-in 0.5s',
  },
};

const closebtn = {
  border: 'none',
  boxShadow: '0 0px 3px rgba(0, 0, 0, 0.5)',
  padding: '5px',
  borderRadius: '50px',
  color: 'red',
  width: '35px',
};

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    setShowResetModal(true);
  };

  const handleResetEmailChange = (event) => {
    setResetEmail(event.target.value);
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    // Handle password reset logic here
    setShowResetModal(false);
  };

  const closeModal = () => {
    setShowResetModal(false);
    setResetEmail('');
  };

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div className="container login py-4 my-1">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card-b">
              <div className="text-center">
                <img className="logo w-50 " src={Minitgo} />
                
              </div>
              <div className="card-body">
              
                <form>
                  <div className="form-group">
                  <h5>Login</h5>
                    <label htmlFor="email">Email or Phone</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email or phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                  </div>
                  <div className="form-check c-box">
                    <input
                      type="checkbox"
                      className="form-check-input "
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Keep me logged in
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary btn-l">
                    Login
                  </button>
                  <a href="#" onClick={handleForgotPassword} className="forgot-password-link">
                    Forgot Password?
                  </a>
                  <a href="/register" className="forgot-password-link">
                    Create an Account!
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={showResetModal}
          onRequestClose={closeModal}
          contentLabel="Reset Password"
          style={modalStyles}
        >
          <div className="modal-header">
            <h5 className="modal-title">Reset Password</h5>
            <button type="button" style={closebtn} onClick={closeModal} aria-label="Close">
              <span aria-hidden="true">X</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleResetPassword}>
              <div className="form-group">
                <label htmlFor="resetEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="resetEmail"
                  placeholder="Enter email"
                  value={resetEmail}
                  onChange={handleResetEmailChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Confirmation Code
              </button>
            </form>
          </div>
        </Modal>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       
    </>
  );
};

export default Login;
