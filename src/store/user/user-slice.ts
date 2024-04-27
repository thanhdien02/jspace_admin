import { createSlice } from "@reduxjs/toolkit";
// import { IUser } from "../../models/user/user.model";

// const users: IUser[] = [];

interface IUser {
  users: any;
  pagina?: any;
  loading?: boolean;
}

const init: IUser = {
  users: [],
  pagina: {},
  loading: false,
};

const userSlice: any = createSlice({
  name: "user",
  initialState: init,
  reducers: {
    userGetAll: () => {},
    userUpdateUserRedux: (state: any, action: any) => ({
      ...state,
      users: action.payload.users,
    }),
    userUpdatePaginaRedux: (state: any, action: any) => ({
      ...state,
      pagina: action.payload.pagina,
    }),
    userUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loading: action.payload.loading,
    }),
    userUpdateUser: (state: any) => ({
      ...state,
    }),
  },
});
export const {
  userGetAll,
  userUpdateUserRedux,
  userUpdateUser,
  userUpdateLoadingRedux,
  userUpdatePaginaRedux,
} = userSlice.actions;
export default userSlice.reducer;
