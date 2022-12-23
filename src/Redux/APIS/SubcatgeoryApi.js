import axios from "axios";

export const getSingleSubcategoryApi = async (id) =>
    await axios.get(`http://localhost:8080/api/subcategories/${id}`)

export const loadSubcategoryApi = async () =>
    await axios.get('http://localhost:8080/api/subcategories/')