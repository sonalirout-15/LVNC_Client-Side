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
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { userChangePasswordStart } from '../../../Redux/Actions/UserAction';

const ChangePassword = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState();
    const changePassData = useSelector((state) => state?.user?.userChangePassword);
    const [data, setData] = useState({
        currentPassword: "",
        newPassword: ""
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
  if (data.currentPassword !== ''  && data.newPassword !== '') {
      var changePasswordData = {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword
      }
      dispatch(userChangePasswordStart(changePasswordData))
  }
};

if(changePassData?.message === "Password change succesfully"){
    history.push('/')
}

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
                                    label='Current Password'
                                    id='currentPassword'
                                    type='password' size="lg"
                                    name="currentPassword"
                                    value={data.currentPassword}
                                    onChange={handleChange} />
                                <label style={{
                                    color: "red",
                                    marginLeft: "3%",
                                    display: "flex"
                                }}>
                                    {submit && !data.currentPassword && <p>Current Password required.</p>}
                                </label>
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
                                
                                <MDBBtn size='lg' type="submit" onClick={handleSubmit}>
                                   Change Password
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

export default ChangePassword;