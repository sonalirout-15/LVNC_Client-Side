import axios from "axios";

export const loadMattersApi = async () =>
    await axios.get('http://localhost:8080/api/metters')