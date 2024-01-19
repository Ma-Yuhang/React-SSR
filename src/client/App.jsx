import React from 'react'
import '@/asset/global.css'
import RouteApp from '@/router/RouteApp';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <RouteApp />
    </BrowserRouter>
  )
}
