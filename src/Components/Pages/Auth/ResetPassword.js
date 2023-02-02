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
import { userResetPasswordStart } from '../../../Redux/Actions/UserAction';

var passwordregx = /^(?=.*[a-z])(?!.* )(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

const ResetPassword = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const data = useSelector((state) => state?.user?.userResetPassword);
    console.log('DATA!!!~~~~~>>>>', data)
    const [submit, setsubmit] = useState(false);
    const [ResetPasswordInputes, setResetPasswordInputes] = useState({
      newPassword: "",
      confirmPassword: "",
    });
    const [ErrorResetPasswordInputes, setErrorResetPasswordInputes] = useState({
      ...ResetPasswordInputes,
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setResetPasswordInputes({ ...ResetPasswordInputes, [name]: value });
  
      switch (name) {
        case "newPassword":
          if (!value) {
            ErrorResetPasswordInputes.newPassword = "Please enter your Password";
          }
          else if (value.length < 4) {
            ErrorResetPasswordInputes.newPassword = "Password length must more than 4 character";
          }
          else if (value.length > 16) {
            ErrorResetPasswordInputes.newPassword = "Password length must be less than 16 characters";
          }
          else {
            ErrorResetPasswordInputes.newPassword = passwordregx.test(value) === false && "Enter valid current Password"
          }
          break;
          case "confirmPassword":
            if (!value) {
              ErrorResetPasswordInputes.confirmPassword = "Please enter your Password";
            }
            else if (value.length < 4) {
              ErrorResetPasswordInputes.confirmPassword = "Password length must more than 4 character";
            }
            else if (value.length > 16) {
              ErrorResetPasswordInputes.confirmPassword = "Password length must be less than 16 characters";
            }
            else {
              ErrorResetPasswordInputes.confirmPassword = passwordregx.test(value) === false && "Enter valid confirm Password"
            }
            break;
        default:
          break;
      }
      setErrorResetPasswordInputes(ErrorResetPasswordInputes);
    };

    function validate(value) {
      if (!ResetPasswordInputes.newPassword) {
        ErrorResetPasswordInputes.newPassword = "Enter new Password";
      }
      if (!ResetPasswordInputes.confirmPassword) {
        ErrorResetPasswordInputes.confirmPassword = "Enter confirm Password";
      }
      return ErrorResetPasswordInputes;
    }
    useEffect(() => {
      if (
        Object.keys(ErrorResetPasswordInputes).length === 0 &&
        Object.keys(ResetPasswordInputes).length !== 0
      ) {
      }
    }, []);
    const handleSubmit = (e) => {
      e.preventDefault();
      setsubmit(true);
      setErrorResetPasswordInputes(validate(ResetPasswordInputes));
  
      if (
        ResetPasswordInputes.newPassword !== "" &&
        ResetPasswordInputes.confirmPassword !== ""
      ) {
        //  if ( ErrorResetPasswordInputes.newPassword.length == undefined) {
        var resetPasswordPayload = {
          newPassword: ResetPasswordInputes.newPassword,
          confirmPassword: ResetPasswordInputes.confirmPassword,
        };
        setTimeout(() => {
          dispatch(userResetPasswordStart(resetPasswordPayload));
        }, 2000);
      }
      //  }
    };

    if (data.status === 200) {
      history.push("/login");
    }


    return (
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Reset Password</h2>
                                <p className="text-white-50 mb-3">Please enter your Current Password  and New Password!</p>
                                
                                <MDBInput
                                    wrapperClass='mb-4 w-100'
                                    label='New Password'
                                    id='newPassword'
                                    type='password' size="lg"
                                    name="newPassword"
                                    value={data.newPassword}
                                    onChange={handleChange} />
                                <label style={{
                                    color: "red",
                                    marginLeft: "3%",
                                    display: "flex"
                                }}>
                                     <span className="cstm_error">
                                    {ErrorResetPasswordInputes.newPassword}
                                    </span>
                                </label>

                                <MDBInput
                                    wrapperClass='mb-4 w-100'
                                    label='Confirm Password'
                                    id='confirmPassword'
                                    type='password' size="lg"
                                    name="confirmPassword"
                                    value={data.confirmPassword}
                                    onChange={handleChange} />
                                <label style={{
                                    color: "red",
                                    marginLeft: "3%",
                                    display: "flex"
                                }}>
                                     <span className="cstm_error">
                                        {ErrorResetPasswordInputes.confirmPassword}
                                        </span>
                                </label>
                                
                                <MDBBtn size='lg' type="submit" onClick={handleSubmit}>
                                   Reset Password
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

export default ResetPassword;