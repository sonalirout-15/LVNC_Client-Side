import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleMettersStart } from "../../Redux/Actions/MattersAction";

const MattersData = () => {
    const dispatch =  useDispatch();
    const {id} = useParams();

    const mattersData = useSelector((state) => state?.matters?.metterData);

    useEffect(() => {
        dispatch(getSingleMettersStart(id))
    },[])

    return (
        <div className="col-lg-10 stretch-card grid-margin" style={{margin: '110px'}}>
        <div className="card">
          <div className="card-body">
              <div className="row">
              <div class="fs-13 mb-2">
                <span class="mr-2">Photo </span>{mattersData?.updatedAt}
            </div>
              <h4 className="mb-2 font-weight-600">
                   {mattersData?.title}
                </h4>
                <div className="col-sm-12 grid-margin">
                  <div className="position-relative">
                    <div className="rotate-img">
                      <img
                        src={mattersData?.image}
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
                   {mattersData?.Description}
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default MattersData;