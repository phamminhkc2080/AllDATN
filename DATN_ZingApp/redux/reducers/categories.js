import { GET_CATEGORIES } from "../constants/types";

const dataCategories = [];

export const reducerCategories = (state = dataCategories, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};


