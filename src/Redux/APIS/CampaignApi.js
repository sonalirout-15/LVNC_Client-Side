import axios from 'axios';

export const loadCampaingApi = async () =>
    await axios.get('http://localhost:8080/api/campaning')