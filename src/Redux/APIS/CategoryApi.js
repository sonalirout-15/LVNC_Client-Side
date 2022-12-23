import axios from "axios";

export const loadCategoryApi = async () =>
    await axios.get('http://localhost:8080/api/categories')

export const getSingleCategoryApi = async (id) => await axios.get(`http://localhost:8080/api/categories/${id}`)
