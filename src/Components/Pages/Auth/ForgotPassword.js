import React, { useEffect, useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { userForgotPasswordStart } from '../../../Redux/Actions/UserAction';

const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const ForgotPassword = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const data = useSelector((state) => state?.user?.userForgotPassword);
    console.log('FORGOT-PASSWORD~~~~~~~~~~~>>>', data)
    const [submit, setsubmit] = useState(false)
    const [formInputes, setformInputes] = useState({
      email: "",
  })

  const [ErrorInputes, setErrorInputes] = useState({ ...formInputes })
  const handleChange = (e) => {
      const { name, value } = e.target
      setformInputes({ ...formInputes, [name]: value })
      switch (name) {
          case "email":
              if (!value) {
                  ErrorInputes.email = value.length > 0 ? "" : "Enter your email"
              }
              else {
                  ErrorInputes.email = emailRegx.test(value) === false && "Enter your valid email"
              }
              break;
          default:
              break;
      }
      setErrorInputes(ErrorInputes)
  }

  function validate(value) {
    if (!formInputes.email) {
        ErrorInputes.email = "Enter email"
    }
    return ErrorInputes
}
useEffect(() => {
  if (data.status === 200) {
      setformInputes({
      email: "",
    })
  }
}, [data])

useEffect(() => {
  if (Object.keys(ErrorInputes).length === 0 && Object.keys(formInputes).length !== 0) {
      console.log(ErrorInputes, "ErrorInputes")
  }
}, [])

const handleSubmit = (e) => {
  e.preventDefault()
  setsubmit(true)
  setErrorInputes(validate(formInputes));
  if (formInputes.email !== "") {
     if ( ErrorInputes.email.length == undefined) {
      var ForgotPasswordPayload={
          email:formInputes.email,
      }
      setTimeout(() => {
          dispatch(userForgotPasswordStart(ForgotPasswordPayload));
        }, 2000); 
     }
   }
}



    return (
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
                                                    marginLeft: "5%",
                                                    display: "flex"
                                                }}>
                                                   <span className='cstm_error'>{ErrorInputes.email}</span>
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
    )
}

export default ForgotPassword;