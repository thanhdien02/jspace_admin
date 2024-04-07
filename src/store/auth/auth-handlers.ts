import { put } from "redux-saga/effects";

function* handleAuthLogin(payload: any) {
  // const {email, password} = payload;

  // {email, password}: {email: string; password: string}

  try {
    // console.log(email, password);
    console.log("🚀 ~ function*handleAuthLogin ~ payload:", payload);
    
  } catch (error) {}
}
export { handleAuthLogin };
