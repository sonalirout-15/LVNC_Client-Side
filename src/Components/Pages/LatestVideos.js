import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleLatestNewsStart } from "../../Redux/Actions/LatestNewsAction";

const LatestVideo = () => {
    const dispatch = useDispatch();
    const {id} = useParams()

    const latestNewsData = useSelector((state) => state?.latestnews?.singlelatestNewsData);


    useEffect(() => {
        dispatch(getSingleLatestNewsStart(id))
    }, [])


    return (
        <div className="col-lg-9 stretch-card grid-margin" style={{margin: '110px'}}>
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
                    <video width='500' height='300'
                            controls>
                            <source src={latestNewsData?.video} type="video/MP4/MKV/AVI" 
                            className='img-fluid'/>
                    </video>
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

export default LatestVideo;