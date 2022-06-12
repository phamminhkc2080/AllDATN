import { GET_CATEGORIES } from "../constants/types";

export const getcategories = (datacategories) => {
  return {
    type: GET_CATEGORIES,
    payload: datacategories,
  };
};
