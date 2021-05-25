import axios from 'axios';

function setAccessToken(data: any) {
  axios.defaults.headers.common.Authorization = `${data}`;
  axios.defaults.headers.common['content-type'] = 'application/json';
  axios.defaults.headers.common.accept = 'application/json';
}

function removeAccessToken() {
  if (axios.defaults.headers.common.Authorization) delete axios.defaults.headers.common.Authorization;
}

export default {
  setAccessToken,
  removeAccessToken
}