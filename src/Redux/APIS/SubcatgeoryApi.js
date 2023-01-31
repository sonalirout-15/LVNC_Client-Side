import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("USER"))));
const headersParam = {
    "Authorization": `Bearer ${token}`
};


export const loadSubcategoryApi = async () =>
    await axios.get('http://localhost:8080/api/subcategories/', { headers: headersParam })

    
export const getSingleSubcategoryApi = async (id) =>
    await axios.get(`http://localhost:8080/api/subcategories/${id}`, { headers: headersParam })