import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCampaingStart } from "../../Redux/Actions/CampaignAction";

const Advertise = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCampaingStart())
  }, [])

  const campaingData = useSelector((state) => state?.campaign?.campaning?.CampaningData?.rows)
  console.log('CAMPAIGN-DATA~~~~~', campaingData)
  const [data, setData] = useState(campaingData)

  useEffect(() => {
    setData(campaingData)
  }, [campaingData])

  return (
    <>
      <div className="container-scroller">
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="container">
              <div className="col-sm-12">
                <div className="card" data-aos="fade-up">
                  <div className="card-body">
                    {(data || []).map((item) => (
                      <div className="row">
                        <div className="col-lg-8">
                          <div>
                            <h1 className="font-weight-600 mb-1">
                              {item.title}
                            </h1>
                            <p className="fs-13 text-muted mb-0">
                              <span className="mr-2">Photo </span>
                            </p>
                            <div className="rotate-img">
                              <img
                                src={item.image}
                                alt="banner"
                                className="img-fluid mt-4 mb-4"
                              />
                            </div>
                            <p className="mb-4 fs-15">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Advertise;