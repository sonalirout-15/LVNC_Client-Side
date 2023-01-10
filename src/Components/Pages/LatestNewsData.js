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
        <div className="col-lg-12 stretch-card grid-margin" >
        <div className="card">
          <div className="card-body">
              <div className="row">
              <h4 className="mb-2 font-weight-600">
                   {latestNewsData?.title}
                  </h4>
                <div className="col-sm-7 grid-margin">
                  <div className="position-relative">
                    <div className="rotate-img">
                      <img
                        style={{'height' : '200px', width: '500px', alignItems:'center'}}
                        src={latestNewsData?.image}
                        alt="thumb"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-8  grid-margin">
                  <div className="fs-13 mb-2">
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