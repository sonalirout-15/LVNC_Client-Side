import axios from "axios";

export const loadCategoryApi = async () =>
    await axios.get('http://localhost:8080/api/categories')