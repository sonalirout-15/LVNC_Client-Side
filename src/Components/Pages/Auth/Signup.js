import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createUserStart } from "../../../Redux/Actions/UserAction";

const Signup = () => {
  const dispatch = useDispatch();
  const [usernameError, setUsernameErorr] = useState()
  const [passwordError, setPasswordError] = useState();
  const [emailError, setEmailErorr] = useState()
  const [confirmPasswordError, setConfirmPasswordError] = useState();
  const [mobileError, setmobileError] = useState();
  const [addressError, setAddressError] = useState();
  const user = useSelector((state) => state);
  console.log('USER-REGISTRATION¬¬¬¬¬¬¬¬¬', user)
  const history = useHistory();

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    mobile: '',
    address: '',
  })
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    })
  }
  const validateEmail = (email) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase())
  }
  const userData = {
    username: data.username,
    email: data.email,
    password: data.password,
    confirm_password: data.confirm_password,
    mobile: data.mobile,
    address: data.address
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.username === '') {
      setUsernameErorr('Username Required!')
    }
    if (data.email === '') {
      setEmailErorr("Email Required!")
    } else if (!validateEmail(data.email)) {
      setEmailErorr("Invalid Email! Please enter valid email")
    } else {
      setEmailErorr("")
    }
    if (data.password === "") {
      setPasswordError("Password can be emapty!")
    } else if (data.password.length < 3) {
      setPasswordError('Password is small');
    } else {
      setPasswordError("")
    }
    if (data.confirm_password === '') {
      setConfirmPasswordError('Confirm Password Required!')
    } else if (data.password !== data.confirm_password) {
      setConfirmPasswordError('Password and Confirm Password does not match!')
    }
    if (data.mobile === '') {
      setmobileError('Mobile No Required!')
    }
    if (data.address === '') {
      setAddressError('Address Required')
    }
    dispatch(createUserStart(data))
    // history.push('/')
  };

  return (
    <>
      <MDBContainer fluid>
        <center>

          <MDBCard className='text-black m-5' style={{ borderRadius: '10px', height: '10%', width: '50%', marginLeft: '100%' }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='5' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                  <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg' />
                    <MDBInput
                      label='Your Name'
                      id='name'
                      type='text'
                      className='w-100'
                      name="username"
                      value={data.username}
                      onChange={handleChange}
                    />
                  </div>
                  <label style={{
                    color: "red",
                    marginLeft: '10%',
                    display: "flex"
                  }}>
                    {usernameError}
                  </label>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg' />
                    <MDBInput
                      label='Your Email'
                      id='email'
                      type='email'
                      name="email"
                      value={data.email}
                      onChange={handleChange} />
                  </div>
                  <label style={{
                    color: "red",
                    marginLeft: "10%",
                    display: "flex"
                  }}>
                    {emailError}
                  </label>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg' />
                    <MDBInput
                      label='Password'
                      id='password'
                      type='password'
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                    />
                  </div>
                  <label style={{
                    color: "red",
                    marginLeft: '10%',
                    display: "flex"
                  }}>
                    {passwordError}
                  </label>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg' />
                    <MDBInput
                      label='Repeat your password'
                      id='confirm_password'
                      type='password'
                      name="confirm_password"
                      value={data.confirm_password}
                      onChange={handleChange}
                    />
                  </div>
                  <label style={{
                    color: "red",
                    marginLeft: "10%",
                    display: "flex"
                  }}>
                    {confirmPasswordError}
                  </label>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="phone me-3" size='lg' />
                    <MDBInput
                      label='Mobile no'
                      id='mobile'
                      type=''
                      name="mobile"
                      value={data.mobile}
                      onChange={handleChange}
                    />
                  </div>
                  <label style={{
                    color: "red",
                    marginLeft: "10%",
                    display: "flex"
                  }}>
                    {mobileError}
                  </label>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="home me-3" size='lg' />
                    <MDBInput
                      label='Address'
                      id='address'
                      type=''
                      name="address"
                      value={data.address}
                      onChange={handleChange} />
                  </div>
                  <label style={{
                    color: "red",
                    marginLeft: "10%",
                    display: "flex"
                  }}>
                    {addressError}
                  </label>

                  <div className='mb-4'>
                    {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' /> */}
                  </div>

                  <MDBBtn className='mb-4' size='lg' type="submit" onClick={handleSubmit}>Register</MDBBtn>

                </MDBCol>

                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                </MDBCol>

              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </center>
      </MDBContainer>
      {/* <div id="app">
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                <div className="login-brand">
                  <img
                    src="../assets/img/stisla-fill.svg"
                    alt="logo"
                    width="100"
                    className="shadow-light rounded-circle"
                  />
                </div>

                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Signup</h4>
                  </div>

                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input
                          id="username"
                          type="text"
                          className="form-control"
                          name="username"
                          value={data.username}
                          onChange={handleChange}
                          autoFocus
                        />
                        <label style={{
                          color: "red",
                          marginLeft: '40%',
                          display: "flex"
                        }}>
                          {usernameError}
                        </label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                        />
                        <label style={{
                          color: "red",
                          marginLeft: "40%",
                          display: "flex"
                        }}>
                          {emailError}
                        </label>
                        <div className="invalid-feedback"></div>
                      </div>
                      <div className="row">
                        <div className="form-group col-6">
                          <label htmlFor="password" className="d-block">
                            Password
                          </label>
                          <input
                            id="password"
                            type="password"
                            className="form-control pwstrength"
                            data-indicator="pwindicator"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                          />
                          <label style={{
                            color: "red",
                            marginLeft: '40%',
                            display: "flex"
                          }}>
                            {passwordError}
                          </label>
                        </div>
                        <div className="form-group col-6">
                          <label htmlFor="password2" className="d-block">
                            Password Confirmation
                          </label>
                          <input
                            id="confirm_password"
                            type="password"
                            className="form-control pwstrength"
                            data-indicator="pwindicator"
                            name="confirm_password"
                            value={data.confirm_password}
                            onChange={handleChange}
                          />
                          <label style={{
                            color: "red",
                            marginLeft: "40%",
                            display: "flex"
                          }}>
                            {confirmPasswordError}
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Contact</label>
                        <input
                          id="mobile"
                          type="mobile"
                          className="form-control"
                          name="mobile"
                          value={data.mobile}
                          onChange={handleChange}
                        />
                        <label style={{
                          color: "red",
                          marginLeft: "40%",
                          display: "flex"
                        }}>
                          {mobileError}
                        </label>
                        <div className="invalid-feedback"></div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                          id="address"
                          type="text"
                          className="form-control"
                          name="address"
                          value={data.address}
                          onChange={handleChange}
                        />
                        <label style={{
                          color: "red",
                          marginLeft: "40%",
                          display: "flex"
                        }}>
                          {addressError}
                        </label>
                        <div className="invalid-feedback"></div>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                        >
                          Signup
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="simple-footer">Copyright &copy; LVNC 2022</div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  )
}

export default Signup;