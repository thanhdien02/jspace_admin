import { createSlice } from "@reduxjs/toolkit";
// import { IUser } from "../../models/user/user.model";

// const users: IUser[] = [];

interface IUser {
  users: any;
  paginationUser?: any;
  loadingUser?: boolean;
}

const init: IUser = {
  users: [],
  paginationUser: {},
  loadingUser: false,
};

const userSlice: any = createSlice({
  name: "user",
  initialState: init,
  reducers: {
    userGetUsers: () => {},
    userUpdateUserRedux: (state: any, action: any) => ({
      ...state,
      users: action.payload.users,
    }),
    userUpdatePaginaRedux: (state: any, action: any) => ({
      ...state,
      paginationUser: action.payload.paginationUser,
    }),
    userUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingUser: action.payload.loadingUser,
    }),
    userUpdateUser: (state: any) => ({
      ...state,
    }),
  },
});
export const {
  userGetUsers,
  userUpdateUserRedux,
  userUpdateUser,
  userUpdateLoadingRedux,
  userUpdatePaginaRedux,
} = userSlice.actions;
export default userSlice.reducer;
