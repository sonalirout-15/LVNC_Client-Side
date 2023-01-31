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
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createUserStart } from "../../../Redux/Actions/UserAction";

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.user);
  const history = useHistory();
  const [submit, setSubmit] = useState();
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    phonenumber: '',
    address: '',
  })

  const validateEmail = (email) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(email).toLowerCase())
  }

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?!.* )(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
    return re.test(String(password))
  }

  const validatePhoneNum = (phonenumber) => {
    const reg = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    return reg.test(phonenumber)
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(true);
    setData(data)
    if (data.username !== '' && data.email !== '' && data.password !== '' && data.confirm_password !== '' && data.phonenumber !== '' && data.address !== '') {
      var signupData = {
        username: data.username,
        email: data.email,
        password: data.password,
        confirm_password: data.confirm_password,
        phonenumber: data.phonenumber,
        address: data.address
      }
      dispatch(createUserStart(signupData))
    }
  };

  if(user?.message === 'User created successfully'){
    history.push('/login')
  }

  return (

      <MDBContainer fluid>

          <MDBCard className='text-black m-5' style={{ borderRadius: '10px', height: '10%', width: '50%', marginLeft: '100%' }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md='5' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

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
                    marginLeft: '3%',
                    display: "flex"
                  }}>
                    {submit && !data.username && <p>Username required.</p>}
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
                    marginLeft: "3%",
                    display: "flex"
                  }}>
                    {submit && !data.email && <p>Email required.</p> || submit && !validateEmail(data.email) && <p>Please Enter Valid Email!</p>}
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
                    marginLeft: '3%',
                    display: "flex"
                  }}>
                    {submit && !data.password && <p>Password required.</p> || submit && !validatePassword(data.password) && <p>Please Enter Valid Password!</p>}
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
                    marginLeft: "3%",
                    display: "flex"
                  }}>
                    {submit && !data.confirm_password && <p>Confirm Password required.</p>}
                  </label>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="phone me-3" size='lg' />
                    <MDBInput
                      label='Mobile no'
                      id='phonenumber'
                      type='text'
                      name="phonenumber"
                      value={data.phonenumber}
                      onChange={handleChange}
                    />
                  </div>
                  <label style={{
                    color: "red",
                    marginLeft: "3%",
                    display: "flex"
                  }}>
                    {submit && !data.phonenumber && <p>Moible No required.</p> || submit && !validatePhoneNum(data.phonenumber) && <p>Please Enter Valid Mobile No!</p>}
                  </label>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="home me-3" size='lg' />
                    <MDBInput
                      label='Address'
                      id='address'
                      type='text'
                      name="address"
                      value={data.address}
                      onChange={handleChange} />
                  </div>
                  <label style={{
                    color: "red",
                    marginLeft: "3%",
                    display: "flex"
                  }}>
                    {submit && !data.address && <p>Address required.</p>}
                  </label>

                  <div className='mb-4'>

                  </div>

                  <MDBBtn className='mb-4' size='lg' type="submit" onClick={handleSubmit}>Register</MDBBtn>
                  <p className="text-center">Have already an account? <a href="/">Login here</a></p>
                </MDBCol>

                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                </MDBCol>

              </MDBRow>
            </MDBCardBody>
          </MDBCard>
      </MDBContainer>
     
  )
}

export default Signup;