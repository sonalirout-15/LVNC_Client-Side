import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleLatestNewsStart } from "../../Redux/Actions/LatestNewsAction";

const LatestNewsData = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const latestNewsData = useSelector((state) => state?.latestnews?.singlelatestNewsData);

    useEffect(() => {
        dispatch(getSingleLatestNewsStart(id))
    },[])

    return (
        <div className="col-lg-5 stretch-card grid-margin">
        <div className="card">
          <div className="card-body">
              <div className="row">
              <div class="fs-13 mb-2">
                <span class="mr-2">Photo </span>{latestNewsData?.updatedAt}
            </div>
              <h4 className="mb-2 font-weight-600">
                   {latestNewsData?.title}
                </h4>
                <div className="col-sm-12 grid-margin">
                  <div className="position-relative">
                    <div className="rotate-img">
                      <img
                        src={latestNewsData?.image}
                        alt="thumb"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12  grid-margin">
                  <div className="fs-12 mb-2">
                    <span className="mr-2"></span>
                  </div>
                  <p className="mb-0">
                   {latestNewsData?.Description}
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default LatestNewsData;