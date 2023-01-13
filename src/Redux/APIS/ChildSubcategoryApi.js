import axios from "axios"

export const loadChildSubcategoryApi = async () => await axios.get('http://localhost:8080/api/childCategories/getall', )

export const getSingleChildSubcategoryApi = async (id) => await axios.get(`http://localhost:8080/api/childCategories/${id}`, )