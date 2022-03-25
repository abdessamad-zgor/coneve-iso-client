import axios from 'axios';
const fetch = async function (config) {
  try {
    let response = await axios({ ...config, data: { ...config.body } });

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default fetch;
