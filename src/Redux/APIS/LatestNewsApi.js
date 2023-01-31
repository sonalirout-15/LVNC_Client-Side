import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("USER"))));
const headersParam = {
    "Authorization": `Bearer ${token}`
};

export const loadLatestNewsApi = async () => await axios.get('http://localhost:8080/api/latestNews/', { headers: headersParam })

export const getSingleLatestNewsApi = async (id) =>
    await axios.get(`http://localhost:8080/api/latestNews/${id}`, { headers: headersParam })
    