import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getSingleCategoryStart, loadCategoryStart } from '../../../src/Redux/Actions/CategoryAction';
import { getSingleSubcategoryStart, loadSubcategoryStart } from '../../../src/Redux/Actions/SubcategoryAction'
import { loadBannerImageStart } from "../../Redux/Actions/BannerImageAction";
import { loadChildSubcategoryStart } from "../../Redux/Actions/ChildSubcategoryAction";
import { loadLatestNewsStart } from "../../Redux/Actions/LatestNewsAction";
import { loadMattersStart } from "../../Redux/Actions/MattersAction";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    dispatch(loadBannerImageStart())
  }, [])

  useEffect(() => {
    dispatch(loadCategoryStart())
  }, [])

  useEffect(() => {
    dispatch(loadSubcategoryStart())
  }, [])

  useEffect(() => {
    dispatch(loadChildSubcategoryStart())
  },[])


  useEffect(() => {
    dispatch(loadMattersStart())
  }, [])


  useEffect(() => {
    dispatch(loadLatestNewsStart())
  }, [])

  const bannerImageData = useSelector((state) => state?.bannerImage?.bannerImageData?.BannerData)
  const [bannerData, setBannnerData] = useState(bannerImageData)

  const categories = useSelector((state) => state?.categoryData?.categories?.categoryData?.rows);
  const [data, setData] = useState(categories);

  const subcategoryData = useSelector((state) => state?.subcategory?.subcategories?.rows);
  const [subcategorydatas, setSubcategoryData] = useState(subcategoryData)

  const childSubcategoryData = useSelector((state) => state?.childSubcategory?.childSubcatgeory?.rows[0]?.Subcategories);
  console.log('CHILD-SUBCATEGORY!!!!!~~~~~~~~>>>>>', childSubcategoryData);
  const[childSubcategory , setChildSubcategory] = useState(childSubcategoryData)

  const singleData = useSelector((state) => state?.categoryData?.categoryData[0]?.Subcategories)

  const mattersData = useSelector((state) => state?.matters?.matters?.mettersData?.rows)
  const [matterData, setMattersData] = useState(mattersData)

  const latestNewsData = useSelector((state) => state?.latestnews?.latestNewsData?.rows)
  const [latestnewsdata, setLatestNewsData] = useState(latestNewsData)

  useEffect(() => {
    setBannnerData(bannerImageData)
  }, [categories])

  useEffect(() => {
    setData(categories)
  }, [categories])

  useEffect(() => {
    setSubcategoryData(subcategoryData)
  }, [subcategoryData])

  useEffect(() => {
    setChildSubcategory(childSubcategoryData)
  },[childSubcategoryData])

  const handleClickCategory = (item) => {
    item?.map((cat_id) => {
      dispatch(getSingleCategoryStart(cat_id?.category_ref_id))
    })
  }

  const subCatData = useSelector((state) => state?.subcategory?.cateData?.categoryData);

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
    setLatestNewsData(latestNewsData)
  }, [latestNewsData])

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
              {bannerData && bannerData.map((item) => (
              <div className="col-xl-8 stretch-card grid-margin">
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
                    {/* <div className="fs-12">
                      <span className="mr-2">Photo </span>10 Minutes ago
                    </div> */}
                  </div>
                </div>
              </div>
              ) )}
              <div className="col-xl-3 stretch-card grid-margin">
                <div className="card bg-dark text-white">
                  <div className="card-body" style={{ backgroundColor: 'black'}}>
                    <h2>Latest news</h2>
                    {latestnewsdata && latestnewsdata.map((item) => (
                      <div
                        className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                        onClick={() => history.push(`latestNews/${item.id}`)}>

                        <div className="pr-3">
                          <h5>{item.title}</h5>
                          <div className="fs-12">
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
              <div className="col-lg-2 stretch-card grid-margin" style={{ marginTop: '2%' }}>
                <div className="card">
                  <div className="card-body">
                    <h2>Category</h2>
                    {data && data.map((item) => (
                      <ul className="vertical-menu">
                        {item.header === 0 ? (
                          // <li onClick={() => handleClickCategory(item?.Subcategories)}><a>{item.category_name}</a></li>
                          <li onClick={() => history.push(`/${item.category_name}/${item.id}`)}><a>{item.category_name}</a></li>
                        ) : (null)}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 stretch-card grid-margin" style={{ marginTop: '2%' }}>
                <div className="card">
                  <div className="card-body">
                    {matterData && matterData.map((item) => (
                      <div className="row">
                        <div className="col-sm-5 grid-margin">
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
                          <h4 className="mb-2 font-weight-600">
                            {item.title}
                          </h4>
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
            {/* <div className="subcategory-head">
               <h4>SUBCATEGORIES</h4>
            </div> */}
              {/* <div className="row row-cols-4 g-5">
                <div className="col">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="Hollywood Sign on The Hill" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top" alt="Palm Springs Road" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top" alt="Los Angeles Skyscrapers" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top" alt="Los Angeles Skyscrapers" />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div class="row" data-aos="fade-up" >
              <div className="col-sm-10 grid-margin">
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
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="d-flex justify-content-between align-items-center">
                          <div className="card-title">
                            Latest Video
                          </div>
                          <p className="mb-3">See all</p>
                        </div>
                        {latestNewsData && latestNewsData.map((item) => (
                        <div
                          className="d-flex justify-content-between align-items-center border-bottom pb-2"
                          onClick={() => history.push('/videos')}>
                          <div className="div-w-70 mr-3">
                            <div className="rotate-img">
                              {/* <img
                                src={item.image}
                                alt="thumb"
                                className="img-fluid"
                              /> */}
                              <video
                                  className="img-fluid" 
                                  controls style={{ height: '50px' }}>
                                  <source src={item.video} type="video/MP4" />
                              </video>
                            </div>
                          </div>
                          <h5 className="font-weight-600 mb-0">
                           {item.title}
                          </h5>
                        </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-sm-10">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      {childSubcategory && childSubcategory.map((item) => (
                      <div className="col-xl-6">
                        <div className="card-title">
                          
                        </div>
                        <div className="row">
                          <div className="col-xl-6 col-lg-8 col-sm-6">
                            <div className="rotate-img">
                              <img
                                src={item.image}
                                alt="thumb"
                                className="img-fluid"
                              />
                            </div>
                            <h6 className="mt-3 text-primary mb-2">
                              {item.title}
                            </h6>
                            <p className="fs-13 mb-1 text-muted">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </p>
                          </div>
                         
                        </div>
                      </div>
                      ))}
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
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="border-bottom pb-3 pt-3">
                                  <div className="row">
                                    <div className="col-sm-5 pr-2">
                                      <div className="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_20.jpg"
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
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="border-bottom pb-3 pt-3">
                                  <div className="row">
                                    <div className="col-sm-5 pr-2">
                                      <div className="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_21.jpg"
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
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="pt-3">
                                  <div className="row">
                                    <div className="col-sm-5 pr-2">
                                      <div className="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_22.jpg"
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