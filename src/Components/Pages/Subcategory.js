import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getSingleCategoryStart } from "../../Redux/Actions/CategoryAction";


const Subcategory = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {category_name} = useParams();

    const singleCategoryName = useSelector((state) => state?.categoryData?.categoryData);
    const singleSubcategoryName = useSelector((state) => state?.categoryData?.categoryData[0]?.Subcategories);
  

    useEffect(() => {
        dispatch(getSingleCategoryStart(category_name))
    },[])


    // const handleClickSubcategory = (item) => {
    //   item?.map((subcate_id) => {
    //     // console.log('SUBCATE-ID~~~~~~~>>>', subcate_id)
    //     dispatch(getSingleSubcategoryStart(subcate_id?.Subcategory_ref_id))
    //  })
    // }


    return (
        <div>
          {singleCategoryName && singleCategoryName.map((name) => (
            <h3 className="cat_name">{name.category_name} News</h3>
          ))}   
       <div className="container-scroller">
              <div className="main-panel">
                    <div className="subcate">
                        <div className="container">
                            <div className="d-lg-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    {singleSubcategoryName && singleSubcategoryName.map((item) => {
                                      return (
                                   <div className="nav-item"> 
                                   <a style={{color: 'white', margin:'10px'}}  onClick={() => history.push(`subcategoryData/${item.id}`)}>{item.subcategory_name}</a>
                                    {/* <a style={{color: 'white', margin:'10px'}} onClick={() => handleClickSubcategory(item?.Childcategories)}>{item.subcategory_name}</a> */}
                                   </div>     
                                      )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
          {/* <div className="content-wrapper">
          <div className="container">
            <div className="col-sm-12">
              <div className="card" data-aos="fade-up">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8">
                      {singleSubCategoryData && singleSubCategoryData.map((items) => {
                            return (
                        <div className="row" onClick={() => history.push(`./${items.id}`)}>
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
                            {singleLatestNewsData && singleLatestNewsData.map((item) => {
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
                      <div className="trending">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
          {singleSubcategoryName && singleSubcategoryName.map((items) => (
            <div className="container-scroller">
              <div className="main-panel">
                    <div className="childSubcategory">
                        <div className="container">
                            <div className="d-lg-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                   <div className="nav-item"> 
                                    <a style={{color: 'white', margin:'10px'}}>{items.subcategory_name}</a>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              <div className="row row-cols-6 g-8" style={{ marginTop : '10px',marginLeft:'9px'}}>
              {items?.Childcategories?.map((data) => (
                <div className="col">
                  <div className="cards" onClick={() => history.push(`childSubcategory/${data.id}`)}>
                    <img src={data.image} className="card-img-top" alt="image" />
                    <div className="card-body">
                      <h6 className="card-title bold">{data.title}</h6>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              </div>
               ))}
            </div>
    )
}

export default Subcategory;