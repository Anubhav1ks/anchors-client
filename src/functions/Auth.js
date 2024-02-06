import Axios from 'axios';
import cookie from 'react-cookies';
import { API_URI } from '../Constant';
import { handelError, header } from './Axios';
import { getExpireDate } from '.';

const TOKEN = '_e_token_';
const ACCESS_TOKEN = '_access_token_';


export const requestAuth = async (creds) => {
  return await Axios.post(`${API_URI}/api/auth/signin`, creds, header)
    .then(({ data }) => data)
    .catch(handelError);
};

export const isAuth = () => {
  const token = cookie.load(TOKEN);
  if (!token || token === '') return false;
  else return true;
};

export const saveToken = (Token,time) => {
  if (Token) cookie.save(TOKEN, Token, { expires: getExpireDate(time) });
};

export const saveRefresToken = (Token,time) => {
  if (Token) cookie.save(ACCESS_TOKEN, Token, { expires: getExpireDate(time) });
};

export const getToken = () => {
  return cookie.load(TOKEN);
};

export const removeToken = () => {
  cookie.remove(TOKEN);
  cookie.remove(ACCESS_TOKEN);
};
