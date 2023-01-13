import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBannerImageStart } from "../../Redux/Actions/BannerImageAction";

const Header = () => {
    const current = new Date();
    const date = `${current.getDate()},${current.toLocaleString('default', { month: 'long' })} ${current.getMonth() + 1}, ${current.getFullYear()}`;
    const dispatch = useDispatch();

    const data = useSelector((state) => state?.bannerImage?.bannerImageData?.BannerData);

    useEffect(() => {
        dispatch(loadBannerImageStart())
    },[])

    return (
        <>
            <div className="container-scroller">
                <div className="main-panel">
                    <div className="flash-news-banner">
                        <div className="container">
                            <div className="d-lg-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="badge badge-dark mr-2" style={{ backgroundColor: 'black' }}>Breaking News</span>
                                    {data && data.map((item) => (
                                        <div>{item.imageName}</div>
                                    ))}
                                </div>
                                <div className="d-flex">
                                    <span className="mr-4 text-danger">{date}</span>
                                    <span className="text-danger">30°C, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;