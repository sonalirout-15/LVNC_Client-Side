import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link  } from "react-router-dom";
import { loadCategoryStart } from "../../Redux/Actions/CategoryAction";

const Navbar = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCategoryStart())
    }, [])

    const categories = useSelector((state) => state?.categoryData?.categories?.categoryData?.rows)
    const [data, setData] = useState(categories);

    useEffect(() => {
        setData(categories)
    }, [categories])

    return (
        <>
            <header id="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="navbar-top">
                            <div className="d-flex justify-content-between align-items-center">
                                <ul className="navbar-top-left-menu">
                                <li className="nav-item">
                                        <Link to="/event" className="nav-link">Videos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/advertise" className="nav-link">Advertise</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/event" className="nav-link">Events</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link to="/" className="nav-link">Write for Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">In the Press</Link>
                                    </li> */}
                                </ul>
                                <ul className="navbar-top-right-menu">
                                    <li className="nav-item">
                                        <Link to='/search' className="nav-link"><i className="mdi mdi-magnify"></i></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/signup" className="nav-link">Signup</Link>
                                    </li>
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
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div
                                        className="navbar-collapse justify-content-center collapse"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                                            <li>
                                                <button className="navbar-close">
                                                    <i className="mdi mdi-close"></i>
                                                </button>
                                            </li>
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                            {data && data.map((item) => (
                                                // console.log('ITEM======?', item?.Subcategories[0]?.category_ref_id)
                                                <li className="nav-item">
                                                    {item.header === 1 && 
                                                     <Link 
                                                        className="nav-link"
                                                        to={`/${(item.category_name).toLowerCase()}/${item.id}`}>{item.category_name}
                                                    </Link>}
                                                </li>
                                            ))}
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/contact">CONTACT</Link>
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
        </>
    )
}

export default Navbar;