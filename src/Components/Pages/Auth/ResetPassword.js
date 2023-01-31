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
import { userChangePasswordStart } from '../../../Redux/Actions/UserAction';

const ResetPassword = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState();
    const [data, setData] = useState({
        newPassword: "",
        confirmPassword: ""
   });

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
  if (data.newPassword !== ''  && data.confirmPassword !== '') {
      var resetPasswordData = {
          newPassword: data.newPassword,
          confirmPassword: data.confirmPassword,
      }
      dispatch(userChangePasswordStart(resetPasswordData))
  }
};


    return (
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Change Password</h2>
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
                                    {submit && !data.newPassword && <p>New Password required.</p>}
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
                                    {submit && !data.confirmPassword && <p>Confirm Password required.</p>}
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