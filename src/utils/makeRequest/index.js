import axios from 'axios';
import { ERROR_ROUTE } from '../../constants/routes';
// import { BACKEND_URL, AUTH_URL } from '../../constants/apiEndPoints';

const makeRequest = async (
  baseURL,
  apiEndPoint,
  dynamicConfig = {},
  navigate
) => {
  try {
    const requestDetails = {
      baseURL: baseURL,
      ...apiEndPoint,
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  } catch (e) {
    if (navigate) {
      const errorStatus = e.response?.status;
      if (errorStatus) {
        navigate(`${ERROR_ROUTE}/${errorStatus}`);
      } else {
        navigate(ERROR_ROUTE);
      }
    }
  }
};

export default makeRequest;
