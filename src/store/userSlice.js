import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    userInfo: [
      {
        name: 'mayuhang',
        age: 22
      }
    ]
  },
  reducers: {
    // 添加用户
    addUser(state, actions) {
      console.log(actions, 'actions');
      const newUserInfo = [...state.userInfo]
      newUserInfo.push(actions.payload)
      state.userInfo = newUserInfo
    }
  },
})

export default userSlice.reducer
export const { addUser } = userSlice.actions