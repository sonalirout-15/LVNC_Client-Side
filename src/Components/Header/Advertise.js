import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadLatestNewsStart } from "../../Redux/Actions/LatestNewsAction";

const Advertise = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // useEffect(() => {
  //   dispatch(loadCampaingStart())
  // }, [])

  useEffect(() => {
    dispatch(loadLatestNewsStart())
  }, [])


  const latestNewsData = useSelector((state) => state?.latestnews?.latestNewsData?.rows)
  const [latestnewsdata, setLatestNewsData] = useState(latestNewsData)

  // const campaingData = useSelector((state) => state?.campaign?.campaning?.CampaningData?.rows)
  // console.log('CAMPAIGN-DATA~~~~~', campaingData)
  // const [data, setData] = useState(campaingData)

  // useEffect(() => {
  //   setData(campaingData)
  // }, [campaingData])

  useEffect(() => {
    setLatestNewsData(latestNewsData)
  }, [latestNewsData])

  return (
        <div className="content-wrapper">
          <div className="container">
            <div className="col-sm-12">
              <div className="card" data-aos="fade-up">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-8">
                      <div>
                        <h1 className="mb-4 text-primary font-weight-600">
                         Advertise
                        </h1>
                        <p className="mb-4 fs-15">
                        Lok Vishwas News is news network and garners millions of impressions on a daily basis. 
                        Our viewers are inquisitive, informed and active; we have the power to transform your business.
                        </p>
                      </div>
                      
                      <div>
                      <div className="col-sm-12">
                          <div className="border-bottom pb-4 pt-4">
                            <div className="row mb-10">
                              <div className="col-sm-8">
                                <h1 className="font-weight-600 mb-1">
                                  SCALE
                                </h1>
                                <h5>  Millions of viewers across TV and Digital</h5>
                              </div>
                              <div className="col-sm-4">
                                <div className="rotate-img">
                                  <img
                                    src="../assets/images/advertise/advertise-scale.png"
                                    alt="banner"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mb-10">
                              <div className="col-sm-8">
                                <h1 className="font-weight-600 mb-1">
                                INFLUENCE
                                </h1>
                                <h5>India’s only independent news network across all platforms</h5>
                              </div>
                              <div className="col-sm-4">
                                <div className="rotate-img">
                                  <img
                                    src="../assets/images/advertise/advertise-influence.png"
                                    alt="banner"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mb">
                              <div className="col-sm-8">
                                <h1 className="font-weight-600 mb-1">
                               ACTION
                                </h1>
                                <h5>Highest engagement score across Channel</h5>
                              </div>
                              <div className="col-sm-4">
                                <div className="rotate-img">
                                  <img
                                    src="../assets/images/advertise/advertise-actionimg.png"
                                    alt="banner"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <h2 className="mb-4 text-primary font-weight-600">
                        Latest news
                      </h2>
                      <div className="row">
                        {latestnewsdata && latestnewsdata.map((item) => {
                          return(
                        <div className="col-sm-12">
                          <div className="border-bottom pb-4 pt-4">
                            <div className="row">
                              <div className="col-sm-8" onClick= {() => history.push(`/latestNews/${item.id}`)}>
                                <h5 className="font-weight-600 mb-1">
                                {item.title}
                                </h5>
                                <p className="fs-13 text-muted mb-0">
                                  <span className="mr-2">Photo </span>{item.created_at}
                                </p>
                              </div>
                              <div className="col-sm-4">
                                <div className="rotate-img">
                                  <img
                                    src={item.image}
                                    alt="banner"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                          )
                        })}
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

export default Advertise;