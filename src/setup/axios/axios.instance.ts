import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Env } from '../../common/constants';

const axiosInstance = axios.create({
  baseURL: Env.BASE_URL,
  timeout: 5000,
});

const requestHandler = (request: AxiosRequestConfig) => {
  if (request.headers) request.headers.Authorization = 'token';
  return request;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));

const responseErrorHandler = (error: AxiosError) => {
  //* const originalRequest = error.config;
  const errors = ['Something went wrong, please try again!'];
  if (error.response) {
    if (error.response.status === 401) {
      // log out user
      // ? or
      // call refresh token
      // const refreshToken = await refreshToken();
      // if (refreshToken.status === 200) {
      //   token = refreshToken.data.hashToken;
      //   localStorage.setItem('authToken', token);
      //   return axiosInstance(originalRequest);
      // }
    }
  } else if (error.request) {
    // ??  error request
  } else {
    // ??  error request message
  }

  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    status: error.response?.status,
    errors,
  });
};

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => responseErrorHandler(error),
);

export default axiosInstance;
