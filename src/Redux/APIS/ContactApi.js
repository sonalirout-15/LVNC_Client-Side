import axios from "axios";

export const conatctUsApi = async (contactUser) =>
    await axios.post('http://localhost:8080/api/contactus/create', contactUser)
    