import { SIGN_IN } from "../constants/types";

const dataUser={
  idUser:'',
  username:'',
  isSignIn:false
};
export const  reducerIsSignin = (state = dataUser, action) => {
  switch (action.type) {
    case SIGN_IN:
      return action;
    default:
      return state;
  }
};


