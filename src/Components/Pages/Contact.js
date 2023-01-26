import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { contactUsStart } from "../../Redux/Actions/ContactAction";

const Contact = () => {
    const dispatch = useDispatch();
    const [submit, setSubmit] = useState();
    const contact = useSelector((state) => state?.contactUs);
    const history = useHistory();
    const [data, setData] = useState({
        name: '',
        email: '',
        title: ''
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

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true);
        setData(data)
        if (data.name !== '' && data.email !== '' && data.title !== '') {
            var contactusData = {
                username: data.name,
                email: data.email,
                title: data.title
            }
            dispatch(contactUsStart(contactusData))
        }
    };

    return (
        <div className="container-scroller">
            <div className="content-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card" data-aos="fade-up">
                                <div className="card-body">
                                    <div className="aboutus-wrapper">
                                        <h1 className="mt-5 text-center mb-5">
                                            Contact Us
                                        </h1>
                                        <div className="row">
                                            <div className="col-lg-12 mb-5 mb-sm-2">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <textarea
                                                                    className="form-control textarea"
                                                                    placeholder="Comment *"
                                                                    id="title"
                                                                    name="title"
                                                                    value={data.title}
                                                                    onChange={handleChange}
                                                                ></textarea>
                                                                <label style={{
                                                                    color: "red",
                                                                    marginLeft: '40%',
                                                                    display: "flex"
                                                                }}>
                                                                    {submit && !data.title && <small className="p-invalid">Title required.</small>}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div class="form-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="name"
                                                                    aria-describedby="name"
                                                                    placeholder="Name *"
                                                                    name='name'
                                                                    value={data.name}
                                                                    onChange={handleChange}
                                                                />
                                                                <label style={{
                                                                    color: "red",
                                                                    marginLeft: '40%',
                                                                    display: "flex"
                                                                }}>
                                                                    {submit && !data.name && <small className="p-invalid">Username required.</small>}
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    id="email"
                                                                    aria-describedby="email"
                                                                    placeholder="Email *"
                                                                    name="email"
                                                                    value={data.email}
                                                                    onChange={handleChange}
                                                                />
                                                                <label style={{
                                                                    color: "red",
                                                                    marginLeft: '40%',
                                                                    display: "flex"
                                                                }}>
                                                                    {submit && !data.email && <small className="p-invalid">Email required.</small> || submit && !validateEmail(data.email) && <small className="p-invalid">Please Enter Valid Email!</small>}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="form-group">
                                                                <button
                                                                    href=""
                                                                    className="btn btn-lg btn-dark font-weight-bold mt-3"
                                                                    type="submit">Send Message</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;