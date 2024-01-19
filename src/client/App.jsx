import React from 'react'
import '@/asset/global.css'
import RouteApp from '@/routes/RouteApp';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <RouteApp />
    </Router>
  )
}
