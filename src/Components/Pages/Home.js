import React, { useEffect, useState } from "react";
import './CSS/Home.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSingleCategoryStart, loadCategoryStart } from '../../../src/Redux/Actions/CategoryAction';
import { getSingleSubcategoryStart, loadSubcategoryStart } from '../../../src/Redux/Actions/SubcategoryAction'
import { loadBannerImageStart } from "../../Redux/Actions/BannerImageAction";
import { loadLatestNewsStart } from "../../Redux/Actions/LatestNewsAction";
import { loadMattersStart } from "../../Redux/Actions/MattersAction";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const current = new Date();
  const date = `${current.getDate()},${current.toLocaleString('default', { month: 'long' })} ${current.getMonth() + 1}, ${current.getFullYear()}`;

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
    dispatch(loadMattersStart())
  }, [])


  useEffect(() => {
    dispatch(loadLatestNewsStart())
  }, [])

  const bannerImageData = useSelector((state) => state?.bannerImage?.bannerImageData?.BannerData)
  console.log('BANNER-IMAGE~~~~~~~~>>>>>>>', bannerImageData)
  const [bannerData, setBannnerData] = useState(bannerImageData)

  const categories = useSelector((state) => state?.categoryData?.categories?.categoryData?.rows);
  const [data, setData] = useState(categories);

  const subcategoryData = useSelector((state) => state?.subcategory?.subcategories?.rows);
  // console.log('SUBCATEGORY~~~~~~~~~~~~~~~~~~~>>>>>>>> ', subcategoryData)
  const [subcategorydatas, setSubcategoryData] = useState(subcategoryData)

  const singleData = useSelector((state) => state?.categoryData?.categoryData[0]?.Subcategories)
  // console.log('SINGLE-DATA~~~~~~~~~~~~>>>>>', singleData)

  const mattersData = useSelector((state) => state?.matters?.matters?.mettersData?.rows)
  const [matterData, setMattersData] = useState(mattersData)



  const latestNewsData = useSelector((state) => state?.latestnews?.latestNewsData?.rows)
  // console.log('LATEST-NEWS!!!!!!!!!!!!!!!!', latestNewsData)
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
            <div className="flash-news-banner">
              <div className="container">
                <div className="d-lg-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    {/* <span className="badge badge-dark mr-2">Flash News</span> */}
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
                     {item.title}
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
                      // console.log('ITEM-----&&&&&', item.id)
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
              <div className="col-lg-2 stretch-card grid-margin" style={{ marginLeft: '3%', marginTop: '2%' }}>
                <div className="card">
                  <div className="card-body">
                    <h2>Category</h2>
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
              <div className="col-lg-9 stretch-card grid-margin" style={{ marginTop: '2%' }}>
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
            <div className="subcategory-head">
               <h3>SUBCATEGORIES</h3>
            </div>
              <div className="row row-cols-4 g-5">
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
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;