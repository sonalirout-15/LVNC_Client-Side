import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getSingleSubcategoryStart } from "../../Redux/Actions/SubcategoryAction";

const SubcategoryData = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    const singleSubcategoryName = useSelector((state) => state?.subcategory?.cateData[0]?.subcategory_name);
    const singleSubcategoryData = useSelector((state) => state?.subcategory?.cateData[0]?.Childcategories);
    const singleLatestNews = useSelector((state) => state?.subcategory?.cateData[0]?.latestnews);

    useEffect(() => {
        dispatch(getSingleSubcategoryStart(id))
    },[])

    return (
     <div className="content-wrapper">
          <div className="container">
            <div className="col-sm-12">
              <div className="card" data-aos="fade-up">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                        <h2>{singleSubcategoryName}</h2>
                    </div>
                  </div><br />
                  <div className="row">
                    <div className="col-lg-8">
                      {singleSubcategoryData && singleSubcategoryData.map((items) => {
                            return (
                        <div className="row" onClick={() => history.push(`childSubcategory/${items.id}`)}>
                        <div className="col-sm-4 grid-margin">
                          <div className="rotate-img">
                            <img
                              src={items?.image}
                              alt="banner"
                              class="img-fluid"
                              />
                          </div>
                        </div>
                        <div className="col-sm-8 grid-margin">
                          <h6 className="font-weight-600 mb-2">
                           {items?.title}
                          </h6>
                          <p className="fs-13 text-muted mb-0">
                            <span className="mr-2">Photo </span>{items?.updated_at}
                          </p>
                        </div>
                      </div>
                        )
                      })}
                    </div>
                    <div className="col-lg-4">
                      <h2 className="mb-4 text-primary font-weight-600">
                        Latest news
                      </h2>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="border-bottom pb-4 pt-4">
                            {singleLatestNews && singleLatestNews.map((item) => {
                              return (
                            <div className="row" onClick= {() => history.push(`/latestNews/${item.id}`)}>
                              <div className="col-sm-8">
                                <h5 className="font-weight-600 mb-1">
                                  {item.title}
                                </h5>
                                <p className="fs-13 text-muted mb-0">
                                  <span className="mr-2">Photo </span>{item.updated_at}
                                </p>
                              </div>
                              <div className="col-sm-4">
                                <div className="rotate-img">
                                  <img
                                    src={item.image}
                                    alt="banner"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                      {/* <div className="trending">
                        <h2 className="mb-4 text-primary font-weight-600">
                          Trending
                        </h2>
                        <div className="mb-4">
                          <div className="rotate-img">
                            <img
                              src="../assets/images/business/business_4.png"
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
                              src="../assets/images/business/business_5.png"
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
                              src="../assets/images/business/business_6.png"
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
    )
}


export default SubcategoryData;