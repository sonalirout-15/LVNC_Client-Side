import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory } from "react-router-dom";
import {loadCategoryStart } from '../../../src/Redux/Actions/CategoryAction';
import { getSingleSubcategoryStart, loadSubcategoryStart } from '../../../src/Redux/Actions/SubcategoryAction'
import { loadBannerImageStart } from "../../Redux/Actions/BannerImageAction";
import { loadChildSubcategoryStart } from "../../Redux/Actions/ChildSubcategoryAction";
import { loadLatestNewsStart } from "../../Redux/Actions/LatestNewsAction";
import { loadMattersStart } from "../../Redux/Actions/MattersAction";

// const ReadMore = ({ children }) => {
//   const text = children;
//   const [isReadMore, setIsReadMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };
//   return (
//     <p className="text">
//       {isReadMore ? text.slice(0, 150) : text}
//       <span onClick={toggleReadMore} className="read-or-hide">
//         {isReadMore ? "...read more" : " show less"}
//       </span>
//     </p>
//   );
// };


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
  },[])

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

  const categoriesData = useSelector((state) => state?.categoryData?.categories?.categoryData?.rows[0]);
  // console.log('CATEGORIES-DATA~~~~~~~>>>>', categoriesData)


  const singleCategoryData = useSelector((state) => state?.categoryData?.categories?.categoryData?.rows[0]?.Subcategories[0]?.Childcategories);
  console.log('SINGLE-CATEGORY-DATA~~~~~~~~~~~~~>>>>', singleCategoryData)
  const [datas, setDatas] = useState(singleCategoryData);

  const subcatgeories = useSelector((state) => state?.subcategory?.subcategories?.rows);
  // console.log('SUBCATEGORIES~~~~~~~~~~~>>>>>', subcatgeories);
  const [subcategoryData , setSubcategoryData] = useState(subcatgeories)

  const childSubcategoryData = useSelector((state) => state?.childSubcategory?.childSubcatgeory?.rows);
  const firstIndexData = categoriesData;
  const secondIndexData = categoriesData;
  const thirdIndexData = categoriesData;
  // console.log('LENGTH!!!!!!!', firstIndexData)
  // console.log('CHILD-SUBCATEGORYDATA~~~~~~~>>>>', childSubcategoryData)
  const[childSubcategory , setChildSubcategory] = useState(childSubcategoryData)

  const mattersData = useSelector((state) => state?.matters?.matters?.mettersData?.rows)
  const [matterData, setMattersData] = useState(mattersData)

  const latestNewsData = useSelector((state) => state?.latestnews?.latestNewsData?.rows)
  const [latestnewsdata, setLatestNewsData] = useState(latestNewsData)

  useEffect(() => {
    setBannnerData(bannerImageData)
  }, [categories])

  useEffect(() => {
    setSubcategoryData(subcatgeories)
  },[subcatgeories])

  useEffect(() => {
    setData(categories)
  }, [categories])

  useEffect(() => {
    setDatas(singleCategoryData)
  }, [singleCategoryData])

  useEffect(() => {
    setChildSubcategory(childSubcategoryData)
  },[childSubcategoryData])

  // const handleClickCategory = (item) => {
  //   item?.map((cat_id) => {
  //     dispatch(getSingleCategoryStart(cat_id?.category_ref_id))
  //   })
  // }

  const subCatData = useSelector((state) => state?.subcategory?.cateData?.categoryData);

  // const handleClickSubcategory = (item) => {
  //   dispatch(getSingleSubcategoryStart(item))
  // } 

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
                    <h3>Latest news</h3>
                    {latestnewsdata && latestnewsdata.map((item) => (
                      <div
                      className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                      onClick= {() => history.push(`/latestNewsData/${item.id}`)}>
                        <div className="pr-3">
                          <h5>{item.title}</h5>
                          <div className="fs-12">
                            {/* <span className="mr-2">Photo </span>10 Minutes ago */}
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
                          <li onClick={() => history.push(`/${item.category_name}`)}><a>{item.category_name}</a></li>
                        ) : (null)}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
              <div class="col-lg-9 stretch-card grid-margin">
                <div class="card">
                  <div class="card-body">
                    {matterData && matterData.map((item) => {
                      return (
                    <div class="row" onClick={() => history.push(`/matters/${item.id}`)}>
                      <div class="col-sm-4 grid-margin">
                        <div class="position-relative">
                          <div class="rotate-img">
                            <img
                              src={item.image}
                              alt="thumb"
                              class="img-fluid"
                            />
                          </div>
                          {/* <div class="badge-positioned">
                            <span class="badge badge-danger font-weight-bold"
                              >Flash news</span>
                          </div> */}
                        </div>
                      </div>
                      <div class="col-sm-8  grid-margin">
                        <h6 class="mb-2 font-weight-600">
                         {item.title}
                        </h6>
                        <div class="fs-13 mb-2">
                          <span class="mr-2">Photo </span>{item.updatedAt}
                        </div>
                        {/* <p class="mb-0">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an
                        </p> */}
                      </div>
                    </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div class="row" data-aos="fade-up">
              <div class="col-sm-12 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="card-title">
                          Video
                        </div>
                        <div class="row">
                          <div class="col-sm-6 grid-margin">
                            <div class="position-relative">
                              <div class="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_7.jpg"
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <div class="badge-positioned w-90">
                                <div
                                  class="d-flex justify-content-between align-items-center">
                                  <span
                                    class="badge badge-danger font-weight-bold">Lifestyle</span>
                                  <div class="video-icon">
                                    <i class="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 grid-margin">
                            <div class="position-relative">
                              <div class="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_8.jpg"
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <div class="badge-positioned w-90">
                                <div
                                  class="d-flex justify-content-between align-items-center">
                                  <span
                                    class="badge badge-danger font-weight-bold">National News</span>
                                  <div class="video-icon">
                                    <i class="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-6 grid-margin">
                            <div class="position-relative">
                              <div class="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_9.jpg"
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <div class="badge-positioned w-90">
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    class="badge badge-danger font-weight-bold"
                                    >Lifestyle</span>
                                  <div class="video-icon">
                                    <i class="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 grid-margin">
                            <div class="position-relative">
                              <div class="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_10.jpg"
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <div class="badge-positioned w-90">
                                <div
                                  class="d-flex justify-content-between align-items-center">
                                  <span
                                    class="badge badge-danger font-weight-bold"
                                    >National News</span>
                                  <div class="video-icon">
                                    <i class="mdi mdi-play"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div class="card-title">
                            Latest Video
                          </div>
                          <p class="mb-3">See all</p>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center border-bottom pb-2"
                        >
                          <div class="div-w-80 mr-3">
                            <div class="rotate-img">
                              <img
                                src="assets/images/dashboard/home_11.jpg"
                                alt="thumb"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 class="font-weight-600 mb-0">
                            Apple Introduces Apple Watch
                          </h3>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div class="div-w-80 mr-3">
                            <div class="rotate-img">
                              <img
                                src="assets/images/dashboard/home_12.jpg"
                                alt="thumb"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 class="font-weight-600 mb-0">
                            SEO Strategy & Google Search
                          </h3>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div class="div-w-80 mr-3">
                            <div class="rotate-img">
                              <img
                                src="assets/images/dashboard/home_13.jpg"
                                alt="thumb"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 class="font-weight-600 mb-0">
                            Cycling benefit & disadvantag
                          </h3>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center border-bottom pt-3 pb-2"
                        >
                          <div class="div-w-80 mr-3">
                            <div class="rotate-img">
                              <img
                                src="assets/images/dashboard/home_14.jpg"
                                alt="thumb"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 class="font-weight-600">
                            The Major Health Benefits of
                          </h3>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center pt-3"
                        >
                          <div class="div-w-80 mr-3">
                            <div class="rotate-img">
                              <img
                                src="assets/images/dashboard/home_15.jpg"
                                alt="thumb"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 class="font-weight-600 mb-0">
                            Powerful Moments of Peace
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" data-aos="fade-up">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="card-title">
                          Sport light
                        </div>
                        <div class="row">
                          <div class="col-xl-6 col-lg-8 col-sm-6">
                            <div class="rotate-img">
                              <img
                                src="assets/images/dashboard/home_16.jpg"
                                alt="thumb"
                                class="img-fluid"
                              />
                            </div>
                            <h2 class="mt-3 text-primary mb-2">
                              Newsrooms exercise..
                            </h2>
                            <p class="fs-13 mb-1 text-muted">
                              <span class="mr-2">Photo </span>10 Minutes ago
                            </p>
                            <p class="my-3 fs-15">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took
                            </p>
                            <a href="#" class="font-weight-600 fs-16 text-dark"
                              >Read more</a>
                          </div>
                          <div class="col-xl-6 col-lg-4 col-sm-6">
                            <div class="border-bottom pb-3 mb-3">
                              <h3 class="font-weight-600 mb-0">
                                Social distancing is ..
                              </h3>
                              <p class="fs-13 text-muted mb-0">
                                <span class="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <p class="mb-0">
                                Lorem Ipsum has been the industry's
                              </p>
                            </div>
                            <div class="border-bottom pb-3 mb-3">
                              <h3 class="font-weight-600 mb-0">
                                Panic buying is forcing..
                              </h3>
                              <p class="fs-13 text-muted mb-0">
                                <span class="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <p class="mb-0">
                                Lorem Ipsum has been the industry's
                              </p>
                            </div>
                            <div class="border-bottom pb-3 mb-3">
                              <h3 class="font-weight-600 mb-0">
                                Businesses ask hundreds..
                              </h3>
                              <p class="fs-13 text-muted mb-0">
                                <span class="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <p class="mb-0">
                                Lorem Ipsum has been the industry's
                              </p>
                            </div>
                            <div>
                              <h3 class="font-weight-600 mb-0">
                                Tesla's California factory..
                              </h3>
                              <p class="fs-13 text-muted mb-0">
                                <span class="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <p class="mb-0">
                                Lorem Ipsum has been the industry's
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="card-title">
                              Sport light
                            </div>
                            <div class="border-bottom pb-3">
                              <div class="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_17.jpg"
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <p class="fs-16 font-weight-600 mb-0 mt-3">
                                Kaine: Trump Jr. may have
                              </p>
                              <p class="fs-13 text-muted mb-0">
                                <span class="mr-2">Photo </span>10 Minutes ago
                              </p>
                            </div>
                            <div class="pt-3 pb-3">
                              <div class="rotate-img">
                                <img
                                  src="assets/images/dashboard/home_18.jpg"
                                  alt="thumb"
                                  class="img-fluid"
                                />
                              </div>
                              <p class="fs-16 font-weight-600 mb-0 mt-3">
                                Kaine: Trump Jr. may have
                              </p>
                              <p class="fs-13 text-muted mb-0">
                                <span class="mr-2">Photo </span>10 Minutes ago
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="card-title">
                              Celebrity news
                            </div>
                            <div class="row">
                              <div class="col-sm-12">
                                <div class="border-bottom pb-3">
                                  <div class="row">
                                    <div class="col-sm-5 pr-2">
                                      <div class="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_19.jpg"
                                          alt="thumb"
                                          class="img-fluid w-100"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-sm-7 pl-2">
                                      <p class="fs-16 font-weight-600 mb-0">
                                        Online shopping ..
                                      </p>
                                      <p class="fs-13 text-muted mb-0">
                                        <span class="mr-2">Photo </span>10
                                        Minutes ago
                                      </p>
                                      <p class="mb-0 fs-13">
                                        Lorem Ipsum has been
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-12">
                                <div class="border-bottom pb-3 pt-3">
                                  <div class="row">
                                    <div class="col-sm-5 pr-2">
                                      <div class="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_20.jpg"
                                          alt="thumb"
                                          class="img-fluid w-100"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-sm-7 pl-2">
                                      <p class="fs-16 font-weight-600 mb-0">
                                        Online shopping ..
                                      </p>
                                      <p class="fs-13 text-muted mb-0">
                                        <span class="mr-2">Photo </span>10
                                        Minutes ago
                                      </p>
                                      <p class="mb-0 fs-13">
                                        Lorem Ipsum has been
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-12">
                                <div class="border-bottom pb-3 pt-3">
                                  <div class="row">
                                    <div class="col-sm-5 pr-2">
                                      <div class="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_21.jpg"
                                          alt="thumb"
                                          class="img-fluid w-100"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-sm-7 pl-2">
                                      <p class="fs-16 font-weight-600 mb-0">
                                        Online shopping ..
                                      </p>
                                      <p class="fs-13 text-muted mb-0">
                                        <span class="mr-2">Photo </span>10
                                        Minutes ago
                                      </p>
                                      <p class="mb-0 fs-13">
                                        Lorem Ipsum has been
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-12">
                                <div class="pt-3">
                                  <div class="row">
                                    <div class="col-sm-5 pr-2">
                                      <div class="rotate-img">
                                        <img
                                          src="assets/images/dashboard/home_22.jpg"
                                          alt="thumb"
                                          class="img-fluid w-100"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-sm-7 pl-2">
                                      <p class="fs-16 font-weight-600 mb-0">
                                        Online shopping ..
                                      </p>
                                      <p class="fs-13 text-muted mb-0">
                                        <span class="mr-2">Photo </span>10
                                        Minutes ago
                                      </p>
                                      <p class="mb-0 fs-13">
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