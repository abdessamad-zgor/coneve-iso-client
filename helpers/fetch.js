import _fetch from 'isomorphic-fetch';
import { useSelector } from 'react-redux';
const fetch = async function (config) {
  try {
    let idToken = useSelector((state) => {
      return state.user.info.idToken;
    });
    let response = await _fetch({ ...config, body: { ...config.body, idToken } });
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
