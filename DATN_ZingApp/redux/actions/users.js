import { SIGN_IN } from "../constants/types"

export const signInAction = (isSignIn,idUser,username) => {
    return {
      type: SIGN_IN,
       isSignIn,
    idUser,
     username
    }
  }