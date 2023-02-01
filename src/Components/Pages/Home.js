import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory } from "react-router-dom";
import {loadCategoryStart } from '../../Redux/Actions/CategoryAction';
import { loadBannerImageStart } from "../../Redux/Actions/BannerImageAction";
import { loadLatestNewsStart } from "../../Redux/Actions/LatestNewsAction";
import { loadMattersStart } from "../../Redux/Actions/MattersAction";
import { loadCampaingStart } from "../../Redux/Actions/CampaignAction";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showFullDescription, setFullDescription] = useState(false);

  useEffect(() => {
    dispatch(loadBannerImageStart())
  }, [])

  useEffect(() => {
    dispatch(loadCategoryStart())
  }, [])


  useEffect(() => {
    dispatch(loadMattersStart())
  }, [])


  useEffect(() => {
    dispatch(loadLatestNewsStart())
  }, [])

  useEffect(() => {
    dispatch(loadCampaingStart())
  }, [])

  // const description = showFullDescription
  //   ? items.description
  //   : items.description.slice(0, 20);

    const showDescription = (items) => {
    const description = showFullDescription
    ? items.description
    : items.description.slice(0, 20);
    }


  const bannerImageData = useSelector((state) => state?.bannerImage?.bannerImageData?.BannerData)
  const [bannerData, setBannnerData] = useState(bannerImageData)

  const categories = useSelector((state) => state?.categoryData?.categories?.categoryData?.rows);
  const [data, setData] = useState(categories);

  const mattersData = useSelector((state) => state?.matters?.matters?.mettersData?.rows)
  const [matterData, setMattersData] = useState(mattersData)

  const latestNewsData = useSelector((state) => state?.latestnews?.latestNewsData?.rows)
  const [latestnewsdata, setLatestNewsData] = useState(latestNewsData)

  const campaignsData = useSelector((state) => state?.campaign?.campaning?.CampaningData?.rows);
  const [campaigndata, setCampaignData] = useState(campaignsData);
  const firstData = []
  campaigndata && campaigndata.map((item) => {
    firstData.push({
      title : item.title[0]
    })
    // console.log('ITEMS~~~~~~~~~~~>>>', item)
  })
  // const length = campaignsData.length;
  // console.log('Length~~~~~~~~~~>>>', length);


  useEffect(() => {
    setBannnerData(bannerImageData)
  }, [bannerImageData])


  useEffect(() => {
    setData(categories)
  }, [categories])


  // const handleClickCategory = (item) => {
  //   item?.map((cat_id) => {
  //     dispatch(getSingleCategoryStart(cat_id?.category_ref_id))
  //   })
  // }


  // const handleClickSubcategory = (item) => {
  //   dispatch(getSingleSubcategoryStart(item))
  // } 

  // const handleClickSubcat = (data) => {
  //   dispatch(getSingleSubcategoryStart(data))
  // }


  useEffect(() => {
    setMattersData(mattersData)
  }, [mattersData])


  useEffect(() => {
    setLatestNewsData(latestNewsData)
  }, [latestNewsData])

  useEffect(() => {
    setCampaignData(campaignsData)
  }, [campaignsData])

  return (
    <div className="container-scroller">
      <div className="main-panel">
        <div className="container-scroller">
          <div className="main-panel">
          </div>
        </div>
        <div className="content-wrapper">
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-xl-8 stretch-card grid-margin">
              {bannerData && bannerData.map((item) => (
                <div class="position-relative">
                  <img
                    src={item.image}
                    style={{  maxWidth: '100%'}}
                    alt="banner"
                    className="img-fluid"
                  />
                  <div className="banner-content">
                    {/* <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                      global news
                    </div> */}
                    {/* <h2 className="mb-0">GLOBAL PANDEMIC</h2> */}
                    <h4 className="mb-2">
                     {item.imageName}
                    </h4>
                    <div className="fs-12">
                      <span className="mr-2">Photo </span>{item.updated_at}
                    </div>
                  </div>
                </div>
              ) )}
              </div>
              <div className="col-xl-3 stretch-card grid-margin">
                <div className="card bg-black text-white">
                  <div className="card-body" >
                    <h3>Latest news</h3>
                    {latestnewsdata && latestnewsdata.map((item) => (
                      <div
                      className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                      onClick= {() => history.push(`/latestNews/${item.id}`)}>
                        <div className="pr-3">
                          <h5>{item.title}</h5>
                          <div className="fs-12">
                            <span className="mr-2">Photo </span>{item.updated_at}
                          </div>
                        </div>
                        <div className="rotate-img">
                          <img
                            src={item.image}
                            alt="thumb"
                            className="img-fluid img-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h2>Category</h2>
                    {data && data.map((item) => (
                      <ul className="vertical-menu">
                        {item.header === 0 ? (
                          // <li onClick={() => handleClickCategory(item?.Subcategories)}><a>{item.category_name}</a></li>
                          <li onClick={() => history.push(`/./${(item.category_name).toLowerCase()}`)}><a>{item.category_name}</a></li>
                        ) : (null)}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-9 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    {matterData && matterData.map((item) => {
                      return (
                    <div className="row" onClick={() => history.push(`/matters/${item.id}`)}>
                      <div className="col-sm-4 grid-margin">
                        <div className="position-relative">
                          <div className="rotate-img">
                            <img
                              src={item.image}
                              alt="thumb"
                              className="img-fluid"
                            />
                          </div>
                          <div className="badge-positioned">
                            <span className="badge badge-danger font-weight-bold">Flash news</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-8  grid-margin">
                        <h6 className="mb-2 font-weight-600">
                         {item.title}
                        </h6>
                        <div className="fs-13 mb-2">
                          <span className="mr-2">Photo </span>{item.updatedAt}
                        </div>
                        <p className="mb-0">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an
                        </p>
                      </div>
                    </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-sm-11 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="card-title">
                          Videos
                        </div>
                        {matterData && matterData.map((item) => {
                          return (
                        <div className="row" onClick={() => history.push(`videos/${item.id}`)}>
                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                              <video width='250' height='150'
                                  controls>
                                  <source src={item.video} type="video/MP4/MKV/AVI" 
                                  className='img-fluid'/>
                                  </video>
                              </div>
                              <div className="badge-positioned w-90">
                                {/* <div
                                  className="d-flex justify-content-between align-items-center">
                                  <span
                                    className="badge badge-danger font-weight-bold"></span>
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div> */}
                              </div>  
                            </div>
                          </div>
                        </div>
                          )
                        })}
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="d-flex justify-content-between align-items-center">
                          <div className="card-title">
                            Latest Video
                          </div>
                          <p className="mb-3">See all</p>
                        </div>
                        {latestnewsdata && latestnewsdata.map((item) => {
                          return (
                        <div 
                          className="d-flex justify-content-between align-items-center border-bottom pb-2"
                          onClick= {() => history.push(`/latestVideo/${item.id}`)}>
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                            <video width='300' height='50'
                                    controls>
                                    <source src={item.video} 
                                    type="video/MP4" 
                                    className='img-fluid'
                                    />
                            </video>
                            </div>
                          </div>
                          <h4 className="font-weight-500 mb-0">
                            {item.title}
                          </h4>
                        </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-sm-11">
                <div className="card">
                  <div className="card-body">
                    
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="card-title">
                          Sport light
                        </div>
                        <div className="row">
                        
                              <div className="col-xl-6 col-lg-8 col-sm-6">
                              <div className="rotate-img">
                                <img
                                  src=''
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <h2 className="mt-3 text-primary mb-2">
                                
                              </h2>
                              <p className="fs-13 mb-1 text-muted">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <p className="my-3 fs-15">
                             
                              </p>
                              <a onClick={showFullDescription} className="font-weight-600 fs-16 text-dark">{showFullDescription ? "Less" : "Read"}</a>
                            </div>
                            
                          <div className="col-xl-6 col-lg-4 col-sm-6">
                            <div className="border-bottom pb-3 mb-3">
                              <h3 className="font-weight-600 mb-0">
                                
                              </h3>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <p className="mb-0">
                               
                              </p>
                            </div>
                          </div>
                           
                           
                        </div>
                      </div>
                      
                      <div className="col-xl-6">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="card-title">
                              Sport light
                            </div>
                            <div className="border-bottom pb-3">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_17.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <p className="fs-16 font-weight-600 mb-0 mt-3">
                                Kaine: Trump Jr. may have
                              </p>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="card-title">
                              Celebrity news
                            </div>
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="border-bottom pb-3">
                                  <div className="row">
                                    <div className="col-sm-5 pr-2">
                                      <div className="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_19.jpg"
                                          alt="thumb"
                                          className="img-fluid w-100"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-sm-7 pl-2">
                                      <p className="fs-16 font-weight-600 mb-0">
                                        Online shopping ..
                                      </p>
                                      <p className="fs-13 text-muted mb-0">
                                        <span className="mr-2">Photo </span>10
                                        Minutes ago
                                      </p>
                                      <p className="mb-0 fs-13">
                                        Lorem Ipsum has been
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;