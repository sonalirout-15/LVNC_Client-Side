import axios from 'axios';

const token = JSON.parse((JSON.stringify(localStorage.getItem("USER"))));
const headersParam = {
    "Authorization": `Bearer ${token}`
};

export const loadCampaingApi = async () =>
    await axios.get('http://localhost:8080/api/campaning', { headers: headersParam })