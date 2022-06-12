import { GET_TOP_ARTISTS } from "../constants/types"

export const gettopartists = datatopartists => {
    return {
      type: GET_TOP_ARTISTS,
      payload: datatopartists
    }
  }