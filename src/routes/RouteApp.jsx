import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Movies from '@/pages/Movies'
import NotFound from '@/pages/NotFound'
export default function RouteApp() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
