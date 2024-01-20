import React from 'react';
import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';
export default function Front() {
  return (
    <div>
      <Header></Header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
