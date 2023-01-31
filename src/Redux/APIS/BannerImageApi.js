import axios from 'axios';

const token = JSON.parse((JSON.stringify(localStorage.getItem("USER"))));
const headersParam = {
    "Authorization": `Bearer ${token}`
};

export const loadBannerImageApi = async () =>
    await axios.get('http://localhost:8080/api//banner/getall', { headers: headersParam })