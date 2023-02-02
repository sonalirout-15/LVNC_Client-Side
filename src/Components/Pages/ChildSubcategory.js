import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleChildSubcategoryStart } from "../../Redux/Actions/ChildSubcategoryAction";

const ChildSubcategory = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const singleChildSubcategory = useSelector((state) => state?.childSubcategory?.childSubcategoryData);
    const singlePost = useSelector((state) => state?.childSubcategory?.childSubcategoryData?.Posts);

    useEffect(() => {
        dispatch(getSingleChildSubcategoryStart(id))
    },[])
    
    return(
        <div className="col-lg-10 stretch-card grid-margin" style={{margin: '110px'}}>
        <div className="card">
          <div className="card-body">
              <div className="row">
              <div className="fs-13 mb-2">
                <span className="mr-2">Photo </span>{singleChildSubcategory?.updated_at}
            </div>
              <h4 className="mb-2 font-weight-600">
                   {singleChildSubcategory?.title}
                  </h4>.
                <div className="col-sm-7 grid-margin">
                  <div className="position-relative">
                    <div className="rotate-img">
                      <img
                        style={{'height' : '200px', width: '500px', alignItems:'center'}}
                        src={singleChildSubcategory?.image}
                        alt="thumb"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-8  grid-margin">
                  <div className="fs-13 mb-2">
                    <span className="mr-2"></span>
                  </div>
                  <p className="mb-0">
                   {singleChildSubcategory?.Description}
                  </p>
                 </div>
                 <div className="post-comment-section">
                        <h3 className="font-weight-600">Related Posts</h3>
                        <div className="row">
                          {singlePost && singlePost.map((item) => {
                          <div className="col-sm-12">
                            <div className="post-author">
                              <div className="rotate-img">
                                <img
                                style={{'height' : '200px', width: '500px', alignItems:'center'}}
                                  src={item.image}
                                  alt="banner"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="post-author-content">
                                <h5 className="mb-1">
                                  {item.title}
                                </h5>
                                <p className="fs-13 text-muted mb-0">
                                  <span className="mr-2">Photo </span>{item.updated_at}
                                </p>
                              </div>
                            </div>
                          </div>
                          })}
                        </div>      
                 </div>
              </div>
          </div>
        </div>
      </div>
    )
}

export default ChildSubcategory;