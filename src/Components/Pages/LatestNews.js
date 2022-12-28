import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleLatestNewsStart } from "../../Redux/Actions/LatestNewsAction";


const LatestNews = () => {
  const dispatch = useDispatch()
  const {id} = useParams();
  console.log('ID-------', id)

  const singleLatestNewsData = useSelector((state) => state?.latestnews?.latestNewsData?.rows)
  console.log('SINGLE-LATESTNEWS-DATA~~~~~~~~~~~~~~~~~', singleLatestNewsData)

  useEffect(() => {
    dispatch(getSingleLatestNewsStart(id))
  }, [id])
  

    return(
        <div className="col-lg-14 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h1>Latest News</h1>
                    {/* {latestNewsData && latestNewsData.map((item) => ( */}
                      <div className="row">

                        <div className="col-sm-4 grid-margin">
                          <div className="position-relative">
                            <div className="rotate-img">
                              <img
                                src={singleLatestNewsData[0]?.image}
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-8  grid-margin">
                          <h2 className="mb-2 font-weight-600">
                           {singleLatestNewsData[0]?.title}
                          </h2>
                          <div className="fs-13 mb-2">
                            <span className="mr-2"></span>
                          </div>
                          <p className="mb-0">
                            {singleLatestNewsData[0]?.Description}
                          </p>
                        </div>
                      </div>
                    {/* ))} */}

                  </div>
                </div>
              </div>
    )
}


export default LatestNews;