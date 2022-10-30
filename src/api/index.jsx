import axios from "axios";

const URL = "http://localhost:5000";
// const URL = 'https://aqua-vku.herokuapp.com';

export const fetchProducts = (cookie, payload) =>
  axios.get(`${URL}`, {
    headers: {
      token: cookie,
    },
  });

export const register = (payload) =>
  axios.post(`${URL}/auth/register`, payload);
export const login = (payload) => axios.post(`${URL}/auth/login`, payload);
export const logout = () => axios.get(`${URL}/auth/logout`);

// cartlist
export const addProductToCartList = (payload) => {
  axios.put(`${URL}/me/addcart`, payload);
};

export const changeCartListItems = (payload) => {
  axios.put(`${URL}/me/updatecartlist`, payload);
};
