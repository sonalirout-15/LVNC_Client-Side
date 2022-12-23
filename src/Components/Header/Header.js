import React from "react";

const Header = () => {
    const current = new Date();
    const date = `${current.getDate()},${current.toLocaleString('default', { month: 'long' })} ${current.getMonth() + 1}, ${current.getFullYear()}`;



    return (
        <>
            <div className="container-scroller">
                <div className="main-panel">
                    <div className="flash-news-banner">
                        <div className="container">
                            <div className="d-lg-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="badge badge-dark mr-2">Flash News</span>
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