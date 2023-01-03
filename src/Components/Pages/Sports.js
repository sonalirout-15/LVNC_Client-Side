import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleCategoryStart } from "../../Redux/Actions/CategoryAction";
import { getSingleSubcategoryStart } from "../../Redux/Actions/SubcategoryAction";

const Sports = () => {
  const dispatch = useDispatch();
  const current = new Date();
    const date = `${current.getDate()},${current.toLocaleString('default', { month: 'long' })} ${current.getMonth() + 1}, ${current.getFullYear()}`;
  const {id} = useParams()

  const sportsData = useSelector((state) => state?.subcategory?.cateData?.categoryData);
  console.log('SPORTS-DATA~~~~~~~~~~~~~', sportsData)

  const headerData = useSelector((state) => state?.categoryData?.categoryData[0]?.Subcategories);

  useEffect(() => {
    dispatch(getSingleCategoryStart(id))
  }, [])
  
  const handleClickCategory = (item) => {
        dispatch(getSingleSubcategoryStart(item))
    }

  return (
  
      <div className="container-scroller">
        <div className="main-panel">
        <div className="container-scroller">
                {/* <div className="main-panel">
                    <div className="flash-news-banner">
                        <div className="container">
                            <div className="d-lg-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                <span className="badge badge-dark mr-2">Subcategories</span>
                                    {headerData && headerData.map((item) => (
                                    <span onClick={() => handleClickCategory(item.id)} className="badge badge mr-2" style={{color : 'black', height:'10%'}}>{item.subcategory_name}</span>
                                    ))}

                                </div>
                                <div className="d-flex">
                                    <span className="mr-4 text-danger">{date}</span>
                                    <span className="text-danger">30°C, India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
          <div className="content-wrapper">
            <div className="container">
              <div className="col-sm-12">
                <div className="card" data-aos="fade-up">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-12">
                        <h1 className="font-weight-600 mb-4">
                          SPORTS
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-8">
                        {sportsData && sportsData.map((item) => (
                          <div className="row">
                            <div className="col-sm-4 grid-margin">
                              <div className="rotate-img">
                                <img
                                  src={item.image}
                                  alt="banner"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="col-sm-8 grid-margin">
                              <h2 className="font-weight-600 mb-2">
                                {item.subcategory_name}
                              </h2>
                              <p className="fs-13 text-muted mb-0">
                                <span className="mr-2">Photo </span>10 Minutes ago
                              </p>
                              <p className="fs-15">
                                {item.Description}
                              </p>
                            </div>
                          </div>
                        ))}

                      </div>
                      <div className="col-lg-4">
                        <h2 className="mb-4 text-primary font-weight-600">
                          Latest news
                        </h2>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="border-bottom pb-4 pt-4">
                              <div className="row">
                                <div className="col-sm-8">
                                  <h5 className="font-weight-600 mb-1">
                                    Ways to stay social online while in self..
                                  </h5>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10 Minutes ago
                                  </p>
                                </div>
                                <div className="col-sm-4">
                                  <div className="rotate-img">
                                    <img
                                      src="../assets/images/sports/Sports_1.jpg"
                                      alt="banner"
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="border-bottom pb-4 pt-4">
                              <div className="row">
                                <div className="col-sm-8">
                                  <h5 className="font-weight-600 mb-1">
                                    Premier League players join charity..
                                  </h5>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10 Minutes ago
                                  </p>
                                </div>
                                <div className="col-sm-4">
                                  <div className="rotate-img">
                                    <img
                                      src="../assets/images/sports/Sports_2.jpg"
                                      alt="banner"
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="pt-4">
                              <div className="row">
                                <div className="col-sm-8">
                                  <h5 className="font-weight-600 mb-1">
                                    UK Athletics board changed stance on..
                                  </h5>
                                  <p className="fs-13 text-muted mb-0">
                                    <span className="mr-2">Photo </span>10 Minutes ago
                                  </p>
                                </div>
                                <div className="col-sm-4">
                                  <div className="rotate-img">
                                    <img
                                      src="../assets/images/sports/Sports_3.jpg"
                                      alt="banner"
                                      className="img-fluid"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="trending">
                          <h2 className="mb-4 text-primary font-weight-600">
                            Trending
                          </h2>
                          <div className="mb-4">
                            <div className="rotate-img">
                              <img
                                src="../assets/images/sports/Sports_4.jpg"
                                alt="banner"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="mt-3 font-weight-600">
                              Virus Kills Member Of Advising Iran’s Supreme
                            </h3>
                            <p className="fs-13 text-muted mb-0">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </p>
                          </div>
                          <div className="mb-4">
                            <div className="rotate-img">
                              <img
                                src="../assets/images/sports/Sports_5.jpg"
                                alt="banner"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="mt-3 font-weight-600">
                              Virus Kills Member Of Advising Iran’s Supreme
                            </h3>
                            <p className="fs-13 text-muted mb-0">
                              <span className="mr-2">Photo </span>10 Minutes ago
                            </p>
                          </div>
                          <div className="mb-4">
                            <div className="rotate-img">
                              <img
                                src="../assets/images/sports/Sports_6.jpg"
                                alt="banner"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="mt-3 font-weight-600">
                              Virus Kills Member Of Advising Iran’s Supreme
                            </h3>
                            <p className="fs-13 text-muted mb-0">
                              <span className="mr-2">Photo </span>10 Minutes ago
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
    
  )
}

export default Sports;