import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleChildSubcategoryStart } from "../../Redux/Actions/ChildSubcategoryAction";

const ChildSubcategory = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getSingleChildSubcategoryStart(id))
    },[])
    
    return(
       <h1>Data</h1>
    )
}

export default ChildSubcategory;