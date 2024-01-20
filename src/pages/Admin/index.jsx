import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Admin() {
  return (
    <div>
      <h1>后台管理</h1>
      <Outlet />
    </div>
  );
}
