import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleCategoryStart } from "../../Redux/Actions/CategoryAction";


const Subcategory = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const singleSubcategoryName = useSelector((state) => state?.categoryData?.categoryData[0]?.Subcategories);
    // console.log('SINGLE-SUBCATEGORYNAME~~~~~~~~~~~~~>>>>>>', singleSubcategoryName)

    useEffect(() => {
        dispatch(getSingleCategoryStart(id))
    },[])

    return (
        <div>
       <div className="container-scroller">
                <div className="main-panel">
                    <div className="subcate">
                        <div className="container">
                            <div className="d-lg-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    {singleSubcategoryName && singleSubcategoryName.map((item) => (
                                   <div className="nav-item"> 
                                    <a style={{color: 'white', margin:'10px'}}>{item.subcategory_name}</a>
                                   </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-4 g-3" style={{ marginTop : '10px'}}>
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
    )
}

export default Subcategory;