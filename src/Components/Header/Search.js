import React, { useEffect, useState } from "react";
import { MDBInputGroup, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import {  loadCategoryStart } from "../../Redux/Actions/CategoryAction";
import { categorySearch } from "../../Redux/Actions/SearchAction"; 
import { Link } from "react-router-dom";


const Search = () => {
    const dispatch = useDispatch();
    const [searchData , setSearchData] = useState()

    useEffect(() => {
        dispatch(loadCategoryStart())
      }, [])

      const categories = useSelector((state) => state?.categoryData?.categories?.categoryData?.rows);
      const [data, setData] = useState(categories);

      useEffect(() => {
        setData(categories)
      }, [categories])


    return (
        <>
            <MDBInputGroup style={{ marginLeft : '30%', marginTop:'2%'}}>
                <MDBInput label='Search here' style={{ width:'200%' , height:'40px'}} onChange={(event) => dispatch(categorySearch(event.target.value))}/>
                {/* {searchData.length > 0 && (

                )} */}
                <MDBBtn rippleColor='dark' type='submit'> Search
                </MDBBtn>
            </MDBInputGroup>
            <header id="header1" style={{ backgroundColor:'white' , marginTop:'2%'}}>
                <div className="container1">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="navbar-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div
                                        className="navbar-collapse justify-content-center collapse"
                                        id="navbarSupportedContent">
                                        <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                                            <li>
                                                <button className="navbar-close">
                                                    <i className="mdi mdi-close"></i>
                                                </button>
                                            </li>
                                           {data && data?.map((item) => (
                                                 <ul className="navbar-top-left-menu" style={{ color : '#032a63', fontSize:'18px', justifyContent:'right'}}>{item?.category_name}
                                                 <div className="nav-item">
                                                    { item?.Subcategories?.map((items) => (
                                                       
                                                        <Link to={`${(items.subcategory_name).toLowerCase()}/${(items.subcategory_name).toLowerCase()}`} className="nav-link" style={{ color : 'black', fontSize:'12px'}}>{items?.subcategory_name}</Link>
                                                    ))}
                                                   
                                                 </div>
                                             </ul>
                                            ))} 
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Search;