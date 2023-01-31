import axios from "axios";

const token = JSON.parse((JSON.stringify(localStorage.getItem("USER"))));
const headersParam = {
    "Authorization": `Bearer ${token}`
};

export const conatctUsApi = async (contactUser) =>
    await axios.post('http://localhost:8080/api/contactus/create', contactUser, { headers: headersParam })
    