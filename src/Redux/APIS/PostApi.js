import axios from "axios";

export const loadPostApi = async () =>
    await axios.get('http://localhost:8080/api/post')