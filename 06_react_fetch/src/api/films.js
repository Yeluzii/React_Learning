import { get } from "./request";

const API_KEY = "f68837031898429ddcc20bf18c726465";
const BASE_URL = "https://apis.tianapi.com/film/index";

export const getFilms = () => {
  return get(BASE_URL, {
    key: API_KEY,
    num: 18,
  });
};