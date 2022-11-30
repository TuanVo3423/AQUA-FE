import axios from "axios";

// export const URL = "http://localhost:5000";
export const URL = "https://aqua-vku.herokuapp.com";

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
  console.log("cartlist axios : ", payload);
  axios.put(`${URL}/me/updatecartlist`, payload);
};

export const checkout = (payload) => {
  axios.put(`${URL}/me/updatehistory`, payload);
};

export const PaginationAPI = (payload) => {
  return axios.get(`${URL}/products/shop?page=${payload}`, payload);
};

export const filterAPI = (payload) => {
  return axios.get(`${URL}/products/shop/filter?category=${payload}`, payload);
};

export const fetchComments = (payload) => {
  return axios.get(`${URL}/comments?id=${payload}`, payload);
};

export const fetchChat = (payload) => {
  return axios.get(`${URL}/chat?id=${payload}`, payload);
};
