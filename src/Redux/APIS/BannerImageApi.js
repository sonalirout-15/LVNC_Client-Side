import axios from 'axios';

export const loadBannerImageApi = async () =>
    await axios.get('http://localhost:8080/api//banner/getall')