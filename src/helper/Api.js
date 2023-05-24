import axios from 'axios';

const baseApi = 'http://localhost:5000';

class Api {
  static getAvailableDates() {
    return axios.get(`${baseApi}/available-dates`);
  }

  static getDataByDate(date) {
    return axios.get(`${baseApi}/data/${date}`);
  }

  static getDataByMonth(month) {
    return axios.get(`${baseApi}/monthly-data/${month}`);
  }
}

export default Api;