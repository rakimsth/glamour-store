import { URLS } from "../constants";
import API from "../utils/api";

export const list = async (limit, page) => {
  return await API.get(`${URLS.PRODUCTS}?limit=${limit}&page=${page}`);
};
