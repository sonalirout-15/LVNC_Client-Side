import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("USER"))));
const headersParam = {
    "Authorization": `Bearer ${token}`
};

export const loadMattersApi = async () => await axios.get('http://localhost:8080/api/metters', { headers: headersParam })
export const getSingleMettersApi = async (id) => await axios.get(`http://localhost:8080/api/metters/${id}`, { headers: headersParam })