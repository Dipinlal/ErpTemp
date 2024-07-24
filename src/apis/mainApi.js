import axios from "axios";
import { SECURITY_URL, CORE_URL } from "../config.js";
import { useAlert } from "../components/AlertHandler/AlertContext.jsx";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const addRequestToQueue = (originalRequest, apiInstance) => {
  return new Promise((resolve, reject) => {
    failedQueue.push({
      resolve: (token) => {
        originalRequest.headers['Authorization'] = 'Bearer ' + token;
        resolve(apiInstance(originalRequest));
      },
      reject: (err) => {
        reject(err);
      }
    });
  });
};

// Function to refresh the access token
const refreshToken = async () => {
  try {
    const refreshTokenValue = localStorage.getItem("refreshToken");
    const response = await axios.get(`${SECURITY_URL}/token/regeneratetokens?refershToken=${refreshTokenValue}`);

    const { accessToken, refreshToken } = response?.data;

    // Update the local storage with the new tokens
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return accessToken;
  } catch (error) {
    console.error("refresh token error", error);
    throw error;
  }
};

// Create axios instances
const securityApi = axios.create({ baseURL: SECURITY_URL });
const coreApi = axios.create({ baseURL: CORE_URL });

// Interceptor for API requests
const requestInterceptor = (config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

// Response interceptor
const responseInterceptor = (apiInstance) => async (error) => {
  const originalRequest = error.config;
  if (error.response && error.response.status === 401 && !originalRequest._retry) {
    if (!isRefreshing) {
      isRefreshing = true;
      try {
        const newToken = await refreshToken();
        isRefreshing = false;
        apiInstance.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
        processQueue(null, newToken);
        originalRequest._retry = true;
        originalRequest.headers['Authorization'] = 'Bearer ' + newToken;
        return apiInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    } else {
      return addRequestToQueue(originalRequest, apiInstance).catch(err => {
        return Promise.reject(err);
      });
    }
  }
  return Promise.reject(error);
};

// Apply interceptors to securityApi
securityApi.interceptors.request.use(requestInterceptor);
securityApi.interceptors.response.use(response => response.data, responseInterceptor(securityApi));

// Apply interceptors to coreApi
coreApi.interceptors.request.use(requestInterceptor);
coreApi.interceptors.response.use(response => response.data, responseInterceptor(coreApi));


// Custom hook for API requests
const useApi = () => {
    const { showAlert } = useAlert();
  
    const makeAuthorizedRequest = async (apiInstance, method, url, params) => {
      const token = localStorage.getItem('accessToken');
      const headers = {
        'Authorization': `Bearer ${token}`,
      };
  
      if (params instanceof FormData) {
        headers['Content-Type'] = 'multipart/form-data';
      } else {
        headers['Content-Type'] = 'application/json';
      }
  
      try {
        let response;
        if (method === 'get') {
          response = await apiInstance.get(url, { headers, params });
        } else {
          response = await apiInstance({
            method,
            url,
            data: params,
            headers,
          });
        }
        
        return response;
      } catch (error) {
        console.error(`Error in ${url}`, error);
  
        if (error.response && error.response.status) {
          switch (error.response.status) {
            case 400: // Bad request
              const result = error.response.data.result ? JSON.parse(error.response.data.result) : null;
              if (result && Array.isArray(result) && result[0]?.ErrorMessage) {
                showAlert('warning', result[0].ErrorMessage);
              } else {
                showAlert('warning', error.response.data.message);
              }
              break;
            case 401: // Unauthorized
              showAlert('warning', error.response.data.message);
              break;
            case 403: // Forbidden
              showAlert('warning', error.response.data.message);
              break;
            case 404: // Not Found
              showAlert('warning', error.response.data.message);
              break;
            case 409: // Conflict
              showAlert('warning', error.response.data.message);
              break;
            case 500: // Internal Server Error
              console.error('A 500 Internal Server Error occurred.');
              break;
            default:
              console.error(`An error occurred: ${error.response.status}`);
              break;
          }
        } else {
          console.error('An error occurred:', error.message);
        }
  
        throw error;
      }
    };
  
    const loginGetCompany = async (userName) => {
      try {
        const response = await axios.get(`${SECURITY_URL}/login/getcompany?userName=${userName}`);
        return response.data;
      } catch (error) {
        handleError(error);
        throw error;
      }
    };
  
    const loginLogin = async (payload) => {
      try {
        const response = await axios.post(`${SECURITY_URL}/login/login`, payload);
        return response;
      } catch (error) {
        handleError(error);
        throw error;
      }
    };
  
    
  
    const handleError = (error) => {
      if (error.response && error.response.status) {
        switch (error.response.status) {
          case 400: // Bad request
            const result = error.response.data.result ? JSON.parse(error.response.data.result) : null;
            if (result && Array.isArray(result) && result[0]?.ErrorMessage) {
              showAlert('warning', result[0].ErrorMessage);
            } else {
              showAlert('warning', error.response.data.message);
            }
            break;
          case 401: // Unauthorized
            showAlert('warning', error.response.data.message);
            break;
          case 403: // Forbidden
            showAlert('warning', error.response.data.message);
            break;
          case 404: // Not Found
            showAlert('warning', error.response.data.message);
            break;
          case 409: // Conflict
            showAlert('warning', error.response.data.message);
            break;
          case 500: // Internal Server Error
            console.error('A 500 Internal Server Error occurred.');
            break;
          default:
            console.error(`An error occurred: ${error.response.status}`);
            break;
        }
      } else {
        console.error('An error occurred:', error.message);
      }
    };
  
    return {
      makeAuthorizedRequest,
      loginGetCompany,
      loginLogin,
     
    };
  };
  
  export {
    securityApi,
    coreApi,
    useApi,
  };