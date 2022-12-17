import axios from "axios";

export const loadLatestNewsApi = async () => 
    await axios.get('http://localhost:8080/api/latestNews/')