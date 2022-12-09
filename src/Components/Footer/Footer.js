import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostStart } from "../../Redux/Actions/PostActions";

const Footer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPostStart())
      }, [])

    const postData = useSelector((state) => state?.post?.post?.rows)
    const [postdata, setPostData] = useState(postData)

  useEffect(() => {
    setPostData(postData)
  }, [postData])

    return (
        <>
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <img src="assets/images/logo.png" className="footer-logo" alt="" />
                                <h5 className="font-weight-normal mt-4 mb-5">
                                    Newspaper is your news, entertainment, music fashion website. We
                                    provide you with the latest breaking news and videos straight from
                                    the entertainment industry.
                                </h5>
                                <ul className="social-media mb-3">
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
                            <div className="col-sm-4">
                                <h3 className="font-weight-bold mb-3">RECENT POSTS</h3>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="footer-border-bottom pb-2">
                                        {(postData || []).map((item) => (
                                            <div className="row">
                                                <div className="col-3">
                                                    <img
                                                        src={item.image}
                                                        alt="thumb"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="col-9">
                                                    <h5 className="font-weight-600">
                                                       {item.title}
                                                    </h5>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <h3 className="font-weight-bold mb-3">CATEGORIES</h3>
                                <div className="footer-border-bottom pb-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0 font-weight-600">Magazine</h5>
                                        <div className="count">1</div>
                                    </div>
                                </div>
                                <div className="footer-border-bottom pb-2 pt-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0 font-weight-600">Business</h5>
                                        <div className="count">1</div>
                                    </div>
                                </div>
                                <div className="footer-border-bottom pb-2 pt-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0 font-weight-600">Sports</h5>
                                        <div className="count">1</div>
                                    </div>
                                </div>
                                <div className="footer-border-bottom pb-2 pt-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0 font-weight-600">Arts</h5>
                                        <div className="count">1</div>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="mb-0 font-weight-600">Politics</h5>
                                        <div className="count">1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="d-sm-flex justify-content-between align-items-center">
                                    <div className="fs-14 font-weight-600">
                                        Copyright © 2022 <a href="https://lokvishwasnews.com/" target="_blank" className="text-white"> Chandrakant Kshirsagar</a>. All rights reserved.
                                    </div>
                                    <div className="fs-14 font-weight-600">
                                        Made with ❤️ By <a href="https://www.koliinfotech.com/" target="_blank" className="text-white">KOLI Infotech</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;