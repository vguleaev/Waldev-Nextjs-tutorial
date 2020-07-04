import axios from 'axios';

const cancelConfig = {
  request: null,
  cancelToken: null
};

async function axiosGetCancellable(url, config) {
  if (cancelConfig.request) {
    cancelConfig.request.cancel('canceled');
  }

  cancelConfig.request = axios.CancelToken.source();
  cancelConfig.cancelToken = cancelConfig.request.token;
  Object.assign(cancelConfig, config);

  try {
    const res = await axios.get(url, cancelConfig);
    return res;
  } catch (error) {
    if (error.message !== 'canceled') {
      throw error;
    }
  }
}

export { axiosGetCancellable };
