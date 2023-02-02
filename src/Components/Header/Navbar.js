import React, { useEffect, useState } from "react";
import {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory  } from "react-router-dom";
import {  loadCategoryStart } from "../../Redux/Actions/CategoryAction";

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        localStorage.removeItem("USER");
        history.push("/");
        window.location.reload()
      };

    useEffect(() => {
        dispatch(loadCategoryStart())
    }, [])

    const categories = useSelector((state) => state?.categoryData?.categories?.categoryData?.rows)
    const [data, setData] = useState(categories);

    useEffect(() => {
        setData(categories)
    }, [categories])
    
    
    return (
            <header id="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="navbar-top">
                            <div className="d-flex justify-content-between align-items-center">
                                <ul className="navbar-top-left-menu">
                                <li className="nav-item">
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/advertise" className="nav-link">Advertise</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link">About</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link to="/event" className="nav-link">Events</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link to="/write-for-us" className="nav-link">Write for Us</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link to="/in-the-press" className="nav-link">In the Press</Link>
                                    </li> */}
                                </ul>
                                <ul className="navbar-top-right-menu">
                                    <li className="nav-item">
                                        <Link to='/search' className="nav-link"><i className="mdi mdi-magnify"></i></Link>
                                    </li>
                                    {
                                        localStorage.getItem("USER") ? (
                                            <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                              <img
                                                style={{ height: '30px', width: '30px' }}
                                                alt="image"
                                                src="assets/images/avtar/userImg.png"
                                                className="rounded-circle mr-1"
                                              />
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu >
                                              <MDBDropdownItem onClick={() => history.push("/change-password")}>Change Password</MDBDropdownItem>
                                              <MDBDropdownItem onClick={() => history.push("/reset-password")}>Reset Password</MDBDropdownItem>
                                              <MDBDropdownItem onClick={handleClick}>Logout</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                          </MDBDropdown>

                                        ) : (
                                            <>             
                                            <li className="nav-item">
                                                <Link to="/login" className="nav-link">Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/signup" className="nav-link">Signup</Link>
                                            </li>
                                        </>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <a className="navbar-brand" href="/"
                                    ><img src="assets/images/logo.png" alt=""/></a>
                                </div>
                                <div>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div
                                        className="navbar-collapse justify-content-center collapse"
                                        id="navbarSupportedContent">
                                        <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                                            <li>
                                                <button className="navbar-close">
                                                    <i className="mdi mdi-close"></i>
                                                </button>
                                            </li>
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                            {data && data.map((item) => {
                                                return(
                                                <li className="nav-item">

                                                    {item.header === 1 ? (
                                                          <Link 
                                                          className="nav-link"
                                                          to={`/./${(item.category_name).toLowerCase()}`}>{item.category_name}
                                                          </Link>
                                                        ) : (null)
                                                    }
                                                </li>
                                                )
                                            })}
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="social-media">
                                    <li>
                                        <a href="#">
                                            <i className="mdi mdi-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="mdi mdi-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="mdi mdi-twitter"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
    )
}

export default Navbar;