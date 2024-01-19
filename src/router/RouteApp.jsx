import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from '@/components/Header'
export default function RouteApp() {
  const element = useRoutes(routes)
  return (
    <div>
      <Header></Header>
      <div>
        {element}
      </div>
    </div>
  )
}
