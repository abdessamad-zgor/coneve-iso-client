import _fetch from 'isomorphic-fetch';
const fetch = async function (config) {
  try {
    let { url, ...options } = config;
    let response = await _fetch(url, { ...options });
    let data = await response.json();

    if (response.status >= 400) {
      throw new Error(data.message);
    }
    return data;
  } catch (e) {
    throw e;
  }
};

export default fetch;
