import React, { useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLoginStart } from '../../../Redux/Actions/UserAction';

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state?.user?.userLogin?.status);
    const history = useHistory();
    const [submit, setSubmit] = useState();
    const [data, setData] = useState({
        email: '',
        password: ''
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
        if (data.email !== '' && data.password !== '') {
            var loginData = {
                email: data.email,
                password: data.password
            }
            dispatch(userLoginStart(loginData))
        }
    };

    if (user === 200) {
        history.push('/');
        // window.location.reload()
    }

    return (
        <div className='login-container' >
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
                                    onChange={handleChange} />
                                <label style={{
                                    color: "red",
                                    marginLeft: "3%",
                                    display: "flex"
                                }}>
                                    {submit && !data.email && <p>Email required.</p> || submit && !validateEmail(data.email) && <p>Please Enter Valid Email!.</p>}
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
                                    marginLeft: "3%",
                                    display: "flex"
                                }}>
                                    {submit && !data.password && <p>Password required.</p>}
                                </label>

                                {/* <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' /> */}
                                <p className="small mb-3 pb-lg-2"><a href="/forgot-password" style={{ color: '#3b71ca' }}>Forgot password?</a></p>

                                <MDBBtn size='lg' type="submit" onClick={handleSubmit}>
                                    Login
                                </MDBBtn>

                                <hr className="my-4" />
                                <p className="text-center">Not a member? <a href="/signup">Register</a></p>


                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
                <div className="simple-footer">
                    Copyright &copy; LVNC 2022
                </div>
            </MDBContainer>
        </div>
    )
}

export default Login;