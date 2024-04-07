import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/user/user.model";

const users: IUser[] = [];

const userSlice: any = createSlice({
  name: "user",
  initialState: users,
  reducers: {
    userGetAll: (state: any, action: any) => ({
      ...state,
      users: action.payload,
    }),
  },
});
export const { userGetAll } = userSlice.actions;
export default userSlice.reducer;
