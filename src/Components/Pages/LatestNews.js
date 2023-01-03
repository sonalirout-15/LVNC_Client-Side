import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleLatestNewsStart } from "../../Redux/Actions/LatestNewsAction";


const LatestNews = () => {
  const dispatch = useDispatch()
  const {id} = useParams();
  console.log('ID-------', id)

  const singleLatestNewsData = useSelector((state) => state?.latestnews?.singlelatestNewsData)
  console.log('SINGLE-LATESTNEWS-DATA~~~~~~~~~~~~~~~~~', singleLatestNewsData)

  useEffect(() => {
    dispatch(getSingleLatestNewsStart(id))
  }, [id])
  

    return(
      <div className="container-scroller">
        <div className="main-panel">
        <div className="container-scroller">
                <div className="main-panel">
                    <div className="flash-news-banner">
                        <div className="container">
                            <div className="d-lg-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <div className="content-wrapper">
            <div className="container">
              <div className="col-sm-8">
                <div className="card" data-aos="fade-up">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-8">
                        <h1 className="font-weight-100 mb-4">
                          Latest News
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                          <div className="row">
                            <div className="col-sm-4 grid-margin">
                              <div className="rotate-img">
                                <img
                                  src={singleLatestNewsData?.image}
                                  alt="banner"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="col-sm-8 grid-margin">
                              <h2 className="font-weight-600 mb-2">
                                {singleLatestNewsData?.title}
                              </h2>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>{singleLatestNewsData?.created_at}
                              </p>
                              <p className="fs-15">
                                {singleLatestNewsData?.Description}
                              </p>
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
      </div>
    )
}


export default LatestNews;