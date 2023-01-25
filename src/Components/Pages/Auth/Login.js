import React, { useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLoginStart } from '../../../Redux/Actions/UserAction';

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.user?.userLogin?.status);
    const history = useHistory();
    const [submit , setSubmit] = useState();
    const [data, setData] = useState({
      email:'',
      password:''
    })

    const validateEmail = (email) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(String(email).toLowerCase());
    };

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
        if(data.email !== '' && data.password !== '') {
          var loginData = {
            email: data.email,
            password: data.password
          }
          dispatch(userLoginStart(loginData))
        }  
    };

    // if (user === 200) {
    //     history.push('/')
    // }

    return (
        <>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                <MDBInput 
                                    wrapperClass='mb-4 w-100' 
                                    label='Email address' 
                                    id='email' 
                                    type='email' 
                                    size="lg" 
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}/>
                                    <label style={{
                                                    color: "red",
                                                    marginLeft: "10%",
                                                    display: "flex"
                                                }}>
                                                   {submit && !data.email && <small className="p-invalid">Email required.</small> || submit && !validateEmail(data.email) && <small className="p-invalid">Please Enter Valid Email!</small>}
                                                </label>
                                <MDBInput 
                                    wrapperClass='mb-4 w-100' 
                                    label='Password' 
                                    id='password' 
                                    type='password' size="lg"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange} />
                                     <label style={{
                                                    color: "red",
                                                    marginLeft: "5%",
                                                    display: "flex"
                                                }}>
                                    {submit && !data.password && <small className="p-invalid">Password required.</small>}
                                                </label>

                                {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' /> */}
                                <p className="small mb-3 pb-lg-2"><a  href="/forgot-password" style={{color: '#3b71ca'}}>Forgot password?</a></p>
                                
                                <MDBBtn size='lg' type="submit" onClick={handleSubmit}>
                                    Login
                                </MDBBtn>

                                <hr className="my-4" />

                                <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                                    <MDBIcon fab icon="google" className="mx-2" />
                                    Sign in with google
                                </MDBBtn>

                                <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                                    <MDBIcon fab icon="facebook-f" className="mx-2" />
                                    Sign in with facebook
                                </MDBBtn>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
                <div className="simple-footer">
                  Copyright &copy; LVNC 2022
                </div>
            </MDBContainer>
            {/* <div id="app">
                <section className="section">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                                <div className="login-brand">
                                <img
                                    src="assets/images/logo.png"
                                    style={{ height: '80px', width:'300px',
                                            backgroundColor:'#032a63',
                                            border: '2px solid #032a63',
                                            marginLeft:'4%',
                                            marginTop:'5%'}}
                                    alt="logo"
                                    width="100"
                                    className="shadow-light rounded-rectengle"
                                />
                                </div>

                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h4>Login</h4>
                                    </div>

                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
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
                                                    marginLeft: "10%",
                                                    display: "flex"
                                                }}>
                                                    {emailError}
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <div className="d-block">
                                                    <label
                                                        htmlFor="password"
                                                        className="control-label"
                                                    >
                                                        Password
                                                    </label>
                                                    <div className="float-right">
                                                        <a
                                                            href="/forgot-password"
                                                            className="text-small"
                                                        >
                                                            Forgot Password?
                                                        </a>

                                                    </div>
                                                </div>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    value={data.password}
                                                    onChange={handleChange}
                                                />
                                                <label style={{
                                                    color: "red",
                                                    marginLeft: "5%",
                                                    display: "flex"
                                                }}>
                                                    {passwordError}
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-lg btn-block"
                                                    tabIndex="4"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                        <div className="row sm-gutters">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}
        </>
    )
}

export default Login;