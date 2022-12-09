import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {userLoginStart} from '../../../Redux/Actions/UserAction';

const Login = () => {
    const dispatch = useDispatch();
    const [emailError, setEmailErorr] = useState()
    const [passwordError, setPasswordError] = useState();
    const user = useSelector((state) => state?.user?.userLogin?.status);
    console.log('USER¬¬¬¬¬¬¬¬¬', user)
    const history = useHistory();

    const [data, setData] = useState({
        email: '',
        password: ''
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
        email: data.email,
        password: data.password
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.email === '') {
            setEmailErorr("Email is Required!")
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
        dispatch(userLoginStart(data))
    };

    if (user === 200) {
        history.push('/')
    }

    return (
        <>
            <div id="app">
                <section className="section">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                                <div className="login-brand">
                                    {/* <img
                                        style={{ backgroundColor:'#032a63',}}
                                        src=""
                                        alt="logo"
                                        width="300"
                                        className="shadow-light rounded-circle"
                                    /> */}
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
                                                color : "red",
                                                marginLeft:"10%",
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
                                                color : "red",
                                                marginLeft:"5%",
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
            </div>
        </>
    )
}

export default Login;