import axios from 'axios';
import { getToken, removeToken } from './Auth';
const Axios = axios.create();

Axios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    } else {
      return config;
    }
  },
  (Err) => {
    return Promise.reject(Err);
  },
);

Axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      removeToken();
      window.location.href = window.location.origin + '/login';
    }
    return Promise.reject(err);
  },
);

export const handelError = (Err) => {
  let errMsg = 'Something Went Wrong';
  if (Err && Err.message) errMsg = Err.message;
  return {
    error: true,
    message: errMsg,
  };
};

export const header = {
  headers: {
    'content-type': `application/json`,
  },
};

export default Axios;
