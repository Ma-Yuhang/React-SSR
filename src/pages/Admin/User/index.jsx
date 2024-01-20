import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '@/store/userSlice';
export default function User() {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(userInfo);
  }, []);
  return (
    <div>
      <h2>用户管理</h2>
      {userInfo &&
        userInfo.map((user, index) => {
          return (
            <ul key={index}>
              <li>姓名：{user.name}</li>
              <li>年龄：{user.age}</li>
            </ul>
          );
        })}
      <button
        onClick={() => {
          dispatch(addUser({ name: ' guanyuxun', age: 23 }));
        }}
      >
        添加用户
      </button>
    </div>
  );
}
