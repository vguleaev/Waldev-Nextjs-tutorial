import axios from 'axios';
import { axiosGetCancellable } from '../helpers/axios.helper';

const axiosConfig = {
  baseURL: 'https://api.github.com/',
  auth: {
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET
  }
};

function searchRepos(searchText, language) {
  const query = language ? `${searchText}+language:${language}` : searchText;

  if (isServer()) {
    return axios.get(
      `search/repositories?q=${query}&sort=stars&order=desc`,
      axiosConfig
    );
  }

  return axiosGetCancellable(`api/search?q=${query}&sort=stars&order=desc`);
}

function isServer() {
  return typeof window === 'undefined';
}

export { searchRepos };
