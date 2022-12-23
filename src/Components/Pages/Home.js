import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCategoryStart, loadCategoryStart } from '../../../src/Redux/Actions/CategoryAction';
import { getSingleSubcategoryStart } from '../../../src/Redux/Actions/SubcategoryAction'
import { loadLatestNewsStart } from "../../Redux/Actions/LatestNewsAction";
import { loadMattersStart } from "../../Redux/Actions/MattersAction";
import { loadPostStart } from "../../Redux/Actions/PostActions";

const Home = () => {
  const dispatch = useDispatch();
  const current = new Date();
  const date = `${current.getDate()},${current.toLocaleString('default', { month: 'long' })} ${current.getMonth() + 1}, ${current.getFullYear()}`;

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

  const categories = useSelector((state) => state?.categoryData?.categories?.categoryData?.rows);
  const [data, setData] = useState(categories);

  const singleData = useSelector((state) => state?.categoryData?.categoryData[0]?.Subcategories)

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
    item?.map((cat_id) => {
      dispatch(getSingleCategoryStart(cat_id?.category_ref_id))
    })
  }

  const subCatData = useSelector((state) => state?.subcategory?.cateData?.categoryData);
  // console.log('SUBCAT-DATA~~~~~~~~~~~~~', subCatData)

  const subCategoryData = useSelector((state) => state?.subcategory?.cateData?.categoryData);
  console.log('SUBCATERGORY-DATA~~~~~~~~~~~', subCategoryData)

  const handleClickSubcategory = (item) => {
    dispatch(getSingleSubcategoryStart(item))
  }

  const handleClickSubcat = (data) => {
    dispatch(getSingleSubcategoryStart(data))
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
        <div className="container-scroller">
          <div className="main-panel">
            <div className="flash-news-banner">
              <div className="container">
                <div className="d-lg-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                  <span className="badge badge-dark mr-2">Subcategories</span>
                    {singleData && singleData.map((item) => (
                      <span onClick={() => handleClickSubcategory(item.id)} className="badge badge mr-2" style={{ color: 'black', height: '10%' }}>{item.subcategory_name}</span>
                    ))}
                  </div>
                  <div className="d-flex">
                    <span className="mr-4 text-danger">{date}</span>
                    <span className="text-danger">30°C, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-lg-2 stretch-card grid-margin" style={{ marginLeft: '3%' }}>
                <div className="card">
                  <div className="card-body">
                    <h3>Category</h3>
                    {data && data.map((item) => (
                      <ul className="vertical-menu">
                        {item.header === 0 ? (
                          <li onClick={() => handleClickCategory(item?.Subcategories)}><a>{item.category_name}</a></li>
                        ) : (null)}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-9 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    {subCatData && subCatData.map((item) => (
                      <div className="row">

                        <div className="col-sm-4 grid-margin">
                          <div className="position-relative">
                            <div className="rotate-img">
                              <img
                                src={item.image}
                                onClick={() => handleClickSubcat(item.id)}
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-8  grid-margin">
                          <h2 className="mb-2 font-weight-600">
                            {item.title}
                          </h2>
                          <div className="fs-13 mb-2">
                            <span className="mr-2">{item.created_at} </span>
                          </div>
                          <p className="mb-0">
                            {item.Description}
                          </p>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
              <div className="col-lg-14 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h1>Latest News</h1>
                    {latestNewsData && latestNewsData.map((item) => (
                      <div className="row">

                        <div className="col-sm-4 grid-margin">
                          <div className="position-relative">
                            <div className="rotate-img">
                              <img
                                src={item.image}
                                onClick={() => handleClickSubcat(item.id)}
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-8  grid-margin">
                          <h2 className="mb-2 font-weight-600">
                            {item.title}
                          </h2>
                          <div className="fs-13 mb-2">
                            <span className="mr-2">{item.created_at} </span>
                          </div>
                          <p className="mb-0">
                            {item.Description}
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
                        <div className="row">
                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_7.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center">
                                  <span
                                    className="badge badge-danger font-weight-bold">Lifestyle</span>
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_8.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center">
                                  <span
                                    className="badge badge-danger font-weight-bold">National News</span>
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_9.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center">
                                  <span
                                    className="badge badge-danger font-weight-bold">Lifestyle</span>
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 grid-margin">
                            <div className="position-relative">
                              <div className="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_10.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="badge-positioned w-90">
                                <div
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    className="badge badge-danger font-weight-bold">National News</span>
                                  <div className="video-icon">
                                    <i className="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="d-flex justify-content-between align-items-center">
                          <div className="card-title">
                            Latest Video
                          </div>
                          <p className="mb-3">See all</p>
                        </div>
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pb-2">
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_11.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            Apple Introduces Apple Watch
                          </h3>
                        </div>
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_12.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            SEO Strategy & Google Search
                          </h3>
                        </div>
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2">
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_13.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            Cycling benefit & disadvantag
                          </h3>
                        </div>
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_14.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600">
                            The Major Health Benefits of
                          </h3>
                        </div>
                        <div
                          className="d-flex justify-content-between align-items-center pt-3">
                          <div className="div-w-80 mr-3">
                            <div className="rotate-img">
                              <img
                                src="assets/images/dashboard/home_15.jpg"
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 className="font-weight-600 mb-0">
                            Powerful Moments of Peace
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-14 stretch-card grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h1>Matters</h1>
                    {matterData && matterData.map((item) => (
                      <div className="row">
                        <div className="col-sm-4 grid-margin">
                          <div className="position-relative">
                            <div className="rotate-img">
                              <img
                                src={item.image}
                                onClick={() => handleClickSubcat(item.id)}
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-8  grid-margin">
                          <h2 className="mb-2 font-weight-600">
                            {item.title}
                          </h2>
                          <div className="fs-13 mb-2">
                            <span className="mr-2">{item.created_at} </span>
                          </div>
                          <p className="mb-0">
                            {item.Description}
                          </p>
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
  )
}
export default Home;