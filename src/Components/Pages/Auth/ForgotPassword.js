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
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { userForgotPasswordStart } from '../../../Redux/Actions/UserAction';

const ForgotPassword = () => {
    const [emailError, setEmailError] = useState(null);
    const history = useHistory()
    const dispatch = useDispatch();
    const [data, setData] = useState({
      email: "",
   });
  const validateEmail = (email) => {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email === "") {
      setEmailError("Email is Required!");
    } else if (!validateEmail(data.email)) {
      setEmailError("Invalid Email! Please enter Valid Email...");
    } else {
      setEmailError("");
    }

    const userData = {
      email: data.email,
    };
    
    dispatch(userForgotPasswordStart(userData));
    history.push('/')
  };
    return (
        <>
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Forgot Password</h2>
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
                                                    {emailError}
                                                </label>
                                
                                <MDBBtn size='lg' type="submit" onClick={handleSubmit}>
                                    Forgot Password
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
                <div className="simple-footer">
                  Copyright &copy; LVNC 2022
                </div>
            </MDBContainer>
        </>
    )
}

export default ForgotPassword;