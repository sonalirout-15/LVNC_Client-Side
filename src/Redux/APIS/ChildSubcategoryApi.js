import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("USER"))));
const headersParam = {
    "Authorization": `Bearer ${token}`
};

export const loadChildSubcategoryApi = async () => await axios.get('http://localhost:8080/api/childCategories/getall', { headers: headersParam })

export const getSingleChildSubcategoryApi = async (id) => await axios.get(`http://localhost:8080/api/childCategories/${id}`, { headers: headersParam })