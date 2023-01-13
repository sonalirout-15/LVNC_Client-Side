import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleMettersStart } from "../../Redux/Actions/MattersAction";


const Videos = () => {
    const dispatch =  useDispatch();
    const {id} = useParams();

    const mattersData = useSelector((state) => state?.matters?.metterData);
    console.log('MATTERS-DATA~~~~~~~~~~~>>>>', mattersData)

    useEffect(() => {
        dispatch(getSingleMettersStart(id))
    },[])


    return(
        <div className="col-lg-5 stretch-card grid-margin">
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
                    <video width='500' height='300'
                            controls>
                            <source src={mattersData?.video} type="video/MP4/MKV/AVI" 
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
                   {mattersData?.Description}
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
}


export default Videos;