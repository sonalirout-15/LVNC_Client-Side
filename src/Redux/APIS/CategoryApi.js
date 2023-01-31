import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("USER"))));
const headersParam = {
    "Authorization": `Bearer ${token}`
};

export const loadCategoryApi = async () =>
    await axios.get('http://localhost:8080/api/categories')

export const getSingleCategoryApi = async (id) => await axios.get(`http://localhost:8080/api/categories/${id}`, { headers: headersParam })
