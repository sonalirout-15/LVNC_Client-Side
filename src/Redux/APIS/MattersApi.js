import axios from "axios";

export const loadMattersApi = async () => await axios.get('http://localhost:8080/api/metters')
export const getSingleMettersApi = async (id) => await axios.get(`http://localhost:8080/api/metters/${id}`)