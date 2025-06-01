import axios from 'axios';

export const NodeURL = 'http://localhost:4000';
// export const NodeURL = 'https://einstro-backend-t1zr.onrender.com';
// export const NodeURL = 'https://api.einstrostudyabroad.com';


export const client = axios.create({
  baseURL: NodeURL,
});

client.defaults.responseType = 'json';

client.interceptors.request.use(function (config) {
  const authToken = localStorage.getItem('app-token');

  if (authToken) {
    config.headers['Authorization'] = authToken;
  }

  return config;
});

const request = (options) => {
  const onSuccess = (response) => {
    /* SESSION HANDLING:
			- When Server returns "00" -> which means the session has expired  
			- Pushes the URL to Login Page -> "/login"
		*/

    if (response?.data?.status === '00') {
      localStorage.removeItem('app-token');
      window.location = '/';
    }
    return response.data; // This in turn returns the data from the server when status is 1
  };
  const onError = (error) => {
    if (error.response) {
      // Request was made but server responded with something other than 2xx
    } else {
      // Something else happened while setting up the request triggered the error
    }
    return Promise.reject(error.response || error.message);
  };
  return client(options).then(onSuccess).catch(onError);
};
export default request;
  