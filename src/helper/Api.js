import axios from 'axios';

const baseApi = 'http://localhost:5000';
const apiKey = process.env.REACT_APP_API_KEY; // Get the API key from the environment variable

class Api {
  static getAvailableDates() {
    return axios.get(`${baseApi}/available-dates`, { headers: { 'x-api-key': apiKey } });
  }

  static getDataByDate(date) {
    return axios.get(`${baseApi}/data/${date}`, { headers: { 'x-api-key': apiKey } });
  }

  static getDataByMonth(month) {
    return axios.get(`${baseApi}/monthly-data/${month}`, { headers: { 'x-api-key': apiKey } });
  }
  
  static downloadData(date) {
    return axios.get(`${baseApi}/download-data/${date}`, { headers: { 'x-api-key': apiKey } });
  }

  static getNodes() {
    return axios.get(`${baseApi}/nodes`, { headers: { 'x-api-key': apiKey } });
  }
}

export default Api;
