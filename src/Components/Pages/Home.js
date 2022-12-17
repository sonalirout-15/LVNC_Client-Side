import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCategoryStart, loadCategoryStart } from '../../../src/Redux/Actions/CategoryAction';
import { loadLatestNewsStart } from "../../Redux/Actions/LatestNewsAction";
import { loadMattersStart } from "../../Redux/Actions/MattersAction";
import { loadPostStart } from "../../Redux/Actions/PostActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategoryStart())
  }, [])

  useEffect(() => {
    dispatch(loadMattersStart())
  }, [])

  useEffect(() => {
    dispatch(loadPostStart())
  }, [])

  useEffect(() => {
    dispatch(loadLatestNewsStart())
  }, [])

  const categories = useSelector((state) =>  state?.categoryData?.categories?.categoryData?.rows);
  const [data, setData] = useState(categories);

  const singleData = useSelector((state) => state?.categoryData?.categoriesData[0]?.Subcategories)
  console.log('Single-Category-Data>>>>>>', singleData)

  const mattersData = useSelector((state) => state?.matters?.matters?.mettersData?.rows)
  const [matterData, setMattersData] = useState(mattersData)

  const postData = useSelector((state) => state?.post?.post?.rows)
  const [postdata, setPostData] = useState(postData)

  const latestNewsData = useSelector((state) => state?.latestNews?.latestnewsData?.latestnewsData?.rows)
  const [latestnewsdata, setLatestNewsData] = useState(latestNewsData)


  useEffect(() => {
    setData(categories)
  }, [categories])

  const handleClickCategory = (item) => {
    dispatch(getSingleCategoryStart(item))
  }

  useEffect(() => {
    setMattersData(mattersData)
  }, [mattersData])

    useEffect(() => {
        setPostData(postData)
    }, [postData])

    useEffect(() => {
      setLatestNewsData(latestNewsData)
  }, [latestNewsData])

  return (

    <div className="container-scroller">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-xl-8 stretch-card grid-margin">
                <div className="position-relative">
                  <img
                    style={{ height: '93%', width: '100%', marginLeft: '6%' }}
                    src="assets/images/dashboard/banner.jpg"
                    alt="banner"
                    className="img-fluid"
                  />
                  <div className="banner-content">
                    <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                      global news
                    </div>
                    <h2 className="mb-0">GLOBAL PANDEMIC</h2>
                    <h3 className="mb-2">
                      Coronavirus Outbreak LIVE Updates: ICSE, CBSE Exams
                      Postponed, 168 Trains
                    </h3>
                    <div className="fs-12">
                      <span className="mr-2">Photo </span>10 Minutes ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 stretch-card grid-margin">
                <div className="card text-white" style={{ backgroundColor: 'black' }}>
                  <div className="card-body">
                    <h2>Latest news</h2>
                    {latestnewsdata && latestnewsdata.map((item) => (
                    <div
                      className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                    >
                      <div className="pr-3">
                        <h6>{item.title}</h6>
                        <div className="fs-10">
                          <span className="mr-2">Photo </span>10 Minutes ago
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
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-2 stretch-card grid-margin" style={{marginLeft :'3%'}}>
                <div className="card">
                  <div className="card-body">
                    <h3>Category</h3>
                    {data && data.map((item) => (
                    <ul className="vertical-menu">
                        {item.header === 0 ? (
                          <li onClick={() => handleClickCategory(item.id)}><a>{item.category_name}</a></li>
                        ): (null)} 
                    </ul>
                     ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-9 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    {(singleData || []).map((item) => (
                      <div className="row">
                        <div className="col-sm-4 grid-margin">
                          <div className="position-relative">
                            <div className="rotate-img">
                              <img
                                src={item.image}
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-8  grid-margin">
                          <h4 className="mb-2 font-weight-600">
                            {item.subcategory_name}
                          </h4>
                          <div className="fs-13 mb-2">
                            <span className="mr-2">Photo </span>10 Minutes ago
                          </div>
                          <p className="mb-0">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-sm-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="card-title">
                          Video
                        </div>
                        {latestnewsdata && latestnewsdata.map((item) => (
                        <div className="row">
                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                           
                              <div className="rotate-img">
                              <video 
                                    controls style={{ height: '100px' }}><source src={item.video} type="video/mp4" />
                              </video>
                              </div>
                            </div>
                          </div>
                        </div>
                        ))}
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div className="card-title">
                            Latest Video
                          </div>
                          <p className="mb-3">See all</p>
                        </div>
                        {postData && postData.map((item) => (
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                            <video 
                                controls style={{ height: '100px' }}><source src={item.video} type="video/mp4" />
                              </video>
                            </div>
                          </div>
                          <h4 className="font-weight-600 mb-0">
                            {item.title}
                          </h4>
                        </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">

                      <div className="col-xl-6">
                        <div className="card-title">
                          Matters
                        </div>
                        {(matterData || []).map((item) => (
                          <div className="row">
                            <div className="col-xl-6 col-lg-8 col-sm-6">
                              <div className="rotate-img">
                                <img
                                  src={item.image}
                                  style={{height: '20%', width:'50%'}}
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <h4 className="mt-2 text-primary mb-2">
                                {item.title}
                              </h4>
                              {/* <p className="fs-13 mb-1 text-muted">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p> */}
                              <p className="my-3 fs-15">
                                {item.Description}
                              </p>
                              <a href="#" className="font-weight-600 fs-16 text-dark"
                              >Read more</a>
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
        </div>
      </div>
    </div>
  )
}
export default Home;