import axios from 'axios';
import { CORE_URL, SECURITY_URL,MASTER_URL, loadConfig } from './config.js';

const coreApi = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const securityApi = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
const masterApi = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// A function to update the base URL of the axios instance
export const updateCoreApiBaseUrl = (newBaseUrl) => {
  coreApi.defaults.baseURL = newBaseUrl;
};

export const updateSecurityApiBaseUrl = (newBaseUrl) => {
  securityApi.defaults.baseURL = newBaseUrl;
};

export const updateMasterApiBaseUrl = (newBaseUrl) => {
  masterApi.defaults.baseURL = newBaseUrl;
};

// Use these functions after your config has been loaded
loadConfig().then(() => {
  updateCoreApiBaseUrl(CORE_URL);
  updateSecurityApiBaseUrl(SECURITY_URL);
  updateMasterApiBaseUrl(MASTER_URL)
});

export { coreApi, securityApi,masterApi };
